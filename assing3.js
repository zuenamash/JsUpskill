// Write a class KioskCalc that has the following fruitsPriceList object.
// this.fruitsPriceList = { "orange": 30, "mango": 15, "avocado": 40 }; 
// and takes two parameters (fruit, quantity) when initialized i.e. 
// var kioskCalc = new KioskCalc(“orange”, 2);
// Thereafter, it allows one to calculate the total cost of the fruit by accessing the 
// getTotalCost( ) method. 
// kioskCalc.getTotalCost( )  // returns “2 orange for KES 60”


var shop=[
    {
        name:"pineapple",
        price:30,
    },
    {
        name:"mangoes",
        price:50,
    },
    {
        name:"orange",
        price:35,
    }
]
function getTotalCost(name,quantity){
    let b=shop.find(item=>item.name===name)
    console.log(`${quantity} ${name} for Kes ${b.price*quantity}`)
}
getTotalCost("pineapple",4)