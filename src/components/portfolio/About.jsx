import { useEffect } from "react";
import { useAboutData } from "../../hooks/useAboutData";
 
import Section from "../common/Section";
import { AboutContent } from "./about/AboutContent";
import { ResumeDownload } from "./about/ResumeDownload";
import { useAboutService } from "../../services/PortfolioServices/aboutService";

function About() {
  const { profile, resume, loading, error } = useAboutData();
  const { downloadResume } = useAboutService();

  useEffect(() => {
    if (error) {
      console.error("Failed to load profile:", error);
    }
  }, [error]);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error loading data</div>;
  }

  return (
    <Section
      title="About Me"
      id="about"
      className="bg-slate-900 text-slate-200"
    >
      {/* Profile Info */}
      {profile && <AboutContent profile={profile} />}

      {/* Resume Download */}
      {resume && (
        <ResumeDownload
          resume={resume}
          onDownload={() => downloadResume(resume)}
        />
      )}
    </Section>
  );
}

export default About;
