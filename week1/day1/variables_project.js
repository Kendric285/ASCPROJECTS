// 1) No output
// 2) The value of x is 1
// 3) All Star Code!
// 4) 60 ABCdef 2030
// 5) Sum: 13
// 6)Error 

// We're going to earn a profit by reselling tickets
// We bought some tickets to see Billie Eilish
// 4 regular tickets for $45 each and 2 front row tickets for $75 each
let initialPrice = 45 * 4 + 75 * 2
console.log('Cost:', initialPrice);
 
// We're reselling the tickets for 50% above the original price
console.log('Selling price:', initialPrice * 1.5);
 
// But StubHub, the online ticket selling platform, charges a 20% seller fee
console.log('Seller fee:', initialPrice * 1.5 * 0.2);
 
// Our total profit:
console.log('Profit:', initialPrice * 1.5 - initialPrice - initialPrice * 1.5 * 0.2);