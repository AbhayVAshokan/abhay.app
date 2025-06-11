import { Styles, StyleSheet, Text, View } from "@react-pdf/renderer";
import DateRange from "./ui/date-range";
import { cn } from "../utils/cn";
import { useTheme } from "../theme";

export interface EducationProps {
  style?: Styles[string];
  endAt?: Date;
  startAt: Date;
  title: string;
  cgpa: string;
  subtitle: string;
}

const Education: React.FC<React.PropsWithChildren<EducationProps>> = ({
  style,
  title,
  startAt,
  endAt,
  cgpa,
  subtitle,
}) => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    row: {
      flexDirection: "row",
      gap: 16,
    },
    title: {
      fontWeight: "semibold",
    },
    subtitle: {
      fontSize: 8,
    },
    cgpa: {
      fontSize: 8,
    },
  });

  return (
    <View style={style}>
      <Text style={cn(styles.title, style)}>{title}</Text>
      <Text style={cn(styles.subtitle, { color: theme.darkGray })}>
        {subtitle}
      </Text>
      <View style={styles.row}>
        <DateRange
          style={{ marginBottom: 4 }}
          startAt={startAt}
          endAt={endAt}
        />
        <Text style={cn(styles.cgpa, { color: theme.darkGray })}>
          cgpa {cgpa}
        </Text>
      </View>
    </View>
  );
};

export default Education;
