import { Styles, StyleSheet, Text, View } from '@react-pdf/renderer'
import { useTheme } from '../theme'
import { cn } from '../utils/cn'
import React from 'react'
import { LucideProps } from "lucide-react"

export interface IconTextProps {
  style?: Styles[string]
  text: string
  Icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    // TODO:
    // fontFamily: 'Raleway',
    fontSize: 8,
    marginLeft: 4,
  },
})

const IconText = ({ style, text, Icon }: IconTextProps) => {
  const theme = useTheme()

  return (
    <View style={cn(styles.container, style)}>
      <Icon size={10} />
      <Text style={[styles.text,
      { color: theme.colors.font }
      ]}>{text}</Text>
    </View>
  )
}


export default IconText;
