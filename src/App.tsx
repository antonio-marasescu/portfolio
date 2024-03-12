import { AppLayout } from '@/components/layouts/app-layout.tsx';
import { HomeSection } from '@/components/sections/home-section.tsx';
import { AboutSection } from '@/components/sections/about-section.tsx';
import { WorkHistorySection } from '@/components/sections/work-history-section.tsx';
import { SkillsSection } from '@/components/sections/skills-section.tsx';
import { EducationSection } from '@/components/sections/education-section.tsx';
import { ProjectsSection } from '@/components/sections/projects-section.tsx';
import { FooterSection } from '@/components/sections/footer-section.tsx';
import { NavigationMenu } from '@/components/navigation/navigation-menu.tsx';

function App() {
    return (
        <AppLayout>
            <NavigationMenu />
            <HomeSection />
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
