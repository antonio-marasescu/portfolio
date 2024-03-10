import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from '@/components/ui/card.tsx';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from '@/components/ui/tooltip.tsx';

export type Skill = { name: string; url: string };
export interface SkillCardProps {
    title: string;
    skills: Skill[];
}

export function SkillCard({ title, skills }: SkillCardProps) {
    const SkillData = (skill: Skill) => (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <img
                        src={skill.url}
                        className="w-12 h-12 max-w-12 max-h-12 cursor-pointer bg-neutral-200 p-1"
                        alt={skill.name}
                    />
                </TooltipTrigger>
                <TooltipContent>
                    <p className="text-neutral-800 text-base">{skill.name}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );

    return (
        <Card className="bg-neutral-900 drop-shadow-md shadow-muted-foreground h-full cursor-pointer transform transition duration-500 md:hover:scale-105 hover:shadow-2xl">
            <CardHeader>
                <CardTitle className="text-primary-foreground cursor-pointer">
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-6 justify-items-center">
                    {skills.map(skill => (
                        <SkillData {...skill} key={skill.name} />
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
