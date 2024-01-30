import { LayananDetailsSection } from "@/app/features/managements/layanan-details";
import { Suspense } from "react";

export default function LayananDetails({ params }: { params: { id: string } }) {
  return <LayananDetailsSection id={params.id} />
}