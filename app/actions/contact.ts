'use server';

import { prisma } from "@/lib/prisma";



interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  details?: string;
}

export async function saveContact(formData: ContactFormData) {
  try {
    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email) {
      return {
        success: false,
        error: 'First name, last name, and email are required',
      };
    }

    // Check if email already exists
    const existingContact = await prisma.contact.findUnique({
      where: { email: formData.email },
    });

    if (existingContact) {
      return {
        success: false,
        error: 'A contact with this email already exists',
      };
    }

    // Save contact to database
    const contact = await prisma.contact.create({
      data: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone || null,
        details: formData.details || null,
      },
    });

    return {
      success: true,
      message: 'Contact saved successfully',
      contact,
    };
  } catch (error) {
    console.error('Error saving contact:', error);
    return {
      success: false,
      error: 'Failed to save contact. Please try again.',
    };
  }
}
