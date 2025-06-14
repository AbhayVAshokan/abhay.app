import { Metadata } from "next";
import Document from "./components/document";
import {
  fetchAchievements,
  fetchCompanies,
  fetchCompany,
  fetchEducation,
  fetchOpensourceContributions,
  fetchProfile,
  fetchProjects,
  fetchSkills,
  fetchTalks,
  fetchTheme,
  fetchWork,
} from "@/nocodb/api";
import { redirect } from "next/navigation";

import "./components/ui/loader.css";
import { Company } from "./types";

export const metadata: Metadata = {
  title: "Resume | Abhay V Ashokan",
  alternates: {
    canonical: "https://abhay.app/resume",
  },
};

export const generateStaticParams = async () => {
  const companies: Company[] = await fetchCompanies();
  return companies.map(({ slug }) => ({ slug }));
}

const Resume = async ({ params }: { params: Promise<{ company: string }> }) => {
  const { company } = await params;

  const companyData = await fetchCompany(company);
  if (!companyData && company !== "default") redirect("/resume/default");

  const getSlug = (assoc: string) => (companyData[assoc] ? company : "default");

  const profile = await fetchProfile(getSlug("profile"));
  const work = await fetchWork(getSlug("work"));
  const achievements = await fetchAchievements(getSlug("achievements"));
  const educationExperiences = await fetchEducation(getSlug("education"));
  const projects = await fetchProjects(getSlug("projects"));
  const skills = await fetchSkills(getSlug("skills"));
  const talks = await fetchTalks(getSlug("talks"));
  const theme = await fetchTheme(getSlug("themes"));
  const opensourceContributions = await fetchOpensourceContributions(
    getSlug("opensource_contributions"),
  );

  return (
    <>
      <div className="resume-loader-wrapper">
        <span className="resume-loader"></span>
        <p className="text-sm">Generating resume</p>
      </div>
      <Document
        companyData={companyData}
        theme={theme}
        profile={profile}
        workExperiences={work}
        educationExperiences={educationExperiences}
        skills={skills}
        talks={talks}
        projects={projects}
        achievements={achievements}
        opensourceContributions={opensourceContributions}
      />
    </>
  );
};

export default Resume;
