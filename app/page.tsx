
"use client";

import { useMemo, useState } from "react";

const properties = [
  {
    id: 1,
    name: "The Modern Residence",
    location: "Los Angeles, California",
    price: 1250000,
    type: "House",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 2,
    name: "The Courtyard House",
    location: "Miami, Florida",
    price: 890000,
    type: "House",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 3,
    name: "The Architectural Villa",
    location: "Lisbon, Portugal",
    price: 1680000,
    type: "Villa",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85",
  },
];

const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);

export default function Home() {
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("All properties");

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const matchesLocation = property.location
        .toLowerCase()
        .includes(location.trim().toLowerCase());

      const matchesType =
        propertyType === "All properties" ||
        property.type === propertyType;

      return matchesLocation && matchesType;
    });
  }, [location, propertyType]);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="/" aria-label="Property To Go home">
          <span className="brand-mark">P.</span>
          <span>PROPERTY TO GO</span>
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#properties">Properties</a>
          <a href="#about">Our approach</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="header-cta" href="#properties">
          Explore properties <span>↗</span>
        </a>
      </header>

      <section className="hero">
        <div className="hero-image" role="img" aria-label="Contemporary luxury architecture" />
        <div className="hero-overlay" />

        <div className="hero-content">
          <p className="eyebrow hero-eyebrow">
            REAL ESTATE. RECONSIDERED.
          </p>

          <h1>
            Find a place
            <br />
            to <em>belong.</em>
          </h1>

          <p className="hero-description">
            Exceptional properties. Thoughtful choices.
            <br className="desktop-break" />
            A more direct way to find your next home.
          </p>

          <a className="hero-button" href="#properties">
            Discover properties <span>↗</span>
          </a>
        </div>

        <div className="hero-caption">
          <span>01 / A DIFFERENT PERSPECTIVE</span>
          <span>HOMES WORTH COMING HOME TO</span>
        </div>
      </section>

      <section className="intro-strip" id="about">
        <p>PROPERTY TO GO — DIRECT PROPERTY SALES</p>
        <p>
          A considered collection of homes, selected for the way you want to
          live.
        </p>
      </section>

      <section className="properties-section" id="properties">
        <div className="section-heading">
          <div>
            <p className="eyebrow">THE COLLECTION</p>
            <h2>Find your next <em>address.</em></h2>
          </div>

          <p className="section-note">
            Explore properties and discover the possibilities.
          </p>
        </div>

        <form
          className="property-search"
          onSubmit={(event) => {
            event.preventDefault();
            document
              .getElementById("property-results")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <label className="search-field">
            <span>LOCATION</span>
            <input
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              placeholder="Enter a city or country"
              aria-label="Search by location"
            />
          </label>

          <label className="search-field type-field">
            <span>PROPERTY TYPE</span>
            <select
              value={propertyType}
              onChange={(event) => setPropertyType(event.target.value)}
              aria-label="Choose property type"
            >
              <option>All properties</option>
              <option>House</option>
              <option>Villa</option>
            </select>
          </label>

          <button className="search-button" type="submit">
            Search <span>↗</span>
          </button>
        </form>

        <div className="results-heading" id="property-results">
          <h3>Explore the collection</h3>
          <span>{filteredProperties.length} properties</span>
        </div>

        <div className="property-grid">
          {filteredProperties.map((property) => (
            <article className="property-card" key={property.id}>
              <div className="property-image-wrap">
                <img
                  className="property-image"
                  src={property.image}
                  alt={`Architectural example for ${property.name}`}
                />
                <span className="property-label">PROPERTY PREVIEW</span>
              </div>

              <div className="property-card-info">
                <div>
                  <p className="property-location">{property.location}</p>
                  <h3>{property.name}</h3>
                </div>
                <p className="property-price">{formatPrice(property.price)}</p>
              </div>
            </article>
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <div className="empty-results">
            <h3>No matching previews</h3>
            <p>Try another location or property type.</p>
            <button
              className="text-button"
              onClick={() => {
                setLocation("");
                setPropertyType("All properties");
              }}
            >
              Clear filters ↗
            </button>
          </div>
        )}

        <p className="demo-disclaimer">
          These are illustrative design previews, not verified properties for
          sale. We will replace them with your company&apos;s actual inventory
          before launch.
        </p>
      </section>

      <section className="closing-section" id="contact">
        <p className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</p>
        <h2>
          A place of your own.
          <br />
          <em>A process made simpler.</em>
        </h2>
        <a className="closing-button" href="mailto:hello@propertytogo.com">
          Get in touch <span>↗</span>
        </a>
      </section>

      <footer className="site-footer">
        <a className="brand footer-brand" href="/">
          <span className="brand-mark">P.</span>
          <span>PROPERTY TO GO</span>
        </a>
        <p>Property, approached differently.</p>
        <span>© 2026 Property To Go</span>
      </footer>
    </main>
  );
}
