function InsertarRegistro(){
    if (ValidarCedula(document.getElementById('IDTextBox').value)){
        var a=document.getElementById('PersonTable').insertRow(1);
        var b=a.insertCell(0);
        var c=a.insertCell(1);
        var d=a.insertCell(2);
        var e=a.insertCell(3);
        var f=a.insertCell(4);
        var g=a.insertCell(5);
        b.innerHTML=document.getElementById('IDTextBox').value;
        c.innerHTML=document.getElementById('FirstNameTextBox').value;
        d.innerHTML=document.getElementById('LastNameTextBox').value;
        //
        var genero = GetCheckedRadioValue("Sexo");
        e.innerHTML=genero;     
        //
        var pasatiempos= GetCheckedBoxesValue("Pasatiempos");  
        f.innerHTML=pasatiempos;
        var buttons ="<button name='EditButton' onclick='ShowModalForEdit(this)'>Editar</button>";
        buttons = buttons.concat("&nbsp;").concat("<button name='DeleteButton' onclick='deleteRow(this)'>Eliminar</button>");
        g.innerHTML=buttons;

        var modal = document.getElementById('myModal');
        modal.style.display = "none";
    }

}

function deleteRow(sender) {
    var i = sender.parentNode.parentNode.rowIndex;
    document.getElementById("PersonTable").deleteRow(i);
}