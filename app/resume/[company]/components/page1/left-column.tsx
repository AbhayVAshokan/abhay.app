import { View, StyleSheet } from '@react-pdf/renderer';
import { Section } from '../section';
import Work from './work';
import ListItem from '../list-item';

const LeftColumn = ({ workExperiences }) => {
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
    <Section title="Work experience" spacing={8}>
      {workExperiences.map((experience) => (
        <Work
          key={experience.id}
          title={experience.title}
          companyName={experience.company}
          companyUrl={experience.companyUrl}
          location={experience.location}
          startAt={experience.startAt}
          endAt={experience.endAt}
          description={experience.description}
        >
          {experience.points
            .map((point, index) => (
              <ListItem key={`${experience.id}-point-${index}`}>
                {point}
              </ListItem>
            ))}
        </Work>
      ))}
    </Section>
  </View>
}

export default LeftColumn;
