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
        <div className="w-full justify-center items-center bg-neutral-200">
            <div className="container p-4 md:p-8 lg:p-16">
                <div className="text-lg md:text-xl text-neutral-800 pb-2 md:pb-4 font-bold cursor-pointer">
                    <p># {sectionTitle || ''}</p>
                    <p className="border-b border-neutral-500 pt-2 w-44"></p>
                </div>
                {children}
            </div>
        </div>
    );
}
