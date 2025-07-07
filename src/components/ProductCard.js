// import "./ProductCard.css";
import styles from "./ProductCard.module.css"
import { useState } from "react";
export function ProductCard({ 
    product,
    isFavorite, 
    background = "slategray",
    onPurchase, 
    onFavorite
}) {
    const [showMoreItems, setShowMoreItems] = useState(false);

    function handleClick(){
        onPurchase(product.id, product.stockCount - 1);
    }

    function handleTwoClicks(){
        onPurchase(product.id, product.stockCount - 2);
    }

        return (
        <article className={styles.Container} style={{ background }} >

            <button className={styles.Favorite} onClick={() => onFavorite(product.id)}>
                {isFavorite ? "❤️": "🤍"}
            </button>
            <h2>{product.title}</h2>
            <img
                src={product.imageSrc}
                alt="iPhone 15 Pro"
                width={128}
                height={128}
            />
            <p>Specification:{" "}
                <button onClick={() => setShowMoreItems(!showMoreItems)}>
                    {showMoreItems ? "hide" : "show"}
                </button>
            </p>

        {showMoreItems && (
                <ul className={styles.SpecificationList}>
            {product.specification.map((specific, index) => (
                <li key={index}> {specific}  </li>
            ))}
        </ul>
        )}
        <Status stockCount={product.stockCount}/>
        {product.stockCount > 0 && (
            <>
            <p>Price: ${product.price}</p>
            <button onClick={handleClick}>Buy</button>
            </>
        )}
        {product.stockCount > 1 && (<button onClick={handleTwoClicks}>Buy 2</button>)}
    </article>
    );
  }

  function Status({ stockCount }) {

    // This is the way with ternary operation
    // return stockCount === 0 ? (
    //     <p style={{ fontSize: "14px", color: "lightsalmon" }}>Not Available</p>
    //         ) : (
    //     <p style={{ fontStyle:"14px", color: "lightgreen" }}>{stockCount} items Available</p>)

    const notAvailable=(
    <p className={styles.StatusNotAvailable}>Not Available</p>);

    const availableTemplate =(
    <p className={styles.StatusItemIsAvailable}>{stockCount} items Available</p>);
    return stockCount === 0 ? notAvailable : availableTemplate;
  }