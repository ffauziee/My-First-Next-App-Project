import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "@/views/auth/Login/login.module.scss";
import { signIn } from "next-auth/react";

export default function TampilanLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { push } = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    const form = e.currentTarget;
    const email = form.email.value;
    const password = form.password.value;

    const result = await signIn("credentials", {
      redirect: false,
      email: email,
      password: password,
    });

    if (result.error) {
      setError("Email atau password salah");
      setIsLoading(false);
    } else {
      push("/products");
    }
  };

  return (
    <div className={styles.login}>
      <h1 className="mb-6 text-4xl font-bold text-gray-800">Halaman Login</h1>
      <div className={styles.card}>
        <form onSubmit={handleLogin} className={styles.form}>
          <div className={styles.formGroup}>
            <label
              htmlFor="email"
              className="text-sm font-semibold text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Masukkan email"
              className="transition-all duration-200 focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label
              htmlFor="password"
              className="text-sm font-semibold text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Masukkan password"
              className="transition-all duration-200 focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {error && (
            <p
              className={styles.error}
              style={{ color: "red", marginBottom: "8px", textAlign: "center" }}
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-6 py-3 mt-4 font-bold text-white transition-all duration-300 transform rounded-lg shadow-md bg-gradient-to-r from-green-500 to-green-700 hover:shadow-xl hover:-translate-y-1"
          >
            {isLoading ? "Loading..." : "Login"}
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          Belum punya akun?{" "}
          <Link
            href="/auth/register"
            className="font-semibold text-blue-600 transition-colors duration-200 hover:text-blue-800 hover:underline"
          >
            Daftar di sini
          </Link>
        </p>
      </div>
    </div>
  );
}
