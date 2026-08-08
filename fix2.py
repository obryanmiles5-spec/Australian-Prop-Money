import re

with open('app/checkout/ClientPage.tsx', 'r') as f:
    content = f.read()

target = """      } else {
        if (paymentMethod === 'creditcard') {
          window.open('https://flutterwave.com/pay/xl8olgxzbsjy', '_blank', 'noopener,noreferrer');
        } else if (method === 'whatsapp' && result.details) {
        // Automatically try to open WhatsApp in a new tab
        const waText = generateWhatsAppMessage(result.details);
        const waNum = cleanWhatsAppNumber(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "61480852682");
        const waUrl = `https://wa.me/${waNum}?text=${waText}`;
        window.open(waUrl, '_blank', 'noopener,noreferrer');
      }
    } catch (err: any) {"""

replacement = """      } else {
        if (paymentMethod === 'creditcard') {
          window.open('https://flutterwave.com/pay/xl8olgxzbsjy', '_blank', 'noopener,noreferrer');
        } else if (method === 'whatsapp' && result.details) {
          // Automatically try to open WhatsApp in a new tab
          const waText = generateWhatsAppMessage(result.details);
          const waNum = cleanWhatsAppNumber(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "61480852682");
          const waUrl = `https://wa.me/${waNum}?text=${waText}`;
          window.open(waUrl, '_blank', 'noopener,noreferrer');
        }
      }
    } catch (err: any) {"""

content = content.replace(target, replacement)

with open('app/checkout/ClientPage.tsx', 'w') as f:
    f.write(content)
