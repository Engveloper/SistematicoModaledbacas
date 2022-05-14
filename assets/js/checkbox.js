
// Pase el nombre de los checkboxs a la función
function GetCheckedBoxesValue(chkboxName) {
  var checkboxes = document.getElementsByName(chkboxName);
  var checkboxesChecked = "";
  // Iterar sobre todos ellos
  for (var i=0; i<checkboxes.length; i++) {
     // Y concateno los valores de los seleccionados ...
     if (checkboxes[i].checked) {
        checkboxesChecked = checkboxesChecked.concat(checkboxes[i].value).concat(", ");
     }
  }
  checkboxesChecked = checkboxesChecked.trim().substring(0, checkboxesChecked.trim().length-1);
  return checkboxesChecked.length > 0 ? checkboxesChecked : "";
}

// Ponert todos los checkbox en false
function CheckBoxesToFalse(chkboxName) {
  var checkboxes = document.getElementsByName(chkboxName);
  // Iterar sobre todos ellos
  for (var i=0; i<checkboxes.length; i++) {
	checkboxes[i].checked = false;
  }
  return;
}
function SelectCheckBoxByValue(chkboxName,Value){
  var CheckBoxes = document.getElementsByName(chkboxName);
  for (var i = 0, length = CheckBoxes.length; i < length; i++){
     if (CheckBoxes[i].value==Value){ 
      CheckBoxes[i].checked = true;
     }     
  }
  return;
}