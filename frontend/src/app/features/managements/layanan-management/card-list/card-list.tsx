import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Car, Search } from "lucide-react";
import { CardService } from "../card-service";
import { CardServiceType } from "../card-service/type";

async function getProjectListData(): Promise<CardServiceType[]> {
  const res = await fetch(`${process.env.API_ROUTE}/project-revenue`);
  return res.json();
}

export const CardList = async () => {
  const data = await getProjectListData();
  return (
    <div className="w-2/4 flex flex-col gap-4">
      <div className="flex gap-4">
        <Input />
        <Button variant={"outline"} size={"icon"}>
          <Search className="h-4 w-4" />
        </Button>
      </div>

      {data.map((item, index) => (
        <CardService
          key={index}
          id={item.id}
          project_name={item.project_name}
          service_name={item.service_name}
          total_vm={item.total_vm}
          revenue={item.revenue}
        />
      ))}
    </div>
  );
};
