import TampilanProduk from "@/views/Produk";

export default function halamanProdukServer() {
    return (
        <div>
            <h1>Halaman Produk Server</h1>
            <TampilanProduk products={[]} />
        </div>
    )
}