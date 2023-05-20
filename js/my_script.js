//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
//
// いろいろなjavascript
//
//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/


function DisplayPintaWithID(TagName,TextURL,JumpID,ListID,ListName)
{
	//ボードを表示
	const elem = document.getElementById(TagName);
	//elem.textContent =
	elem.innerHTML +=
	"<div id="+JumpID+"><a data-pin-do='embedBoard' data-pin-lang='ja' data-pin-board-width='800' data-pin-scale-height='400' data-pin-scale-width='800' href="+TextURL+"></a></div>";
		
	// リスト追加
	const list = document.getElementById(ListID);		
	list.innerHTML +=		
	"<li><a href='javascript:ScrollFunc(\""+JumpID+"\");'>"+ListName+"</a></li>";
}


function DisplayPinta(TagName,TextURL)
{		
	var elem = document.getElementById(TagName);
	elem.innerHTML = "<iframe src=" + TextURL + " width='800' height='600'></iframe>";
}


function ScrollFunc (TagName)
{
	const LeftValue = document.getElementById(TagName).getBoundingClientRect().left;
	const TopValue = document.getElementById(TagName).getBoundingClientRect().top;
	window.scrollTo({
		left: LeftValue,
		top: TopValue,
		behavior: 'smooth'
	});
}
