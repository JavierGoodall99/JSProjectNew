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


let tbody = document.querySelector('tbody');
function displayAdmin(){
    products.forEach((item)=>{
        tbody.innerHTML += `
        <tr>
        <th class="col-3"><span class="Type text-black">${item.type}</span></th>
        <th class="col-3"><span class="Type text-black">${item.name}</span></th>
        <th class="col-3"><span class="Type text-black">R${item.price}</span></th>
        <th class="col-1"><span class="Type text-black">
        <button><i class="fa-solid fa-trash"></i></button></span>
        </th>
        <th class="col-1"><button><i class="fa-solid fa-pen-to-square"></i></button></th>
        </tr>` 
    })
}
displayAdmin();





// function onDelete() {
//         document.querySelector(".container").deleteRow(1);
//     }

    var index, table = document.querySelector(".container");
    for(var i = 1; i < table.rows.length; i++)
    {
        table.rows[i].cells[3].onclick = function()
        {
                index = this.parentElement.rowIndex;
                table.deleteRow(index);
            }
        };
        