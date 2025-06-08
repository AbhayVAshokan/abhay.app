import * as React from 'react'
import { cn } from '../utils/cn'
import { useTheme } from '../theme'
import { Styles, Link, StyleSheet, Text, View } from '@react-pdf/renderer'
import IconText from './ui/icon-text'
import { MapPin } from 'lucide-react'
import DateRange from './ui/date-range'

export interface WorkProps {
  style?: Styles[string]
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
  title: {
    fontSize: 12,
    fontFamily: 'Raleway',
    fontWeight: 'semibold',
  },
  metaInfoContainer: {
    flexDirection: 'row',
    marginTop: 4,
    alignItems: 'center',
  },
  workPlace: {
    fontSize: 10,
    fontFamily: 'Raleway',
    fontWeight: 'semibold',
  },
  description: {
    fontSize: 9,
    fontFamily: 'Raleway',
    marginTop: 4,
  },
  content: {
    marginTop: 10,
  },
})

const WorkPlace: React.FC<
  React.PropsWithChildren<{ style?: Styles[string]; url?: string }>
> = ({ children, url, style }) => {
  const theme = useTheme()

  const commonStyle = cn(
    styles.workPlace,
    { color: theme.colors.primary },
    style,
  )

  if (url) {
    return (
      <Link src={url}>
        <Text style={commonStyle}>{children}</Text>
      </Link>
    )
  }

  return <Text style={commonStyle}>{children}</Text>
}

const Work = ({
  style,
  title,
  companyName,
  companyUrl,
  location,
  startAt,
  endAt,
  description,
  children,
}: WorkProps) => {
  const theme = useTheme()

  return (
    <View style={style}>
      <Text style={cn(styles.title, style)}>{title}</Text>
      <View style={styles.metaInfoContainer}>
        {companyName ? (
          <WorkPlace url={companyUrl}>{companyName}</WorkPlace>
        ) : null}
        <DateRange
          showDiff
          style={{ marginLeft: companyName ? 'auto' : 0, marginRight: 16 }}
          startAt={startAt}
          endAt={endAt}
        />
        <IconText text={location} Icon={MapPin} />
      </View>
      {description && (
        <Text style={[styles.description,
          // { color: theme.colors.text }
        ]}>
          {description}
        </Text>
      )}
      {React.Children.count(children) > 0 ? (
        <View style={styles.content}>{children}</View>
      ) : null}
    </View>
  )
}

Work.WorkPlace = WorkPlace;

export default Work;
