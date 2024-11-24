import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import ResearchInterest from "@/components/ResearchInterest"
import Education from "@/components/Education"
import ExtraCaricular from "@/components/ExtraCaricular"
import CapstoneThesis from "@/components/CapstoneThesis"
import CapstoneProjects from "@/components/CapstoneProjects"
import Achivements from "@/components/Achivements"

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <ResearchInterest/>
      <Education/>
      <Achivements/>
      <ExtraCaricular/>
      <CapstoneThesis/>
      <CapstoneProjects/>
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
