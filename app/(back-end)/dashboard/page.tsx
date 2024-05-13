import CustomerDataTable from "@/components/backend/CustomerDataTable";
import FinanceCards from "@/components/backend/FinanceCards";
import Heading from "@/components/backend/Heading";
import OrderDetailsCards from "@/components/backend/OrderDetailsCards/OrderDetailsCards";
import SalesCharts from "@/components/backend/SalesCharts";
import React from "react";

export default function page() {
  return (
    <div>
      <Heading title="Dashboard Overview" />
      {/* Finance Cards */}
      <FinanceCards />
      {/* Order Details Cards */}
      <OrderDetailsCards />
      {/* Sales Chart Overview */}
      <SalesCharts />
      {/* Recent Customer Orders Table */}
      <CustomerDataTable />
    </div>
  );
}
