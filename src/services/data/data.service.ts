import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  image: string;
  name: string;
  brand: string;
  category: string;  // Added category
  price: number;
  discount?: number;
  details: string;
  stock?:number;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private products: Product[] = [
  // ================= Skincare =================
    {
      id: 1,
      image: '../../assets/image/skincare-image/Mineral-89.png',
      name: 'Vichy Mineral 89 Moisturizer',
      brand: 'Vichy',
      category: 'Skincare',
      price: 800,
      discount: 50,
      details: `24-hour hydration, strengthens skin barrier, suitable for all skin types, fragrance-free and alcohol-free. Lightweight serum with 89% Vichy mineral water and hyaluronic acid.`,
      stock: 5,
    },
    {
      id: 2,
      image: '../../assets/image/skincare-image/Serum-Mineral-89.png',
      name: 'Vichy Mineral 89 Eye Moisturizer',
      brand: 'Vichy',
      category: 'Skincare',
      price: 450,
      discount: 30,
      details: `Moisturizes and revitalizes tired eyes, dermatologically and ophthalmologically tested. Lightweight and non-irritating.`,
      stock: 5,
    },
    {
      id: 3,
      image: '../../assets/image/skincare-image/Serum-Lefit-Active.png',
      name: 'Vichy Liftactiv Vitamin C 16% Serum',
      brand: 'Vichy',
      category: 'Skincare',
      price: 950,
      discount: 100,
      details: `Brightens and evens skin tone in 10 days. 10% pure vitamin C, hyaluronic acid, pine polyphenols. Lightweight, non-greasy, and fragrance-free.`,
      stock: 5,
    },
    {
      id: 4,
      image: '../../assets/image/skincare-image/Lefit-Active-Seshylist.png',
      name: 'Vichy Liftactiv Specialist B3 Dark Spot Serum 30ml',
      brand: 'Vichy',
      category: 'Skincare',
      price: 1050,
      discount: 150,
      details: `Reduces dark spots and wrinkles. Contains 15% Niacinamide, glycolic acid, and vitamin C. Fragrance-free, suitable for sensitive skin.`,
      stock: 5,
    },
    {
      id: 5,
      image: 'assets/image/skincare-image/Capital-Solary.png',
      name: 'Vichy Capital Solute UV-Age Sunscreen SPF 50',
      brand: 'Vichy',
      category: 'Skincare',
      price: 780,
      discount: 0,
      details: `Apply every morning after your daily skincare routine. Provides high SPF 50 protection against UV rays and pollution. Targets signs of aging and dryness. Suitable for all skin types.`,
      stock: 5,
    },
    {
      id: 6,
      image: 'assets/image/skincare-image/Edial-Solary.png',
      name: 'Vichy Ideal Soleil Sunscreen Cream Matte Finish SPF 50',
      brand: 'Vichy',
      category: 'Skincare',
      price: 650,
      discount: 0,
      details: `Apply frequently in generous amounts. Suitable for combination to oily skin. Water-resistant and hypoallergenic.`,
      stock: 5,
    },
    {
      id: 7,
      image: 'assets/image/skincare-image/Normadirm.png',
      name: 'Vichy Normaderm Phytosolution Daily Moisturizer',
      brand: 'Vichy',
      category: 'Skincare',
      price: 500,
      discount: 0,
      details: `Apply morning and evening on clean skin. Reduces acne and impurities. Keeps skin hydrated for 24h. Suitable for oily and sensitive skin.`,
      stock: 5,
    },
    {
      id: 8,
      image: 'assets/image/skincare-image/Mozel-Vichy.png',
      name: 'Vichy Suncare Sunscreen Anti-Aging SPF 50',
      brand: 'Vichy',
      category: 'Skincare',
      price: 700,
      discount: 0,
      details: `High SPF 50 sunscreen. Protects against UV rays and pollution. Lightweight, non-greasy, and suitable for all skin types.`,
      stock: 5,
    },
    {
      id: 9,
      image: 'assets/image/skincare-image/Peauty-Duo.png',
      name: 'Vichy Beauty Deo Anti-Perspirant 48h for Women',
      brand: 'Vichy',
      category: 'Skincare',
      price: 280,
      discount: 0,
      details: `Apply daily on clean, dry underarms. Removes odor and prevents first signs of hair growth. Provides immediate cosmetic effect for underarms. Suitable for sensitive skin. Dermatologically tested.`,
      stock: 5,
    },
    {
      id: 10,
      image: 'assets/image/skincare-image/Lefit-Active-Cologen-spicalist.png',
      name: 'Vichy Liftactiv Collagen Specialist Anti-Wrinkle & Firming Day Cream 50ml',
      brand: 'Vichy',
      category: 'Skincare',
      price: 950,
      discount: 0,
      details: `Apply a thin layer on clean, dry skin. Reduces appearance of wrinkles by 24% after 8 weeks. Protects collagen fibers and targets visible signs of aging. Evens skin tone, reduces discoloration. Hypoallergenic and suitable for sensitive skin.`,
      stock: 5,
    },
    {
      id: 11,
      image: 'assets/image/skincare-image/Liftactiv.png',
      name: 'Vichy Liftactiv Supreme Anti-Wrinkle Eye Care 15ml',
      brand: 'Vichy',
      category: 'Skincare',
      price: 600,
      discount: 0,
      details: `Apply morning and evening with gentle taps around the eye area, starting from dark circles, eyelids, under brow, and surrounding wrinkles. Provides 360° effectiveness for younger-looking eyes: smooths wrinkles, lifts eyelids, reduces dark circles and puffiness. Enriched with Rhamnose, Escine, and Caffeine to reduce fine lines and revitalize the under-eye area. Hypoallergenic and suitable for all skin types.`,
      stock: 5,
    },
    {
      id: 12,
      image: 'assets/image/skincare-image/Facial-Cleanser.png',
      name: 'Vichy Facial Cleanser Gel 200ml',
      brand: 'Vichy',
      category: 'Skincare',
      price: 300,
      discount: 0,
      details: `Gentle facial cleanser suitable for all skin types. Aloe-scented gel that detoxifies and cleanses the skin. Contains safe ingredients including glycerin. Tube packaging. Hypoallergenic and dermatologically tested. Provides SPF 50 protection.`,
      stock: 5,
    },
    {
      id: 13,
      image: 'assets/image/skincare-image/Normaderm-Phytosolution.png',
      name: 'Vichy Normaderm Phytosolution Gel Cleanser 200ml',
      brand: 'Vichy',
      category: 'Skincare',
      price: 400,
      discount: 0,
      details: `For oily and acne-prone skin. Use twice daily on wet skin, lather and rinse thoroughly. Removes 91% of impurities after first wash. Reduces excess sebum by 94%. Minimizes blemishes in 4 weeks. Hypoallergenic, dermatologically tested. Contains salicylic acid and zinc gluconate.`,
      stock: 5,
    },

    // ================= Perfumes =================
    { id: 9, image: 'assets/image/logos/glamify-logo.png', name: 'Luxury Perfume', brand: 'EliteScents', category: 'Perfumes', price: 1200, discount: 200, details: 'عطر فاخر يدوم طويلاً ويعطي رائحة جذابة ومميزة.' },
    { id: 10, image: 'assets/image/logos/glamify-logo.png', name: 'Floral Essence', brand: 'AromaWorld', category: 'Perfumes', price: 950, discount: 150, details: 'عطر زهري خفيف يناسب الاستخدام اليومي.' },
    { id: 11, image: 'assets/image/logos/glamify-logo.png', name: 'Night Oud', brand: 'OrientalScents', category: 'Perfumes', price: 1800, discount: 300, details: 'عطر غني بالعود والباتشولي لرائحة فاخرة لا تُنسى.' },
    { id: 12, image: 'assets/image/logos/glamify-logo.png', name: 'Citrus Splash', brand: 'FreshAroma', category: 'Perfumes', price: 700, discount: 100, details: 'عطر منعش برائحة الحمضيات مناسب للصيف.' },
    { id: 13, image: 'assets/image/logos/glamify-logo.png', name: 'Vanilla Nights', brand: 'SweetScents', category: 'Perfumes', price: 850, discount: 120, details: 'عطر دافئ بنكهة الفانيليا لسهرات المساء.' },
    { id: 14, image: 'assets/image/logos/glamify-logo.png', name: 'Ocean Breeze', brand: 'FreshAroma', category: 'Perfumes', price: 650, discount: 80, details: 'عطر منعش برائحة البحر والنسمات العليلة.' },
    { id: 15, image: 'assets/image/logos/glamify-logo.png', name: 'Rose Garden', brand: 'AromaWorld', category: 'Perfumes', price: 900, discount: 100, details: 'عطر زهري كلاسيكي بنفحات الورد الطبيعي.' },
    { id: 16, image: 'assets/image/logos/glamify-logo.png', name: 'Midnight Musk', brand: 'EliteScents', category: 'Perfumes', price: 1300, discount: 200, details: 'عطر غامض وجذاب يناسب المناسبات الخاصة.' },

    // ================= Makeup =================
    { id: 17, image: 'assets/image/logos/glamify-logo.png', name: 'Matte Lipstick', brand: 'ColorFiesta', category: 'Makeup', price: 220, discount: 0, details: 'روج مطفي طويل الأمد، غني بالألوان الزاهية والناعمة.' },
    { id: 18, image: 'assets/image/logos/glamify-logo.png', name: 'Liquid Foundation', brand: 'SkinPerfect', category: 'Makeup', price: 400, discount: 50, details: 'فاونديشن سائل خفيف يغطي العيوب ويعطي مظهر طبيعي.' },
    { id: 19, image: 'assets/image/logos/glamify-logo.png', name: 'Eyeshadow Palette', brand: 'Glamify', category: 'Makeup', price: 550, discount: 100, details: 'باليت ظلال عيون بألوان متعددة مناسبة لجميع المناسبات.' },
    { id: 20, image: 'assets/image/logos/glamify-logo.png', name: 'Blush Powder', brand: 'ColorFiesta', category: 'Makeup', price: 300, discount: 50, details: 'بودرة خدود لإشراقة طبيعية وملمس ناعم.' },
    { id: 21, image: 'assets/image/logos/glamify-logo.png', name: 'Eyeliner Pencil', brand: 'Glamify', category: 'Makeup', price: 180, discount: 20, details: 'قلم تحديد العيون بدقة عالية ولمسة مثالية.' },
    { id: 22, image: 'assets/image/logos/glamify-logo.png', name: 'Mascara Volume', brand: 'ColorFiesta', category: 'Makeup', price: 250, discount: 30, details: 'ماسكارا لإطلالة كثيفة وطويلة الأمد للرموش.' },
    { id: 23, image: 'assets/image/logos/glamify-logo.png', name: 'Lip Gloss', brand: 'Glamify', category: 'Makeup', price: 200, discount: 20, details: 'لمعان شفاه غني بالألوان واللمسة الحريرية.' },
    { id: 24, image: 'assets/image/logos/glamify-logo.png', name: 'Concealer Stick', brand: 'SkinPerfect', category: 'Makeup', price: 350, discount: 50, details: 'كريم لإخفاء العيوب والهالات السوداء بدقة.' },

    // ================= Watches =================
    { id: 25, image: 'assets/image/logos/glamify-logo.png', name: 'Classic Watch', brand: 'TimeMaster', category: 'Watches', price: 2500, discount: 300, details: 'ساعة كلاسيكية أنيقة مناسبة لجميع المناسبات اليومية والرسمية.' },
    { id: 26, image: 'assets/image/logos/glamify-logo.png', name: 'Sport Watch', brand: 'ActiveTime', category: 'Watches', price: 1800, discount: 200, details: 'ساعة رياضية مقاومة للماء مع خصائص متعددة للرياضيين.' },
    { id: 27, image: 'assets/image/logos/glamify-logo.png', name: 'Luxury Gold Watch', brand: 'GoldTime', category: 'Watches', price: 4500, discount: 500, details: 'ساعة ذهبية فاخرة لإطلالة راقية ومميزة.' },
    { id: 28, image: 'assets/image/logos/glamify-logo.png', name: 'Smart Watch', brand: 'TechTime', category: 'Watches', price: 3500, discount: 400, details: 'ساعة ذكية بمميزات متعددة مثل متابعة النشاطات والتنبيهات.' },
    { id: 29, image: 'assets/image/logos/glamify-logo.png', name: 'Leather Strap Watch', brand: 'TimeMaster', category: 'Watches', price: 2700, discount: 250, details: 'ساعة كلاسيكية بحزام جلدي فاخر.' },
    { id: 30, image: 'assets/image/logos/glamify-logo.png', name: 'Silver Watch', brand: 'GoldTime', category: 'Watches', price: 3000, discount: 300, details: 'ساعة فضية أنيقة مع لمسة عصرية.' },
    { id: 31, image: 'assets/image/logos/glamify-logo.png', name: 'Chronograph Watch', brand: 'ActiveTime', category: 'Watches', price: 4000, discount: 500, details: 'ساعة كرونوغراف بمميزات احترافية عالية.' },
    { id: 32, image: 'assets/image/logos/glamify-logo.png', name: 'Minimalist Watch', brand: 'TechTime', category: 'Watches', price: 2200, discount: 200, details: 'ساعة بسيطة وعصرية للستايل اليومي.' },

    // ================= Accessories =================
    { id: 33, image: 'assets/image/logos/glamify-logo.png', name: 'Leather Wallet', brand: 'StylePro', category: 'Accessories', price: 450, discount: 50, details: 'محفظة جلدية أنيقة لحمل النقود والبطاقات.' },
    { id: 34, image: 'assets/image/logos/glamify-logo.png', name: 'Sunglasses', brand: 'SunGuard', category: 'Accessories', price: 300, discount: 30, details: 'نظارة شمسية عصرية لحماية العين من الأشعة الضارة.' },
    { id: 35, image: 'assets/image/logos/glamify-logo.png', name: 'Leather Belt', brand: 'StylePro', category: 'Accessories', price: 350, discount: 40, details: 'حزام جلدي عالي الجودة لإطلالة أنيقة.' },
    { id: 36, image: 'assets/image/logos/glamify-logo.png', name: 'Silk Scarf', brand: 'LuxWear', category: 'Accessories', price: 500, discount: 60, details: 'وشاح حريري فاخر لإطلالة راقية.' },
    { id: 37, image: 'assets/image/logos/glamify-logo.png', name: 'Fashion Bracelet', brand: 'ChicStyle', category: 'Accessories', price: 220, discount: 20, details: 'سوار عصري بسيط لإطلالة يومية.' },
    { id: 38, image: 'assets/image/logos/glamify-logo.png', name: 'Gold Necklace', brand: 'LuxWear', category: 'Accessories', price: 1200, discount: 150, details: 'قلادة ذهبية فاخرة تناسب المناسبات الخاصة.' },
    { id: 39, image: 'assets/image/logos/glamify-logo.png', name: 'Hairband Set', brand: 'ChicStyle', category: 'Accessories', price: 180, discount: 15, details: 'مجموعة أربطة شعر ملونة وعملية.' },
    { id: 40, image: 'assets/image/logos/glamify-logo.png', name: 'Keychain Set', brand: 'StylePro', category: 'Accessories', price: 90, discount: 10, details: 'مجموعة مفاتيح عصرية مع تصاميم جذابة.' },
  ];

  // ================== Functions ==================
  getAllProducts(): Product[] { return this.products; }
  getProductsByCategory(category: string): Product[] { return this.products.filter(p => p.category === category); }

  getProductSkincare(): Product[] { return this.getProductsByCategory('Skincare'); }
  getProductPerfume(): Product[] { return this.getProductsByCategory('Perfumes'); }
  getProductMakeup(): Product[] { return this.getProductsByCategory('Makeup'); }
  getProductWatches(): Product[] { return this.getProductsByCategory('Watches'); }
  getProductAccessories(): Product[] { return this.getProductsByCategory('Accessories'); }

  getProductById(id: number): Product | undefined { return this.products.find(p => p.id === id); }
}
