function addAlert(msg, delay, feel) {
  $(".alert-modal").append(
    '<div class="overlay-modal non-animate "><div class="alert ' +
      feel +
      '"><i class="icon-nofication fas fa-bell feel"></i><span>' +
      msg +
      '</span></div></div>'
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
(function ($, window) {
  $("[data-toggle]").on("click", function (event) {
    event.preventDefault();
    var target = $(this.hash);
    target.toggle();
  });

  // Cache selectors
  var lastId,
    topMenu = $(".navbar-nav"),
    topMenuHeight = topMenu.outerHeight() + 30,
    // All list items
    menuItems = topMenu.find(".nav-link"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function () {
      var item = $(this).attr("href");
      if (item != "#") {
        return $(item);
      }
    });

  console.log(scrollItems);

  // Bind click handler to menu items
  // so we can get a fancy scroll animation
  menuItems.click(function (e) {
    var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
    $("html, body").stop().animate(
      {
        scrollTop: offsetTop,
      },
      300
    );
  });
  $(".banner__text a").click(function (e) {
    var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
    $("html, body").stop().animate(
      {
        scrollTop: offsetTop,
      },
      300
    );
  });
  // Bind to scroll
  $(window).scroll(function () {
    // Get container scroll position
    var fromTop = $(this).scrollTop() + topMenuHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function () {
      if ($(this).offset().top < fromTop)
        // console.log(this)
        return this;
    });
    // Get the id of the current element
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
      lastId = id;
      // Set/remove active class
      menuItems
        .removeClass("active")
        .filter("[href='#" + id + "']")
        .addClass("active");
    }
  });
})($, window);
$(document).on("click", ".alert-modal .alert", function () {
  $(this).stop(false, true);
});
$(document).ready(function () {
  $(".navbar-toggler").click(function () {
    $(".overlay").addClass("show-overlay");
  });
  $(".overlay").click(function () {
    $(".overlay").removeClass("show-overlay");
    $(".menu__mb").removeClass("show");
  });
  $(".submit").click(function () {
    const name = $("#inputName").val();
    const phone = $("#inputPhone").val();
    const email = $("#inputEmail").val();
    const des = $("#textareaDes").val();
    let regexEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const regexPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
    const regexName = /[a-zA-Z]{1,}/;
    if (
      name == "" &&
      !regexEmail.test(email) &&
      !regexPhone.test(phone) &&
      des == ""
    ) {
      addAlert("Vui l??ng nh???p ?????y ????? th??ng tin", 2000, "error");
    } else if (name == "") {
      addAlert("Vui l??ng nh???p t??n!", 1000, "warning");
    } else if(!regexName.test(name)){
      addAlert("T??n kh??ng h???p l???!", 1000, "warning");
    } else if (phone == "") {
      addAlert("Vui l??ng nh???p s??? ??i???n tho???i!", 1000, "warning");
    } else if (!regexPhone.test(phone)) {
      addAlert("S??? ??i???n tho???i kh??ng h???p l???!", 1000, "warning");
    } else if (email == "") {
      addAlert("Vui l??ng nh???p email!", 1000, "warning");
    } else if (!regexEmail.test(email)) {
      addAlert("Email kh??ng h???p l???!", 1000, "warning");
    } else if (des == "") {
      addAlert("Vui l??ng nh???p n???i dung!", 1000, "warning");
    } else if (!regexName.test(des)) {
      addAlert("N???i dung kh??ng h???p l???!", 1000, "warning");
    } else {
      addAlert(
        "C???m ??n b???n ???? li??n h???, ch??ng t??i s??? ph???n h???i s???m nh???t c?? th???!",
        2000,
        "success");
      $("#inputName").val("");
      $("#inputPhone").val("");
      $("#inputEmail").val("");
      $("#textareaDes").val("");
    }
  });
  $(".register-mail").click(function (e) {
    e.preventDefault();
    const emailfooter = $("#inputEmailFooter").val();
    const checkEmail = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
    if (emailfooter == "") {
      addAlert("Vui l??ng nh???p email !", 2000, "error");
    } else if (!checkEmail.test(emailfooter)) {
      addAlert("Email kh??ng h???p l???!", 1000, "warning");
    } else {
      addAlert("C???m ??n b???n ???? quan t??m t???i VTCode! ", 2000, "success");
      $("#inputEmailFooter").val("");
    }
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
    dragEndSpeed: 300,
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
      1024: {
        margin: 100,
        stagePadding: 0,
      },
      1200: {
        margin: 80,
        stagePadding: 200,
      },
      1400: {
        margin: 100,
        stagePadding: 230,
      },
      1600: {
        margin: 130,
        stagePadding: 250,
      },
      1920: {
        margin: 180,
        stagePadding: 350,
      },
    },
  });
  $(document).on("click", ".owl-item>.click__item", function () {
    $owl.trigger("to.owl.carousel", [$(this).data("position"), 250]);
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
    dragEndSpeed: 300,
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
      800: {
        items: 1,
        margin: 130,
        stagePadding: 250,
      },
      900: {
        items: 1,
        margin: 200,
        stagePadding: 300,
      },
      1024: {
        margin: 100,
        stagePadding: 0,
      },
      1200: {
        margin: 80,
        stagePadding: 200,
      },
      1400: {
        margin: 90,
        stagePadding: 280,
      },
      1600: {
        margin: 120,
        stagePadding: 300,
      },
      1920: {
        margin: 150,
        stagePadding: 380,
      },
    },
  });

  $(document).on("click", ".owl-item>.team__item", function () {
    $owl2.trigger("to.owl.carousel", [$(this).data("position"), 250]);
  });
});
