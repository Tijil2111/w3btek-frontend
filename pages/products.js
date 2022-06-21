import styles from "../styles/Products.module.css";
import { server_link } from "../SERVER_LINK.json";
import Product from "../Components/Product";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Products({ products }) {
  return (
    <div className={styles.productsContainer}>
      <div id={styles.left}>
        <h2 id={styles.heading}>Filter</h2>
        <div id={styles.filters}>
          <div className={styles.inputControl}>
            <input className={styles.filter} placeholder="Name" />
          </div>
          <div className={styles.inputControl}>
            <input className={styles.filter} placeholder="Category" />
          </div>
          <div className={styles.inputControl} id={styles.lastInputControl}>
            <input className={styles.filter} placeholder="Price" />
          </div>
          <button id={styles.search}>Search</button>
        </div>
      </div>
      <div id={styles.right}>
        <h1 id={styles.heading} className="blue">
          Discover
        </h1>
        <div id={styles.products}>
          {products.map((productData, index) => {
            return (
              <Product
                key={index}
                name={productData.name}
                image={productData.image}
                price={productData.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch(`${server_link}/api/products`);
  const products = await response.json();
  return {
    props: {
      products,
    },
  };
}
