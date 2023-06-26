// import React from "react";
// import { Chart } from "react-google-charts";



// export const options = {
//   legend: "none",
//   slices: {
//     0: { color: "#F51E1E" },
//     1: { color: "#FFCD1B" },
//     2: { color: "#6CDCF4" },
//   },

// };

// export function PieChart({amount,interest,total}) {
//   let data = [
//     ["Task", "Hours per Day"],
//     ["Loan EMI",amount],
//     ["Total Payable Interest",interest],
//     ["Total Payment(Principal + Int)",total],
//   ];
 
//   return (
  
//     <Chart
//       chartType="PieChart"
//       data={data}
//       options={options}
//       width={"100%"}
//       height={"400px"}
//     />
//   );
// }

import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const PieChart = ({ amount, interest, total }) => {
  const data = {
    labels: ['Loan EMI', 'Total Payable Interest','Total Payment(Principal + Int)'],
    datasets: [
      {
        data: [amount, interest,total],
        backgroundColor: ['#F51E1E', '#FFCD1B','#6CDCF4'],
        hoverBackgroundColor: ['#F51E1E', '#FFCD1B','#6CDCF4'],
      },
    ],
 

  };
  const options = {
    plugins: {
      legend: {
        display: false, // Hide the labels
      },
    },
  };
  return <Pie data={data}  options={options}/>;
};


