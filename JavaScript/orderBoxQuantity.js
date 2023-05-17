


let carditem = JSON.parse(localStorage.getItem("card"));
let quantity = document.querySelector('.quantity');
let count = 0




for (let i = 0; i < carditem.length; i++) {
 
    count++;
    quantity.innerHTML = count;
  

}