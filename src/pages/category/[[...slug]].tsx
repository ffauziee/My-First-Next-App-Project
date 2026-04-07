import { useRouter } from "next/router";

export default function HalamanCategory() {
  const Router = useRouter();
  console.log(Router);

  return (
    <div>
      <h1>Halaman Kategori</h1>
      <p>
        Kategori:{" "}
        {Array.isArray(Router.query.slug)
          ? Router.query.slug.join("-")
          : Router.query.slug}
      </p>
    </div>
  );
}
