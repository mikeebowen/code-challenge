$(document).ready(function(){
  var programmersArray = [ { name: "Bob", occupation: "programmer", awesomeIndex: 7, }, { name: "Alice", ccupation: "programmer", awesomeIndex: 9, }, { name: "Zaphod", occupation: "President of the Galaxy" } ];
  $("#jquery-button").on("click", function () {
    var avArray = [];
    for (var i = 0; i < programmersArray.length; i++) {
      if (programmersArray[i]["awesomeIndex"]) {
        avArray.push(programmersArray[i]["awesomeIndex"])
        avAwesome = _.sum(avArray)/(i + 1);
      }
    }
    $("#awesome-index").html(avAwesome);
  })
});
