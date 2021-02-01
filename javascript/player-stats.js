
function getPlayerStats() {

  anychart.onDocumentReady(function() {

  // Getting user wins from localstorage
  const usernameInput = JSON.parse(localStorage.getItem("user"));
  const playerName = usernameInput.username;
  const user = localStorage.getItem(playerName);

  const userLosses = localStorage.getItem(playerName + ' losses');

  // set the data
  let dataPlayer = [
    {x: 'Wins', value: user},
    {x: "Losses", value: userLosses}
  ];

  // create the chart
  var chart = anychart.pie();

  // add the data
  chart.data(dataPlayer);

  // display the chart in the container
  chart.container('container-player');
  chart.draw();
  });
}