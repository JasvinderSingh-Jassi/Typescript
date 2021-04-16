interface Namepro{
    firstname:string,
    lastname:string
    age:number
}

let name1= (namepro:Namepro)=>{
console.log(namepro.firstname+" "+namepro.lastname+" "+namepro.age);
}

name1({
    firstname:"Jassi",
    lastname:"Singh",
    age:21
});