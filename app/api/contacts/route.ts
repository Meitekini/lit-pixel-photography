import { prisma } from "@/lib/prisma";
import { contactSchema } from "@/lib/validation";
import { NextResponse } from "next/server";
import { z } from "zod";



export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate request body
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, errors: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const contact = parsed.data;

    // Example: save to DB or trigger email
    // await db.contact.create({ data: contact });
    const saved = await prisma.contact.create({
      data: {
        firstName: contact.firstname,
        lastName: contact.lastname,
        email: contact.email,
        phone: contact.phone,
        details: contact.details,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Contact saved successfully",
      contact,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Server error", error: String(error) },
      { status: 500 }
    );
  }
}
