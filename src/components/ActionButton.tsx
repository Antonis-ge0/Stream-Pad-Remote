import type { ComponentType } from "react";
import { ActivityIndicator, Pressable, StyleSheet, Text } from "react-native";
import type { AppColors } from "../theme/palette";

type ActionButtonProps = {
  colors: AppColors;
  icon: ComponentType<{ color?: string; size?: number; strokeWidth?: number }>;
  label: string;
  onPress: () => void;
  size?: "default" | "compact";
  tone?: "primary" | "accent" | "danger" | "neutral";
  variant?: "default" | "drawerPrimary";
  busy?: boolean;
  disabled?: boolean;
  iconOnly?: boolean;
};

export function ActionButton({
  busy,
  colors,
  disabled,
  iconOnly,
  icon: Icon,
  label,
  onPress,
  size = "default",
  tone = "neutral",
  variant = "default",
}: ActionButtonProps) {
  const styles = createStyles(colors);
  const fg = tone === "neutral" ? colors.text : colors.primaryText;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      disabled={busy || disabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        styles[tone],
        size === "compact" && styles.compact,
        variant === "drawerPrimary" && styles.drawerPrimary,
        iconOnly && styles.iconOnly,
        (busy || disabled) && styles.disabled,
        pressed && styles.pressed,
      ]}
    >
      {busy ? (
        <ActivityIndicator color={fg} />
      ) : (
        <Icon color={fg} size={size === "compact" ? 16 : 18} strokeWidth={2.5} />
      )}
      {iconOnly ? null : (
        <Text
          numberOfLines={1}
          style={[
            styles.label,
            size === "compact" && styles.compactLabel,
            tone !== "neutral" && styles.inverted,
          ]}
        >
          {label}
        </Text>
      )}
    </Pressable>
  );
}

function createStyles(colors: AppColors) {
  return StyleSheet.create({
    button: {
      minHeight: 48,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      gap: 9,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: colors.border,
      backgroundColor: colors.panel,
      paddingHorizontal: 14,
    },
    neutral: {},
    compact: {
      flex: 1,
      gap: 6,
      minHeight: 44,
      paddingHorizontal: 8,
    },
    iconOnly: {
      minHeight: 44,
      paddingHorizontal: 0,
      width: 44,
    },
    primary: {
      backgroundColor: colors.primary,
      borderColor: colors.primary,
    },
    drawerPrimary: {
      borderRadius: 14,
      justifyContent: "flex-start",
      minHeight: 50,
      paddingVertical: 14,
      width: "100%",
    },
    accent: {
      backgroundColor: colors.accent,
      borderColor: colors.accent,
    },
    danger: {
      backgroundColor: colors.danger,
      borderColor: colors.danger,
    },
    disabled: {
      opacity: 0.5,
    },
    pressed: {
      opacity: 0.75,
    },
    label: {
      color: colors.text,
      fontSize: 15,
      fontWeight: "900",
    },
    compactLabel: {
      fontSize: 12,
    },
    inverted: {
      color: colors.primaryText,
    },
  });
}
