
import { Styles, StyleSheet, Text, View } from '@react-pdf/renderer'
import { useTheme } from '../theme'
import { cn } from '../utils/cn'
import { LucideIconToPDF } from './icon-text'
import { Circle, Dot } from 'lucide-react'

export interface LanguageProps {
  style?: Styles[string]
  name: string
  scoreLabel: string
  score: number
}

interface ScoreProps {
  level: number
}

const Score = ({ level }: ScoreProps) => {
  const theme = useTheme()
  const styles = StyleSheet.create({
    row: {
      flexDirection: "row",
    },
    item: {
      height: 5,
      width: 12,
    },
    itemRight: {
      marginRight: 2
    },
    filled: {
      backgroundColor: theme.colors.gray
    },
    unfilled: {
      backgroundColor: theme.colors.lightGray
    }
  });

  const getColor = (index: number, even = false) => { return (index * 2 < level - Number(even)) ? styles.filled : styles.unfilled }

  return (
    <View style={styles.row}>
      {Array.from({ length: 5 }).map((_, index) => (
        <View key={index} style={styles.row}>
          <View style={cn(styles.item, getColor(index))}></View>
          <View style={cn(styles.item, styles.itemRight, getColor(index, true))}></View>
        </View>
      ))}
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between"
  },
  skill: {
    fontFamily: 'Raleway',
    fontSize: 9,
  },
  scoreLabel: {
    fontFamily: 'Raleway',
    fontSize: 8,
    marginLeft: 'auto',
    marginRight: 5,
  },
})

const Skill = ({ style, skill, level }: LanguageProps) => {
  const theme = useTheme()

  return (
    <View style={cn(styles.container, style)}>
      <Text style={styles.skill}>{skill}</Text>
      <Score level={level} />
    </View>
  )
}

export default Skill;
