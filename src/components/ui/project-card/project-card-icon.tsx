import { GithubIcon } from 'lucide-react';
import { Link } from 'lucide-react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from '@/components/ui/tooltip.tsx';
import { navigateToExternalUrl } from '@/components/utils/link.utils.ts';

export type CardIconType = 'Github' | 'Website';

export interface ProjectCardIconProps {
    iconType: CardIconType;
    url: string;
}

export function ProjectCardIcon({ iconType, url }: ProjectCardIconProps) {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <div
                        className="bg-neutral-200 rounded-xl h-fit text-neutral-900 hover:bg-primary hover:text-neutral-200"
                        onClick={() => navigateToExternalUrl(url)}
                    >
                        {iconType === 'Github' ? (
                            <GithubIcon className="h-4 w-4 m-1 " />
                        ) : (
                            <Link className="h-4 w-4 m-1 " />
                        )}
                    </div>
                </TooltipTrigger>
                <TooltipContent>
                    <div className="text-xs">{iconType}</div>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
