import { ReactNode } from 'react';

export interface AppLayoutProps {
    children?: ReactNode;
}
export function AppLayout({ children }: AppLayoutProps) {
    return (
        <main className="w-screen h-screen bg-neutral-900 overflow-x-hidden">
            {children}
        </main>
    );
}
