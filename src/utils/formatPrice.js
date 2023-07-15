export const formatPrice = price => {
  const formattedPrice = Number(price).toLocaleString('en-PH', {
    style: 'currency',
    currency: 'PHP'
  });
  return formattedPrice;
};