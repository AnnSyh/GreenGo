import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/nav.module.css";

const nav = [
  { id: 1, title: "home", path: "/" },
  { id: 2, title: "contacts", path: "/contacts" },
];

const Navbar = () => {
  const { pathname } = useRouter(); //подсвечиваем акт ссылку

  return (
    <div className="navbar">
      <ul className="navbar-ul">
        {nav.map(({ id, title, path }) => (
          <li key={id}>
            <Link
              href={path}
              className={pathname === path ? styles.active : null}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
