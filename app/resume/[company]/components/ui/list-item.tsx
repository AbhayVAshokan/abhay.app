import { cn } from "../../utils/cn";
import { Styles, StyleSheet, Text, View } from "@react-pdf/renderer";
import { Dot } from "lucide-react";
import { LucideIconToPDF } from "./icon-text";

export interface ListItemProps {
  style?: Styles[string];
  children: string;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 2,
  },
  text: {
    flex: 1,
  },
});

const ListItem = ({ style, children }: ListItemProps) => {
  return (
    <View style={cn(styles.container, style)}>
      <LucideIconToPDF Icon={Dot} size={10} />
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default ListItem;
