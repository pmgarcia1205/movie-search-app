export const localStorageSaveKey = (key: string, value: any) => {
  if (typeof window !== "undefined" && window.localStorage) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const localStorageRemoveKey = (key: string) => {
  if (typeof window !== "undefined" && window.localStorage) {
    localStorage.removeItem(key);
  }
};

export const localStorageClear = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    localStorage.clear();
  }
};

export const localStorageGetKey = (key: string) => {
  if (typeof window !== "undefined" && window.localStorage) {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }
  return null;
};
