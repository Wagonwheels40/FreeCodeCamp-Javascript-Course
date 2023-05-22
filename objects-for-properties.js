function checkStockInRetail(homewares, stockItem) {
    return homewares.hasOwnProperty(stockItem);
  }
  
  // Example usage:
  const homewares = {
    plates: ['ceramic', 'party-plates'],
    cups: ['mugs', 'glasses'],
    cutlery: ['knives', 'forks']
  };
  
  console.log(checkStockInRetail(homewares, 'plates')); // true
  console.log(checkStockInRetail(homewares, 'seeds')); // false