let products = JSON.parse(localStorage.getItem('products ')) ?
JSON.parse(localStorage.getItem('products ')) : [
    {
        id: 1,
        Name: 'Broken Mind',
        price: 25000,
        ImageURL: 'https://i.postimg.cc/FFB3fwYm/Thought-Provoking_Sculpture_of_Split_Head_Reveals_a_Hauntingly_Surreal_Skull_Within.jpg'
    },
    {
        id: 2,
        Name: 'End Of Silence',
        price: 62000,
        ImageURL: 'https://i.postimg.cc/CxMBb0Fm/pexels-steve-johnson-1572386.jpg'
    }, 
    {
        id: 3,
        Name: 'Cry For Help',
        price: 28000,
        ImageURL: 'https://i.postimg.cc/x8JkyTXQ/pexels-marcio-skull-13569998_(1).jpg'
    }, 
    {
        id: 4,
        Name: 'Stuck In My Ways',
        price: 25000,
        ImageURL: 'https://i.postimg.cc/wMck3CJK/pexels-jo-o-cabral-3299386.jpg'
    }, 
    {
        id: 5,
        Name: 'Water For Youth',
        price: 10000,
        ImageURL: 'https://i.postimg.cc/GpRznP5g/pexels-gabriel-peter-719396.jpg'
    }, 
    {
        id: 6,
        Name: 'Dare To Dream',
        price: 76000,
        ImageURL: 'https://i.postimg.cc/903w9qM7/pexels-dids-2911545.jpg'
    },
    {
        id: 7,
        Name: 'Hear No Evil',
        price: 30000,
        ImageURL: 'https://i.postimg.cc/D09SCkGX/pexels-zack-jarosz-1727658.jpg'
    },
    {
        id: 8,
        Name: 'Whisper In the Dar',
        price: 80000,
        ImageURL: 'https://i.postimg.cc/J0c0B6vf/pexels-steve-johnson-1690351.jpg'
    },
    {
        id: 9,
        Name: 'Praying',
        price: 20000,
        ImageURL: 'https://i.postimg.cc/x1rm5HG4/pexels-rodolfo-clix-4492788.jpg'
    },
    {
        id: 10,
        Name: 'Off The Edge',
        price: 22000,
        ImageURL: 'https://i.postimg.cc/sXWmCQgg/pexels-tim-grundtner-3856635.jpg'
    },
    {
        id: 11,
        Name: 'Fading Away',
        price: 90000,
        ImageURL: 'https://i.postimg.cc/JzTyqF0m/pexels-anni-roenkae-2832382.jpg'
    },
    {
        id: 12,
        Name: 'Stranded Alone',
        price: 14000,
        ImageURL: 'https://i.postimg.cc/L8yNtFW2/pexels-zukiman-mohamad-398467.jpg'
    }
]


localStorage.setItem('items', JSON.stringify(items));