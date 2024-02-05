import { LayananDetailsSection } from "@/app/features/managements/layanan-details"
import { TableDetails } from "@/app/features/managements/layanan-details/table-section";

async function getLayananDetails(id: string) {
  const res = await fetch(`${process.env.API_ROUTE}/projects/` + id, { cache: 'no-store' });
  return res.json();
}

async function getVMSpecificationByProjects(id: string) {
  const res = await fetch(`${process.env.API_ROUTE}/vm-specifications-by-projects/` + id, { cache: 'no-store' });
  return res.json();
}

export default async function LayananDetails({ params }: { params: { id: string } }) {
  const data = await getLayananDetails(params.id);
  const vmdata = await getVMSpecificationByProjects(data.ID);
  console.log(vmdata)
    return (
    <LayananDetailsSection data={data}>
      <TableDetails data={vmdata} />
    </LayananDetailsSection>)
  }