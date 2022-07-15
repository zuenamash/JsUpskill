// Write a class KioskCalc that has the following fruitsPriceList object.
// this.fruitsPriceList = { "orange": 30, "mango": 15, "avocado": 40 }; 
// and takes two parameters (fruit, quantity) when initialized i.e. 
// var kioskCalc = new KioskCalc(“orange”, 2);
// Thereafter, it allows one to calculate the total cost of the fruit by accessing the 
// getTotalCost( ) method. 
// kioskCalc.getTotalCost( )  // returns “2 orange for KES 60”


class Shop{
    constructor(fruits,quantity){
        this.fruits=fruits
        this.quantity=quantity
        this.fruitPriceList={"pineapple":30,"mango":50,"orange":70};
        this.getTotalCost=function(){
            return `${quantity} ${fruits} for KES ${quantity*this.price}`
        }
    }
}
Shop.prototype.price=30;
var shop=new Shop("pineapple",4)

console.log(shop.getTotalCost());


