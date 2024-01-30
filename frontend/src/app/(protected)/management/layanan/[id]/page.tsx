import { LayananDetailsSection } from "@/app/features/managements/layanan-details"
import { TableDetails } from "@/app/features/managements/layanan-details/table-section";

async function getLayananDetails(id: string) {
  const res = await fetch(`${process.env.API_ROUTE}/projects/` + id, { cache: 'no-store' });
  return res.json();
}

export default async function LayananDetails({ params }: { params: { id: string } }) {
  const data = await getLayananDetails(params.id)
    return (
    <LayananDetailsSection data={data}>
      <TableDetails data={data} />
    </LayananDetailsSection>)
  }