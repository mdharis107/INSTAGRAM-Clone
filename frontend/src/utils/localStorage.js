export const loadData = (key) => {
  try {
    let temp = localStorage.getItem(key);
    temp = JSON.parse(temp);
    return temp;
  } catch (err) {
    return undefined;
  }
};

export const saveData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(data));
};
