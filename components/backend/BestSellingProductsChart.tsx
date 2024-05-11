'use client' 
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
export default function BestSellingProductsChart() {
    const data = {
        labels: ['Cabbage', 'Rice', 'Chicken', 'Maize'],
        datasets: [
          {
            label: '# of Votes',
            data: [55, 10, 10, 25],
            backgroundColor: [
              'rgba(0, 189, 0, 1)',
              'rgba(230, 179, 12, 1)',
              'rgba(231, 73, 0, 0.93)',
              'rgba(225, 225, 225, 1)',
            ],
            borderColor: [
              'rgba(0, 189, 0, 1)',
              'rgba(230, 179, 12, 1)',
              'rgba(231, 73, 0, 0.93)',
              'rgba(225, 225, 225, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
      
  return (
    <div className="dark:bg-slate-700 bg-white p-8 rounded-lg">
        <h2 className="font-bold text-slate-900 dark:text-white">Best Selling Products</h2>
        {/* Chart */}
        <Pie data={data} />
    </div>
  )
}


