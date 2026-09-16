import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useQuote } from "../context/QuoteContext";
import api from "../services/api";

import "../styles/inventory.css";


function Inventory() {

  const navigate = useNavigate();

  const {
    addItem,
    count,
  } = useQuote();


  // =========================================================
  // STATE
  // =========================================================

  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [search, setSearch] = useState("");

  const [productFilter, setProductFilter] =
    useState("All products");

  const [categoryFilter, setCategoryFilter] =
    useState("All categories");

  const [materialFilter, setMaterialFilter] =
    useState("All materials");

  const [sizeFilter, setSizeFilter] =
    useState("All sizes");

  const [processFilter, setProcessFilter] =
    useState("All processes");


  const [addingId, setAddingId] =
    useState(null);


  // =========================================================
  // FETCH PRODUCTS
  // =========================================================

  useEffect(() => {

    fetchProducts();

  }, []);


  const fetchProducts = async () => {

    try {

      setLoading(true);

      setError("");

      const response =
        await api.get("/products/");

      const data =
        Array.isArray(response.data)
          ? response.data
          : [];

      setProducts(data);

    } catch (err) {

      console.error(
        "INVENTORY PRODUCTS ERROR:",
        err
      );

      setError(
        err.response?.data?.detail ||
        "Unable to load inventory."
      );

    } finally {

      setLoading(false);

    }
  };


  // =========================================================
  // UNIQUE FILTER OPTIONS
  // =========================================================

  const productOptions =
    useMemo(() => {

      const values =
        products
          .map(
            (item) =>
              item.name
          )
          .filter(Boolean);

      return [
        ...new Set(values)
      ];

    }, [products]);


  const categoryOptions =
    useMemo(() => {

      const values =
        products
          .map(
            (item) =>
              item.category
          )
          .filter(Boolean);

      return [
        ...new Set(values)
      ];

    }, [products]);


  const materialOptions =
    useMemo(() => {

      const values =
        products
          .map(
            (item) =>
              item.material
          )
          .filter(Boolean);

      return [
        ...new Set(values)
      ];

    }, [products]);


  const sizeOptions =
    useMemo(() => {

      const values =
        products
          .map(
            (item) =>
              item.size
          )
          .filter(Boolean);

      return [
        ...new Set(values)
      ];

    }, [products]);


  const processOptions =
    useMemo(() => {

      const values =
        products
          .map(
            (item) =>
              item.process
          )
          .filter(Boolean);

      return [
        ...new Set(values)
      ];

    }, [products]);


  // =========================================================
  // FILTER PRODUCTS
  // =========================================================

  const filteredProducts =
    useMemo(() => {

      const searchValue =
        search
          .trim()
          .toLowerCase();


      return products.filter(
        (product) => {

          // -----------------------------------------
          // SEARCH
          // -----------------------------------------

          const searchableText = [

            product.part_number,

            product.name,

            product.description,

            product.category,

            product.sub_category,

            product.material,

            product.size,

            product.standard,

            product.grade,

            product.process,

          ]
            .filter(Boolean)
            .join(" ")
            .toLowerCase();


          const matchesSearch =
            !searchValue ||
            searchableText.includes(
              searchValue
            );


          // -----------------------------------------
          // PRODUCT
          // -----------------------------------------

          const matchesProduct =
            productFilter ===
              "All products" ||
            product.name ===
              productFilter;


          // -----------------------------------------
          // CATEGORY
          // -----------------------------------------

          const matchesCategory =
            categoryFilter ===
              "All categories" ||
            product.category ===
              categoryFilter;


          // -----------------------------------------
          // MATERIAL
          // -----------------------------------------

          const matchesMaterial =
            materialFilter ===
              "All materials" ||
            product.material ===
              materialFilter;


          // -----------------------------------------
          // SIZE
          // -----------------------------------------

          const matchesSize =
            sizeFilter ===
              "All sizes" ||
            product.size ===
              sizeFilter;


          // -----------------------------------------
          // PROCESS
          // -----------------------------------------

          const matchesProcess =
            processFilter ===
              "All processes" ||
            product.process ===
              processFilter;


          return (
            matchesSearch &&
            matchesProduct &&
            matchesCategory &&
            matchesMaterial &&
            matchesSize &&
            matchesProcess
          );

        }
      );

    }, [
      products,
      search,
      productFilter,
      categoryFilter,
      materialFilter,
      sizeFilter,
      processFilter,
    ]);


  // =========================================================
  // CLEAR FILTERS
  // =========================================================

  const clearFilters = () => {

    setSearch("");

    setProductFilter(
      "All products"
    );

    setCategoryFilter(
      "All categories"
    );

    setMaterialFilter(
      "All materials"
    );

    setSizeFilter(
      "All sizes"
    );

    setProcessFilter(
      "All processes"
    );
  };


  // =========================================================
  // ADD TO QUOTE
  // =========================================================

  const handleAddToQuote =
    async (product) => {

      try {

        setAddingId(
          product.id
        );


        // -----------------------------------------
        // ADD PRODUCT THROUGH QUOTE CONTEXT
        // -----------------------------------------

        await addItem(
          {
            id:
              product.id,

            productId:
              product.id,

            product_id:
              product.id,

            partNumber:
              product.part_number,

            part_number:
              product.part_number,

            name:
              product.name,

            product_name:
              product.name,

            description:
              product.description,
          },
          1
        );


        // -----------------------------------------
        // DO NOT OPEN QUOTE PAGE
        // -----------------------------------------
        // Product will be added to Quote.
        // User will remain on Inventory page.


      } catch (err) {

        console.error(
          "ADD TO QUOTE ERROR:",
          err
        );

      } finally {

        setAddingId(null);

      }
    };


  // =========================================================
  // REQUEST QUOTE
  // =========================================================

  const handleRequestQuote = () => {

    navigate(
      "/quote"
    );

  };


  // =========================================================
  // RENDER
  // =========================================================

  return (

    <div className="inventory-page">

      {/* =====================================================
          NAVBAR
          ===================================================== */}

      <Navbar />


      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="inventory-hero">

        <div className="inventory-hero-inner">

          <div className="inventory-eyebrow">
            CURRENT AVAILABILITY
          </div>

          <h1>
            Search inventory
          </h1>

          <p>
            Find available fasteners by product,
            category, material, size, or applied process.
          </p>

        </div>

      </section>


      {/* =====================================================
          MAIN
          ===================================================== */}

      <main className="inventory-container">


        {/* ===================================================
            FILTER CARD
            =================================================== */}

        <div className="inventory-filter-box">


          {/* =================================================
              SEARCH
              ================================================= */}

          <div className="inventory-search-row">

            <input
              type="text"
              className="inventory-search"
              placeholder="Search part number, standard, material or size..."
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
            />

            <button
              type="button"
              className="clear-button"
              onClick={clearFilters}
            >
              Clear
            </button>

          </div>


          {/* =================================================
              FILTERS
              ================================================= */}

          <div className="inventory-filters">


            {/* PRODUCT */}

            <select
              value={productFilter}
              onChange={(e) =>
                setProductFilter(
                  e.target.value
                )
              }
            >

              <option>
                All products
              </option>

              {productOptions.map(
                (item) => (

                  <option
                    key={item}
                    value={item}
                  >
                    {item}
                  </option>

                )
              )}

            </select>


            {/* CATEGORY */}

            <select
              value={categoryFilter}
              onChange={(e) =>
                setCategoryFilter(
                  e.target.value
                )
              }
            >

              <option>
                All categories
              </option>

              {categoryOptions.map(
                (item) => (

                  <option
                    key={item}
                    value={item}
                  >
                    {item}
                  </option>

                )
              )}

            </select>


            {/* MATERIAL */}

            <select
              value={materialFilter}
              onChange={(e) =>
                setMaterialFilter(
                  e.target.value
                )
              }
            >

              <option>
                All materials
              </option>

              {materialOptions.map(
                (item) => (

                  <option
                    key={item}
                    value={item}
                  >
                    {item}
                  </option>

                )
              )}

            </select>


            {/* SIZE */}

            <select
              value={sizeFilter}
              onChange={(e) =>
                setSizeFilter(
                  e.target.value
                )
              }
            >

              <option>
                All sizes
              </option>

              {sizeOptions.map(
                (item) => (

                  <option
                    key={item}
                    value={item}
                  >
                    {item}
                  </option>

                )
              )}

            </select>


            {/* PROCESS */}

            <select
              value={processFilter}
              onChange={(e) =>
                setProcessFilter(
                  e.target.value
                )
              }
            >

              <option>
                All processes
              </option>

              {processOptions.map(
                (item) => (

                  <option
                    key={item}
                    value={item}
                  >
                    {item}
                  </option>

                )
              )}

            </select>

          </div>

        </div>


        {/* ===================================================
            RESULT HEADER
            =================================================== */}

        <div className="inventory-result-header">

          <span>
            {filteredProducts.length} items found
          </span>

          <span>
            Representative inventory
          </span>

        </div>


        {/* ===================================================
            LOADING
            =================================================== */}

        {loading && (

          <div className="inventory-message">
            Loading inventory...
          </div>

        )}


        {/* ===================================================
            ERROR
            =================================================== */}

        {!loading && error && (

          <div className="inventory-message">

            {error}

            <br />

            <button
              type="button"
              onClick={fetchProducts}
              style={{
                marginTop: "12px",
                padding: "8px 14px",
                cursor: "pointer",
              }}
            >
              Retry
            </button>

          </div>

        )}


        {/* ===================================================
            TABLE
            =================================================== */}

        {!loading &&
          !error &&
          filteredProducts.length > 0 && (

            <div className="inventory-table-wrapper">

              <table className="inventory-table">

                <thead>

                  <tr>

                    <th>
                      PART
                    </th>

                    <th>
                      PRODUCT
                    </th>

                    <th>
                      CATEGORY
                    </th>

                    <th>
                      MATERIAL
                    </th>

                    <th>
                      SIZE
                    </th>

                    <th>
                      STANDARD
                    </th>

                    <th>
                      PROCESS
                    </th>

                    <th>
                      ACTION
                    </th>

                  </tr>

                </thead>


                <tbody>

                  {filteredProducts.map(
                    (product) => (

                      <tr
                        key={
                          product.id
                        }
                      >

                        {/* PART */}

                        <td>

                          <span className="part-number">

                            {product.part_number ||
                              "—"}

                          </span>

                        </td>


                        {/* PRODUCT */}

                        <td>

                          {product.name ||
                            "—"}

                        </td>


                        {/* CATEGORY */}

                        <td>

                          {product.category ||
                            "—"}

                        </td>


                        {/* MATERIAL */}

                        <td>

                          {product.material ||
                            "—"}

                        </td>


                        {/* SIZE */}

                        <td>

                          {product.size ||
                            "—"}

                        </td>


                        {/* STANDARD */}

                        <td>

                          {product.standard ||
                            "—"}

                        </td>


                        {/* PROCESS */}

                        <td>

                          {product.process ||
                            "—"}

                        </td>


                        {/* ACTION */}

                        <td className="quote-action-cell">

                          <button
                            type="button"
                            className="add-quote-button"
                            disabled={
                              addingId ===
                              product.id
                            }
                            onClick={() =>
                              handleAddToQuote(
                                product
                              )
                            }
                          >

                            {addingId ===
                            product.id
                              ? "Adding..."
                              : "+ Add to Quote"}

                          </button>

                        </td>

                      </tr>

                    )
                  )}

                </tbody>

              </table>

            </div>

          )}


        {/* ===================================================
            NO RESULTS
            =================================================== */}

        {!loading &&
          !error &&
          filteredProducts.length === 0 && (

            <div className="inventory-message">

              No products found.

              <br />

              <button
                type="button"
                className="add-quote-button"
                style={{
                  marginTop: "12px",
                }}
                onClick={clearFilters}
              >
                Clear Filters
              </button>

            </div>

          )}


        {/* ===================================================
            BOTTOM QUOTE BUTTON
            =================================================== */}

        {!loading &&
          !error &&
          filteredProducts.length > 0 && (

            <div
              style={{
                marginTop: "18px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >

              <button
                type="button"
                className="add-quote-button"
                onClick={handleRequestQuote}
              >
                Request Quote
              </button>


              <button
                type="button"
                className="add-quote-button"
                onClick={handleRequestQuote}
              >
                Review Quote
                {count > 0
                  ? ` (${count})`
                  : ""}
              </button>

            </div>

          )}

      </main>


      {/* =====================================================
          FOOTER
          ===================================================== */}

      <Footer />

    </div>

  );

}

export default Inventory;