class Girl {
    id
    name
    age
    images
    address
    phone
    hobbies

    constructor(id, name, age, images, address, phone, hobbies) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.images = images;
        this.address = address;
        this.phone = phone;
        this.hobbies = hobbies;
    }

}
let girl1= new Girl(1,"Nhi",19,"../img/i1.jpg","Ha noi","0919010101", "Music, game");
console.log(girl1)
document.getElementById('detailId').innertext= girl1.id
document.getElementById('detailName').innerHTML= girl1.name
document.getElementById('detailAge').innerHTML= girl1.age
document.getElementById('detailImages').innerHTML= "<img src='" +girl1.images+"'>"
document.getElementById('detailAddRess').innerHTML= girl1.address
document.getElementById('detailPhone').innerHTML= girl1.phone
document.getElementById('detailHobbies').innerHTML= girl1.hobbies