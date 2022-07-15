
// Write a program to calculate purchases from a kiosk. For e.g. given the fruit name 
// 'orange' the program should fetch its price (30.00) and multiply with the quantity 
// requested (2) and return total cost in this printed format (2 Oranges for KES 
// 60.00). 
// calculateFruitCost(fruitName, quantity)
// For example, calculateFruitCost('orange', 2) should return "2 Oranges for KES 
// 60.00"

class Shop{
    constructor(fruits,quantity){
        this.fruits=fruits
        this.quantity=quantity
        this.fruitPriceList={"pineapple":30,"mango":50,"orange":70};
        this.getTotalCost=function(){
            return `${quantity} ${fruits} for kes ${quantity*this.price}`
        }
    }
}
Shop.prototype.price=30;
var shop=new Shop("pineapple",4)

console.log(shop.getTotalCost());


