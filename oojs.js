const getAllFood = async () => {
  return await fetch("https://dev-api.mstars.mn/api/foods", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
//Food class that has properties: category, category_id, image, discount, price, name, stock
//and methods: addProduct, removeProduct
class Food {
  constructor(category,category_id,image,discount, price, name, stock){
    this.category= category,
    this.category_id= category_id,
    this.image=image,
    this.discount=discount,
    this.price=price,
    this.name=name,
    this.stock=stock
  }
  addProduct(newProduct){
    return newProduct= Food.push(newProduct)
  }
  removeProduct(){
    return 
  }
}
//create an array foods
const foods = [
  'Tsuivan', 
  'Ramen', 
  'Har shul',
  'Budaatai huurag'
]

//call getAllFoods() then create Food objects and push every Food objects to foods array
getAllFood();
const food= { 
UndugteHuurag : 10000,
SharsanZaidas : 10000,
Spaghette : 1000}
const pushedFoods= foods.push(food)
console.log(foods)
//Generate HMTL function
function html(){
  return foodDiv = document.querySelector(".foods").innerHTML=(food)
}
html()
