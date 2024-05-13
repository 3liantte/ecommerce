import Heading from '@/components/backend/Heading/Heading'
import PageHeader from '@/components/backend/Heading/PageHeader'
import TableActions from '@/components/backend/FormInputs/TableActions'
import { Download, Plus, Search, Trash, Trash2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function page(){
  return (
    <div>
      {/* Header */}
        <PageHeader heading="Categories" href="/dashboard/categories/new" 
        linkTitle="Add Category"/>

      {/* Table (Actions) */}
      <TableActions/>
      
      <h2>Table</h2>
    </div>
  )
}
