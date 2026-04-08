import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Register.module.scss";

export default function TampilanRegister() {
  const { push } = useRouter();
  
  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Logika register di sini
    push("/auth/login");
  };

  return (
    <div className={styles.register}>
      <h1 className="mb-6 text-4xl font-bold text-gray-800">Halaman Register</h1>
      <div className={styles.card}>
        <form onSubmit={handleRegister} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className="text-sm font-semibold text-gray-700">
              Nama Lengkap
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Masukkan nama lengkap"
              className="transition-all duration-200 focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="email" className="text-sm font-semibold text-gray-700">
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
            <label htmlFor="password" className="text-sm font-semibold text-gray-700">
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
            <label htmlFor="confirmPassword" className="text-sm font-semibold text-gray-700">
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
          
          <button 
            type="submit" 
            className="w-full px-6 py-3 mt-4 font-bold text-white transition-all duration-300 transform rounded-lg shadow-md bg-gradient-to-r from-green-500 to-green-700 hover:shadow-xl hover:-translate-y-1"
          >
            Daftar
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
