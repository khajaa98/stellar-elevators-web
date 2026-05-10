import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { inquirySchema } from '@/types/inquiry';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // 1. Server-side Validation
    const result = inquirySchema.safeParse(body);
    
    if (!result.success) {
      return NextResponse.json(
        { error: 'Invalid input', details: result.error.format() },
        { status: 400 }
      );
    }
    
    const { name, phone, city, project_type, message } = result.data;
    
    // 2. Sanitize and Prepare Data
    const inquiryData = {
      name: name.trim(),
      phone: phone.trim(),
      city: city.trim(),
      project_type,
      message: message?.trim() || '',
      status: 'pending',
      created_at: new Date().toISOString(),
    };
    
    // 3. Supabase Insertion
    const { error } = await supabase
      .from('inquiries')
      .insert([inquiryData]);
    
    if (error) {
      console.error('Supabase Error:', error);
      return NextResponse.json(
        { error: 'Failed to submit inquiry' },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { message: 'Inquiry submitted successfully' },
      { status: 201 }
    );
    
  } catch (err) {
    console.error('API Error:', err);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
