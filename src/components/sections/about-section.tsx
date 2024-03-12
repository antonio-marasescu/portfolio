import { Button } from '@/components/ui/button.tsx';
import { GithubIcon, LinkedinIcon } from 'lucide-react';
import { StandardSectionLayout } from '@/components/layouts/standard-section-layout.tsx';
import { AboutInformation } from '@/components/constants/about.constants.ts';

export function AboutSection() {
    return (
        <StandardSectionLayout sectionTitle="About Myself">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8  justify-items-center">
                <div className="text-xs md:text-base text-muted-foreground col-span-2">
                    <p>{AboutInformation.description}</p>
                    <div className="flex flex-row flex-wrap gap-4 pt-4 md:pt-6">
                        <Button
                            variant="outline"
                            size="icon"
                            className="bg-neutral-900 drop-shadow-md shadow-muted-foreground text-neutral-300 hover:text-neutral-800"
                        >
                            <GithubIcon className="h-4 w-4" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className="bg-neutral-900 drop-shadow-md shadow-muted-foreground  text-neutral-300 hover:text-neutral-800"
                        >
                            <LinkedinIcon className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
                <div>
                    <img
                        src={AboutInformation.profileImageUrl}
                        className="h-52 w-52 max-w-52 rounded-md shadow-2xl"
                        alt={AboutInformation.profileImageUrlAlt}
                    />
                </div>
            </div>
        </StandardSectionLayout>
    );
}
