import { LayananDetailsSection } from "@/app/features/managements/layanan-details"

export default function LayananDetails({ params }: { params: { id: string } }) {
    return <LayananDetailsSection id={params.id} />
  }