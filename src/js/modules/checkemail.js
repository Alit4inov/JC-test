var checkEmail = function(email) {

   
	var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;
	var mail = $('#mail');
	var info = $('.validation-info');
	
	mail.blur(function(){
		if(mail.val() != ''){
				if(mail.val().search(pattern) == 0){
					$('#valid').text('ОК');
					$('#submit').attr('disabled', false);
					mail.removeClass('error').addClass('ok');
				}else{
					$('#valid').text('Please enter valid email');
					$('#submit').attr('disabled', true);
					mail.addClass('ok');

				}
			}else{
				$('#valid').text('Please enter valid email');
				mail.addClass('error');
				info.addClass('error');
				$('#submit').attr('disabled', true);
			}
	});

};

export default checkEmail;
