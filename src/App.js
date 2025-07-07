import styles from "./App.module.css";
import { ProductCard } from './components/ProductCard';
import { ProductList } from './components/ProductList';
import { ProductFilter } from "./components/ProductFilter";
import { Fragment } from 'react';
import { useState } from "react";
import { products as  ProductLists} from "./data/products";

function App() {

  const products = [
    {
      id: 1,
    imageSrc:"images/iphone.png",
    title: "iPhone 15 Pro",
    specification: [
        "A17 Pro chip with 6-core GPU",
        "3x or 5x Telephoto camera",
        "Up to 29 hours video playback"
    ],
    price: 999,
    stockCount: 10,

},
{
  id: 2,
  imageSrc: "images/airpods.png",
  title: "AirPods Pro 2",
  specification: [
    "Noise Cancellation",
    "Dust, sweat, and water resistant",
    "Up to 6 hours of listening",
  ],
  price: 249,
  stockCount:0,
},
{
  id: 3,
  imageSrc: "images/watch.png",
  title: "Apple Watch 9",
  specification: [
    "45mm or 41mm case size",
    "Always-On Retina display",
    "Up to 18 hours normal use",
  ],
  price: 399,
  stockCount:4,
},
];

const [filters, setFilters] = useState({
  price: {
    min:0,
    max:999,
  }
});

const [favorites, setFavorites] = useState([]);

function handlePurchase(products){
  alert(`The price of ${products.title} is $${products.price}`);
}

function handleFilter(key, value) {
  setFilters((prevFilters) => ({
    ...prevFilters.price,
    [key]: value
  }))
}

function handleFavorites(productId){
  if(favorites.includes(products.id)){
    setFavorites((prevFavorites) => 
    prevFavorites.filter((id) => id !== productId))
  } else {
    setFavorites((prevFavorites) => 
    [...prevFavorites, productId])
  }
}

  return (
  
    <div className={styles.App}> 
      <ProductList>
        {products.map((product =>
          <ProductCard 
          product={product} 
          onPurchase={handlePurchase} 
          isFavorite={favorites.includes(product.id)}
          onFavorite={handleFavorites}
          key={product.title}/>
        )) 
      }
      </ProductList>

      <h2>Produtcs filtered by price:
        <ProductFilter 
        filters={filters} onFilter={handleFilter}
        />
        {products.filter(({ price }) => price >= filters.price.min && price <= filters.price.max)
        .map(({ title, price }) =>(
          <Fragment key={title}>
          <hr className={styles.ListDivider} />
          <p className={styles.ListHeader}>
            {title} costs ${price}
          </p>
        </Fragment>
        ))}
      </h2>

    </div>
  );
}

export default App;
