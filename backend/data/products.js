// backend/data/products.js

export const sampleProducts = [
  {
    id: '1',
    name: 'Smart French Door Refrigerator with Ice Maker',
    slug: 'samsung-smart-french-door-refrigerator',
    brand: 'Samsung',
    model: 'RF28T5021SR',
    price: 2299,
    mrp: 2599,
    stock: 8,
    category: 'Refrigerators',
    description: 'A spacious and smart refrigerator with Family Hub and Wi-Fi connectivity.',
    images: ['https://images.unsplash.com/photo-1756471818388-af6aadafbf07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZWZyaWdlcmF0b3IlMjBzdGFpbmxlc3MlMjBzdGVlbHxlbnwxfHx8fDE3NTY3NDM2NzN8MA&ixlib=rb-4.1.0&q=80&w=1080'],
    tags: ['smart-home', 'energy-star'],
    specifications: [{ key: 'Capacity', value: '28 cu. ft.' }],
    isFeatured: true,
  },
  {
    id: '2',
    name: '75" 4K QLED Smart TV with HDR',
    slug: 'lg-75-inch-4k-qled-smart-tv',
    brand: 'LG',
    model: 'OLED75C3PUA',
    price: 1899,
    mrp: 2199,
    stock: 5,
    category: 'TVs',
    image: 'https://images.unsplash.com/photo-1719166975779-b7033a7770e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXJnZSUyMHNtYXJ0JTIwdHYlMjBtb2Rlcm4lMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc1Njc0MzY3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Stunning 4K picture quality with OLED technology and Dolby Vision.',
    images: [],
    tags: ['4k', 'smart-tv', 'oled'],
    specifications: [{ key: 'Screen Size', value: '75 inches' }],
    isFeatured: true,
  },
  // Add other products here if you like
];