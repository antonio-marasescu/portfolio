import { ReactNode } from 'react';

export interface StandardSectionLayoutProps {
    sectionTitle?: string;
    children: ReactNode;
}

export function StandardSectionLayout({
    children,
    sectionTitle
}: StandardSectionLayoutProps) {
    return (
        <section className="w-full justify-center items-center bg-neutral-200">
            <div className="container pl-4 pr-4 md:pl-8 md:pr-8 lg:pl-16 lg:pr-16 pt-4 md:pt-8 lg:pt-16">
                <div className="text-lg md:text-2xl text-neutral-800 pb-2 md:pb-4 font-bold cursor-pointer">
                    <div className="flex flex-row align-text-top drop-shadow-md shadow-muted-foreground">
                        <div className="mr-1"># {sectionTitle || ''}</div>
                    </div>
                    <p className="border-b border-neutral-500 pt-2 w-44"></p>
                </div>
                {children}
            </div>
        </section>
    );
}
