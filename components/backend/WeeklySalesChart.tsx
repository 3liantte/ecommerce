'use client'
import { useState } from 'react'

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';


export default function WeeklySalesChart() {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
      );
      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: false,
            text: 'Chart.js Line Chart',
          },
        },
      };
      const labels = 
      ['January', 
       'February', 
       'March', 
       'April', 
       'May', 
       'June', 
       'July'
      ];
      const data = {
  labels,
    datasets: [
    {
      label: 'Sales',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Orders',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    ],
  };

    const tabs = [
    {   
        title:"Sales",
        type:"sales",
    },
    {   
        title:"Orders",
        type:"orders"
    }
    ]
    const [chartToDisplay,setChartToDisplay] = useState(tabs[0].type)

  return (
    <div className="dark:bg-slate-700 bg-white p-8 rounded-lg">
        <h2 className="font-bold text-slate-900 dark:text-white">Weekly Sales</h2>

        {/* Tabs */}
    <div className="text-sm font-medium text-center text-gray-900 border-b
     border-gray-200 dark:text-gray-50 dark:border-gray-600">
        <ul className="flex flex-wrap -mb-px">
            {
                tabs.map((tab,i)=>{
                    return (
                        <li className="me-2" key={i}>
                        <button onClick={()=>setChartToDisplay(tab.type)} className={chartToDisplay==tab.type?
                        "inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                        :
                        "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300dark:hover:text-gray-300"}>
                            {tab.title}
                        </button>
                    </li>
        
                    )
                })
            }
        </ul>
    </div>

        {/* Content */}
        {
            tabs.map((tab, i)=>{
                if (chartToDisplay === tab.type) {
                    return <Line options={options} data={data} />;
                }
                return null
            })
        }
    </div>
  )
}
