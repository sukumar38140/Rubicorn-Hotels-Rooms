/* ==========================================================================
   RUBICORN HOTELS & ROOMS — CORE APPLICATION ENGINE
   Built with Vanilla JS | Real-Time Session Store | High Fidelity UI
   ========================================================================== */

// 1. Core State Configuration & Seeding
const DEFAULT_ROOMS = [
  // Ground Floor (GF) — 10 Rooms
  { id: 'G01', type: 'Standard Single', ac: false, beds: '1 Single', maxGuests: 1, price: 500, floor: 'GF', status: 'available', currentGuest: null, checkIn: null, checkOut: null, extraBeds: 0, amenities: ['Wi-Fi', 'TV', 'Hot Water', 'Wheelchair Access'], view: 'Lobby Courtyard', size: 180 },
  { id: 'G02', type: 'Standard Single', ac: true, beds: '1 Single', maxGuests: 1, price: 700, floor: 'GF', status: 'available', currentGuest: null, checkIn: null, checkOut: null, extraBeds: 0, amenities: ['Wi-Fi', 'TV', 'Hot Water', 'Wheelchair Access'], view: 'Lobby Courtyard', size: 180 },
  { id: 'G03', type: 'Standard Double', ac: false, beds: '1 Double', maxGuests: 2, price: 800, floor: 'GF', status: 'available', currentGuest: null, checkIn: null, checkOut: null, extraBeds: 0, amenities: ['Wi-Fi', 'TV', 'Hot Water'], view: 'Courtyard View', size: 240 },
  { id: 'G04', type: 'Standard Double', ac: true, beds: '1 Double', maxGuests: 2, price: 1100, floor: 'GF', status: 'available', currentGuest: null, checkIn: null, checkOut: null, extraBeds: 0, amenities: ['Wi-Fi', 'TV', 'Hot Water'], view: 'Courtyard View', size: 240 },
  { id: 'G05', type: 'Triple Economy', ac: false, beds: '1 Double + 1 Single', maxGuests: 3, price: 1100, floor: 'GF', status: 'available', currentGuest: null, checkIn: null, checkOut: null, extraBeds: 0, amenities: ['Wi-Fi', 'TV', 'Hot Water'], view: 'City View', size: 300 },
  { id: 'G06', type: 'Triple Economy', ac: true, beds: '1 Double + 1 Single', maxGuests: 3, price: 1400, floor: 'GF', status: 'available', currentGuest: null, checkIn: null, checkOut: null, extraBeds: 0, amenities: ['Wi-Fi', 'TV', 'Hot Water'], view: 'City View', size: 300 },
  { id: 'G07', type: 'Family Room', ac: false, beds: '2 Double', maxGuests: 4, price: 1500, floor: 'GF', status: 'available', currentGuest: null, checkIn: null, checkOut: null, extraBeds: 0, amenities: ['Wi-Fi', 'TV', 'Hot Water', 'In-Room Dining'], view: 'Courtyard View', size: 400 },
  { id: 'G08', type: 'Family Room', ac: true, beds: '2 Double', maxGuests: 4, price: 1900, floor: 'GF', status: 'available', currentGuest: null, checkIn: null, checkOut: null, extraBeds: 0, amenities: ['Wi-Fi', 'TV', 'Hot Water', 'In-Room Dining'], view: 'Courtyard View', size: 400 },
  { id: 'G09', type: 'Accessible Room', ac: false, beds: '1 Double', maxGuests: 2, price: 900, floor: 'GF', status: 'available', currentGuest: null, checkIn: null, checkOut: null, extraBeds: 0, amenities: ['Wi-Fi', 'TV', 'Hot Water', 'Wheelchair Access', 'Grab Bars'], view: 'Lobby Courtyard', size: 260 },
  { id: 'G10', type: 'Accessible Room', ac: true, beds: '1 Double', maxGuests: 2, price: 1200, floor: 'GF', status: 'available', currentGuest: null, checkIn: null, checkOut: null, extraBeds: 0, amenities: ['Wi-Fi', 'TV', 'Hot Water', 'Wheelchair Access', 'Grab Bars'], view: 'Lobby Courtyard', size: 260 },

  // 1st Floor (1F) — 12 Rooms
  { id: '101', type: 'Comfort Single', ac: false, beds: '1 Single', maxGuests: 1, price: 650, floor: '1F', status: 'available', currentGuest: null, checkIn: null, checkOut: null, extraBeds: 0, amenities: ['Wi-Fi', 'TV', 'Hot Water'], view: 'City Street View', size: 200 },
  { id: '102', type: 'Comfort Single', ac: true, beds: '1 Single', maxGuests: 1, price: 900, floor: '1F', status: 'available', currentGuest: null, checkIn: null, checkOut: null, extraBeds: 0, amenities: ['Wi-Fi', 'TV', 'Hot Water'], view: 'City Street View', size: 200 },
  { id: '103', type: 'Comfort Double', ac: false, beds: '1 Double', maxGuests: 2, price: 1000, floor: '1F', status: 'available', currentGuest: null, checkIn: null, checkOut: null, extraBeds: 0, amenities: ['Wi-Fi', 'TV', 'Hot Water'], view: 'Courtyard View', size: 260 },
  { id: '104', type: 'Comfort Double', ac: true, beds: '1 Double', maxGuests: 2, price: 1400, floor: '1F', status: 'available', currentGuest: null, checkIn: null, checkOut: null, extraBeds: 0, amenities: ['Wi-Fi', 'TV', 'Hot Water'], view: 'Courtyard View', size: 260 },
  { id: '105', type: 'Comfort Double', ac: false, beds: '1 Double', maxGuests: 2, price: 1000, floor: '1F', status: 'available', currentGuest: null, checkIn: null, checkOut: null, extraBeds: 0, amenities: ['Wi-Fi', 'TV', 'Hot Water'], view: 'City Street View', size: 260 },
  { id: '106', type: 'Comfort Double', ac: true, beds: '1 Double', maxGuests: 2, price: 1400, floor: '1F', status: 'available', currentGuest: null, checkIn: null, checkOut: null, extraBeds: 0, amenities: ['Wi-Fi', 'TV', 'Hot Water'], view: 'City Street View', size: 260 },
  { id: '107', type: 'Comfort Triple', ac: false, beds: '1 Double + 1 Single', maxGuests: 3, price: 1300, floor: '1F', status: 'available', currentGuest: null, checkIn: null, checkOut: null, extraBeds: 0, amenities: ['Wi-Fi', 'TV', 'Hot Water'], view: 'Courtyard View', size: 320 },
  { id: '108', type: 'Comfort Triple', ac: true, beds: '1 Double + 1 Single', maxGuests: 3, price: 1800, floor: '1F', status: 'available', currentGuest: null, checkIn: null, checkOut: null, extraBeds: 0, amenities: ['Wi-Fi', 'TV', 'Hot Water'], view: 'Courtyard View', size: 320 },
  { id: '109', type: 'Comfort Family', ac: false, beds: '2 Double', maxGuests: 4, price: 1600, floor: '1F', status: 'available', currentGuest: null, checkIn: null, checkOut: null, extraBeds: 0, amenities: ['Wi-Fi', 'TV', 'Hot Water', 'In-Room Dining'], view: 'City View', size: 420 },
  { id: '110', type: 'Comfort Family', ac: true, beds: '2 Double', maxGuests: 4, price: 2200, floor: '1F', status: 'available', currentGuest: null, checkIn: null, checkOut: null, extraBeds: 0, amenities: ['Wi-Fi', 'TV', 'Hot Water', 'In-Room Dining'], view: 'City View', size: 420 },
  { id: '111', type: 'Comfort Suite', ac: false, beds: 'King + Sofa', maxGuests: 2, price: 1800, floor: '1F', status: 'available', currentGuest: null, checkIn: null, checkOut: null, extraBeds: 0, amenities: ['Wi-Fi', 'TV', 'Hot Water', 'Mini Fridge', 'Lounge Sofa'], view: 'Lush Garden View', size: 480 },
  { id: '112', type: 'Comfort Suite', ac: true, beds: 'King + Sofa', maxGuests: 2, price: 2500, floor: '1F', status: 'available', currentGuest: null, checkIn: null, checkOut: null, extraBeds: 0, amenities: ['Wi-Fi', 'TV', 'Hot Water', 'Mini Fridge', 'Lounge Sofa'], view: 'Lush Garden View', size: 480 },

  // 2nd Floor (2F) — 12 Rooms (8 AC, 4 Non-AC to match count summary)
  { id: '201', type: 'Deluxe Single', ac: false, beds: '1 Queen', maxGuests: 1, price: 800, floor: '2F', status: 'available', currentGuest: null, checkIn: null, checkOut: null, extraBeds: 0, amenities: ['Wi-Fi', 'TV', 'Hot Water', 'Work Desk'], view: 'Garden View', size: 220 },
  { id: '202', type: 'Deluxe Single', ac: true, beds: '1 Queen', maxGuests: 1, price: 1200, floor: '2F', status: 'available', currentGuest: null, checkIn: null, checkOut: null, extraBeds: 0, amenities: ['Wi-Fi', 'TV', 'Hot Water', 'Work Desk'], view: 'Garden View', size: 220 },
  { id: '203', type: 'Deluxe Double', ac: false, beds: '1 King', maxGuests: 2, price: 1400, floor: '2F', status: 'available', currentGuest: null, checkIn: null, checkOut: null, extraBeds: 0, amenities: ['Wi-Fi', 'TV', 'Hot Water', 'Bath Tub'], view: 'City Sky View', size: 300 },
  { id: '204', type: 'Deluxe Double', ac: true, beds: '1 King', maxGuests: 2, price: 2000, floor: '2F', status: 'available', currentGuest: null, checkIn: null, checkOut: null, extraBeds: 0, amenities: ['Wi-Fi', 'TV', 'Hot Water', 'Bath Tub'], view: 'City Sky View', size: 300 },
  { id: '205', type: 'Deluxe Double', ac: false, beds: '1 King', maxGuests: 2, price: 1400, floor: '2F', status: 'available', currentGuest: null, checkIn: null, checkOut: null, extraBeds: 0, amenities: ['Wi-Fi', 'TV', 'Hot Water'], view: 'Garden View', size: 300 },
  { id: '206', type: 'Deluxe Double', ac: true, beds: '1 King', maxGuests: 2, price: 2000, floor: '2F', status: 'available', currentGuest: null, checkIn: null, checkOut: null, extraBeds: 0, amenities: ['Wi-Fi', 'TV', 'Hot Water'], view: 'Garden View', size: 300 },
  { id: '207', type: 'Deluxe Triple', ac: false, beds: 'King + Single', maxGuests: 3, price: 1800, floor: '2F', status: 'available', currentGuest: null, checkIn: null, checkOut: null, extraBeds: 0, amenities: ['Wi-Fi', 'TV', 'Hot Water', 'Balcony'], view: 'City View', size: 360 },
  { id: '208', type: 'Deluxe Triple', ac: true, beds: 'King + Single', maxGuests: 3, price: 2600, floor: '2F', status: 'available', currentGuest: null, checkIn: null, checkOut: null, extraBeds: 0, amenities: ['Wi-Fi', 'TV', 'Hot Water', 'Balcony'], view: 'City View', size: 360 },
  // Seeding 209 as AC Deluxe Family to ensure floor total is 8 AC and 4 Non-AC
  { id: '209', type: 'Deluxe Family', ac: true, beds: '2 Kings', maxGuests: 4, price: 3200, floor: '2F', status: 'available', currentGuest: null, checkIn: null, checkOut: null, extraBeds: 0, amenities: ['Wi-Fi', 'TV', 'Hot Water', 'Lounge Area'], view: 'Garden View', size: 450 },
  { id: '210', type: 'Deluxe Family', ac: true, beds: '2 Kings', maxGuests: 4, price: 3200, floor: '2F', status: 'available', currentGuest: null, checkIn: null, checkOut: null, extraBeds: 0, amenities: ['Wi-Fi', 'TV', 'Hot Water', 'Lounge Area'], view: 'Garden View', size: 450 },
  { id: '211', type: 'Deluxe Suite', ac: true, beds: 'King + Living Area', maxGuests: 2, price: 3800, floor: '2F', status: 'available', currentGuest: null, checkIn: null, checkOut: null, extraBeds: 0, amenities: ['Wi-Fi', 'TV', 'Hot Water', 'Mini Bar', 'Walk-in Closet'], view: 'Lush Garden View', size: 550 },
  { id: '212', type: 'Deluxe Suite', ac: true, beds: 'King + Living Area', maxGuests: 2, price: 3800, floor: '2F', status: 'available', currentGuest: null, checkIn: null, checkOut: null, extraBeds: 0, amenities: ['Wi-Fi', 'TV', 'Hot Water', 'Mini Bar', 'Walk-in Closet'], view: 'Lush Garden View', size: 550 },

  // 3rd Floor (3F) — 8 Rooms (All AC, Premium Tier)
  { id: '301', type: 'Premium Single', ac: true, beds: '1 King', maxGuests: 1, price: 1800, floor: '3F', status: 'available', currentGuest: null, checkIn: null, checkOut: null, extraBeds: 0, amenities: ['Wi-Fi', 'TV', 'Hot Water', 'Coffee Maker', 'Premium Bedding'], view: 'Lush Garden View', size: 280 },
  { id: '302', type: 'Premium Double', ac: true, beds: '1 King', maxGuests: 2, price: 2800, floor: '3F', status: 'available', currentGuest: null, checkIn: null, checkOut: null, extraBeds: 0, amenities: ['Wi-Fi', 'TV', 'Hot Water', 'Safe Lock', 'Lounge Armchairs'], view: 'Courtyard View', size: 340 },
  { id: '303', type: 'Premium Double', ac: true, beds: '1 King', maxGuests: 2, price: 2800, floor: '3F', status: 'available', currentGuest: null, checkIn: null, checkOut: null, extraBeds: 0, amenities: ['Wi-Fi', 'TV', 'Hot Water', 'Safe Lock', 'Lounge Armchairs'], view: 'City Sky View', size: 340 },
  { id: '304', type: 'Premium Triple', ac: true, beds: 'King + Queen', maxGuests: 3, price: 3500, floor: '3F', status: 'available', currentGuest: null, checkIn: null, checkOut: null, extraBeds: 0, amenities: ['Wi-Fi', 'TV', 'Hot Water', 'Bath Tub', 'Balcony'], view: 'Garden View', size: 400 },
  { id: '305', type: 'Premium Family', ac: true, beds: '2 Kings + 1 Single', maxGuests: 5, price: 4200, floor: '3F', status: 'available', currentGuest: null, checkIn: null, checkOut: null, extraBeds: 0, amenities: ['Wi-Fi', 'TV', 'Hot Water', 'Dining Table', '2 Bathrooms'], view: 'City View', size: 520 },
  { id: '306', type: 'Premium Suite', ac: true, beds: 'King + Lounge', maxGuests: 2, price: 5000, floor: '3F', status: 'available', currentGuest: null, checkIn: null, checkOut: null, extraBeds: 0, amenities: ['Wi-Fi', 'TV', 'Hot Water', 'Mini Bar', 'Pantry', 'Bathtub'], view: 'Lush Garden View', size: 600 },
  { id: '307', type: 'Junior Suite', ac: true, beds: 'King + Kitchenette', maxGuests: 2, price: 5500, floor: '3F', status: 'available', currentGuest: null, checkIn: null, checkOut: null, extraBeds: 0, amenities: ['Wi-Fi', 'TV', 'Hot Water', 'Kitchenette', 'Mini Fridge', 'Sofa Bed'], view: 'City Sky View', size: 650 },
  { id: '308', type: 'Temple View Suite', ac: true, beds: 'King + Balcony', maxGuests: 2, price: 6000, floor: '3F', status: 'available', currentGuest: null, checkIn: null, checkOut: null, extraBeds: 0, amenities: ['Wi-Fi', 'TV', 'Hot Water', 'Balcony', 'Temple View', 'Mini Bar', 'Luxury Robes'], view: 'Direct Temple View', size: 700 },

  // 4th Floor (4F) — 4 Rooms (All AC, Luxury Tier)
  { id: '401', type: 'Royal Suite', ac: true, beds: 'King + Lounge + Jacuzzi', maxGuests: 2, price: 8000, floor: '4F', status: 'available', currentGuest: null, checkIn: null, checkOut: null, extraBeds: 0, amenities: ['Wi-Fi', 'TV', 'Hot Water', 'Jacuzzi Tub', 'Private Lounge', 'Butler Service', 'Mini Bar'], view: 'Temple & Garden View', size: 850 },
  { id: '402', type: 'Royal Suite', ac: true, beds: 'King + Lounge + Jacuzzi', maxGuests: 2, price: 8000, floor: '4F', status: 'available', currentGuest: null, checkIn: null, checkOut: null, extraBeds: 0, amenities: ['Wi-Fi', 'TV', 'Hot Water', 'Jacuzzi Tub', 'Private Lounge', 'Butler Service', 'Mini Bar'], view: 'City Sky View', size: 850 },
  { id: '403', type: 'Executive Suite', ac: true, beds: 'King + Office + Balcony', maxGuests: 2, price: 9500, floor: '4F', status: 'available', currentGuest: null, checkIn: null, checkOut: null, extraBeds: 0, amenities: ['Wi-Fi', 'TV', 'Hot Water', 'Private Balcony', 'Executive Study Desk', 'Premium Bar', 'Massage Chair'], view: '360 City View', size: 950 },
  { id: '404', type: 'Penthouse Suite', ac: true, beds: 'King + 2nd Bedroom + Terrace', maxGuests: 4, price: 12000, floor: '4F', status: 'available', currentGuest: null, checkIn: null, checkOut: null, extraBeds: 0, amenities: ['Wi-Fi', 'TV', 'Hot Water', 'Private Rooftop Terrace', '2 Bedrooms', 'Pantry Kitchen', 'Jacuzzi'], view: 'Rooftop 360° Temple & City View', size: 1400 }
];

const FOOD_MENU = {
  breakfast: [
    { id: 'bf1', name: 'Masala Dosa + Sambar', price: 120, image: 'assets/breakfast.png', description: 'South Indian crepe filled with spiced potatoes, served with sambar and fresh chutneys.' },
    { id: 'bf2', name: 'Idli (4 pcs) + Chutney', price: 80, image: 'assets/breakfast.png', description: 'Steamed rice and lentil cakes served with tomato and coconut chutneys.' },
    { id: 'bf3', name: 'Poha / Upma', price: 70, image: 'assets/breakfast.png', description: 'Savory flattened rice flakes or semolina porridge seasoned with mustard seeds and curry leaves.' },
    { id: 'bf4', name: 'Bread Toast + Butter + Jam', price: 60, image: 'assets/breakfast.png', description: 'Crisp golden brown bread toasts served with cream butter and organic mixed fruit jam.' },
    { id: 'bf5', name: 'Aloo Paratha × 2', price: 100, image: 'assets/breakfast.png', description: 'Griddle flatbreads stuffed with spicy mashed potato filling, served with curd and pickle.' },
    { id: 'bf6', name: 'Fresh Fruit Platter', price: 150, image: 'assets/breakfast.png', description: 'Sliced seasonal fresh local fruits including papaya, pineapple, banana, and watermelon.' },
    { id: 'bf7', name: 'Hot Tea / Coffee', price: 40, image: 'assets/breakfast.png', description: 'Brewed premium filter coffee or freshly boiled cardamom tea.' }
  ],
  lunch: [
    { id: 'lh1', name: 'Veg Thali (Full)', price: 200, image: 'assets/dinner.png', description: 'Includes paneer subji, seasonal dry veg, dal fry, basmati rice, rotis, pickle, and papad.' },
    { id: 'lh2', name: 'Non-Veg Thali (Chicken)', price: 280, image: 'assets/dinner.png', description: 'Premium chicken curry, dry veg, dal fry, basmati rice, butter rotis, raita, and sweet dessert.' },
    { id: 'lh3', name: 'Biryani (Veg / Chicken)', price: 250, image: 'assets/dinner.png', description: 'Fragrant basmati rice layered with aromatic spices and marinated vegetables or tender chicken.' },
    { id: 'lh4', name: 'Chapati × 4 + Dal + Rice', price: 160, image: 'assets/dinner.png', description: 'Comfort lunch platter of home-style whole wheat rotis, dal tadka, and plain rice.' }
  ],
  dinner: [
    { id: 'dn1', name: 'South Indian Meals (Full)', price: 180, image: 'assets/dinner.png', description: 'Traditional boiled rice, sambar, rasam, kootu, poriyal, buttermilk, and appalam.' },
    { id: 'dn2', name: 'Paneer Butter Masala + Naan', price: 240, image: 'assets/dinner.png', description: 'Creamy cottage cheese curry served with two hot buttered tandoori naans.' },
    { id: 'dn3', name: 'Chicken Curry + Rice + Roti', price: 300, image: 'assets/dinner.png', description: 'Spiced homestyle chicken curry served with steamed basmati rice and whole wheat rotis.' },
    { id: 'dn4', name: 'Veg Fried Rice + Manchurian', price: 200, image: 'assets/dinner.png', description: 'Indo-Chinese style wok-tossed basmati rice paired with savory vegetable Manchurian balls.' }
  ],
  beverages: [
    { id: 'bv1', name: 'Mineral Water (1 L)', price: 30, image: 'assets/hero.png', description: 'Chilled packaged pure drinking mineral water.' },
    { id: 'bv2', name: 'Fresh Lime Soda', price: 60, image: 'assets/hero.png', description: 'Fizzy carbonated water mixed with fresh lime juice, salt, or sugar.' },
    { id: 'bv3', name: 'Cold Coffee', price: 80, image: 'assets/hero.png', description: 'Rich blended espresso shake topped with vanilla ice cream.' },
    { id: 'bv4', name: 'Mango Lassi', price: 70, image: 'assets/hero.png', description: 'Thick churned sweet yogurt drink flavored with fresh Alphonso mango pulp.' },
    { id: 'bv5', name: 'Soft Drinks (Coke / Sprite)', price: 50, image: 'assets/hero.png', description: 'Chilled 330ml canned carbonated soft drinks.' }
  ]
};

const GEMINI_IMAGE_PROMPTS = {
  'GF_non_ac': 'Budget hotel room India, ceiling fan, clean and bright, single/double bed, minimal decor, natural ventilation, natural light',
  'GF_ac': 'Standard air-conditioned hotel room India, clean white walls, split AC unit visible, single/double bed, bright and tidy',
  '1F_non_ac': 'Comfortable non-AC hotel room India, ceiling fan, fresh white linens, window with curtains, tidy and welcoming',
  '1F_ac': 'Comfortable mid-range air-conditioned hotel room India, wall AC, fresh white linens, warm lighting, clean interior',
  '2F_non_ac': 'Deluxe non-AC hotel room, large windows, ceiling fan, king bed, tasteful decor, airy and bright',
  '2F_ac': 'Deluxe air-conditioned hotel room, modern interior, king size bed, tasteful decor, warm yellow-white lighting, split AC unit',
  '3F_ac': 'Premium air-conditioned hotel suite interior, elegant decor, king bed, sitting area, warm luxury lighting, 4-star quality',
  '4F_ac': 'Royal penthouse air-conditioned hotel suite, opulent interior, panoramic city view, king bed, chandelier, 5-star luxury India',
  'temple_view': 'Hotel balcony room with view of ancient Hindu temple at sunrise, spiritual ambiance, luxury AC room',
  'extra_bed_ac': 'Hotel premium rollaway extra bed with crisp white sheets, air-conditioned room ambiance, top-down view',
  'extra_bed_non_ac': 'Hotel rollaway extra bed with crisp white sheets and pillow, fan visible, top-down view, clean and fresh',
  'building': 'Simple flat-design hotel building cross-section showing 5 floors, labeled Ground to 4th Floor, luxury boutique style, warm tones',
  'hero': 'Aerial view of a luxury boutique heritage hotel at golden hour, India, warm amber tones, lush garden courtyard, photorealistic',
  'breakfast': 'South Indian hotel breakfast spread, idli dosa sambar, banana leaf, warm lighting, appetizing',
  'dinner': 'Indian hotel room service dinner tray, rice curry naan, silver cover, warm lighting, restaurant quality'
};

const FLOOR_DETAILS = {
  'GF': { name: 'Ground Floor', tagline: 'Lobby-level access, ideal for elderly guests and pilgrims.', count: 10, start: 500, features: ['Wheelchair accessibility (G09, G10)', 'Close to reception lobby', 'Quick garden access'] },
  '1F': { name: '1st Floor', tagline: 'Comfort & economy. Ideal for budget-conscious families.', count: 12, start: 650, features: ['Cross-ventilated windows', 'Quiet corridors', 'Family interconnecting layout options'] },
  '2F': { name: '2nd Floor', tagline: 'Deluxe comfort rooms with premium fittings and larger layouts.', count: 12, start: 800, features: ['Deluxe suites availability', 'Elevated garden view balconies', 'Spacious layouts'] },
  '3F': { name: '3rd Floor', tagline: 'Fully Air-Conditioned Premium floor with iconic landmarks view.', count: 8, start: 1800, features: ['100% Air-conditioned environment', 'Famous Temple View Suite (Room 308)', 'Premium room amenities kit'] },
  '4F': { name: '4th Floor', tagline: 'Top-tier luxury penthouses with private rooftop terraces.', count: 4, start: 8000, features: ['Jacuzzis in Royal Suites', 'Private terrace balcony with 360° views', 'Personalized butler service on call'] }
};

// Global Store Instance
window.RubicornState = {
  rooms: [],
  bookings: [],
  guests: [],
  currentBooking: {
    checkIn: '',
    checkOut: '',
    durationHours: 24,
    guestsCount: 1,
    roomType: 'All',
    roomId: null,
    extraBeds: 0,
    addons: [],
    guestInfo: {
      primary: {},
      additional: [],
      specialRequests: ''
    },
    document: {
      type: 'Aadhaar',
      uploads: []
    },
    food: [],
    coupon: null,
    paymentMethod: 'card'
  },
  adminLoggedIn: false,
  userRole: null
};

// State persistence
function loadStateFromStorage() {
  const saved = localStorage.getItem('RUBICORN_STATE_STORE');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      window.RubicornState.rooms = parsed.rooms || [];
      window.RubicornState.bookings = parsed.bookings || [];
      window.RubicornState.guests = parsed.guests || [];
      window.RubicornState.adminLoggedIn = parsed.adminLoggedIn || false;
      window.RubicornState.userRole = parsed.userRole || null;
      if (parsed.currentBooking) {
        window.RubicornState.currentBooking = parsed.currentBooking;
      }
      
      // Keep structural updates in case seed data template changed
      if (window.RubicornState.rooms.length !== DEFAULT_ROOMS.length) {
        window.RubicornState.rooms = JSON.parse(JSON.stringify(DEFAULT_ROOMS));
        saveStateToStorage();
      }
    } catch (e) {
      resetStateStore();
    }
  } else {
    resetStateStore();
  }
}

function saveStateToStorage() {
  localStorage.setItem('RUBICORN_STATE_STORE', JSON.stringify({
    rooms: window.RubicornState.rooms,
    bookings: window.RubicornState.bookings,
    guests: window.RubicornState.guests,
    adminLoggedIn: window.RubicornState.adminLoggedIn,
    userRole: window.RubicornState.userRole,
    currentBooking: window.RubicornState.currentBooking
  }));
}

function resetStateStore() {
  window.RubicornState.rooms = JSON.parse(JSON.stringify(DEFAULT_ROOMS));
  window.RubicornState.bookings = [];
  window.RubicornState.guests = [];
  window.RubicornState.adminLoggedIn = false;
  window.RubicornState.userRole = null;
  window.RubicornState.currentBooking = {
    checkIn: '',
    checkOut: '',
    durationHours: 24,
    guestsCount: 1,
    roomType: 'All',
    roomId: null,
    extraBeds: 0,
    addons: [],
    guestInfo: {
      primary: {},
      additional: [],
      specialRequests: ''
    },
    document: {
      type: 'Aadhaar',
      uploads: []
    },
    food: [],
    coupon: null,
    paymentMethod: 'card'
  };
  saveStateToStorage();
}

// Helper utility for Date calculation
function calculateNights(checkIn, checkOut) {
  if (!checkIn || !checkOut) return 1;
  const inDate = new Date(checkIn);
  const outDate = new Date(checkOut);
  const diffTime = Math.abs(outDate - inDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays > 0 ? diffDays : 1;
}

function calculateCheckoutDate(checkInDate, durationHours) {
  if (!checkInDate) return '';
  const date = new Date(checkInDate);
  if (parseInt(durationHours) === 24) {
    date.setDate(date.getDate() + 1);
  }
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function getFormattedDate(offsetDays = 0) {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// 2. Client Side router
const routes = {
  '/': renderLanding,
  '/rooms': renderRooms,
  '/rooms/:id': renderRoomDetail,
  '/floors': renderFloorsPage,
  '/amenities': renderAmenitiesPage,
  '/about': renderAboutPage,
  '/contact': renderContactPage,
  '/booking/step-1': () => renderBookingWizard(1),
  '/booking/step-2': () => renderBookingWizard(2),
  '/booking/step-3': () => renderBookingWizard(3),
  '/booking/step-4': () => renderBookingWizard(4),
  '/booking/step-5': () => renderBookingWizard(5),
  '/booking/confirmed': renderConfirmed,
  '/admin': renderAdminLogin,
  '/admin/dashboard': () => renderAdminDashboard('dashboard'),
  '/admin/floors': () => renderAdminDashboard('floors'),
  '/admin/bookings': () => renderAdminDashboard('bookings'),
  '/admin/guests': () => renderAdminDashboard('guests'),
  '/admin/reports': () => renderAdminDashboard('reports')
};

function router() {
  const rawHash = window.location.hash || '#/';
  
  // Stagger mobile menu close on route change
  document.getElementById('mobile-menu').classList.remove('open');
  document.getElementById('menu-toggle').classList.remove('open');
  
  const cleanHash = rawHash.replace(/^#/, '');
  const hashPathOnly = cleanHash.split('?')[0];
  
  // Match path variables e.g. /rooms/:id
  let handler = null;
  let params = {};
  
  for (const path in routes) {
    const routeParts = path.split('/');
    const hashParts = hashPathOnly.split('/');
    
    if (routeParts.length === hashParts.length) {
      let match = true;
      let tempParams = {};
      
      for (let i = 0; i < routeParts.length; i++) {
        if (routeParts[i].startsWith(':')) {
          const paramName = routeParts[i].substring(1);
          tempParams[paramName] = hashParts[i];
        } else if (routeParts[i] !== hashParts[i]) {
          match = false;
          break;
        }
      }
      
      if (match) {
        handler = routes[path];
        params = tempParams;
        break;
      }
    }
  }
  
  // Update nav item active status
  updateNavActiveLinks(cleanHash);
  
  const appContainer = document.getElementById('app');
  appContainer.innerHTML = '';
  window.scrollTo(0, 0);
  
  if (handler) {
    // Check Admin authorization rules
    if (hashPathOnly.startsWith('/admin/') && !window.RubicornState.adminLoggedIn) {
      window.location.hash = '#/admin';
      showToast('Unauthorized. Please log in first.', 'error');
      return;
    }
    
    // Inject and animate page container
    const viewElement = document.createElement('div');
    viewElement.className = 'fade-in-up-anim';
    appContainer.appendChild(viewElement);
    
    handler(viewElement, params);
  } else {
    // 404 fallback
    appContainer.innerHTML = `
      <div class="container section-padding" style="text-align: center;">
        <h1 style="font-size: 4rem; margin-bottom: 1rem;">404</h1>
        <h2 style="font-family: var(--font-sans); margin-bottom: 2rem;">Luxury Stay Not Found</h2>
        <p style="margin-bottom: 2rem;">We apologize, but the page you are looking for does not exist.</p>
        <a href="#/" class="btn-book-now">Return Home</a>
      </div>
    `;
  }
}

function updateNavActiveLinks(currentHash) {
  const navItems = document.querySelectorAll('.nav-item, .mobile-nav-item');
  const cleanCurrent = currentHash.split('?')[0];

  navItems.forEach(item => {
    item.classList.remove('active');
    
    const href = item.getAttribute('href');
    if (href) {
      const cleanHref = href.replace(/^#/, '').split('?')[0];
      if (cleanHref === cleanCurrent) {
        item.classList.add('active');
      } else if (cleanCurrent === '/' && cleanHref === '') {
        item.classList.add('active');
      }
    }
  });
}

// 3. Gemini Image Loader Simulation
const generatedImageCache = {};

function mountGeminiImage(container, imageKey, altText, customClass = '') {
  container.className = `shimmer-container ${container.className || ''}`;
  
  if (!container.classList.contains('hero-bg-container')) {
    container.style.position = 'relative';
  }
  
  const imgElement = document.createElement('img');
  imgElement.className = `${customClass} loading`;
  imgElement.alt = altText;
  imgElement.style.opacity = '0';
  imgElement.style.transition = 'opacity 0.6s ease-in-out';
  
  // Resolve image paths
  let resolvedSrc = 'assets/room_standard.png';
  if (imageKey === 'hero') resolvedSrc = 'assets/hero.png';
  else if (imageKey === 'building') resolvedSrc = 'assets/building.png';
  else if (imageKey.includes('breakfast')) resolvedSrc = 'assets/breakfast.png';
  else if (imageKey.includes('dinner')) resolvedSrc = 'assets/dinner.png';
  else if (imageKey.includes('view') || imageKey === '3F_ac' || imageKey === '4F_ac') resolvedSrc = 'assets/room_luxury.png';
  
  // Override for temple view room
  if (imageKey.includes('temple_view')) resolvedSrc = 'assets/room_temple.png';
  
  imgElement.src = resolvedSrc;
  
  container.appendChild(imgElement);
  
  // Cache check or timeout simulate on component mount
  if (generatedImageCache[imageKey]) {
    container.classList.remove('shimmer-container');
    imgElement.style.opacity = '1';
    imgElement.classList.remove('loading');
  } else {
    setTimeout(() => {
      generatedImageCache[imageKey] = true;
      container.classList.remove('shimmer-container');
      imgElement.style.opacity = '1';
      imgElement.classList.remove('loading');
    }, 1200 + Math.random() * 800); // 1.2s - 2.0s delay
  }
}

// 4. Page Rendering Components

// A. Landing Page View
function renderLanding(container) {
  container.innerHTML = `
    <!-- Hero Banner -->
    <section class="hero">
      <div class="hero-bg-container" id="hero-bg-mount"></div>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <span class="hero-subtitle-brand">Rubicorn Hotels & Rooms</span>
        <h1 class="hero-title gold-gradient-text">Where Every Stay Tells a Story</h1>
        <div class="mobile-hero-image-wrap" id="mobile-hero-img-mount"></div>
        <p class="hero-tagline">City's Premier Lodging for Tourists, Pilgrims & Business Travelers</p>
        <p class="hero-desc">Experience our signature luxury comfort blends, nestled at the center of the cultural district and just steps away from sacred heritage temples.</p>
        
        <!-- Search widget -->
        <div class="search-widget" id="search-widget-form">
          <div class="search-field">
            <label for="search-checkin">Check-In</label>
            <input type="date" id="search-checkin" value="${getFormattedDate(0)}" min="${getFormattedDate(0)}">
          </div>
          <div class="search-field">
            <label for="search-duration">Duration</label>
            <select id="search-duration">
              <option value="24">24 Hours stay (Full Day)</option>
              <option value="12">12 Hours stay (Half Day)</option>
            </select>
          </div>
          <div class="search-field">
            <label for="search-guests">Guests</label>
            <select id="search-guests">
              ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => `<option value="${n}">${n} Guest${n > 1 ? 's' : ''}</option>`).join('')}
            </select>
          </div>
          <div class="search-field">
            <label for="search-type">Room Type</label>
            <select id="search-type">
              <option value="All">All Rooms</option>
              <option value="Single">Single Bed</option>
              <option value="Double">Double Bed</option>
              <option value="Suite">Suites</option>
              <option value="Deluxe">Deluxe</option>
            </select>
          </div>
          <button id="btn-hero-search"><i class="fa-solid fa-magnifying-glass"></i> Search Rooms</button>
        </div>
      </div>
    </section>

    <!-- Featured Rooms Carousel -->
    <section class="section-padding" style="background: #FFFFFF; border-y: 1px solid var(--color-card-border);">
      <div class="container">
        <div class="section-title-wrapper">
          <span class="section-subtitle">Exquisite Discoveries</span>
          <h2 class="section-title">Our Featured Suites</h2>
        </div>
        
        <div class="carousel-outer">
          <button class="carousel-nav-btn carousel-prev" id="car-prev-btn"><i class="fa-solid fa-chevron-left"></i></button>
          <div class="carousel-track" id="featured-carousel-track"></div>
          <button class="carousel-nav-btn carousel-next" id="car-next-btn"><i class="fa-solid fa-chevron-right"></i></button>
        </div>
      </div>
    </section>

    <!-- Why Rubicorn Strip -->
    <section class="section-padding container" id="why-rubicorn-section">
      <div class="section-title-wrapper">
        <span class="section-subtitle">Amenities & Location</span>
        <h2 class="section-title">Why Stay at Rubicorn?</h2>
      </div>
      <div class="features-grid">
        <div class="feature-card">
          <span class="feature-icon">🏛️</span>
          <h3>Heritage Location</h3>
          <p>Steps away from the city's sacred temples, heritage cultural spots, and main transit railway hubs.</p>
        </div>
        <div class="feature-card">
          <span class="feature-icon">🛏️</span>
          <h3>Premium Rooms</h3>
          <p>Fully air-conditioned luxury bedding, modern baths, 24x7 service, and tailored toiletries.</p>
        </div>
        <div class="feature-card">
          <span class="feature-icon">🍽️</span>
          <h3>In-Room Dining</h3>
          <p>Curated vegetarian and non-vegetarian menus freshly prepared and delivered straight to your door.</p>
        </div>
        <div class="feature-card">
          <span class="feature-icon">🔐</span>
          <h3>Secure Booking</h3>
          <p>Instant booking confirmations with digital ID audits. Fully secure payment options.</p>
        </div>
      </div>
    </section>

    <!-- Interactive Floor elevation preview -->
    <section class="section-padding container" id="floor-preview-section">
      <div class="section-title-wrapper">
        <span class="section-subtitle">Hotel Map Overview</span>
        <h2 class="section-title">5 Floors of Comfort</h2>
      </div>
      
      <div class="floor-preview-wrapper">
        <div class="floor-visual-container" id="floor-visual-mount">
          <div class="floor-layers">
            <div class="floor-row-trigger" data-floor="4F"></div>
            <div class="floor-row-trigger" data-floor="3F"></div>
            <div class="floor-row-trigger active" data-floor="2F"></div>
            <div class="floor-row-trigger" data-floor="1F"></div>
            <div class="floor-row-trigger" data-floor="GF"></div>
          </div>
        </div>
        
        <div class="floor-details-info" id="floor-details-card"></div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="section-padding container">
      <div class="section-title-wrapper">
        <span class="section-subtitle">Reviews & Experiences</span>
        <h2 class="section-title">What Our Guests Say</h2>
      </div>
      <div class="testimonials-grid">
        <div class="testimonial-card">
          <div class="stars">
            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
          </div>
          <p class="testimonial-text">"Our stay in the Temple View Suite was magical. Waking up to the bells of Shiva Mandir from the balcony was an unforgettable experience. The rooms are clean and check-in was seamless."</p>
          <div class="client-profile">
            <img class="client-avatar" src="assets/room_standard.png" alt="Avatar Pilgrim">
            <div class="client-info">
              <h4>Ramakrishnan Iyer</h4>
              <span>Pilgrim Visitor, Chennai</span>
            </div>
          </div>
        </div>
        
        <div class="testimonial-card">
          <div class="stars">
            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
          </div>
          <p class="testimonial-text">"The Penthouse Suite has the best view in the city. Private rooftop terrace, excellent room service, and very premium bath. Ideal lodging for families wanting luxury in town."</p>
          <div class="client-profile">
            <img class="client-avatar" src="assets/room_luxury.png" alt="Avatar Tourist">
            <div class="client-info">
              <h4>Anjali & Vikram</h4>
              <span>Tourist Family, Mumbai</span>
            </div>
          </div>
        </div>

        <div class="testimonial-card">
          <div class="stars">
            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i>
          </div>
          <p class="testimonial-text">"Rubicorn provides fast Wi-Fi, elegant desk settings, and delicious vegetarian options in-room. Extremely convenient and close to the main business centers."</p>
          <div class="client-profile">
            <img class="client-avatar" src="assets/room_standard.png" alt="Avatar Business">
            <div class="client-info">
              <h4>Devendra Mehta</h4>
              <span>Business Traveler, Ahmedabad</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="section-padding container" id="about-section" style="border-top: 1px solid var(--color-card-border);">
      <div class="about-wrapper">
        <div class="about-text">
          <span class="section-subtitle">Heritage Story</span>
          <h3>About Rubicorn Hotels</h3>
          <p>Rubicorn Hotels & Rooms is the city's finest lodging destination, born from a vision to offer world-class hospitality to every traveler who walks through our doors. Situated at the heart of the city — minutes from its most sacred temples, vibrant markets, and key transit points — Rubicorn has been the trusted home of pilgrims, tourists, and business travelers alike.</p>
          <p>We believe that hospitality isn't about luxury alone — it's about making every guest feel comfortable and at home. From our budget-friendly ground floor rooms to our exclusive rooftop Royal Suites, every corner of Rubicorn carries our promise: a stay you'll remember.</p>
          
          <div class="about-info-block">
            <blockquote>"Where luxury meets tradition. We guarantee comfort, service and peace of mind."</blockquote>
          </div>
        </div>
        <div>
          <div class="floor-visual-container" id="about-img-mount"></div>
        </div>
      </div>
    </section>

    <!-- Contact & Location -->
    <section class="section-padding container" id="contact-section" style="border-top: 1px solid var(--color-card-border);">
      <div class="contact-wrapper">
        <div class="contact-card-info">
          <h3>Contact & Location</h3>
          <ul>
            <li><i class="fa-solid fa-location-dot"></i> 12, Karakambadi Road, Tirupati, Andhra Pradesh - 517507, India</li>
            <li><i class="fa-solid fa-phone"></i> +91 98765 43210</li>
            <li><i class="fa-solid fa-envelope"></i> reservations@rubicornhotels.com</li>
            <li><i class="fa-solid fa-clock"></i> Check-in: 12:00 PM | Check-out: 11:00 AM</li>
          </ul>
          <div class="contact-map-container" style="margin-top: 2rem; border-radius: var(--radius-md); overflow: hidden; border: 1px solid var(--color-card-border);">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.5186641575846!2d79.4192083!3d13.6268889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4f46f4eb1f8d95%3A0xe54e60155b40cfeb!2sTirupati%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin" width="100%" height="220" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        
        <div class="contact-form-wrapper">
          <h3>Write to Us</h3>
          <input type="text" placeholder="Your Full Name">
          <input type="email" placeholder="Your Email Address">
          <textarea rows="4" placeholder="Your Message or Request Details"></textarea>
          <button onclick="alert('Message sent successfully! In demo mode, our support agent will reach out in a few minutes.')">Send Message</button>
        </div>
      </div>
    </section>
  `;

  // Mount Gemini Assets
  mountGeminiImage(document.getElementById('hero-bg-mount'), 'hero', 'Hero Banner BG', 'hero-bg-image');
  mountGeminiImage(document.getElementById('mobile-hero-img-mount'), 'hero', 'Hotel Building View', 'mobile-hero-img');
  mountGeminiImage(document.getElementById('floor-visual-mount'), 'building', 'Hotel building visual', 'floor-illustration-img');
  mountGeminiImage(document.getElementById('about-img-mount'), '3F_ac', 'About image', 'floor-illustration-img');

  // Hero Search Trigger
  document.getElementById('btn-hero-search').onclick = () => {
    const checkin = document.getElementById('search-checkin').value;
    const duration = parseInt(document.getElementById('search-duration').value);
    const guests = parseInt(document.getElementById('search-guests').value);
    const type = document.getElementById('search-type').value;
    
    // Save to State Booking form
    window.RubicornState.currentBooking.checkIn = checkin;
    window.RubicornState.currentBooking.durationHours = duration;
    window.RubicornState.currentBooking.checkOut = calculateCheckoutDate(checkin, duration);
    window.RubicornState.currentBooking.guestsCount = guests;
    window.RubicornState.currentBooking.roomType = type;
    
    // Redirect to rooms list
    window.location.hash = `#/rooms`;
  };

  // Carousel Controller
  const featuredIds = ['308', '404', '401', '306', '211', '112'];
  const carouselTrack = document.getElementById('featured-carousel-track');
  
  featuredIds.forEach(id => {
    const room = window.RubicornState.rooms.find(r => r.id === id);
    if (room) {
      const card = document.createElement('div');
      card.className = 'room-card';
      card.style.minWidth = '300px';
      card.style.flex = '0 0 300px';
      card.innerHTML = `
        <div class="room-card-img-wrapper" id="car-img-${room.id}"></div>
        <div class="room-card-content">
          <span class="room-card-floor">${room.floor} Floor — Room ${room.id}</span>
          <h3 class="room-card-title">${room.type}</h3>
          <div class="room-card-specs">
            <span><i class="fa-solid fa-bed"></i> ${room.beds}</span>
            <span><i class="fa-solid fa-users"></i> Max ${room.maxGuests}</span>
          </div>
          <div class="room-card-footer">
            <div class="room-card-price">
              <span class="amount">₹${room.price.toLocaleString('en-IN')}</span>
              <span class="unit">per night</span>
            </div>
            <a href="#/rooms/${room.id}" class="btn-card-action">View details</a>
          </div>
        </div>
      `;
      carouselTrack.appendChild(card);
      
      const imgKey = room.id === '308' ? 'temple_view' : (room.floor === '4F' ? '4F_ac' : '3F_ac');
      mountGeminiImage(card.querySelector(`#car-img-${room.id}`), imgKey, room.type, 'room-card-img');
    }
  });

  // Carousel Navigation scroll
  let carouselScrollPos = 0;
  const prevBtn = document.getElementById('car-prev-btn');
  const nextBtn = document.getElementById('car-next-btn');

  nextBtn.onclick = () => {
    const maxScroll = carouselTrack.scrollWidth - carouselTrack.clientWidth;
    carouselScrollPos = Math.min(carouselScrollPos + 320, maxScroll);
    carouselTrack.style.transform = `translateX(-${carouselScrollPos}px)`;
  };

  prevBtn.onclick = () => {
    carouselScrollPos = Math.max(carouselScrollPos - 320, 0);
    carouselTrack.style.transform = `translateX(-${carouselScrollPos}px)`;
  };

  // Floor elevation selector UI triggers
  const triggers = document.querySelectorAll('.floor-row-trigger');
  triggers.forEach(t => {
    t.onclick = () => {
      triggers.forEach(tr => tr.classList.remove('active'));
      t.classList.add('active');
      renderFloorCard(t.getAttribute('data-floor'));
    };
  });

  // Render initial active floor card
  renderFloorCard('2F');
}

function renderFloorCard(floorCode) {
  const info = FLOOR_DETAILS[floorCode];
  const card = document.getElementById('floor-details-card');
  card.innerHTML = `
    <h3>${info.name}</h3>
    <span class="floor-tagline-text">"${info.tagline}"</span>
    
    <div class="floor-stat-pills">
      <span class="stat-pill"><i class="fa-solid fa-door-open gold-color"></i> ${info.count} Total Rooms</span>
      <span class="stat-pill"><i class="fa-solid fa-tags gold-color"></i> From ₹${info.start}/night</span>
    </div>

    <ul class="floor-features-list">
      ${info.features.map(f => `<li><i class="fa-regular fa-circle-check"></i> ${f}</li>`).join('')}
    </ul>

    <button class="btn-floor-explore" id="btn-explore-flr">Browse Floor Rooms</button>
  `;

  document.getElementById('btn-explore-flr').onclick = () => {
    // Set floor filter and redirect
    window.location.hash = `#/rooms?floor=${floorCode}`;
  };
}

function renderFloorsPage(container) {
  container.innerHTML = `
    <div class="container section-padding">
      <div class="section-title-wrapper">
        <span class="section-subtitle">Hotel Map Overview</span>
        <h2 class="section-title">5 Floors of Comfort</h2>
        <p class="section-desc" style="max-width: 600px; margin: 0 auto 2rem;">Explore rooms by floor and browse our layout from ground floor lobby to penthouse suites.</p>
      </div>
      
      <div class="floor-preview-wrapper" style="margin-top: 3rem;">
        <div class="floor-visual-container" id="floor-visual-mount">
          <div class="floor-layers">
            <div class="floor-row-trigger" data-floor="4F"></div>
            <div class="floor-row-trigger" data-floor="3F"></div>
            <div class="floor-row-trigger active" data-floor="2F"></div>
            <div class="floor-row-trigger" data-floor="1F"></div>
            <div class="floor-row-trigger" data-floor="GF"></div>
          </div>
        </div>
        
        <div class="floor-details-info" id="floor-details-card"></div>
      </div>
    </div>
  `;

  // Mount building visual
  mountGeminiImage(document.getElementById('floor-visual-mount'), 'building', 'Hotel building visual', 'floor-illustration-img');

  // Floor elevation selector UI triggers
  const triggers = container.querySelectorAll('.floor-row-trigger');
  triggers.forEach(t => {
    t.onclick = () => {
      triggers.forEach(tr => tr.classList.remove('active'));
      t.classList.add('active');
      renderFloorCard(t.getAttribute('data-floor'));
    };
  });

  // Render initial active floor card
  renderFloorCard('2F');
}

function renderAmenitiesPage(container) {
  container.innerHTML = `
    <div class="container section-padding">
      <div class="section-title-wrapper">
        <span class="section-subtitle">Exquisite Facilities</span>
        <h2 class="section-title">World-Class Amenities</h2>
        <p class="section-desc" style="max-width: 600px; margin: 0 auto 2rem;">Every detail of your stay at Rubicorn is designed to offer maximum comfort, service, and convenience.</p>
      </div>

      <div class="amenities-showcase-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2.5rem; margin-top: 3rem;">
        <div class="amenity-detail-card" style="background: var(--color-card-bg); border: 1px solid var(--color-card-border); border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-card); transition: var(--transition-smooth);">
          <div id="amenity-dining-img" style="height: 200px; width: 100%;"></div>
          <div style="padding: 2rem;">
            <h3 style="font-size: 1.4rem; color: var(--color-gold); margin-bottom: 0.75rem;"><i class="fa-solid fa-utensils"></i> In-Room Dining</h3>
            <p style="font-size: 0.95rem; color: var(--color-ivory-dim);">Enjoy freshly prepared vegetarian and non-vegetarian local cuisines. From traditional South Indian filter coffee and dosas to continental spreads, served hot to your room.</p>
          </div>
        </div>

        <div class="amenity-detail-card" style="background: var(--color-card-bg); border: 1px solid var(--color-card-border); border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-card); transition: var(--transition-smooth);">
          <div id="amenity-temple-img" style="height: 200px; width: 100%;"></div>
          <div style="padding: 2rem;">
            <h3 style="font-size: 1.4rem; color: var(--color-gold); margin-bottom: 0.75rem;"><i class="fa-solid fa-gopuram"></i> Pilgrim Support & Tours</h3>
            <p style="font-size: 0.95rem; color: var(--color-ivory-dim);">We offer dedicated travel assistance, guided temple tour bookings, local transport coordination, and early-morning prasadam arrangements for spiritual visits.</p>
          </div>
        </div>

        <div class="amenity-detail-card" style="background: var(--color-card-bg); border: 1px solid var(--color-card-border); border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-card); transition: var(--transition-smooth);">
          <div id="amenity-wifi-img" style="height: 200px; width: 100%;"></div>
          <div style="padding: 2rem;">
            <h3 style="font-size: 1.4rem; color: var(--color-gold); margin-bottom: 0.75rem;"><i class="fa-solid fa-wifi"></i> High-Speed Connectivity</h3>
            <p style="font-size: 0.95rem; color: var(--color-ivory-dim);">Stay connected with our complimentary high-speed optical fiber Wi-Fi throughout the hotel premises. Perfect for business travelers and keeping in touch with family.</p>
          </div>
        </div>

        <div class="amenity-detail-card" style="background: var(--color-card-bg); border: 1px solid var(--color-card-border); border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-card); transition: var(--transition-smooth);">
          <div id="amenity-services-img" style="height: 200px; width: 100%;"></div>
          <div style="padding: 2rem;">
            <h3 style="font-size: 1.4rem; color: var(--color-gold); margin-bottom: 0.75rem;"><i class="fa-solid fa-bell-concierge"></i> 24x7 Butler & Security</h3>
            <p style="font-size: 0.95rem; color: var(--color-ivory-dim);">Round-the-clock front desk help, room service, laundry, secure baggage storage, and CCTV security parameters to ensure complete peace of mind.</p>
          </div>
        </div>
      </div>
    </div>
  `;

  // Mount images for amenities page
  mountGeminiImage(document.getElementById('amenity-dining-img'), 'breakfast', 'Gourmet Dining', 'hero-bg-image');
  mountGeminiImage(document.getElementById('amenity-temple-img'), 'temple_view_room', 'Temple View Guidance', 'hero-bg-image');
  mountGeminiImage(document.getElementById('amenity-wifi-img'), 'hero', 'Business Center Wifi', 'hero-bg-image');
  mountGeminiImage(document.getElementById('amenity-services-img'), '3F_ac', '24x7 Concierge Service', 'hero-bg-image');
}

function renderAboutPage(container) {
  container.innerHTML = `
    <div class="container section-padding">
      <div class="section-title-wrapper">
        <span class="section-subtitle">Heritage Story</span>
        <h2 class="section-title">About Rubicorn Hotels</h2>
      </div>

      <div class="about-wrapper" style="margin-top: 3rem;">
        <div class="about-text">
          <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">Rubicorn Hotels & Rooms is Tirupati's finest lodging destination, born from a vision to offer world-class hospitality to every traveler who walks through our doors. Situated at the heart of the city — minutes from its most sacred temples, vibrant markets, and key transit points — Rubicorn has been the trusted home of pilgrims, tourists, and business travelers alike.</p>
          <p style="font-size: 1.05rem; line-height: 1.7; margin-bottom: 1.5rem; color: var(--color-ivory-dim);">We believe that hospitality isn't about luxury alone — it's about making every guest feel comfortable and at home. From our budget-friendly ground floor rooms to our exclusive rooftop Royal Suites, every corner of Rubicorn carries our promise: a stay you'll remember.</p>
          
          <div class="about-info-block" style="margin-top: 2rem;">
            <blockquote style="font-family: var(--font-serif); font-style: italic; font-size: 1.25rem; color: var(--color-gold-light); border-left: 3px solid var(--color-gold); padding-left: 1.5rem; margin: 1.5rem 0;">"Where luxury meets tradition. We guarantee comfort, service and peace of mind."</blockquote>
          </div>

          <div style="margin-top: 3rem; display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
            <div>
              <h4 style="color: var(--color-gold); font-size: 1.2rem; margin-bottom: 0.5rem;"><i class="fa-solid fa-hands-praying"></i> Hospitality First</h4>
              <p style="font-size: 0.9rem; color: var(--color-ivory-dim);">We cater specifically to the comfort of families, elderly pilgrims, and international travelers visiting the holy city.</p>
            </div>
            <div>
              <h4 style="color: var(--color-gold); font-size: 1.2rem; margin-bottom: 0.5rem;"><i class="fa-solid fa-clock-rotate-left"></i> Flexible Stay Durations</h4>
              <p style="font-size: 0.9rem; color: var(--color-ivory-dim);">Our unique 12-hour (Half Day) and 24-hour (Full Day) stay models allow travelers to optimize their transit times.</p>
            </div>
          </div>
        </div>
        <div>
          <div class="floor-visual-container" id="about-img-mount"></div>
        </div>
      </div>
    </div>
  `;

  // Mount image
  mountGeminiImage(document.getElementById('about-img-mount'), '3F_ac', 'About image', 'floor-illustration-img');
}

function renderContactPage(container) {
  container.innerHTML = `
    <div class="container section-padding">
      <div class="section-title-wrapper">
        <span class="section-subtitle">Reach Out</span>
        <h2 class="section-title">Contact & Location</h2>
        <p class="section-desc" style="max-width: 600px; margin: 0 auto 2rem;">Have questions about booking? Or need assistance planning your temple tour? Our team is available 24/7.</p>
      </div>

      <div class="contact-wrapper" style="margin-top: 3rem;">
        <div class="contact-card-info">
          <h3>Rubicorn Tirupati</h3>
          <ul style="list-style: none; margin-bottom: 2rem; padding: 0;">
            <li style="display: flex; gap: 1.25rem; align-items: flex-start; margin-bottom: 1.25rem; font-size: 1.05rem;">
              <i class="fa-solid fa-location-dot" style="color: var(--color-gold); font-size: 1.2rem; margin-top: 0.2rem;"></i>
              <span>12, Karakambadi Road, Tirupati, Andhra Pradesh - 517507, India</span>
            </li>
            <li style="display: flex; gap: 1.25rem; align-items: flex-start; margin-bottom: 1.25rem; font-size: 1.05rem;">
              <i class="fa-solid fa-phone" style="color: var(--color-gold); font-size: 1.2rem; margin-top: 0.2rem;"></i>
              <span>+91 98765 43210</span>
            </li>
            <li style="display: flex; gap: 1.25rem; align-items: flex-start; margin-bottom: 1.25rem; font-size: 1.05rem;">
              <i class="fa-solid fa-envelope" style="color: var(--color-gold); font-size: 1.2rem; margin-top: 0.2rem;"></i>
              <span>reservations@rubicornhotels.com</span>
            </li>
            <li style="display: flex; gap: 1.25rem; align-items: flex-start; margin-bottom: 1.25rem; font-size: 1.05rem;">
              <i class="fa-solid fa-clock" style="color: var(--color-gold); font-size: 1.2rem; margin-top: 0.2rem;"></i>
              <span>Check-in: 12:00 PM | Check-out: 11:00 AM</span>
            </li>
          </ul>
          
          <div class="contact-map-container" style="margin-top: 2rem; border-radius: var(--radius-md); overflow: hidden; border: 1px solid var(--color-card-border);">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.5186641575846!2d79.4192083!3d13.6268889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4f46f4eb1f8d95%3A0xe54e60155b40cfeb!2sTirupati%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin" width="100%" height="240" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        
        <div class="contact-form-wrapper">
          <h3>Write to Us</h3>
          <input type="text" placeholder="Your Full Name">
          <input type="email" placeholder="Your Email Address">
          <textarea rows="6" placeholder="Your Message or Request Details" style="font-family: inherit; font-size: 0.95rem;"></textarea>
          <button onclick="alert('Message sent successfully! In demo mode, our support agent will reach out in a few minutes.')">Send Message</button>
        </div>
      </div>
    </div>
  `;
}

// B. Room Discovery / List View
function renderRooms(container) {
  // Extract Floor parameter if redirected from floor elevation layout
  const hash = window.location.hash;
  const urlParams = new URLSearchParams(hash.includes('?') ? hash.split('?')[1] : '');
  const floorParam = urlParams.get('floor');

  container.innerHTML = `
    <div class="container section-padding">
      <div class="section-title-wrapper">
        <span class="section-subtitle">Discovery Grid</span>
        <h2 class="section-title">Browse Guest Rooms</h2>
      </div>

      <div class="rooms-page-layout">
        <!-- Sidebar Filters -->
        <aside class="filter-panel">
          <div class="filter-section">
            <h4>Air Conditioning</h4>
            <div class="ac-toggle-pills">
              <span class="ac-pill active" id="ac-pill-both" data-val="both">Both</span>
              <span class="ac-pill" id="ac-pill-ac" data-val="ac"><i class="fa-regular fa-snowflake"></i> AC</span>
              <span class="ac-pill" id="ac-pill-nonac" data-val="non-ac"><i class="fa-solid fa-fan"></i> Non-AC</span>
            </div>
          </div>

          <div class="filter-section">
            <h4>Floor Level</h4>
            <div class="checkbox-group" id="filter-floor-group">
              <label class="check-container">Ground Floor (GF)
                <input type="checkbox" value="GF" ${floorParam === 'GF' ? 'checked' : ''}>
                <span class="checkmark"></span>
              </label>
              <label class="check-container">1st Floor (1F)
                <input type="checkbox" value="1F" ${floorParam === '1F' ? 'checked' : ''}>
                <span class="checkmark"></span>
              </label>
              <label class="check-container">2nd Floor (2F)
                <input type="checkbox" value="2F" ${floorParam === '2F' ? 'checked' : ''}>
                <span class="checkmark"></span>
              </label>
              <label class="check-container">3rd Floor (3F)
                <input type="checkbox" value="3F" ${floorParam === '3F' ? 'checked' : ''}>
                <span class="checkmark"></span>
              </label>
              <label class="check-container">4th Floor (4F)
                <input type="checkbox" value="4F" ${floorParam === '4F' ? 'checked' : ''}>
                <span class="checkmark"></span>
              </label>
            </div>
          </div>

          <div class="filter-section">
            <h4>Room Class</h4>
            <div class="checkbox-group" id="filter-class-group">
              <label class="check-container">Single Bed Room
                <input type="checkbox" value="Single">
                <span class="checkmark"></span>
              </label>
              <label class="check-container">Double Bed Room
                <input type="checkbox" value="Double">
                <span class="checkmark"></span>
              </label>
              <label class="check-container">Triple Room
                <input type="checkbox" value="Triple">
                <span class="checkmark"></span>
              </label>
              <label class="check-container">Suites
                <input type="checkbox" value="Suite">
                <span class="checkmark"></span>
              </label>
              <label class="check-container">Deluxe Tier
                <input type="checkbox" value="Deluxe">
                <span class="checkmark"></span>
              </label>
            </div>
          </div>

          <div class="filter-section">
            <h4>Price Per Night</h4>
            <div class="price-range-wrapper">
              <input type="range" class="range-slider" id="price-slider" min="500" max="12000" step="100" value="12000">
              <div class="slider-inputs">
                <span>Min: ₹500</span>
                <span id="price-slider-lbl">Max: ₹12,000</span>
              </div>
            </div>
          </div>

          <div class="filter-section">
            <h4>Capacity</h4>
            <select id="filter-capacity" class="search-field" style="width:100%; border:1px solid var(--color-card-border); background:var(--color-charcoal); color:var(--color-ivory); padding:0.6rem; border-radius:4px;">
              <option value="any">Any Capacity</option>
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4+ Guests</option>
            </select>
          </div>

          <div class="filter-section">
            <h4>Sort Rooms</h4>
            <select id="filter-sort" class="search-field" style="width:100%; border:1px solid var(--color-card-border); background:var(--color-charcoal); color:var(--color-ivory); padding:0.6rem; border-radius:4px;">
              <option value="popularity">Most Popular</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
              <option value="floor">Floor Level</option>
              <option value="ac-first">❄️ AC Rooms First</option>
            </select>
          </div>
        </aside>

        <!-- Room Grid -->
        <section>
          <div class="room-grid-list" id="rooms-grid-mount"></div>
          <div class="empty-state" id="rooms-empty-state" style="display:none;">
            <i class="fa-solid fa-bed"></i>
            <h3>No Rooms Match Your Filters</h3>
            <p>Try adjusting your search filters or clearing checkboxes to discover other beautiful stays.</p>
            <button class="btn-clear-filters" id="btn-reset-filters">Clear All Filters</button>
          </div>
        </section>
      </div>
    </div>
  `;

  // Filter Event Listeners setup
  const acPills = document.querySelectorAll('.ac-pill');
  let selectedAc = 'both';
  
  acPills.forEach(pill => {
    pill.onclick = () => {
      acPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      selectedAc = pill.getAttribute('data-val');
      applyFilters();
    };
  });

  const priceSlider = document.getElementById('price-slider');
  const priceSliderLbl = document.getElementById('price-slider-lbl');
  
  priceSlider.oninput = () => {
    priceSliderLbl.innerText = `Max: ₹${parseInt(priceSlider.value).toLocaleString('en-IN')}`;
    applyFilters();
  };

  const floorChecks = document.querySelectorAll('#filter-floor-group input');
  floorChecks.forEach(ch => ch.onchange = applyFilters);

  const classChecks = document.querySelectorAll('#filter-class-group input');
  classChecks.forEach(ch => ch.onchange = applyFilters);

  document.getElementById('filter-capacity').onchange = applyFilters;
  document.getElementById('filter-sort').onchange = applyFilters;
  document.getElementById('btn-reset-filters').onclick = resetFilters;

  function resetFilters() {
    acPills.forEach(p => p.classList.remove('active'));
    document.getElementById('ac-pill-both').classList.add('active');
    selectedAc = 'both';
    
    floorChecks.forEach(ch => ch.checked = false);
    classChecks.forEach(ch => ch.checked = false);
    
    priceSlider.value = 12000;
    priceSliderLbl.innerText = 'Max: ₹12,000';
    
    document.getElementById('filter-capacity').value = 'any';
    document.getElementById('filter-sort').value = 'popularity';
    applyFilters();
  }

  function applyFilters() {
    let filtered = [...window.RubicornState.rooms];
    
    // AC Filter
    if (selectedAc === 'ac') {
      filtered = filtered.filter(r => r.ac);
    } else if (selectedAc === 'non-ac') {
      filtered = filtered.filter(r => !r.ac);
    }
    
    // Floor Filter
    const activeFloors = Array.from(floorChecks).filter(ch => ch.checked).map(ch => ch.value);
    if (activeFloors.length > 0) {
      filtered = filtered.filter(r => activeFloors.includes(r.floor));
    }
    
    // Room Class Type Filter
    const activeClasses = Array.from(classChecks).filter(ch => ch.checked).map(ch => ch.value);
    if (activeClasses.length > 0) {
      filtered = filtered.filter(r => {
        return activeClasses.some(c => r.type.toLowerCase().includes(c.toLowerCase()));
      });
    }
    
    // Price Filter
    const maxVal = parseInt(priceSlider.value);
    filtered = filtered.filter(r => r.price <= maxVal);
    
    // Capacity
    const capacityVal = document.getElementById('filter-capacity').value;
    if (capacityVal !== 'any') {
      const capNum = parseInt(capacityVal);
      if (capNum === 4) {
        filtered = filtered.filter(r => r.maxGuests >= 4);
      } else {
        filtered = filtered.filter(r => r.maxGuests === capNum);
      }
    }
    
    // Sorting
    const sortVal = document.getElementById('filter-sort').value;
    if (sortVal === 'low-high') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortVal === 'high-low') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortVal === 'floor') {
      const floorsOrder = { 'GF': 1, '1F': 2, '2F': 3, '3F': 4, '4F': 5 };
      filtered.sort((a, b) => floorsOrder[a.floor] - floorsOrder[b.floor]);
    } else if (sortVal === 'ac-first') {
      filtered.sort((a, b) => (b.ac ? 1 : 0) - (a.ac ? 1 : 0));
    }

    renderFilteredRooms(filtered);
  }

  function renderFilteredRooms(rooms) {
    const grid = document.getElementById('rooms-grid-mount');
    const emptyState = document.getElementById('rooms-empty-state');
    
    grid.innerHTML = '';
    
    if (rooms.length === 0) {
      grid.style.display = 'none';
      emptyState.style.display = 'block';
      return;
    }
    
    grid.style.display = 'grid';
    emptyState.style.display = 'none';
    
    rooms.forEach(room => {
      const card = document.createElement('div');
      card.className = 'room-card';
      
      const acPillBadge = room.ac 
        ? `<span class="ac-badge ac"><i class="fa-regular fa-snowflake"></i> ❄️ AC</span>`
        : `<span class="ac-badge non-ac"><i class="fa-solid fa-fan"></i> 🌀 Non-AC</span>`;
        
      const statusClass = room.status === 'available' ? 'available' : (room.status === 'occupied' ? 'occupied' : (room.status === 'checking-out' ? 'checking-out' : 'maintenance'));
      const statusText = room.status === 'available' ? 'Available' : (room.status === 'occupied' ? 'Occupied' : (room.status === 'checking-out' ? 'Checking Out Today' : 'Maintenance'));
      
      const statusBadge = `<span class="avail-badge ${statusClass}">${statusText}</span>`;
      
      const disabledAttr = room.status !== 'available' && room.status !== 'checking-out' ? 'disabled' : '';
      const ctaText = room.status === 'available' || room.status === 'checking-out' ? 'Book This Room' : 'Unavailable';
      
      card.innerHTML = `
        <div class="room-card-img-wrapper" id="grid-img-${room.id}">
          ${acPillBadge}
          ${statusBadge}
        </div>
        <div class="room-card-content">
          <span class="room-card-floor">${room.floor} Floor — Room ${room.id}</span>
          <h3 class="room-card-title">${room.type}</h3>
          
          <div class="room-card-specs">
            <span><i class="fa-solid fa-bed"></i> ${room.beds}</span>
            <span><i class="fa-solid fa-users"></i> Max ${room.maxGuests}</span>
            <span><i class="fa-solid fa-maximize"></i> ${room.size} sq.ft</span>
          </div>

          <div class="room-card-amenities">
            ${room.amenities.slice(0, 4).map(a => `<span class="room-amenity-item">${a}</span>`).join('')}
            ${room.amenities.length > 4 ? `<span class="room-amenity-item">+${room.amenities.length - 4} more</span>` : ''}
          </div>

          <div class="room-card-footer">
            <div class="room-card-price">
              <span class="amount">₹${room.price.toLocaleString('en-IN')}</span>
              <span class="unit">per night</span>
            </div>
            <button class="btn-card-action" ${disabledAttr} id="btn-book-${room.id}">${ctaText}</button>
          </div>
        </div>
      `;
      
      grid.appendChild(card);
      
      // Determine prompt template
      let promptKey = `${room.floor}_${room.ac ? 'ac' : 'non_ac'}`;
      if (room.id === '308') promptKey = 'temple_view';
      
      mountGeminiImage(card.querySelector(`#grid-img-${room.id}`), promptKey, room.type, 'room-card-img');
      
      // Setup direct book click
      const bookBtn = card.querySelector(`#btn-book-${room.id}`);
      if (bookBtn) {
        bookBtn.onclick = () => {
          // Initialize selection
          window.RubicornState.currentBooking.roomId = room.id;
          
          // Pre-populate defaults if empty
          if (!window.RubicornState.currentBooking.checkIn) {
            window.RubicornState.currentBooking.checkIn = getFormattedDate(0);
            window.RubicornState.currentBooking.checkOut = getFormattedDate(1);
          }
          
          window.location.hash = `#/booking/step-1`;
        };
      }
    });
  }

  // Initial render load
  applyFilters();
}

// C. Room Details view
function renderRoomDetail(container, params) {
  const room = window.RubicornState.rooms.find(r => r.id === params.id);
  
  if (!room) {
    container.innerHTML = `
      <div class="container section-padding" style="text-align:center;">
        <h3>Room ${params.id} does not exist.</h3>
        <a href="#/rooms" class="btn-book-now" style="margin-top:2rem;">Back to Rooms</a>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="container section-padding">
      <a href="#/rooms" style="display:inline-flex; align-items:center; gap:0.5rem; margin-bottom:2rem; font-weight:600;"><i class="fa-solid fa-arrow-left"></i> Back to discovery</a>
      
      <div class="detail-layout">
        <!-- Main details -->
        <div>
          <h2 style="font-size:2.5rem; margin-bottom:0.5rem;">${room.type}</h2>
          <span style="color:var(--color-gold); font-weight:600; text-transform:uppercase; letter-spacing:0.1em; display:block; margin-bottom:2rem;">
            Room ${room.id} — ${room.floor} Floor level
          </span>
          
          <div class="detail-gallery">
            <div class="detail-main-img-wrap" id="detail-main-mount"></div>
            <div class="detail-thumbs">
              <img class="detail-thumb active" src="assets/room_standard.png" data-img="room_standard" alt="Thumb 1">
              <img class="detail-thumb" src="assets/room_luxury.png" data-img="room_luxury" alt="Thumb 2">
              <img class="detail-thumb" src="assets/room_temple.png" data-img="room_temple" alt="Thumb 3">
              <img class="detail-thumb" src="assets/hero.png" data-img="hero" alt="Thumb 4">
            </div>
          </div>

          <table class="detail-specs-table">
            <tr>
              <td>Air Conditioning</td>
              <td>${room.ac ? '✅ Split Air Conditioning Included' : '❌ Fan Ventilated Only'}</td>
            </tr>
            <tr>
              <td>Room Dimensions</td>
              <td>${room.size} sq. ft. Space</td>
            </tr>
            <tr>
              <td>Bed Layout</td>
              <td>${room.beds} Configuration</td>
            </tr>
            <tr>
              <td>Max Occupancy</td>
              <td>Suitable for up to ${room.maxGuests} Guests</td>
            </tr>
            <tr>
              <td>Outdoor Outlook</td>
              <td>${room.view} Outlook</td>
            </tr>
            <tr>
              <td>Extra Bed Cost</td>
              <td>₹${room.ac ? '500' : '350'} / night</td>
            </tr>
          </table>

          <div style="margin-top: 3rem;">
            <h3 style="margin-bottom:1rem;">Luxury Lodging Experience</h3>
            <p style="color:var(--color-ivory-dim); margin-bottom:1rem;">Discover an exceptional blend of comfort and culture. This room features customized mattresses and high-density thread count bedding designed to ensure a restoring sleep after a long day of sightseeing, temple visits, or corporate schedules.</p>
            <p style="color:var(--color-ivory-dim); margin-bottom:1rem;">Equipped with high-definition digital television channels, high-speed Wi-Fi internet access, modern bathroom fittings, and 24-hour housekeeping service at your call. Wake up refreshed to in-room breakfast options or order from our chef-curated dining catalog.</p>
          </div>

          <div class="nearby-attractions">
            <h4><i class="fa-solid fa-map-location-dot"></i> Nearby Landmarks & Distances</h4>
            <ul class="nearby-list">
              <li><i class="fa-solid fa-gopuram"></i> 5 min walk to Shiva Mandir Sacred Temple Complex</li>
              <li><i class="fa-solid fa-train"></i> 10 min drive to Central Railway Transit Hub</li>
              <li><i class="fa-solid fa-store"></i> 2 min walk to City Market & Local Handloom Stores</li>
            </ul>
          </div>
        </div>

        <!-- Sticky check widget -->
        <aside>
          <div class="sticky-booking-card">
            <div class="detail-price-box">
              <span class="amt">₹${room.price.toLocaleString('en-IN')}</span>
              <span class="lbl">/ night</span>
            </div>

            <div class="checkbox-group" style="gap:1.25rem;">
              <div class="search-field">
                <label>Check-in Date</label>
                <input type="date" id="det-checkin" value="${getFormattedDate(0)}" min="${getFormattedDate(0)}">
              </div>
              <div class="search-field">
                <label>Stay Duration</label>
                <select id="det-duration">
                  <option value="24">24 Hours stay (Full Day)</option>
                  <option value="12">12 Hours stay (Half Day)</option>
                </select>
              </div>
              <div class="search-field">
                <label>Total Guests</label>
                <select id="det-guests">
                  ${[1,2,3,4,5].map(n => `<option value="${n}">${n} Guest${n>1?'s':''}</option>`).join('')}
                </select>
              </div>
            </div>

            <button class="btn-book-now" id="btn-det-action" style="width:100%; margin-top:2rem; padding:1rem;">Book This Stay</button>
            
            <p style="font-size:0.75rem; text-align:center; color:var(--color-ivory-dim); margin-top:1rem;">
              <i class="fa-solid fa-circle-info"></i> Free cancellations permitted up to 24 hours prior check-in.
            </p>
          </div>
        </aside>
      </div>
    </div>
  `;

  // Gallery main image mount
  const mainImgMount = document.getElementById('detail-main-mount');
  let promptKey = `${room.floor}_${room.ac ? 'ac' : 'non_ac'}`;
  if (room.id === '308') promptKey = 'temple_view';
  mountGeminiImage(mainImgMount, promptKey, room.type, 'detail-main-img');

  // Thumbnail click binds
  const thumbs = document.querySelectorAll('.detail-thumb');
  thumbs.forEach(th => {
    th.onclick = () => {
      thumbs.forEach(t => t.classList.remove('active'));
      th.classList.add('active');
      
      const imgKey = th.getAttribute('data-img');
      mainImgMount.innerHTML = '';
      mountGeminiImage(mainImgMount, imgKey, room.type, 'detail-main-img');
    };
  });

  // Action Binds
  document.getElementById('btn-det-action').onclick = () => {
    const checkin = document.getElementById('det-checkin').value;
    const duration = parseInt(document.getElementById('det-duration').value);
    const guests = parseInt(document.getElementById('det-guests').value);
    
    // Save to State Booking form
    window.RubicornState.currentBooking.roomId = room.id;
    window.RubicornState.currentBooking.checkIn = checkin;
    window.RubicornState.currentBooking.durationHours = duration;
    window.RubicornState.currentBooking.checkOut = calculateCheckoutDate(checkin, duration);
    window.RubicornState.currentBooking.guestsCount = guests;
    
    window.location.hash = `#/booking/step-1`;
  };
}

// 5. Booking Wizard Steps Controller
function renderBookingWizard(step) {
  const container = document.getElementById('app');
  container.innerHTML = '';
  
  // Set default dates if not initialized
  if (!window.RubicornState.currentBooking.checkIn) {
    window.RubicornState.currentBooking.checkIn = getFormattedDate(0);
    window.RubicornState.currentBooking.checkOut = getFormattedDate(1);
  }
  
  const selectedRoomId = window.RubicornState.currentBooking.roomId;
  const room = window.RubicornState.rooms.find(r => r.id === selectedRoomId);

  // Selected Room Navigation Guard: direct bypass check
  if (step > 1 && !room) {
    window.location.hash = '#/booking/step-1';
    return;
  }


  // Layout structure inject
  const mainDiv = document.createElement('div');
  mainDiv.className = 'booking-wizard-wrapper fade-in-up-anim';
  container.appendChild(mainDiv);

  mainDiv.innerHTML = `
    <!-- Step Node header bar -->
    <header class="wizard-header">
      <div class="wizard-steps">
        <div class="wizard-step-node ${step === 1 ? 'active' : (step > 1 ? 'completed' : '')}">
          <div class="step-number">${step > 1 ? '<i class="fa-solid fa-check"></i>' : '1'}</div>
          <span class="step-label">Select Room</span>
        </div>
        <div class="wizard-step-node ${step === 2 ? 'active' : (step > 2 ? 'completed' : '')}">
          <div class="step-number">${step > 2 ? '<i class="fa-solid fa-check"></i>' : '2'}</div>
          <span class="step-label">Add-ons</span>
        </div>
        <div class="wizard-step-node ${step === 3 ? 'active' : (step > 3 ? 'completed' : '')}">
          <div class="step-number">${step > 3 ? '<i class="fa-solid fa-check"></i>' : '3'}</div>
          <span class="step-label">Guest Details</span>
        </div>
        <div class="wizard-step-node ${step === 4 ? 'active' : (step > 4 ? 'completed' : '')}">
          <div class="step-number">${step > 4 ? '<i class="fa-solid fa-check"></i>' : '4'}</div>
          <span class="step-label">Preview</span>
        </div>
        <div class="wizard-step-node ${step === 5 ? 'active' : ''}">
          <div class="step-number">5</div>
          <span class="step-label">Payment</span>
        </div>
      </div>
    </header>

    <!-- Content layout split grid -->
    <div class="wizard-layout">
      <!-- Dynamic step canvas -->
      <section class="wizard-step-content-card" id="wizard-step-canvas"></section>
      
      <!-- Sticky Order summary sidebar -->
      <aside class="summary-panel-sticky" id="wizard-summary-canvas"></aside>
    </div>

    <!-- Mobile Fixed Bottom CTA Bar -->
    <div class="mobile-fixed-bottom-cta">
      <div class="mobile-cta-price-info">
        <span>Total Price</span>
        <span id="mobile-cta-total-val">₹0</span>
      </div>
      <button class="btn-mobile-fixed-cta" id="mobile-fixed-cta-btn">Next Step</button>
    </div>
  `;

  // Render Sidebar Summary
  renderOrderSummary(room);

  // Render inner Step views
  const canvas = document.getElementById('wizard-step-canvas');
  
  if (step === 1) renderStep1(canvas);
  else if (step === 2) renderStep2(canvas, room);
  else if (step === 3) renderStep3(canvas);
  else if (step === 4) renderStep4(canvas);
  else if (step === 5) renderStep5(canvas, room);

  // Setup Mobile CTA Binds
  const mobBtn = document.getElementById('mobile-fixed-cta-btn');
  const nextBtnOnPage = document.getElementById('btn-wizard-next');
  
  if (mobBtn && nextBtnOnPage) {
    mobBtn.innerHTML = nextBtnOnPage.innerHTML;
    mobBtn.disabled = nextBtnOnPage.disabled;
    mobBtn.onclick = () => nextBtnOnPage.click();
  }
}

// Render Order Summary Sidebar details
function renderOrderSummary(room) {
  const summary = document.getElementById('wizard-summary-canvas');
  if (!summary) return;

  const current = window.RubicornState.currentBooking;
  const is12Hours = parseInt(current.durationHours) === 12;

  if (!room) {
    summary.innerHTML = `
      <h3 class="summary-title">Order Summary</h3>
      <div class="summary-room-desc">
        <h5>No Room Selected</h5>
        <p>Please select a room from the floor board grid to continue.</p>
      </div>
      <div class="summary-rows">
        <div class="summary-row"><span>Duration</span><span>0 Hours</span></div>
        <div class="summary-row total"><span>Total Cost</span><span>₹0</span></div>
      </div>
    `;
    return;
  }

  // Cost items totals
  const baseCost = is12Hours ? Math.max(room.price - 300, 200) : room.price;
  
  // Extra Bed calculation logic
  const extraBedRate = room.ac ? 500 : 350;
  const extraBedCost = current.extraBeds * extraBedRate;
  
  // Add-ons total
  let addonsCost = 0;
  current.addons.forEach(ad => {
    addonsCost += ad.price;
  });

  // Food totals
  let foodCost = 0;
  current.food.forEach(fd => {
    foodCost += fd.price * fd.qty;
  });

  let subtotal = baseCost + extraBedCost + addonsCost + foodCost;
  
  // Promo Coupons
  let discount = 0;
  if (current.coupon === 'RUBICORN10') {
    discount = subtotal * 0.1;
  } else if (current.coupon === 'PILGRIM50') {
    discount = 50;
  }
  subtotal = Math.max(subtotal - discount, 0);

  const gst = subtotal * 0.18;
  const service = subtotal * 0.05;
  const total = subtotal + gst + service;

  summary.innerHTML = `
    <h3 class="summary-title">Stay Summary</h3>
    
    <div class="summary-room-desc">
      <h5>${room.type}</h5>
      <p><i class="fa-solid fa-layer-group gold-color"></i> ${room.floor} Floor — Room ${room.id}</p>
      <p><i class="fa-regular fa-snowflake blue"></i> ${room.ac ? '❄️ Air-Conditioned' : '🌀 Non-AC Fan'}</p>
    </div>

    <div class="summary-rows" style="border-bottom:none; margin-bottom:0.5rem;">
      <div class="summary-row">
        <span>Check-in</span>
        <span>${current.checkIn}</span>
      </div>
      <div class="summary-row">
        <span>Check-out</span>
        <span>${current.checkOut}</span>
      </div>
      <div class="summary-row">
        <span>Stay Duration</span>
        <span>${is12Hours ? '12 Hours (Half Day)' : '24 Hours (Full Day)'}</span>
      </div>
      <div class="summary-row">
        <span>Guests Count</span>
        <span>${current.guestsCount} Guest${current.guestsCount>1?'s':''}</span>
      </div>
    </div>

    <div class="summary-rows">
      <div class="summary-row">
        <span>Base Tariff (${is12Hours ? '12 Hours' : '24 Hours'})</span>
        <span>₹${baseCost.toLocaleString('en-IN')}</span>
      </div>
      
      ${current.extraBeds > 0 ? `
        <div class="summary-row">
          <span>Extra Bed (${current.extraBeds} × ₹${extraBedRate})</span>
          <span>₹${extraBedCost.toLocaleString('en-IN')}</span>
        </div>
      ` : ''}

      ${current.addons.length > 0 ? `
        <div class="summary-row">
          <span>Custom Add-ons</span>
          <span>₹${addonsCost.toLocaleString('en-IN')}</span>
        </div>
      ` : ''}

      ${current.food.length > 0 ? `
        <div class="summary-row">
          <span>In-Room Dining Pre-orders</span>
          <span>₹${foodCost.toLocaleString('en-IN')}</span>
        </div>
      ` : ''}

      ${discount > 0 ? `
        <div class="summary-row" style="color:var(--color-success);">
          <span>Promo Coupon Discount</span>
          <span>- ₹${discount.toLocaleString('en-IN')}</span>
        </div>
      ` : ''}

      <div class="summary-row">
        <span>GST Tax (18%)</span>
        <span>₹${gst.toLocaleString('en-IN')}</span>
      </div>
      <div class="summary-row">
        <span>Service Charge (5%)</span>
        <span>₹${service.toLocaleString('en-IN')}</span>
      </div>
      
      <div class="summary-row total">
        <span>Total Payable</span>
        <span>₹${Math.round(total).toLocaleString('en-IN')}</span>
      </div>
    </div>
  `;

  // Update mobile fixed cta bar totals
  const mobTotal = document.getElementById('mobile-cta-total-val');
  if (mobTotal) {
    mobTotal.innerText = `₹${Math.round(total).toLocaleString('en-IN')}`;
  }
}

// -------------------------------------------------------------
// STEP 1 RENDERER: BookMyShow Seat Map hotel rooms
// -------------------------------------------------------------
function renderStep1(canvas) {
  const current = window.RubicornState.currentBooking;
  
  canvas.innerHTML = `
    <h3 class="wizard-step-title">Select Your Room — Choose Your Floor</h3>
    <p class="wizard-step-subtitle">Select dates and choose an available room from the interactive floor map below.</p>

    <!-- Date selector integration -->
    <div class="date-selector-wizard">
      <div class="date-input-wrap">
        <label for="step-checkin">Check-in Date</label>
        <input type="date" id="step-checkin" value="${current.checkIn}" min="${getFormattedDate(0)}">
      </div>
      <div class="date-input-wrap">
        <label for="step-duration">Stay Duration</label>
        <select id="step-duration" style="background:var(--color-charcoal); border:1px solid var(--color-card-border); color:var(--color-ivory); padding:0.75rem; border-radius:4px; font-family:var(--font-sans); outline:none;">
          <option value="24" ${parseInt(current.durationHours) === 24 ? 'selected' : ''}>24 Hours stay (Full Day)</option>
          <option value="12" ${parseInt(current.durationHours) === 12 ? 'selected' : ''}>12 Hours stay (Half Day)</option>
        </select>
      </div>
    </div>

    <!-- Interactive Floor selection tabs -->
    <div class="floor-selector-tabs">
      <span class="floor-tab active" data-floor="GF">GF</span>
      <span class="floor-tab" data-floor="1F">1F</span>
      <span class="floor-tab" data-floor="2F">2F</span>
      <span class="floor-tab" data-floor="3F">3F</span>
      <span class="floor-tab" data-floor="4F">4F</span>
    </div>

    <div class="floor-intro-banner" id="step-floor-intro"></div>

    <!-- Grid Map -->
    <div class="floor-map-grid" id="step-floor-map-grid"></div>

    <!-- Legends -->
    <div class="legend-bar">
      <div class="legend-item"><span class="legend-color available"></span><span>Available</span></div>
      <div class="legend-item"><span class="legend-color occupied"></span><span>Occupied</span></div>
      <div class="legend-item"><span class="legend-color checking-out"></span><span>Checking Out Today</span></div>
      <div class="legend-item"><span class="legend-color maintenance"></span><span>Maintenance</span></div>
      <div class="legend-item"><span class="legend-color selected"></span><span>Selected</span></div>
    </div>

    <!-- Room quick preview slide panel -->
    <div id="step-quick-preview-mount"></div>

    <!-- Step Navigation Footer -->
    <div class="wizard-footer">
      <button class="btn-wizard-nav prev" onclick="window.location.hash='#/rooms'"><i class="fa-solid fa-arrow-left"></i> Back to browse</button>
      <button class="btn-wizard-nav next" id="btn-wizard-next" disabled>Continue to Add-ons <i class="fa-solid fa-arrow-right"></i></button>
    </div>
  `;

  // Pre-load dates selector events
  const checkinInput = document.getElementById('step-checkin');
  const durationSelect = document.getElementById('step-duration');

  checkinInput.onchange = () => {
    current.checkIn = checkinInput.value;
    current.checkOut = calculateCheckoutDate(current.checkIn, current.durationHours);
    
    const room = window.RubicornState.rooms.find(r => r.id === current.roomId);
    renderOrderSummary(room);
    loadFloorMap(activeFloor);
  };

  durationSelect.onchange = () => {
    current.durationHours = parseInt(durationSelect.value);
    current.checkOut = calculateCheckoutDate(current.checkIn, current.durationHours);
    
    const room = window.RubicornState.rooms.find(r => r.id === current.roomId);
    renderOrderSummary(room);
    loadFloorMap(activeFloor);
  };

  // Floor tab switches
  let activeFloor = 'GF';
  const roomSelected = window.RubicornState.rooms.find(r => r.id === current.roomId);
  
  if (roomSelected) {
    activeFloor = roomSelected.floor;
  }

  const tabs = document.querySelectorAll('.floor-tab');
  tabs.forEach(t => {
    t.classList.remove('active');
    if (t.getAttribute('data-floor') === activeFloor) {
      t.classList.add('active');
    }
    t.onclick = () => {
      tabs.forEach(tab => tab.classList.remove('active'));
      t.classList.add('active');
      activeFloor = t.getAttribute('data-floor');
      loadFloorMap(activeFloor);
    };
  });

  // Step continuation check
  const nextBtn = document.getElementById('btn-wizard-next');
  nextBtn.onclick = () => {
    window.location.hash = `#/booking/step-2`;
  };

  function loadFloorMap(floorCode) {
    const intro = document.getElementById('step-floor-intro');
    const fDetails = FLOOR_DETAILS[floorCode];
    intro.innerHTML = `<h5>${fDetails.name} — ${fDetails.tagline}</h5>`;

    const mapGrid = document.getElementById('step-floor-map-grid');
    mapGrid.innerHTML = '';

    const floorRooms = window.RubicornState.rooms.filter(r => r.floor === floorCode);

    floorRooms.forEach(room => {
      const tile = document.createElement('div');
      
      const isSelected = current.roomId === room.id;
      const tileClass = isSelected ? 'selected' : room.status;
      
      tile.className = `room-tile ${tileClass}`;
      
      const acIcon = room.ac ? '❄️' : '🌀';
      
      tile.innerHTML = `
        <span class="room-tile-badge-ac">${acIcon}</span>
        <span class="room-tile-no">${room.id}</span>
        <span class="room-tile-type">${room.type.split(' ').slice(-2).join(' ')}</span>
        <span class="room-tile-price">₹${room.price}</span>
      `;
      
      if (room.status !== 'occupied' && room.status !== 'maintenance') {
        tile.onclick = () => {
          // Deselect previous selection
          document.querySelectorAll('.room-tile').forEach(t => {
            t.classList.remove('selected');
            // Re-apply original status class
            const rId = t.querySelector('.room-tile-no').innerText;
            const originalRoom = window.RubicornState.rooms.find(x => x.id === rId);
            if (originalRoom) {
              t.className = `room-tile ${originalRoom.status}`;
            }
          });
          
          current.roomId = room.id;
          tile.className = 'room-tile selected';
          
          nextBtn.disabled = false;
          
          // Re-evaluate Mobile CTA
          const mobBtn = document.getElementById('mobile-fixed-cta-btn');
          if (mobBtn) mobBtn.disabled = false;
          
          renderOrderSummary(room);
          renderQuickPreview(room);
        };
      }
      
      mapGrid.appendChild(tile);
    });

    if (current.roomId) {
      const selectedOnThisFloor = floorRooms.find(r => r.id === current.roomId);
      if (selectedOnThisFloor) {
        nextBtn.disabled = false;
        renderQuickPreview(selectedOnThisFloor);
      }
    }
  }

  function renderQuickPreview(room) {
    const mount = document.getElementById('step-quick-preview-mount');
    mount.innerHTML = `
      <div class="quick-info-slide-panel">
        <div class="quick-info-img-wrap" id="step-preview-img-mount"></div>
        <div class="quick-info-details">
          <h4>${room.type} (Room ${room.id})</h4>
          <p style="margin-bottom:0.25rem;"><strong>Beds:</strong> ${room.beds} | <strong>Capacity:</strong> Max ${room.maxGuests} guests | <strong>Outlook:</strong> ${room.view}</p>
          <p><strong>Included Amenities:</strong> ${room.amenities.slice(0, 5).join(' • ')}</p>
          <span class="quick-info-price">₹${room.price.toLocaleString('en-IN')} / night</span>
        </div>
      </div>
    `;
    
    let promptKey = `${room.floor}_${room.ac ? 'ac' : 'non_ac'}`;
    if (room.id === '308') promptKey = 'temple_view';
    
    mountGeminiImage(document.getElementById('step-preview-img-mount'), promptKey, room.type, 'room-card-img');
  }

  // Load initial floor board layout
  loadFloorMap(activeFloor);
}

// -------------------------------------------------------------
// STEP 2 RENDERER: Extra Beds & Premium Add-ons upsell
// -------------------------------------------------------------
function renderStep2(canvas, room) {
  const current = window.RubicornState.currentBooking;
  
  if (!room) {
    canvas.innerHTML = `<h3>Please select a room in Step 1 first.</h3>`;
    return;
  }

  // Decide if extra bed controls are visible based on Capacity vs Bed counts
  // Single room: no extra bed. Double: if guestCount >= 2. Triple/Deluxe: if guestCount >= 3.
  let showExtraBed = false;
  let reason = '';
  
  if (room.type.includes('Single')) {
    showExtraBed = false;
    reason = 'Extra bed is not permitted in Single occupancy rooms.';
  } else if (room.type.includes('Double') || room.type.includes('Comfort Double') || room.type.includes('Deluxe Double') || room.type.includes('Accessible')) {
    showExtraBed = true;
    reason = 'Double room allows max 1 extra rollaway bed.';
  } else {
    showExtraBed = true;
    reason = 'Suites & Triple rooms permit up to 2 extra rollaway beds.';
  }

  const extraBedPrice = room.ac ? 500 : 350;

  canvas.innerHTML = `
    <h3 class="wizard-step-title">Customize Your Stay — Extra Comforts</h3>
    <p class="wizard-step-subtitle">Add extra beds or select personalized welcome packages to elevate your lodging experience.</p>

    <!-- Extra bed row -->
    ${showExtraBed ? `
      <div class="form-section-title">Rollaway Bed Options</div>
      <div style="background:rgba(13,13,13,0.4); border:1px solid var(--color-card-border); padding:1.5rem; border-radius:8px; display:flex; gap:1.5rem; margin-bottom:2.5rem; align-items:center;">
        <div class="quick-info-img-wrap" style="width:120px;" id="extra-bed-img-mount"></div>
        <div style="flex:1;">
          <h4 style="color:var(--color-gold); margin-bottom:0.25rem;">Premium Extra Rollaway Bed</h4>
          <p style="font-size:0.85rem; color:var(--color-ivory-dim); margin-bottom:0.5rem;">${reason}</p>
          <span style="font-weight:700; color:var(--color-gold);">₹${extraBedPrice} / night</span>
        </div>
        <div class="extra-bed-control">
          <button class="qty-btn" id="btn-bed-dec">-</button>
          <span class="qty-val" id="extra-bed-qty-val">${current.extraBeds}</span>
          <button class="qty-btn" id="btn-bed-inc">+</button>
        </div>
      </div>
    ` : `
      <div class="form-section-title">Rollaway Bed Options</div>
      <p style="font-size:0.9rem; color:var(--color-ivory-dim); margin-bottom:2.5rem; font-style:italic;"><i class="fa-solid fa-circle-info"></i> ${reason}</p>
    `}

    <!-- Premium Add-ons upsell -->
    <div class="form-section-title">Select Premium Add-ons</div>
    <div class="addon-cards-grid">


      <div class="addon-card ${isAddonSelected('pickup') ? 'selected' : ''}" data-id="pickup" data-price="700" data-name="Airport Pickup Service">
        <div class="addon-card-img-wrap" id="addon-pickup-img"></div>
        <div class="addon-card-content">
          <div class="addon-card-header">
            <h4>Airport Pickup</h4>
            <span class="addon-price">₹700</span>
          </div>
          <p class="addon-card-desc">Hassle-free chauffeur driven luxury sedan waiting to pickup you from airport terminal.</p>
          <div class="addon-card-select-bar">
            ${isAddonSelected('pickup') ? '✓ Selected' : 'Add to Reservation'}
          </div>
        </div>
      </div>

      <div class="addon-card ${isAddonSelected('flowers') ? 'selected' : ''}" data-id="flowers" data-price="250" data-name="Welcome Flowers Pack">
        <div class="addon-card-img-wrap" id="addon-flowers-img"></div>
        <div class="addon-card-content">
          <div class="addon-card-header">
            <h4>Welcome Flowers</h4>
            <span class="addon-price">₹250</span>
          </div>
          <p class="addon-card-desc">Freshly cut premium flower arrangement waiting for you on the coffee table.</p>
          <div class="addon-card-select-bar">
            ${isAddonSelected('flowers') ? '✓ Selected' : 'Add to Reservation'}
          </div>
        </div>
      </div>

      <div class="addon-card ${isAddonSelected('birthday') ? 'selected' : ''}" data-id="birthday" data-price="1200" data-name="Birthday Surprise Setup">
        <div class="addon-card-img-wrap" id="addon-bday-img"></div>
        <div class="addon-card-content">
          <div class="addon-card-header">
            <h4>Birthday Decoration</h4>
            <span class="addon-price">₹1,200</span>
          </div>
          <p class="addon-card-desc">Celebration surprise balloons, hanging banners, and standard greeting cards setup.</p>
          <div class="addon-card-select-bar">
            ${isAddonSelected('birthday') ? '✓ Selected' : 'Add to Reservation'}
          </div>
        </div>
      </div>

      <div class="addon-card ${isAddonSelected('temple') ? 'selected' : ''}" data-id="temple" data-price="999" data-name="Guided Temple Tour Pack">
        <div class="addon-card-img-wrap" id="addon-temple-img"></div>
        <div class="addon-card-content">
          <div class="addon-card-header">
            <h4>Temple Tour Package</h4>
            <span class="addon-price">₹999</span>
          </div>
          <p class="addon-card-desc">Exclusive half-day guided tour across the city's ancient historical temples.</p>
          <div class="addon-card-select-bar">
            ${isAddonSelected('temple') ? '✓ Selected' : 'Add to Reservation'}
          </div>
        </div>
      </div>

    </div>

    <!-- Wizard Navigation Footer -->
    <div class="wizard-footer">
      <button class="btn-wizard-nav prev" onclick="window.location.hash='#/booking/step-1'"><i class="fa-solid fa-arrow-left"></i> Back</button>
      <button class="btn-wizard-nav next" id="btn-wizard-next">Continue to Guests <i class="fa-solid fa-arrow-right"></i></button>
    </div>
  `;

  // Mount images
  if (showExtraBed) {
    const extraBedImgKey = room.ac ? 'extra_bed_ac' : 'extra_bed_non_ac';
    mountGeminiImage(document.getElementById('extra-bed-img-mount'), extraBedImgKey, 'Extra Bed', 'room-card-img');
  }


  mountGeminiImage(document.getElementById('addon-pickup-img'), 'hero', 'Airport Pickup', 'addon-card-img');
  mountGeminiImage(document.getElementById('addon-flowers-img'), '2F_ac', 'Flowers Decor', 'addon-card-img');
  mountGeminiImage(document.getElementById('addon-bday-img'), '3F_ac', 'Birthday Decor', 'addon-card-img');
  mountGeminiImage(document.getElementById('addon-temple-img'), 'temple_view', 'Temple Tour', 'addon-card-img');

  // Extra Bed quantity handlers
  if (showExtraBed) {
    const decBtn = document.getElementById('btn-bed-dec');
    const incBtn = document.getElementById('btn-bed-inc');
    const qtyVal = document.getElementById('extra-bed-qty-val');
    
    // Limits: Max 1 for Double, Max 2 for Suite/Triple
    const maxBedsLimit = (room.type.includes('Double') || room.type.includes('Accessible')) ? 1 : 2;

    decBtn.onclick = () => {
      if (current.extraBeds > 0) {
        current.extraBeds--;
        qtyVal.innerText = current.extraBeds;
        renderOrderSummary(room);
      }
    };

    incBtn.onclick = () => {
      if (current.extraBeds < maxBedsLimit) {
        current.extraBeds++;
        qtyVal.innerText = current.extraBeds;
        renderOrderSummary(room);
      } else {
        alert(`Maximum ${maxBedsLimit} extra bed allowed for this room category.`);
      }
    };
  }

  // Addon click togglers
  const addonCards = document.querySelectorAll('.addon-card');
  addonCards.forEach(card => {
    card.onclick = () => {
      const id = card.getAttribute('data-id');
      const price = parseInt(card.getAttribute('data-price'));
      const name = card.getAttribute('data-name');
      
      const foundIdx = current.addons.findIndex(a => a.id === id);
      
      if (foundIdx > -1) {
        current.addons.splice(foundIdx, 1);
        card.classList.remove('selected');
        card.querySelector('.addon-card-select-bar').innerText = 'Add to Reservation';
      } else {
        current.addons.push({ id, price, name });
        card.classList.add('selected');
        card.querySelector('.addon-card-select-bar').innerText = '✓ Selected';
      }

      renderOrderSummary(room);
    };
  });

  // Step 2 Continue Binds
  document.getElementById('btn-wizard-next').onclick = () => {
    window.location.hash = `#/booking/step-3`;
  };

  function isAddonSelected(id) {
    return current.addons.some(a => a.id === id);
  }
}

// -------------------------------------------------------------
// STEP 3 RENDERER: Guest Details Form (Primary & Dynamic Accordion)
// -------------------------------------------------------------
function renderStep3(canvas) {
  const current = window.RubicornState.currentBooking;
  const room = window.RubicornState.rooms.find(r => r.id === current.roomId);
  
  if (!room) {
    canvas.innerHTML = `<h3>Please select a room first.</h3>`;
    return;
  }

  // Set default values for form fields if empty
  const p = current.guestInfo.primary;
  const pName = p.name || '';
  const pAge = p.age || '';
  const pAddress = p.address || '';

  // Auto-populate mock document upload for seamless demo booking
  if (current.document.uploads.length === 0) {
    current.document.uploads.push({
      name: 'demographic_id_scan.png',
      size: '1.24 MB'
    });
  }

  canvas.innerHTML = `
    <h3 class="wizard-step-title">Guest Details & Verification</h3>
    <p class="wizard-step-subtitle">Please enter your basic information and upload a valid ID document to proceed.</p>

    <form id="step-guest-details-form" onsubmit="return false;">
      <div class="form-section-title">Primary Guest Details</div>
      
      <div class="form-grid">
        <div class="form-group">
          <label for="pri-name">Full Name * (Letters and spaces only)</label>
          <input type="text" id="pri-name" class="validate-alphabet" placeholder="e.g. Rajesh Kumar" value="${pName}" required>
        </div>
        <div class="form-group">
          <label for="pri-age">Age * (1-100)</label>
          <input type="number" id="pri-age" min="1" max="100" placeholder="e.g. 35" value="${pAge}" required>
        </div>
      </div>

      <div class="form-section-title">Address *</div>
      <div class="form-group full-width" style="margin-top: 0.5rem; margin-bottom: 2rem;">
        <label for="pri-address">Complete Address *</label>
        <textarea id="pri-address" rows="3" placeholder="Flat No, Building, Street, City, State, PIN Code" required>${pAddress}</textarea>
      </div>

      <div class="form-section-title">Identity Verification Document</div>
      <p style="font-size:0.85rem; color:var(--color-ivory-dim); margin-bottom:1rem;">Select document type and upload verification copy.</p>

      <!-- ID Type Card Selector -->
      <div class="doc-selection-grid" style="margin-bottom: 1.5rem;">
        <label class="doc-card">
          <input type="radio" name="doc-type" value="Aadhaar" ${current.document.type === 'Aadhaar' ? 'checked' : ''}>
          <span class="doc-card-lbl">
            <i class="fa-solid fa-address-card"></i>
            <span>Aadhaar Card</span>
          </span>
        </label>
        
        <label class="doc-card">
          <input type="radio" name="doc-type" value="Passport" ${current.document.type === 'Passport' ? 'checked' : ''}>
          <span class="doc-card-lbl">
            <i class="fa-solid fa-passport"></i>
            <span>Passport</span>
          </span>
        </label>

        <label class="doc-card">
          <input type="radio" name="doc-type" value="Voter ID" ${current.document.type === 'Voter ID' ? 'checked' : ''}>
          <span class="doc-card-lbl">
            <i class="fa-solid fa-id-card-clip"></i>
            <span>Voter ID</span>
          </span>
        </label>

        <label class="doc-card">
          <input type="radio" name="doc-type" value="PAN Card" ${current.document.type === 'PAN Card' ? 'checked' : ''}>
          <span class="doc-card-lbl">
            <i class="fa-solid fa-landmark"></i>
            <span>PAN Card</span>
          </span>
        </label>

        <label class="doc-card">
          <input type="radio" name="doc-type" value="License" ${current.document.type === 'License' ? 'checked' : ''}>
          <span class="doc-card-lbl">
            <i class="fa-solid fa-car-side"></i>
            <span>Driver License</span>
          </span>
        </label>
      </div>

      <!-- Drag drop interface -->
      <div class="upload-zone" id="drop-upload-zone" style="margin-bottom: 1rem;">
        <i class="fa-solid fa-cloud-arrow-up upload-icon"></i>
        <h4 id="upload-box-title">Upload front side of Aadhaar Card</h4>
        <p>Drag & drop file here or click to browse local files (JPG, PNG, PDF allowed, max 5MB)</p>
        <input type="file" id="file-picker-input" style="display:none;" accept=".jpg,.jpeg,.png,.pdf">
      </div>

      <!-- Uploaded file list -->
      <div class="uploaded-files-list" id="files-list-mount" style="margin-bottom: 2rem;"></div>

      <!-- Wizard Navigation Footer -->
      <div class="wizard-footer">
        <button type="button" class="btn-wizard-nav prev" onclick="window.location.hash='#/booking/step-2'"><i class="fa-solid fa-arrow-left"></i> Back</button>
        <button type="submit" class="btn-wizard-nav next" id="btn-wizard-next">Continue to Preview <i class="fa-solid fa-arrow-right"></i></button>
      </div>
    </form>
  `;

  // Select card toggler
  const docRadios = document.querySelectorAll('input[name="doc-type"]');
  const uploadBoxTitle = document.getElementById('upload-box-title');
  
  docRadios.forEach(radio => {
    radio.onchange = () => {
      current.document.type = radio.value;
      uploadBoxTitle.innerText = `Upload front side of ${radio.value}`;
      saveStateToStorage();
    };
  });
  
  // Set initial text
  const initialSelectedDoc = document.querySelector('input[name="doc-type"]:checked').value;
  uploadBoxTitle.innerText = `Upload front side of ${initialSelectedDoc}`;

  // File drag drop simulator
  const dropZone = document.getElementById('drop-upload-zone');
  const filePicker = document.getElementById('file-picker-input');

  dropZone.onclick = () => filePicker.click();

  dropZone.ondragover = (e) => {
    e.preventDefault();
    dropZone.classList.add('dragover');
  };

  dropZone.ondragleave = () => {
    dropZone.classList.remove('dragover');
  };

  dropZone.ondrop = (e) => {
    e.preventDefault();
    dropZone.classList.remove('dragover');
    if (e.dataTransfer.files.length > 0) {
      handleSimulatedUpload(e.dataTransfer.files[0]);
    }
  };

  filePicker.onchange = () => {
    if (filePicker.files.length > 0) {
      handleSimulatedUpload(filePicker.files[0]);
    }
  };

  function handleSimulatedUpload(file) {
    const fileName = file.name;
    const fileSize = (file.size / (1024 * 1024)).toFixed(2) + ' MB';
    
    current.document.uploads.push({
      name: fileName,
      size: fileSize
    });

    renderUploadedList();
    saveStateToStorage();
  }

  function renderUploadedList() {
    const listMount = document.getElementById('files-list-mount');
    listMount.innerHTML = '';

    current.document.uploads.forEach((f, idx) => {
      const item = document.createElement('div');
      item.className = 'uploaded-file-item';
      item.innerHTML = `
        <div class="file-info">
          <i class="fa-regular fa-file-image"></i>
          <div>
            <span class="file-name">${f.name}</span>
            <span class="file-size">(${f.size})</span>
          </div>
        </div>
        <div style="display:flex; align-items:center; gap:1.5rem;">
          <span class="file-status-badge"><i class="fa-solid fa-circle-check"></i> Verified ✅</span>
          <button class="file-remove-btn" data-index="${idx}" type="button"><i class="fa-solid fa-trash-can"></i></button>
        </div>
      `;
      listMount.appendChild(item);

      item.querySelector('.file-remove-btn').onclick = (e) => {
        e.stopPropagation();
        current.document.uploads.splice(idx, 1);
        renderUploadedList();
        saveStateToStorage();
      };
    });
  }

  // Alphabet validator check Binds
  const alphaInputs = document.querySelectorAll('.validate-alphabet');
  alphaInputs.forEach(input => {
    input.onkeypress = (e) => {
      const char = String.fromCharCode(e.which);
      if (!/[a-zA-Z\s]/.test(char)) {
        e.preventDefault();
      }
    };
  });

  // Submit/Validate Binds
  const form = document.getElementById('step-guest-details-form');
  form.onsubmit = () => {
    if (current.document.uploads.length === 0) {
      alert("Please upload at least one verification document.");
      return;
    }

    // Save Primary Details to State
    current.guestInfo.primary = {
      name: document.getElementById('pri-name').value.trim(),
      age: parseInt(document.getElementById('pri-age').value) || 0,
      address: document.getElementById('pri-address').value.trim(),
      gender: 'Male',
      nationality: 'Indian',
      mobile: 'N/A',
      email: 'N/A',
      purpose: 'pilgrimage',
      street: document.getElementById('pri-address').value.trim(),
      city: '',
      state: '',
      pin: ''
    };

    current.guestInfo.additional = [];
    current.guestInfo.specialRequests = '';

    saveStateToStorage();

    // Proceed to Step 4 (Preview Details)
    window.location.hash = `#/booking/step-4`;
  };

  // Initial load
  renderUploadedList();
}

// -------------------------------------------------------------
// STEP 4 RENDERER: Document ID Upload interface
// -------------------------------------------------------------
function renderStep4(canvas) {
  const current = window.RubicornState.currentBooking;
  const room = window.RubicornState.rooms.find(r => r.id === current.roomId);
  
  if (!room) {
    canvas.innerHTML = `<h3>Please select a room first.</h3>`;
    return;
  }

  const p = current.guestInfo.primary;
  const is12Hours = parseInt(current.durationHours) === 12;
  const displayDuration = is12Hours ? '12 Hours' : '24 Hours';
  
  // Calculations
  const baseCost = is12Hours ? Math.max(room.price - 300, 200) : room.price;
  const extraBedRate = room.ac ? 500 : 350;
  const extraBedCost = current.extraBeds * extraBedRate;
  
  let addonsCost = 0;
  current.addons.forEach(ad => { addonsCost += ad.price; });

  const subtotal = baseCost + extraBedCost + addonsCost;
  const taxAmount = Math.round(subtotal * 0.18);
  const totalAmount = subtotal + taxAmount;

  canvas.innerHTML = `
    <h3 class="wizard-step-title">Preview Details</h3>
    <p class="wizard-step-subtitle">Please review your stay and guest profile details before proceeding to payment.</p>

    <div class="admin-card" style="margin-bottom: 2rem; border-color: var(--color-card-border); padding: 1.5rem;">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; padding: 0.5rem;">
        <div>
          <h5 style="color: var(--color-gold-dark); margin-bottom: 0.5rem; font-size: 1.1rem; font-family: var(--font-serif);">Stay Details</h5>
          <p style="font-size: 0.9rem; margin-bottom: 0.25rem;"><strong>Room:</strong> Room ${room.id} (${room.type})</p>
          <p style="font-size: 0.9rem; margin-bottom: 0.25rem;"><strong>Floor:</strong> ${FLOOR_DETAILS[room.floor].name}</p>
          <p style="font-size: 0.9rem; margin-bottom: 0.25rem;"><strong>Check-in:</strong> ${current.checkIn} (12:00 PM)</p>
          <p style="font-size: 0.9rem; margin-bottom: 0.25rem;"><strong>Check-out:</strong> ${current.checkOut} (11:00 AM)</p>
          <p style="font-size: 0.9rem; margin-bottom: 0.25rem;"><strong>Duration:</strong> ${displayDuration}</p>
          <p style="font-size: 0.9rem; margin-bottom: 0.25rem;"><strong>Guests:</strong> ${current.guestsCount} Guest(s)</p>
        </div>
        <div>
          <h5 style="color: var(--color-gold-dark); margin-bottom: 0.5rem; font-size: 1.1rem; font-family: var(--font-serif);">Guest Profile</h5>
          <p style="font-size: 0.9rem; margin-bottom: 0.25rem;"><strong>Full Name:</strong> ${p.name || 'N/A'}</p>
          <p style="font-size: 0.9rem; margin-bottom: 0.25rem;"><strong>Age:</strong> ${p.age || 'N/A'}</p>
          <p style="font-size: 0.9rem; margin-bottom: 0.5rem;"><strong>Address:</strong> ${p.address || 'N/A'}</p>
          <h5 style="color: var(--color-gold-dark); margin-bottom: 0.35rem; font-size: 0.95rem; font-family: var(--font-serif);">Audited Document</h5>
          <p style="font-size: 0.9rem;">
            <strong>Type:</strong> ${current.document.type} <br>
            <strong>File:</strong> ${current.document.uploads[0] ? current.document.uploads[0].name : 'None'}
          </p>
        </div>
      </div>
      <hr style="border: 0; border-top: 1px solid var(--color-card-border); margin: 1.5rem 0;">
      <div>
        <h5 style="color: var(--color-gold-dark); margin-bottom: 0.5rem; font-size: 1.1rem; font-family: var(--font-serif);">Billing Breakdown</h5>
        <div style="display:flex; flex-direction:column; gap:0.4rem; font-size:0.9rem;">
          <div style="display:flex; justify-content:space-between;"><span>Room Tariff (${displayDuration})</span><span>₹${baseCost.toLocaleString('en-IN')}</span></div>
          ${extraBedCost > 0 ? `<div style="display:flex; justify-content:space-between;"><span>Extra Rollaway Bed(s)</span><span>₹${extraBedCost.toLocaleString('en-IN')}</span></div>` : ''}
          ${addonsCost > 0 ? `<div style="display:flex; justify-content:space-between;"><span>Selected Amenities Add-ons</span><span>₹${addonsCost.toLocaleString('en-IN')}</span></div>` : ''}
          <div style="display:flex; justify-content:space-between;"><span>GST (18%)</span><span>₹${taxAmount.toLocaleString('en-IN')}</span></div>
          <div style="display:flex; justify-content:space-between; font-weight:700; color:var(--color-burgundy); border-top: 1px solid var(--color-card-border); padding-top: 0.5rem; font-size: 1rem;">
            <span>Final Total</span><span>₹${totalAmount.toLocaleString('en-IN')}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Verification checkbox -->
    <div style="background:rgba(255,255,255,0.02); border:1px solid var(--color-card-border); padding:1.25rem; border-radius:8px; display:flex; gap:1rem; align-items:flex-start; margin-bottom:2rem;">
      <label class="check-container" style="margin-top:0.25rem;">
        <input type="checkbox" id="declaration-check">
        <span class="checkmark"></span>
      </label>
      <div>
        <label for="declaration-check" style="font-weight:600; cursor:pointer;">I verify that all the details displayed above are correct.</label>
        <p style="font-size:0.8rem; color:var(--color-ivory-dim); margin-top:0.25rem;">By checking this, I declare that the guest information, staying duration, and document uploaded match official registries and are correct.</p>
      </div>
    </div>

    <!-- Wizard Navigation Footer -->
    <div class="wizard-footer">
      <button class="btn-wizard-nav prev" onclick="window.location.hash='#/booking/step-3'"><i class="fa-solid fa-arrow-left"></i> Back</button>
      <button class="btn-wizard-nav next" id="btn-wizard-next" disabled>Continue to Payment <i class="fa-solid fa-arrow-right"></i></button>
    </div>
  `;

  const nextBtn = document.getElementById('btn-wizard-next');
  const decCheck = document.getElementById('declaration-check');

  decCheck.onchange = () => {
    nextBtn.disabled = !decCheck.checked;
    
    // Update Mobile CTA
    const mobBtn = document.getElementById('mobile-fixed-cta-btn');
    if (mobBtn) mobBtn.disabled = !decCheck.checked;
  };

  nextBtn.onclick = () => {
    saveStateToStorage();
    // Proceed to Step 5 (Payment)
    window.location.hash = `#/booking/step-5`;
  };
}

// -------------------------------------------------------------
// STEP 5 RENDERER: Payment Gateway
// -------------------------------------------------------------
function renderStep5(canvas, room) {
  const current = window.RubicornState.currentBooking;
  
  if (!room) {
    canvas.innerHTML = `<h3>Please select a room first.</h3>`;
    return;
  }

  canvas.innerHTML = `
    <h3 class="wizard-step-title">Secure Payment Gateway</h3>
    <p class="wizard-step-subtitle">Select a payment option and verify dummy credentials to secure your room block.</p>

    <!-- Payment tab switches -->
    <div class="pay-methods-tabs" style="margin-bottom: 1.5rem;">
      <span class="pay-tab-btn active" data-method="card"><i class="fa-solid fa-credit-card"></i> Card</span>
      <span class="pay-tab-btn" data-method="upi"><i class="fa-solid fa-qrcode"></i> UPI ID / QR</span>
      ${window.RubicornState.adminLoggedIn ? `<span class="pay-tab-btn" data-method="cash"><i class="fa-solid fa-money-bill-wave"></i> Cash</span>` : ''}
    </div>

    <!-- Payment inputs -->
    <div class="pay-form-content" id="payment-form-canvas" style="margin-bottom: 2rem;">
      <!-- Card Payment Fields with prefilled dummy values -->
      <div class="checkbox-group" style="gap:1rem;">
        <div class="search-field">
          <label for="card-number-inp">Dummy Card Number</label>
          <input type="text" id="card-number-inp" value="4111 2222 3333 4444" placeholder="XXXX XXXX XXXX XXXX" maxlength="19" required readonly>
        </div>
        <div class="form-grid" style="gap:1rem;">
          <div class="search-field">
            <label for="card-expiry-inp">Expiry MM/YY</label>
            <input type="text" id="card-expiry-inp" value="12/28" placeholder="MM/YY" maxlength="5" required readonly>
          </div>
          <div class="search-field">
            <label for="card-cvv-inp">CVV</label>
            <input type="password" id="card-cvv-inp" value="123" placeholder="•••" maxlength="3" required readonly>
          </div>
        </div>
        <div class="search-field">
          <label for="card-name-inp">Name on Card</label>
          <input type="text" id="card-name-inp" value="John Doe" placeholder="Cardholder Name" required readonly>
        </div>
      </div>
    </div>

    <!-- Terms Checkbox -->
    <div style="display:flex; gap:1rem; margin-bottom:2rem; align-items:flex-start;">
      <label class="check-container" style="margin-top:0.25rem;">
        <input type="checkbox" id="terms-agree-check" checked>
        <span class="checkmark"></span>
      </label>
      <div>
        <label for="terms-agree-check" style="font-weight:600; cursor:pointer;">I agree to Rubicorn Hotels & Rooms Terms & Conditions</label>
        <p style="font-size:0.8rem; color:var(--color-ivory-dim); margin-top:0.25rem;">Free cancellations are allowed until 24 hours prior to check-in.</p>
      </div>
    </div>

    <!-- Wizard Navigation Footer -->
    <div class="wizard-footer">
      <button class="btn-wizard-nav prev" onclick="window.location.hash='#/booking/step-4'"><i class="fa-solid fa-arrow-left"></i> Back</button>
      <button class="btn-wizard-nav next" id="btn-wizard-next">Pay & Block Room</button>
    </div>
  `;

  // Binds Payment tab switches
  const payTabs = document.querySelectorAll('.pay-tab-btn');
  payTabs.forEach(tab => {
    tab.onclick = () => {
      payTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const method = tab.getAttribute('data-method');
      window.RubicornState.currentBooking.paymentMethod = method;
      const fCanvas = document.getElementById('payment-form-canvas');
      if (method === 'card') {
        fCanvas.innerHTML = `
          <div class="checkbox-group" style="gap:1rem;">
            <div class="search-field">
              <label for="card-number-inp">Dummy Card Number</label>
              <input type="text" id="card-number-inp" value="4111 2222 3333 4444" placeholder="XXXX XXXX XXXX XXXX" maxlength="19" required readonly>
            </div>
            <div class="form-grid" style="gap:1rem;">
              <div class="search-field">
                <label for="card-expiry-inp">Expiry MM/YY</label>
                <input type="text" id="card-expiry-inp" value="12/28" placeholder="MM/YY" maxlength="5" required readonly>
              </div>
              <div class="search-field">
                <label for="card-cvv-inp">CVV</label>
                <input type="password" id="card-cvv-inp" value="123" placeholder="•••" maxlength="3" required readonly>
              </div>
            </div>
            <div class="search-field">
              <label for="card-name-inp">Name on Card</label>
              <input type="text" id="card-name-inp" value="John Doe" placeholder="Cardholder Name" required readonly>
            </div>
          </div>
        `;
      } else if (method === 'upi') {
        fCanvas.innerHTML = `
          <div class="checkbox-group" style="gap:1.5rem; text-align:center;">
            <div class="search-field" style="text-align:left;">
              <label for="upi-id-inp">Dummy UPI ID</label>
              <input type="text" id="upi-id-inp" value="rubicorn@ybl" placeholder="username@upi" required readonly>
            </div>
            <div style="color:var(--color-ivory-dim); font-size:0.9rem;">— OR SCAN DUMMY QR CODE —</div>
            <div>
              <i class="fa-solid fa-qrcode" style="font-size: 6rem; color: var(--color-gold); margin-bottom: 0.5rem;"></i>
              <p style="font-size:0.75rem; color:var(--color-ivory-dim);">Scan this dummy gateway QR with your GPay/PhonePe App.</p>
            </div>
          </div>
        `;
      } else if (method === 'cash') {
        const is12Hours = parseInt(current.durationHours) === 12;
        const baseCost = is12Hours ? Math.max(room.price - 300, 200) : room.price;
        const extraBedRate = room.ac ? 500 : 350;
        const extraBedCost = current.extraBeds * extraBedRate;
        let addonsCost = 0;
        current.addons.forEach(ad => { addonsCost += ad.price; });
        let subtotal = baseCost + extraBedCost + addonsCost;
        const totalAmount = Math.round(subtotal + (subtotal * 0.18));

        fCanvas.innerHTML = `
          <div class="checkbox-group" style="gap:1.5rem; text-align:center;">
            <div style="background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 8px; padding: 1.5rem; text-align: left;">
              <h4 style="color:var(--color-success); margin-bottom:0.5rem;"><i class="fa-solid fa-money-bill-wave"></i> Cash Payment Desk Mode</h4>
              <p style="font-size:0.85rem; color:var(--color-ivory-dim); line-height: 1.5; margin:0;">
                Collect cash payment of <strong>₹${totalAmount.toLocaleString('en-IN')}</strong> from the guest. Verify that currency is correct and counted. Once collected, click <strong>Pay & Block Room</strong> to complete this cash transaction.
              </p>
            </div>
          </div>
        `;
      }
    };
  });

  const termsCheck = document.getElementById('terms-agree-check');
  const payBtn = document.getElementById('btn-wizard-next');

  termsCheck.onchange = () => {
    payBtn.disabled = !termsCheck.checked;
    const mobBtn = document.getElementById('mobile-fixed-cta-btn');
    if (mobBtn) mobBtn.disabled = !termsCheck.checked;
  };

  payBtn.onclick = () => {
    payBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Processing Secure Payment...`;
    payBtn.disabled = true;

    const mobBtn = document.getElementById('mobile-fixed-cta-btn');
    if (mobBtn) {
      mobBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Processing...`;
      mobBtn.disabled = true;
    }

    setTimeout(() => {
      // 1. Generate booking ID
      const randomDigits = Math.floor(100000 + Math.random() * 900000);
      const bookingId = `RBC-2025-${randomDigits}`;
      
      const checkinDate = current.checkIn;
      const checkoutDate = current.checkOut;
      const is12Hours = parseInt(current.durationHours) === 12;
      const displayDuration = is12Hours ? '12 Hours' : '24 Hours';
      
      const baseCost = is12Hours ? Math.max(room.price - 300, 200) : room.price;
      const extraBedRate = room.ac ? 500 : 350;
      const extraBedCost = current.extraBeds * extraBedRate;
      
      let addonsCost = 0;
      current.addons.forEach(ad => { addonsCost += ad.price; });

      let subtotal = baseCost + extraBedCost + addonsCost;
      const totalAmount = Math.round(subtotal + (subtotal * 0.18));

      // 2. Write details to GLOBAL state database
      const targetRoom = window.RubicornState.rooms.find(r => r.id === room.id);
      if (targetRoom) {
        targetRoom.status = 'occupied';
        targetRoom.currentGuest = {
          name: current.guestInfo.primary.name,
          bookingId: bookingId,
          checkIn: checkinDate,
          checkOut: checkoutDate,
          guestsCount: current.guestsCount,
          extraBeds: current.extraBeds,
          duration: displayDuration
        };
        targetRoom.checkIn = checkinDate;
        targetRoom.checkOut = checkoutDate;
      }

      // Add Booking Entry
      const bookingEntry = {
        bookingId: bookingId,
        roomId: room.id,
        roomType: room.type,
        floor: room.floor,
        guestName: current.guestInfo.primary.name,
        guestAge: current.guestInfo.primary.age,
        guestAddress: current.guestInfo.primary.address,
        checkIn: checkinDate,
        checkOut: checkoutDate,
        nights: displayDuration,
        guests: current.guestsCount,
        extras: current.extraBeds > 0 ? `${current.extraBeds} Extra Rollaway Bed(s)` : 'None',
        food: 'None',
        totalAmount: totalAmount,
        paymentMethod: current.paymentMethod || 'card',
        status: 'confirmed',
        bookingDate: getFormattedDate(0)
      };
      
      window.RubicornState.bookings.push(bookingEntry);

      // Add Guest registry profile entry
      window.RubicornState.guests.push({
        id: `GST-${Math.floor(1000 + Math.random() * 9000)}`,
        name: current.guestInfo.primary.name,
        age: current.guestInfo.primary.age,
        address: current.guestInfo.primary.address,
        mobile: 'N/A',
        email: 'N/A',
        lastStay: checkinDate,
        totalVisits: 1,
        totalSpent: totalAmount,
        documents: current.document.type
      });

      // Clear wizard parameters
      window.RubicornState.lastConfirmedBooking = {
        bookingId: bookingId,
        guestName: current.guestInfo.primary.name,
        email: 'N/A',
        roomNo: room.id,
        roomName: room.type,
        floor: room.floor,
        checkIn: checkinDate,
        checkOut: checkoutDate,
        nights: displayDuration,
        guests: current.guestsCount,
        extras: current.extraBeds > 0 ? `${current.extraBeds} Extra Bed` : 'None',
        amount: totalAmount
      };

      window.RubicornState.currentBooking = {
        checkIn: '',
        checkOut: '',
        durationHours: 24,
        guestsCount: 1,
        roomType: 'All',
        roomId: null,
        extraBeds: 0,
        addons: [],
        guestInfo: { primary: {}, additional: [], specialRequests: '' },
        document: { type: 'Aadhaar', uploads: [] },
        food: [],
        coupon: null,
        paymentMethod: 'card'
      };
      
      saveStateToStorage();

      // Redirect to Confirmation
      window.location.hash = `#/booking/confirmed`;
    }, 2500);
  };
  loadPaymentForm(current.paymentMethod);
}

// -------------------------------------------------------------
// STEP 6 RENDERER: Booking Confirmation Page
// -------------------------------------------------------------
function renderConfirmed(container) {
  const confirmed = window.RubicornState.lastConfirmedBooking;

  if (!confirmed) {
    container.innerHTML = `
      <div class="container section-padding" style="text-align:center;">
        <h3>No booking has been completed in this session yet.</h3>
        <a href="#/rooms" class="btn-book-now" style="margin-top:2rem;">Start Booking</a>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <!-- Celebratory Canvas Confetti -->
    <canvas id="confetti-canvas"></canvas>

    <div class="container section-padding">
      <div class="confirmation-card">
        <!-- Success Header -->
        <div class="confirm-header-decor">
          <div class="success-check-icon">
            <i class="fa-solid fa-check"></i>
          </div>
          <h2 class="green-success-text" style="font-size:2.2rem; margin-bottom:0.5rem;">🎉 Congratulations! Your payment is done & your room is booked</h2>
          <p style="color:#FAF7F2; opacity:0.95;">Sit back, relax, and let us take care of the rest. Your perfect stay awaits!</p>
        </div>

        <!-- Ticket voucher -->
        <div class="voucher-ticket-body">
          <div class="voucher-details-grid">
            <div class="voucher-item">
              <label>Booking ID</label>
              <span id="revealed-booking-id" style="font-family: monospace; font-size:1.15rem; color:var(--color-gold);"></span>
            </div>
            <div class="voucher-item">
              <label>Guest Name</label>
              <span>${confirmed.guestName}</span>
            </div>
            <div class="voucher-item">
              <label>Room & Floor</label>
              <span>Room ${confirmed.roomNo} | ${confirmed.roomName} (${confirmed.floor})</span>
            </div>
            <div class="voucher-item">
              <label>Tariff Paid</label>
              <span class="gold-color" style="font-weight:700;">₹${confirmed.amount.toLocaleString('en-IN')}</span>
            </div>
            <div class="voucher-item">
              <label>Check-In Date</label>
              <span>${confirmed.checkIn} (from 12:00 PM)</span>
            </div>
            <div class="voucher-item">
              <label>Check-Out Date</label>
              <span>${confirmed.checkOut} (until 11:00 AM)</span>
            </div>
            <div class="voucher-item full-width">
              <label>Selected Extras</label>
              <span>${confirmed.extras}</span>
            </div>
          </div>

          <!-- Celebration message -->
          <div class="celebration-msg-box">
            "Dear ${confirmed.guestName}, welcome to the Rubicorn family! Room ${confirmed.roomNo} has been reserved exclusively for you. Whether you are here to seek blessings at the sacred temples, explore local heritage, or rest after travel — we promise to make every moment comfortable. Our desk team is at your service 24x7. We look forward to welcoming you! 🙏"
          </div>

          <!-- What happens next list -->
          <h4 style="margin-bottom:1rem; color:var(--color-gold);">What Happens Next?</h4>
          <ul class="nearby-list" style="margin-bottom:2.5rem;">
            <li><i class="fa-solid fa-envelope"></i> Confirmation invoice voucher sent to <strong>${confirmed.email}</strong></li>
            <li><i class="fa-solid fa-passport"></i> Please carry original verification documents during front-desk check-in.</li>
            <li><i class="fa-solid fa-mobile-screen-button"></i> Keep your Booking ID <strong>${confirmed.bookingId}</strong> saved on your phone.</li>
          </ul>

          <!-- Action buttons -->
          <div style="display:flex; justify-content:center; gap:1.25rem; flex-wrap:wrap;">
            <button class="btn-book-now" id="btn-download-pdf"><i class="fa-solid fa-file-pdf"></i> Download Voucher</button>
            <button class="btn-book-now" id="btn-share-whatsapp" style="background:linear-gradient(135deg, #25D366 0%, #128C7E 100%); border-color:#25D366;"><i class="fa-brands fa-whatsapp"></i> Share details</button>
            <a href="#/rooms" class="btn-wizard-nav prev"><i class="fa-solid fa-plus"></i> Book Another stay</a>
            <a href="#/" class="btn-wizard-nav prev"><i class="fa-solid fa-house"></i> Home</a>
          </div>
        </div>
      </div>
      
      <!-- Celebratory image mount -->
      <div class="floor-visual-container" id="celebrate-img-mount" style="max-width:750px; margin: 3rem auto 0; aspect-ratio:16/7;"></div>
    </div>
  `;

  // Start Confetti rain animation
  initConfettiCanvas();

  // Typewriter booking ID reveal
  const targetId = confirmed.bookingId;
  const idPlaceholder = document.getElementById('revealed-booking-id');
  let idx = 0;
  function typeId() {
    if (idx < targetId.length) {
      idPlaceholder.innerText += targetId.charAt(idx);
      idx++;
      setTimeout(typeId, 80);
    }
  }
  typeId();

  // Mount celebratory final image
  mountGeminiImage(document.getElementById('celebrate-img-mount'), 'dinner', 'Welcome display', 'floor-illustration-img');

  // Binds
  document.getElementById('btn-download-pdf').onclick = () => {
    alert(`Generating PDF file for ${confirmed.bookingId}...\nDownload complete! (Demo PDF generated successfully)`);
  };

  document.getElementById('btn-share-whatsapp').onclick = () => {
    const textMsg = encodeURIComponent(`Hi! I just booked a stay at Rubicorn Hotels & Rooms.\nBooking ID: ${confirmed.bookingId}\nRoom: Room ${confirmed.roomNo} (${confirmed.roomName})\nCheck-In: ${confirmed.checkIn}\nLooking forward to it!`);
    window.open(`https://wa.me/919876543210?text=${textMsg}`, '_blank');
  };
}

// Canvas Confetti Generator Engine
function initConfettiCanvas() {
  const canvas = document.getElementById('confetti-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ['#6B1A1A', '#C9A84C', '#F5F0E8', '#a58434', '#8b2525'];
  const confettiCount = 120;
  const confetti = [];

  for (let i = 0; i < confettiCount; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: Math.random() * 6 + 4,
      d: Math.random() * canvas.height,
      color: colors[Math.floor(Math.random() * colors.length)],
      tilt: Math.random() * 10 - 5,
      tiltAngleIncremental: Math.random() * 0.07 + 0.02,
      tiltAngle: 0
    });
  }

  let animationFrameId;

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    confetti.forEach((p, idx) => {
      p.tiltAngle += p.tiltAngleIncremental;
      p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
      p.tilt = Math.sin(p.tiltAngle - idx / 3) * 15;

      ctx.beginPath();
      ctx.lineWidth = p.r;
      ctx.strokeStyle = p.color;
      ctx.moveTo(p.x + p.tilt + p.r / 2, p.y);
      ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 2);
      ctx.stroke();
    });

    updateConfetti();
    animationFrameId = requestAnimationFrame(draw);
  }

  function updateConfetti() {
    for (let i = 0; i < confettiCount; i++) {
      const p = confetti[i];
      if (p.y > canvas.height) {
        confetti[i] = {
          x: Math.random() * canvas.width,
          y: -20,
          r: p.r,
          d: p.d,
          color: p.color,
          tilt: p.tilt,
          tiltAngleIncremental: p.tiltAngleIncremental,
          tiltAngle: p.tiltAngle
        };
      }
    }
  }

  // Clear animation loop after 7 seconds
  draw();
  setTimeout(() => {
    cancelAnimationFrame(animationFrameId);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, 7000);

  // Responsive canvas resize
  window.onresize = () => {
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  };
}

// -------------------------------------------------------------
// ADMIN PANEL COMPONENT VIEW RENDERERS
// -------------------------------------------------------------

// A. Admin Login Page
function renderAdminLogin(container) {
  if (window.RubicornState.adminLoggedIn) {
    window.location.hash = '#/admin/dashboard';
    return;
  }

  container.className = 'admin-login-layout';
  container.innerHTML = `
    <div class="admin-login-card fade-in-up-anim">
      <div style="margin-bottom:1.5rem;"><img src="assets/logo.png" alt="Rubicorn Logo" style="height:60px; object-fit:contain; filter:drop-shadow(0 0 5px rgba(201, 168, 76, 0.35));"></div>
      <h2>Authorized Login</h2>
      <p style="color:var(--color-ivory-dim); font-size:0.9rem; margin-bottom:2.5rem;">Rubicorn Hotels Admin Desk Command Portal</p>

      <form id="admin-login-form" onsubmit="return false;">
        <div class="checkbox-group" style="gap:1.25rem; text-align:left; margin-bottom:2rem;">
          <div class="search-field">
            <label for="admin-email">Admin Email ID</label>
            <input type="email" id="admin-email" value="admin@rubicorn.com" required>
          </div>
          <div class="search-field">
            <label for="admin-pass">Secure Password</label>
            <input type="password" id="admin-pass" value="Rubicorn@2025" required>
          </div>
        </div>
        
        <button type="submit" class="btn-book-now" style="width:100%; padding:0.85rem;">Secure Log-in</button>
      </form>
      
      <div style="font-size:0.75rem; color:var(--color-ivory-dim); margin-top:2rem; line-height: 1.6; text-align: left; background: rgba(255,255,255,0.02); padding: 0.75rem; border-radius: 6px; border: 1px solid var(--color-card-border);">
        <div style="font-weight: 700; color: var(--color-gold); margin-bottom: 0.25rem;"><i class="fa-solid fa-circle-info"></i> Seeded Review Credentials:</div>
        • <strong>Admin (Owner / Super Powers)</strong>: <span style="font-family: monospace;">admin@rubicorn.com</span> / <span style="font-family: monospace;">Rubicorn@2025</span><br>
        • <strong>Manager (Receptionist)</strong>: <span style="font-family: monospace;">manager@rubicorn.com</span> / <span style="font-family: monospace;">Manager@2025</span>
      </div>
    </div>
  `;

  document.getElementById('admin-login-form').onsubmit = () => {
    const email = document.getElementById('admin-email').value;
    const pass = document.getElementById('admin-pass').value;
    
    if (email === 'admin@rubicorn.com' && pass === 'Rubicorn@2025') {
      window.RubicornState.adminLoggedIn = true;
      window.RubicornState.userRole = 'admin';
      saveStateToStorage();
      
      // Notify active header
      updateNavActiveLinks('/admin/dashboard');
      
      showToast('Welcome, Administrator (Owner / Super User)', 'success');
      window.location.hash = '#/admin/dashboard';
    } else if (email === 'manager@rubicorn.com' && pass === 'Manager@2025') {
      window.RubicornState.adminLoggedIn = true;
      window.RubicornState.userRole = 'manager';
      saveStateToStorage();
      
      // Notify active header
      updateNavActiveLinks('/admin/dashboard');
      
      showToast('Welcome, Manager/Receptionist (Receptionist Mode)', 'success');
      window.location.hash = '#/admin/dashboard';
    } else {
      alert("Invalid login credentials.\n\nUse review options:\n- admin@rubicorn.com / Rubicorn@2025\n- manager@rubicorn.com / Manager@2025");
    }
  };
}

// B. Admin Main Dashboard Layout Shell
function renderAdminDashboard(subview) {
  const container = document.getElementById('app');
  container.innerHTML = '';

  const mainDiv = document.createElement('div');
  mainDiv.className = 'admin-layout-wrapper fade-in-up-anim';
  container.appendChild(mainDiv);

  const userRole = window.RubicornState.userRole || 'manager';
  const roleTitle = userRole === 'admin' ? 'Administrator' : 'Manager / Receptionist';
  const roleBadge = userRole === 'admin' ? 'Owner (Super User)' : 'Receptionist / Desk Operator';

  mainDiv.innerHTML = `
    <!-- Sidebar -->
    <aside class="admin-sidebar">
      <div class="admin-sidebar-header" style="text-align:center; padding-bottom:1rem; border-bottom:1px solid var(--color-card-border); width: 100%;">
        <img src="assets/logo.png" alt="Rubicorn Logo" style="height:48px; object-fit:contain; margin-bottom:0.5rem; filter:drop-shadow(0 0 4px rgba(201, 168, 76, 0.35));">
        <h4 style="font-family:var(--font-sans); font-size:1rem; margin:0.25rem 0;">${roleTitle}</h4>
        <span style="font-size:0.7rem; color:var(--color-gold); font-weight:700; text-transform:uppercase;">${roleBadge}</span>
      </div>

      <nav class="admin-sidebar-menu">
        <a href="#/admin/dashboard" class="admin-menu-item ${subview === 'dashboard' ? 'active' : ''}"><i class="fa-solid fa-chart-line"></i> Dashboard</a>
        <a href="#/admin/floors" class="admin-menu-item ${subview === 'floors' ? 'active' : ''}"><i class="fa-solid fa-layer-group"></i> Floor Board</a>
        <a href="#/admin/bookings" class="admin-menu-item ${subview === 'bookings' ? 'active' : ''}"><i class="fa-solid fa-book-bookmark"></i> Bookings</a>
        <a href="#/admin/guests" class="admin-menu-item ${subview === 'guests' ? 'active' : ''}"><i class="fa-solid fa-users"></i> Guests Registry</a>
        <a href="#/admin/reports" class="admin-menu-item ${subview === 'reports' ? 'active' : ''}"><i class="fa-solid fa-file-invoice-dollar"></i> Reports</a>
      </nav>

      <button id="admin-logout-btn" class="btn-modal secondary" style="width:100%; padding:0.6rem; margin-top:2rem;"><i class="fa-solid fa-power-off"></i> Logout</button>
    </aside>

    <!-- Main Workspace -->
    <main id="admin-workspace-content" style="flex:1;"></main>

    <!-- Admin Action Modal -->
    <div class="modal-overlay" id="admin-modal-mount"></div>
  `;

  // Binds Logout
  document.getElementById('admin-logout-btn').onclick = () => {
    window.RubicornState.adminLoggedIn = false;
    saveStateToStorage();
    updateNavActiveLinks('/');
    showToast('Administrator logged out successfully.', 'info');
    window.location.hash = '#/admin';
  };

  // Switch Subviews
  const workspace = document.getElementById('admin-workspace-content');
  
  if (subview === 'dashboard') renderDashboardHome(workspace);
  else if (subview === 'floors') renderDashboardFloors(workspace);
  else if (subview === 'bookings') renderDashboardBookings(workspace);
  else if (subview === 'guests') renderDashboardGuests(workspace);
  else if (subview === 'reports') renderDashboardReports(workspace);
}

// B.1 Dashboard Overview page
function renderDashboardHome(workspace) {
  // Compute metrics
  const totalRooms = window.RubicornState.rooms.length;
  const occupiedCount = window.RubicornState.rooms.filter(r => r.status === 'occupied').length;
  const availableCount = window.RubicornState.rooms.filter(r => r.status === 'available').length;
  const maintCount = window.RubicornState.rooms.filter(r => r.status === 'maintenance').length;
  const checkoutCount = window.RubicornState.rooms.filter(r => r.status === 'checking-out').length;

  let todayRevenue = 0;
  window.RubicornState.bookings.forEach(b => {
    if (b.bookingDate === getFormattedDate(0)) {
      todayRevenue += b.totalAmount;
    }
  });

  let monthlyRevenue = 0;
  window.RubicornState.bookings.forEach(b => {
    monthlyRevenue += b.totalAmount;
  });

  const occupancyRate = Math.round((occupiedCount / totalRooms) * 100) || 0;

  workspace.innerHTML = `
    <!-- Top Row Header -->
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:2rem;">
      <h2 style="font-size:2rem;">Dashboard Overview</h2>
      <span id="live-clock" style="font-weight:600; color:var(--color-gold); font-size:0.95rem;"></span>
    </div>

    <!-- KPI Metric Cards -->
    <div class="admin-kpi-grid">
      <div class="kpi-card">
        <div class="kpi-icon-wrap blue"><i class="fa-solid fa-door-closed"></i></div>
        <div class="kpi-data">
          <span class="kpi-value">${totalRooms}</span>
          <span class="kpi-label">Total Rooms</span>
        </div>
      </div>
      
      <div class="kpi-card">
        <div class="kpi-icon-wrap green"><i class="fa-solid fa-square-check"></i></div>
        <div class="kpi-data">
          <span class="kpi-value" id="kpi-avail">${availableCount}</span>
          <span class="kpi-label">Available Now</span>
        </div>
      </div>

      <div class="kpi-card">
        <div class="kpi-icon-wrap red"><i class="fa-solid fa-user-tag"></i></div>
        <div class="kpi-data">
          <span class="kpi-value" id="kpi-occupied">${occupiedCount}</span>
          <span class="kpi-label">Occupied</span>
        </div>
      </div>

      <div class="kpi-card">
        <div class="kpi-icon-wrap gold"><i class="fa-solid fa-indian-rupee-sign"></i></div>
        <div class="kpi-data">
          <span class="kpi-value">₹${todayRevenue.toLocaleString('en-IN')}</span>
          <span class="kpi-label">Revenue Today</span>
        </div>
      </div>
    </div>

    <!-- Charts Split -->
    <div class="admin-charts-grid">
      <!-- Floor Utilization -->
      <div class="admin-card">
        <div class="admin-card-title">
          <span>Floor-wise Occupancy Ratio</span>
          <span style="font-size:0.75rem; color:var(--color-gold);">LIVE SYNCED</span>
        </div>
        
        <div class="floor-progress-list" id="floor-progress-mount"></div>
      </div>

      <!-- Live Activities list -->
      <div class="admin-card">
        <div class="admin-card-title">Today's Activity Feed</div>
        <div id="activity-feed-mount" style="display:flex; flex-direction:column; gap:1.25rem; max-height:260px; overflow-y:auto;"></div>
      </div>
    </div>

    <!-- Recent Bookings Table -->
    <div class="admin-card" style="margin-bottom:2rem;">
      <div class="admin-card-title">
        <span>Recent Booking Transactions</span>
        <a href="#/admin/bookings" style="font-size:0.85rem; font-weight:600;"><i class="fa-solid fa-arrow-up-right-from-square"></i> View All</a>
      </div>
      
      <div class="admin-table-wrapper">
        <table class="admin-data-table">
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>Guest</th>
              <th>Room No</th>
              <th>Dates</th>
              <th>Nights</th>
              <th>Paid Amt</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody id="recent-bookings-tbody"></tbody>
        </table>
      </div>
    </div>
  `;

  // Start Clock timer
  function updateLiveClock() {
    const clock = document.getElementById('live-clock');
    if (clock) {
      const now = new Date();
      clock.innerText = `Live Console Time: ${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
    }
  }
  updateLiveClock();
  setInterval(updateLiveClock, 1000);

  // Render occupancy progress bars
  const floors = ['GF', '1F', '2F', '3F', '4F'];
  const progressMount = document.getElementById('floor-progress-mount');
  
  floors.forEach(fl => {
    const floorRooms = window.RubicornState.rooms.filter(r => r.floor === fl);
    const occupiedFl = floorRooms.filter(r => r.status === 'occupied').length;
    const totalFl = floorRooms.length;
    const ratio = Math.round((occupiedFl / totalFl) * 100) || 0;
    
    // Decide progress bar colors
    let barColor = 'var(--color-success)';
    if (ratio >= 80) barColor = 'var(--color-occupied)';
    else if (ratio >= 50) barColor = 'var(--color-checking-out)';

    const item = document.createElement('div');
    item.className = 'floor-progress-item';
    item.innerHTML = `
      <div class="floor-progress-header">
        <span>${FLOOR_DETAILS[fl].name}</span>
        <span>${occupiedFl} / ${totalFl} Rooms (${ratio}%)</span>
      </div>
      <div class="floor-progress-bg">
        <div class="floor-progress-bar" style="width:0%; background-color:${barColor};"></div>
      </div>
    `;
    progressMount.appendChild(item);
    
    // Animate progress widths
    setTimeout(() => {
      item.querySelector('.floor-progress-bar').style.width = `${ratio}%`;
    }, 100);
  });

  // Render recent bookings
  const tbody = document.getElementById('recent-bookings-tbody');
  const sortedBookings = [...window.RubicornState.bookings].sort((a, b) => new Date(b.bookingDate) - new Date(a.bookingDate));
  
  if (sortedBookings.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" style="text-align:center; padding:3rem; color:var(--color-ivory-dim);">
          No bookings logged yet. Rooms are ready for guests!
        </td>
      </tr>
    `;
  } else {
    sortedBookings.slice(0, 5).forEach(b => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td style="font-family:monospace; font-weight:700; color:var(--color-gold);">${b.bookingId}</td>
        <td><strong>${b.guestName}</strong></td>
        <td>Room ${b.roomId} (${b.floor})</td>
        <td style="font-size:0.8rem;">${b.checkIn} to ${b.checkOut}</td>
        <td style="text-align:center;">${b.nights}</td>
        <td style="font-weight:700; color:var(--color-gold);">₹${b.totalAmount.toLocaleString('en-IN')}</td>
        <td><span class="status-pill confirmed">✓ Confirmed</span></td>
      `;
      tbody.appendChild(tr);
    });
  }

  // Render live activity logs feed
  const feed = document.getElementById('activity-feed-mount');
  
  // Base pre-loaded logs
  const baseLogs = [
    { time: '10 mins ago', text: 'Daily auditing checked out room 103 successfully.' },
    { time: '1 hr ago', text: 'Checked out room G01. Available now.' },
    { time: '2 hrs ago', text: 'Admin blocked G05 under Maintenance rules.' }
  ];

  // Dynamic user session logs prepended
  const dynamicLogs = [];
  sortedBookings.forEach(b => {
    dynamicLogs.push({
      time: 'Just now',
      text: `Room ${b.roomId} booked by ${b.guestName} (₹${b.totalAmount.toLocaleString('en-IN')})`
    });
  });

  const allLogs = [...dynamicLogs, ...baseLogs];
  
  allLogs.forEach(l => {
    const row = document.createElement('div');
    row.style.cssText = 'border-bottom:1px solid rgba(255,255,255,0.03); padding-bottom:0.75rem;';
    row.innerHTML = `
      <div style="display:flex; justify-content:between; align-items:center; font-size:0.85rem; margin-bottom:0.25rem;">
        <span style="font-weight:600; color:var(--color-gold);">${l.time}</span>
        <i class="fa-solid fa-clock-rotate-left" style="font-size:0.75rem; color:var(--color-ivory-dim);"></i>
      </div>
      <p style="font-size:0.85rem; color:var(--color-ivory-dim);">${l.text}</p>
    `;
    feed.appendChild(row);
  });
}

// B.2 Dashboard Floor Room statuses map
function renderDashboardFloors(workspace) {
  workspace.innerHTML = `
    <h2 style="font-size:2rem; margin-bottom:2rem;">Live Room Status — All Floors</h2>

    <!-- Tabs selector -->
    <div class="floor-selector-tabs" id="admin-floor-tabs-list">
      <span class="floor-tab active" data-floor="GF">GF</span>
      <span class="floor-tab" data-floor="1F">1F</span>
      <span class="floor-tab" data-floor="2F">2F</span>
      <span class="floor-tab" data-floor="3F">3F</span>
      <span class="floor-tab" data-floor="4F">4F</span>
    </div>

    <!-- Map Board -->
    <div class="admin-floor-board-grid" id="admin-floor-board-mount" style="margin-bottom:2rem;"></div>
  `;

  // Tabs toggle binds
  let activeFl = 'GF';
  const tabs = document.querySelectorAll('#admin-floor-tabs-list .floor-tab');
  
  tabs.forEach(t => {
    t.onclick = () => {
      tabs.forEach(tab => tab.classList.remove('active'));
      t.classList.add('active');
      activeFl = t.getAttribute('data-floor');
      loadAdminFloorBoard(activeFl);
    };
  });

  function loadAdminFloorBoard(floorCode) {
    const mount = document.getElementById('admin-floor-board-mount');
    mount.innerHTML = '';
    
    const floorRooms = window.RubicornState.rooms.filter(r => r.floor === floorCode);
    
    floorRooms.forEach(room => {
      const tile = document.createElement('div');
      
      const statusClass = room.status;
      tile.className = `admin-room-tile ${statusClass}`;
      
      let guestTextHTML = `<div style="font-size:0.8rem; color:var(--color-gold); font-weight:700;">₹${room.price}/night</div>`;
      if (room.status === 'occupied') {
        guestTextHTML = `
          <div class="admin-tile-guest"><i class="fa-solid fa-user"></i> ${room.currentGuest.name}</div>
          <div class="admin-tile-dates">${room.currentGuest.checkIn} to ${room.currentGuest.checkOut}</div>
        `;
      } else if (room.status === 'maintenance') {
        guestTextHTML = `
          <div class="admin-tile-guest" style="color:var(--color-maintenance);"><i class="fa-solid fa-screwdriver-wrench"></i> Blocked</div>
          <div class="admin-tile-dates">Under Maintenance</div>
        `;
      }

      tile.innerHTML = `
        <div class="admin-tile-header">
          <span class="admin-tile-no">${room.id}</span>
          <span class="admin-tile-type">${room.ac ? '❄️ AC' : '🌀 Fan'}</span>
        </div>
        ${guestTextHTML}
      `;

      // Click opens Action Modal
      tile.onclick = () => {
        openAdminActionModal(room);
      };

      mount.appendChild(tile);
    });
  }

  // Load initial board GF
  loadAdminFloorBoard(activeFl);
}

// Admin Action Modal handler
function openAdminActionModal(room) {
  const mount = document.getElementById('admin-modal-mount');
  mount.innerHTML = '';
  mount.classList.add('open');

  let descHTML = `
    <div class="voucher-item">
      <label>Status</label>
      <span class="status-pill confirmed" style="align-self:flex-start; margin-top:0.25rem;">Available Now</span>
    </div>
    <div class="voucher-item" style="margin-top:1rem;">
      <label>Base Tariff</label>
      <span>₹${room.price} / night</span>
    </div>
  `;

  if (room.status === 'occupied') {
    descHTML = `
      <div class="voucher-item">
        <label>Current Status</label>
        <span class="status-pill" style="align-self:flex-start; margin-top:0.25rem; background:rgba(239, 68, 68, 0.15); color:var(--color-occupied); border:1px solid rgba(239, 68, 68, 0.3);">Occupied</span>
      </div>
      <div class="voucher-item" style="margin-top:1rem;">
        <label>Primary Guest</label>
        <span style="font-weight:700;">${room.currentGuest.name}</span>
      </div>
      <div class="voucher-item" style="margin-top:1rem;">
        <label>Booking Transaction ID</label>
        <span style="font-family:monospace; color:var(--color-gold);">${room.currentGuest.bookingId}</span>
      </div>
      <div class="voucher-item" style="margin-top:1rem;">
        <label>Check-in Duration</label>
        <span>${room.currentGuest.checkIn} to ${room.currentGuest.checkOut}</span>
      </div>
      <div class="voucher-item" style="margin-top:1rem;">
        <label>Extra rollaway beds</label>
        <span>${room.currentGuest.extraBeds} bed(s)</span>
      </div>
    `;
  } else if (room.status === 'maintenance') {
    descHTML = `
      <div class="voucher-item">
        <label>Status</label>
        <span class="status-pill" style="align-self:flex-start; margin-top:0.25rem; background:rgba(234, 179, 8, 0.15); color:var(--color-maintenance); border:1px solid rgba(234, 179, 8, 0.3);">Under Maintenance</span>
      </div>
    `;
  }

  const isAdmin = window.RubicornState.userRole === 'admin';

  const modalBox = document.createElement('div');
  modalBox.className = 'modal-card';
  modalBox.innerHTML = `
    <div class="modal-header">
      <h3 style="font-size:1.35rem;">Room ${room.id} Configuration</h3>
      <button class="modal-close-btn" id="btn-close-modal"><i class="fa-solid fa-xmark"></i></button>
    </div>
    
    <div style="font-size:0.85rem; color:var(--color-ivory-dim); margin-bottom:1rem;">
      <strong>Category Class:</strong> ${room.type} (${room.floor} Level)
    </div>

    <div class="checkbox-group" style="gap:1rem; border:1px solid var(--color-card-border); padding:1.25rem; border-radius:8px; background:var(--color-charcoal);">
      ${descHTML}
    </div>

    <div class="modal-action-row">
      ${room.status === 'occupied' ? `
        <button class="btn-modal primary" id="btn-admin-checkout">Mark Check-Out</button>
      ` : ''}
      
      ${room.status === 'available' ? `
        <button class="btn-modal primary" id="btn-admin-block" style="background:#d97706; border-color:#d97706;">Block Room</button>
      ` : ''}

      ${room.status === 'maintenance' ? `
        <button class="btn-modal primary" id="btn-admin-unblock">Unblock (Make Avail)</button>
      ` : ''}
      
      <button class="btn-modal secondary" id="btn-cancel-modal">Cancel Action</button>
    </div>
  `;
  mount.appendChild(modalBox);

  // Close Binds
  const closeModal = () => { mount.classList.remove('open'); };
  document.getElementById('btn-close-modal').onclick = closeModal;
  document.getElementById('btn-cancel-modal').onclick = closeModal;

  // Actions Binds
  if (room.status === 'occupied') {
    document.getElementById('btn-admin-checkout').onclick = () => {
      if (confirm(`Confirm checkout processing for ${room.currentGuest.name}?`)) {
        // Change room back to available
        const stateRoom = window.RubicornState.rooms.find(r => r.id === room.id);
        stateRoom.status = 'available';
        stateRoom.currentGuest = null;
        stateRoom.checkIn = null;
        stateRoom.checkOut = null;
        
        saveStateToStorage();
        closeModal();
        showToast(`Room ${room.id} checked out successfully.`, 'success');
        
        // Reload parent view
        renderDashboardFloors(document.getElementById('admin-workspace-content'));
      }
    };
  }

  if (room.status === 'available') {
    document.getElementById('btn-admin-block').onclick = () => {
      if (confirm(`Block room ${room.id} for maintenance scheduling?`)) {
        const stateRoom = window.RubicornState.rooms.find(r => r.id === room.id);
        stateRoom.status = 'maintenance';
        
        saveStateToStorage();
        closeModal();
        showToast(`Room ${room.id} is now blocked for maintenance.`, 'info');
        
        renderDashboardFloors(document.getElementById('admin-workspace-content'));
      }
    };
  }

  if (room.status === 'maintenance') {
    document.getElementById('btn-admin-unblock').onclick = () => {
      const stateRoom = window.RubicornState.rooms.find(r => r.id === room.id);
      stateRoom.status = 'available';
      
      saveStateToStorage();
      closeModal();
      showToast(`Room ${room.id} is unblocked and available for bookings.`, 'success');
      
      renderDashboardFloors(document.getElementById('admin-workspace-content'));
    };
  }
}

// B.3 Bookings Registry list
function renderDashboardBookings(workspace) {
  workspace.innerHTML = `
    <h2 style="font-size:2rem; margin-bottom:2rem;">All Logged Bookings</h2>

    <!-- Search/Filters bar -->
    <div style="background:var(--color-card-bg); border:1px solid var(--color-card-border); padding:1rem; border-radius:8px; margin-bottom:1.5rem; display:grid; grid-template-columns:1.5fr 1fr 1fr; gap:1rem; align-items:center;">
      <div class="search-field" style="margin-bottom:0;">
        <input type="text" id="admin-booking-search" placeholder="Search by Booking ID or Guest Name...">
      </div>
      <div class="search-field" style="margin-bottom:0;">
        <select id="admin-booking-floor-filter" style="width:100%;">
          <option value="All">All Floors</option>
          <option value="GF">Ground Floor</option>
          <option value="1F">1st Floor</option>
          <option value="2F">2nd Floor</option>
          <option value="3F">3rd Floor</option>
          <option value="4F">4th Floor</option>
        </select>
      </div>
      <button class="btn-book-now" id="btn-admin-booking-filter-reset" style="height:40px; padding:0;">Reset filters</button>
    </div>

    <!-- List table -->
    <div class="admin-card">
      <div class="admin-table-wrapper">
        <table class="admin-data-table">
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>Guest Name</th>
              <th>Room No</th>
              <th>Stay Duration</th>
              <th>Extras</th>
              <th>Pre-ordered F&B</th>
              <th>Total Billing</th>
              <th>Payment Method</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody id="admin-bookings-list-tbody"></tbody>
        </table>
      </div>
    </div>
  `;

  const searchInp = document.getElementById('admin-booking-search');
  const floorSel = document.getElementById('admin-booking-floor-filter');
  const resetBtn = document.getElementById('btn-admin-booking-filter-reset');

  searchInp.oninput = applyBookingFilters;
  floorSel.onchange = applyBookingFilters;
  resetBtn.onclick = () => {
    searchInp.value = '';
    floorSel.value = 'All';
    applyBookingFilters();
  };

  function applyBookingFilters() {
    let filtered = [...window.RubicornState.bookings];
    
    // Search keyword query
    const q = searchInp.value.trim().toLowerCase();
    if (q) {
      filtered = filtered.filter(b => b.bookingId.toLowerCase().includes(q) || b.guestName.toLowerCase().includes(q));
    }

    // Floor filter
    const fl = floorSel.value;
    if (fl !== 'All') {
      filtered = filtered.filter(b => b.floor === fl);
    }

    renderBookingsList(filtered);
  }

  const isAdmin = window.RubicornState.userRole === 'admin';

  function renderBookingsList(bookings) {
    const tbody = document.getElementById('admin-bookings-list-tbody');
    tbody.innerHTML = '';
    
    if (bookings.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="10" style="text-align:center; padding:3rem; color:var(--color-ivory-dim);">
            No matching booking records found.
          </td>
        </tr>
      `;
      return;
    }

    bookings.forEach(b => {
      const isPending = b.approvalStatus === 'pending_approval';
      const statusPill = isPending 
        ? `<span class="status-pill warning" style="background:rgba(234,179,8,0.15); color:var(--color-maintenance); border:1px solid rgba(234,179,8,0.3);">⚠️ Pending Mod</span>` 
        : `<span class="status-pill confirmed">✓ Confirmed</span>`;
      
      const paymentText = b.paymentMethod ? b.paymentMethod.toUpperCase() : 'CARD';
      const paymentIcon = b.paymentMethod === 'cash' ? '<i class="fa-solid fa-money-bill-wave" style="color: var(--color-success);"></i>' : (b.paymentMethod === 'upi' ? '<i class="fa-solid fa-qrcode"></i>' : '<i class="fa-solid fa-credit-card"></i>');
      
      let actionButtons = '';
      if (isAdmin) {
        if (isPending) {
          actionButtons = `
            <button class="btn-book-now" onclick="openReviewApprovalModal('${b.bookingId}')" style="padding: 0.25rem 0.5rem; font-size: 0.75rem; background: #eab308; border-color: #eab308; white-space: nowrap;"><i class="fa-solid fa-clipboard-check"></i> Review</button>
          `;
        } else {
          actionButtons = `
            <button class="btn-book-now" onclick="openModifyBookingModal('${b.bookingId}', true)" style="padding: 0.25rem 0.5rem; font-size: 0.75rem; white-space: nowrap;"><i class="fa-solid fa-pencil"></i> Modify</button>
          `;
        }
      } else {
        // Manager / Receptionist
        if (isPending) {
          actionButtons = `
            <span style="font-size:0.75rem; color:var(--color-gold); font-weight:600; white-space: nowrap;"><i class="fa-solid fa-hourglass-half"></i> Pending Admin</span>
          `;
        } else {
          actionButtons = `
            <button class="btn-book-now" onclick="openModifyBookingModal('${b.bookingId}', false)" style="padding: 0.25rem 0.5rem; font-size: 0.75rem; background: #605050; border-color: #605050; white-space: nowrap;"><i class="fa-solid fa-lock"></i> Request Edit</button>
          `;
        }
      }

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td style="font-family:monospace; font-weight:700; color:var(--color-gold);">${b.bookingId}</td>
        <td>
          <strong>${b.guestName}</strong>
          <div style="font-size:0.75rem; color:var(--color-ivory-dim); margin-top: 2px;">
            Age: ${b.guestAge || 'N/A'} | Addr: ${b.guestAddress || 'N/A'}
          </div>
        </td>
        <td>Room ${b.roomId} (${b.floor})</td>
        <td style="font-size:0.8rem;">
          ${b.checkIn} to ${b.checkOut}
          <div style="font-size:0.7rem; color:var(--color-ivory-dim);">${b.nights} night(s) | ${b.guests} guest(s)</div>
        </td>
        <td style="font-size:0.8rem;">${b.extras}</td>
        <td style="font-size:0.8rem; max-width:120px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" title="${b.food}">${b.food}</td>
        <td style="font-weight:700; color:var(--color-gold);">₹${b.totalAmount.toLocaleString('en-IN')}</td>
        <td style="font-size:0.8rem; white-space:nowrap;">${paymentIcon} ${paymentText}</td>
        <td>${statusPill}</td>
        <td>${actionButtons}</td>
      `;
      tbody.appendChild(tr);
    });
  }

  // Initial render load
  applyBookingFilters();
}

// B.3.1 Modal handler to modify bookings
function openModifyBookingModal(bookingId, directEdit) {
  const mount = document.getElementById('admin-modal-mount');
  mount.innerHTML = '';
  mount.classList.add('open');

  const b = window.RubicornState.bookings.find(x => x.bookingId === bookingId);
  if (!b) {
    showToast('Booking not found', 'error');
    return;
  }

  const modalBox = document.createElement('div');
  modalBox.className = 'modal-card';
  modalBox.style.maxWidth = '600px';
  modalBox.innerHTML = `
    <div class="modal-header">
      <h3 style="font-size:1.35rem;"><i class="fa-solid fa-file-signature"></i> ${directEdit ? 'Modify Booking' : 'Request Booking Modification'}</h3>
      <button class="modal-close-btn" id="btn-close-modal"><i class="fa-solid fa-xmark"></i></button>
    </div>
    
    <div style="font-size:0.85rem; color:var(--color-ivory-dim); margin-bottom:1rem;">
      <strong>Booking ID:</strong> ${b.bookingId} | <strong>Current Room:</strong> Room ${b.roomId}
    </div>

    ${!directEdit ? `
      <div class="alert-warning" style="margin-bottom: 1.25rem; background: rgba(201, 168, 76, 0.06); border-color: rgba(201, 168, 76, 0.25);">
        <i class="fa-solid fa-circle-info"></i>
        <span><strong>Receptionist Notice:</strong> Since you are logged in as a Receptionist/Manager, these changes will require Admin (Owner) approval before taking effect.</span>
      </div>
    ` : `
      <div class="alert-warning" style="margin-bottom: 1.25rem; background: rgba(16, 185, 129, 0.06); border-color: rgba(16, 185, 129, 0.25); color: var(--color-success);">
        <i class="fa-solid fa-shield-halved"></i>
        <span><strong>Admin Super User:</strong> You have owner permissions to modify this booking directly in real time.</span>
      </div>
    `}

    <form id="modify-booking-form" onsubmit="return false;" style="text-align:left;">
      <div class="checkbox-group" style="gap:1rem; max-height: 400px; overflow-y: auto; padding-right: 0.5rem; margin-bottom: 1.5rem;">
        <div class="search-field">
          <label for="mod-guest-name">Guest Name</label>
          <input type="text" id="mod-guest-name" value="${b.guestName}" required>
        </div>
        <div class="form-grid" style="display:grid; grid-template-columns: 1fr 1fr; gap:1rem;">
          <div class="search-field">
            <label for="mod-guest-age">Guest Age</label>
            <input type="number" id="mod-guest-age" value="${b.guestAge || ''}" required>
          </div>
          <div class="search-field">
            <label for="mod-guests-count">Guests Count</label>
            <input type="number" id="mod-guests-count" value="${b.guests || 1}" min="1" max="10" required>
          </div>
        </div>
        <div class="search-field">
          <label for="mod-guest-address">Guest Address</label>
          <input type="text" id="mod-guest-address" value="${b.guestAddress || ''}" required>
        </div>
        <div class="form-grid" style="display:grid; grid-template-columns: 1fr 1fr; gap:1rem;">
          <div class="search-field">
            <label for="mod-checkin">Check-in Date</label>
            <input type="date" id="mod-checkin" value="${b.checkIn}" required>
          </div>
          <div class="search-field">
            <label for="mod-checkout">Check-out Date</label>
            <input type="date" id="mod-checkout" value="${b.checkOut}" required>
          </div>
        </div>
        <div class="form-grid" style="display:grid; grid-template-columns: 1fr 1fr; gap:1rem;">
          <div class="search-field">
            <label for="mod-payment-method">Payment Method</label>
            <select id="mod-payment-method" style="width:100%;">
              <option value="card" ${b.paymentMethod === 'card' ? 'selected' : ''}>Card</option>
              <option value="upi" ${b.paymentMethod === 'upi' ? 'selected' : ''}>UPI ID / QR</option>
              <option value="cash" ${b.paymentMethod === 'cash' ? 'selected' : ''}>Cash</option>
            </select>
          </div>
          <div class="search-field">
            <label for="mod-total-amount">Total Billing (₹)</label>
            <input type="number" id="mod-total-amount" value="${b.totalAmount}" required>
          </div>
        </div>
      </div>

      <div class="modal-action-row">
        <button type="submit" class="btn-modal primary">${directEdit ? 'Save Changes' : 'Submit for Approval'}</button>
        <button type="button" class="btn-modal secondary" id="btn-cancel-modify">Cancel</button>
      </div>
    </form>
  `;
  mount.appendChild(modalBox);

  // Close Binds
  const closeModal = () => { mount.classList.remove('open'); };
  document.getElementById('btn-close-modal').onclick = closeModal;
  document.getElementById('btn-cancel-modify').onclick = closeModal;

  // Submit Handler
  document.getElementById('modify-booking-form').onsubmit = () => {
    const updated = {
      guestName: document.getElementById('mod-guest-name').value,
      guestAge: parseInt(document.getElementById('mod-guest-age').value),
      guestAddress: document.getElementById('mod-guest-address').value,
      checkIn: document.getElementById('mod-checkin').value,
      checkOut: document.getElementById('mod-checkout').value,
      guests: parseInt(document.getElementById('mod-guests-count').value),
      paymentMethod: document.getElementById('mod-payment-method').value,
      totalAmount: parseInt(document.getElementById('mod-total-amount').value),
    };

    if (directEdit) {
      // Direct Admin Edit
      b.guestName = updated.guestName;
      b.guestAge = updated.guestAge;
      b.guestAddress = updated.guestAddress;
      b.checkIn = updated.checkIn;
      b.checkOut = updated.checkOut;
      b.guests = updated.guests;
      b.paymentMethod = updated.paymentMethod;
      b.totalAmount = updated.totalAmount;
      
      // Update room booking name if occupied
      const targetRoom = window.RubicornState.rooms.find(r => r.id === b.roomId);
      if (targetRoom && targetRoom.currentGuest && targetRoom.currentGuest.bookingId === b.bookingId) {
        targetRoom.currentGuest.name = updated.guestName;
        targetRoom.currentGuest.checkIn = updated.checkIn;
        targetRoom.currentGuest.checkOut = updated.checkOut;
        targetRoom.currentGuest.guestsCount = updated.guests;
      }
      
      saveStateToStorage();
      showToast('Booking updated successfully by Admin.', 'success');
    } else {
      // Receptionist/Manager Request
      b.approvalStatus = 'pending_approval';
      b.requestedChanges = updated;
      saveStateToStorage();
      showToast('Modification request submitted to Admin for approval.', 'info');
    }

    closeModal();
    // Refresh subview
    renderDashboardBookings(document.getElementById('admin-workspace-content'));
  };
}

// B.3.2 Modal handler for Admin to review modification request
function openReviewApprovalModal(bookingId) {
  const mount = document.getElementById('admin-modal-mount');
  mount.innerHTML = '';
  mount.classList.add('open');

  const b = window.RubicornState.bookings.find(x => x.bookingId === bookingId);
  if (!b || !b.requestedChanges) {
    showToast('No pending modifications found for this booking.', 'error');
    mount.classList.remove('open');
    return;
  }

  const req = b.requestedChanges;

  const diffRow = (label, currentVal, newVal) => {
    const isChanged = String(currentVal) !== String(newVal);
    const highlight = isChanged ? 'background: rgba(201, 168, 76, 0.08); font-weight:700; border-left: 3px solid var(--color-gold); padding-left:4px;' : '';
    return `
      <tr style="${highlight}">
        <td style="padding:0.5rem; font-size:0.85rem; font-weight:600; color:var(--color-gold);">${label}</td>
        <td style="padding:0.5rem; font-size:0.85rem; color:var(--color-ivory-dim);">${currentVal}</td>
        <td style="padding:0.5rem; font-size:0.85rem; color:var(--color-success);">${isChanged ? `<strong>${newVal}</strong>` : newVal}</td>
      </tr>
    `;
  };

  const modalBox = document.createElement('div');
  modalBox.className = 'modal-card';
  modalBox.style.maxWidth = '650px';
  modalBox.innerHTML = `
    <div class="modal-header">
      <h3 style="font-size:1.35rem;"><i class="fa-solid fa-clipboard-check"></i> Review Modification Request</h3>
      <button class="modal-close-btn" id="btn-close-modal"><i class="fa-solid fa-xmark"></i></button>
    </div>
    
    <div style="font-size:0.85rem; color:var(--color-ivory-dim); margin-bottom:1.25rem;">
      <strong>Booking ID:</strong> ${b.bookingId} | <strong>Guest Name:</strong> ${b.guestName}
    </div>

    <div class="alert-warning" style="margin-bottom: 1.5rem; background: rgba(234, 179, 8, 0.06); border-color: rgba(234, 179, 8, 0.25);">
      <i class="fa-solid fa-bell"></i>
      <span>A receptionist/manager has requested the following changes to this room booking. Please review before approving.</span>
    </div>

    <div style="border: 1px solid var(--color-card-border); border-radius: 8px; overflow: hidden; margin-bottom: 1.5rem; background: var(--color-charcoal);">
      <table style="width: 100%; border-collapse: collapse; text-align: left;">
        <thead>
          <tr style="border-bottom: 1px solid var(--color-card-border); background: var(--color-espresso);">
            <th style="padding:0.6rem; font-size:0.8rem; text-transform:uppercase; color:var(--color-gold);">Field</th>
            <th style="padding:0.6rem; font-size:0.8rem; text-transform:uppercase; color:var(--color-ivory-dim);">Current Detail</th>
            <th style="padding:0.6rem; font-size:0.8rem; text-transform:uppercase; color:var(--color-success);">Requested Change</th>
          </tr>
        </thead>
        <tbody>
          ${diffRow('Guest Name', b.guestName, req.guestName)}
          ${diffRow('Guest Age', b.guestAge || 'N/A', req.guestAge)}
          ${diffRow('Address', b.guestAddress || 'N/A', req.guestAddress)}
          ${diffRow('Check-in Date', b.checkIn, req.checkIn)}
          ${diffRow('Check-out Date', b.checkOut, req.checkOut)}
          ${diffRow('Guests Count', b.guests, req.guests)}
          ${diffRow('Payment Method', b.paymentMethod ? b.paymentMethod.toUpperCase() : 'CARD', req.paymentMethod.toUpperCase())}
          ${diffRow('Total Billing', `₹${b.totalAmount.toLocaleString('en-IN')}`, `₹${req.totalAmount.toLocaleString('en-IN')}`)}
        </tbody>
      </table>
    </div>

    <div class="modal-action-row">
      <button class="btn-modal primary" id="btn-approve-mod" style="background:var(--color-success); border-color:var(--color-success);"><i class="fa-solid fa-check"></i> Approve & Apply</button>
      <button class="btn-modal primary" id="btn-reject-mod" style="background:#ef4444; border-color:#ef4444;"><i class="fa-solid fa-xmark"></i> Reject & Dismiss</button>
      <button class="btn-modal secondary" id="btn-cancel-review">Close</button>
    </div>
  `;
  mount.appendChild(modalBox);

  // Close Binds
  const closeModal = () => { mount.classList.remove('open'); };
  document.getElementById('btn-close-modal').onclick = closeModal;
  document.getElementById('btn-cancel-review').onclick = closeModal;

  // Actions Binds
  document.getElementById('btn-approve-mod').onclick = () => {
    // Apply changes
    b.guestName = req.guestName;
    b.guestAge = req.guestAge;
    b.guestAddress = req.guestAddress;
    b.checkIn = req.checkIn;
    b.checkOut = req.checkOut;
    b.guests = req.guests;
    b.paymentMethod = req.paymentMethod;
    b.totalAmount = req.totalAmount;

    // Update room if occupied
    const targetRoom = window.RubicornState.rooms.find(r => r.id === b.roomId);
    if (targetRoom && targetRoom.currentGuest && targetRoom.currentGuest.bookingId === b.bookingId) {
      targetRoom.currentGuest.name = req.guestName;
      targetRoom.currentGuest.checkIn = req.checkIn;
      targetRoom.currentGuest.checkOut = req.checkOut;
      targetRoom.currentGuest.guestsCount = req.guests;
    }

    // Clear request status
    b.approvalStatus = null;
    b.requestedChanges = null;

    saveStateToStorage();
    showToast('Modification request approved and applied.', 'success');
    closeModal();
    renderDashboardBookings(document.getElementById('admin-workspace-content'));
  };

  document.getElementById('btn-reject-mod').onclick = () => {
    // Clear request status
    b.approvalStatus = null;
    b.requestedChanges = null;

    saveStateToStorage();
    showToast('Modification request rejected and dismissed.', 'info');
    closeModal();
    renderDashboardBookings(document.getElementById('admin-workspace-content'));
  };
}

// B.4 Guests Registry database
function renderDashboardGuests(workspace) {
  workspace.innerHTML = `
    <h2 style="font-size:2rem; margin-bottom:2rem;">Guests Registry Profiles</h2>

    <!-- List table -->
    <div class="admin-card">
      <div class="admin-table-wrapper">
        <table class="admin-data-table">
          <thead>
            <tr>
              <th>Guest ID</th>
              <th>Full Name</th>
              <th>Mobile Number</th>
              <th>Email Address</th>
              <th>Audited ID Type</th>
              <th>Last Checked In</th>
              <th>Visits</th>
              <th>Total Spending</th>
            </tr>
          </thead>
          <tbody id="admin-guests-tbody"></tbody>
        </table>
      </div>
    </div>
  `;

  const tbody = document.getElementById('admin-guests-tbody');
  const guests = window.RubicornState.guests;

  if (guests.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="8" style="text-align:center; padding:3rem; color:var(--color-ivory-dim);">
          No checked-in guests registry records available yet.
        </td>
      </tr>
    `;
    return;
  }

  guests.forEach(g => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td style="font-family:monospace; font-weight:700; color:var(--color-gold);">${g.id}</td>
      <td>
        <strong>${g.name}</strong>
        <div style="font-size:0.75rem; color:var(--color-ivory-dim); margin-top: 2px;">
          Age: ${g.age || 'N/A'} | Addr: ${g.address || 'N/A'}
        </div>
      </td>
      <td>${g.mobile || 'N/A'}</td>
      <td>${g.email || 'N/A'}</td>
      <td><span class="status-pill confirmed" style="font-size:0.7rem;">Verified ${g.documents}</span></td>
      <td style="font-size:0.8rem;">${g.lastStay}</td>
      <td style="text-align:center;">${g.totalVisits}</td>
      <td style="font-weight:700; color:var(--color-gold);">₹${g.totalSpent.toLocaleString('en-IN')}</td>
    `;
    tbody.appendChild(tr);
  });
}

// B.5 Revenue reports & charts generator
function renderDashboardReports(workspace) {
  // Calculate total billing from database
  let totalBilling = 0;
  window.RubicornState.bookings.forEach(b => {
    totalBilling += b.totalAmount;
  });

  workspace.innerHTML = `
    <h2 style="font-size:2rem; margin-bottom:2rem;">Financial & Occupancy Reports</h2>

    <div class="admin-kpi-grid" style="grid-template-columns: repeat(2, 1fr); margin-bottom:2.5rem;">
      <div class="kpi-card">
        <div class="kpi-icon-wrap gold"><i class="fa-solid fa-chart-pie"></i></div>
        <div class="kpi-data">
          <span class="kpi-value">₹${totalBilling.toLocaleString('en-IN')}</span>
          <span class="kpi-label">Cumulative Session Revenue</span>
        </div>
      </div>
      
      <div class="kpi-card">
        <div class="kpi-icon-wrap blue"><i class="fa-solid fa-receipt"></i></div>
        <div class="kpi-data">
          <span class="kpi-value">${window.RubicornState.bookings.length}</span>
          <span class="kpi-label">Total Reservations Logged</span>
        </div>
      </div>
    </div>

    <div class="admin-charts-grid" style="grid-template-columns:1fr; gap:2.5rem;">
      <!-- Custom SVG Chart wrapper -->
      <div class="admin-card">
        <div class="admin-card-title">Cumulative Transaction History</div>
        <div style="width:100%; height:300px; display:flex; align-items:center; justify-content:center; position:relative;" id="svg-chart-container"></div>
      </div>
    </div>
  `;

  // Draw simple pure JS SVG line chart
  const container = document.getElementById('svg-chart-container');
  const dataPoints = window.RubicornState.bookings.map(b => b.totalAmount);
  
  if (dataPoints.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; color:var(--color-ivory-dim); font-size:0.9rem;">
        <i class="fa-solid fa-chart-line" style="font-size:2rem; margin-bottom:0.5rem; display:block;"></i>
        Complete room check-outs to plot transaction charting points here!
      </div>
    `;
    return;
  }

  // Render SVG Chart lines
  const width = container.clientWidth;
  const height = 300;
  const padding = 40;

  const maxVal = Math.max(...dataPoints, 5000);
  const minVal = 0;

  let pointsSVG = '';
  let gridLines = '';
  
  // Plotting calculations
  const chartW = width - padding * 2;
  const chartH = height - padding * 2;
  
  // Gridlines horizontal
  const gridCount = 4;
  for (let i = 0; i <= gridCount; i++) {
    const yVal = padding + (chartH / gridCount) * i;
    const priceLbl = Math.round(maxVal - (maxVal / gridCount) * i);
    gridLines += `
      <line x1="${padding}" y1="${yVal}" x2="${width - padding}" y2="${yVal}" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
      <text x="${padding - 5}" y="${yVal + 4}" fill="var(--color-ivory-dim)" font-size="9" text-anchor="end">₹${priceLbl}</text>
    `;
  }

  // Draw data point lines
  let pathD = '';
  let circles = '';
  
  dataPoints.forEach((val, idx) => {
    const x = padding + (chartW / Math.max(dataPoints.length - 1, 1)) * idx;
    const y = padding + chartH - (val / maxVal) * chartH;
    
    if (idx === 0) {
      pathD = `M ${x} ${y}`;
    } else {
      pathD += ` L ${x} ${y}`;
    }

    circles += `
      <circle cx="${x}" cy="${y}" r="4" fill="var(--color-gold)" stroke="var(--color-charcoal)" stroke-width="2"/>
      <text x="${x}" y="${y - 10}" fill="var(--color-gold-light)" font-weight="700" font-size="10" text-anchor="middle">₹${val}</text>
      <text x="${x}" y="${height - padding + 15}" fill="var(--color-ivory-dim)" font-size="8" text-anchor="middle">Booking ${idx+1}</text>
    `;
  });

  container.innerHTML = `
    <svg width="${width}" height="${height}" style="width:100%; height:100%;">
      ${gridLines}
      <path d="${pathD}" fill="none" stroke="var(--color-burgundy)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      ${circles}
    </svg>
  `;
}

// -------------------------------------------------------------
// COMMON SHARED TOAST NOTIFICATION CONTROLLER
// -------------------------------------------------------------
function showToast(message, type = 'info') {
  const mount = document.getElementById('toast-container');
  if (!mount) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  let iconClass = 'fa-circle-info';
  if (type === 'success') iconClass = 'fa-circle-check';
  else if (type === 'error') iconClass = 'fa-circle-xmark';

  toast.innerHTML = `
    <i class="fa-solid ${iconClass} toast-icon ${type}"></i>
    <div class="toast-content">${message}</div>
  `;
  
  mount.appendChild(toast);
  
  // Trigger entry animation
  setTimeout(() => {
    toast.classList.add('show');
  }, 100);

  // Auto remove dismiss timer after 4s
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      toast.remove();
    }, 400);
  }, 4000);
}

// -------------------------------------------------------------
// MAIN BOOTSTRAP INITIALIZATION CONTROLLER
// -------------------------------------------------------------
window.addEventListener('hashchange', router);
window.addEventListener('load', () => {
  // Load local state registry or seed new
  loadStateFromStorage();
  
  // Attach global header scroll class
  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile menu drawers binds
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  
  menuToggle.onclick = () => {
    menuToggle.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  };

  // Setup click listeners for scroll links (Home sub-anchors)
  document.body.addEventListener('click', (e) => {
    const scrollLink = e.target.closest('.scroll-link');
    if (scrollLink) {
      e.preventDefault();
      
      const targetId = scrollLink.getAttribute('id');
      let targetSectionId = '';
      
      if (targetId.includes('floors')) targetSectionId = 'floor-preview-section';
      else if (targetId.includes('amenities')) targetSectionId = 'why-rubicorn-section';
      else if (targetId.includes('about')) targetSectionId = 'about-section';
      else if (targetId.includes('contact')) targetSectionId = 'contact-section';
      
      const targetElement = document.getElementById(targetSectionId);
      
      if (window.location.hash !== '#/' && window.location.hash !== '') {
        // Redirect to homepage first
        window.location.hash = '#/';
        // Wait for page load and scroll
        setTimeout(() => {
          const loadedEl = document.getElementById(targetSectionId);
          if (loadedEl) {
            window.scrollTo({
              top: loadedEl.offsetTop - 90,
              behavior: 'smooth'
            });
          }
        }, 300);
      } else {
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 90,
            behavior: 'smooth'
          });
        }
      }
    }
  });

  // Trigger Router boot
  router();
});
