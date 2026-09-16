import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import api from "../services/api";

const QuoteContext = createContext(null);

export function QuoteProvider({ children }) {

  const [items, setItems] = useState([]);

  const [loading, setLoading] = useState(false);


  // =========================================================
  // GUEST SESSION
  // =========================================================

  const getSessionId = () => {

    let sessionId =
      localStorage.getItem("quote_session_id");

    if (!sessionId) {

      sessionId =
        crypto.randomUUID();

      localStorage.setItem(
        "quote_session_id",
        sessionId
      );
    }

    return sessionId;
  };


  // =========================================================
  // LOAD QUOTE ITEMS
  // =========================================================

  const fetchQuotes = async () => {

    try {

      setLoading(true);

      const sessionId =
        getSessionId();

      const response =
        await api.get(
          "/quotes/",
          {
            params: {
              session_id:
                sessionId,
            },
          }
        );

      const data =
        Array.isArray(response.data)
          ? response.data
          : [];

      const formatted =
        data
          .filter(
            (item) =>
              !item.request_id
          )
          .map((item) => ({

            key:
              String(item.id),

            id:
              item.id,

            productId:
              item.product_id,

            partNumber:
              item.part_number,

            product_name:
              item.product_name,

            name:
              item.product_name ||
              item.part_number,

            description:
              item.product_name ||
              "",

            quantity:
              item.quantity,

            quoteId:
              item.id,

          }));

      setItems(formatted);

    } catch (error) {

      console.error(
        "GET QUOTES ERROR:",
        error
      );

    } finally {

      setLoading(false);

    }
  };


  // =========================================================
  // LOAD QUOTE ON START
  // =========================================================

  useEffect(() => {

    fetchQuotes();

  }, []);


  // =========================================================
  // ADD TO QUOTE
  // =========================================================

  const addItem = async (
    item,
    quantity = 1
  ) => {

    try {

      const qty =
        Math.max(
          1,
          Number(quantity) || 1
        );


      // -----------------------------------------------------
      // PRODUCT ID
      // -----------------------------------------------------

      const productId =
        Number(
          item.id ||
          item.productId ||
          item.product_id
        );


      // -----------------------------------------------------
      // PART NUMBER
      // -----------------------------------------------------

      const partNumber =
        item.partNumber ||
        item.part_number ||
        "";


      // -----------------------------------------------------
      // PRODUCT NAME
      // -----------------------------------------------------

      const productName =
        item.name ||
        item.product_name ||
        item.description ||
        partNumber;


      // -----------------------------------------------------
      // VALIDATION
      // -----------------------------------------------------

      if (!productId) {

        alert(
          "Product ID missing"
        );

        return false;
      }


      if (!partNumber) {

        alert(
          "Part number missing"
        );

        return false;
      }


      // -----------------------------------------------------
      // SESSION
      // -----------------------------------------------------

      const sessionId =
        getSessionId();


      // -----------------------------------------------------
      // PAYLOAD
      // -----------------------------------------------------

      const payload = {

        product_id:
          productId,

        part_number:
          partNumber,

        product_name:
          productName,

        quantity:
          qty,

        session_id:
          sessionId,

      };


      console.log(
        "ADDING PRODUCT TO QUOTE:",
        payload
      );


      // -----------------------------------------------------
      // API REQUEST
      // -----------------------------------------------------

      const response =
        await api.post(
          "/quotes/",
          payload
        );

      const data =
        response.data;

      console.log(
        "QUOTE API RESPONSE:",
        data
      );


      // -----------------------------------------------------
      // FORMAT ITEM
      // -----------------------------------------------------

      const formattedItem = {

        key:
          String(data.id),

        id:
          data.id,

        productId:
          data.product_id,

        partNumber:
          data.part_number,

        product_name:
          data.product_name,

        name:
          data.product_name ||
          data.part_number,

        description:
          data.product_name ||
          "",

        quantity:
          data.quantity,

        quoteId:
          data.id,

      };


      // -----------------------------------------------------
      // UPDATE LOCAL QUOTE
      // -----------------------------------------------------

      setItems((current) => {

        const exists =
          current.find(
            (x) =>
              Number(x.productId) ===
              Number(data.product_id)
          );


        // -----------------------------------------------
        // PRODUCT ALREADY EXISTS
        // -----------------------------------------------

        if (exists) {

          return current.map(
            (x) =>
              Number(x.productId) ===
              Number(data.product_id)

                ? {
                    ...x,

                    quantity:
                      data.quantity,

                    quoteId:
                      data.id,

                    key:
                      String(data.id),

                    id:
                      data.id,

                    productId:
                      data.product_id,

                    partNumber:
                      data.part_number,

                    product_name:
                      data.product_name,

                    name:
                      data.product_name ||
                      data.part_number,
                  }

                : x
          );

        }


        // -----------------------------------------------
        // NEW PRODUCT
        // -----------------------------------------------

        return [
          ...current,
          formattedItem,
        ];

      });


      // -----------------------------------------------------
      // SUCCESS
      // -----------------------------------------------------
      // Product is added to Quote.
      // DO NOT navigate to /quote here.
      // User stays on the current page.


      return true;


    } catch (error) {

      console.error(
        "ADD TO QUOTE ERROR:",
        error
      );

      console.error(
        "API ERROR RESPONSE:",
        error.response?.data
      );

      alert(
        error.response?.data?.detail ||
        "Unable to add product to quote"
      );

      return false;
    }
  };


  // =========================================================
  // UPDATE QUANTITY
  // =========================================================

  const updateQuantity = async (
    key,
    quantity
  ) => {

    try {

      const qty =
        Math.max(
          1,
          Number(quantity) || 1
        );


      const item =
        items.find(
          (x) =>
            String(x.key) ===
            String(key)
        );


      if (!item) {

        return false;
      }


      const sessionId =
        getSessionId();


      const response =
        await api.put(
          `/quotes/${item.quoteId}`,
          null,
          {
            params: {

              quantity:
                qty,

              session_id:
                sessionId,

            },
          }
        );


      const data =
        response.data;


      setItems((current) =>
        current.map((x) =>
          x.quoteId ===
          item.quoteId

            ? {
                ...x,

                quantity:
                  data.quantity,

              }

            : x
        )
      );


      return true;


    } catch (error) {

      console.error(
        "UPDATE QUANTITY ERROR:",
        error
      );

      alert(
        error.response?.data?.detail ||
        "Unable to update quantity"
      );

      return false;
    }
  };


  // =========================================================
  // REMOVE ITEM
  // =========================================================

  const removeItem = async (
    key
  ) => {

    try {

      const item =
        items.find(
          (x) =>
            String(x.key) ===
            String(key)
        );


      if (!item) {

        return false;
      }


      const sessionId =
        getSessionId();


      await api.delete(
        `/quotes/${item.quoteId}`,
        {
          params: {

            session_id:
              sessionId,

          },
        }
      );


      setItems((current) =>
        current.filter(
          (x) =>
            x.quoteId !==
            item.quoteId
        )
      );


      return true;


    } catch (error) {

      console.error(
        "REMOVE QUOTE ERROR:",
        error
      );

      alert(
        error.response?.data?.detail ||
        "Unable to remove quote item"
      );

      return false;
    }
  };


  // =========================================================
  // CLEAR ITEMS
  // =========================================================

  const clearItems = async () => {

    try {

      const sessionId =
        getSessionId();


      await Promise.all(
        items.map(
          (item) =>
            api.delete(
              `/quotes/${item.quoteId}`,
              {
                params: {

                  session_id:
                    sessionId,

                },
              }
            )
        )
      );


      setItems([]);

      return true;


    } catch (error) {

      console.error(
        "CLEAR QUOTE ERROR:",
        error
      );

      return false;
    }
  };


  // =========================================================
  // COUNT
  // =========================================================

  const count =
    items.length;


  // =========================================================
  // CONTEXT
  // =========================================================

  const value =
    useMemo(
      () => ({

        items,

        count,

        loading,

        addItem,

        updateQuantity,

        removeItem,

        clearItems,

        fetchQuotes,

      }),

      [
        items,
        count,
        loading,
      ]
    );


  return (
    <QuoteContext.Provider
      value={value}
    >
      {children}
    </QuoteContext.Provider>
  );
}


// =========================================================
// HOOK
// =========================================================

export function useQuote() {

  const context =
    useContext(
      QuoteContext
    );


  if (!context) {

    throw new Error(
      "useQuote must be used inside QuoteProvider"
    );

  }


  return context;
}