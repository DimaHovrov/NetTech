
function SumArray()
{
    let sumArray=[4,6,16,73,5];

    let sum=0;
    sumArray.forEach(i => sum+=i);
    
    let res1 = document.querySelector(".res1");
    
    res1.textContent=sum.toString();
}

function getAbioveZero()
{
    let temp = [1,
        -3, -2, 4, 10];
    let minus=[];
        temp.forEach(i => {if (i<0) minus.push(i)});
        let res = document.querySelector(".res2");
        for(let i=0;i<minus.length;i++)
        {
            res.textContent+=minus[i].toString() + " ";
        }
        return minus;
}

function getPonies()
{
    let namePonies=['TwilightSparkle','RainbowDash','AppleJack','Rarity','Pinkie Pie','Fluttershy'];


    let nameInput=document.querySelector(".poni");
    let res = document.querySelector(".res3");
    nameInput.addEventListener("input",function() 
    {
        namePonies.forEach(name => 
            {
            if (name==nameInput.value)
            {
                res.textContent=name;
                return name;
            }
        })

    })
    res.textContent=false;
    return false;
}

function isTxIncluded(bk,tx)
{
    return bk.includes(tx);
}

function Zad4()
{
    let txInput = document.querySelector('.tx');
    let res4 = document.querySelector('.res4');
    let text;
    txInput.addEventListener("input", () =>
    {
        text=txInput.value.toString();
        res4.textContent=isTxIncluded(["0xaea0",
    "0x8f80", "0xf3ad", "0x17ec"],
    text);
    }
    );
}

function getSizes(texts)
{
    return texts.map((item)=>
    {
        return item.length;
    });

}

function Zad5()
{
    let res = document.querySelector('.res5');
    let lens=getSizes(["Moscow",
    "Coding", "School"]);

    lens.forEach(i => 
        {
            res.textContent+=i.toString()+" ";

        })
}

function getWithSpaces(texts)
{
    let res=[];
    let s=texts.join(" ");
    res.push(s);
    res.push(s.length);
    return res;
}

function Zad6()
{
    let res = document.querySelector('.res6');

    let s=getWithSpaces(["Moscow",
    "Coding", "School"]);
    res.textContent=s[0] + " " + s[1].toString();
}

function getEpisodes(anime)
{
    return `Аниме ${anime.title} включает ${anime.episodes} серий`;
}
function Zad8()
{
    let res = document.querySelector('.res8');
    res.textContent=getEpisodes({title:
        "Code Geass", episodes: 25});
}

const triple =(n)=>{return n*3};

function Zad9()
{
    let res = document.querySelector('.res9');
    res.textContent=triple(10).toString();
}

function getAvgGlucose(coeff)
{
    let avg=0.0;
    coeff.forEach(i=> avg+=i);
    avg/=coeff.length;
    return avg;
}

function Zad10()
{
    let res = document.querySelector('.res10');
    res.textContent=getAvgGlucose([5.4, 8.1, 6.3, 4.9]).toString();
}
SumArray();
getAbioveZero();
getPonies();
Zad4();
Zad5();
Zad6();
Zad8();
Zad9();
Zad10();