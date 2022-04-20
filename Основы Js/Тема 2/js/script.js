//1 задание
function getNumb(age)
{
    return Number.parseInt(age,10)+1;
}

let age = document.querySelector("#inputNumb");
let result = document.querySelector("#result1");

age.addEventListener("input", 
function()
{
    result.textContent = getNumb(age.value);
}
)
//2 задание

function getRemainder(a, b)
{
    a=Number.parseInt(a,10);
    b=Number.parseInt(b,10);

    return a%b;
}

let a=document.querySelector("#inputNumbA");
let b=document.querySelector("#inputNumbB");
let result2=document.querySelector("#result2");
let out2=document.querySelector("#out2");

out2.addEventListener("click",
function ()
{
    result2.textContent=getRemainder(a.value,b.value);

}
)

//задание 3

function faceControl(age)
{
    age=Number.parseInt(age,10);
    
    if (age<18)
    {
        return "Отказ";
    }

    return "Welcome";
}

let age3 = document.querySelector("#inputNumb3");
let result3 = document.querySelector("#result3");

age3.addEventListener("input", 
function()
{
    result3.textContent = faceControl(age3.value);
}
)

//Задание 4
function getNgetNextAgeumb(age)
{
   
    age=Number.parseInt(age,10)+1;
    if (isNaN(age))
        return 0;
    return age;
}

let age4 = document.querySelector("#inputNumb4");
let result4 = document.querySelector("#result4");

age4.addEventListener("input", 
function()
{
    result4.textContent = getNgetNextAgeumb(age4.value);
}
)


function canRide(age)
{
   
    age=Number.parseInt(age,10);
    
    return age>=140;
}

let age5 = document.querySelector("#inputNumb5");
let result5 = document.querySelector("#result5");

age5.addEventListener("input", 
function()
{
    result5.textContent = canRide(age5.value);
}
)

