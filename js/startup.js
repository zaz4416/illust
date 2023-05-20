//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
//
// HTML読み込み完了後の処理
//
//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/


document.addEventListener('DOMContentLoaded', function(){
		//---------------------------------------------------------------------------------
		// HTMLの読み込みとパースが終わると、HTMLの記述内で使用しているid等のパラメータが使用可能となる。
		// よって、この関数内部で、ボタンクリック時のイベントを設定しましょう。
		//---------------------------------------------------------------------------------

		var btn001= document.getElementById("btn001");

		btn001.addEventListener('click', function(){
			DisplayPinta('test','html/pinta_eyes.html');
		});	
		
		DisplayPintaWithID("PINTA", "https://www.pinterest.jp/Zaz4416/pose/","JID_POSE","list01","ポーズ");
		DisplayPintaWithID("PINTA", "https://www.pinterest.jp/Zaz4416/line-art/","JID_LINEA","list01","線画");
		DisplayPintaWithID("PINTA", "https://www.pinterest.jp/Zaz4416/rpg-chracter/","JID_RPG_CHARA","list01","RPGキャラ");
		DisplayPintaWithID("PINTA", "https://www.pinterest.jp/Zaz4416/painting/","JID_PAINTING","list01","塗り");
		DisplayPintaWithID("PINTA", "https://www.pinterest.jp/Zaz4416/sd-character/","JID_SDCHAR","list01","SDキャラ");
		DisplayPintaWithID("PINTA", "https://www.pinterest.jp/Zaz4416/face/","JID_FACE","list01","顔");
		
		DisplayPintaWithID("PINTA", "https://www.pinterest.jp/Zaz4416/shadowing/","JID_SHADOWING","list01","影付け");
		DisplayPintaWithID("PINTA", "https://www.pinterest.jp/Zaz4416/hairstyle/","JID_HAIRSTYLE","list01","髪型");
		DisplayPintaWithID("PINTA", "https://www.pinterest.jp/Zaz4416/cothes/","JID_COTHES","list01","服");
		DisplayPintaWithID("PINTA", "https://www.pinterest.jp/Zaz4416/face/","JID_FACE","list01","顔");
		DisplayPintaWithID("PINTA", "https://www.pinterest.jp/Zaz4416/face/","JID_FACE","list01","顔");

	
/*
https://www.pinterest.jp/Zaz4416/ref/red/	
https://www.pinterest.jp/Zaz4416/ref/white/
https://www.pinterest.jp/Zaz4416/ref/vivid/
https://www.pinterest.jp/Zaz4416/ref/yellow/
https://www.pinterest.jp/Zaz4416/ref/blue/
https://www.pinterest.jp/Zaz4416/ref/black/
*/	
	
});	
