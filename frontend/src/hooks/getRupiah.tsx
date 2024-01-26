export const getRupiah = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "IDR",
    }).format(amount)
}