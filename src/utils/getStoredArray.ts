const getStoredArray = <T>(key: string): T[] => {
  const storedData = window.localStorage.getItem(key);
  return storedData ? JSON.parse(storedData) : [];
};

export default getStoredArray;
