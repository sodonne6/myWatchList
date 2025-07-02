//src/StockChart.js

import React from 'react';
import {Line} from 'react-chartjs-2';

const StockChart = ({timeSeries}) => {
    //tailor data for chart 
    const labels = Object.keys(timeSeries);
    
    const closingPrices = labels.map(date => timeSeries[date]['4. close']);
    
    
    const data = {
        labels: labels.reverse(),
        datasets: [
            {
                label: 'Closing Price',
                data: closingPrices.reverse(),
                fill: false,
                borderColor: 'rgba(75,192,192,1)',
                tension:0.1,
                
            },
        ],
    };

    //console.log("Test Output",data);
  

    const options = {
        scales: {
            y: {
                beginAtZero:false,
            },
        },
    };

    console.log("Testing...123",options);

    

    return (
        <div>
            <h2>Stock Closing Prices </h2>
            <Line data={data} options={options} />
        </div>
    );


};



export default StockChart;