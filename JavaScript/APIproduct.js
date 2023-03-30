

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


       
    
        col.addEventListener('click', function(){

            let id = data[i].id;
            localStorage.setItem('id', id);
            window.location.href  = 'detals.html';
        });

        
        
        let clotes = document.querySelector('#Clothes');
        clotes.addEventListener('click',function(){

          
            if ( data[i].category.id == 1) {
                col.style.display = 'block'
            }else{
                col.style.display = 'none'
        
            }

        });

        let electric = document.querySelector('#Electronics')
        electric.addEventListener('click',function(){
        
            if ( data[i].category.id == 2) {
                col.style.display = 'block'
            }else{
                col.style.display = 'none'
            }

        });

        let furniture = document.querySelector('#Furniture');
        furniture.addEventListener('click',function(){

            if ( data[i].category.id == 3) {
                col.style.display = 'block'
            }else{
                col.style.display = 'none'
            }

        });

        let shoes = document.querySelector('#Shoes');
        shoes.addEventListener('click',function(){
            
            if ( data[i].category.id == 4) {
                col.style.display = 'block'
               
            }else{
                col.style.display = 'none'
            }

        });
        

        let others = document.querySelector('#Others');
        others.addEventListener('click',function(){
            
            if ( data[i].category.id == 5) {
                col.style.display = 'block'
            }else{
                col.style.display = 'none'
            }

        }); 


     
       
    }



}).catch(fale => {
    let error = document.querySelector('.error');
    error.innerText = 'მონაცემები არ ჩაიტვირთა !!!';
    $('.error').css('color','red');
    $('.loader').css('opacity','0');
});

