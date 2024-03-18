import { Button } from '@/components/ui/button.tsx';
import { GithubIcon, LinkedinIcon } from 'lucide-react';
import { StandardSectionLayout } from '@/components/layouts/standard-section-layout.tsx';
import { AboutInformation } from '@/components/constants/about.constants.ts';
import { NavigationSections } from '@/components/constants/navigation.constants.ts';
import { navigateToExternalUrl } from '@/components/utils/link.utils.ts';
import { Fragment } from 'react';

export function AboutSection() {
    return (
        <StandardSectionLayout
            id={NavigationSections.About.id}
            sectionTitle={NavigationSections.About.label}
        >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8  justify-items-center">
                <div className="text-xs md:text-base text-foreground col-span-2">
                    <p>
                        {AboutInformation.description
                            .split('\n')
                            .map((line, index) => (
                                <Fragment key={index}>
                                    {line}
                                    <br />
                                </Fragment>
                            ))}
                    </p>
                    <div className="flex flex-row flex-wrap gap-4 pt-4 md:pt-6">
                        <Button
                            variant="outline"
                            size="icon"
                            className="bg-neutral-900 drop-shadow-md shadow-muted-foreground text-neutral-300 hover:text-neutral-800"
                            onClick={() =>
                                navigateToExternalUrl(
                                    AboutInformation.githubUrl
                                )
                            }
                        >
                            <GithubIcon className="h-4 w-4" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className="bg-neutral-900 drop-shadow-md shadow-muted-foreground  text-neutral-300 hover:text-neutral-800"
                            onClick={() =>
                                navigateToExternalUrl(
                                    AboutInformation.linkedinUrl
                                )
                            }
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
