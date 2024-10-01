let a = "Hello World"
console.log(a)

const number = 12;

if(number % 2 == 1){
    console.log("odd")
}
else (number % 2 == 0) 
{
    console.log("even")
}


let number1 = 12;
let number2 = 13;

    console.log(number1 + number2);
    console.log(number1 * number2);


  let array = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"]

    const array2 = array.map(function(element){
        return element * 2;
    }
);
console.log(array2)


function changeColor()
{
    var li = document.getElementById(`html`);
    li.style.color = `blue`;
}


const c = [1, 2]
const d = [3, 4]
const f = [...c, ...d]

console.log(f)


const btnEl = document.getElementById("btn");
const inputEl = document.getElementById("inp");
const listEl = document.getElementById("txt");

btnEl.addEventListener(`click`, () => {
    const inputValue = inputEl.value;
    listEl.innerHTML = `<li>${inputValue}</li>`;
})


setInterval(myFunction, 1000);

function myFunction(){
    let d = new Date();
    document.getElementById("timer").innerHTML=
    d.getHours() + ":" +
    d.getMinutes() + ":" +
    d.getSeconds();
}




function check() {
    const message = document.getElementById("answ");
    message.innerHTML = "";
    let x = document.getElementById("checknumber").value;
    try{
        if(x.trim() == "") throw "is empty";
        if(isNaN(x)) throw "is not a number";
        x = Number(x);
    }
    catch (err) {
        message.innerHTML = "Input " + err;
    }
    finally{
        document.getElementById("checknumber").value = "";
    }
}

