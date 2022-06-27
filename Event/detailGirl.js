function detailGirl(){
    let id=localStorage.getItem('keyID')
    console.log(id)
    document.getElementById('detailName').innerHTML= `<span>${arr[id].name}</span>`
    document.getElementById('detailAge').innerHTML= `<p>${arr[id].age}</p>`
    document.getElementById('detailImages').innerHTML= `<p><img src='${arr[id].images}' style="width: 700px; height: 700px;"></p>`
    document.getElementById('detailAddRess').innerHTML= `<span>${arr[id].address}</span>`
    document.getElementById('detailPhone').innerHTML= `<span>${arr[id].phone}</span>`
    document.getElementById('detailHobbies').innerHTML= `<p>${arr[id].hobbies}</p>`
}
detailGirl()