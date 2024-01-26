import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export const FormInput = ({ title, field, number, placeholder }: {title: string, field: any, number?: boolean, placeholder?: string}) => {
  return (
    <FormItem>
      <FormLabel>{title}</FormLabel>
      <FormControl>
        <Input {...field} type={number? 'number' : 'text'} placeholder={placeholder}/>
      </FormControl>
    </FormItem>
  );
};
