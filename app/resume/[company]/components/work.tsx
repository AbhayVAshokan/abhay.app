import * as React from "react";
import { cn } from "../utils/cn";
import { useTheme } from "../theme";
import { Styles, Link, StyleSheet, Text, View } from "@react-pdf/renderer";
import IconText from "./ui/icon-text";
import { MapPin } from "lucide-react";
import DateRange from "./ui/date-range";

export interface WorkProps {
  style?: Styles[string];
  endAt?: Date;
  companyUrl?: string;
  startAt: Date;
  title: string;
  companyName: string;
  location: string;
  description?: string;
  children: React.ReactNode;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 11,
    fontWeight: "semibold",
  },
  metaInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  workPlace: {
    fontSize: 10,
    fontWeight: "semibold",
  },
  content: {
    marginTop: 10,
  },
});

const WorkPlace: React.FC<
  React.PropsWithChildren<{ style?: Styles[string]; url?: string }>
> = ({ children, url, style }) => {
  const theme = useTheme();

  const commonStyle = cn(styles.workPlace, { color: theme.primary }, style);

  if (url) {
    return (
      <Link src={url}>
        <Text style={commonStyle}>{children}</Text>
      </Link>
    );
  }

  return <Text style={commonStyle}>{children}</Text>;
};

const Work = ({
  style,
  title,
  companyName,
  companyUrl,
  location,
  startAt,
  endAt,
  children,
}: WorkProps) => {
  return (
    <View style={style}>
      <Text style={cn(styles.title, style)}>{title}</Text>
      <View style={styles.metaInfoContainer}>
        {companyName ? (
          <WorkPlace url={companyUrl}>{companyName}</WorkPlace>
        ) : null}
        <DateRange
          showDiff
          style={{ marginLeft: companyName ? "auto" : 0, marginRight: 16 }}
          startAt={startAt}
          endAt={endAt}
        />
        <IconText text={location} Icon={MapPin} />
      </View>
      {React.Children.count(children) > 0 ? (
        <View style={styles.content}>{children}</View>
      ) : null}
    </View>
  );
};

Work.WorkPlace = WorkPlace;

export default Work;
