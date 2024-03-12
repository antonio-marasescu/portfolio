import { TypewriterEffect } from '@/components/ui/typewriter-effect.tsx';
import { Button } from '@/components/ui/button.tsx';
import { Linkedin } from 'lucide-react';
import { Download } from 'lucide-react';
import { HomeInformation } from '@/components/constants/home.constants.ts';

export function HomeSection() {
    const words = [
        {
            text: 'Hello',
            className: 'text-zinc-200 dark:text-zinc-900'
        },
        {
            text: 'my',
            className: 'text-zinc-200 dark:text-zinc-900'
        },
        {
            text: 'name',
            className: 'text-zinc-200 dark:text-zinc-900'
        },
        {
            text: 'is',
            className: 'text-zinc-200 dark:text-zinc-900'
        },
        {
            text: `${HomeInformation.firstName}.`,
            className: 'text-violet-600 dark:text-violet-600'
        }
    ];
    return (
        <section
            id="Home"
            className="w-full h-full flex flex-col gap-6 justify-center items-center"
        >
            <TypewriterEffect words={words} cursorClassName="bg-violet-600" />
            <div className="flex justify-center items-center text-center">
                <p className="text-base md:text-xl lg:text-2xl text-muted-foreground">
                    {HomeInformation.role}
                </p>
            </div>
            <div className="flex flex-row flex-wrap gap-6 justify-center items-center">
                <Button variant="outline">
                    <Linkedin className="mr-2 h-4 w-4" />
                    Get in touch
                </Button>
                <Button variant="default">
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
