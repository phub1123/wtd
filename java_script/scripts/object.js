let cat = { name: "Lucy", color: "golden brown", age: 3}

let dog = new Object();
dog.breed = "husky"
dog.name = "jacky"
dog.isVacinnated = true
console.log(dog);
document.getElementById("para1").innerHTML = "breed: " +  dog.breed + "<br> name:" + dog["name"];

delete dog.isVAcinnated;
console.log(dog);
document.getElementById("para").innerHTML = "isVacinnated" + dog.isVacinnated;

dog.age=5;
console.log(dog);

const person = {
    fname: "Phub",
    lname: "Zam",
    age: 22,
    fullname: function () {
        return this.fname+ " " + this.lname
    }
};

console.log(person);

document.getElementById("para1").innerHTML = person.fullname();