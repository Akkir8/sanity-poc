export default function Header() {
  return (
    <header className="fixed top-0 z-40 flex h-header-sm w-full px-4 md:px-8 lg:h-header-lg">
      <nav className="relative hidden items-stretch justify-start gap-6 text-sm font-bold lg:flex">
        <div className="flex items-center">
          <a className="linkTextNavigation">Home</a>
        </div>
        <div className="flex items-center">
          <a className="linkTextNavigation">Post</a>
        </div>
        <div className="flex items-center">
          <a className="linkTextNavigation">Orde Now</a>
        </div>
      </nav>
    </header>
  );
}
