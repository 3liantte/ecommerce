import Heading from '@/components/backend/Heading'
import PageHeader from '@/components/backend/PageHeader'
import TableActions from '@/components/backend/TableActions'
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
