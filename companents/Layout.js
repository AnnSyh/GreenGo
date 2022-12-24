import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

import Header from "./Header";
import Footer from "./Footer";

export const siteTitle = "GreenGo";

export default function Layout({ children, title = siteTitle }) {
  return (
    <div className={styles.height100}>
      <Head>
        <title>{title} | Next Course</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="og:title" content={title} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />
      <div className={styles.container}>
        <main>{children}</main>

        <Footer />
      </div>
    </div>
  );
}
