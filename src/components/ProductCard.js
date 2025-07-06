// import "./ProductCard.css";
import styles from "./ProductCard.module.css"
export function ProductCard({ product, background = "slategray", onPurchase}) {

let stockCount = product.stockCount;

function handleClick(){
    stockCount = stockCount - 1;
    console.log("stockCount", stockCount);
    onPurchase(product);
}

    return (
      <article
      className={styles.Container}
        style={{ background }}
      >

      <h2>{product.title}</h2>
      <img
        src={product.imageSrc}
        alt="iPhone 15 Pro"
        width={128}
        height={128}
      />
      <p>Specification:</p>
      <ul className={styles.SpecificationList}>
        {product.specification.map((specific, index) => (
            <li key={index}> {specific}  </li>
        ))}
       </ul>
       <Status stockCount={stockCount}/>
      {product.stockCount > 0 && (
        <button onClick={handleClick}>
            Buy (From ${product.price})
        </button>
        )}
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