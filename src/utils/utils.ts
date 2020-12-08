const priceFormatter = new Intl.NumberFormat("ru-RU", {
  style: "currency",
  currency: "RUB",
});

export const formatAsPrice = (price: number) => priceFormatter.format(price);
