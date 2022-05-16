function addAlert(msg, delay, feel) {
  $(".alert-modal").append(
    '<div class="overlay-modal non-animate "><div class="alert ' +
      feel +
      '"><i class="icon-nofication fas fa-bell feel"></i><span>' +
      msg +
      '</span><i class="fas fa-times icon-delete"></i></div></div>'
  );
  $(".non-animate").animate({ left: "0" });
  $(".non-animate")
    .removeClass("non-animate")
    .delay(delay)
    .fadeOut(function () {
      $(this).remove();
    });
  if ($(".alert-modal .alert").length > 6) {
    $(".alert-modal .alert").eq(0).remove();
  }
}
$(document).on("click", ".alert-modal .alert", function () {
  $(this).stop(false, true);
});
$(document).ready(function () {
  var topMenu = $(".navbar-nav"),
    topMenuHeight = topMenu.outerHeight() + 120,
    menuItems = topMenu.find("a"),
    scrollItems = menuItems.map(function () {
      var item = $($(this).attr("href"));
      if (item.length) {
        return item;
      }
    });
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
  $(".navbar-toggler").click(function () {
    $(".overlay").addClass("show-overlay");
  });
  $(".overlay").click(function () {
    $(".overlay").removeClass("show-overlay");
    $(".menu__mb").removeClass("show");
  });
  // Bind to scroll
  $(window).scroll(function () {
    // Get container scroll position
    var fromTop = $(this).scrollTop() + topMenuHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function () {
      if ($(this).offset().top < fromTop) return this;
    });
    // Get the id of the current element
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";
    // Set/remove active class
    menuItems
      .removeClass("active")
      .filter("[href='#" + id + "']")
      .addClass("active");
  });
  var $owl = $("#service__slide");

  $owl.children().each(function (index) {
    $(this).attr("data-position", index); // NB: .attr() instead of .data()
  });

  $owl.owlCarousel({
    center: true,
    loop: true,
    items: 3,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        margin: 50,
        stagePadding: 30,
      },
      350: {
        items: 1,
        margin: 50,
        stagePadding: 80,
      },
      576: {
        items: 1,
        margin: 80,
        stagePadding: 150,
      },
      768: {
        items: 1,
        margin: 150,
        stagePadding: 250,
      },
      900: {
        items: 1,
        margin: 200,
        stagePadding: 300,
      },
      1024:{
        margin: 100,
        stagePadding: 0,
      },
      1200: {
        margin: 80,
        stagePadding: 150,
      },
      1400: {
        margin: 100,
        stagePadding: 200,
      },
      1600: {
        margin: 130,
        stagePadding: 230,
      },
      1920: {
        margin: 180,
        stagePadding: 300,
      },
    },
  });
  $(document).on("click", ".owl-item>.click__item", function () {
    var $speed = 300; // in ms
    $owl.trigger("to.owl.carousel", [$(this).data("position"), $speed]);
  });
  var $owl2 = $("#team__slide");

  $owl2.children().each(function (index) {
    $(this).attr("data-position", index);
  });

  $owl2.owlCarousel({
    center: true,
    loop: true,
    items: 3,
    nav: false,
    dots: false,
    //default settings:
    // autoplay: true,
    // autoplayTimeout: 2000,
    // autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        margin: 50,
        stagePadding: 30,
      },
      350: {
        items: 1,
        margin: 80,
        stagePadding: 50,
      },
      500: {
        items: 1,
        margin: 80,
        stagePadding: 150,
      },
      700: {
        items: 1,
        margin: 100,
        stagePadding: 200,
      },
      800:{
        items: 1,
        margin: 130,
        stagePadding: 250
      },
      900: {
        items: 1,
        margin: 200,
        stagePadding: 300,
      },
      1024:{
        margin: 100,
        stagePadding: 0,
      },
      1200: {
        margin: 80,
        stagePadding: 150,
      },
      1400: {
        margin: 100,
        stagePadding: 200,
      },
      1600: {
        margin: 130,
        stagePadding: 230,
      },
      1920: {
        margin: 200,
        stagePadding: 300,
      },
    },
  });

  $(document).on("click", ".owl-item>.team__item", function (e) {
    e.preventDefault();
    e.stopPropagation();
    var $speed = 300; // in ms
    $owl2.trigger("to.owl.carousel", [$(this).data("position"), $speed]);
  });
  $(".submit").click(function () {
    const name = $("#inputName").val();
    const phone = $("#inputPhone").val();
    const email = $("#inputEmail").val();
    const des = $("#textareaDes").val();
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regexPhone = /((09|03|07|08|05|19)+([0-9]{8})\b)/g;
    console.log(email)
    if (
      name == "" &&
      !regexEmail.test(email) &&
      !regexPhone.test(phone) &&
      des == ""
    ) {
      addAlert("Vui lòng nhập đầy đủ thông tin", 2000, "error");
    } else if (name == "") {
      addAlert("Vui lòng nhập tên", 1000, "warning");
    } else if (!regexPhone.test(phone)) {
      addAlert("Số điện thoại không hợp lệ!", 1000, "warning");
    } else if (!regexEmail.test(email)) {
      addAlert("Email không hợp lệ!", 1000, "warning");
    } else if (des == "") {
      addAlert("Vui lòng nhập nội dung", 1000, "warning");
    } else {
      addAlert(
        "Cảm ơn bạn đã liên hệ, chúng tôi sẽ phản hồi sớm nhất có thể!",
        2000,
        "success"
      );
    }
  });
  $(".register-mail").click(function (e) {
    e.preventDefault();
    const emailfooter = $("#inputEmailFooter").val();
    const checkEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      console.log(emailfooter);
    if(emailfooter == ""){
      addAlert("Vui lòng nhập email !", 2000, "error")
    } else if (!checkEmail.test(emailfooter)) {
      addAlert("Email không hợp lệ!", 1000, "warning");
    } else {
      addAlert("Cảm ơn bạn đã quan tâm tới VTCode! ", 2000, "success");
    }
  });
  $(".item__product .product__item a img").click(function (e) {
    e.preventDefault();
    $(this).parent("a").parent(".product__item").addClass("flip");
    $(this)
      .parent("a")
      .siblings(".backgroud__behind")
      .addClass("show_background");
  });
  $(".backgroud__behind").click(function (e) {
    e.preventDefault();
    $(this).parent(".product__item").removeClass("flip");
    $(this).removeClass("show_background");
  });
});