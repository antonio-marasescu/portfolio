import './App.css';
import { AppLayout } from '@/components/layouts/app-layout.tsx';
import { NameSection } from '@/components/sections/name-section.tsx';
import { AboutSection } from '@/components/sections/about-section.tsx';
import { WorkHistorySection } from '@/components/sections/work-history-section.tsx';

function App() {
    return (
        <AppLayout>
            <NameSection />
            <AboutSection />
            <WorkHistorySection />
        </AppLayout>
    );
}

export default App;
