function getSum(prices, discount) {
    const total = prices.reduce((acc, price) => acc + price, 0);
    const discountAmount = total * (discount / 100);
    console.log((discount / 100));
    console.log(total);
    console.log(total * (discount / 100));
    const discountedTotal = total - discountAmount;
    return discountedTotal;
}
console.log(getSum([100, 200, 300], 30));
// console.log(getSum([150, 250, 150], 10));
// console.log(getSum([1000], 50));