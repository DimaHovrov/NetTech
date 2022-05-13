class User
{
constructor(name,email)
{
    this.name=name;
    this.email=email;
}

}
function createUser(name,email)
{
const user=new User(name,email);
console.log(user.name,user.email);
}

//Задание 1
createUser("Hovr","hovrovdima2001@gmail.com");


class User2
{
    constructor(id,type)
    {
        this.id=id;
        this.type=type;
    }

    getId()
    {
        let s=this.id;
        return '#'+s.toString();
    }

    isAdmin()
    {
        return this.type === "Admin";
    }
}
//задание 2
let user2=new User2(100,"Admin");
console.log(user2.getId());
console.log(user2.isAdmin().toString());

//задание 3

class AreaOfCircle
{
    constructor(area)
    {
        this.area=area;
    }


    set area(value)
    {
        this._area=value*value*Math.PI;
    }
}

const circle = new AreaOfCircle(2);
console.log(circle._area);
circle.area=10;
console.log(circle._area);

//задание 4

class Course
{
    constructor(mark)
    {
        this.mark=mark;
    }

    getGrade()
    {
        return this.mark==4 || this.mark==5;
    }
    getSertificate()
    {
        if (this.getGrade())
        {
            console.log("Выдать сертификат");
        }else
        {
            console.log("Курс не пройден");
        }
    }
}

let course = new Course(5);
course.getSertificate();

course=new Course(3);
course.getSertificate();