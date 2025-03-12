$(document).ready(function () {
  const mortageAmonth = $(".mortageAmonth #number");
  const mortageCurrency = $(".mortageAmonth .currency");
  const mortageYears = $(".mortage-number #Terms");
  const yearsBorder = $(".mortage-number #yearsBorder");
  const interestBorder = $(".mortage-number #interestBorder");
  const mortageInterest = $(".mortage-number #Interest");
  const errorMsgAmonth = $("#errorMsgAmonth");
  const errorMsgYears = $("#errorMsgYears");
  const errorMsgInterest = $("#errorMsgInterest");
  const repaymentRadio = $("#firstRadio");
  const interestOnlyRadio = $("#lastRadio");
  const button = $("#submit");
  button.click(function () {
    // ADDING ERROR MESSAGE TO ALL THE FEILD
    // THE ERROR MESSAGE FOR MORTAGEAMOUNTH -----1
    if (isNaN(mortageAmonth.val()) || mortageAmonth.val() <= 0) {
      errorMsgAmonth
        .text("This feild is required")
        .css("color", "hsl(4, 69%, 50%)");
      mortageAmonth
        .css("border", "1px solid hsl(4, 69%, 50%)")
        .css("borderLeft", "none");
      mortageCurrency
        .css("border", "1px solid hsl(4, 69%, 50%)")
        .css("borderRight", "none")
        .css("backgroundColor", "hsl(4, 69%, 50%)")
        .css("color", "hsl(0, 0%, 100%)");
    } else {
      errorMsgAmonth.text("");
      mortageAmonth
        .css("border", "1px solid  hsl(203, 41%, 72%)")
        .css("borderLeft", "none");
      mortageCurrency
        .css("border", "1px solid  hsl(203, 41%, 72%)")
        .css("borderRight", "none")
        .css("backgroundColor", "hsl(202, 86%, 94%)")
        .css("color", "hsl(202, 55%, 16%)");
    }
    // ERROR MESSAGE FOR THE MORTAGE TERM (YEARS)-----2
    if (isNaN(mortageYears.val()) || mortageYears.val() <= 0) {
      mortageYears
        .css("border", "1px solid hsl(4, 69%, 50%)")
        .css("borderRight", "none");
      yearsBorder
        .css("border", "1px solid hsl(4, 69%, 50%)")
        .css("borderLeft", "none")
        .css("backgroundColor", "hsl(4, 69%, 50%)")
        .css("color", "hsl(0, 0%, 100%)");
      errorMsgYears
        .text("This field is required")
        .css("color", "hsl(4, 69%, 50%)");
    } else {
      mortageYears
        .css("border", "1px solid  hsl(203, 41%, 72%)")
        .css("borderRight", "none");
      yearsBorder
        .css("border", "1px solid  hsl(203, 41%, 72%)")
        .css("borderLeft", "none")
        .css("backgroundColor", "hsl(202, 86%, 94%)")
        .css("color", "hsl(202, 55%, 16%)");
      errorMsgYears.text("");
    }
    // ERROR MESSAGE FOR INTEREST-------3
    if (isNaN(mortageInterest.val()) || mortageInterest.val() <= 0) {
      mortageInterest
        .css("border", "1px solid hsl(4, 69%, 50%)")
        .css("borderRight", "none");
      interestBorder
        .css("border", "1px solid hsl(4, 69%, 50%)")
        .css("borderLeft", "none")
        .css("backgroundColor", "hsl(4, 69%, 50%)")
        .css("color", "hsl(0, 0%, 100%)");
      errorMsgInterest
        .text("This field is required")
        .css("color", "hsl(4, 69%, 50%)");
    } else {
      mortageInterest
        .css("border", "1px solid  hsl(203, 41%, 72%)")
        .css("borderRight", "none");
      interestBorder
        .css("border", "1px solid  hsl(203, 41%, 72%)")
        .css("borderLeft", "none")
        .css("backgroundColor", "hsl(202, 86%, 94%)")
        .css("color", "hsl(202, 55%, 16%)");
      errorMsgInterest.text("");
    }
    // THE ERROR MESSAGE FOR RADIO------4
    const checked = $("#firstRadio, #lastRadio");
    const errorMsgRadio = $("#errorMsgRadio");
    if (checked.is(":checked")) {
      errorMsgRadio.html("");
    } else {
      errorMsgRadio
        .html("Please select a query type")
        .css("color", " hsl(0, 66%, 54%)");
    }
    //  WRITING THE CODE FOR MORTAGE CALCULATION
    const loanAmonth = parseFloat(mortageAmonth.val());
    const interestLoan = parseFloat(mortageInterest.val()) / 12;
    const loanTerm = parseFloat(mortageYears.val());
    const n = loanTerm * 12;
    let monthlyRePayment =
      loanAmonth *
      ((interestLoan * Math.pow(1 + interestLoan, n)) /
        (Math.pow(1 + interestLoan, n) - 1));
    $("#monthlyRepayment").text("£" + monthlyRePayment.toFixed(2));
    //  THE CODE FOR TOTLA PAYMENT
    let totalPayment = monthlyRePayment * n;
    $("#totalPayment").text("£" + totalPayment.toFixed(2));

    // THE CODE FOR SHOW THE OUTCOME
    if (
      mortageAmonth.val() <= 0 ||
      mortageYears.val() <= 0 ||
      mortageInterest.val() <= 0 ||
      !$("input[name='class']:checked").val()
    ) {
      $("#submit").click(function (e) {
        e.preventDefault();
      });
    } else {
      $(".completed-result").show();
      $(".initial-container").hide();
    }
  });
  //  THE CODE FOR CLICKING ON THE LABEL FOR THE RADIO CHECKED
  $(".fstRadio label").click(function () {
    repaymentRadio.click();
  });
  $(".lstRadio label").click(function () {
    interestOnlyRadio.click();
  });
  // THE CODE FOR CLEARING/ INITIALIZING THE MORTAGE CALCULATOR
  $("#clear").click(function () {
    mortageAmonth.val("");
    mortageYears.val("");
    mortageInterest.val("");
    $("input[name='class']").prop("checked", false);
    $("#lastRadio").prop("checked", false);
    $(".completed-result").hide();
    $(".initial-container").show();
  });
});
