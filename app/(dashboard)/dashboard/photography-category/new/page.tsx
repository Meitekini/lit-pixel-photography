import { PhotographyCategoryForm } from '@/components/dashboard/photography-category'
import React from 'react'

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-10">Add New Photography Category</h1>
        <PhotographyCategoryForm />
    </div>
  )
}
