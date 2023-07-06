import Link from "next/link";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Oboe is Cool</Link>
        </li>
        <li>
          <Link href="/vendors">Vendors</Link>
        </li>
        <li>
          <Link href="/events">Events</Link>
        </li>
      </ul>
    </nav>
  );
};
