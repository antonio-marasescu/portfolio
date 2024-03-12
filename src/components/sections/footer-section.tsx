import { GithubIcon } from 'lucide-react';

export function FooterSection() {
    return (
        <div className="w-full h-[100px] flex flex-col gap-2 justify-center items-center">
            <div className=" text-neutral-200 border-2 border-neutral-200 rounded-full hover:text-neutral-800 hover:bg-neutral-200 cursor-pointer">
                <GithubIcon className="h-4 w-4 m-1" />
            </div>
            <div className="flex justify-center items-center text-center">
                <p className="text-xs text-muted-foreground">
                    Made with&nbsp;
                    <a
                        className="hover:text-primary"
                        href="https://react.dev/"
                        target="_blank"
                    >
                        React
                    </a>
                    ,&nbsp;
                    <a
                        className="hover:text-primary"
                        href="https://ui.shadcn.com/"
                        target="_blank"
                    >
                        Shadcn/ui
                    </a>
                    &nbsp;and&nbsp;
                    <a
                        className="hover:text-primary"
                        href="https://tailwindcss.com/"
                        target="_blank"
                    >
                        Tailwind
                    </a>
                </p>
            </div>
        </div>
    );
}
