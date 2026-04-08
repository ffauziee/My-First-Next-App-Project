import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/views/auth/Login/login.module.scss";

export default function TampilanLogin() {
  const { push } = useRouter();
  const handlerLogin = () => {
    push("/produk");
  };

  return (
    <div className={styles.login}>
      <h1 className="mb-6 text-4xl font-bold text-blue-600">Halaman Login</h1>
      <div className={styles.card}>
        <div className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Masukkan username"
              className="transition-all duration-200 focus:ring-2 focus:ring-blue-400"
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Masukkan password"
              className="transition-all duration-200 focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
        </div>
        <button
          onClick={() => handlerLogin()}
          className="w-full px-6 py-3 font-semibold text-white transition-all duration-300 transform rounded-lg shadow-lg bg-gradient-to-r from-blue-500 to-blue-700 hover:shadow-xl hover:-translate-y-1"
        >
          Login
        </button>

        <p className="mt-4 text-center text-gray-700">Belum punya akun?</p>

        <Link
          href="/auth/register"
          className="inline-block mt-2 font-medium text-blue-600 transition-colors duration-200 hover:text-blue-800 hover:underline"
        >
          Ke halaman register
        </Link>
      </div>
    </div>
  );
}
