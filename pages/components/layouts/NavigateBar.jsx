export default function NavigateBar() {
  return (
    <aside className="flex flex-col h-screen w-1/4 justify-between lg:bg-slate-900">
      <section className="MOBILE-MENU flex p-10 lg:hidden">
        <div className="HAMBURGER-ICON space-y-2">
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
        </div>
      </section>
      <section className="sm:hidden">
        {" "}
        <div>DAFTAR</div>
        <nav className="relative -top-16 from-stone-50"> A</nav>
        <div>a</div>
      </section>
    </aside>
  );
}
