	var borrar = false;

	function validarDisplay2() {
	  Display2 = document.f1.txtDisplay2.value;
	  var expreg = /^([0-9]{1,5})+$/;
	  if(expreg.test(Display2))
		alert("la expresion es correcta");
	  else
	    alert("la expresion es incorrecta");
			}
