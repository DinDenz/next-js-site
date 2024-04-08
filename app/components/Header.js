import Link from "next/link";

const Header = () => {
  return (
    <header>
        <div><strong>NameOfSite</strong></div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;
