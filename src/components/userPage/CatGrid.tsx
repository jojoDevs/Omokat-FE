import React from "react";
import CatItem from "./CatItem";
import styles from "./styles/catGrid.module.scss";

const CatGrid = () => {
  return (
    <div className={styles.catGrid}>
      <CatItem></CatItem>
      <CatItem></CatItem>
      <CatItem></CatItem>
      <CatItem></CatItem>
      <CatItem></CatItem>
      <CatItem></CatItem>
      <CatItem></CatItem>
      <CatItem></CatItem>
      <CatItem></CatItem>
      <CatItem></CatItem>
    </div>
  );
};

export default CatGrid;
