"use client";
import styles from "./header.module.css";
import { useRouter } from "next/navigation";

interface HeaderProps {
  title: string;
}
const Header = ({ title }: HeaderProps) => {
  const router = useRouter();
  return (
    <div className={styles.title}>
      <i
        onClick={() => router.back()}
        className="fa-solid fa-arrow-left cursor-pointer"
      ></i>
      <h1>{title}</h1>
      <i className="fa-solid fa-bookmark"></i>
    </div>
  );
};

export default Header;
