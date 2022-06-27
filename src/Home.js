import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://www.erajaya.com/files/uploads/newseventattachment/uri/2021/Jan/15/600188b518f4a/available-web-banner-iphone-12-pro-dekstop-1091x_.jpg?token=3063ae63cef065bef572f6acc6e2787c"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Motorola Edge 30 Pro"
            price={99.00}
            desc="8GB of RAM || 128GB of storage || 4800mAh Battery"
            rating={4}
            image="https://i.gadgets360cdn.com/products/large/motorola-edge-30-pro-657x800-1645713862.jpg?downsize=*:180"
          />
          <Product
            id="49538094"
            title="Samsung Galazy M32"
            price={23000}
            desc="4GB of RAM || 64GB of storage || 6000mAh Battery"
            rating={5}
            image="https://m.media-amazon.com/images/I/41ZGJxnJu1S.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="iPhone 13 Pro"
            price={169000}
            desc="18GB of RAM || 1TB of storage || 12000mAh Battery"
            rating={5}
            image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-blue-select?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1645552346275"
          />
          <Product
            id="23445930"
            title="OnePlus 10"
            price={9883.99}
            desc="6GB of RAM || 32GB of storage || 3000mAh Battery"
            rating={4}
            image="https://www.91-img.com/pictures/144234-v7-oneplus-10-pro-mobile-phone-large-1.jpg?tr=q-80"
          />
          <Product
            id="3254354345"
            title="RealMe Marzo"
            price={9999.99}
            desc="6GB of RAM || 32GB of storage || 3000mAh Battery"
            rating={3}
            image="https://image01.realme.net/general/20220513/1652442346708.png"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung S22 Ultra"
            desc="6GB of RAM || 64GB of storage || 8000mAh Battery"
            price={42209}
            rating={4}
            image="https://cdn.shopify.com/s/files/1/0356/7963/3540/products/samsung-mobile-phone-samsung-galaxy-s22-ultra-12gb-256gb-6-8-dynamic-amoled-2x-120hz-hdr10-display-octa-core-quad-rear-cam-108mp-10mp-10mp-12mp-selfie-cam-40mp-free-galaxy-buds-pro-sc_grande.jpg?v=1649503344"
          />
          <Product
            id="32543543"
            title="Samsung Galaxy A52"
            desc="6GB of RAM || 32GB of storage || 3000mAh Battery"
            price={15000}
            rating={3}
            image="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/16245-82-1.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="iPhone 13 Pro"
            price={169000}
            desc="18GB of RAM || 1TB of storage || 12000mAh Battery"
            rating={5}
            image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-blue-select?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1645552346275"
          />
          <Product
            id="23445930"
            title="OnePlus 10"
            price={9883.99}
            desc="6GB of RAM || 32GB of storage || 3000mAh Battery"
            rating={4}
            image="https://www.91-img.com/pictures/144234-v7-oneplus-10-pro-mobile-phone-large-1.jpg?tr=q-80"
          />
          <Product
            id="3254354345"
            title="RealMe Marzo"
            price={9999.99}
            desc="6GB of RAM || 32GB of storage || 3000mAh Battery"
            rating={3}
            image="https://image01.realme.net/general/20220513/1652442346708.png"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
