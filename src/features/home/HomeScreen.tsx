import { StyleSheet, Text, View } from "react-native";
import {
  Keyboard,
  Monitor,
  MousePointer2,
  Power,
  PowerOff,
} from "lucide-react-native";
import { ActionButton } from "../../components/ActionButton";
import { AppLogo } from "../../components/AppLogo";
import type { AppColors } from "../../theme/palette";

type HomeScreenProps = {
  colors: AppColors;
  onDesktop: () => void;
  onPower: () => void;
  onQuit: () => void;
  onSignIn: () => void;
  onTouchpad: () => void;
};

export function HomeScreen({
  colors,
  onDesktop,
  onPower,
  onQuit,
  onSignIn,
  onTouchpad,
}: HomeScreenProps) {
  const styles = createStyles(colors);

  return (
    <View style={styles.content}>
      <View style={styles.brand}>
        <AppLogo size={116} />
        <Text style={styles.title}>Stream Pad Remote</Text>
      </View>

      <View style={styles.actions}>
        <ActionButton
          colors={colors}
          icon={Power}
          label="Start PC"
          onPress={onPower}
          tone="neutral"
        />
        <ActionButton
          colors={colors}
          icon={Keyboard}
          label="Sign In"
          onPress={onSignIn}
          tone="neutral"
        />
        <ActionButton
          colors={colors}
          icon={Monitor}
          label="Desktop App"
          onPress={onDesktop}
          tone="neutral"
        />
        <ActionButton
          colors={colors}
          icon={MousePointer2}
          label="Touchpad"
          onPress={onTouchpad}
          tone="neutral"
        />
        <ActionButton
          colors={colors}
          icon={PowerOff}
          label="Quit"
          onPress={onQuit}
          tone="danger"
        />
      </View>
    </View>
  );
}

function createStyles(colors: AppColors) {
  return StyleSheet.create({
    content: {
      flex: 1,
      justifyContent: "center",
      gap: 34,
      paddingHorizontal: 24,
      paddingBottom: 42,
    },
    brand: {
      alignItems: "center",
      gap: 16,
    },
    title: {
      color: colors.text,
      fontSize: 28,
      fontWeight: "900",
      textAlign: "center",
    },
    actions: {
      gap: 12,
    },
  });
}
