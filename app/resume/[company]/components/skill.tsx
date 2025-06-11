import { Styles, StyleSheet, Text, View } from "@react-pdf/renderer";
import { useTheme } from "../theme";
import { cn } from "../utils/cn";

interface SkillProps {
  style?: Styles[string];
  skill: string;
  level: number;
}

interface ScoreProps {
  level: number;
}

const Score = ({ level }: ScoreProps) => {
  const theme = useTheme();
  const styles = StyleSheet.create({
    row: {
      flexDirection: "row",
    },
    item: {
      height: 5,
      width: 12,
    },
    itemRight: {
      marginRight: 2,
    },
    filled: {
      backgroundColor: theme.gray,
    },
    unfilled: {
      backgroundColor: theme.lightGray,
    },
  });

  const getColor = (index: number, even = false) => {
    return index * 2 < level - Number(even) ? styles.filled : styles.unfilled;
  };

  return (
    <View style={styles.row}>
      {Array.from({ length: 5 }).map((_, index) => (
        <View key={index} style={styles.row}>
          <View style={cn(styles.item, getColor(index))}></View>
          <View
            style={cn(styles.item, styles.itemRight, getColor(index, true))}
          ></View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  scoreLabel: {
    fontSize: 8,
    marginLeft: "auto",
    marginRight: 5,
  },
});

const Skill = ({ style, skill, level }: SkillProps) => {
  return (
    <View style={cn(styles.container, style)}>
      <Text>{skill}</Text>
      <Score level={level} />
    </View>
  );
};

export default Skill;
