
export const WHATSAPP_NUMBERS = {
  main: "918800123456", // Main Saadi Ride number
  support: "919876543210", // Support number
  booking: "918800123456", // Booking number
  vendor: "919876543210" // Vendor inquiries
};

export interface WhatsAppMessage {
  type: 'booking' | 'inquiry' | 'support' | 'vendor_contact';
  serviceName?: string;
  serviceType?: string;
  customerName?: string;
  customerEmail?: string;
  customerPhone?: string;
  price?: string;
  location?: string;
  date?: string;
  time?: string;
  message?: string;
  vendorName?: string;
}

export const generateWhatsAppMessage = (data: WhatsAppMessage): string => {
  let message = "";
  
  switch (data.type) {
    case 'booking':
      message = `🎉 *New Service Booking Request*

👤 *Customer Details:*
Name: ${data.customerName || 'Not provided'}
Email: ${data.customerEmail || 'Not provided'}
Phone: ${data.customerPhone || 'Not provided'}

🎯 *Service Details:*
Service: ${data.serviceName || 'Not specified'}
Type: ${data.serviceType || 'Not specified'}
Price: ${data.price || 'Please provide quote'}
Location: ${data.location || 'To be discussed'}
Date: ${data.date || 'To be scheduled'}
Time: ${data.time || 'To be scheduled'}

Please confirm availability and provide next steps.`;
      break;
      
    case 'inquiry':
      message = `💬 *General Inquiry*

👤 *Customer:* ${data.customerName || 'Guest'}
📧 *Email:* ${data.customerEmail || 'Not provided'}
📞 *Phone:* ${data.customerPhone || 'Not provided'}

📝 *Message:*
${data.message || 'General inquiry about wedding services'}

Please respond at your earliest convenience.`;
      break;
      
    case 'support':
      message = `🆘 *Support Request*

👤 *Customer:* ${data.customerName || 'Guest'}
📧 *Email:* ${data.customerEmail || 'Not provided'}

❓ *Issue:*
${data.message || 'Support needed'}

Requesting immediate assistance.`;
      break;
      
    case 'vendor_contact':
      message = `🤝 *Vendor Contact Request*

👤 *Customer:* ${data.customerName || 'Guest'}
📧 *Email:* ${data.customerEmail || 'Not provided'}
📞 *Phone:* ${data.customerPhone || 'Not provided'}

🏪 *Vendor:* ${data.vendorName || 'Not specified'}
📍 *Location:* ${data.location || 'Not specified'}

💬 *Message:*
${data.message || 'Interested in your wedding services'}

Looking forward to hearing from you!`;
      break;
      
    default:
      message = `Hi Saadi Ride! I'm interested in your wedding services. Please contact me.`;
  }
  
  return message;
};

export const openWhatsApp = (phoneNumber: string, message: string): void => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
};

export const sendWhatsAppMessage = (data: WhatsAppMessage): void => {
  const message = generateWhatsAppMessage(data);
  let phoneNumber = WHATSAPP_NUMBERS.main;
  
  switch (data.type) {
    case 'support':
      phoneNumber = WHATSAPP_NUMBERS.support;
      break;
    case 'booking':
      phoneNumber = WHATSAPP_NUMBERS.booking;
      break;
    case 'vendor_contact':
      phoneNumber = WHATSAPP_NUMBERS.vendor;
      break;
    default:
      phoneNumber = WHATSAPP_NUMBERS.main;
  }
  
  openWhatsApp(phoneNumber, message);
};
