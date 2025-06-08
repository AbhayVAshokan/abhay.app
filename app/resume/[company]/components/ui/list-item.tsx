import { cn } from '../../utils/cn'
import { useTheme } from '../../theme'
import { Styles, StyleSheet, Text, View } from '@react-pdf/renderer'
import { Dot } from 'lucide-react'
import { LucideIconToPDF } from './icon-text'

export interface ListItemProps {
  style?: Styles[string]
  children: string
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  text: {
    fontSize: 9,
    fontFamily: 'Raleway',
    flex: 1,
  },
})

const ListItem = ({ style, children }: ListItemProps) => {
  const theme = useTheme()

  return (
    <View style={cn(styles.container, style)}>
      <LucideIconToPDF Icon={Dot} size={10} />
      <Text style={[styles.text, { color: theme.colors.text }]}>
        {children}
      </Text>
    </View>
  )
}

export default ListItem;
