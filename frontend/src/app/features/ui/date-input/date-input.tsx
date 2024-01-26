import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { format, add } from "date-fns";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  FormItem,
  FormLabel,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
export const DateInput = ({ field, title, disabled }: { field: any; title: string, disabled?: boolean }) => {
  return (
    <FormItem>
      <FormLabel>{title}</FormLabel>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={"w-full pl-3 text-left font-normal"}
            disabled={disabled}
          >
            {field.value ? format(field.value, "P") : <span>Pick a date</span>}
            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={field.value}
            onSelect={field.onChange}
            disabled={(date) =>
              date > new Date() || date < new Date("1900-01-01")
            }
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </FormItem>
  );
};
