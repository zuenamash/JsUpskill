
// Write a program to calculate purchases from a kiosk. For e.g. given the fruit name 
// 'orange' the program should fetch its price (30.00) and multiply with the quantity 
// requested (2) and return total cost in this printed format (2 Oranges for KES 
// 60.00). 
// calculateFruitCost(fruitName, quantity)
// For example, calculateFruitCost('orange', 2) should return "2 Oranges for KES 
// 60.00"

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
    console.log(`${quantity} ${name} for KES ${b.price*quantity}`)
}
getTotalCost("pineapple",4)


