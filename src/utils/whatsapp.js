import { brand } from '../config/brand'

export const whatsappMessages = {
  generalEnquiry: `Hello ${brand.name}, I would like to make an enquiry.`,
  customPiece: `Hello ${brand.name}, I would like to request a custom piece.`,
  customOrder: `Hello ${brand.name}, I would like to discuss a custom jewellery or wearable-art order.`,
}

export function buildWhatsAppUrl(message) {
  if (!message) {
    return brand.whatsappUrl
  }

  return `${brand.whatsappUrl}?text=${encodeURIComponent(message)}`
}

export function buildProductWhatsAppUrl(productName) {
  return buildWhatsAppUrl(`Hello ${brand.name}, I am interested in ${productName}.`)
}

export function buildCustomOrderWhatsAppUrl({ name = '', contact = '', details = '' }) {
  const messageParts = [
    whatsappMessages.customOrder,
    name.trim() ? `Name: ${name.trim()}` : '',
    contact.trim() ? `Preferred contact: ${contact.trim()}` : '',
    details.trim() ? `Order details: ${details.trim()}` : '',
  ].filter(Boolean)

  return buildWhatsAppUrl(messageParts.join('\n\n'))
}
