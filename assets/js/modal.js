// Obtener el modal
var modal = document.getElementById('myModal');

// Obtener el botón que abre el modal
var AddButton = document.getElementById("AddButton");

// Obtenga el elemento <span> que cierra el modal
var span = document.getElementsByClassName("close")[0];

//Para guardar el indice la fila seleccionada de la tabla
var SelectedRowIndex = 0;
//Obtener la tabla PersonTable
var table = document.getElementById("PersonTable");
//Obtener el botón Insertar
var InsertButton = document.getElementById("InsertButton");
//Obtener el botón Actualizar
var UpdateButton = document.getElementById("UpdateButton");

// Cuando el usuario haga clic en el botón, abra el modal 
AddButton.onclick = function() {
	//mostrar el modal
    modal.style.display = "block";
    //Mostrar el botón insertar
    InsertButton.style.visibility = 'visible';
    //Ocultar el botón actualizar
    UpdateButton.style.visibility = 'hidden';
    //Limpiar el formulario
    CleanForm();
}

// Cuando el usuario haga clic en <span> (x), cierre el modal
span.onclick = function() {
    modal.style.display = "none";
}

// Cuando el usuario haga clic en cualquier lugar fuera del modal, ciérrelo
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
//Limpiar inputs del fomulario
function CleanForm(){
	//limpiar inputs type='text'
	document.getElementById('IDTextBox').value='';
	document.getElementById('FirstNameTextBox').value='';
	document.getElementById('LastNameTextBox').value='';
	//invocar función limpiar inputs type='radio'
	RadiosToFalse("Sexo");
	//invocar funcion limpiar inputs type='checkbox'
	CheckBoxesToFalse("Pasatiempos");
}
//Mostrar modal en modo edición
function ShowModalForEdit(sender){
	//Mostrar el modal
	modal.style.display = "block";
	//Invocar función para limpiar
	CleanForm();
	//Obtener el indice de la fila seleccionada
	SelectedRowIndex = sender.parentNode.parentNode.rowIndex;
	//Asignar los valores de las celdas a los inputs
	document.getElementById('IDTextBox').value=table.rows[SelectedRowIndex].cells[0].innerHTML.toString().trim();//convertir el html en string y quitarle los espacios del inicio y final
	document.getElementById('FirstNameTextBox').value=table.rows[SelectedRowIndex].cells[1].innerHTML.toString().trim();
	document.getElementById('LastNameTextBox').value=table.rows[SelectedRowIndex].cells[2].innerHTML.toString().trim();
	//
	var genero = table.rows[SelectedRowIndex].cells[3].innerHTML.toString();
	SelectRadioByValue("Sexo",genero);
	//
	var PasatiemposString = table.rows[SelectedRowIndex].cells[4].innerHTML.toString();
	var PasatiemposArray = PasatiemposString.split(",");
	for(var x=0;x<PasatiemposArray.length;x++)
	{
        SelectCheckBoxByValue("Pasatiempos",PasatiemposArray[x].trim());
	}	
	//Ocultar el botón insertar
	InsertButton.style.visibility = 'hidden';
	//Mostrar el botón actualizar
	UpdateButton.style.visibility = 'visible';
}
//Asignar a las celdas de la fila seleccionada los nuevos valores de los inputs
function ActualizarRegistro(){
    if (ValidarCedula(document.getElementById('IDTextBox').value)){
    	table.rows[SelectedRowIndex].cells[0].innerHTML=document.getElementById('IDTextBox').value;
        table.rows[SelectedRowIndex].cells[1].innerHTML=document.getElementById('FirstNameTextBox').value;
        table.rows[SelectedRowIndex].cells[2].innerHTML=document.getElementById('LastNameTextBox').value;
          //
        var genero = GetCheckedRadioValue("Sexo");
        table.rows[SelectedRowIndex].cells[3].innerHTML=genero;     
        //
        var pasatiempos= GetCheckedBoxesValue("Pasatiempos");  
        table.rows[SelectedRowIndex].cells[4].innerHTML=pasatiempos;      
    }
    modal.style.display = "none";
}