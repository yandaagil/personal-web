import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link href="/" className="logo">
          yanda();
        </Link>
        <ul className="nav-links">
          <li>
            <Link href="/" className="nav-item">
              Beranda
            </Link>
            <Link href="/about" className="nav-item">
              Profil
            </Link>
            <Link href="/portfolio" className="nav-item">
              Portofolio
            </Link>
            <Link href="/contact" className="nav-item">
              Kontak
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
