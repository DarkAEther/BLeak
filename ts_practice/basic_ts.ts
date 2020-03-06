interface Person{
    fname: string;
    lname: string;
}
function greeter(name :Person){
    return "Hello, " + name.fname + " lname " + name.lname;
}
let user = {"fname":"Random","lname":"Person"};
console.log(greeter(user));
