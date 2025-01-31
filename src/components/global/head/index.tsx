import Link from "next/link";
import DesktopNav from "@/components/global/head/desktop-nav";
import { sanityFetch } from "@/sanity/lib/live";
import { LAYOUT_QUERY } from "@/sanity/lib/queries";

export default async function Header() {
  const { data: layout } = await sanityFetch({
    query: LAYOUT_QUERY,
  });

  return (
    <header
      className="sticky top-0 w-full border-border/40 z-50 bg-orange"
      style={{ background: "#00c4a3", color: "white" }}
    >
      <div className="container flex items-center justify-between h-20">
        <div className="flex items-center">
          <Link href="/" aria-label="Home page">
            <h1 className="text-2xl font-bold text-white-400">Who Cooks 🍽</h1>
          </Link>
        </div>
        <div className="hidden xl:flex gap-7 items-center justify-between">
          <DesktopNav navItems ={layout} />
        </div>
        <div className="flex items-center">
          <button>Login</button>
        </div>
      </div>
    </header>
  );
}
