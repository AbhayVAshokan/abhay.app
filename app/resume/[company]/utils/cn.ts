import { Styles } from '@react-pdf/renderer'

type Style = Styles[string]

export const cn = (...styles: (Style | undefined)[]): Style[] => {
  return styles.filter(Boolean) as Style[]
}
