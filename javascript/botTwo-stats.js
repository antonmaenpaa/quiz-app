function getBotTwoStats() {

    anychart.onDocumentReady(function() {

        
    const botTwo = localStorage.getItem('bot2Wins');
    const bot2Losses = localStorage.getItem('bot2Losses');



    // set the data
    let dataBot2 = [
        {x: 'Wins', value: botTwo},
        {x: "Losses", value: bot2Losses}

    ];

  
    // create the chart
    var chart = anychart.pie();
  
  
    // add the data
    chart.data(dataBot2);

  
    // display the chart in the container
    chart.container('container-bot2');
    chart.draw();

  
  });
}