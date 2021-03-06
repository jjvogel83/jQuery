//Challenge 23 (Creating Your Own DOM 1)

application.js 
var message = $('<span>Call 1-555-jquery-air to book this tour</span>');
$('.book').before(message);

index.html
<!DOCTYPE html> 
<div id="tours">
  <h1>Guided Tours</h1>
  <ul>
	<li class="usa tour">
  	<h2>New York, New York</h2>
  	<span class="details">$1,899 for 7 nights</span>
  	<button class="book">Book Now</button>
	</li>
  </ul>
</div>
</html>

Challenge 24 (Creating Your Own DOM 2)

application.js 
var message = $('<span>Call 1-555-jquery-air to book this tour</span>');
$('.usa').append(message);

index.html
<!DOCTYPE html> 
<div id="tours">
  <h1>Guided Tours</h1>
  <ul>
	<li class="usa tour">
  	<h2>New York, New York</h2>
  	<span class="details">$1,899 for 7 nights</span>
  	<button class="book">Book Now</button>
	</li>
	<li class="europe tour">
  	<h2>Paris, France</h2>
  	<span class="details">$2,299 for 7 nights</span>
  	<button class="book">Book Now</button>
	</li>
	<li class="asia tour">
  	<h2>Tokyo, Japan</h2>
  	<span class="details">$3,799 for 7 nights</span>
  	<button class="book">Book Now</button>
	</li>
  </ul>
</div>
</html>


Challenge 25 (Removing From the DOM)

application.js 
var message = $('<span>Call 1-555-jquery-air to book this tour</span>');
$('.usa').append(message);
$('button').remove();

index.html
<!DOCTYPE html> 
<div id="tours">
  <h1>Guided Tours</h1>
  <ul>
	<li class="usa tour">
  	<h2>New York, New York</h2>
  	<span class="details">$1,899 for 7 nights</span>
  	<button class="book">Book Now</button>
	<span>Call 1-555-jquery-air to book this tour</span></li>
  </ul>
</div>
</html>

Challenge 26 (Click Interaction)

application.js 
$('button').on('click', function() {
 var message = $('<span>Call 1-555-jquery-air to book this tour</span>');
 $('.usa').append(message);
 $('button').remove();
});

index.html
<!DOCTYPE html> 
<div id="tours">
  <h1>Guided Tours</h1>
  <ul>
	<li class="usa tour">
  	<h2>New York, New York</h2>
  	<span class="details">$1,899 for 7 nights</span>
 	 
	<span>Call 1-555-jquery-air to book this tour</span></li>
  </ul>
</div>
</html>

Challenge 27 (Acting On Click)

application.js 
$('.tour').on('click', function() {
 var message = $('<span>Call 1-555-jquery-air to book this tour</span>');
 $('.usa').append(message);
 $('button').remove();
});

index.html
<!DOCTYPE html> 
<div id="tours">
  <h1>Guided Tours</h1>
  <ul>
	<li class="usa tour">
  	<h2>New York, New York</h2>
  	<span class="details">$1,899 for 7 nights</span>
  	<button class="book">Book Now</button>
	</li>
  </ul>
</div>
</html>

Challenge 28 (On Page Load)
application.js 
$(document).ready(function() {
 $('button').on('click', function() {
   var message = $('<span>Call 1-555-jquery-air to book this tour</span>');
   $('.usa').append(message);
   $('button').remove();
 });
});

index.html
<!DOCTYPE html> 
<div id="tours">
  <h1>Guided Tours</h1>
  <ul>
	<li class="usa tour">
  	<h2>New York, New York</h2>
  	<span class="details">$1,899 for 7 nights</span>
  	<button class="book">Book Now</button>
	</li>
  </ul>
</div>
</html>

Challenge 29 (Removing the Click Button)
application.js 
$(document).ready(function() {
 $('button').on('click', function() {
   var message = $('<span>Call 1-555-jquery-air to book this tour</span>');
   $('.usa').append(message);
   $(this).remove();
 });
});

index.html
<!DOCTYPE html>
<div id="tours">
  <h1>Guided Tours</h1>
  <ul>
	<li class="usa tour">
  	<h2>New York, New York</h2>
  	<span class="details">$1,899 for 7 nights</span>
  	<button class="book">Book Now</button>
	</li>
	<li class="europe tour">
  	<h2>Paris, France</h2>
  	<span class="details">$2,299 for 7 nights</span>
  	<button class="book">Book Now</button>
	</li>
	<li class="asia tour">
  	<h2>Tokyo, Japan</h2>
  	<span class="details">$3,799 for 7 nights</span>
  	<button class="book">Book Now</button>
	</li>
  </ul>
</div>
 </html>

Challenge 30 (Relative Traversing 1)
application.js 
$(document).ready(function() {
 $('button').on('click', function() {
   var message = $('<span>Call 1-555-jquery-air to book this tour</span>');
   $(this)...;
   $(this).remove();
 });
});

index.html
<!DOCTYPE html> 
<div id="tours">
  <h1>Guided Tours</h1>
  <ul>
	<li class="usa tour">
  	<h2>New York, New York</h2>
  	<span class="details">$1,899 for 7 nights</span>
  	<button class="book">Book Now</button>
	</li>
	<li class="europe tour">
  	<h2>Paris, France</h2>
  	<span class="details">$2,299 for 7 nights</span>
  	<button class="book">Book Now</button>
	</li>
	<li class="asia tour">
  	<h2>Tokyo, Japan</h2>
  	<span class="details">$3,799 for 7 nights</span>
  	<button class="book">Book Now</button>
	</li>
  </ul>
</div>
</html>

Challenge 31 (Relative Traversing 2)
application.js 
$(document).ready(function() {
 $('button').on('click', function() {
   var message = $('<span>Call 1-555-jquery-air to book this tour</span>');
   $(this).closest('.tour')...;
   $(this).remove();
 });
});

index.html
<!DOCTYPE html> 
<div id="tours">
  <h1>Guided Tours</h1>
  <ul>
	<li class="usa tour">
  	<h2>New York, New York</h2>
  	<span class="details">$1,899 for 7 nights</span>
  	<div>
    	<button class="book">Book Now</button>
  	</div>
	</li>
	<li class="europe tour">
  	<h2>Paris, France</h2>
  	<span class="details">$2,299 for 7 nights</span>
  	<div>
    	<button class="book">Book Now</button>
  	</div>
	</li>
	<li class="asia tour">
  	<h2>Tokyo, Japan</h2>
  	<span class="details">$3,799 for 7 nights</span>
  	<div>
    	<button class="book">Book Now</button>
  	</div>
	</li>
  </ul>
</html>

Challenge 32 (Relative Traversing 3)
application.js 
$(document).ready(function() {
 $('.tour').on('click', function() {
   var message = $('<span>Call 1-555-jquery-air to book this tour</span>');
   $(this).append(message).find('button').remove();
 });
});

index.html
<!DOCTYPE html> 
<div id="tours">
  <h1>Guided Tours</h1>
  <ul>
	<li class="usa tour">
  	<h2>New York, New York</h2>
  	<span class="details">$1,899 for 7 nights</span>
  	<button class="book">Book Now</button>
	</li>
	<li class="europe tour">
  	<h2>Paris, France</h2>
  	<span class="details">$2,299 for 7 nights</span>
  	<button class="book">Book Now</button>
	</li>
	<li class="asia tour">
  	<h2>Tokyo, Japan</h2>
  	<span class="details">$3,799 for 7 nights</span>
  	<button class="book">Book Now</button>
	</li>
  </ul>
</div>
</html>

Challenge 33 (Fetching Data From the DOM I)
application.js 
$(document).ready(function() {
 $('button').on('click', function() {
   var message = $('<span>Call 1-555-jquery-air to book this tour</span>');
   var discount = $(this).closest('.tour').data('discount');
   $(this).closest('.tour').append(message);
   $(this).remove();
 });
});

index.html
<!DOCTYPE html> 
<div id="tours">
  <h1>Guided Tours</h1>
  <ul>
	<li class="usa tour" data-discount="299">
  	<h2>New York, New York</h2>
  	<span class="details">$1,899 for 7 nights</span>
  	<button class="book">Book Now</button>
	</li>
	<li class="europe tour" data-discount="176">
  	<h2>Paris, France</h2>
  	<span class="details">$2,299 for 7 nights</span>
  	<button class="book">Book Now</button>
	</li>
	<li class="asia tour" data-discount="349">
  	<h2>Tokyo, Japan</h2>
  	<span class="details">$3,799 for 7 nights</span>
  	<button class="book">Book Now</button>
	</li>
  </ul>
</div>
</html>

Challenge 34 (Fetching Data From the DOM 2)
application.js 
$(document).ready(function() {
 $('button').on('click', function() {
   var discount = $(this).closest('.tour').data('discount');
   var message = $('<span>Call 1-555-jquery-air for a $' + discount + ' discount.</span>');
   $(this).closest('.tour').append(message);
   $(this).remove();
 });
});

HTML
<div id="tours">
  <h1>Guided Tours</h1>
  <ul>
	<li class="usa tour" data-discount="299">
  	<h2>New York, New York</h2>
  	<span class="details">$1,899 for 7 nights</span>
  	<button class="book">Book Now</button>
	</li>
	<li class="europe tour" data-discount="176">
  	<h2>Paris, France</h2>
  	<span class="details">$2,299 for 7 nights</span>
  	<button class="book">Book Now</button>
	</li>
	<li class="asia tour" data-discount="349">
  	<h2>Tokyo, Japan</h2>
  	<span class="details">$3,799 for 7 nights</span>
  	<button class="book">Book Now</button>
	</li>
  </ul>
</div>

Challenge 35 (Refactoring)
application.js 
$(document).ready(function() {
 $('button').on('click', function() {
   var tour = $(this).closest('.tour');
   var discount = tour.data('discount');
   var message = $('<span>Call 1-555-jquery-air for a $' + discount + ' discount.</span>');
   tour.append(message);
   $(this).remove();
 });
});

HTML
<div id="tours">
  <h1>Guided Tours</h1>
  <ul>
	<li class="usa tour" data-discount="299">
  	<h2>New York, New York</h2>
  	<span class="details">$1,899 for 7 nights</span>
  	<button class="book">Book Now</button>
	</li>
	<li class="europe tour" data-discount="176">
  	<h2>Paris, France</h2>
  	<span class="details">$2,299 for 7 nights</span>
  	<button class="book">Book Now</button>
	</li>
	<li class="asia tour" data-discount="349">
  	<h2>Tokyo, Japan</h2>
  	<span class="details">$3,799 for 7 nights</span>
  	<button class="book">Book Now</button>
	</li>
  </ul>
</div>


Challenge 36 (Better on Handlers)
application.js 
$(document).ready(function() {
 $('.tour').on('click', 'button', function() {
   var tour = $(this).closest('.tour');
   var discount = tour.data('discount');
   var message = $('<span>Call 1-555-jquery-air for a $' + discount + ' discount.</span>');
   tour.append(message);
   $(this).remove();
 });
});

HTML
<div id="tours">
  <h1>Guided Tours</h1>
  <ul>
	<li class="usa tour" data-discount="299">
  	<h2>New York, New York</h2>
  	<span class="details">$1,899 for 7 nights</span>
  	<button class="book">Book Now</button>
	</li>
	<li class="europe tour" data-discount="176">
  	<h2>Paris, France</h2>
  	<span class="details">$2,299 for 7 nights</span>
  	<button class="book">Book Now</button>
	</li>
	<li class="asia tour" data-discount="349">
  	<h2>Tokyo, Japan</h2>
  	<span class="details">$3,799 for 7 nights</span>
  	<button class="book">Book Now</button>
	</li>
  </ul>
</div>

Challenge 37 (New Filter 1)
Application.js
$(document).ready(function() {
 $('#filters').on('click', '.on-sale', function() {

 });
});

HTML
<div id="all-tours">
  <h1>Guided Tours</h1>
  <ul>
	<li class="usa tour on-sale" data-discount="299">
  	<h2>New York, New York</h2>
  	<span class="details">$1,899 for 7 nights</span>
  	<button class="book">Book Now</button>
	</li>
	<li class="europe tour on-sale" data-discount="176">
  	<h2>Paris, France</h2>
  	<span class="details">$2,299 for 7 nights</span>
  	<button class="book">Book Now</button>
	</li>
	<li class="asia tour" data-discount="349">
  	<h2>Tokyo, Japan</h2>
  	<span class="details">$3,799 for 7 nights</span>
  	<button class="book">Book Now</button>
	</li>
  </ul>
  <ul id="filters">
	<li><button class="on-sale">On Sale</button></li>
  </ul>
</div>


Challenge 38 (New Filter 2)
Application.js
$(document).ready(function() {
 $('#filters').on('click', '.on-sale', function() {
   $('.tour').filter('.on-sale').addClass('highlight');
 });
});

HTML
<div id="all-tours">
  <h1>Guided Tours</h1>
  <ul>
	<li class="usa tour on-sale" data-discount="299">
  	<h2>New York, New York</h2>
  	<span class="details">$1,899 for 7 nights</span>
  	<button class="book">Book Now</button>
	</li>
	<li class="europe tour on-sale" data-discount="176">
  	<h2>Paris, France</h2>
  	<span class="details">$2,299 for 7 nights</span>
  	<button class="book">Book Now</button>
	</li>
	<li class="asia tour" data-discount="349">
  	<h2>Tokyo, Japan</h2>
  	<span class="details">$3,799 for 7 nights</span>
  	<button class="book">Book Now</button>
	</li>
  </ul>
  <ul id="filters">
	<li><button class="on-sale">On Sale</button></li>
  </ul>
</div>

Challenge 39 (New Filter 3)
Application.js
$(document).ready(function() {
 $('#filters').on('click', '.on-sale', function() {
   $('.highlight').removeClass('highlight');
   $('.tour').filter('.on-sale').addClass('highlight');
 });

 $('#filters').on('click', '.featured', function() {
   $('.highlight').removeClass('highlight');
   $('.tour').filter('.featured').addClass('highlight');
 });
});

HTML
<div id="all-tours">
  <h1>Guided Tours</h1>
  <ul>
	<li class="usa tour on-sale" data-discount="299">
  	<h2>New York, New York</h2>
  	<span class="details">$1,899 for 7 nights</span>
  	<button class="book">Book Now</button>
	</li>
	<li class="europe tour on-sale" data-discount="176">
  	<h2>Paris, France</h2>
  	<span class="details">$2,299 for 7 nights</span>
  	<button class="book">Book Now</button>
	</li>
	<li class="asia tour featured" data-discount="349">
  	<h2>Tokyo, Japan</h2>
  	<span class="details">$3,799 for 7 nights</span>
  	<button class="book">Book Now</button>
	</li>
  </ul>
  <ul id="filters">
	<li><button class="on-sale">On Sale</button></li>
	<li><button class="featured">Featured</button></li>
  </ul>
</div>

Challenge 40 (On Load 1)
Application.js
$(document).ready(function() {
 alert($('img').length);
});

HTML
<div id="tour">
  <h2>Paris, France Tour</h2>
  <p>$2,499 for 7 Nights</p>
  <button>See photos from our last tour</button>
  <ul class="photos">
	<li>
  	<img src="/assets/photos/paris1.jpg">
  	<span>Arc de Triomphe</span>
	</li>
	<li>
  	<img src="/assets/photos/paris2.jpg">
  	<span>The Eiffel Tower</span>
	</li>
	<li>
  	<img src="/assets/photos/paris3.jpg">
  	<span>Notre Dame de Paris</span>
	</li>
  </ul>
</div>

Challenge 41 (On Load 2)
Application.js
$(document).ready(function() {
 $('#tour').on('click', 'button', function() {
 });
});

HTML
<div id="tour">
  <h2>Paris, France Tour</h2>
  <p>$2,499 for 7 Nights</p>
  <button>See photos from our last tour</button>
  <ul class="photos">
	<li>
  	<img src="/assets/photos/paris1.jpg">
  	<span>Arc de Triomphe</span>
	</li>
	<li>
  	<img src="/assets/photos/paris2.jpg">
  	<span>The Eiffel Tower</span>
	</li>
	<li>
  	<img src="/assets/photos/paris3.jpg">
  	<span>Notre Dame de Paris</span>
	</li>
  </ul>
</div>

Challenge 42 (Side Effect 1)
Application.js
$(document).ready(function() {
 $('#tour').on('click', 'button', function() {
   $('.photos').slideDown();
 });
});

HTML
<div id="tour">
  <h2>Paris, France Tour</h2>
  <p>$2,499 for 7 Nights</p>
  <button>See photos from our last tour</button>
  <ul class="photos">
	<li>
  	<img src="/assets/photos/paris1.jpg">
  	<span>Arc de Triomphe</span>
	</li>
	<li>
  	<img src="/assets/photos/paris2.jpg">
  	<span>The Eiffel Tower</span>
	</li>
	<li>
  	<img src="/assets/photos/paris3.jpg">
  	<span>Notre Dame de Paris</span>
	</li>
  </ul>
</div>

Challenge 43 (Side Effect 2)
Application.js
$(document).ready(function() {
 $('#tour').on('click', 'button', function() {
   $('.photos').slideToggle();
 });
});

HTML
<div id="tour">
  <h2>Paris, France Tour</h2>
  <p>$2,499 for 7 Nights</p>
  <button>See photos from our last tour</button>
  <ul class="photos">
	<li>
  	<img src="/assets/photos/paris1.jpg">
  	<span>Arc de Triomphe</span>
	</li>
	<li>
  	<img src="/assets/photos/paris2.jpg">
  	<span>The Eiffel Tower</span>
	</li>
	<li>
  	<img src="/assets/photos/paris3.jpg">
  	<span>Notre Dame de Paris</span>
	</li>
  </ul>
</div>

Challenge 44 (Mouseover 1)
Application.js
$(document).ready(function() {
 $('#tour').on('click', 'button', function() {
   $('.photos').slideToggle();
 });
 $('.photos').on('mouseenter', 'li', function() {
 });
});

HTML
<div id="tour">
  <h2>Paris, France Tour</h2>
  <p>$2,499 for 7 Nights</p>
  <button>See photos from our last tour</button>
  <ul class="photos">
	<li>
  	<img src="/assets/photos/paris1.jpg">
  	<span>Arc de Triomphe</span>
	</li>
	<li>
  	<img src="/assets/photos/paris2.jpg">
  	<span>The Eiffel Tower</span>
	</li>
	<li>
  	<img src="/assets/photos/paris3.jpg">
  	<span>Notre Dame de Paris</span>
	</li>
  </ul>
</div>

Challenge 45 (Mouseover 2)
Application.js
$(document).ready(function() {
 $('#tour').on('click', 'button', function() {
   $('.photos').slideToggle();
 });
 $('.photos').on('mouseenter', 'li', function() {
   $(this).find('span').slideToggle();
 });
});

HTML
<div id="tour">
  <h2>Paris, France Tour</h2>
  <p>$2,499 for 7 Nights</p>
  <button>See photos from our last tour</button>
  <ul class="photos">
	<li>
  	<img src="/assets/photos/paris1.jpg">
  	<span>Arc de Triomphe</span>
	</li>
	<li>
  	<img src="/assets/photos/paris2.jpg">
  	<span>The Eiffel Tower</span>
	</li>
	<li>
  	<img src="/assets/photos/paris3.jpg">
  	<span>Notre Dame de Paris</span>
	</li>
  </ul>
</div>

Challenge 46 (Mouseleave)
Application.js
$(document).ready(function() {
 $('#tour').on('click', 'button', function() {
   $('.photos').slideToggle();
 });
 $('.photos').on('mouseenter', 'li', function() {
   $(this).find('span').slideToggle();
 });
 $('.photos').on('mouseleave', 'li', function() {
   $(this).find('span').slideToggle();
 });
});

HTML
<div id="tour">
  <h2>Paris, France Tour</h2>
  <p>$2,499 for 7 Nights</p>
  <button>See photos from our last tour</button>
  <ul class="photos">
	<li>
  	<img src="/assets/photos/paris1.jpg">
  	<span>Arc de Triomphe</span>
	</li>
	<li>
  	<img src="/assets/photos/paris2.jpg">
  	<span>The Eiffel Tower</span>
	</li>
	<li>
  	<img src="/assets/photos/paris3.jpg">
  	<span>Notre Dame de Paris</span>
	</li>
  </ul>
</div>
Challenge 47 (New Filter 1)
Application.js


HTML

Challenge 48 (Named Functions)
Application.js
$(document).ready(function() {
 $('#tour').on('click', 'button', function() {
   $('.photos').slideToggle();
 });

 function showPhotos() {
   $(this).find('span').slideToggle();
 }

 $('.photos').on('mouseenter', 'li', showPhotos);
 $('.photos').on('mouseleave', 'li', showPhotos);
});

HTML
<div id="tour">
  <h2>Paris, France Tour</h2>
  <p>$2,499 for 7 Nights</p>
  <button>See photos from our last tour</button>
  <ul class="photos">
	<li>
  	<img src="/assets/photos/paris1.jpg">
  	<span>Arc de Triomphe</span>
	</li>
	<li>
  	<img src="/assets/photos/paris2.jpg">
  	<span>The Eiffel Tower</span>
	</li>
	<li>
  	<img src="/assets/photos/paris3.jpg">
  	<span>Notre Dame de Paris</span>
	</li>
  </ul>
</div>


Challenge 49 (Keyup Event)
Application.js
$(document).ready(function() {
 $('#nights').on('keyup', function() {
 });
});

HTML
<div class="tour" data-daily-price="357">
  <h2>Paris, France Tour</h2>
  <p>$<span id="total">2,499</span> for <span id="nights-count">7</span> Nights</p>
  <p>
	<label for="nights">Number of Nights</label>
  </p>
  <p>
	<input id="nights" value="7" type="number">
  </p>
</div>

Challenge 50 (Keyup Event Handler 1)
Application.js
$(document).ready(function() {
 $('#nights').on('keyup', function() {
   $('#nights-count').text($(this).val());
 });
});

HTML
<div class="tour" data-daily-price="357">
  <h2>Paris, France Tour</h2>
  <p>$<span id="total">2,499</span> for <span id="nights-count">7</span> Nights</p>
  <p>
	<label for="nights">Number of Nights</label>
  </p>
  <p>
	<input id="nights" value="7" type="number">
  </p>
</div>





Challenge 51 (Keyup Event Handler 2)
Application.js
$(document).ready(function() {
 $('#nights').on('keyup', function() {
   var nights = +$(this).val();
   var dailyPrice = +$(this).closest('.tour').data('daily-price');
   $('#total').text(nights * dailyPrice);
   $('#nights-count').text($(this).val());
 });
});

HTML
<div class="tour" data-daily-price="357">
  <h2>Paris, France Tour</h2>
  <p>$<span id="total">2,499</span> for <span id="nights-count">7</span> Nights</p>
  <p>
	<label for="nights">Number of Nights</label>
  </p>
  <p>
	<input id="nights" value="7" type="number">
  </p>
</div>

Challenge 52 (Another Event Handler)
Application.js
$(document).ready(function() {
 $('#nights').on('keyup', function() {
   var nights = +$(this).val();
   var dailyPrice = +$(this).closest('.tour').data('daily-price');
   $('#total').text(nights * dailyPrice);
   $('#nights-count').text($(this).val());
 });
 $('#nights').on('focus', function() {
   $('#nights').val(7);
 });
});

HTML
<div class="tour" data-daily-price="357">
  <h2>Paris, France Tour</h2>
  <p>$<span id="total">2,499</span> for <span id="nights-count">7</span> Nights</p>
  <p>
	<label for="nights">Number of Nights</label>
  </p>
  <p>
	<input id="nights" value="7" type="number">
  </p>
</div>

Challenge 53 (Link Events 1)
Application.js
$(document).ready(function() {
 $('.see-photos').on('click', function() {
 });
});

HTML
<div id="all-tours" class="links">
  <h1>Guided Tours</h1>
  <ul>
	<li class="tour usa" data-discount="199">
  	<h2>New York, New York</h2>
  	<span class="details">$1,899 for 7 nights</span>
  	<button class="book">Book Now</button>
  	<a href="#" class="see-photos">See Photos</a>
  	<ul class="photos">
    	<li>
      	<img src="/assets/photos/paris1.jpg">
      	<span>Arc de Triomphe</span>
    	</li>
    	<li>
      	<img src="/assets/photos/paris2.jpg">
      	<span>The Eiffel Tower</span>
    	</li>
    	<li>
      	<img src="/assets/photos/paris3.jpg">
      	<span>Notre Dame de Paris</span>
    	</li>
  	</ul>
	</li>
	<li class="tour france" data-discount="99">
  	<h2>Paris, France</h2>
  	<span class="details">$1,499 for 5 nights</span>
  	<button class="book">Book Now</button>
  	<a href="#" class="see-photos">See Photos</a>
  	<ul class="photos">
    	<li>
      	<img src="/assets/photos/paris1.jpg">
      	<span>Arc de Triomphe</span>
    	</li>
    	<li>
      	<img src="/assets/photos/paris2.jpg">
      	<span>The Eiffel Tower</span>
    	</li>
    	<li>
      	<img src="/assets/photos/paris3.jpg">
      	<span>Notre Dame de Paris</span>
    	</li>
  	</ul>
	</li>
	<li class="tour uk" data-discount="149">
  	<h2>London, UK</h2>
  	<span class="details">$2,199 for 5 nights</span>
  	<button class="book">Book Now</button>
  	<a href="#" class="see-photos">See Photos</a>
  	<ul class="photos">
    	<li>
      	<img src="/assets/photos/paris1.jpg">
      	<span>Arc de Triomphe</span>
    	</li>
    	<li>
      	<img src="/assets/photos/paris2.jpg">
      	<span>The Eiffel Tower</span>
    	</li>
    	<li>
      	<img src="/assets/photos/paris3.jpg">
      	<span>Notre Dame de Paris</span>
    	</li>
  	</ul>
	</li>
  </ul>
</div>

Challenge 54 (Link Events 2)
Application.js
$(document).ready(function() {
 $('.see-photos').on('click', function() {
   $(this).closest('.tour').find('.photos').slideToggle();
 });
});

HTML
<div id="all-tours" class="links">
  <h1>Guided Tours</h1>
  <ul>
	<li class="tour usa" data-discount="199">
  	<h2>New York, New York</h2>
  	<span class="details">$1,899 for 7 nights</span>
  	<button class="book">Book Now</button>
  	<a href="#" class="see-photos">See Photos</a>
  	<ul class="photos">
    	<li>
      	<img src="/assets/photos/paris1.jpg">
      	<span>Arc de Triomphe</span>
    	</li>
    	<li>
      	<img src="/assets/photos/paris2.jpg">
      	<span>The Eiffel Tower</span>
    	</li>
    	<li>
      	<img src="/assets/photos/paris3.jpg">
      	<span>Notre Dame de Paris</span>
    	</li>
  	</ul>
	</li>
	<li class="tour france" data-discount="99">
  	<h2>Paris, France</h2>
  	<span class="details">$1,499 for 5 nights</span>
  	<button class="book">Book Now</button>
  	<a href="#" class="see-photos">See Photos</a>
  	<ul class="photos">
    	<li>
      	<img src="/assets/photos/paris1.jpg">
      	<span>Arc de Triomphe</span>
    	</li>
    	<li>
      	<img src="/assets/photos/paris2.jpg">
      	<span>The Eiffel Tower</span>
    	</li>
    	<li>
      	<img src="/assets/photos/paris3.jpg">
      	<span>Notre Dame de Paris</span>
    	</li>
  	</ul>
	</li>
	<li class="tour uk" data-discount="149">
  	<h2>London, UK</h2>
  	<span class="details">$2,199 for 5 nights</span>
  	<button class="book">Book Now</button>
  	<a href="#" class="see-photos">See Photos</a>
  	<ul class="photos">
    	<li>
      	<img src="/assets/photos/paris1.jpg">
      	<span>Arc de Triomphe</span>
    	</li>
    	<li>
      	<img src="/assets/photos/paris2.jpg">
      	<span>The Eiffel Tower</span>
    	</li>
    	<li>
      	<img src="/assets/photos/paris3.jpg">
      	<span>Notre Dame de Paris</span>
    	</li>
  	</ul>
	</li>
  </ul>

Challenge 54 (Event Parameter 1)
Application.js
$(document).ready(function() {
 $('.see-photos').on('click', function(event) {
   event.stopPropagation();
   $(this).closest('.tour').find('.photos').slideToggle();
 });
 $('.tour').on('click', function() {
   alert('This event handler should not be called.');
 });
});

HTML
<div id="all-tours" class="links">
  <h1>Guided Tours</h1>
  <ul>
	<li class="tour usa" data-discount="199">
  	<h2>New York, New York</h2>
  	<span class="details">$1,899 for 7 nights</span>
  	<button class="book">Book Now</button>
  	<a href="#" class="see-photos">See Photos</a>
  	<ul class="photos">
    	<li>
      	<img src="/assets/photos/paris1.jpg">
      	<span>Arc de Triomphe</span>
    	</li>
    	<li>
      	<img src="/assets/photos/paris2.jpg">
      	<span>The Eiffel Tower</span>
    	</li>
    	<li>
      	<img src="/assets/photos/paris3.jpg">
      	<span>Notre Dame de Paris</span>
    	</li>
  	</ul>
	</li>
	<li class="tour france" data-discount="99">
  	<h2>Paris, France</h2>
  	<span class="details">$1,499 for 5 nights</span>
  	<button class="book">Book Now</button>
  	<a href="#" class="see-photos">See Photos</a>
  	<ul class="photos">
    	<li>
      	<img src="/assets/photos/paris1.jpg">
      	<span>Arc de Triomphe</span>
    	</li>
    	<li>
      	<img src="/assets/photos/paris2.jpg">
      	<span>The Eiffel Tower</span>
    	</li>
    	<li>
      	<img src="/assets/photos/paris3.jpg">
      	<span>Notre Dame de Paris</span>
    	</li>
  	</ul>
	</li>
	<li class="tour uk" data-discount="149">
  	<h2>London, UK</h2>
  	<span class="details">$2,199 for 5 nights</span>
  	<button class="book">Book Now</button>
  	<a href="#" class="see-photos">See Photos</a>
  	<ul class="photos">
    	<li>
      	<img src="/assets/photos/paris1.jpg">
      	<span>Arc de Triomphe</span>
    	</li>
    	<li>
      	<img src="/assets/photos/paris2.jpg">
      	<span>The Eiffel Tower</span>
    	</li>
    	<li>
      	<img src="/assets/photos/paris3.jpg">
      	<span>Notre Dame de Paris</span>
    	</li>
  	</ul>
	</li>
  </ul>
</div>

Challenge 55 (Event Parameter 2)
Application.js
$(document).ready(function() {
 $('.see-photos').on('click', function(event) {
   event.stopPropagation();
   event.preventDefault();
   $(this).closest('.tour').find('.photos').slideToggle();
 });
 $('.tour').on('click', function() {
   alert('This event handler should not be called.');
 });
});

HTML
<div id="all-tours" class="links">
  <h1>Guided Tours</h1>
  <ul>
	<li class="tour usa" data-discount="199">
  	<h2>New York, New York</h2>
  	<span class="details">$1,899 for 7 nights</span>
  	<button class="book">Book Now</button>
  	<a href="#" class="see-photos">See Photos</a>
  	<ul class="photos">
    	<li>
      	<img src="/assets/photos/paris1.jpg">
      	<span>Arc de Triomphe</span>
    	</li>
    	<li>
      	<img src="/assets/photos/paris2.jpg">
      	<span>The Eiffel Tower</span>
    	</li>
    	<li>
      	<img src="/assets/photos/paris3.jpg">
      	<span>Notre Dame de Paris</span>
    	</li>
  	</ul>
	</li>
	<li class="tour france" data-discount="99">
  	<h2>Paris, France</h2>
  	<span class="details">$1,499 for 5 nights</span>
  	<button class="book">Book Now</button>
  	<a href="#" class="see-photos">See Photos</a>
  	<ul class="photos">
    	<li>
      	<img src="/assets/photos/paris1.jpg">
      	<span>Arc de Triomphe</span>
    	</li>
    	<li>
      	<img src="/assets/photos/paris2.jpg">
      	<span>The Eiffel Tower</span>
    	</li>
    	<li>
      	<img src="/assets/photos/paris3.jpg">
      	<span>Notre Dame de Paris</span>
    	</li>
  	</ul>
	</li>
	<li class="tour uk" data-discount="149">
  	<h2>London, UK</h2>
  	<span class="details">$2,199 for 5 nights</span>
  	<button class="book">Book Now</button>
  	<a href="#" class="see-photos">See Photos</a>
  	<ul class="photos">
    	<li>
      	<img src="/assets/photos/paris1.jpg">
      	<span>Arc de Triomphe</span>
    	</li>
    	<li>
      	<img src="/assets/photos/paris2.jpg">
      	<span>The Eiffel Tower</span>
    	</li>
    	<li>
      	<img src="/assets/photos/paris3.jpg">
      	<span>Notre Dame de Paris</span>
    	</li>
  	</ul>
	</li>
  </ul>
</div>

Challenge 56 (CSS 1)
Application.js
$(document).ready(function() {
 $('.tour').on('mouseenter', function() {
   $(this).css({'background-color': '#252b30'});
 });
});

HTML
<div id="all-tours">
  <h1>Guided Tours</h1>
  <ul>
	<li class="tour usa">
  	<h2>New York, New York</h2>
  	<span class="details">$1,899 for 7 nights</span>
  	<span class="per-night"><span class="price">$275</span>/night</span>
  	<button class="book">Book Now</button>
  	<ul class="photos">
    	<li>
      	<img src="/assets/photos/newyork1.jpg">
      	<span>Notre Dame de Paris</span>
    	</li>
  	</ul>
	</li>
	<li class="tour france" data-discount="99">
  	<h2>Paris, France</h2>
  	<span class="details">$1,499 for 5 nights</span>
  	<span class="per-night"><span class="price">$300</span>/night</span>
  	<button class="book">Book Now</button>
  	<ul class="photos">
    	<li>
      	<img src="/assets/photos/paris3.jpg">
      	<span>Brooklyn Bridge</span>
    	</li>
  	</ul>
	</li>
	<li class="tour uk" data-discount="149">
  	<h2>London, UK</h2>
  	<span class="details">$2,199 for 5 nights</span>
  	<span class="per-night"><span class="price">$440</span>/night</span>
  	<button class="book">Book Now</button>
  	<ul class="photos">
    	<li>
      	<img src="/assets/photos/london.jpg">
      	<span>Tower of London</span>
    	</li>
  	</ul>
	</li>
  </ul>
</div>

Challenge 57 (CSS 2)
Application.js
$(document).ready(function() {
 $('.tour').on('mouseenter', function() {
   $(this).css({'background-color': '#252b30', 'font-weight': 'bold'});
 });
});

HTML
<div id="all-tours">
  <h1>Guided Tours</h1>
  <ul>
	<li class="tour usa">
  	<h2>New York, New York</h2>
  	<span class="details">$1,899 for 7 nights</span>
  	<span class="per-night"><span class="price">$275</span>/night</span>
  	<button class="book">Book Now</button>
  	<ul class="photos">
    	<li>
      	<img src="/assets/photos/newyork1.jpg">
      	<span>Notre Dame de Paris</span>
    	</li>
  	</ul>
	</li>
	<li class="tour france" data-discount="99">
  	<h2>Paris, France</h2>
  	<span class="details">$1,499 for 5 nights</span>
  	<span class="per-night"><span class="price">$300</span>/night</span>
  	<button class="book">Book Now</button>
  	<ul class="photos">
    	<li>
      	<img src="/assets/photos/paris3.jpg">
      	<span>Brooklyn Bridge</span>
    	</li>
  	</ul>
	</li>
	<li class="tour uk" data-discount="149">
  	<h2>London, UK</h2>
  	<span class="details">$2,199 for 5 nights</span>
  	<span class="per-night"><span class="price">$440</span>/night</span>
  	<button class="book">Book Now</button>
  	<ul class="photos">
    	<li>
      	<img src="/assets/photos/london.jpg">
      	<span>Tower of London</span>
    	</li>
  	</ul>
	</li>
  </ul>
</div>

Challenge 58 (Show Photo)
Application.js
$(document).ready(function() {
 $('.tour').on('mouseenter', function() {
   $(this).css({'background-color': '#252b30', 'font-weight': 'bold'});
   $(this).find('.photos').show();
 });
});

HTML
<div id="all-tours">
  <h1>Guided Tours</h1>
  <ul>
	<li class="tour usa">
  	<h2>New York, New York</h2>
  	<span class="details">$1,899 for 7 nights</span>
  	<span class="per-night"><span class="price">$275</span>/night</span>
  	<button class="book">Book Now</button>
  	<ul class="photos">
    	<li>
      	<img src="/assets/photos/newyork1.jpg">
      	<span>Notre Dame de Paris</span>
    	</li>
  	</ul>
	</li>
	<li class="tour france" data-discount="99">
  	<h2>Paris, France</h2>
  	<span class="details">$1,499 for 5 nights</span>
  	<span class="per-night"><span class="price">$300</span>/night</span>
  	<button class="book">Book Now</button>
  	<ul class="photos">
    	<li>
      	<img src="/assets/photos/paris3.jpg">
      	<span>Brooklyn Bridge</span>
    	</li>
  	</ul>
	</li>
	<li class="tour uk" data-discount="149">
  	<h2>London, UK</h2>
  	<span class="details">$2,199 for 5 nights</span>
  	<span class="per-night"><span class="price">$440</span>/night</span>
  	<button class="book">Book Now</button>
  	<ul class="photos">
    	<li>
      	<img src="/assets/photos/london.jpg">
      	<span>Tower of London</span>
    	</li>
  	</ul>
	</li>
  </ul>
</div>

Challenge 59 (Refactoring CSS)
Application.js
$(document).ready(function() {
 $('.tour').on('mouseenter', function() {
   $(this).addClass('highlight');
   $(this).find('.photos').show();
 });
 $('.tour').on('mouseleave', function() {
   $(this).removeClass('highlight');
 });
});

HTML
<div id="all-tours">
  <h1>Guided Tours</h1>
  <ul>
	<li class="tour usa">
  	<h2>New York, New York</h2>
  	<span class="details">$1,899 for 7 nights</span>
  	<span class="per-night"><span class="price">$275</span>/night</span>
  	<button class="book">Book Now</button>
  	<ul class="photos">
    	<li>
      	<img src="/assets/photos/newyork1.jpg">
      	<span>Notre Dame de Paris</span>
    	</li>
  	</ul>
	</li>
	<li class="tour france" data-discount="99">
  	<h2>Paris, France</h2>
  	<span class="details">$1,499 for 5 nights</span>
  	<span class="per-night"><span class="price">$300</span>/night</span>
  	<button class="book">Book Now</button>
  	<ul class="photos">
    	<li>
      	<img src="/assets/photos/paris3.jpg">
      	<span>Brooklyn Bridge</span>
    	</li>
  	</ul>
	</li>
	<li class="tour uk" data-discount="149">
  	<h2>London, UK</h2>
  	<span class="details">$2,199 for 5 nights</span>
  	<span class="per-night"><span class="price">$440</span>/night</span>
  	<button class="book">Book Now</button>
  	<ul class="photos">
    	<li>
      	<img src="/assets/photos/london.jpg">
      	<span>Tower of London</span>
    	</li>
  	</ul>
	</li>
  </ul>
</div>

Challenge 60 (Animate 1)
Application.js
$(document).ready(function() {
 $('.tour').on('mouseenter', function() {
   $(this).addClass('highlight');
   $(this).find('.per-night').animate({'opacity': '1'});
 });
 $('.tour').on('mouseleave', function() {
   $(this).removeClass('highlight');
 });
});

HTML
<div id="all-tours">
  <h1>Guided Tours</h1>
  <ul>
	<li class="tour usa">
  	<h2>New York, New York</h2>
  	<span class="details">$1,899 for 7 nights</span>
  	<span class="per-night"><span class="price">$275</span>/night</span>
  	<button class="book">Book Now</button>
  	<ul class="photos">
    	<li>
      	<img src="/assets/photos/newyork1.jpg">
      	<span>Notre Dame de Paris</span>
    	</li>
  	</ul>
	</li>
	<li class="tour france" data-discount="99">
  	<h2>Paris, France</h2>
  	<span class="details">$1,499 for 5 nights</span>
  	<span class="per-night"><span class="price">$300</span>/night</span>
  	<button class="book">Book Now</button>
  	<ul class="photos">
    	<li>
      	<img src="/assets/photos/paris3.jpg">
      	<span>Brooklyn Bridge</span>
    	</li>
  	</ul>
	</li>
	<li class="tour uk" data-discount="149">
  	<h2>London, UK</h2>
  	<span class="details">$2,199 for 5 nights</span>
  	<span class="per-night"><span class="price">$440</span>/night</span>
  	<button class="book">Book Now</button>
  	<ul class="photos">
    	<li>
      	<img src="/assets/photos/london.jpg">
      	<span>Tower of London</span>
    	</li>
  	</ul>
	</li>
  </ul>
</div>

Challenge 61 (Animate 2)
Application.js
$(document).ready(function() {
 $('.tour').on('mouseenter', function() {
   $(this).addClass('highlight');
   $(this).find('.per-night').animate({'top': '-14px', 'opacity': '1'});
 });
 $('.tour').on('mouseleave', function() {
   $(this).removeClass('highlight');
 });
});

HTML
<div id="all-tours">
  <h1>Guided Tours</h1>
  <ul>
	<li class="tour usa">
  	<h2>New York, New York</h2>
  	<span class="details">$1,899 for 7 nights</span>
  	<span class="per-night"><span class="price">$275</span>/night</span>
  	<button class="book">Book Now</button>
  	<ul class="photos">
    	<li>
      	<img src="/assets/photos/newyork1.jpg">
      	<span>Notre Dame de Paris</span>
    	</li>
  	</ul>
	</li>
	<li class="tour france" data-discount="99">
  	<h2>Paris, France</h2>
  	<span class="details">$1,499 for 5 nights</span>
  	<span class="per-night"><span class="price">$300</span>/night</span>
  	<button class="book">Book Now</button>
  	<ul class="photos">
    	<li>
      	<img src="/assets/photos/paris3.jpg">
      	<span>Brooklyn Bridge</span>
    	</li>
  	</ul>
	</li>
	<li class="tour uk" data-discount="149">
  	<h2>London, UK</h2>
  	<span class="details">$2,199 for 5 nights</span>
  	<span class="per-night"><span class="price">$440</span>/night</span>
  	<button class="book">Book Now</button>
  	<ul class="photos">
    	<li>
      	<img src="/assets/photos/london.jpg">
      	<span>Tower of London</span>
    	</li>
  	</ul>
	</li>
  </ul>
</div>

Challenge 62 (Animation Speed)
Application.js
$(document).ready(function() {
 $('.tour').on('mouseenter', function() {
   $(this).addClass('highlight');
   $(this).find('.per-night').animate({'top': '-14px', 'opacity': '1'}, 'fast');
 });
 $('.tour').on('mouseleave', function() {
   $(this).removeClass('highlight');
 });
});


HTML
<div id="all-tours">
  <h1>Guided Tours</h1>
  <ul>
	<li class="tour usa">
  	<h2>New York, New York</h2>
  	<span class="details">$1,899 for 7 nights</span>
  	<span class="per-night"><span class="price">$275</span>/night</span>
  	<button class="book">Book Now</button>
  	<ul class="photos">
    	<li>
      	<img src="/assets/photos/newyork1.jpg">
      	<span>Notre Dame de Paris</span>
    	</li>
  	</ul>
	</li>
	<li class="tour france" data-discount="99">
  	<h2>Paris, France</h2>
  	<span class="details">$1,499 for 5 nights</span>
  	<span class="per-night"><span class="price">$300</span>/night</span>
  	<button class="book">Book Now</button>
  	<ul class="photos">
    	<li>
      	<img src="/assets/photos/paris3.jpg">
      	<span>Brooklyn Bridge</span>
    	</li>
  	</ul>
	</li>
	<li class="tour uk" data-discount="149">
  	<h2>London, UK</h2>
  	<span class="details">$2,199 for 5 nights</span>
  	<span class="per-night"><span class="price">$440</span>/night</span>
  	<button class="book">Book Now</button>
  	<ul class="photos">
    	<li>
      	<img src="/assets/photos/london.jpg">
      	<span>Tower of London</span>
    	</li>
  	</ul>
	</li>
  </ul>
</div>

Challenge 63 (Animate 3)
Application.js
$(document).ready(function() {
 $('.tour').on('mouseenter', function() {
   $(this).addClass('highlight');
   $(this).find('.per-night').animate({'top': '-14px', 'opacity': '1'}, 'fast');
 });
 $('.tour').on('mouseleave', function() {
   $(this).removeClass('highlight');
   $(this).find('.per-night').animate({'top': '0px', 'opacity': '0'}, 'fast');
 });
});

HTML
<div id="all-tours">
  <h1>Guided Tours</h1>
  <ul>
	<li class="tour usa">
  	<h2>New York, New York</h2>
  	<span class="details">$1,899 for 7 nights</span>
  	<span class="per-night"><span class="price">$275</span>/night</span>
  	<button class="book">Book Now</button>
  	<ul class="photos">
    	<li>
      	<img src="/assets/photos/newyork1.jpg">
      	<span>Notre Dame de Paris</span>
    	</li>
  	</ul>
	</li>
	<li class="tour france" data-discount="99">
  	<h2>Paris, France</h2>
  	<span class="details">$1,499 for 5 nights</span>
  	<span class="per-night"><span class="price">$300</span>/night</span>
  	<button class="book">Book Now</button>
  	<ul class="photos">
    	<li>
      	<img src="/assets/photos/paris3.jpg">
      	<span>Brooklyn Bridge</span>
    	</li>
  	</ul>
	</li>
	<li class="tour uk" data-discount="149">
  	<h2>London, UK</h2>
  	<span class="details">$2,199 for 5 nights</span>
  	<span class="per-night"><span class="price">$440</span>/night</span>
  	<button class="book">Book Now</button>
  	<ul class="photos">
    	<li>
      	<img src="/assets/photos/london.jpg">
      	<span>Tower of London</span>
    	</li>
  	</ul>
	</li>
  </ul>
</div>
