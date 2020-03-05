function greeter(name) {
    return "Hello, " + name.fname + " lname " + name.lname;
}
var user = { "fname": "Random", "lname": "Person" };
console.log(greeter(user));
