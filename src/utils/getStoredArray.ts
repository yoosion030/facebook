const getStoredArray = (key: string) => {
  let storedArray = [];

  const storedData = window.localStorage.getItem(key);
  if (storedData !== null) {
    storedArray = JSON.parse(storedData);
  }

  return storedArray;
};

export default getStoredArray;
