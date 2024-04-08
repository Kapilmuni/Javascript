var sales = [
    { item: 'PS4 Pro', stock: 3, original: 399.99 },
    { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
    { item: 'Nintendo Switch', stock: 4, original: 299.99 },
    { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
    { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
  ];
  
  var calculateSalesTotals = sales.map(function(sale) {
    var discountedPrice = sale.original * (1 - (sale.discount || 0));
    var total = sale.stock * discountedPrice; 
    return {
      item: sale.item,
      original: sale.original,
      sale: discountedPrice.toFixed(2),
      stock: sale.stock,
      total: total.toFixed(2)
    };
  });
  
  console.log(calculateSalesTotals);
  