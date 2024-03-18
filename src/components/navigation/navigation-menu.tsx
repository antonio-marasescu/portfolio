import { Button } from '@/components/ui/button.tsx';
import { MapIcon } from 'lucide-react';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger
} from '@/components/ui/drawer.tsx';
import { navigateToSection } from '@/components/utils/link.utils.ts';
import { NavigationSectionsList } from '@/components/constants/navigation.constants.ts';

export function NavigationMenu() {
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 z-10">
                    <Button
                        variant="outline"
                        size="icon"
                        className="bg-neutral-900 drop-shadow-md shadow-muted-foreground text-neutral-200 hover:text-neutral-800"
                    >
                        <MapIcon className="h-4 w-4" />
                    </Button>
                </div>
            </DrawerTrigger>
            <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader>
                        <DrawerTitle>
                            <div className="w-full flex flex-row justify-center">
                                Navigate
                            </div>
                        </DrawerTitle>
                    </DrawerHeader>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-2">
                        {NavigationSectionsList.map(navigationSection => (
                            <DrawerClose asChild key={navigationSection.id}>
                                <Button
                                    variant="outline"
                                    className="bg-neutral-900 drop-shadow-md shadow-muted-foreground text-neutral-200 hover:text-neutral-800"
                                    onClick={event =>
                                        navigateToSection(
                                            event,
                                            navigationSection.id
                                        )
                                    }
                                >
                                    {navigationSection.label}
                                </Button>
                            </DrawerClose>
                        ))}
                        <DrawerClose
                            asChild
                            className="col-span-1 md:col-span-2 lg:col-span-3"
                        >
                            <Button
                                variant="outline"
                                className="border border-neutral-800"
                            >
                                Close
                            </Button>
                        </DrawerClose>
                    </div>
                    <DrawerFooter></DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    );
}
