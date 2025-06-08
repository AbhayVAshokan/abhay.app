import { Styles, StyleSheet, Text, View } from '@react-pdf/renderer'
import DateRange from './ui/date-range'
import { cn } from '../utils/cn'
import { useTheme } from '../theme'

export interface EducationProps {
  style?: Styles[string]
  endAt?: string
  startAt: string
  title: string
  almaMater: string
  location: string
}

const Education: React.FC<
  React.PropsWithChildren<EducationProps>
> = ({ style, title, startAt, endAt, cgpa, subtitle }) => {
  const theme = useTheme()

  const styles = StyleSheet.create({
    row: {
      flexDirection: 'row',
      gap: 16
    },
    title: {
      fontSize: 9,
      fontFamily: 'Raleway',
      marginBottom: 2,
    },
    subtitle: {
      fontSize: 8,
      fontFamily: "Raleway"
    },
    cgpa: {
      fontSize: 8,
      fontFamily: 'Raleway',
    }
  })

  return (
    <View style={style}>
      <Text style={cn(styles.title, style)}>{title}</Text>
      <Text style={cn(styles.subtitle, { color: theme.colors.font })}>{subtitle}</Text>
      <View style={styles.row}>
        <DateRange style={{ marginBottom: 4 }} startAt={startAt} endAt={endAt} />
        <Text style={cn(styles.cgpa, { color: theme.colors.font })}>cgpa {cgpa}</Text>
      </View>
    </View>
  )
}


export default Education;
