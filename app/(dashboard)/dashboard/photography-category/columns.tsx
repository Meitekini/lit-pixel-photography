"use client";

import { PhotographyCategory } from "@/generated/prisma/client";
import { ColumnDef } from "@tanstack/react-table";

import { ActionsCell } from "@/components/dashboard/photography-category-actions";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<PhotographyCategory>[] = [
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "imageUrl",
    header: "Image URL",
    cell: ({ getValue }) => {
      const url = getValue() as string;
      return (
        <div className="max-w-xs truncate" title={url}>
          {url}
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const category = row.original;
      return <ActionsCell category={category} />;
    },
  },
];
