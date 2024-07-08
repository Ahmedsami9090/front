$("#nav-icon h3").click(function () {
  let iconLeft = $("#nav-icon").offset().left;
  if (iconLeft === 0) {
    $("#nav-main").animate({ width: `300px` });
    $("#nav-icon h3").html('<i class="fa-solid fa-bars"></i> Close');
  } else {
    $("#nav-main").animate({ width: `-${iconLeft}px` });
    $("#nav-icon h3").html('<i class="fa-solid fa-bars"></i> Open');
  }
});
$(window).scroll(function () {
  let wordHeight = $("#home .bg-overlay h2").offset().top;
  let top = $(window).scrollTop();
  if (top > wordHeight) {
    $("#nav-icon h3").css({ color: "black", transition: "all .5s" }, 1000);
  } else {
    $("#nav-icon h3").css({ color: "white", transition: "all .5s" }, 1000);
  }
});
$(".singer-details").not($(".singer-details").first()).slideUp();
$(".singer-name").click(function () {
  $(this).next(".singer-details").slideDown();
  $(".singer-details").not($(this).next(".singer-details")).slideUp();
});
let pDate = new Date("2024-08-01");
$("#partyDate").html(
  `${pDate.getFullYear()}-${pDate.getMonth() + 1}-${pDate.getDate()}`
);
$("#days").countdown(pDate, function (event) {
  $(this).html(event.strftime("%D D"));
  $("#hrs").html(event.strftime("%H H"));
  $("#min").html(event.strftime("%M M"));
  $("#sec").html(event.strftime("%S S"));
});
$("#userMessage").on("input", function () {
  const maxLength = 100;
  let curLength = $(this).val().length;
  $("#remainChar").html(maxLength - curLength);
});
