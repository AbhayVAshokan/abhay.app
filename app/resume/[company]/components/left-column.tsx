import { View, StyleSheet } from '@react-pdf/renderer';
import Section from './section';

const LeftColumn = ({ title, children }) => {
  const styles = StyleSheet.create({
    leftColumn: {
      flexGrow: 1,
      marginRight: 16,
      width: '55%',
    },
    rightColumn: {
      flexGrow: 1,
      width: '40%',
    },
  });

  return <View style={styles.leftColumn}>
    <Section title={title} spacing={8}>
      {children}
    </Section>
  </View>
}

export default LeftColumn;
