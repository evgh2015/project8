// alert( 'Привет, мир!' );
$('form').submit(function(e) {
  e.preventDefault();
  $.ajax({
    type: "POST",
    url: "mailer/smart.php",
    data:$(this).serialize()
  }).done(function() {
    $(this).find("input").val("");
    $('form').trigger('reset');
  });
  return false;
});

const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu');
        closElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closElem.addEventListener('click', () => {
    menu.classList.remove('active');
});