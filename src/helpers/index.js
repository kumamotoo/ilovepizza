export const getPrice = (price, size) => {
  switch (size) {
    case 0:
    default:
      return price;
    case 1:
      return price + 1.5;
    case 2:
      return price + 4;
  }
};

export const getMyOrder = (items) => {
  const order = [];
  Object.values(items).map(({ items }) => {
    items.map((pizza) => {
      order.push(`Pizza ${pizza.name}. Size: ${pizza.size}`);
    });
  });
  return order;
};
