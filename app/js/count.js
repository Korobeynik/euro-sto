$(document).ready( fucntion(){

		function changeCourse(course)
		  {
		  $('.choise-form .dol').each(function( index ) {
		     var price = parseInt($(this).text().replace(/\s{1,}/g, '').substring(1));
		if(!isNaN(price)){
		var result = price * course;
		$(this).prev().text(result+'грн');
		}
		  });
		  }

		  //МЕНЯЕМ КУРС ДОЛАРА ТУТ!
			changeCourse(26.5);


});