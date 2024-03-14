import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle
} from '@/components/ui/card.tsx';
import { Separator } from '@/components/ui/separator.tsx';
import {
    CardBadgeLabel,
    ProjectCardBadge
} from '@/components/ui/project-card/project-card-badge.tsx';
import {
    CardIconType,
    ProjectCardIcon
} from '@/components/ui/project-card/project-card-icon.tsx';
import { ProjectCardTag } from '@/components/ui/project-card/project-card-tag.tsx';

export interface ProjectCardProps {
    id: string;
    title: string;
    date: string;
    projectType: CardBadgeLabel;
    hasIcon: boolean;
    iconType: CardIconType;
    iconUrl: string;
    description: string;
    involvement: string;
    tags: string[];
}

export function ProjectCard({
    id,
    title,
    date,
    projectType,
    hasIcon,
    iconType,
    iconUrl,
    description,
    involvement,
    tags
}: ProjectCardProps) {
    return (
        <Card
            id={id}
            className="bg-neutral-900 drop-shadow-md shadow-muted-foreground h-full cursor-pointer flex flex-col"
        >
            <CardHeader>
                <CardTitle className="text-primary-foreground cursor-pointer">
                    <div className="flex flex-row gap-1">
                        <div>{title}</div>
                        <div className="flex-grow"></div>
                        {hasIcon ? (
                            <ProjectCardIcon
                                iconType={iconType}
                                url={iconUrl}
                            />
                        ) : (
                            ''
                        )}
                    </div>
                </CardTitle>
                <div>
                    <div className="text-neutral-500">{date}</div>
                    <div className="flex flex-row gap-2 pt-2">
                        <ProjectCardBadge label={projectType} />
                    </div>
                </div>
            </CardHeader>
            <Separator />
            <CardContent className="p-3 pt-0 flex-grow">
                <div className="text-xs text-primary-foreground cursor-text mt-2">
                    <div>{description}</div>
                    <div className="pt-4">{involvement}</div>
                </div>
            </CardContent>
            <Separator />
            <CardFooter className="p-2">
                <div className="mt-1 mb-1 flex flex-row gap-2 flex-wrap">
                    {tags.map(tag => (
                        <ProjectCardTag key={tag} label={tag} />
                    ))}
                </div>
            </CardFooter>
        </Card>
    );
}
