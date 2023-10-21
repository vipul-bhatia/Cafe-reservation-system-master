
$(document).ready (function(){
	/*operate Recaptcha*/
  $('#myForm').submit(function(event) {
        		/*console.log('form submitted.');*/
       $("#prec").html("<br>");

       	  $("#rec").addClass("alert").html("Confirm that you are not a boot !");

	        	if (!grecaptcha.getResponse()) {
	           /* console.log('captcha not yet completed.');*/

		            event.preventDefault(); //prevent form submit
		            grecaptcha.execute();

        	}
    	});

/*Jquery - submitting the form*/

	$('form').on('submit', function(event){
		event.preventDefault();
		var name = $("#name").val();
		var email = $("#email").val();
		var persons = $("#persons").val();
		var data = $("#datePickerId").val();
		var hour = $("#hour").val();
		$("#reservation-right").html("<br><br>"+"Thank you for booking" +name + " !" +  "<br>" + "We will answer your email:"+ email + "<br>" + "Number of people:" + persons + "<br>" + " Data : " + data + "<br>"+ "Hour: " + hour );
		$("#rec").removeClass("alert").html("");
		
		
	});

 
$(".button-reco").click(function(){

		$(".content").text("Loading content...");

		$.ajax({
			type:"GET",
			url: "https://jsonplaceholder.typicode.com/comments",
			success: function(data) {
				$(".content").html("");
				for ( var i = 0; i < 9; i++ ) {
					$(".content").append("<br><p>" +"' " + data[i].body +" '" + "</br>" +"<p> " + data[i].email+"</br></br>"  );
				}
			},
			dataType: "jsonp"
		});

	});



	//datePciker : minimal date
	datePickerId.min = new Date().toISOString().split("T")[0];

	/*zmiana teksu -jQuery*/
	$(".banner>.container> p").text("Cracow, 1415 Kawowa Street").css("color" , "#FFFFFF");
	$("#col1> p").text("Discover the art of coffee brewing and its unique taste!");
	$("#col2> p").text("The best blend of coffee beans from all over the world!");
	$("#col3> p").text("And we recommend the delicious pastries of our confectioners for coffee!");

	

	/* Przejscia przy wczytywaniu strony */
	$("p, h1, h2, h3, h4, a, img, form, button").hide().fadeIn(2000);


});