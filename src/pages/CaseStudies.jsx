import SectionHeading from '../components/SectionHeading';
import CaseStudyCard from '../components/CaseStudyCard';
import { caseStudies } from '../data/caseStudies';

export default function CaseStudies() {
  return (
    <div className="page">
      <section className="section-frame">
        <div className="container">
          <SectionHeading
            eyebrow="Case Studies"
            title="Real problems. Real solutions. Four years of proof."
            description="Before Kravient, there was Praavi. Four years of building software for real businesses with real deadlines. The draft does not include final project details yet, so this page is set up as a fill-in template."
          />
          <div className="case-studies-stack">
            {caseStudies.map((caseStudy, index) => (
              <CaseStudyCard
                key={`${caseStudy.title}-${index}`}
                title={caseStudy.title}
                description={caseStudy.description}
                info={caseStudy.info}
                reverse={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
