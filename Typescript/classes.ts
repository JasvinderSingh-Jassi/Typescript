class hello{

    private firstname:string;
    private lastname:string;
    private age:number;

    constructor(firstname:string,lastname:string,age?:number){
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;

    }

    getFirstName(){
console.log("My name is "+this.firstname+" "+this.lastname);
    }

    getLastName(){

    }

}

//let obj= new hello();
//obj.firstname="Jassi";

let obj=new hello("Jassi","Singh");
//obj.firstname="Jassi";
obj.getFirstName();