function renderList() {
    console.log(arr.length)
    let card = `<div class="container-fluid padding" >
        <div class="row">`;
    for (let i = 0; i < arr.length; i++) {
        card += `
        <div class="col-3" >
        <div class="card" style="margin-bottom: 20px; ">
        <div>
        <img class=" card-img-top" src="${arr[i].images}"
        width="200px"
        height="450px"
        alt="img">
        <div class="card-body">

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${arr[i].name}<br> <hr>age: ${arr[i].age}<hr/>Address: ${arr[i].address}<br>
                       
&nbsp;
<div class="card-text">
<a id="redirectDetail" href="../admin/detail.html" onclick="window.localStorage.setItem('keyID',${arr[i].id}-1)" class="btn btn-danger" style=";font-size: 30px;width: 100%; height: 50px"><span>Detail</span></a>
</div>
</div>
</div>
    
</div>
</div>`
    }
    card += `</div>        
</div>`
    document.getElementById("showList").innerHTML = card
}

renderList()