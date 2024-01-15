export const NameValueItem = ({ name, value }: { name: string, value: string }) => {
    return (
        <div data-slot="name-value" className="text-nowrap">
            <h4 className="font-medium text-muted-foreground">{name}</h4>
            <p>{value}</p>
        </div>
    )
}