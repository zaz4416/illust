//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
//
// いろいろなjavascript
//
//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/

function DisplayPinta(TagID,TextURL)
{		
	var elem = document.getElementById(TagID);
	elem.innerHTML = "<iframe src=" + TextURL + " width='800' height='600'></iframe>";
}


