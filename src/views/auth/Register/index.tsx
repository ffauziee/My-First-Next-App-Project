import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./Register.module.scss";

export default function TampilanRegister() {
  const [isLoading, setIsLoading] = useState(false);
  const { push } = useRouter();
  const [error, setError] = useState("");

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    const form = e.currentTarget;
    const fullname = form.fullname.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    if (password !== confirmPassword) {
      setError("Password tidak cocok");
      setIsLoading(false);
      return;
    }
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ email, fullname, password }),
      });
      if (response.status === 200) {
        form.reset();
        setIsLoading(false);
        push("/auth/login");
      } else {
        setIsLoading(false);
        setError(
          response.status === 400
            ? "user already exist"
            : "something went wrong",
        );
      }
    } catch (err) {
      setIsLoading(false);
      setError("something went wrong");
    }
  };

  return (
    <div className={styles.register}>
      <h1 className="mb-6 text-4xl font-bold text-gray-800">
        Halaman Register
      </h1>
      <div className={styles.card}>
        <form onSubmit={handleRegister} className={styles.form}>
          <div className={styles.formGroup}>
            <label
              htmlFor="fullname"
              className="text-sm font-semibold text-gray-700"
            >
              Nama Lengkap
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              placeholder="Masukkan nama lengkap"
              className="transition-all duration-200 focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

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

          <div className={styles.formGroup}>
            <label
              htmlFor="confirmPassword"
              className="text-sm font-semibold text-gray-700"
            >
              Konfirmasi Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Konfirmasi password"
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
            {isLoading ? "Loading..." : "Daftar"}
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          Sudah punya akun?{" "}
          <Link
            href="/auth/login"
            className="font-semibold text-blue-600 transition-colors duration-200 hover:text-blue-800 hover:underline"
          >
            Login di sini
          </Link>
        </p>
      </div>
    </div>
  );
}
