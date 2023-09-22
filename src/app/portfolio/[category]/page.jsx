import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";
import Img from "public/pexels.jpg";
import { items } from "./data";
import { notFound } from "next/navigation";

const getData = (category) => {
  const data = items[category];

  if (data) {
    return data;
  }

  return notFound();
};

const CategoryName = ({ params }) => {
  const data = getData(params.category);

  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>

      {data.map((cat) => (
        <div className={styles.item} key={cat.it}>
          <div className={styles.content}>
            <h1 className={styles.title}>{cat.title}</h1>
            <p className={styles.desc}>{cat.desc}</p>

            <Button text="See More" url="#" />
          </div>

          <div className={styles.imgContainer}>
            <Image className={styles.img} src={cat.image} fill={true} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryName;
