






// let GetCategory = async () => {

//     try {


//         let categoryFetch = await fetch('https://api.escuelajs.co/api/v1/categories').then(_ => _.json())

//         categoryFetch.forEach(el => {

//             let ul = document.querySelector('ul');
//             let li = document.createElement('li');
//             ul.appendChild(li);
//             li.id = el.name;
//             li.className = 'product_category';
//             let name = document.createElement('h4');
//             li.appendChild(name);
//             let img = document.createElement('img');
//             li.appendChild(img);
//             img.className = 'category_arrow';
//             name.innerText = el.name;
//             img.src = 'images/categoryarrow.svg';

//             li.addEventListener('click', function () {

//                 let row = document.querySelector('.product');

//                 $('.loader').css('opacity', '1');

//                 while (row.firstChild) {
//                     row.firstChild.remove();
//                 }

//                 console.log(GetProduct(el.id));
//                 GetProduct(el.id)

//             });

//         });




//     } catch {

//         let error = document.querySelector('.error');

//         error.innerText = 'მონაცემები არ ჩაიტვირთა !!!';
//         $('.error').css('color', 'red');
//         $('.loader').css('opacity', '0');

//     }

// }






// let GetProduct = async (id) => {


//     try {

//         let productFetch = await fetch('https://api.escuelajs.co/api/v1/products').then(_ => _.json());

//         productFetch.forEach(el => {

//             if (id == el.category.id || id == null) {


//                 $('.loader').css('opacity', '0');



//                 let row = document.querySelector('.product');
//                 let col = document.createElement('col');
//                 row.appendChild(col);
//                 col.className = 'product_detal';
//                 let img = document.createElement('img');
//                 col.appendChild(img);
//                 img.className = 'product_img';
//                 let name = document.createElement('h3');
//                 col.appendChild(name);
//                 let price = document.createElement('h4');
//                 col.appendChild(price);

//                 img.src = el.images;
//                 name.innerText = el.title;
//                 price.innerText = 'Price:  ' + el.price + '  $';

//                 col.addEventListener('click', function () {

//                     let id = el.id;
//                     localStorage.setItem('id', id);
//                     window.location.href = 'detals.html';

//                 });




//             }
//         })






//     } catch {

//         let error = document.querySelector('.error');

//         error.innerText = 'მონაცემები არ ჩაიტვირთა !!!';
//         $('.error').css('color', 'red');
//         $('.loader').css('opacity', '0');

//     }


// }



// GetProduct(null);
// GetCategory();




// let ResponsiveCategoryLogo = () => {



//     let categoryul = $('.category_ul');
//     let s = true;

//     $('.category_logo').click(function () {

//         if (s) {

//             categoryul.css('display', 'block');

//         } else {

//             categoryul.css('display', 'none');
//         }

//         s = !s;
//     });

// }


// ResponsiveCategoryLogo();