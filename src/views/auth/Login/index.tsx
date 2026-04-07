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
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Halaman Login</h1>
      <div className={styles.card}>
        <button
          onClick={() => handlerLogin()}
          className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
        >
          Login
        </button>

        <p className="mt-4 text-center text-gray-700">Belum punya akun?</p>

        <Link
          href="/auth/register"
          className="inline-block mt-2 text-blue-600 font-medium hover:text-blue-800 hover:underline transition-colors duration-200"
        >
          Ke halaman register
        </Link>
      </div>
    </div>
  );
}
