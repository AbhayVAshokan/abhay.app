import { Styles, StyleSheet, Text, View } from "@react-pdf/renderer";
import IconText from "./ui/icon-text";
import { MapPin } from "lucide-react";
import Work from "./work";

interface TalkProps {
  style?: Styles[string];
  title: string;
  subtitle: string;
  link: string;
  location: string;
  date: Date;
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  title: {
    fontWeight: "semibold",
  },
  date: {
    fontSize: 8,
    marginRight: 16,
  },
});

const Talk = ({ style, title, subtitle, link, location, date }: TalkProps) => {
  const dateText = new Date(date).toLocaleString("default", {
    month: "short",
    year: "numeric",
  });

  return (
    <View style={style}>
      {link ? (
        <Work.WorkPlace url={link}>{title}</Work.WorkPlace>
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}
      <View style={styles.row}>
        <Text style={styles.date}>{dateText}</Text>
        <IconText text={location} Icon={MapPin} />
      </View>
      <Text>{subtitle}</Text>
    </View>
  );
};

export default Talk;
