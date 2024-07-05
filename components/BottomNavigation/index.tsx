import Link from "next/link";
import React from "react";
import styles from "./index.module.css";

const BottomNavigation = () => {
  return (
    <div className={styles.tabsBarBottom}>
      {/* Home */}
      <Link href="/">
        <div className={styles.tabButtonBottom}>
          <i className="fa-solid fa-house"></i>
        </div>
      </Link>

      {/* Search */}
      <Link href="/search">
        <div className={styles.tabButtonBottom}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </Link>

      {/* Watchlist */}
      <Link href="/watchlist">
        <div className={styles.tabButtonBottom}>
          <i className="fa-solid fa-clipboard-list"></i>
        </div>
      </Link>
    </div>
  );
};

export default BottomNavigation;
