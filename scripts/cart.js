
let cartArr = JSON.parse(localStorage.getItem("cart"));
console.log(cartArr);

function display(data){
    document.querySelector("#cart").innerHTML="";

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
        btn.setAttribute("id","remove");
        btn.innerText= "Remove";
        btn.addEventListener("click",function(){
            remove(index)
        })

        div.append(pic,name,price,btn);
        document.querySelector("#cart").append(div);
    })
}

display(cartArr);

function remove(index){
    cartArr.splice(index,1);
    localStorage.setItem("cart",JSON.stringify(cartArr));
    display(cartArr)
    price()
}

function price(){
    

    let total = cartArr.reduce(function(acc,elem){
        return acc + elem.price;

    },0)

    document.querySelector("#total-price").innerText = total;
}

price();