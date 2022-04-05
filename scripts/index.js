
// let count = 0;

let cartArr = JSON.parse(localStorage.getItem("cart")) || [];

let url = `https://masai-food-api.herokuapp.com/api/meals/india`;

async function products(){

    try{

        let res = await fetch(url);
        let data = await res.json();

        console.log('data:', data)

        appendProducts(data[0].meals);

    }

    catch(err){

        console.log('err:', err)
    }

}

products();
count();

function appendProducts(data){

    data.forEach(function(elem,index){
        let div = document.createElement("div");

        let pic = document.createElement("img");
        pic.src = elem.strMealThumb;
        pic.style.height="300px";

        let name = document.createElement("h4");
        name.innerText = elem.strMeal;

        let price = document.createElement("h5");
        price.innerText = elem.price;
        

        let btn = document.createElement("button");
        btn.setAttribute("id","addtocart");
        btn.innerText = "Add To Cart";
        btn.addEventListener("click",function(){
            addToCart(elem);
            count()
        })

        div.append(pic,name,price,btn);
        document.querySelector("#menu").append(div);
    })

    function addToCart(elem){
        
        // console.log(elem);

        cartArr.push(elem);
        // console.log(cartArr);


        localStorage.setItem("cart",JSON.stringify(cartArr));

    }

}

function count(){

    document.querySelector("#count").innerHTML="";
    
    document.querySelector("#count").innerText = cartArr.length;
    
}

