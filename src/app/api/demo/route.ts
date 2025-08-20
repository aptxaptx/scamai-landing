import { NextResponse } from "next/server";
import { Resend } from 'resend';

const resend = new Resend('re_3fBjDLGN_7wQer8SvbsjyzMDRK3HZSF3A');

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Log to console for debugging
    console.log("[Demo Request] -> sales@get-reality.com", body);
    
    // Send email via Resend
    try {
      const { data, error } = await resend.emails.send({
        from: 'ScamAI Website <noreply@scam.ai>',
        to: ['sales@get-reality.com'],
        cc: ['dennisng@scam.ai', 'benren@scam.ai', 'neo@get-reality.com'],
        subject: `New Demo Request - ${body.company || 'Company'} - ${body.useCase}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">New Demo Request</h2>
            
            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #555;">Contact Information</h3>
              <p><strong>Name:</strong> ${body.name || 'Not provided'}</p>
              <p><strong>Company:</strong> ${body.company || 'Not provided'}</p>
              <p><strong>Email:</strong> ${body.email || 'Not provided'}</p>
              <p><strong>Timezone:</strong> ${body.timezone || 'Not provided'}</p>
            </div>
            
            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #555;">Project Details</h3>
              <p><strong>Primary Use Case:</strong> ${body.useCase || 'Not specified'}</p>
              <p><strong>Expected Volume:</strong> ${body.volume || 'Not specified'}</p>
              <p><strong>Requirements:</strong> ${body.notes || 'No additional notes'}</p>
            </div>
            
            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #555;">Next Steps</h3>
              <p>This lead has been submitted through the website demo form. Please follow up to schedule a discovery call.</p>
              <p><strong>Source:</strong> Website Demo Form</p>
              <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
              <p style="color: #666; font-size: 14px;">
                This email was automatically generated from the ScamAI website demo form.
              </p>
            </div>
          </div>
        `,
        text: `
New Demo Request

Contact Information:
- Name: ${body.name || 'Not provided'}
- Company: ${body.company || 'Not provided'}
- Email: ${body.email || 'Not provided'}
- Timezone: ${body.timezone || 'Not provided'}

Project Details:
- Primary Use Case: ${body.useCase || 'Not specified'}
- Expected Volume: ${body.volume || 'Not specified'}
- Requirements: ${body.notes || 'No additional notes'}

Next Steps:
This lead has been submitted through the website demo form. Please follow up to schedule a discovery call.

Source: Website Demo Form
Submitted: ${new Date().toLocaleString()}

This email was automatically generated from the ScamAI website demo form.
        `
      });

      if (error) {
        console.error('[Resend] Email failed to send:', error);
        return NextResponse.json({ ok: false, error: 'Failed to send email' }, { status: 500 });
      }

      console.log('[Resend] Email sent successfully:', data);
      return NextResponse.json({ ok: true, messageId: data?.id });
      
    } catch (emailError) {
      console.error('[Resend] Error sending email:', emailError);
      return NextResponse.json({ ok: false, error: 'Email service error' }, { status: 500 });
    }
    
  } catch (err) {
    console.error('[API] Error processing request:', err);
    return NextResponse.json({ ok: false, error: 'Invalid request' }, { status: 400 });
  }
}