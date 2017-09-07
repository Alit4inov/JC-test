var checkEmail = function(email) {

   
	var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;
	var mail = $('#mail');
	var info = $('.validation-info');
	
	
	mail.blur(function validate(){
		if(mail.val() != ''){
				if(mail.val().search(pattern) == 0){
					$('#submit').attr('disabled', false);
					info.removeClass('error');
				}else{
					$('#valid').text('Please enter valid email');
					$('#submit').attr('disabled', true);
					info.addClass('error');
				}
			}else{
				$('#valid').text('Please enter email');
				info.addClass('error');
				$('#submit').attr('disabled', true);
			}
		});

	$(function() {
	   $('.form-btn').on('click', validate);
	});

};

export default checkEmail;
