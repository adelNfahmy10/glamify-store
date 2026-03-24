import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  image: string;
  name: string;
  brand: string;
  category: string;  // Added category
  price: number;
  discount?: number;
  details: any;
  specifications?: any;
  rate?: number;
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
      image: 'assets/image/skincare-image/Mineral-89.png',
      name: 'Vichy Mineral 89 Moisturizer',
      brand: 'Vichy',
      category: 'Skincare',
      price: 800,
      discount: 50,
      details: [
        "Provides 24-hour hydration from the first use and +21% plumping after 4 weeks.",
        "Strengthens the skin barrier against daily aggressors.",
        "Suitable for all skin types, including sensitive skin.",
        "Hydrates, plumps, and evens skin tone.",
        "Makes the skin more resistant to visible signs of aging caused by UV exposure, pollution, and stress.",
        "Lightweight, transparent, and fast-absorbing serum.",
        "Fragrance-free, alcohol-free, and hypoallergenic.",
        "Contains 89% Vichy mineral water and hyaluronic acid.",
        "Formulated with 11 simple ingredients for long-lasting moisture.",
        "Supports and strengthens the natural skin barrier while defending against daily environmental aggressors.",
        "Leaves skin moisturized, radiant, and refreshed for up to 24 hours."
      ],
      specifications: [
       "Product Weight: 202 g",
        "Size / Volume: 50 ml",
        "Gender: Unisex",
        "Target Skin Type: All skin types",
        "Skin Concerns: Dryness",
        "Formulation: Cream",
        "Model Name: Mineral 89"
      ],
      stock: 5,
      rate:4,
    },
    {
      id: 2,
      image: 'assets/image/skincare-image/Serum-Mineral-89.png',
      name: 'Vichy Mineral 89 Eye Moisturizer',
      brand: 'Vichy',
      category: 'Skincare',
      price: 450,
      discount: 30,
      details: [
        "Moisturizes and deeply hydrates the skin",
        "Helps improve the appearance of tired eyes and adds brightness",
        "Dermatologically and ophthalmologically tested"
      ],
      specifications:[
        "Size: 15 ml",
        "Gender: Unisex",
        "Target Skin Type: Sensitive skin",
        "Model Number: 3337875596763",
        "Model Name: Mineral"
      ],
      stock: 5,
      rate:4.6,
    },
    {
      id: 3,
      image: 'assets/image/skincare-image/Serum-Lefit-Active.png',
      name: 'Vichy Liftactiv Vitamin C 16% Serum',
      brand: 'Vichy',
      category: 'Skincare',
      price: 950,
      discount: 100,
      details: [
        "Apply a few drops using the applicator on clean skin, avoiding the eye area. Leave for a few moments, then apply your daily moisturizer and sunscreen.",
        "Improves skin radiance by up to 40% in 4 weeks and provides +51% more even skin tone",
        "Fragrance-free, alcohol-free, silicone-free, and quickly absorbed into the skin",
        "Non-greasy, non-sticky, and non-shiny texture",
        "Enhances the skin’s antioxidant defense and reduces oxidative damage",
        "Helps reduce skin discoloration caused by pollution",
        "Reduces fine lines and wrinkles",
        "Brightens and evens skin tone in as little as 10 days with clinically proven results",
        "Contains 10% pure Vitamin C, Vitamin E, pine polyphenols, and pure hyaluronic acid",
        "Developed with dermatologists to boost skin radiance and health",
        "High concentration of pure Vitamin C for brighter and more even skin",
        "Free from fragrance, parabens, colorants, and silicone"
      ],
      specifications: [
        "Size: 20 ml",
        "Gender: Unisex",
        "Target Skin Type: All skin types",
        "Skin Concerns: Fine lines",
        "Formulation: Liquid",
        "Model Number: 3337875796583",
        "Model Name: Liftactiv Vitamin C 16% Serum"
      ],
      stock: 5,
      rate:4.3,
    },
    {
      id: 4,
      image: 'assets/image/skincare-image/Lefit-Active-Seshylist.png',
      name: 'Vichy Liftactiv Specialist B3 Dark Spot Serum 30ml',
      brand: 'Vichy',
      category: 'Skincare',
      price: 1050,
      discount: 150,
      details:[
        "Apply morning and evening. Use a few drops on clean, dry skin, avoiding the eye and lip areas.",
        "Contains 15% Niacinamide, Glycolic Acid (AHA), and exfoliating agents",
        "Helps even skin tone and reduce the appearance of wrinkles",
        "Reduces up to 71% of dark spots",
        "Fragrance-free, alcohol-free, and colorant-free",
        "Hypoallergenic and tested on sensitive skin",
        "Corrects dark spots and reduces pigmentation and wrinkles",
        "Refreshes and evens the skin complexion",
        "Enriched with Niacinamide, Glycolic Acid, and Vitamin CG",
        "High-performance formula that improves skin tone and radiance",
        "Lightweight texture that absorbs بسهولة without heaviness",
        "Helps brighten and firm the skin",
        "Suitable for all skin types and all skin tones"
      ],
      specifications: [
        "Size: 30 ml",
        "Gender: Unisex",
        "Target Skin Type: All skin types",
        "Skin Concerns: Dark spots",
        "Model Name: Liftactiv Specialist B3 Dark Spots Serum 30ml"
      ],
      stock: 5,
      rate: 5,
    },
    {
      id: 5,
      image: 'assets/image/skincare-image/Capital-Solary.png',
      name: 'Vichy Capital Solute UV-Age Sunscreen SPF 50',
      brand: 'Vichy',
      category: 'Skincare',
      price: 780,
      discount: 0,
      details: [
        "Apply every morning after your daily skincare routine. Shake well before use and reapply frequently to maintain sun protection.",
        "Very high SPF 50 protection against UV rays and pollution",
        "Targets signs of aging, dryness, and dull skin",
        "Helps correct and protect against wrinkles and dark spots",
        "Strengthens the skin barrier function",
        "Suitable for all skin types and tones with an invisible finish",
        "Dermatologist recommended",
        "Hypoallergenic, non-comedogenic, and safe for sensitive eyes",
        "Ophthalmologically tested under medical supervision",
        "Clinically tested on 43 women over 56 days to reduce dark spot pigmentation",
        "Advanced fluid sunscreen formula for the face with high protection",
        "Enriched with peptides, niacinamide, and Vitamin E",
        "Powered by patented Netlock technology for enhanced UV protection",
        "Helps protect against UV-induced wrinkles and dark spots",
        "Lightweight, breathable texture with no white cast or sticky residue",
        "Leaves the skin looking healthier, smoother, and well-protected"
      ],
      specifications: [
        "Size: 40 ml",
        "Gender: Unisex",
        "Target Skin Type: All skin types",
        "UV Protection: High protection against harmful UV rays",
        "Skin Concerns: Dryness",
        "Formulation: Fluid",
        "Model Name: Suncare Sunscreen-7"
      ],
      stock: 5,
      rate: 4.7,
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
      rate: 3.7,
    },
    {
      id: 7,
      image: 'assets/image/skincare-image/Normadirm.png',
      name: 'Vichy Normaderm Phytosolution Daily Moisturizer',
      brand: 'Vichy',
      category: 'Skincare',
      price: 500,
      discount: 0,
      details: [
        "Apply generously and reapply frequently, especially after swimming, sweating, or towel drying",
        "Tinted sunscreen with SPF 50 suitable for combination to oily skin",
        "Provides an even and radiant skin tone",
        "Instant dry-touch finish that enhances skin appearance",
        "Matte finish with no shine",
        "Water-resistant formula",
        "Enriched with Vichy thermal water, suitable for sensitive skin",
        "Hypoallergenic formula",
        "Protects the skin from harmful UV rays and sun damage",
        "Helps prevent early signs of aging caused by sun exposure",
        "Powered by Mexoryl system for advanced UVA & UVB protection",
        "Leaves the skin smooth, matte, and non-greasy",
        "Ideal for those looking for a sunscreen that does not leave a shiny finish"
      ],
      specifications: [
        "Product Weight: 76 g",
        "Size: 50 ml",
        "Gender: Unisex",
        "Target Skin Type: All skin types (ideal for combination to oily skin)",
        "UV Protection: High protection against harmful UV rays",
        "Formulation: Cream"
      ],
      stock: 5,
      rate: 3.2,
    },
    {
      id: 8,
      image: 'assets/image/skincare-image/Mozel-Vichy.png',
      name: 'Vichy Suncare Sunscreen Anti-Aging SPF 50',
      brand: 'Vichy',
      category: 'Skincare',
      price: 700,
      discount: 0,
      details: [
        "Apply daily on clean, dry underarms",
        "Excessive sweating protection for up to 72 hours with fast-drying formula suitable for sensitive skin",
        "Hypoallergenic, paraben-free, alcohol-free, clinically tested under dermatologists supervision",
        "Anti-perspiration treatment for up to 7 days",
        "Contains natural odor-fighting ingredients suitable for sensitive skin",
        "Provides comfort to underarm skin, approved by dermatologists",
        "Daily use on clean, dry, non-irritated underarms for targeted sweat reduction",
        "Highly effective anti-perspirant that protects up to 72 hours even in stressful situations",
        "Regulates heat and sweat during stress, tested on sensitive skin, free from alcohol and parabens"
      ],
      specifications: [
        "Product Weight: 80 g",
        "Color: White",
        "Size: 50 ml",
        "Gender: Unisex",
        "Target Skin Type: All skin types",
        "Package Contents: Stress Resist Excessive Perspiration Deodorant 50ml"
      ],
      stock: 5,
      rate: 3.7,
    },
    {
      id: 9,
      image: 'assets/image/skincare-image/Peauty-Duo.png',
      name: 'Vichy Beauty Deo Anti-Perspirant 48h for Women',
      brand: 'Vichy',
      category: 'Skincare',
      price: 280,
      discount: 0,
      details:  [
        "Apply daily on clean, dry underarms",
        "Purifies skin and reduces first signs of hair growth",
        "Instantly beautifies underarm skin",
        "48-hour protection even for the most sensitive skin",
        "Dermatologically tested, hypoallergenic, free from parabens and alcohol",
        "Cosmetic anti-perspirant treatment for 48 hours",
        "Contains Lipo-hydroxy acid and pearl beads to smooth skin and reduce hair growth",
        "Pearl-reflecting particles for immediate brightening effect",
        "Suitable for sensitive skin types"
      ],
      specifications: [
        "Color: White",
        "Size: 50 ml",
        "Gender: Unisex",
        "Target Skin Type: Sensitive",
        "Package Contents: Beauty Deo Anti-Perspirant 48Hr Roll-On 50ml",
        "Model Number / Name: Anti-Transpirant"
      ],
      stock: 5,
      rate: 4.9,
    },
    {
      id: 10,
      image: 'assets/image/skincare-image/Lefit-Active-Cologen-spicalist.png',
      name: 'Vichy Liftactiv Collagen Specialist Anti-Wrinkle & Firming Day Cream 50ml',
      brand: 'Vichy',
      category: 'Skincare',
      price: 950,
      discount: 0,
      details: [
        "Apply a thin layer on clean, dry skin",
        "Reduces the appearance of wrinkles by 24% after 8 weeks",
        "Day cream that protects collagen fibers in the skin",
        "Targets visible signs of aging related to collagen loss",
        "Smooths wrinkles and fine lines",
        "Evens skin tone and reduces pigmentation",
        "Hypoallergenic and tested on sensitive skin"
      ],
      specifications: [
        "Product Weight: 180 g",
        "Size: 50 ml",
        "Gender: Unisex",
        "Target Skin Type: All skin types",
        "Skin Concerns: Anti-aging",
        "Formulation: Cream"
      ],
      stock: 5,
      rate: 3.2,
    },
    {
      id: 11,
      image: 'assets/image/skincare-image/Liftactiv.png',
      name: 'Vichy Liftactiv Supreme Anti-Wrinkle Eye Care 15ml',
      brand: 'Vichy',
      category: 'Skincare',
      price: 600,
      discount: 0,
      details: [
        "Apply morning and evening with light taps around the eyes, starting from dark circles, eyelids, under the brow, and surrounding wrinkles",
        "Distribute the cream gently without pressing, starting from the inner eye area outwards",
        "Application can extend to the lash line",
        "360° effectiveness for younger-looking eyes: smooths wrinkles, lifts eyelids, reduces dark circles and under-eye puffiness",
        "Rich in rhamnose to reduce fine lines and fight visible signs of aging",
        "Contains escine and caffeine to brighten dark circles and soothe puffiness",
        "Leaves the eye area looking revitalized and radiant"
      ],
      specifications: [
        "Size: 15 ml",
        "Gender: Unisex",
        "Target Skin Type: All skin types",
        "Skin Concerns: Anti-aging",
        "Formulation: Cream"
      ],
      stock: 5,
      rate: 3.9,
    },
    {
      id: 12,
      image: 'assets/image/skincare-image/Facial-Cleanser.png',
      name: 'Vichy Facial Cleanser Gel 200ml',
      brand: 'Vichy',
      category: 'Skincare',
      price: 300,
      discount: 0,
      details: [
        "Suitable for all skin types",
        "Gel texture for gentle cleansing",
        "Removes impurities and toxins",
        "Safe ingredients for sensitive skin",
        "Contains active ingredient: Glycerin",
        "Recommended for facial use"
      ],
      specifications: [
        "Size: 200 ml",
        "Brand: Vichy",
        "Age Group: Adults",
        "Skin Type: All skin types",
        "Gender: Unisex",
        "Formulation: Gel",
        "Packaging: Tube",
        "Fragrance: Aloe Vera",
        "Sun Protection: SPF 50"
      ],
      stock: 5,
      rate: 4.3,
    },
    {
      id: 13,
      image: 'assets/image/skincare-image/Normaderm-Phytosolution.png',
      name: 'Vichy Normaderm Phytosolution Gel Cleanser 200ml',
      brand: 'Vichy',
      category: 'Skincare',
      price: 400,
      discount: 0,
      details:[
        "Use twice daily, morning and evening, on damp skin; massage into a foam and rinse thoroughly",
        "Avoid the eye area; in case of contact with eyes, rinse immediately with plenty of water",
        "Removes 91% of dirt and impurities after the first wash",
        "Reduces excess sebum by 94% after the first wash",
        "Refines skin texture and visibly reduces blemish marks after 4 weeks",
        "Purifies the skin without causing dryness",
        "Hypoallergenic and suitable for sensitive skin",
        "Tested under dermatological supervision",
        "Contains active ingredients: Salicylic Acid and Zinc Gluconate"
      ],
      specifications: [
        "Size: 200 ml",
        "Weight: 244 g",
        "Brand: Vichy",
        "Skin Type: Oily",
        "Gender: Unisex",
        "Formulation: Gel"
      ],
      stock: 5,
      rate: 2.7,
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
  getProductsByBrand(brand: string): Product[] { return this.products.filter(p => p.brand === brand); }

  getProductSkincare(): Product[] { return this.getProductsByCategory('Skincare'); }
  getProductPerfume(): Product[] { return this.getProductsByCategory('Perfumes'); }
  getProductMakeup(): Product[] { return this.getProductsByCategory('Makeup'); }
  getProductWatches(): Product[] { return this.getProductsByCategory('Watches'); }
  getProductAccessories(): Product[] { return this.getProductsByCategory('Accessories'); }

  getProductById(id: number): Product | undefined { return this.products.find(p => p.id === id); }
}
