
export const WHATSAPP_NUMBERS = {
  main: "918800123456", // Main ShaadiSaathi number
  support: "919876543210", // Support number
  booking: "918800123456", // Booking number
  vendor: "919876543210", // Vendor inquiries
  baarat: "918800123456", // Baarat bundle bookings
  emergency: "918800123456" // Emergency support
};

export interface WhatsAppMessage {
  type: 'booking' | 'inquiry' | 'support' | 'vendor_contact' | 'baarat_bundle' | 'purohit_booking';
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
  urgency?: 'low' | 'medium' | 'high';
  preferredContactTime?: string;
}

export const generateWhatsAppMessage = (data: WhatsAppMessage): string => {
  let message = "";
  const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
  
  switch (data.type) {
    case 'booking':
      message = `🎉 *New Service Booking Request*
📅 *Request Time:* ${timestamp}

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

${data.urgency === 'high' ? '🚨 *URGENT REQUEST*' : ''}
${data.preferredContactTime ? `📞 *Preferred Contact Time:* ${data.preferredContactTime}` : ''}

Please confirm availability and provide next steps within 30 minutes.

*ShaadiSaathi Wedding Services*
🌐 www.shaadisaathi.com`;
      break;

    case 'baarat_bundle':
      message = `🎊 *Baarat Bundle Booking Request*
📅 *Request Time:* ${timestamp}

👤 *Customer Details:*
Name: ${data.customerName || 'Guest User'}
Email: ${data.customerEmail || 'Not provided'}
Phone: ${data.customerPhone || 'Not provided'}

🏺 *Baarat Bundle Requirements:*
Event: Wedding Procession
Location: ${data.location || 'To be discussed'}
Date: ${data.date || 'To be scheduled'}
Expected Budget: ${data.price || 'Starting ₹15,000+'}

📝 *Special Requirements:*
${data.message || 'Standard baarat convoy with decorated vehicles, professional drivers, flower decorations, and music system setup'}

🚗 *Package Includes:*
• 5-15 decorated vehicles
• Professional chauffeurs  
• Premium flower decorations
• Music system setup
• LED lighting decoration
• Coordinated convoy arrival
• Route planning

*Response Expected:* Within 30 minutes
*Booking Priority:* HIGH

*ShaadiSaathi Baarat Services*
📞 Call/WhatsApp: ${WHATSAPP_NUMBERS.baarat}`;
      break;

    case 'purohit_booking':
      message = `🕉️ *Purohit/Priest Booking Request*
📅 *Request Time:* ${timestamp}

👤 *Customer Details:*
Name: ${data.customerName || 'Not provided'}
Email: ${data.customerEmail || 'Not provided'}
Phone: ${data.customerPhone || 'Not provided'}

🎯 *Ceremony Details:*
Priest: ${data.serviceName || 'Not specified'}
Ceremony Type: ${data.serviceType || 'Hindu Wedding'}
Location: ${data.location || 'To be discussed'}
Date: ${data.date || 'To be scheduled'}
Time: ${data.time || 'To be scheduled'}
Budget: ${data.price || 'Please provide quote'}

📝 *Additional Requirements:*
${data.message || 'Standard wedding ceremony with all traditional rituals'}

🕉️ *Services Expected:*
• Traditional wedding rituals
• Sanskrit mantras & prayers
• Ceremony guidance
• Puja materials coordination
• Family blessings

Please confirm priest availability and ceremony details.

*ShaadiSaathi Purohit Services*`;
      break;
      
    case 'inquiry':
      message = `💬 *General Inquiry - ShaadiSaathi*
📅 *Inquiry Time:* ${timestamp}

👤 *Customer Information:*
Name: ${data.customerName || 'Guest User'}
Email: ${data.customerEmail || 'Not provided'}
Phone: ${data.customerPhone || 'Not provided'}

📝 *Inquiry Details:*
${data.message || 'General inquiry about wedding services'}

${data.urgency === 'high' ? '🚨 *URGENT INQUIRY*' : ''}
${data.location ? `📍 *Location:* ${data.location}` : ''}

*Expected Response Time:* 30 minutes
*Team Assignment:* Customer Support

*ShaadiSaathi Customer Care*
🌐 www.shaadisaathi.com
📧 support@shaadisaathi.com`;
      break;
      
    case 'support':
      message = `🆘 *Technical Support Request*
📅 *Request Time:* ${timestamp}

👤 *User Details:*
Name: ${data.customerName || 'Guest User'}
Email: ${data.customerEmail || 'Not provided'}
Phone: ${data.customerPhone || 'Not provided'}

❓ *Support Issue:*
${data.message || 'Technical support needed'}

${data.urgency === 'high' ? '🚨 *CRITICAL ISSUE - IMMEDIATE ATTENTION REQUIRED*' : ''}

*Priority Level:* ${data.urgency?.toUpperCase() || 'MEDIUM'}
*Team Assignment:* Technical Support

Please provide immediate assistance and resolution steps.

*ShaadiSaathi Technical Support*
📞 24/7 Helpline: ${WHATSAPP_NUMBERS.support}`;
      break;
      
    case 'vendor_contact':
      message = `🤝 *Vendor Contact Request*
📅 *Request Time:* ${timestamp}

👤 *Customer Details:*
Name: ${data.customerName || 'Guest User'}
Email: ${data.customerEmail || 'Not provided'}
Phone: ${data.customerPhone || 'Not provided'}

🏪 *Vendor Information:*
Vendor: ${data.vendorName || 'Not specified'}
Service Category: ${data.serviceType || 'Not specified'}
Location: ${data.location || 'Not specified'}

💬 *Customer Message:*
${data.message || 'Interested in your wedding services. Please contact me with pricing and availability details.'}

📍 *Event Location:* ${data.location || 'To be discussed'}
💰 *Budget Range:* ${data.price || 'Please provide quote'}

*Action Required:* Connect customer with vendor within 1 hour

*ShaadiSaathi Vendor Network*
🌐 Connect. Plan. Celebrate.`;
      break;
      
    default:
      message = `👋 *ShaadiSaathi Wedding Services*
📅 *Contact Time:* ${timestamp}

Hi! I'm interested in your wedding services. Please contact me with more information about your packages and availability.

*Customer:* ${data.customerName || 'Guest User'}
*Contact:* ${data.customerPhone || data.customerEmail || 'See WhatsApp profile'}

Looking forward to planning my dream wedding with ShaadiSaathi!

🌐 www.shaadisaathi.com`;
  }
  
  return message;
};

export const openWhatsApp = (phoneNumber: string, message: string): void => {
  console.log(`Opening WhatsApp for ${phoneNumber} with automated message:`, message);
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
  // Track the WhatsApp interaction
  console.log('WhatsApp automation triggered:', {
    number: phoneNumber,
    timestamp: new Date().toISOString(),
    messageLength: message.length
  });
  
  window.open(whatsappUrl, '_blank');
};

export const sendWhatsAppMessage = (data: WhatsAppMessage): void => {
  const message = generateWhatsAppMessage(data);
  let phoneNumber = WHATSAPP_NUMBERS.main;
  
  // Route to appropriate WhatsApp number based on message type
  switch (data.type) {
    case 'support':
      phoneNumber = WHATSAPP_NUMBERS.support;
      break;
    case 'booking':
    case 'purohit_booking':
      phoneNumber = WHATSAPP_NUMBERS.booking;
      break;
    case 'baarat_bundle':
      phoneNumber = WHATSAPP_NUMBERS.baarat;
      break;
    case 'vendor_contact':
      phoneNumber = WHATSAPP_NUMBERS.vendor;
      break;
    default:
      phoneNumber = WHATSAPP_NUMBERS.main;
  }
  
  // Add urgency handling
  if (data.urgency === 'high') {
    console.log('🚨 HIGH PRIORITY WhatsApp message being sent');
    // In a real app, you might also send to multiple numbers for urgent requests
  }
  
  openWhatsApp(phoneNumber, message);
};

// Auto-response templates for different scenarios
export const getAutoResponseTemplate = (type: WhatsAppMessage['type']): string => {
  const templates = {
    booking: "Thank you for your booking request! Our team will contact you within 30 minutes to confirm details and availability. 🎉",
    inquiry: "We've received your inquiry! Our wedding experts will get back to you shortly with personalized recommendations. 💕",
    support: "Your support request has been logged. Our technical team will assist you immediately. 🛠️",
    vendor_contact: "We're connecting you with the perfect vendor for your needs. Expect a response within 1 hour! 🤝",
    baarat_bundle: "Your Baarat Bundle request is being processed! Our convoy specialists will call you within 30 minutes. 🎊",
    purohit_booking: "Your priest booking request has been received. We'll confirm availability and arrangements shortly. 🕉️"
  };
  
  return templates[type] || "Thank you for contacting ShaadiSaathi! We'll be in touch soon. 🌟";
};
