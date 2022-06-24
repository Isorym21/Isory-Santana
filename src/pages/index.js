
import React from "react";
import {
 AboutSection,
 ArticlesSection,
 ContactSection,
 HeroSection,
 InterestsSection,
 Page,
 ProjectsSection,
 Seo,
} from "gatsby-theme-portfolio-minimal";
 
export default function IndexPage() {
 return (
   <>
     <Seo title="Isory Santana" />
     <Page useSplashScreenAnimation>
       <HeroSection sectionId="hero" />
     
       <AboutSection sectionId="about" heading="About Me" />
       <InterestsSection sectionId="details" heading="Technical Skills" />
       <ProjectsSection sectionId="features" heading="Projects" />
       <ContactSection sectionId="github" heading="Get In Touch" />
     </Page>
   </>
 );
}
 
