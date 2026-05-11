import { ChevronRight } from "lucide-react-native";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { RemoteIcon } from "../../components/RemoteIcon";
import type { AppColors } from "../../theme/palette";
import type { DeckButton } from "../../types/deck";

type DeckButtonListProps = {
  buttons: DeckButton[];
  colors: AppColors;
  onEdit: (buttonId: string) => void;
  onRun: (buttonId: string) => void;
};

export function DeckButtonList({
  buttons,
  colors,
  onEdit,
  onRun,
}: DeckButtonListProps) {
  const styles = createStyles(colors);

  return (
    <FlatList
      contentContainerStyle={styles.content}
      data={buttons}
      keyExtractor={(item) => item.id}
      renderItem={({ item, index }) => (
        <View style={styles.row}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={`Run ${item.label || "button"}`}
            onPress={() => onRun(item.id)}
            style={({ pressed }) => [
              styles.runArea,
              pressed && styles.pressed,
            ]}
          >
            <Text style={styles.index}>{String(index + 1).padStart(2, "0")}</Text>
            <RemoteIcon colors={colors} icon={item.icon} size={42} />
            <View style={styles.textGroup}>
              <Text numberOfLines={1} style={styles.title}>
                {item.label || "Untitled button"}
              </Text>
              <Text numberOfLines={1} style={styles.meta}>
                {buttonMeta(item)}
              </Text>
            </View>
          </Pressable>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={`Edit ${item.label || "button"}`}
            onPress={() => onEdit(item.id)}
            style={({ pressed }) => [
              styles.editArea,
              pressed && styles.pressed,
            ]}
          >
            <ChevronRight color={colors.muted} size={20} strokeWidth={2.4} />
          </Pressable>
        </View>
      )}
      showsVerticalScrollIndicator={false}
    />
  );
}

function buttonMeta(button: DeckButton) {
  const count = button.actions?.length ?? 0;
  if (count === 0) return "Tap to run";
  if (count === 1) return "1 action";
  return `${count} actions`;
}

function createStyles(colors: AppColors) {
  return StyleSheet.create({
    content: {
      gap: 9,
      paddingBottom: 34,
      paddingHorizontal: 16,
      paddingTop: 8,
    },
    row: {
      alignItems: "center",
      backgroundColor: colors.panel,
      borderColor: colors.border,
      borderRadius: 8,
      borderWidth: 1,
      flexDirection: "row",
      minHeight: 72,
      overflow: "hidden",
      shadowColor: colors.shadow,
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 1,
      shadowRadius: 12,
    },
    runArea: {
      alignItems: "center",
      flex: 4,
      flexDirection: "row",
      gap: 12,
      minHeight: 72,
      paddingLeft: 12,
      paddingRight: 8,
    },
    editArea: {
      alignItems: "center",
      alignSelf: "stretch",
      borderLeftColor: colors.border,
      borderLeftWidth: 1,
      flex: 1,
      justifyContent: "center",
      minWidth: 58,
    },
    pressed: {
      opacity: 0.74,
    },
    index: {
      color: colors.muted,
      fontSize: 12,
      fontWeight: "900",
      width: 24,
    },
    textGroup: {
      flex: 1,
      gap: 4,
    },
    title: {
      color: colors.text,
      fontSize: 16,
      fontWeight: "900",
    },
    meta: {
      color: colors.muted,
      fontSize: 12,
      fontWeight: "800",
    },
  });
}
