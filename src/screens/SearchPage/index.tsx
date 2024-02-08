import { NavigationProp, useNavigation } from "@react-navigation/native";
import { toJS } from "mobx";
import { observer } from "mobx-react";
import React, { memo, useCallback, useRef } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, {
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { SimpleArrowRight } from "../../assets/icons/SimpleArrowRight";
import { ScreenWrapper } from "../../components/ScreenWrapper";
import { SearchInput } from "../../components/SearchInput";
import { COLORS } from "../../constants/colors";
import { RootRouterParamList } from "../../navigation/Router";
import { City, SearchCity } from "../../store/citySearch";
import { rem } from "../../utils/rn-units";
import { font } from "../../utils/styles";

export const SearchPage = observer(() => {
  const valueRef = useRef<string>("");
  const visibleItemList = useSharedValue<
    { isViewable: boolean; item: City; key: string }[]
  >([]);

  const handleVisibleStateChange = useCallback(({ viewableItems }) => {
    visibleItemList.value = JSON.parse(JSON.stringify(viewableItems));
  }, []);

  return (
    <ScreenWrapper>
      <SearchInput valueRef={valueRef} />
      <View style={styles.separator}>
        <Text style={styles.tip}>
          {SearchCity.resultsCount
            ? `Found ${SearchCity.resultsCount} results`
            : valueRef.current
              ? "No results found"
              : "Enter at least 3 characters"}
        </Text>
      </View>
      <FlatList
        onViewableItemsChanged={handleVisibleStateChange}
        contentContainerStyle={styles.container}
        data={SearchCity.cities}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <CityEntry item={item} viewableItems={visibleItemList} />
        )}
      />
    </ScreenWrapper>
  );
});

const CityEntry = memo(
  ({
    item,
    viewableItems,
  }: {
    item: City;
    viewableItems: SharedValue<
      { isViewable: boolean; item: City; key: string }[]
    >;
  }) => {
    const { navigate } = useNavigation<NavigationProp<RootRouterParamList>>();
    const copy = toJS(item);

    const animateShowIn = useAnimatedStyle(() => {
      const isVisible = Boolean(
        viewableItems.value.filter(
          (i) => i && i.isViewable && i.item.id === copy.id
        ).length
      );

      return {
        opacity: withTiming(isVisible ? 1 : 0),
        transform: [{ scale: withTiming(isVisible ? 1 : 0.6) }],
      };
    }, []);

    const handleNavigate = useCallback(() => {
      navigate("WeatherPage", { coordinates: copy });
    }, []);

    return (
      <TouchableOpacity onPress={handleNavigate}>
        <Animated.View style={[styles.entry, animateShowIn]}>
          <View>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.subtitle}>{item.country}</Text>
          </View>
          <SimpleArrowRight width={rem(14)} height={rem(18)} />
        </Animated.View>
      </TouchableOpacity>
    );
  }
);

const styles = StyleSheet.create({
  subtitle: {
    ...font(14, 16, "heavy", "gray"),
  },
  title: {
    ...font(18, 22, "bold", "white"),
  },
  separator: {
    height: rem(35),
  },
  entry: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.cardBackground,
    padding: rem(16),
    borderRadius: rem(10),
  },
  container: {
    paddingHorizontal: rem(24),
    gap: rem(12),
  },
  tip: {
    ...font(14, 18, "heavy", "white"),
    paddingHorizontal: rem(24),
    marginLeft: rem(15),
    position: "absolute",
    paddingVertical: rem(8),
  },
});
