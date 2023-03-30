

let inp =  document.querySelector('.inp_search')

inp.addEventListener('keyup', function(){

    let searchboxs = document.querySelector('.search_box');
    
    searchboxs.style.display = 'block';
    $(".loaders").css('opacity ','1')
   
    let value = inp.value
  
    fetch('https://api.escuelajs.co/api/v1/products?title=' + value,{
  
    method: 'get'

 }).then(res => res.json())
 .then(data =>{

     $(".loaders").css('opacity ','0')

    let searchbox = document.querySelector('.search_box');
   
    while (searchbox.firstChild) {

        searchbox.firstChild.remove()

    }

    if (data.length == 0 || value == ''){

        searchbox.style.display = 'none'

    }else{

        searchbox.style.display = 'block'

    }

    for (let i = 0; i < data.length; i++) {
        
        let div = document.createElement('div');
        searchbox.appendChild(div);
        div.className = 'search_div'
        let name = document.createElement('h6');
        div.appendChild(name);
        let img = document.createElement('img');
        div.appendChild(img);
        let price = document.createElement('p')
        div.appendChild(price)

        name.innerText = data[i].title
        img.src = data[i].images
        price.innerText = 'Price: ' + data[i].price + ' $'


        div.addEventListener('click', function(){

            let id = data[i].id;
            localStorage.setItem('id', id);
            window.location.href  = 'detals.html';
        
        });
    };
});
});



