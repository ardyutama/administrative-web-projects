import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const DropdownInput = ({
  title,
  field,
  placeholder,
  children
}: {
  title: string;
  field: any;
  placeholder?: string;
  children: React.ReactNode;
}) => {
  return (
    <FormItem>
      <FormLabel>{title}</FormLabel>
      <Select onValueChange={field.onChange} value={field.value}>
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
        </FormControl>
        <SelectContent position="popper">
          {children}
        </SelectContent>
      </Select>
    </FormItem>
  );
};
