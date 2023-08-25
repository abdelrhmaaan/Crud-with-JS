
var productName = document.getElementById('pName') ;
var productCategory = document.getElementById('pCategory') ;
var productPrice = document.getElementById('pPrice') ;
var productDisc = document.getElementById('pDisc') ;
// get all inputs with in one var 
var inputs = document.getElementsByClassName('form-control');
var addBtn = document.getElementById('addBtn');
// display the output 
var tbody = document.getElementById('tbody');

var products = [];
// product id 
var productId;
// add product , ? 

if(localStorage.getItem('products') != null)
{
    products = JSON.parse( localStorage.getItem('products')) ;
     
    displayProduct();
  
}



addBtn.onclick = function(){
    addProduct();
    displayProduct();
    clearInputs();
}



function addProduct(){
    
    // check if the innerhtml is addproduct or update 
    if (addBtn.innerHTML == 'Add Product')
    {
        product = {
            name: productName.value,
            category: productCategory.value,
            price: productPrice.value,
            discription: productDisc.value
        }
    
        products.push(product);
    }
    else{
        updateProuct();
        addBtn.innerHTML = 'Add Product';

    }
        // wanna take this producst array and save it in a local storage 
    localStorage.setItem('products', JSON.stringify(products));

}



function displayProduct(){
    var trs = '';
    for(var i = 0 ; i < products.length ; i++)
    {
        trs  += `<tr class='productRow'><td>${i+1}</td>
      <td>${products[i].name}</td>
      <td>${products[i].category}</td>
      <td>${products[i].price}</td>
      <td>${products[i].discription}</td>
      <td><button onclick='editProduct(${i})' class='btn btn-warning'>Edit</button></td>
      <td><button onclick='deleteProduct(${i})' class='btn btn-danger'>Delete</button></td>
                                </tr>
      `
    }

    tbody.innerHTML = trs ;

}


// clear values

function clearInputs()
{
    for(var i = 0 ; i<inputs.length;i++)
    {
    inputs[i].value = ''; 
    }
}

// deleteproduct 

function deleteProduct(pId)
{
    products.splice(pId,1);
    localStorage.setItem('products', JSON.stringify(products));
    displayProduct();
}

function editProduct(pId)
{
    productId = pId;
    // return prouct values on the input form
    
    productName.value = products[pId].name 
    productCategory.value = products[pId].category
    productPrice.value = products[pId].price
    productDisc.value = products[pId].discription
    // turn add product button to update 
    addBtn.innerHTML = 'Update';
}

function updateProuct()
{
    product = {
        name: productName.value,
        category: productCategory.value,
        price: productPrice.value,
        discription: productDisc.value
    };

    products.splice(productId,1,product);
    displayProduct();
    
}

// if(products[0].name[0] =='c' )
// {
    //     console.log(products[0].name.toLowerCase())
//     console.log(products[1].name.toLowerCase())
// }

    function searchProduct(sOutput){
    
        // var productRows = tbody.querySelectorAll('.productRow')
    
        // console.log(productRows);
        var trs = '';
    
        for(var i =0; i < products.length; i++)
        {
          
            // console.log(products[i].name.toLowerCase())
            if(products[i].name.toLowerCase().includes(sOutput.toLowerCase()) )
            {
                    trs  += `<tr class='productRow'><td>${i+1}</td>
                    <td>${products[i].name}</td>
                    <td>${products[i].category}</td>
                    <td>${products[i].price}</td>
                    <td>${products[i].discription}</td>
                    <td><button onclick='editProduct(${i})' class='btn btn-warning'>Edit</button></td>
                    <td><button onclick='deleteProduct(${i})' class='btn btn-danger'>Delete</button></td>
                                                </tr>
            `;
            //   console.log(trs)
            }
        }

        tbody.innerHTML = trs ;
    }




// console.log(arr.splice(0,1,2))
// console.log(arr)
    