import { useRouter } from "next/router";

export default function HalamanToko() {
  const Router = useRouter();
  console.log(Router);

  return (
    <div>
      <h1>Halaman Toko</h1>
      <p>
        Toko:{" "}
        {Array.isArray(Router.query.slug)
          ? Router.query.slug.join("-")
          : Router.query.slug}
      </p>
      <p>
        Kategori:{Router.query.slug ? Router.query.slug[0] : "Semua Kategori"}
      </p>
    </div>
  );
}
