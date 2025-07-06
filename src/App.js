import './App.css';
import { ProductCard } from './components/ProductCard';
import { ProductList } from './components/ProductList';
import { Fragment } from 'react';

function App() {

  const products = [
    {
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


function handlePurchase(products){
  alert(`The price of ${products.title} is $${products.price}`);
}

  return (
  
    <div className="App"> 
      <ProductList>
        {products.map((product =>
          <ProductCard 
          product={product} 
          onPurchase={handlePurchase} 
          key={product.title}/>
        )) 
      }
      </ProductList>

      <h2>Produtcs less than $500:
        {products.filter(({ price }) => price <= 500)
        .map(({ title, price }) =>(
          <Fragment key={title}>
          <hr className='ListDivider' />
          <p className='ListHeader'>
            {title} costs ${price}
          </p>
        </Fragment>
        ))}
      </h2>

    </div>
  );
}

export default App;
