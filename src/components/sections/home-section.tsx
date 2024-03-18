import { TypewriterEffect } from '@/components/ui/typewriter-effect.tsx';
import { Button } from '@/components/ui/button.tsx';
import { Download, Linkedin } from 'lucide-react';
import { HomeInformation } from '@/components/constants/home.constants.ts';
import { NavigationSections } from '@/components/constants/navigation.constants.ts';
import {
    downloadFileByUrl,
    navigateToExternalUrl
} from '@/components/utils/link.utils.ts';

export function HomeSection() {
    const words = [
        {
            text: 'Hello',
            className:
                'text-zinc-200 dark:text-zinc-900 text-xl sm:text-3xl lg:text-4xl'
        },
        {
            text: 'my',
            className:
                'text-zinc-200 dark:text-zinc-900 text-xl sm:text-3xl lg:text-4xl'
        },
        {
            text: 'name',
            className:
                'text-zinc-200 dark:text-zinc-900 text-xl sm:text-3xl lg:text-4xl'
        },
        {
            text: 'is',
            className:
                'text-zinc-200 dark:text-zinc-900 text-xl sm:text-3xl lg:text-4xl'
        },
        {
            text: `${HomeInformation.firstName}.`,
            className:
                'text-violet-600 dark:text-violet-600 text-xl sm:text-3xl lg:text-4xl'
        }
    ];
    return (
        <section
            id={NavigationSections.Home.id}
            className="w-full h-full flex flex-col gap-6 justify-center items-center"
        >
            <TypewriterEffect words={words} cursorClassName="bg-violet-600" />
            <div className="flex justify-center items-center text-center">
                <p className="text-base md:text-xl lg:text-2xl text-muted-foreground">
                    {HomeInformation.role}
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center">
                <Button
                    variant="outline"
                    onClick={() =>
                        navigateToExternalUrl(HomeInformation.linkedinUrl)
                    }
                >
                    <Linkedin className="mr-2 h-4 w-4" />
                    Get in touch
                </Button>
                <Button
                    variant="default"
                    onClick={() =>
                        downloadFileByUrl('resume.pdf', 'antonio-resume.pdf')
                    }
                >
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                </Button>
            </div>
            <small className="text-xs font-medium leading-none text-muted-foreground">
                Scroll to find out more
            </small>
        </section>
    );
}
