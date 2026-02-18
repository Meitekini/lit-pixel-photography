import { columns } from "./columns";
import { prisma } from "@/lib/prisma";
import { DataTable } from "@/components/data-table";
import { PhotographyCategory } from "@/generated/prisma/client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

async function getData(): Promise<PhotographyCategory[]> {
  try {
    const photographyCategories = await prisma.photographyCategory.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return photographyCategories as PhotographyCategory[];
  } catch (error) {
    console.error("Failed to fetch photography categories:", error);
    return [];
  }
}

export default async function Page() {
  const data = await getData();

  return (
    <div className="flex-1 space-y-4 p-4 pt-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Photography Categories</h1>
        <Button variant="outline" size="sm" asChild>
          <Link href="/dashboard/photography-category/new">
            Add New Category
          </Link>
        </Button>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
