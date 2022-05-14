// Poner todos los radios en false
function RadiosToFalse(RadiosName) {
	var radios = document.getElementsByName(RadiosName);
	for (var i = 0, length = radios.length; i < length; i++){
	 radios[i].checked =false;
	}
  return;
}
//Obtener checboxes seleccionados
function GetCheckedRadioValue(RadiosName) {
  var radios = document.getElementsByName(RadiosName);
  var selectedOption="";
  for (var i = 0, length = radios.length; i < length; i++){
     if (radios[i].checked){ 
      selectedOption = radios[i].value;
      break;
     }     
  }
  return selectedOption;
}

function SelectRadioByValue(RadiosName,Value){
  var radios = document.getElementsByName(RadiosName);
  for (var i = 0, length = radios.length; i < length; i++){
     if (radios[i].value==Value){ 
      radios[i].checked = true;
      break;
     }     
  }
  return;
}