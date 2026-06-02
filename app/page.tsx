"use client";

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
    src: "/products/hero-jacket-v2.png",
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

      {/* Craftsmanship Section */}
      <section className="editorialSection" aria-label="Brand Philosophy">
        <div className="editorialText">
          <p className="eyebrow">THE CRAFT</p>
          <h2>METICULOUS DETAIL</h2>
          <p className="editorialDesc">
            Every seam is heat-sealed, every pocket is micro-insulated, and the double-layered hood is sculpted to deflect urban wind channels without restricting visibility. Designed to endure shifting conditions seamlessly.
          </p>
          <div className="featuresGrid">
            <div className="featureItem">
              <h4>01 / WATERPROOF</h4>
              <p>DWR-coated face fabric keeps moisture out while staying incredibly breathable.</p>
            </div>
            <div className="featureItem">
              <h4>02 / DUAL HOOD</h4>
              <p>Layered drawstring adjustment blocks high wind currents efficiently.</p>
            </div>
            <div className="featureItem">
              <h4>03 / WARMTH RATING</h4>
              <p>Heat-set quilted lining optimized for temperatures down to -15°C.</p>
            </div>
          </div>
        </div>
        <div className="editorialVisual">
          <div className="editorialImageWrap">
            <Image 
              src="/products/detail-jacket.png" 
              alt="Craftsmanship detail showing waterproof ripstop fabric and zipper close-up" 
              width={540} 
              height={640} 
              className="editorialImg" 
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter" aria-label="Newsletter Subscription">
        <div className="newsletterContent">
          <h2>JOIN THE CLUB</h2>
          <p>Subscribe to receive early access to seasonal drops, private sales, and product restocks.</p>
          <form className="subscribeForm" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="ENTER YOUR EMAIL" aria-label="Email address" required />
            <button type="submit">SUBSCRIBE</button>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer" aria-label="Store footer">
        <div className="footerColumns">
          <div className="footerBrandCol">
            <a className="brand" href="#">JACKET.</a>
            <p className="brandMotto">Architectural outerwear made for city routes and high winds.</p>
          </div>
          <div className="footerCol">
            <h4>SHOP</h4>
            <a href="#">OUTERWEAR</a>
            <a href="#">PUFFERS</a>
            <a href="#">NEW IN</a>
          </div>
          <div className="footerCol">
            <h4>SUPPORT</h4>
            <a href="#">SIZING GUIDE</a>
            <a href="#">CARE GUIDE</a>
            <a href="#">RETURNS & REFUNDS</a>
          </div>
          <div className="footerCol">
            <h4>COMPANY</h4>
            <a href="#">OUR STORY</a>
            <a href="#">STORES</a>
            <a href="#">CONTACT</a>
          </div>
        </div>
        <div className="footerBottom">
          <p>© 2026 JACKET. ALL RIGHTS RESERVED. by BAGUS WS</p>
          <div className="footerSocials">
            <a href="#" aria-label="Instagram">INSTAGRAM</a>
            <a href="#" aria-label="Pinterest">PINTEREST</a>
            <a href="#" aria-label="X">X</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
