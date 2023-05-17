$(function() {
	//MENUを開くとき
	$('#button1').on('click', function(){
		$('.list1').toggleClass('open');
	});
})

$(function() {
	//MENUを閉じるとき
	$('.list1').on('click', function(){
		$('.list1').removeClass('open');
	});
})
