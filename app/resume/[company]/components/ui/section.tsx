import * as React from 'react'
import { cn } from '../../utils/cn'
import { Styles, StyleSheet, Text, View } from '@react-pdf/renderer'
import { useTheme } from '../../theme'

export interface SectionProps {
  style?: Styles[string]
  title: string
  spacing: number
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
  title: {
    fontSize: 9,
    textTransform: 'uppercase',
    fontFamily: 'Raleway',
    fontWeight: 'bold',
  },
  separator: {
    height: 2,
    marginTop: 1,
    marginBottom: 12,
  },
})

const Section: React.FC<React.PropsWithChildren<SectionProps>> = ({
  style,
  title,
  spacing,
  children,
}) => {
  const theme = useTheme()

  const childCount = React.Children.count(children)

  return (
    <View style={cn(styles.container, style)}>
      <Text style={[styles.title, { color: theme.colors.gray }]}>{title}</Text>
      <View
        style={[styles.separator, { backgroundColor: theme.colors.gray }]}
      />
      {React.Children.map(children, (child, index) => {
        const mb = index + 1 === childCount ? 0 : spacing
        const style = { marginBottom: mb }

        // @ts-expect-error
        return mb ? React.cloneElement(child, { style }) : child
      })}
    </View>
  )
}

const Left = ({ children }) => {
  const styles = StyleSheet.create({
    leftColumn: {
      flexGrow: 1,
      marginRight: 16,
      width: '55%',
    },
  });

  return <View style={styles.leftColumn}>
    {children}
  </View>
}

const Right = ({ children }) => {
  const styles = StyleSheet.create({
    rightColumn: {
      flexGrow: 1,
      width: '40%',
    },
  });

  return <View style={styles.rightColumn}>
    {children}
  </View>
}

Section.Left = Left;
Section.Right = Right;

export default Section;
