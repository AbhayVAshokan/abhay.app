"use client"

import { Page, Document, StyleSheet, View } from '@react-pdf/renderer';
import Heading from "./ui/heading";
import { ThemeProvider } from "../theme";
import "../utils/font"

import Watermark from './ui/watermark';
import LeftColumn from './left-column';
import Work from './work';
import ListItem from './ui/list-item';
import Section from './ui/section';
import Education from './education';

// https://github.com/diegomura/react-pdf/issues/2599#issuecomment-1935349954
import dynamic from "next/dynamic";
import Skill from './skill';
const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((module) => module.PDFViewer),
  { ssr: false },
);

const ResumeDocument = ({ theme, profile, workExperiences, educationExperiences, skills }) => {
  const styles = StyleSheet.create({
    page: {
      paddingTop: 48,
      paddingHorizontal: 50,
    },
    row: {
      flexDirection: 'row',
    },
  });

  return (
    <PDFViewer className='w-full h-full'>
      <ThemeProvider theme={theme}>
        <Document
          title="Resume | Abhay V Ashokan"
          author="Abhay V Ashokan"
          keywords={profile.keywords.join(", ")}
        >
          <Page size="A4" style={styles.page}>
            <Watermark />
            <Heading
              title={profile.name}
              bio={profile.bio}
              avatarUrl={profile.avatarUrl}
              information={{
                phone: profile.phone,
                email: profile.email,
                website: profile.website,
                github: profile.github,
                twitter: profile.github,
                linkedin: profile.linkedin,
                location: profile.location,
              }}
            />
            <View style={styles.row}>
              <Section.Left>
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
              </Section.Left>
              <Section.Right>
                <Section title="Education" spacing={8}>
                  {educationExperiences.map((experience) => (
                    <Education
                      key={experience.id}
                      {...experience}
                    />
                  ))}
                </Section>
                <Section title="Skills" spacing={4}>
                  {skills.map((skill) => (
                    <Skill
                      key={skill.skill}
                      {...skill}
                    />
                  ))}
                </Section>
              </Section.Right>
            </View>
          </Page>

          <Page size="A4" style={styles.page}>
            <Watermark />
          </Page>
        </Document>
      </ThemeProvider>
    </PDFViewer>
  )

}

export default ResumeDocument;
