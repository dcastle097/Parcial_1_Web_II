	var borrar = false;

		function deletecarac(){
		var Display2 = document.f1.txtDisplay2.value;
            if (Display2 == "" || Display2 == "0" || Display2.length == 1 && blocdel!=true){
            	document.f1.txtDisplay2.value = "0";
            }
            else if(blocdel!=true){
             	var res = Display2.substring(0,Display2.length-1);
             	document.f1.txtDisplay2.value = res;
            }
