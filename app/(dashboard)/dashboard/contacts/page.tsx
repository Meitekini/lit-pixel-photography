import { Contact } from "@/types"
import { columns } from "./columns"
import { prisma } from "@/lib/prisma"
import { DataTable } from "@/components/data-table"

async function getData(): Promise<Contact[]> {
  try {
    const contacts = await prisma.contact.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    })
    return contacts as Contact[]
  } catch (error) {
    console.error('Failed to fetch contacts:', error)
    return []
  }
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}