import * as React from "react";
import { cn } from '../utils/cn'
import { useTheme } from '../theme'
import { Styles, Link, StyleSheet, Text, View } from '@react-pdf/renderer'
import Work from "./work";

export interface ProjectProps {
  style?: Styles[string]
  projectUrl?: string
  title: string
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  title: {
    fontSize: 10,
    fontFamily: 'Raleway',
    fontWeight: 'semibold',
  },
  projectUrl: {
    fontSize: 8,
  }
})



const Project = ({
  style,
  title,
  projectUrl,
  children,
}: ProjectProps) => {
  const theme = useTheme()

  return (
    <View style={style}>
      <View style={styles.row}>
        <Text style={cn(styles.title, style)}>{title}</Text>
        <Work.WorkPlace url={projectUrl} style={styles.projectUrl}>{projectUrl}</Work.WorkPlace>
      </View>
      {React.Children.count(children) > 0 ? (
        <View>{children}</View>
      ) : null}
    </View>
  )
}

export default Project;
