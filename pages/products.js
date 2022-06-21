import styles from "../styles/Products.module.css";
import { server_link } from "../SERVER_LINK.json";
import Product from "../Components/Product";
import { useState } from "react";

export default function Products({ products }) {
  const [displayingProducts, setDisplayingProducts] = useState(products);

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");

  const filter = () => {
    if (!(name || type || price)) {
      setDisplayingProducts(products);
      return;
    }
    const intPrice = parseInt(price);
    let updatedProducts = [];

    if (name && name.trim().length > 0) {
      products.forEach((product) => {
        product.name.toLowerCase().includes(name.toLowerCase())
          ? updatedProducts.push(product)
          : {};
      });
    }
    if (updatedProducts.length > 0) {
      if (type && type.trim().length > 0) {
        updatedProducts.forEach((product, index) => {
          !product.type.toLowerCase().includes(type.toLowerCase())
            ? updatedProducts.splice(index, 1)
            : {};
        });
      }
    } else {
      if (type && type.trim().length > 0) {
        products.forEach((product, index) => {
          product.type.toLowerCase().includes(type.toLowerCase())
            ? updatedProducts.push(product)
            : {};
        });
      }
    }
    if (updatedProducts.length > 0) {
      if (intPrice != null) {
        updatedProducts.forEach((product, index) => {
          console.log(parseInt(product.price) <= 1500);
          !(parseInt(product.price) <= intPrice)
            ? updatedProducts.splice(index, 1)
            : {};
        });
      }
    } else {
      if (intPrice != null) {
        products.forEach((product, index) => {
          parseInt(product.price) <= intPrice
            ? updatedProducts.push(product)
            : {};
        });
      }
    }

    setDisplayingProducts(updatedProducts);
  };

  return (
    <div className={styles.productsContainer}>
      <div id={styles.left}>
        <h2 id={styles.heading}>Filter</h2>
        <div id={styles.filters}>
          <div className={styles.inputControl}>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              className={styles.filter}
              placeholder="Name"
            />
          </div>
          <div className={styles.inputControl}>
            <input
              value={type}
              onChange={(event) => setType(event.target.value)}
              className={styles.filter}
              placeholder="Category"
            />
          </div>
          <div className={styles.inputControl} id={styles.lastInputControl}>
            <input
              value={price}
              onChange={(event) => setPrice(event.target.value)}
              className={styles.filter}
              placeholder="Price"
            />
          </div>
          <button id={styles.search} onClick={filter}>
            Search
          </button>
        </div>
      </div>
      <div id={styles.right}>
        <h1 id={styles.heading} className="blue">
          Discover
        </h1>
        <div id={styles.products}>
          {displayingProducts.map((productData, index) => {
            return (
              <Product
                key={index}
                name={productData.name}
                image={productData.image}
                type={productData.type}
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
