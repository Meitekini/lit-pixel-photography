import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const body = await request.json();
  const { category, image_url, description } = body;
  console.log(image_url);

  const result = await prisma.photographyCategory.create({
    data: {
      category,
      imageUrl: image_url,
      description,
    },
  });

  return new Response(JSON.stringify(result), {
    status: 201,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function DELETE(request: Request) {
  try {
    const url = new URL(request.url);
    const id = url.pathname.split("/").pop();

    if (!id) {
      return new Response(
        JSON.stringify({ error: "Category ID is required" }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    const result = await prisma.photographyCategory.delete({
      where: {
        id: id,
      },
    });

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error deleting category:", error);
    return new Response(
      JSON.stringify({ error: "Failed to delete category" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
