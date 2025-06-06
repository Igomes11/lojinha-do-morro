import React from "react";
import Image from "next/image";
import styles from "./ProductItem.module.css";

const ProductItem = ({ product }) => {
  if (!product) {
    return null;
  }
  return (
    <div className={styles.productItem}>
      <div className={styles.imageContainer}>
        <Image
          width={200}
          height={200}
          src={product.image}
          alt={product.title}
          className={styles.productImage}
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className={styles.productInfo}>
        <h2 className={styles.productName}>{product.title}</h2>
        <p className={styles.productCategory}>Categoria: {product.category}</p>
        <p className={styles.productPrice}>
          R$ {product.price.toFixed(2).replace(".", ",")}
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
