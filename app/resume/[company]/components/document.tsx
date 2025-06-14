"use client";

import { Page, Document, StyleSheet, View, Text } from "@react-pdf/renderer";
import Heading from "./ui/heading";
import { ThemeProvider } from "../theme";
import "../utils/font";

import Watermark from "./ui/watermark";
import Work from "./work";
import ListItem from "./ui/list-item";
import Section from "./ui/section";
import Education from "./education";

import Skill from "./skill";
import Talk from "./talk";
import Project from "./project";
import {
  Company,
  Profile,
  Theme,
  Work as WorkType,
  Education as EducationType,
  Skill as SkillType,
  Talk as TalkType,
  Project as ProjectType,
  Achievement,
  OpensourceConribution,
} from "../types";

import useAnalytics from "./hooks/useAnalytics";

import dynamic from "next/dynamic";
const PDFViewer = dynamic(() => import("./ui/pdf-viewer"), { ssr: false });

interface ResumeDocumentProps {
  companyData: Company;
  theme: Theme;
  profile: Profile;
  workExperiences: WorkType[];
  educationExperiences: EducationType[];
  skills: SkillType[];
  talks: TalkType[];
  projects: ProjectType[];
  achievements: Achievement[];
  opensourceContributions: OpensourceConribution[];
}

const ResumeDocument = ({
  companyData,
  theme,
  profile,
  workExperiences,
  educationExperiences,
  skills,
  talks,
  projects,
  achievements,
  opensourceContributions,
}: ResumeDocumentProps) => {
  const styles = StyleSheet.create({
    page: {
      paddingTop: 48,
      paddingHorizontal: 50,
      fontFamily: "Raleway",
      fontSize: 9,
    },
    row: {
      flexDirection: "row",
    },
  });

  useAnalytics(companyData);

  const document = <ThemeProvider theme={theme}>
    <Document
      title="Resume | Abhay V Ashokan"
      author="Abhay V Ashokan"
      keywords={profile.keywords}
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
            twitter: profile.twitter,
            linkedin: profile.linkedin,
            location: profile.location,
          }}
        />
        <View style={styles.row}>
          <Section.Left>
            <Section title="Work experience" spacing={8}>
              {workExperiences.map((experience) => (
                <Work
                  key={experience.Id}
                  title={experience.title}
                  companyName={experience.company}
                  companyUrl={experience.companyUrl}
                  location={experience.location}
                  startAt={experience.startAt}
                  endAt={experience.endAt}
                  description={experience.description}
                >
                  {experience.summary.split("\n\n").map((point, index) => (
                    <ListItem key={`${experience.Id}-point-${index}`}>
                      {point}
                    </ListItem>
                  ))}
                </Work>
              ))}
            </Section>
            <Section title="Projects" spacing={8}>
              {projects.slice(0, 1).map((project) => (
                <Project
                  key={project.Id}
                  title={project.title}
                  projectUrl={project.url}
                >
                  {project.summary.split("\n\n").map((point, index) => (
                    <ListItem key={`${project.Id}-point-${index}`}>
                      {point}
                    </ListItem>
                  ))}
                </Project>
              ))}
            </Section>
          </Section.Left>
          <Section.Right>
            <Section title="Skills" spacing={4}>
              {skills.map((skill) => (
                <Skill key={skill.skill} {...skill} />
              ))}
            </Section>
            <Section title="Open-source contributions" spacing={8}>
              <Text>
                Contributed to:{" "}
                {opensourceContributions
                  .filter(({ type }) => type === "contribution")
                  .map(({ title }) => title)
                  .join(", ")}
                .
              </Text>
              {opensourceContributions
                .filter(({ type }) => type === "volunteering")
                .map(({ title }) => (
                  <Text key={title}>{title}</Text>
                ))}
            </Section>
            <Section title="Talks" spacing={8}>
              {talks.map((talk) => (
                <Talk key={talk.title} {...talk} />
              ))}
            </Section>
          </Section.Right>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <Watermark />
        <View style={styles.row}>
          <Section.Left>
            <Section spacing={8}>
              {projects.slice(1).map((project) => (
                <Project
                  key={project.Id}
                  title={project.title}
                  projectUrl={project.url}
                >
                  {project.summary.split("\n\n").map((point, index) => (
                    <ListItem key={`${project.Id}-point-${index}`}>
                      {point}
                    </ListItem>
                  ))}
                </Project>
              ))}
            </Section>
          </Section.Left>
          <Section.Right>
            <Section title="Education" spacing={8}>
              {educationExperiences.map((experience) => (
                <Education key={experience.Id} {...experience} />
              ))}
            </Section>
            <Section title="Achievements" spacing={8}>
              {achievements.map(({ Id, year, title }) => (
                <Text key={Id}>
                  {year} - {title}
                </Text>
              ))}
            </Section>
          </Section.Right>
        </View>
      </Page>
    </Document>
  </ThemeProvider >

  return (
    <PDFViewer document={document} />
  );
};

export default ResumeDocument;
