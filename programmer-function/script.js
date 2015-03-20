var programmers = [
{ name: "Bob", occupation: "programmer", awesomeIndex: 7, },
{ name: "Alice", ccupation: "programmer", awesomeIndex: 9, },
{ name: "Zaphod", occupation: "President of the Galaxy" }
];

var jsButton = document.getElementById("javascript-button");
var javascriptFunction = function () {
  var averageAwesome = 0;
  for (var i = 0; i < programmers.length; i++) {
    if (programmers[i]["awesomeIndex"]){
      averageAwesome += programmers[i]["awesomeIndex"];
      averageAwesome = averageAwesome/(i + 1);
    }
  }
document.getElementById("awesome-index").innerHTML = averageAwesome;
};

jsButton.addEventListener("click", javascriptFunction, false);

// $(document).ready(function() {
//   // var jqueryFunction = function (programmersArray) {
//   //   var averageAwesome = 0;
//   //   var i = 0;
//   //     if (programmersArray[i]["awesomeIndex"]) {
//   //       averageAwesome += programmersArray[i]["awesomeIndex"];
//   //       averageAwesome = averageAwesome/(i+1);
//   //       i++;
//   //     } else {
//   //       i++
//   //     }
//   // $("#awesome-index").text(averageAwesome);
//   // };
//   // $("#jquery-button").on("click", function () {
//   //   jqueryFunction(programmers)
//   // });
// // _.forEach(programmers, function (programmersArray) {
// //     var averageAwesome = 0;
// //     var i = 0;
// //       if (programmersArray[i]["awesomeIndex"]) {
// //         averageAwesome += programmersArray[i]["awesomeIndex"];
// //         averageAwesome = averageAwesome/(i+1);
// //         i++;
// //       } else {
// //         i++
// //       }
// //   $("#awesome-index").text(averageAwesome);
// //   };
//   $("#jquery-button").on("click", function () {
//     _.forEach(programmers, function (programmersArray) {
//     var averageAwesome = 0;
//     var i = 0;
//       if (programmersArray[i]["awesomeIndex"]) {
//         averageAwesome += programmersArray[i]["awesomeIndex"];
//         averageAwesome = averageAwesome/(i+1);
//         i++;
//       } else {
//         i++
//       }
//   $("#awesome-index").text(averageAwesome);
//  }})
// });

// $(document).ready(function() {
//   var counter = 0;
//   var jqueryFunction = function (programmersArray) {
//     var averageAwesome = 0;
//     if (programmersArray[counter]["awesomeIndex"]) {
//       var thisAwesome += programmersArray[counter]["awesomeIndex"];
//       averageAwesome = thisAwesome/(counter+1);
//       counter++;
//     } else {
//       counter++
//     }
//   $("#awesome-index").text(averageAwesome);
//   };
//   _.forEach(programmers, jqueryFunction);
// };
