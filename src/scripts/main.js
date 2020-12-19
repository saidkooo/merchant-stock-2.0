let opened = false;


function displaySuccessModal() {
    if (opened == false) {
        $('.success-modal').addClass('open');
        $('body').css("overflow", "hidden");
        opened=true
    }
    else {
        $('.success-modal').removeClass('open');
        opened=false
    }
}
function closeSuccessModal() {
    if (opened == true) {
         $('.success-modal').removeClass('open')
         $('body').css("overflow-y: scroll")
         opened=false
    }
}

function displayErrorModal() {
    if (opened == false) {
        $('.error-modal').addClass('open');
        $('body').css("overflow", "hidden");
        opened=true
    }
    else {
        $('.error-modal').removeClass('open');
        opened=false
    }
}
function closeErrorModal() {
    if (opened == true) {
         $('.error-modal').removeClass('open');
         $('body').css("overflow-y", "scroll");
         opened=false
    }
}

function openMenu() {
    if(opened == false) {
        document.querySelector("body").style.cssText="overflow: hidden";
        document.querySelector("#mobile-menu").classList.add("open");
        document.querySelector(".header__menu__mobile__button").classList.add("open");
        opened = true;
    }
    else {
        document.querySelector("body").style.cssText="overflow-y: scroll";
        document.querySelector("#mobile-menu").classList.remove("open");
        document.querySelector(".header__menu__mobile__button").classList.remove("open");
        opened = false;
    }
}
function closeMenu() {
    if(opened == true) {
        document.querySelector("body").style.cssText="overflow-y: scroll";
        document.querySelector("#mobile-menu").classList.remove("open");
        document.querySelector(".header__menu__mobile__button").classList.remove("open");
        opened = false;
    }
}
$(document).ready(function(){
    $("body").on('click', '[href*="#"]', function(e){
        var fixed_offset = 100;
        $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
        e.preventDefault();
      });
    $('.products__gallery').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    draggable: true,
                    fade: false,
                    arrows: true,
                }
            }
        ],
    });
    $('.products__gallery-mini').slick({
        slidesToShow: 5,
        infinite: false,
        draggable: false,
        
        asNavFor: '.products__gallery',
        focusOnSelect: true,
    });
});

$(document).ready(function(){
    $('#send').click(function(){
        // собираем данные с формы
        let user_name    = $('#name').val();
        let user_email   = $('#email').val();
        //let user_tel   = $('#tel').val();
        let text_comment = $('#message').val();
        // отправляем данные
        $.ajax({
            url: "contact.php",
            type: "post",
            data: {
                "name":    user_name,
                "email":   user_email,
                //"phone": user_tel,
                "message": text_comment
            },
            error:function(){$("#erconts").html("Произошла ошибка!"); displayErrorModal();},
            success: function (result) {
                /* В случае удачной обработки и отправки выполнится следующий код*/
                $('#name').val('');
                // $('#tel-desktop').val('');
                $('#email').val('');
                $('#message').val('');
                displaySuccessModal();
            }
        });
    });
});