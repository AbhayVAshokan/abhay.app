import { cn } from '../utils/cn'
import { useTheme } from '../theme'
import { Styles, Link, StyleSheet, Text, View } from '@react-pdf/renderer'
import IconText from './ui/icon-text'
import { MapPin } from 'lucide-react'
import Work from './work'

export interface WorkProps {
  endAt?: string
  companyUrl?: string
  startAt: string
  title: string
  companyName: string
  location: string
  description?: string
  children: React.ReactNode
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  title: {
    fontSize: 10,
    fontFamily: 'Raleway',
    fontWeight: 'semibold',
    // marginBottom: 4,
  },
  description: {
    fontSize: 9,
    fontFamily: 'Raleway',

  },
  date: {
    fontSize: 8,
    fontFamily: "Raleway",
    marginRight: 16,
  }
})


const Talk = ({
  style,
  title,
  subtitle,
  link,
  location,
  date,
}: WorkProps) => {
  const theme = useTheme()
  const dateText = new Date(date).toLocaleString("default", { month: "short", year: "numeric" })
  console.log(dateText)

  return (
    <View style={style}>
      {link ? <Work.WorkPlace url={link}>{title}</Work.WorkPlace> : <Text style={styles.title}>{title}</Text>}
      <View style={styles.row}>
        <Text style={styles.date}>{dateText}</Text>
        <IconText text={location} Icon={MapPin} />
      </View>
      <Text style={[styles.description,
        // { color: theme.colors.text }
      ]}>
        {subtitle}
      </Text>
    </View>
  )
}

export default Talk;
