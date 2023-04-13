const setLocalStorageArray = <T>(key: string, value: T[]): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

export default setLocalStorageArray;
