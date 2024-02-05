"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { DataTable } from "@/app/features/ui/table";
import { columns } from "./table-data/columns";
import { resourceTypes } from "./resourceType";

async function getDataTable(value:string){
  const res = await fetch(`http://127.0.0.1:8080/api/v1/${value}`,{ cache: 'no-store' });
  return res.json();
}

export default function Admin() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [input, setInput] = React.useState("");
  const [data,setData] = React.useState([]);
  const { toast } = useToast();
  console.log(data)
  const handlePost = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8080/api/v1/${value}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: input,
        }),
      });

      if (!response.ok) {
        const errorMessage = await response.json();
        throw new Error(errorMessage.error);
      }
      toast({
        description: "Type added successfully.",
        variant: "default",
      });
    } catch (error) {
      toast({
        description: error.message,
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (value) {
        try {
          const newData = await getDataTable(value);
          console.log(newData)
          setData(newData);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };
    fetchData();
  }, [value]); // Fetch data whenever value change

  return (
    <div className="flex justify-between">
      <div className="flex flex-col space-y-4 w-[200px]">
        <p className="text-lg font-bold">Pilih Resource</p>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[200px] justify-between"
            >
              {value
                ? resourceTypes.find((type) => type.value === value)?.label
                : "Pilih Tipe..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Pilih Tipe..." />
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup>
                {resourceTypes.map((type) => (
                  <CommandItem
                    key={type.value}
                    value={type.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === type.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {type.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
        <p className="text-lg font-bold">Input Tipe Baru</p>
        <Input
          type="text"
          placeholder="Isi Tipe Baru"
          onChange={(e) => setInput(e.target.value)}
        />
        <Button className="block" onClick={handlePost}>
          Submit
        </Button>
      </div>
      <div className="w-1/4">
      <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
