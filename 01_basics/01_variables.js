const accountId = 144553
let accountEmail = "name@example.com"
var accountPassword = "12345"
accountCity = "Jaipur"

let accountState;

// accountId = 2    // not allowed

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bangluru" 

// console.log(accountId);

/*
prefer not to use var 
because of function and block scope confusion
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])