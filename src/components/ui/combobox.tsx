import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList
} from '@/components/ui/command';
import {
    Popover,
    PopoverContent,
    PopoverTrigger
} from '@/components/ui/popover';

export type ComboBoxOption = { value: string; label: string };
export interface ComboBoxProps {
    id: string;
    placeholder: string;
    searchPlaceholder: string;
    options: ComboBoxOption[];
    onSelect: (value: string) => void;
}

export function ComboBox({
    id,
    placeholder,
    searchPlaceholder,
    options,
    onSelect
}: ComboBoxProps) {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState('');

    const onOptionSelected = (currentValue: string) => {
        const nextValue = currentValue === value ? '' : currentValue;
        setValue(nextValue);
        onSelect(nextValue);
        setOpen(false);
    };

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    id={id}
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                >
                    {value
                        ? options.find(option => option.value === value)?.label
                        : searchPlaceholder}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder={placeholder} />
                    <CommandEmpty>No option found.</CommandEmpty>
                    <CommandList>
                        <CommandGroup heading="Suggestions">
                            {options.map(option => (
                                <CommandItem
                                    key={option.value}
                                    value={option.value}
                                    disabled={false}
                                    onSelect={onOptionSelected}
                                >
                                    <Check
                                        className={cn(
                                            'mr-2 h-4 w-4',
                                            value === option.value
                                                ? 'opacity-100'
                                                : 'opacity-0'
                                        )}
                                    />
                                    {option.label}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
