function detailGirl(id){
    console.log(id)
    console.log(arr[id].name)
    document.getElementById('detailName').innerHTML= `<span>${arr[id].name}</span>`
    document.getElementById('detailAge').innerHTML= `<p>${arr[id].age}</p>`
    document.getElementById('detailImages').innerHTML= `<p><img src='${arr[id].images}'></p>`
    document.getElementById('detailAddRess').innerHTML= `<span>${arr[id].address}</span>`
    document.getElementById('detailPhone').innerHTML= `<span>${arr[id].phone}</span>`
    document.getElementById('detailHobbies').innerHTML= `<p>${arr[id].hobbies}</p>`
}