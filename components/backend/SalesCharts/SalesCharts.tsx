import React from 'react'
import WeeklySalesChart from './WeeklySalesChart'
import BestSellingProductsChart from './BestSellingProductsChart'

export default function SalesCharts() {
  return (
    <div className="dark:text-white text-slate-900 font-bold">
      <h2 className="mb-4">Sales Chart</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Weekly sales  */}
          <WeeklySalesChart />
          {/* Best Selling Products */}
          <BestSellingProductsChart />
      </div>
    </div>
    
  )
}
