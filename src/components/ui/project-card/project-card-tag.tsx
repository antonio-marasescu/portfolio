export interface ProjectCardTagProps {
    label: string;
}
export function ProjectCardTag({ label }: ProjectCardTagProps) {
    return (
        <div className="text-xss text-primary-foreground border border-accent rounded-md p-[3px] hover:bg-zinc-950">
            {label}
        </div>
    );
}
