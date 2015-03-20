$(document).ready(function(){
  var programmersArray = [ { name: "Bob", occupation: "programmer", awesomeIndex: 7, }, { name: "Alice", ccupation: "programmer", awesomeIndex: 9, }, { name: "Zaphod", occupation: "President of the Galaxy" } ];
  // $("#jquery-button").on("click", function () {
  //   var avAwesome = 0;
  //   for (var i = 0; i < programmersArray.length; i++) {
  //     if (programmersArray[i]["awesomeIndex"]) {
  //       avAwesome += programmersArray[i]["awesomeIndex"];
  //       avAwesome = avAwesome/(i + 1);
  //     }
  //   }
  //   $("#awesome-index").html(avAwesome);
  // })
  // $("#jquery-button").on("click", function () {
  //   var test = _.sum([1,2,3,4]);
  // console.log(test);
  // })

// var findAvgAwesome = function (array) {
//    var avAwesome = 0;
//     for (var i = 0; i < array.length; i++) {
//       if (array[i]["awesomeIndex"]) {
//         avAwesome += array[i]["awesomeIndex"];
//         avAwesome = avAwesome/(i + 1);
//       }
//     }
//     return avAwesome;
//   };
// _.each(programmersArray, findAvgAwesome);
// var evens = _.sum([4, 6, 2]);
// console.log(evens);
  //   var test = _.sum([1,2,3,4]);
  // console.log(test);

  var test2 = _([1, 2]).forEach(function(n) {
  console.log(n);
}).value();
});
