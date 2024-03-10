export interface TimelineSubEventProps {
    id: string;
    title: string;
    period: string;
    description: string;
}
export interface TimelineEventProps {
    id: string;
    title: string;
    subEvents: TimelineSubEventProps[];
}

function TimelineEvent({ title, subEvents }: TimelineEventProps) {
    const TimelineSubEvent = ({
        id,
        title,
        period,
        description
    }: TimelineSubEventProps) => (
        <div id={id} className="flex flex-row items-center pt-2">
            <div className="flex flex-row justify-center items-center gap-6">
                <div>
                    <div className="text-xl text-neutral-700 font-bold">
                        {title}
                    </div>
                    <div className="text-xs text-muted-foreground">
                        {period}
                    </div>
                    <div className="text-base text-foreground tracking-tight pt-1">
                        {description}
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="pt-4">
            <div className="flex flex-col flex-wrap gap-3">
                <div className="flex flex-row gap-6 items-center bg-neutral-900 rounded">
                    <div className="text-neutral-200 text-lg font-bold cursor-pointer m-2">
                        {title}
                    </div>
                </div>

                <div className="ml-4 mr-4">
                    {subEvents.map(subEvent => (
                        <TimelineSubEvent {...subEvent} key={subEvent.id} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export interface TimelineProps {
    events: TimelineEventProps[];
}

export function Timeline({ events }: TimelineProps) {
    return (
        <div className="flex flex-col">
            {events.map(event => (
                <TimelineEvent {...event} key={event.id} />
            ))}
        </div>
    );
}
