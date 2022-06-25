function listGirl() {
    console.log(arr.length)
    let card=`<div class="container-fluid padding">
        <div class="row">`;
    for(let i=0;i<arr.length;i++){
        card+=`
        <div class="col-3" >
        <div class="card">
        <div>
        <img class=" card-img-top" src="${arr[i].images}"
        width="200px"
        height="450px"
        alt="img">
        <div class="card-body">
        <div class="text-center border-bottom">
        <h3 class="card-title">
        <b>${arr[i].name}</b>
</h3>
</div>

</div>
</div>    
</div>
</div>`



}
card+=`</div>        
</div>`

    document.getElementById("showList").innerHTML = card
}
listGirl()