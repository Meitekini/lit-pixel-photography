"use client";

import { PhotographyCategory } from "@/generated/prisma/client";
import { MoreHorizontal, Eye, Edit, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ActionsCell({ category }: { category: PhotographyCategory }) {
  const router = useRouter();

  const handleView = () => {
    // For now, just show a toast - you can implement view modal/page later
    toast.info(`Viewing category: ${category.category}`);
  };

  const handleEdit = () => {
    router.push(`/dashboard/photography-category/${category.id}/edit`);
  };

  const handleDelete = async () => {
    if (confirm(`Are you sure you want to delete "${category.category}"?`)) {
      try {
        const response = await fetch(`/api/category/${category.id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          toast.success("Category deleted successfully");
          router.refresh();
        } else {
          toast.error("Failed to delete category");
        }
      } catch {
        toast.error("Error deleting category");
      }
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem onClick={handleView}>
          <Eye className="mr-2 h-4 w-4" />
          View
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleEdit}>
          <Edit className="mr-2 h-4 w-4" />
          Edit
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={handleDelete}
          className="text-destructive focus:text-destructive"
        >
          <Trash2 className="mr-2 h-4 w-4" />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
