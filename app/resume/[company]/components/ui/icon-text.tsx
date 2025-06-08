import { Circle, Path, Styles, StyleSheet, Svg, Rect, Text, View } from '@react-pdf/renderer'
import { useTheme } from '../../theme'
import { cn } from '../../utils/cn'
import React from 'react'
import { Camera, Icon, LucideProps } from "lucide-react"
import { renderToString } from 'react-dom/server'

interface IconTextProps {
  style?: Styles[string]
  text: string
  Icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>
}

interface LucideIconToPDFProps {
  size?: number;
  color?: string;
  Icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Raleway',
    fontSize: 8,
    marginLeft: 2,
  },
})

export const LucideIconToPDF = ({ Icon, color = 'black', size = 24 }: LucideIconToPDFProps) => {
  const iconString = renderToString(<Icon size={size} />);
  const parser = new DOMParser();
  const doc = parser.parseFromString(iconString, 'image/svg+xml');
  const svgElement = doc.querySelector('svg');

  if (!svgElement) {
    return null;
  }

  const svgPaths = Array.from(svgElement.querySelectorAll('path')).map((path, index) => (
    <Path key={index} d={path.getAttribute('d') || ''} stroke={color} />
  ));

  const svgCircles = Array.from(svgElement.querySelectorAll('circle')).map((circle, index) => (
    <Circle
      key={index}
      cx={circle.getAttribute('cx') || ''}
      cy={circle.getAttribute('cy') || ''}
      r={circle.getAttribute('r') || ''}
      stroke={color}
    />
  ));

  const svgRects = Array.from(svgElement.querySelectorAll('rect')).map((rect, index) => (
    <Rect
      key={index}
      y={rect.getAttribute('y') || ''}
      x={rect.getAttribute('x') || ''}
      width={rect.getAttribute('width') || ''}
      height={rect.getAttribute('height') || ''}
      stroke={color}
    />
  ));

  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      {svgPaths}
      {svgCircles}
      {svgRects}
    </Svg>
  );
};

const IconText = ({ style, text, Icon }: IconTextProps) => {
  const theme = useTheme()

  return (
    <View style={cn(styles.container, style)}>
      <LucideIconToPDF Icon={Icon} size={10} color={theme.colors.font} />
      <Text style={[styles.text,
      { color: theme.colors.font }
      ]}>{text}</Text>
    </View>
  )
}


export default IconText;
