$('.beg').click(function () { 
    window.location = 'order.html'
});

$('.logo').click(function(){
    window.location = 'index.html'
})


fetch('https://api.escuelajs.co/api/v1/products/',{

    method:'get',
    
}).then(res => res.json())
.then(data =>{
    for (let i = 0; i < data.length; i++) {

        $('.loader').css('opacity','0')

        let row = document.querySelector('.product');
        let col = document.createElement('col');
        row.appendChild(col);
        col.className = 'product_detal' 
        let img = document.createElement('img');
        col.appendChild(img);
        img.className = 'product_img';
        let name = document.createElement('h3');
        col.appendChild(name);
        let price = document.createElement('h4');
        col.appendChild(price);
       
        img.src = data[i].images
        name.innerText = data[i].title
        price.innerText = 'Price:  ' + data[i].price + '  $'


        let inp = document.querySelector('.inp_search')
        let enter = document.querySelector('.search')

        enter.addEventListener('click',function(){
            if (inp.value == data[i].title) {
                col.style.display = 'block'
            }else{
                col.style.display = 'none'

            }
        })
       
    

    }
}).catch(fale => {
    let error = document.querySelector('.error');
    error.innerText = 'მონაცემები არ ჩაიტვირთა !!!';
    $('.error').css('color','red');
    $('.loader').css('opacity','0');
});




        