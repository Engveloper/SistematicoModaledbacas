function validarCamposRequeridos(ids) {
  return ids.every(function (id) {
    return document.getElementById(id).value != "";
  });
}

function InsertarRegistro() {
  if (ValidarCedula(document.getElementById("IDTextBox").value)) {
    var requiredFields = [
      "IDTextBox",
      "FirstNameTextBox",
      "LastNameTextBox",
      "ChildrenNumberTextBox",
    ];

    var availableProfessions = {
      0: "-",
      1: "Licenciado en contabilidad",
      2: "Licenciado en administracrion de empresas",
      3: "Ingeniero Industrial",
      4: "Ingeniero de Sistema",
      5: "Ingeniero Civil",
      6: "Ingeniero Químico",
    };

    if (!validarCamposRequeridos(requiredFields)) {
      alert(
        "Los campos Cedula, Nombre, Apellidos, sexo, y número de hijos son requeridos."
      );
      return;
    }

    var childrenNumber = Number(
      document.getElementById("ChildrenNumberTextBox").value
    );

    if (childrenNumber > 10 && !confirm("¿El número de hijos es correcto?")) {
      return;
    }

    var a = document.getElementById("PersonTable").insertRow(1);
    var b = a.insertCell(0);
    var c = a.insertCell(1);
    var d = a.insertCell(2);
    var e = a.insertCell(3);
    var f = a.insertCell(4);
    var profession = a.insertCell(5);
    var children = a.insertCell(6);
    var g = a.insertCell(7);

    var genero = GetCheckedRadioValue("Sexo");
    if (!genero) {
      alert("El campo `sexo` es requerido.");
      return;
    }

    b.innerHTML = document.getElementById("IDTextBox").value;
    c.innerHTML = document.getElementById("FirstNameTextBox").value;
    d.innerHTML = document.getElementById("LastNameTextBox").value;
    profession.innerHTML =
      availableProfessions[document.getElementById("ProfessionTextBox").value];
    children.innerHTML = document.getElementById("ChildrenNumberTextBox").value;
    //
    e.innerHTML = genero;
    //
    var pasatiempos = GetCheckedBoxesValue("Pasatiempos");
    f.innerHTML = pasatiempos;
    var buttons =
      "<button name='EditButton' onclick='ShowModalForEdit(this)'>Editar</button>";
    buttons = buttons
      .concat("&nbsp;")
      .concat(
        "<button name='DeleteButton' onclick='deleteRow(this)'>Eliminar</button>"
      );
    g.innerHTML = buttons;

    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }
}

function deleteRow(sender) {
  var i = sender.parentNode.parentNode.rowIndex;
  document.getElementById("PersonTable").deleteRow(i);
}
