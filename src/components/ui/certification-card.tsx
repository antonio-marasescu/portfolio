import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from '@/components/ui/card.tsx';

export type CertificationCardProps = {
    label: string;
    link: string;
    imageUrl: string;
};

export function CertificationCard({
    label,
    link,
    imageUrl
}: CertificationCardProps) {
    const handleOnClick = () => window.open(link, '_blank');

    return (
        <Card
            className="bg-neutral-900 drop-shadow-md shadow-muted-foreground h-full cursor-pointer hover:shadow-xl"
            onClick={handleOnClick}
        >
            <CardHeader>
                <CardTitle className="text-primary-foreground cursor-pointer text-center">
                    {label}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex-container justify-items-center items-center p-4">
                    <img
                        src={imageUrl}
                        className="w-32 h-32 shadow-lg"
                        alt={`${label} Certification Badge`}
                    />
                </div>
            </CardContent>
        </Card>
    );
}
