console.log("Hello from get Frequent State route");
$("#getFrequentSatate").on("click", () => {
  var cities = {
    cityOne: $("#firstCity").val(),
    cityTwo: $("#secondCity").val(),
    cityThree: $("#thirdCity").val(),
    cityFour: $("#fourthCity").val(),
    cityFive: $("#fifthCity").val()
  };
  $.ajax({
    url: "/state/findFrequentState",
    type: "POST",
    dataType: "JSON",
    data: cities,
    success: data => {
      for (let i = 0; i < data.length; i++) {
        console.log("State : ", data[i].state);
      }
    }
  });
});
