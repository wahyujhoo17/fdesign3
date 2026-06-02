import Image from "next/image";
import { ArrowUpRight, Heart, Search, ShoppingCart, UserCircle } from "lucide-react";

const colors = [
  { src: "/products/coral-jacket-v2.png", label: "Moss" },
  { src: "/products/olive-jacket-v2.png", label: "Sand" },
  { src: "/products/tan-jacket-v2.png", label: "Rust" },
  { src: "/products/hero-jacket-v2.png", label: "Mustard" },
];

const products = [
  {
    title: "3X BEIGEWASHED",
    src: "/products/tan-jacket-v2.png",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. ut et odio id turpis blandit dignissim. in non arcu ullamcorper, bibendum ex non, dapibus dui. sed in ipsum ac leo",
  },
  {
    title: "3X BEIGEWASHED",
    src: "/products/coral-jacket-v2.png",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. ut et odio id turpis blandit dignissim. in non arcu ullamcorper, bibendum ex non, dapibus dui. sed in ipsum ac leo",
  },
  {
    title: "3X BEIGEWASHED",
    src: "/products/olive-jacket-v2.png",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. ut et odio id turpis blandit dignissim. in non arcu ullamcorper, bibendum ex non, dapibus dui. sed in ipsum ac leo",
  },
];

export default function Home() {
  return (
    <main className="storefront">
      <header className="nav">
        <a className="brand" href="#">JACKET.</a>
        <nav className="navLinks" aria-label="Primary navigation">
          <a href="#">PRODUCTS</a>
          <a href="#">CATEGORY</a>
          <a href="#">MORE</a>
        </nav>
        <nav className="navLinks right" aria-label="Secondary navigation">
          <a href="#">ABOUT US</a>
          <a href="#">CONTACT</a>
        </nav>
        <div className="iconGroup" aria-label="Store actions">
          <button aria-label="Search"><Search size={18} /></button>
          <button aria-label="Cart"><ShoppingCart size={18} /></button>
          <button aria-label="Account"><UserCircle size={18} /></button>
        </div>
      </header>

      <section className="hero" aria-label="Featured jacket">
        <div className="productIntro">
          <p className="eyebrow">NEW</p>
          <h1>HIKING<br />ICE<br />PROOF</h1>
          <p className="price">$560</p>
          <div className="rule" />
          <h2>DESCRIPTION</h2>
          <p className="description">
            lorem ipsum dolor sit amet, consectetur adipiscing elit. ut et odio id turpis blandit dignissim. in non arcu ullamcorper, bibendum ex non, dapibus dui. sed in ipsum ac leo
          </p>
          <a className="readMore" href="#">READ MORE</a>
        </div>

        <div className="heroVisual">
          <p className="megaText">FASHION<br />FORWED</p>
          <Image
            className="heroJacket"
            src="/products/coral-jacket-v2.png"
            alt="Mustard yellow quilted puffer jacket with gray hoodie"
            width={1600}
            height={1600}
            priority
            unoptimized
          />
        </div>

        <aside className="purchasePanel" aria-label="Product options">
          <h2>SIZE</h2>
          <div className="sizes" aria-label="Available sizes">
            {["S", "M", "L", "XL"].map((size) => (
              <button className={size === "M" ? "active" : ""} key={size}>
                {size}
              </button>
            ))}
          </div>
          <a className="sizeGuide" href="#">SIZE GUIDE</a>

          <h2 className="colourTitle">COLOUR</h2>
          <div className="swatches">
            {colors.map((color) => (
              <button className="swatch" aria-label={color.label} key={color.label}>
                <Image src={color.src} alt="" width={94} height={74} />
              </button>
            ))}
          </div>

          <button className="cartButton">
            ADD TO CART <ShoppingCart size={15} />
          </button>
          <button className="favoriteButton">
            FAVOURITE <Heart size={15} fill="currentColor" />
          </button>
        </aside>
      </section>

      <section className="productGrid" aria-label="Product collection">
        {products.map((product) => (
          <article className="productCard" key={product.src}>
            <div className="cardImage">
              <Image src={product.src} alt={product.title} width={420} height={520} />
            </div>
            <div className="cardTitleRow">
              <h3>{product.title}</h3>
              <button aria-label={`Open ${product.title}`}>
                <ArrowUpRight size={20} />
              </button>
            </div>
            <p>{product.text}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
