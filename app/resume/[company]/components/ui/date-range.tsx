import { Styles } from '@react-pdf/renderer'
import IconText from './icon-text'
import { Calendar } from 'lucide-react'

export interface DateRangeProps {
  style?: Styles[string]
  startAt: string
  endAt?: string
  showDiff?: boolean
}

const formatDate = (dateString: string, format = 'LL/yyyy') => {
  return new Date().toLocaleString('default', { month: 'short', year: "numeric" })
}

const dateDifference = (date1, date2 = new Date().toDateString()) => {
  const start = new Date(date1);
  const end = new Date(date2);

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  if (years > 0) {
    return months > 0 ? `${years} years ${months} months` : `${years} years`
  }

  return `${months} months`;
}

const DateRange = ({ startAt, endAt, style, showDiff = false }: DateRangeProps) => {
  const endAtText = endAt ? formatDate(endAt) : "present"
  const diff = dateDifference(startAt, endAt);

  let text = `${formatDate(startAt)} - ${endAtText}`
  if (showDiff) text += ` (${diff})`

  return <IconText style={style} text={text} Icon={Calendar} />
}

export default DateRange;
