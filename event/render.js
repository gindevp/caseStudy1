function render() {

    table = "<tr >" + "<th style=\"color: white\">STT</th>" +
        "<th style=\"color: white\">NAME</th>\n" +
        "                <th style=\"color: white\">AGE</th>\n" +
        "                <th style=\"color: white\">&nbsp;&nbsp;IMG</th>\n" +
        // "                <th style=\"color: white\">SEX</th>\n" +
        "                <th style=\"color: white\">ADDRESS</th>\n" +
        "                <th style=\"color: white\"> &nbsp;&nbsp;PHONE</th>\n" +
        "                <th colspan='3' style=\"color: white;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Action</th>\n" +
        "                " +
        "            </tr>"
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i].id)
        table += `<tr>
            <td style='color: white'>${i + 1}</td></td><td style='color: white'>${arr[i].name}</td><td  style='color: white'>${arr[i].age}</td>
            <td><img style="width: 80px ;height: 80px" src="${arr[i].images}"></td><td  style='color: white'>${arr[i].address}</td>
            <td  style='color: white'>${arr[i].phone}</td><td><button class='btn btn-success' style='width: 80%' onclick=editGirl(${arr[i].id})>Edit</td>
            <td><button class='btn btn-danger'  style='width: 60% ' onclick=deleteGirl(${arr[i].id}) >Delete</td></tr>`
    }
    document.getElementById("render").innerHTML = table;
}

render()