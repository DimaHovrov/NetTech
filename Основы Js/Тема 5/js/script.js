const etherium = 
{
    usd: 2811,
    rub: 200612,
    eur: 2666
}

function getRate(currency)
{
    return etherium[currency];
}
//1 задание
console.log(getRate('usd'));

function getValues(obj)
{
    return Object.values(obj).map(i => {if (typeof i == "string") i=i.toUpperCase(); return i; });
}
//2 задание
console.log(getValues({name: "Dima", age: 20}));




function getInfo()
{
    const street = 'Lenina',building=1,flat=40;
    const address = 
    {
        street,
        building, 
        flat,
    }

    return Object.entries(address);
}
//3 задание
console.log(getInfo());

function joinArrays()
{
    const street = 'Lenina',building=1,flat=40;
    const address = 
    {
        street,
        building, 
        flat,
    }
    const etherium = 
    {
    usd: 2811,
    rub: 200612,
    eur: 2666
    }
    return {...address,...etherium};
}
//4 задание
console.log(joinArrays());