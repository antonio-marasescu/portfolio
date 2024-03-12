import { Badge } from '@/components/ui/badge.tsx';

export type CardBadgeLabel = 'Work' | 'Personal';

export interface ProjectCardBadgeProps {
    label: CardBadgeLabel;
}
export function ProjectCardBadge({ label }: ProjectCardBadgeProps) {
    if (label === 'Work') return <Badge variant="default">{label}</Badge>;

    return <Badge variant="secondary">{label}</Badge>;
}
