import { RouteProp, useRoute } from "@react-navigation/native";
import { observer } from "mobx-react";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { ScreenWrapper } from "../../components/ScreenWrapper";
import { WeatherHeader } from "../../components/WeatherHeader";
import { WeatherMain, dateFormatter } from "../../components/WeatherMain";
import { WeatherTails } from "../../components/WeatherTails";
import { COLORS } from "../../constants/colors";
import { RootRouterParamList } from "../../navigation/Router";
import { WeatherAPI } from "../../store/weatherAPI";
import { rem } from "../../utils/rn-units";
import { font } from "../../utils/styles";

export const WeatherPage = observer(() => {
  const { params } = useRoute<RouteProp<RootRouterParamList, "WeatherPage">>();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const scrollRef = useRef<FlatList | null>(null);
  const { width } = useWindowDimensions();

  useEffect(() => {
    WeatherAPI.getWeather(params.coordinates);
  }, []);

  const handlePress = useCallback((index: number) => {
    setCurrentIndex(index);
    scrollRef.current &&
      scrollRef.current.scrollToIndex({
        index,
        animated: true,
        viewOffset: width / 2 - 50,
      });
  }, []);

  return (
    <ScreenWrapper>
      {WeatherAPI.data ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <WeatherHeader />
          <FlatList
            showsHorizontalScrollIndicator={false}
            ref={scrollRef}
            contentContainerStyle={styles.container}
            horizontal={true}
            data={WeatherAPI.data && WeatherAPI.data.list}
            renderItem={({ item, index }) => (
              <TouchableOpacity onPress={() => handlePress(index)}>
                <View
                  style={[
                    styles.date,
                    index === currentIndex && styles.date_active,
                  ]}
                >
                  <Text
                    style={[
                      styles.time,
                      index === currentIndex && styles.time_active,
                    ]}
                  >
                    {dateFormatter
                      .format(new Date(item.dt_txt))
                      .replace(",", "\n")}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
          <WeatherMain data={WeatherAPI.data} currentIndex={currentIndex} />
          <WeatherTails data={WeatherAPI.data} currentIndex={currentIndex} />
        </ScrollView>
      ) : (
        <View style={styles.flex}>
          <ActivityIndicator size={"large"} color={COLORS.white} />
        </View>
      )}
    </ScreenWrapper>
  );
});

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    transform: [{ scale: 1.5 }],
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    paddingRight: rem(24),
    paddingLeft: rem(24),
    gap: rem(10),
    paddingTop: rem(20),
  },
  time_active: {
    color: COLORS.white,
  },
  time: {
    textAlign: "center",
    ...font(14, 17, "bold", "gray"),
  },
  date_active: {
    borderColor: COLORS.white,
  },
  date: {
    borderColor: COLORS.transparent,
    borderWidth: rem(1),
    borderRadius: rem(5),
    paddingVertical: rem(15),
    paddingHorizontal: rem(15),
    backgroundColor: COLORS.cardBackground,
  },
});
