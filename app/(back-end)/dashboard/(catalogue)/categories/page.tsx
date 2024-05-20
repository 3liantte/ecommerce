import Heading from "@/components/backend/Heading/Heading";
import PageHeader from "@/components/backend/Heading/PageHeader";
import TableActions from "@/components/backend/FormInputs/TableActions";
import { Download, Plus, Search, Trash, Trash2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import TableList from "@/components/backend/NewCategriesTable/TableList";

export default function page() {
  return (
    <>
      <PageHeader
        heading="Categories"
        href="/dashboard/categories/new"
        linkTitle="Add Category"
      />

      <div>
        <TableActions />
      </div>

      <div className="flex flex-col pt-6">
        <h1 className="text-3xl font-bold pt-4 pb-4">Categories List</h1>
        <TableList />
      </div>
    </>
  );
}
