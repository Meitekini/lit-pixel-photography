"use server";

import { z } from "zod";
import { contactSchema } from "@/lib/validation"; // adjust path

// Example: server action for handling contact form submission
export async function submitContactForm(formData: FormData) {
  // Convert FormData to plain object
  const data = {
    firstname: formData.get("firstname"),
    lastname: formData.get("lastname"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    details: formData.get("details"),
  };
  console.log(data);
  

  // Validate with Zod
  const parsed = contactSchema.safeParse(data);

  if (!parsed.success) {
    // Return errors in a structured way
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  // If validation passes, do something with the data
  const contact = parsed.data;

  // Example: save to DB (replace with your logic)
  // await db.contact.create({ data: contact });

  return {
    success: true,
    message: "Contact saved successfully",
    contact,
  };
}
