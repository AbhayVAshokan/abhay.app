"use client"

import { Page, Document, StyleSheet } from '@react-pdf/renderer';
import Heading from "./heading";
import { ThemeProvider } from "../theme";
import "../utils/font"

import Watermark from './watermark';
import LeftColumn from './left-column';
import Work from './work';
import ListItem from './list-item';

// https://github.com/diegomura/react-pdf/issues/2599#issuecomment-1935349954
import dynamic from "next/dynamic";
const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((module) => module.PDFViewer),
  { ssr: false },
);

const ResumeDocument = ({ theme, profile, workExperiences }) => {
  const styles = StyleSheet.create({
    page: {
      paddingTop: 48,
      paddingHorizontal: 50,
    },
    row: {
      flexDirection: 'row',
    },
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
            <LeftColumn title="Work experience">
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
            </LeftColumn>
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
