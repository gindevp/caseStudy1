function render() {

    table = "<tr >" + "<th >STT</th>" +
        "<th >NAME</th>\n" +
        "                <th >AGE</th>\n" +
        "                <th >&nbsp;&nbsp;IMG</th>\n" +
        // "                <th style=\"color: white\">SEX</th>\n" +
        "                <th >ADDRESS</th>\n" +
        "                <th> &nbsp;&nbsp;PHONE</th>\n" +
        "                <th colspan='3' >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Action</th>\n" +
        "                " +
        "            </tr>"
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i].id)
        table += `<tr>
            <td >${i + 1}</td></td><td>${arr[i].name}</td><td  >${arr[i].age}</td>
            <td><img  style="height: 50px; width: 50px" src="${arr[i].images}"></td><td  >${arr[i].address}</td>
            <td  >${arr[i].phone}</td><td><button class='btn btn-success' style="width: 130px" onclick=editGirl(${arr[i].id})><img src="../icon/edit.png " style="width: 35%">  &nbsp; &nbsp;Edit</td>
            <td><button class='btn btn-danger' style="width: 130px" onclick=deleteGirl(${arr[i].id}) ><img src="../icon/delete.png " style="width: 30%"> &nbsp;&nbsp;Delete</td></tr>`
    }
    document.getElementById("render").innerHTML = table;
}

render()