import { useRouter } from "next/router";
import Navbar from "../navbar";
import Footer from "../footer/footer";

const disableNavbar = ["/auth/login", "/auth/register", "/404"];
const disableFooter = ["/auth/login", "/auth/register", "/404"];

type AppShellProps = {
  children: React.ReactNode;
};

export default function AppShell(props: AppShellProps) {
  const { children } = props;
  const { pathname } = useRouter();
  const router = useRouter();
  console.log(router);
  return (
    <main>
      {!disableNavbar.includes(pathname) && <Navbar />}
      <div className="content-wrapper">{children}</div>
      {!disableFooter.includes(pathname) && <Footer />}
    </main>
  );
}