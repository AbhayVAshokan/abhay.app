import { Styles } from "@react-pdf/renderer";
import IconText from "./icon-text";
import { Calendar } from "lucide-react";

export interface DateRangeProps {
  style?: Styles[string];
  startAt: Date;
  endAt?: Date;
  showDiff?: boolean;
}

const formatDate = (dateString: Date) => {
  return new Date(dateString).toLocaleString("default", {
    month: "short",
    year: "numeric",
  });
};

const dateDifference = (
  date1: Date | string,
  date2: Date | string | undefined,
) => {
  const start = new Date(date1);
  const end = new Date(date2 ?? new Date());

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth() + 1;

  if (months < 0) {
    years--;
    months += 12;
  }

  if (years > 0) {
    return months > 0 ? `${years} years ${months} months` : `${years} years`;
  }

  return `${months} months`;
};

const DateRange = ({
  startAt,
  endAt,
  style,
  showDiff = false,
}: DateRangeProps) => {
  const endAtText = endAt ? formatDate(endAt) : "present";
  const diff = dateDifference(startAt, endAt);

  let text = `${formatDate(startAt)} - ${endAtText}`;
  if (showDiff) text += ` (${diff})`;

  return <IconText style={style} text={text} Icon={Calendar} />;
};

export default DateRange;
