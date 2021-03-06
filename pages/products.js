import styles from "../styles/Products.module.css";
import { server_link } from "../SERVER_LINK.json";
import Product from "../Components/Product";
import { useState } from "react";
import { faFilter, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";

export default function Products({ products }) {
  const [displayingProducts, setDisplayingProducts] = useState(products);

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");

  const [open, setOpen] = useState(false);

  const filter = () => {
    if (!(name || type || price)) {
      setDisplayingProducts(products);
      return;
    }
    const intPrice = parseInt(price);
    let updatedProducts = [];

    if (name && name.trim().length > 0) {
      updatedProducts = products.filter((product) =>
        product.name.toLowerCase().includes(name.toLowerCase())
      );
    }
    if (type && type.trim().length > 0) {
      if (updatedProducts.length > 0) {
        if (type && type.trim().length > 0) {
          updatedProducts = updatedProducts.filter((product) =>
            product.type.toLowerCase().includes(type.toLowerCase())
          );
        }
      } else {
        if (type && type.trim().length > 0) {
          updatedProducts = products.filter((product) =>
            product.type.toLowerCase().includes(type.toLowerCase())
          );
        }
      }
    }
    if (!(intPrice != 0 && !intPrice)) {
      if (updatedProducts.length > 0) {
        updatedProducts = updatedProducts.filter(
          (product) => parseInt(product.price) <= intPrice
        );
      } else {
        updatedProducts = products.filter(
          (product) => parseInt(product.price) <= intPrice
        );
      }
    }

    setDisplayingProducts(updatedProducts);
    setOpen(false);
  };

  return (
    <>
      <Head>
        <title>Products - Tunesmith</title>
      </Head>
      <div className={styles.productsContainer}>
        <FontAwesomeIcon
          onClick={() => (!open ? setOpen(true) : setOpen(false))}
          icon={!open ? faFilter : faTimes}
          id={styles.icon}
          className={open ? styles.hidden : styles.iconVisible}
        />
        <div id={styles.left} className={open ? styles.visible : ""}>
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
    </>
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
