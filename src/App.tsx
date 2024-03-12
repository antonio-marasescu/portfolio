import './App.css';
import { AppLayout } from '@/components/layouts/app-layout.tsx';
import { NameSection } from '@/components/sections/name-section.tsx';
import { AboutSection } from '@/components/sections/about-section.tsx';
import { WorkHistorySection } from '@/components/sections/work-history-section.tsx';
import { SkillsSection } from '@/components/sections/skills-section.tsx';
import { EducationSection } from '@/components/sections/education-section.tsx';
import { ProjectsSection } from '@/components/sections/projects-section.tsx';
import { FooterSection } from '@/components/sections/footer-section.tsx';

function App() {
    return (
        <AppLayout>
            <NameSection />
            <AboutSection />
            <SkillsSection />
            <WorkHistorySection />
            <EducationSection />
            <ProjectsSection />
            <FooterSection />
        </AppLayout>
    );
}

export default App;
