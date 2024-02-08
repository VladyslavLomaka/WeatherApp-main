import React, { memo, useCallback, useRef, useState } from "react";
import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS } from "../../constants/colors";
import { useDebounceWithCallback } from "../../hooks/useDebounceWithCallback";
import { SearchCity } from "../../store/citySearch";
import { rem } from "../../utils/rn-units";
import { font } from "../../utils/styles";

export const SearchInput = memo(
  ({ valueRef }: { valueRef: React.MutableRefObject<string | null> }) => {
    const [isFocused, setFocused] = useState(false);
    const inputRef = useRef<TextInput | null>(null);
    const debounce = useDebounceWithCallback("", 350, (text) => {
      valueRef.current = text;
      if (text.trim().length > 2) {
        SearchCity.searchCity(text);
      }
    });

    const onBlur = useCallback(() => {
      setFocused(false);
    }, []);

    const onFocus = useCallback(() => {
      setFocused(true);
    }, []);

    const onCancelPress = useCallback(() => {
      Keyboard.dismiss();
      inputRef.current && inputRef.current.clear();
    }, []);

    return (
      <View style={styles.inputWrapper}>
        <TextInput
          ref={inputRef}
          style={[styles.input, isFocused && styles.focusedInput]}
          autoCorrect={false}
          spellCheck={false}
          autoComplete={"off"}
          autoCapitalize={"none"}
          cursorColor={COLORS.white}
          selectionColor={COLORS.white}
          placeholder={"City Name"}
          placeholderTextColor={COLORS.gray}
          onChangeText={debounce}
          onBlur={onBlur}
          onFocus={onFocus}
        />
        <TouchableOpacity onPress={onCancelPress} style={styles.cancelWrapper}>
          <Text style={styles.cancel}>Cancel</Text>
        </TouchableOpacity>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: "row",
    gap: rem(16),
    paddingHorizontal: rem(24),
  },
  cancelWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  cancel: {
    ...font(16, 20, "bold", "blue"),
  },
  input: {
    flex: 1,
    padding: rem(12),
    borderWidth: rem(1),
    borderRadius: rem(16),
    backgroundColor: COLORS.cardBackground,
    ...font(14, 18, "medium", "white"),
    borderColor: COLORS.transparent,
  },
  focusedInput: {
    borderColor: COLORS.gray,
  },
});
