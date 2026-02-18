import { prisma } from "@/lib/prisma";
import { PhotographyCategoryForm } from "@/components/dashboard/photography-category";

async function getCategory(id: string) {
  try {
    const category = await prisma.photographyCategory.findUnique({
      where: {
        id: id,
      },
    });
    return category;
  } catch (error) {
    console.error("Failed to fetch category:", error);
    return null;
  }
}

export default async function EditCategoryPage({
  params,
}: {
  params: { id: string };
}) {
  const category = await getCategory(params.id);

  if (!category) {
    return (
      <div className="flex-1 space-y-4 p-4 pt-6">
        <div className="flex items-center justify-center h-64">
          <p className="text-muted-foreground">Category not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 space-y-4 p-4 pt-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Edit Photography Category</h1>
      </div>
      <PhotographyCategoryForm initialData={category} isEdit={true} />
    </div>
  );
}
