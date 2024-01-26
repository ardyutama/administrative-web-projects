import { CardList } from "./card-list";
import { ButtonNavigation } from "@/ui/button/button";
export const LayananManagement = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h4 className="text-3xl font-semibold tracking-tight">
          Layanan Management
        </h4>
        <ButtonNavigation title="Tambah Layanan" href="/tambah-layanan" />
      </div>
      <div className="w-full flex justify-center mt-6">
        <CardList />
      </div>
    </div>
  );
};
