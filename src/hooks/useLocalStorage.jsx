import { useEffect, useState } from "react";

const useLocalStorage = (itemName, defaultItems) => {
  //INFO: you can use default React Hooks in your custom hook

  const [error, setError] = useState(false);
  const [loaded, setloaded] = useState(false);

  const [items, setItems] = useState([]);

  useEffect(() => {
    //check if localStorage have data

    setTimeout(() => {
      try {
        const localStorageItems = localStorage.getItem(itemName);
        let parsedItems;

        if (!localStorageItems) {
          localStorage.setItem(itemName, JSON.stringify(defaultItems));
          parsedItems = defaultItems;
        } else {
          parsedItems = JSON.parse(localStorageItems);
        }

        setItems(parsedItems);
      } catch (error) {
        setError(true);
      }

      setloaded(true);
    }, 1000);
  }, [itemName, defaultItems]);

  //update items value and local storage
  const updateItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem(itemName, JSON.stringify(newItems));
  };

  //return array
  return {
    items,
    updateItems,
    loaded,
    error,
  };
};

export default useLocalStorage;
