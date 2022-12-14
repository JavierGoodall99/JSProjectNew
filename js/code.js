let checkout = [];
let products = JSON.parse(localStorage.getItem('products')) ?
JSON.parse(localStorage.getItem('products')) : [
    {
        id: 1,
        name: 'Broken Mind',
        price: 25000,
        imageURL: 'https://i.postimg.cc/FFB3fwYm/Thought-Provoking_Sculpture_of_Split_Head_Reveals_a_Hauntingly_Surreal_Skull_Within.jpg',
        type: 'Sculpture'
    },
    {
        id: 2,
        name: 'End Of Silence',
        price: 62000,
        imageURL: 'https://i.postimg.cc/CxMBb0Fm/pexels-steve-johnson-1572386.jpg',
        type: 'Painting'
    }, 
    {
        id: 3,
        name: 'Cry For Help',
        price: 28000,
        imageURL: 'https://i.postimg.cc/x8JkyTXQ/pexels-marcio-skull-13569998_(1).jpg',
        type: 'Sculpture'
    }, 
    {
        id: 4,
        name: 'Stuck In My Ways',
        price: 25000,
        imageURL: 'https://i.postimg.cc/wMck3CJK/pexels-jo-o-cabral-3299386.jpg',
        type: 'Photograph'
    }, 
    {
        id: 5,
        name: 'Water Of Youth',
        price: 10000,
        imageURL: 'https://i.postimg.cc/GpRznP5g/pexels-gabriel-peter-719396.jpg',
        type: 'Photograph'
    }, 
    {
        id: 6,
        name: 'Dare To Dream',
        price: 76000,
        imageURL: 'https://i.postimg.cc/903w9qM7/pexels-dids-2911545.jpg',
        type: 'Painting'
    },
    {
        id: 7,
        name: 'Hear No Evil',
        price: 30000,
        imageURL: 'https://i.postimg.cc/D09SCkGX/pexels-zack-jarosz-1727658.jpg',
        type: 'Sculpture'
    },
    {
        id: 8,
        name: 'Whisper In the Dark',
        price: 80000,
        imageURL: 'https://i.postimg.cc/J0c0B6vf/pexels-steve-johnson-1690351.jpg',
        type: 'Painting'
    },
    {
        id: 9,
        name: 'Praying',
        price: 20000,
        imageURL: 'https://i.postimg.cc/x1rm5HG4/pexels-rodolfo-clix-4492788.jpg',
        type: 'Sculpture'
    },
    {
        id: 10,
        name: 'Off The Edge',
        price: 22000,
        imageURL: 'https://i.postimg.cc/sXWmCQgg/pexels-tim-grundtner-3856635.jpg',
        type: 'Photograph'
    },
    {
        id: 11,
        name: 'Fading Away',
        price: 90000,
        imageURL: 'https://i.postimg.cc/JzTyqF0m/pexels-anni-roenkae-2832382.jpg',
        type: 'Painting'
    },
    {
        id: 12,
        name: 'Stranded Alone',
        price: 14000,
        imageURL: 'https://i.postimg.cc/L8yNtFW2/pexels-zukiman-mohamad-398467.jpg',
        type: 'Photograph'
    }
]



// localStorage.setItem('items', JSON.stringify(items));
let art = document.querySelector('.art')

function display(){
    products.forEach((item)=>{
        art.innerHTML += `
        <div class="card">
        <img src="${item.imageURL}" alt="Image1">
        <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="price">Price: R${item.price}</p>
            <button type="button" class="PurchaseButton" onclick='checkoutButton(${JSON.stringify(item)})'>Purchase</button>
        </div>
        </div>`
    })
}
display();



function sortByType(type) {
    art.innerHTML = ""
    let filteredData = products.filter((item)=>{        
        return item.type.toLowerCase() == type.toLowerCase();
    }) 

    for(let i = 0; i < filteredData.length; i++) {
        
        art.innerHTML += `
            <div class="card">
            <img src="${filteredData[i].imageURL}" alt="Image1">
            <div class="card-body">
                <h5 class="card-title">${filteredData[i].name}</h5>
                <p class="price">Price: R${filteredData[i].price}</p>
                <button type="button" class="PurchaseButton" onclick='checkoutButton(${JSON.stringify(filteredData)})'>Purchase</button>
            </div>
            </div>`
    }
    
    
}



// Photography Button
let filterPhotography = document.querySelector('#filterPhotography') 
filterPhotography.addEventListener('click', (e)=>{
    e.preventDefault();
    sortByType(document.getElementById("filterPhotography").value="Photograph")
    // location.reload()
});

// Sculpture Button
let filterSculptures = document.querySelector('#filterSculptures') 
filterSculptures.addEventListener('click', (e)=>{
    e.preventDefault();
    sortByType(document.getElementById("filterSculptures").value = "Sculpture")
    // location.reload()
});

// Paintings Button
let filterPaintings = document.querySelector('#filterPaintings') 
filterPaintings.addEventListener('click', (e)=>{
    e.preventDefault();
    sortByType(document.getElementById("filterPaintings").value="Painting")
    // location.reload()
});



//CheckOut Button
function checkoutButton(item) {
    checkout.push(item);
    console.log(checkout);
    localStorage.setItem('checkoutPage', JSON.stringify(checkout));
}