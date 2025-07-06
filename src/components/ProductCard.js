import "./ProductCard.css";
export function ProductCard({ product, background = "slategray", handleClick}) {

    return (
      <article
      className="Container"
        style={{background}}
      >

      <h2>{product.title}</h2>
      <img
        src={product.imageSrc}
        alt="iPhone 15 Pro"
        width={128}
        height={128}
      />
      <p>Specification:</p>
      <ul className="SpecificationList">
        {product.specification.map((specific, index) => (
            <li key={index}> {specific}  </li>
        ))}
       </ul>
       <Status stockCount={product.stockCount}/>
      {product.stockCount > 0 && (
        <button onClick={() => handleClick(product)}>
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
    <p className="StatusNotAvailable">Not Available</p>);

    const availableTemplate =(
    <p className="StatusItemIsAvailable">{stockCount} items Available</p>);
    return stockCount === 0 ? notAvailable : availableTemplate;
  }