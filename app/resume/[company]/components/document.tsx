"use client"

import { Page, Document, StyleSheet } from '@react-pdf/renderer';
import Heading from "./heading";
import { ThemeProvider } from "../theme";
import "../utils/font"

// https://github.com/diegomura/react-pdf/issues/2599#issuecomment-1935349954
import dynamic from "next/dynamic";
import Watermark from './watermark';
const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((module) => module.PDFViewer),
  { ssr: false },
);

const ResumeDocument = ({ theme, profile }) => {
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
          </Page>
        </Document>
      </ThemeProvider>
    </PDFViewer>
  )

}

export default ResumeDocument;
