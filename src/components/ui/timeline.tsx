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
        <div id={id} className="flex flex-row pt-2">
            <div className="flex flex-row gap-6">
                <div>
                    <div className="text-base md:text-xl text-neutral-700 font-bold">
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

    const TimelineTitle = ({ timelineTitle }: { timelineTitle: string }) =>
        timelineTitle ? (
            <div className="flex flex-row gap-6 bg-neutral-900 rounded  w-fit">
                <div className="text-neutral-200 text-lg font-bold cursor-pointer ml-6 mr-6 mt-2 mb-2">
                    {title}
                </div>
            </div>
        ) : (
            <div></div>
        );

    return (
        <div className="flex flex-col flex-wrap gap-3">
            <TimelineTitle timelineTitle={title} />
            <div className="mr-4">
                {subEvents.map(subEvent => (
                    <TimelineSubEvent {...subEvent} key={subEvent.id} />
                ))}
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
            {events.map((event, index) => (
                <div key={event.id} className={index > 0 ? 'pt-4' : ''}>
                    <TimelineEvent {...event} />
                </div>
            ))}
        </div>
    );
}
