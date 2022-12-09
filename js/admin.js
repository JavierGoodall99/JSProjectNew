let products = JSON.parse(localStorage.getItem('products ')) ?
JSON.parse(localStorage.getItem('products ')) : [
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
];


// let tbody = document.querySelector('tbody');
function displayAdmin(){
    Object.keys(products).forEach((item)=>{
        document.querySelector('.products ').innerHTML += `
        <tr>
        <th class="col-2"><span class="Type text-black">${products[item].id}</span></th>
        <th class="col-2"><span class="Type text-black">${products[item].name}</span></th>
        <th class="col-2"><span class="Type text-black">${products[item].type}</span></th>
        <th class="col-2"><span class="Type text-black">R${products[item].price}</span></th>
        <th class="col-2"><span class="Type text-black">
        <button type="button" class="delete" onclick = "DeleteButton(${products[item].id})"><i class="fa-solid fa-trash"></i></button></span>
        </th>
        <th class="col-2"><span class="Type text-black">
        <button type="button" button id="edit-button" data-bs-toggle="modal" data-bs-target="#editProduct">
        <i class="fa-solid fa-pen-to-square"></i></span>
        </th>
        </button>
        <!-- Modal -->
                        <div class="modal fade" id="editProduct" tabindex="-1" aria-labelledby="editProductLabel" aria-hidden="true">
                            <div class="modal-dialog">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h1 class="modal-title fs-5" id="editProductLabel">Edit Product</h1>
                                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                  <form class="form g-2">
                                    <div class="container">
                                        <input class="form-control" type="text" id="type1" value='${products[item].type}'>
                                        <textarea class="form-control my-2" id="name1" required>${products[item].name}</textarea>
                                        <input class="form-control" id="price1" type="number" value='${products[item].price}'>
                                        <input class="form-control my-2" id="imageURL1" type="url" value='${products[item].imageURL}'>
                                    </div>
                                  </form>
                                </div>
                                <div class="modal-footer my-2">
                                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                  <button type="button" class="btn btn-success" id="Save">Save changes</button>
                                </div>
                              </div>
                            </div>
                        </div>        

        </th>` 
    })
}
displayAdmin();
localStorage.setItem('products ', JSON.stringify(products))

function DeleteButton(id) {
    localStorage.setItem('products ',JSON.stringify(products));
    document.querySelector('#delete');
    products.splice(id-1, 1)
    location.reload()
    localStorage.setItem('products ', JSON.stringify(products))
}


// Edit
// function EditProduct(name, price, imageURL, type) {
//     products.push(
//         {
//             id,
//             name,
//             price,
//             imageURL,
//             type
//         }
//     )
// }


// let save = document.querySelector('#save') 

// console.log(Add.outerHTML);

// save.addEventListener('click', (e)=>{
//     e.preventDefault();
//     let id = document.querySelector('#id1').value;
//     let name = document.querySelector('#name1').value;
//     let price = document.querySelector('#price1').value;
//     let imageURL = document.querySelector('#imageURL1').value;
//     let type = document.querySelector('#type1').value;
    

//     // Push an object into array
//     products.push(
//         {
//             id,
//             name,
//             price,
//             imageURL,
//             type
//         }
//     )

//     // Local Storage
//     localStorage.setItem('products ', JSON.stringify(products));
    
//     console.table(JSON.parse(localStorage.products));
// });



// saveChanges(){
//     var index = _.findIndex(this.price, (o) => o.id == this.itemIdToEdit)
//     this.price[index].name = this.newText;
//     this.newText = '';
//     this.isShown = true;
//   }


// function onDelete() {
//         document.querySelector(".container").deleteRow(1);
//     }

        

        
        let Add = document.querySelector('.Add') 

        console.log(Add.outerHTML);
        
        Add.addEventListener('click', (e)=>{
            e.preventDefault();
            let id = document.querySelector('#id').value;
            let name = document.querySelector('#name').value;
            let price = document.querySelector('#price').value;
            let imageURL = document.querySelector('#imageURL').value;
            let type = document.querySelector('#type').value;
            
        
            // Push an object into array
            products.push(
                {
                    id,
                    name,
                    price,
                    imageURL,
                    type
                }
            )
        
            location.reload()
            // Local Storage
            localStorage.setItem('products ', JSON.stringify(products));
            
            console.table(JSON.parse(localStorage.products));
        });


