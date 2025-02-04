import { NavigationSections } from '@/components/constants/navigation.constants.ts';
import { StandardSectionLayout } from '@/components/layouts/standard-section-layout.tsx';
import { CertificationsInformation } from '@/components/constants/certifications.constants.ts';
import { CertificationCard } from '@/components/ui/certification-card.tsx';

export function CertificationsSection() {
    return (
        <StandardSectionLayout
            id={NavigationSections.Certifications.id}
            sectionTitle={NavigationSections.Certifications.label}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-8">
                {CertificationsInformation.map(certification => (
                    <CertificationCard
                        key={certification.label}
                        {...certification}
                    />
                ))}
            </div>
        </StandardSectionLayout>
    );
}
