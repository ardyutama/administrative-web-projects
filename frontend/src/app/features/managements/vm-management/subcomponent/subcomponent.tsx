import { Row } from "@tanstack/react-table"
import { VirtualMachine } from "../type";
import { Separator } from "@/components/ui/separator";
export const renderSubComponent = ({ row }: { row: Row<VirtualMachine> }) => {
    return (
        <div className="flex gap-8 pl-20 py-6 ">
            <div className="flex flex-col">
                <div className="text-lg mb-2 font-semibold">Network</div>
                <div className={`inline-grid grid-rows-2 grid-flow-col gap-y-2 gap-x-8`}>
                    <div>
                        <p className="font-medium text-muted-foreground">IP Public</p>
                        <p>{row.getValue("ip_public")}</p>
                    </div>
                    <div>
                        <p className="font-medium text-muted-foreground">IP Local</p>
                        <p>{row.getValue("ip_local")}</p>
                    </div>
                    <div>
                        <p className="font-medium text-muted-foreground">Port</p>
                        <p>{row.getValue("port")}</p>
                    </div>
                    <div>
                        <p className="font-medium text-muted-foreground">VPC Name</p>
                        <p>{row.getValue("vpc_name")}</p>
                    </div>
                </div>
            </div>
            <div>
                <Separator orientation="vertical" />
            </div>
            <div className="flex flex-col">
                <div className="text-lg mb-2 font-semibold">Contract</div>
                <div className={`inline-grid grid-rows-2 grid-flow-col gap-y-2 gap-x-8`}>
                    <div>
                        <p className="font-medium text-muted-foreground">No Modin</p>
                        <p>{row.getValue("no_modin")}</p>
                    </div>
                    <div>
                        <p className="font-medium text-muted-foreground">GL Account</p>
                        <p>{row.getValue("gl_account")}</p>
                    </div>
                    <div>
                        <p className="font-medium text-muted-foreground">Cost Center</p>
                        <p>{row.getValue("cost_center")}</p>
                    </div>
                    <div>
                        <p className="font-medium text-muted-foreground">Dasar Permintaan</p>
                        <p>{row.getValue("request_based_type")}</p>
                    </div>
                    <div>
                        <p className="font-medium text-muted-foreground">Tanggal Permintaan</p>
                        <p>{row.getValue("contract_document_date")}</p>
                    </div>
                    <div>
                        <p className="font-medium text-muted-foreground">Tanggal Deploy</p>
                        <p>{row.getValue("deployement_date")}</p>
                    </div>
                    <div>
                        <p className="font-medium text-muted-foreground">Kontrak Expired</p>
                        <p>{row.getValue("contract_expired")}</p>
                    </div>
                    <div>
                        <p className="font-medium text-muted-foreground">Durasi</p>
                        <p>{row.getValue("contract_duration")} Hari</p>
                    </div>
                </div>
            </div>
            <div>
                <Separator orientation="vertical" />
            </div>
            <div className="flex flex-col">
                <div className="text-lg mb-2 font-semibold">Tipe</div>
                <div className={`inline-grid grid-rows-2 grid-flow-col gap-y-2 gap-x-8`}>
                    <div>
                        <p className="font-medium text-muted-foreground">Tipe Service</p>
                        <p>{row.getValue("service_type")}</p>
                    </div>
                    <div>
                        <p className="font-medium text-muted-foreground">Tipe VM</p>
                        <p>{row.getValue("vm_type")}</p>
                    </div>
                </div>
            </div>
            <div>
                <Separator orientation="vertical" />
            </div>
            <div className="flex flex-col">
                <div className="text-lg mb-2 font-semibold">Peruntukkan</div>
                <div className={`inline-grid grid-rows-2 grid-flow-col gap-y-2 gap-x-8`}>
                    <p>{row.getValue("purpose")}</p>
                </div>
            </div>
        </div>
    );
};