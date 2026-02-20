"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { upload } from "@vercel/blob/client";
import { useRouter, redirect } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { PhotographyCategory } from "@/generated/prisma/client";

const photographyCategorySchema = z.object({
  category: z
    .string()
    .min(5, "Photography category title must be at least 5 characters.")
    .max(32, "Photography category title must be at most 32 characters."),
  description: z
    .string()
    .min(20, "Description must be at least 20 characters.")
    .max(100, "Description must be at most 100 characters."),
  image_url: z.string().optional(),
});

export function PhotographyCategoryForm({
  initialData,
  isEdit = false,
}: {
  initialData?: PhotographyCategory;
  isEdit?: boolean;
}) {
  const router = useRouter();
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const form = useForm<z.infer<typeof photographyCategorySchema>>({
    resolver: zodResolver(photographyCategorySchema),
    defaultValues: {
      category: initialData?.category || "",
      description: initialData?.description || "",
      image_url: initialData?.imageUrl || "",
    },
  });

  async function onSubmit(data: z.infer<typeof photographyCategorySchema>) {
    const { category, description } = data;
    const fileInput = fileInputRef.current;

    let imageUrl = initialData?.imageUrl || "";
    if (fileInput?.files?.[0]) {
      const file = fileInput.files[0];
      const newBlob = await upload(file.name, file, {
        access: "public",
        handleUploadUrl: "/api/images/upload",
      });
      imageUrl = newBlob.url;
    }

    const object = {
      category,
      description,
      image_url: imageUrl,
    };

    const url =
      isEdit && initialData
        ? `/api/category/${initialData.id}`
        : "/api/category";
    const method = isEdit ? "PUT" : "POST";

    const result = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(object),
    });

    if (result.ok) {
      toast.success(
        isEdit
          ? "Photography category updated successfully!"
          : "Photography category created successfully!"
      );
      if (!isEdit) {
        form.reset();
        // Refresh the current route so lists or data update without manual nav
        if (typeof router.refresh === "function") {
          router.refresh();
        } else {
          // fallback for environments without router.refresh
          window.location.reload();
        }
      } else {
        redirect("/dashboard/photography-category");
      }
    } else {
      toast.error(
        isEdit
          ? "Failed to update photography category."
          : "Failed to create photography category."
      );
    }
  }

  return (
    <Card className="w-full sm:max-w-md">
      <CardHeader>
        <CardTitle>
          {isEdit ? "Edit Photography Category" : "Photography Category"}
        </CardTitle>
        <CardDescription>
          {isEdit
            ? "Update the photography category details."
            : "Create a new photography category."}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          id="form-rhf-demo"
          onSubmit={(e) => form.handleSubmit(onSubmit)(e)}
        >
          <FieldGroup>
            <Controller
              name="category"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-category">
                    Photography Category
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-demo-category"
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter photography category name"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="image_url"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Image URL</FieldLabel>
                  <Input
                    type="file"
                    ref={fileInputRef}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="description"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-description">
                    Description
                  </FieldLabel>
                  <InputGroup>
                    <InputGroupTextarea
                      {...field}
                      id="form-rhf-demo-description"
                      placeholder="I'm having an issue with the login button on mobile."
                      rows={6}
                      className="min-h-24 resize-none"
                      aria-invalid={fieldState.invalid}
                    />
                    <InputGroupAddon align="block-end">
                      <InputGroupText className="tabular-nums">
                        {field.value.length}/100 characters
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                  <FieldDescription>
                    Include steps to reproduce, expected behavior, and what
                    actually happened.
                  </FieldDescription>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button type="submit" form="form-rhf-demo">
            {isEdit ? "Update" : "Create"}
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
}
