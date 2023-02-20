export function clearItemsFromStorage(text) {
  const items = [];
  localStorage.setItem(text, JSON.stringify(items));
}

export function deleteItemFromStorage(array, id, array1) {
  let items = JSON.parse(localStorage.getItem(array));
  const newExpressions = items.filter((expression) => expression.id !== id);
  const newExpression = items.filter((expression) => expression.id === id);
  let items1 = JSON.parse(localStorage.getItem(array1));
  if (items1 === null) {
    items1 = [];
  }
  items1.push(newExpression[0]);
  const items2 = items1.sort((a, b) => a.timestamp - b.timestamp);
  localStorage.setItem(array, JSON.stringify(newExpressions));
  localStorage.setItem(array1, JSON.stringify(items2));
  return newExpressions;
}

export function addItemToStorage(array, data, result, isValid) {
  let items = JSON.parse(localStorage.getItem(array));
  if (items === null) {
    items = [];
  }
  let Id;
  if (items.length) {
    Id = items[items.length - 1].id;
  } else {
    Id = 0;
  }
  items.push({
    id: Id + 1,
    text: data,
    result: result,
    timestamp: Date.now(),
  });
  localStorage.setItem(array, JSON.stringify(items));
}
