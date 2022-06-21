import styles from "../styles/Product.module.css";

export default function Product({ name, image, price }) {
  return (
    <div className={styles.product}>
      <img id={styles.image} src={image} alt={name} />
      <div id={styles.name} className="blue">
        {name}
      </div>
      <div id={styles.price}>₹{price}</div>
    </div>
  );
}
