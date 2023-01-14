let product = [
    
        {
            title: "Samsung Galaxy S8",
          
            price:  399.99,
            
            Image: "phone-4.png",
        },
        {
            title: "Google Pixel",
           
            price: 499.99,
           
            Image: "phone-1.png",
        },
        {
            title: "Xiaomi Redmi Note 2",
           
            price: 699.99,
           
            Image: "phone-2.png",
        },
        {
            title: "Samsung Galaxy S7",
          
            price: 599.99,
           
            Image: "phone-3.png",
        },
       

    ]

    const categories = [...new Set(product.map((item) => 
        {return item}))]
        let i = 0;
        document.getElementById("wrapper").innerHTML = categories.map((item)=>
        {
            let {Image ,title , price} = item;
            return(
                `<div class='box'>
                <div class='img-box'>
                <img class='images' src=${Image}>
                </div>
                <div class='bottom'>
                <h2>${title}</h2>
                <p>${price + "$"}</p>` +
                "<button onclick='addtocart("+(i++)+")'>Add To Cart</button>" +
                ` </div>
                </div>`
            )
        }).join('');

        let cart = [];

        function addtocart(a){
            cart.push({...categories[a]});
            displayCart();
        }

        function delet(a){
            cart.splice(a, 1);
            displayCart();
        }

        function displayCart(a){
            let counting = 0, total = 0;
            // counter
            document.getElementById("count").innerHTML=cart.length;
            if(cart.length==0){
                document.getElementById("cart-item").innerHTML = "Your Cart Is Empty";
                document.getElementById("total").innerHTML="$ "+0+".00"
                   
            }
            else{
                document.getElementById("cart-item").innerHTML = cart.map((item)=>{
                    let {Image, title, price} = item;
                    total = total + price;
                    document.getElementById("total").innerHTML="$ "+total+"";
                    return(
                        `<div class='cart-item'>
                        <div class='row'>
                        <img class='row-img' src=${Image}>
                        </div>
                        <p>${title}</p>
                        <p>${price + "$"}</p>` +
                        "<a onclick='delet("+(counting++) +")'>Remove</a>" +
                        `</div>`
                        
                    );
                }).join('');
            };

        };