var anonimouId;
function editGirl(id){
    console.log("edit id:" +id)

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id == id) {
            anonimouId = arr[i].id;
            document.getElementById("name").value = arr[i].name;
            document.getElementById("age").value = arr[i].age;
            document.getElementById("images").value = arr[i].images;
            document.getElementById("addRess").value = arr[i].address;
            document.getElementById("phone").value = arr[i].phone;
            document.getElementById("hobbies").value = arr[i].hobbies;
        }
    }
}
function addGirl(){
    let itemName = document.getElementById('name').value
    let itemAge = Number(document.getElementById('age').value)
    let itemImages=document.getElementById("images").value
    let itemAddRess = document.getElementById('addRess').value
    let itemPhone = document.getElementById('phone').value
    let itemHobbies = document.getElementById('hobbies').value
    let item;
    item={
        id: anonimouId,
        name: itemName ,
        age: itemAge,
        images: itemImages,
        address: itemAddRess ,
        phone: itemPhone ,
        hobbies: itemHobbies
    }
    let index = arr.findIndex((c) => c.id == item.id)
    console.log(item.id)
    console.log("index" + index)
    if (index >= 0) {
        console.log(" edit thanh cong index:"+index)
        arr.splice(index, 1, item)
    } else {
        item.id= (arr.length+1)
        item.images= "/img/"+item.images+".jpg"
        console.log("add thanh cong")
        console.log("item"+item);
        arr.push(item);
    }
    console.log(arr)
    render()
    clear()
}
function clear(){
    document.getElementById('name').value=""
    document.getElementById('age').value=""
    document.getElementById("images").value=""
    document.getElementById('addRess').value=""
    document.getElementById('phone').value=""
    document.getElementById('hobbies').value=""
}
function deleteGirl(id){
    console.log("delete"+id)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id == id) {
            arr.splice(i, 1);
            render();
        }

    }}
