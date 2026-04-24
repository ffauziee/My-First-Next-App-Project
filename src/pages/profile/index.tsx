import { getSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export default function ProfilePage() {
  const { data: session } = useSession();

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Selamat Datang {session?.user?.fullname}</h1>
      <p>Email: {session?.user?.email}</p>
    </div>
  );
}
