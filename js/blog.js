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
  $(".register-mail").click(function (e) {
    e.preventDefault();
    const emailfooter = $("#inputEmailFooter").val();
    const checkEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    console.log(emailfooter);
    if (emailfooter == "") {
      addAlert("Vui lòng nhập email !", 2000, "error");
    } else if (!checkEmail.test(emailfooter)) {
      addAlert("Email không hợp lệ!", 1000, "warning");
    } else {
      addAlert("Cảm ơn bạn đã quan tâm tới VTCode! ", 2000, "success");
      $("#inputEmailFooter").val("");
    }
  });
  $(".page-link").click(function(e) {
    e.preventDefault();
    $(this).parent(".page-item").addClass("active");
    $(this).parent(".page-item").siblings().removeClass("active");
  })
});
