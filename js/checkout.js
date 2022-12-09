let products = JSON.parse(localStorage.getItem('products ')) ?
JSON.parse(localStorage.getItem('products ')) : [];
    


let checkout = [];
localStorage.setItem('myCheckout', JSON.stringify(checkout))
//parse into localStorage
let allCars = JSON.parse(localStorage.getItem('cars'));
Object.keys(allCars).forEach((carKey) => {
//show names of cars in console
    let w = allCars[carKey];
    let myCar = document.querySelector("#myCars");
    console.log(allCars[carKey].type);
    myCar.innerHTML +=
                `
                    <div class="col-md-4">
                        <div class="card" style="width: 18rem;">
                            <img src=${w.image} class="card-img-top" alt="...">
                                <div class="card-body">
                                    <p class="carName">${w.name}</p>
                                    <p class="carPrice">${w.price}</p>
                                    <button class="addToCart" href="#">Purchase</button>
                                </div>
                        </div>
                    </div>
                `
})
let addBtn = document.querySelectorAll('.addToCart');
Object.keys(addBtn).forEach((item) => {
        addBtn[item].addEventListener('click', (e) => {
            console.log('clicked', addBtn[item])
            console.log(allCars[item])
            checkout.push(allCars[item]);
            console.log(checkout)
            localStorage.setItem('myCheckout', JSON.stringify(checkout));
        })
    }
)
checkout script
checkout = [];
localStorage.setItem('myCheckout', JSON.stringify(checkout))
//parse into localStorage
let allCars = JSON.parse(localStorage.getItem('cars'));
Object.keys(allCars).forEach((carKey) => {
//show names of cars in console
    let w = allCars[carKey];
    let myCar = document.querySelector("#myCars");
    console.log(allCars[carKey].type);
    myCar.innerHTML +=
                `
                    <div class="col-md-4">
                        <div class="card" style="width: 18rem;">
                            <img src=${w.image} class="card-img-top" alt="...">
                                <div class="card-body">
                                    <p class="carName">${w.name}</p>
                                    <p class="carPrice">${w.price}</p>
                                    <button class="addToCart" href="#">Purchase</button>
                                </div>
                        </div>
                    </div>
                `
})
let addBtn = document.querySelectorAll('.addToCart');
Object.keys(addBtn).forEach((item) => {
        addBtn[item].addEventListener('click', (e) => {
            console.log('clicked', addBtn[item])
            console.log(allCars[item])
            checkout.push(allCars[item]);
            console.log(checkout)
            localStorage.setItem('myCheckout', JSON.stringify(checkout));
        })
    }
)
let checkout = JSON.parse(localStorage.getItem('myCheckout'));
console.log(checkout)
let tbody = document.querySelector('tbody')
Object.keys(checkout).forEach((item) => {
  if(checkout[item]){
    tbody.innerHTML +=
    `
    <tr>
    <th>${parseInt([item]) + 1}</th>
    <td><img src='${checkout[item].image}' style='width: 200px; height: '250px''></td>
    <td>${checkout[item].name}</td>
    <td>${checkout[item].year}</td>
    <td>${checkout[item].price}</td>
    <td>${checkout[item].amount}</td>
    </tr>
    `
  }
})