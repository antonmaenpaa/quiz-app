function getBotOneStats() {

    anychart.onDocumentReady(function() {

     
    const botOne = localStorage.getItem('bot1Wins');
    const bot1Losses = localStorage.getItem('bot1Losses');

    // set the data
    let dataBot1 = [
        {x: 'Wins', value: botOne},
        {x: "Losses", value: bot1Losses}

    ];
  
    // create the chart
    var chart = anychart.pie();
  
  
    // add the data
    chart.data(dataBot1);

  
    // display the chart in the container
    chart.container('container-bot1');
    chart.draw();

  
  });
}