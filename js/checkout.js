let checkOutList = JSON.parse(localStorage.getItem('checkoutPage'));


function checkoutButton(){
    checkOutList.forEach((item) => {
        document.querySelector('.Checkout').innerHTML +=
        `<tr>
        <th class="col-3"><span class="Type text-black">${item.name}</span></th>
        <th class="col-3"><span class="Type text-black"><input type="text" id="screen"</span></th>
        <th class="col-3"><span class="Type text-black">${item.price}</span></th>
        </tr>
        `
      })

}
checkoutButton();



function DeleteButton(id) {
    localStorage.setItem('checkoutPage',JSON.stringify(checkOutList));
    document.querySelector('#delete');
    checkOutList.splice(id-1, 1)
    location.reload()    //Delete product, no need for reload
    localStorage.setItem('checkoutPage', JSON.stringify(checkOutList))
}