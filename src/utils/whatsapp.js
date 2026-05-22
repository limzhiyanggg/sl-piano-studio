const WHATSAPP_MESSAGE = `Hi Serene, I'd like to find out more about piano lessons for my child / myself.

Student's details
- Name:
- Age:
- Experience: Beginner / Grade (if any)
- Goal: Graded exam / Leisure
- Location (postal code):
- Preferred day and time:`;

const EMAIL_SUBJECT = 'Piano Lesson Enquiry';
const EMAIL_BODY = `Hi Serene,

I'd like to find out more about piano lessons for my child / myself.

Student's details
Name:
Age:
Experience: Beginner / Some background
Grade (if any):
Goal: Graded exam / Leisure
Location (postal code):
Preferred day and time:

Looking forward to hearing from you.
[Your name]`;

export function getWhatsAppURL(phoneNumber) {
  const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}

export function getEmailURL(email) {
  const encodedSubject = encodeURIComponent(EMAIL_SUBJECT);
  const encodedBody = encodeURIComponent(EMAIL_BODY);
  return `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;
}
