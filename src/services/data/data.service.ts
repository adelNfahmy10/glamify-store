import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  image: string;
  images?:string[];
  name: string;
  brand: string;
  category: string;
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
      id: 2,
      image: 'assets/image/skincare-image/eucerin-double-serum.jpg',
      images: [
        // 'assets/image/skincare-image/eucerin-double-serum.jpg',
        // 'assets/image/skincare-image/eucerin-double-serum.jpg'
      ],
      name: 'Eucerin Even Pigment Perfector Dual Serum 30ml',
      brand: 'Eucerin',
      category: 'Skincare',
      price: 2900,
      discount: 350,
      details: [
        "Reduces dark spots and prevents their reappearance",
        "Targets hyperpigmentation at the root cause by reducing melanin production",
        "Enriched with patented Thiamidol for effective spot correction",
        "Contains hyaluronic acid to deeply hydrate and plump the skin",
        "Improves skin texture and promotes a smoother appearance",
        "Helps achieve a more even, radiant skin tone",
        "Lightweight dual serum formula for enhanced absorption",
        "Clinically and dermatologically tested for high efficacy and tolerance",
        "Suitable for all skin types including sensitive skin",
        "Visible results in as little as two weeks with regular use"
      ],
      specifications: [
        "Size: 30ml",
        "Skin Type: All Skin Types",
        "Concern: Hyperpigmentation & Dark Spots",
        "Texture: Lightweight Serum",
        "Key Ingredients: Thiamidol, Hyaluronic Acid",
        "Usage: Face - Daily Use",
        "Absorption: Fast Absorbing",
        "Dermatologically Tested",
        "Clinically Proven Results",
        "Suitable for Sensitive Skin"
      ],
      stock: 8,
      rate: 4.7,
    },
    {
      id: 3,
      image: 'assets/image/skincare-image/cerave-moisturizing-cream.jpeg',
      images: [
        // 'assets/image/skincare-image/cerave-moisturizing-cream.jpeg',
        // 'assets/image/skincare-image/cerave-moisturizing-cream.jpeg'
      ],
      name: 'CeraVe Moisturizing Cream 177ml',
      brand: 'CeraVe',
      category: 'Skincare',
      price: 750,
      discount: 120,
      details: [
        "Specially formulated to deeply moisturize and nourish the skin",
        "Provides long-lasting hydration to keep the skin soft and smooth",
        "Helps restore and maintain the skin’s natural protective barrier",
        "Enriched with essential ceramides for healthy skin",
        "Contains hyaluronic acid to retain moisture",
        "Rich creamy texture that absorbs quickly without a greasy feel",
        "Suitable for daily use on face and body",
        "Ideal for dry to very dry skin",
        "Fragrance-free and non-comedogenic",
        "Suitable for sensitive skin"
      ],
      specifications: [
        "Size: 177ml",
        "Skin Type: Dry to Very Dry Skin",
        "Texture: Rich Cream",
        "Finish: Non-Greasy",
        "Key Ingredients: Ceramides, Hyaluronic Acid",
        "Usage: Face & Body - Daily Use",
        "Free From: Fragrance-Free",
        "Non-Comedogenic Formula",
        "Dermatologist Recommended"
      ],
      stock: 10,
      rate: 4.6,
    },
    {
      id: 4,
      image: 'assets/image/skincare-image/Mineral-89.png',
      images:[
        'assets/image/skincare-image/Mineral-89.png',
        'assets/image/skincare-image/Mineral-89-2.png',
        'assets/image/skincare-image/Mineral-89-3.png',
      ],
      name: 'Vichy Mineral 89 Moisturizer',
      brand: 'Vichy',
      category: 'Skincare',
      price: 1280,
      discount: 230,
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
      id: 5,
      image: 'assets/image/skincare-image/vichy-dercos-anti-dandruff.jpeg',
      name: 'Vichy Dercos Anti-Dandruff Shampoo',
      brand: 'Vichy',
      category: 'Haircare',
      price: 750,
      discount: 150,
      details: [
        "Effectively eliminates visible dandruff from the first use.",
        "Provides long-lasting anti-dandruff protection for up to 6 weeks.",
        "Enriched with Selenium DS for antifungal action and scalp soothing.",
        "Helps reduce itching, redness, and irritation of the scalp.",
        "Contains Ceramides to strengthen and restore the scalp barrier.",
        "Controls excess oil and sebum production for oily scalp types.",
        "Leaves hair clean, fresh, and detoxified from roots to ends.",
        "Gentle formula suitable for daily use."
      ],
      specifications: [
        "Brand: Vichy",
        "Model Name: Dercos Anti-Dandruff Nourishing Shampoo",
        "Size: 200ml",
        "Hair Type: Normal to Oily Hair",
        "Concern: Dandruff",
        "Gender: Unisex",
        "Usage: Apply on wet hair, leave for 2 minutes on first use, then rinse thoroughly",
        "Treatment Duration: 4 weeks recommended",
        "UV Protection: Moderate"
      ],
      stock: 5,
      rate: 4.8,
    },
    {
      id: 6,
      image: 'assets/image/skincare-image/effaclar-h-iso-biome.jpeg',
      images: [
        // 'assets/image/skincare-image/effaclar-h-iso-biome.png',
        // 'assets/image/skincare-image/effaclar-h-iso-biome-2.png',
        // 'assets/image/skincare-image/effaclar-h-iso-biome-3.png',
      ],
      name: 'La Roche-Posay Effaclar H Iso-Biome Moisturizer',
      brand: 'La Roche-Posay',
      category: 'Skincare',
      price: 850,
      discount: 170,
      details: [
        "Provides intense hydration for oily skin weakened by acne treatments.",
        "Helps soothe irritation and reduce dryness and discomfort.",
        "Non-comedogenic formula that does not clog pores.",
        "Suitable for sensitive and oily skin types.",
        "Enriched with prebiotics to support the skin microbiome balance.",
        "Contains niacinamide to reduce redness and calm the skin.",
        "Formulated with panthenol and glycerin for deep hydration.",
        "Helps restore and strengthen the skin barrier.",
        "Reduces blemishes and improves skin texture.",
        "Provides long-lasting comfort and hydration.",
        "Helps relieve itching and skin irritation.",
        "Tested under dermatological control and suitable with acne treatments.",
        "Promotes faster skin recovery and healthier-looking skin."
      ],
      specifications: [
        "Brand: La Roche-Posay",
        "Product Name: Effaclar H Iso-Biome Moisturizer",
        "Size: 40 ml",
        "Skin Type: Oily & Sensitive Skin",
        "Concern: Acne Treatment Dryness, Irritation",
        "Texture: Cream",
        "Key Ingredients: Niacinamide, Panthenol, Glycerin, Prebiotics, Thermal Spring Water",
        "Gender: Unisex"
      ],
      stock: 5,
      rate: 4.7
    },
    {
      id: 7,
      image: 'assets/image/skincare-image/vichy-anthelios-uvmune-400.jpeg',
      name: 'Vichy Anthelios UVMune 400 Oil Control Invisible Fluid Sunscreen SPF 50+',
      brand: 'Vichy',
      category: 'Skincare',
      price: 1100,
      discount: 200,
      details: [
        "Provides advanced broad-spectrum protection against UVA and UVB rays.",
        "Powered by UVMune 400 technology for enhanced protection against ultra-long UVA rays.",
        "Helps control excess oil and shine, ideal for oily skin types.",
        "Lightweight invisible fluid texture that absorbs quickly without leaving white marks.",
        "Reduces dullness and keeps the skin looking fresh and healthy.",
        "Suitable for daily use with a non-greasy and breathable finish.",
        "Offers high SPF 50+ protection against harmful sun exposure."
      ],
      specifications: [
        "Brand: Vichy",
        "Model Name: Anthelios UVMune 400 Oil Control Invisible Fluid Sunscreen SPF 50+",
        "Size: 50ml",
        "Skin Type: Oily Skin",
        "Concern: Dull Skin",
        "Texture: Cream",
        "Gender: Unisex",
        "UV Protection: High SPF 50+"
      ],
      stock: 5,
      rate: 4.9,
    },
    {
      id: 8,
      image: 'assets/image/skincare-image/Cerave-oil-control.png',
      name: 'CeraVe Oil Control Sunscreen SPF 50+',
      brand: 'CeraVe',
      category: 'Skincare',
      price: 800,
      discount: 200,
      details: [
        "Provides broad-spectrum protection against UVA and UVB rays.",
        "Formulated specifically for oily and combination skin types.",
        "Helps control excess oil and reduce shine throughout the day.",
        "Lightweight, fast-absorbing formula with a non-greasy finish.",
        "Enriched with niacinamide to help soothe and calm the skin.",
        "Contains essential ceramides to support the skin barrier.",
        "Does not leave white cast, suitable for daily use.",
        "Keeps skin hydrated while maintaining a matte appearance.",
        "Ideal for use under makeup.",
        "SPF 50+ ensures high protection from sun damage."
      ],
      specifications: [
        "Brand: CeraVe",
        "Product Name: Oil Control Sunscreen SPF 50+",
        "Size: 50ml",
        "Skin Type: Oily & Combination Skin",
        "Concern: Oil Control, Sun Protection",
        "Texture: Lightweight Fluid",
        "Finish: Matte / Non-Greasy",
        "Key Ingredients: Niacinamide, Ceramides, Silica",
        "Gender: Unisex",
        "SPF: 50+",
        "UV Protection: Broad Spectrum (UVA & UVB)",
        "Water Resistant: Yes"
      ],
      stock: 5,
      rate: 4.9,
    },
    {
      id: 9,
      image: 'assets/image/skincare-image/cerave-moisturising-lotion.webp',
      name: 'CeraVe Moisturising Lotion for Dry to Very Dry Skin',
      brand: 'CeraVe',
      category: 'Skincare',
      price: 720,
      discount: 140,
      details: [
        "Lightweight, non-greasy, and fast-absorbing formula.",
        "Developed by dermatologists for daily face and body use.",
        "Provides up to 24-hour hydration with continuous moisture release.",
        "Helps restore and maintain the skin’s natural protective barrier.",
        "Enriched with Hyaluronic Acid to retain skin moisture.",
        "Suitable for dry to very dry skin types.",
        "Fragrance-free and gentle on sensitive skin."
      ],
      specifications: [
        "Brand: CeraVe",
        "Model Name: Moisturising Lotion",
        "Size: 236ml",
        "Skin Type: Dry to Very Dry Skin",
        "Concern: Dryness",
        "Texture: Lotion",
        "Gender: Unisex",
        "Technology: MVE Delivery Technology",
        "Key Ingredients: Ceramides (1, 3, 6-II), Hyaluronic Acid",
        "Usage: Suitable for face and body",
        "Fragrance: Fragrance-Free"
      ],
      stock: 5,
      rate: 5,
    },
    {
      id: 10,
      image: 'assets/image/skincare-image/cerave-hydrating-cleanser.jpg',
      images: [
        // 'assets/image/skincare-image/cerave-hydrating-cleanser.jpg',
        // 'assets/image/skincare-image/cerave-hydrating-cleanser-2.jpg',
        // 'assets/image/skincare-image/cerave-hydrating-cleanser-3.jpg',
      ],
      name: 'CeraVe Hydrating Cleanser for Normal to Dry Skin',
      brand: 'CeraVe',
      category: 'Skincare',
      price: 680,
      discount: 180 ,
      details: [
        "Gently cleanses the skin without stripping moisture or leaving it tight or dry.",
        "Suitable for normal to dry and sensitive skin types.",
        "Developed with dermatologists and accepted by the National Eczema Association.",
        "Removes dirt, oil, and light makeup effectively.",
        "Enriched with Hyaluronic Acid to help retain the skin’s natural moisture.",
        "Contains 3 essential Ceramides to restore and maintain the skin barrier.",
        "Features MVE Delivery Technology for continuous hydration throughout the day.",
        "Non-comedogenic, fragrance-free, and non-irritating formula.",
        "Suitable for both adults and children.",
        "Leaves skin soft, refreshed, and hydrated after every use."
      ],
      specifications: [
        "Product Weight: 534 g",
        "Size / Volume: 473 ml",
        "Gender: Unisex",
        "Target Skin Type: Normal to Dry Skin",
        "Skin Concerns: Dryness",
        "Formulation: Cream Cleanser",
        "Model Name: Hydrating Cleanser"
      ],
      stock: 10,
      rate: 4.8
    },
    {
      id: 11,
      image: 'assets/image/skincare-image/Serum-Mineral-89.png',
      images:[
        'assets/image/skincare-image/Serum-Mineral-89.png',
        'assets/image/skincare-image/Serum-Mineral-89-2.png',
        'assets/image/skincare-image/Serum-Mineral-89-3.png',
      ],
      name: 'Vichy Mineral 89 Eye Moisturizer',
      brand: 'Vichy',
      category: 'Skincare',
      price: 1220,
      discount: 210,
      details: [
        "Moisturizes and deeply hydrates the skin",
        "Helps improve the appearance of tired eyes and adds brightness",
        "Dermatologically and ophthalmologically tested"
      ],
      specifications:[
        "Size: 15 ml",
        "Gender: Unisex",
        "Target Skin Type: Sensitive skin",
        "Model Name: Mineral"
      ],
      stock: 5,
      rate:4.6,
    },
    {
      id: 12,
      image: 'assets/image/skincare-image/Serum-Lefit-Active.png',
      images:[
        'assets/image/skincare-image/Serum-Lefit-Active.png',
        'assets/image/skincare-image/Serum-Lefit-Active-2.png',
        'assets/image/skincare-image/Serum-Lefit-Active-3.png',
      ],
      name: 'Vichy Liftactiv Vitamin C 16% Serum',
      brand: 'Vichy',
      category: 'Skincare',
      price: 1680,
      discount: 280,
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
        "Model Name: Liftactiv Vitamin C 16% Serum"
      ],
      stock: 5,
      rate:4.3,
    },
    {
      id: 13,
      image: 'assets/image/skincare-image/Lefit-Active-Seshylist.png',
      images:[
        'assets/image/skincare-image/Lefit-Active-Seshylist.png',
        'assets/image/skincare-image/Lefit-Active-Seshylist-2.png',
        'assets/image/skincare-image/Lefit-Active-Seshylist-3.png',
      ],
      name: 'Vichy Liftactiv Specialist B3 Dark Spot Serum 30ml',
      brand: 'Vichy',
      category: 'Skincare',
      price: 1720,
      discount: 300,
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
    id: 14,
    image: 'assets/image/skincare-image/Capital-Solary.jpg',
    images:[
      'assets/image/skincare-image/Capital-Solary.jpg',
      'assets/image/skincare-image/Capital-Solary-3.png',
    ],
    name: 'Vichy Capital Solute UV-Age Sunscreen SPF 50',
    brand: 'Vichy',
    category: 'Skincare',
    price: 1110,
    discount: 200,
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
      "Size: 50 ml",
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
      id: 15,
      image: 'assets/image/skincare-image/Edial-Solary.webp',
      images:[
        'assets/image/skincare-image/Edial-Solary.webp',
        'assets/image/skincare-image/Edial-Solary-2.webp',
        'assets/image/skincare-image/Edial-Solary-3.png',
        'assets/image/skincare-image/Edial-Solary-4.png'
      ],
      name: 'SPF 50 Velvety cream skin perfecting action',
      brand: 'Vichy',
      category: 'Skincare',
      price: 1110,
      discount: 200,
      details: [
        "Provides broad-spectrum SPF 50+ protection against UVA and UVB rays.",
        "Helps prevent sun-induced skin damage including wrinkles, spots, and premature aging.",
        "Velvety cream texture that absorbs quickly and leaves a soft, non-greasy finish.",
        "Enriched with Vichy Thermal Spa Water to soothe, fortify, and regenerate the skin.",
        "Lightweight and comfortable for daily use on all skin types.",
        "Enhances skin radiance and leaves a healthy glow.",
        "Prevents dryness and helps maintain skin hydration.",
        "Non-comedogenic and suitable for sensitive skin.",
        "Ideal for use under makeup or as part of your daily skincare routine."
      ],
      specifications: [
        "Size: 50 ml",
        "SPF 50+ broad-spectrum protection (UVA & UVB)",
        "Suitable for all skin types including sensitive skin",
        "Velvety cream texture",
        "Non-greasy finish with soft matte glow",
        "Enriched with Vichy Thermal Spa Water",
        "Water-resistant formula",
        "Non-comedogenic (won’t clog pores)",
        "Suitable for daily facial use",
        "Unisex product (men & women)",
        "Paraben-free formula"
      ],
      stock: 5,
      rate: 5,
    },
    {
      id: 16,
      image: 'assets/image/skincare-image/Normadirm.png',
      images: [
        'assets/image/skincare-image/Normadirm.png',
        'assets/image/skincare-image/Normadirm-2.png',
        'assets/image/skincare-image/Normadirm-3.png',
      ],
      name: 'Vichy Normaderm Phytosolution Daily Moisturizer',
      brand: 'Vichy',
      category: 'Skincare',
      price: 1050,
      discount: 200,
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
      rate: 4.7,
    },
    {
      id: 17,
      image: 'assets/image/skincare-image/Mozel-Vichy.png',
      images: [
        'assets/image/skincare-image/Mozel-Vichy.png',
        'assets/image/skincare-image/Mozel-Vichy-2.png',
        'assets/image/skincare-image/Mozel-Vichy-3.png',
      ],
      name: 'Vichy Suncare Sunscreen Anti-Aging SPF 50',
      brand: 'Vichy',
      category: 'Skincare',
      price: 1180,
      discount: 130,
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
      rate: 4.4,
    },
    {
      id: 18,
      image: 'assets/image/skincare-image/Peauty-Duo.png',
      images: [
        'assets/image/skincare-image/Peauty-Duo.png',
        'assets/image/skincare-image/Peauty-Duo-2.png',
        'assets/image/skincare-image/Peauty-Duo-3.png',
      ],
      name: 'Vichy Beauty Deo Anti-Perspirant 48h for Women',
      brand: 'Vichy',
      category: 'Skincare',
      price: 820,
      discount: 160,
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
      ],
      stock: 5,
      rate: 4.9,
    },
    {
      id: 19,
      image: 'assets/image/skincare-image/Lefit-Active-Cologen-spicalist.png',
      images: [
        'assets/image/skincare-image/Lefit-Active-Cologen-spicalist.png',
        'assets/image/skincare-image/Lefit-Active-Cologen-spicalist-2.png',
        'assets/image/skincare-image/Lefit-Active-Cologen-spicalist-3.png',
      ],
      name: 'Vichy Liftactiv Collagen Specialist Anti-Wrinkle & Firming Day Cream 50ml',
      brand: 'Vichy',
      category: 'Skincare',
      price: 1580,
      discount: 330,
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
      rate: 4.7,
    },
    {
      id: 20,
      image: 'assets/image/skincare-image/Liftactiv.png',
      images: [
        'assets/image/skincare-image/Liftactiv.png',
        'assets/image/skincare-image/Liftactiv.png',
        'assets/image/skincare-image/Liftactiv.png',
      ],
      name: 'Vichy Liftactiv Supreme Anti-Wrinkle Eye Care 15ml',
      brand: 'Vichy',
      category: 'Skincare',
      price: 1320,
      discount: 270,
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
        "Formulation: Cream"
      ],
      stock: 5,
      rate: 4.8,
    },
    {
      id: 21,
      image: 'assets/image/skincare-image/Facial-Cleanser.png',
      images: [
        'assets/image/skincare-image/Facial-Cleanser.png',
        'assets/image/skincare-image/Facial-Cleanser.png',
        'assets/image/skincare-image/Facial-Cleanser.png',
      ],
      name: 'Vichy Facial Cleanser Gel 200ml',
      brand: 'Vichy',
      category: 'Skincare',
      price: 870,
      discount: 170,
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
      rate: 4.6,
    },
    {
      id: 22,
      image: 'assets/image/skincare-image/Normaderm-Phytosolution.png',
      images: [
        'assets/image/skincare-image/Normaderm-Phytosolution.png',
        'assets/image/skincare-image/Normaderm-Phytosolution.png',
        'assets/image/skincare-image/Normaderm-Phytosolution.png',
      ],
      name: 'Vichy Normaderm Phytosolution Gel Cleanser 200ml',
      brand: 'Vichy',
      category: 'Skincare',
      price: 850,
      discount: 150,
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
      rate: 4.7,
    },
    {
      id: 23,
      image: 'assets/image/skincare-image/Cerave-retinol.png',
      name: 'CeraVe Resurfacing Retinol Serum for Post-Acne Marks & Pores 30ml',
      brand: 'CeraVe',
      category: 'Skincare',
      price: 870,
      discount: 120,
      details: [
        "Helps reduce the appearance of post-acne marks and skin discoloration while maintaining the skin barrier",
        "Improves the look of uneven skin tone and hyperpigmentation",
        "Lightweight, fast-absorbing formula",
        "Non-greasy and non-drying",
        "Suitable for sensitive skin",
        "Contains Retinol, Niacinamide, and Licorice Root Extract",
        "Use in the evening only; apply sunscreen during the day",
        "Start with a small amount once weekly, then gradually increase usage",
        "Avoid contact with eyes and lips; rinse thoroughly if contact occurs"
      ],
      specifications: [
        "Size: 30 ml",
        "Brand: CeraVe",
        "Skin Type: Sensitive",
        "Formulation: Serum",
        "Key Ingredients: Retinol, Niacinamide, Licorice Root Extract"
      ],
      stock: 8,
      rate: 4.6
    },
    // {
    //   id: 24,
    //   image: 'assets/image/skincare-image/Skin-clinic-collagen.png',
    //   name: 'Skin Clinic Collagen Face Cleanser 150ml',
    //   brand: 'Eva',
    //   category: 'Skincare',
    //   price: 195,
    //   discount: 50,
    //   details: [
    //     "Apply a small amount to damp face, gently massage with fingertips, then rinse thoroughly with water and pat dry",
    //     "Helps reduce the appearance of blackheads and whiteheads",
    //     "For external use only; keep out of reach of children"
    //   ],
    //   specifications: [
    //     "Size: 150 ml",
    //     "Weight: 150 g",
    //     "Brand: Skin Clinic",
    //     "Skin Type: All",
    //     "Gender: Unisex",
    //     "Formulation: Cleanser"
    //   ],
    //   stock: 10,
    //   rate: 4.7
    // },
    // {
    //   id: 25,
    //   image: 'assets/image/skincare-image/Iva-7in1-face.png',
    //   name: 'Eva 7-in-1 Vitamin Face Cream 45g',
    //   brand: 'Eva',
    //   category: 'Skincare',
    //   price: 60,
    //   discount: 7,
    //   details: [
    //     "Daily face cream enriched with vitamins providing 7 benefits for the skin",
    //     "Deeply hydrates and nourishes the skin (Vitamin B5 & E)",
    //     "Reduces the appearance of pores (Vitamin B3)",
    //     "Restores skin softness (Vitamin B5 & E)",
    //     "Improves skin elasticity and firmness (Vitamin B5 & B3)",
    //     "Brightens and purifies the skin for a radiant look",
    //     "Evens out skin tone (Vitamin B3 & E)",
    //     "Suitable for all skin types"
    //   ],
    //   specifications: [
    //     "Size: 45 g",
    //     "Brand: Eva",
    //     "Skin Type: All",
    //     "Gender: Unisex",
    //     "Formulation: Cream",
    //     "Key Ingredients: Vitamins B3, B5, E"
    //   ],
    //   stock: 12,
    //   rate: 4.5
    // },
    // {
    //   id: 26,
    //   image: 'assets/image/skincare-image/Iva-body-lightening.png',
    //   name: 'Eva Body Lightening & Even Tone Cream 150ml',
    //   brand: 'Eva',
    //   category: 'Skincare',
    //   price: 75,
    //   discount: 11,
    //   details: [
    //     "Body cream formulated to lighten and even out dark areas on elbows, knees, and underarms",
    //     "Enriched with White Pearl Extract, Vitamin B3, and Octadecenedioic Acid",
    //     "Lightweight texture and easy to apply for smooth, uniform skin",
    //     "For external use only; avoid contact with eyes",
    //     "Keep away from open flames and direct heat sources"
    //   ],
    //   specifications: [
    //     "Size: 150 ml",
    //     "Weight: 150 g",
    //     "Brand: Eva",
    //     "Skin Type: All",
    //     "Gender: Unisex",
    //     "Formulation: Cream",
    //     "Key Ingredients: White Pearl Extract, Vitamin B3, Octadecenedioic Acid"
    //   ],
    //   stock: 15,
    //   rate: 4.5
    // },
    // {
    //   id: 27,
    //   image: 'assets/image/skincare-image/Iva-aloe-hair-oil.png',
    //   name: 'Eva Aloe Hair Oil Replacement 250ml',
    //   brand: 'Eva',
    //   category: 'skincare',
    //   price: 110,
    //   discount: 28,
    //   details: [
    //     "Rich in 12 vitamins, 20 minerals, and 17 proteins to nourish hair from roots to tips",
    //     "Strengthens hair and reduces hair fall while promoting healthy growth and vitality",
    //     "Smooths hair and enhances shine",
    //     "Repairs and softens hair strands for thick, healthy hair",
    //     "Detangles, styles, and reduces frizz",
    //     "Unique formula that strengthens hair and nourishes the scalp",
    //     "Suitable for all hair types"
    //   ],
    //   specifications: [
    //     "Size: 250 ml",
    //     "Weight: 250 g",
    //     "Brand: Eva",
    //     "Hair Type: All",
    //     "Gender: Unisex",
    //     "Shelf Life: 3 years",
    //     "Formulation: Hair Oil"
    //   ],
    //   stock: 20,
    //   rate: 4.4
    // },
    // {
    //   id: 28,
    //   image: 'assets/image/skincare-image/Iiva-glycerin-cream.png',
    //   name: 'Eva Glycerin Cream for Dry Skin 20g',
    //   brand: 'Eva',
    //   category: 'Skincare',
    //   price: 24,
    //   discount: 8,
    //   details: [
    //     "Moisturizing cream enriched with glycerin for deep hydration",
    //     "Helps restore softness and smoothness to dry and rough skin",
    //     "Lightweight, non-greasy formula suitable for daily use",
    //     "Suitable for sensitive skin and all ages",
    //     "Apply to clean, dry skin and massage gently until fully absorbed"
    //   ],
    //   specifications: [
    //     "Size: 20 g",
    //     "Brand: Eva",
    //     "Skin Type: Dry",
    //     "Gender: Unisex",
    //     "Formulation: Cream",
    //     "Key Ingredients: Glycerin"
    //   ],
    //   stock: 25,
    //   rate: 4.6
    // },
    // {
    //   id: 29,
    //   image: 'assets/image/skincare-image/iva-honey-cream.png',
    //   name: 'Eva Honey Face Cream 20g',
    //   brand: 'Eva',
    //   category: 'Skincare',
    //   price: 24,
    //   discount: 8,
    //   details: [
    //     "Moisturizing cream enriched with honey for soft and nourished skin",
    //     "Helps restore skin hydration and improve skin texture",
    //     "Lightweight and non-greasy formula suitable for daily use",
    //     "Suitable for all skin types, including sensitive skin",
    //     "Apply to clean, dry skin and massage gently until fully absorbed"
    //   ],
    //   specifications: [
    //     "Size: 20 g",
    //     "Brand: Eva",
    //     "Skin Type: All",
    //     "Gender: Unisex",
    //     "Formulation: Cream",
    //     "Key Ingredients: Honey"
    //   ],
    //   stock: 30,
    //   rate: 4.4
    // },
    // {
    //   id: 30,
    //   image: 'assets/image/skincare-image/iva-ivazleen-hand-cream.png',
    //   name: 'Eva Skin Care Ivazleen Hand Cream for Deep Moisturization 60g',
    //   brand: 'Eva',
    //   category: 'Skincare',
    //   price: 126,
    //   discount: 27,
    //   details: [
    //     "Rich hand cream formulated to deeply moisturize dry skin",
    //     "Contains vitamins, vaseline, and glycerin to maintain long-lasting hydration",
    //     "Leaves hands soft, smooth, and nourished throughout the day",
    //     "Use before bedtime for maximum softness in the morning",
    //     "For external use only; avoid contact with eyes; rinse thoroughly if contact occurs",
    //     "Keep out of reach of children"
    //   ],
    //   specifications: [
    //     "Size: 60 g",
    //     "Brand: Eva",
    //     "Skin Type: All",
    //     "Gender: Unisex",
    //     "Formulation: Cream",
    //     "Target Skin Concern: Mixed/All"
    //   ],
    //   stock: 20,
    //   rate: 4.5
    // },
    // {
    //   id: 31,
    //   image: 'assets/image/skincare-image/iva-ivazleen-body-lotion.png',
    //   name: 'Eva Skin Care Ivazleen Body Lotion for Deep Moisturization 240ml',
    //   brand: 'Eva',
    //   category: 'Skincare',
    //   price: 120,
    //   discount: 15,
    //   details: [
    //     "Provides intensive hydration and silky-smooth skin with a rich, effective formula",
    //     "Contains Vaseline to prevent moisture loss and protect the skin",
    //     "Glycerin enhances skin's ability to retain hydration",
    //     "Leaves skin feeling soft, nourished, and comfortable",
    //     "Use before bedtime for maximum hydration and softness in the morning",
    //     "For external use only; avoid contact with eyes"
    //   ],
    //   specifications: [
    //     "Size: 240 ml",
    //     "Brand: Eva",
    //     "Skin Type: All",
    //     "Gender: Women",
    //     "Formulation: Cream/Lotion",
    //     "Target Skin: All Skin Types"
    //   ],
    //   stock: 18,
    //   rate: 4.4
    // },
    // {
    //   id: 32,
    //   image: 'assets/image/skincare-image/iva-c-kids-sunscreen.png',
    //   name: 'Eva & C Kids Waterproof Sunscreen Cream SPF 50 200ml',
    //   brand: 'Eva',
    //   category: 'Skincare',
    //   price: 287,
    //   discount: 73,
    //   details: [
    //     "Protects children’s skin from harmful UV rays",
    //     "Formulated with minerals, chemical filters, and antioxidants for broad-spectrum protection",
    //     "Prevents sunburns and premature skin aging",
    //     "Waterproof formula suitable for outdoor activities",
    //     "Safe for daily use on all skin types"
    //   ],
    //   specifications: [
    //     "Size: 200 ml",
    //     "Brand: Eva",
    //     "Skin Type: All",
    //     "Gender: Kids/Unisex",
    //     "Formulation: Cream",
    //     "Color: Multi-color",
    //     "Key Ingredients: UV Filters, Antioxidants, Minerals"
    //   ],
    //   stock: 22,
    //   rate: 4.6
    // },
    // {
    //   id: 33,
    //   image: 'assets/image/skincare-image/iva-c-tinted-sunscreen.png',
    //   name: 'Eva & C Tinted Face Sunscreen SPF 50+ 40ml',
    //   brand: 'Eva',
    //   category: 'Skincare',
    //   price: 190,
    //   discount: 11,
    //   details: [
    //     "Provides maximum protection against harmful UV rays, including long-wave and medium-wave UVA",
    //     "Prevents sunburns and premature skin aging",
    //     "Moisturizing formula designed for full coverage and skin protection with high-efficiency triple photoprotection system",
    //     "Contains a blend of minerals to reflect sunlight, antioxidants, and chemical UV filters to absorb UV radiation",
    //     "Safe for daily use on all skin types"
    //   ],
    //   specifications: [
    //     "Size: 40 ml",
    //     "Brand: Eva",
    //     "Skin Type: All",
    //     "Gender: Unisex",
    //     "Formulation: Tinted Cream/Sunscreen",
    //     "Model Name: Eva Sun And Sea Face Tinted Sunscreen 50+SPF",
    //     "Key Ingredients: Minerals, Antioxidants, UV Filters"
    //   ],
    //   stock: 20,
    //   rate: 4.6
    // },
    // {
    //   id: 34,
    //   image: 'assets/image/skincare-image/iva-c-sunscreen-50.png',
    //   name: 'Eva & C Sunscreen SPF 50+ 20ml',
    //   brand: 'Eva',
    //   category: 'Skincare',
    //   price: 190,
    //   discount: 11,
    //   details: [
    //     "Provides maximum protection against harmful UV rays, including long-wave and medium-wave UVA",
    //     "Moisturizing formula nourishes and deeply hydrates the skin",
    //     "Lightweight, non-greasy texture leaves a natural, non-shiny finish",
    //     "Safe for daily use on all skin types",
    //     "Apply generously to face before sun exposure"
    //   ],
    //   specifications: [
    //     "Size: 20 ml",
    //     "Brand: Eva",
    //     "Skin Type: All",
    //     "Gender: Unisex",
    //     "Formulation: Cream/Sunscreen",
    //     "Key Features: Lightweight, Non-Greasy, Deeply Hydrating"
    //   ],
    //   stock: 25,
    //   rate: 4.5
    // },
    // {
    //   id: 35,
    //   image: 'assets/image/skincare-image/iva-natural-glow-day-cream.png',
    //   name: 'Eva Skin Care Natural Glow Day Cream SPF 30 50g',
    //   brand: 'Eva',
    //   category: 'Skincare',
    //   price: 135,
    //   discount: 42,
    //   details: [
    //     "Day cream with SPF 30 that protects skin from harmful sun rays",
    //     "Advanced formula with vitamins and natural ingredients to even out skin tone",
    //     "Moisturizes and nourishes skin for a radiant, healthy glow",
    //     "Suitable for all skin types",
    //     "Apply daily on clean skin for best results"
    //   ],
    //   specifications: [
    //     "Size: 50 g",
    //     "Brand: Eva",
    //     "Skin Type: All",
    //     "Gender: Women",
    //     "Formulation: Cream",
    //     "Color: White",
    //     "Model Name: Moisturizers Face Moisturizer-17"
    //   ],
    //   stock: 18,
    //   rate: 4.5
    // },
    // {
    //   id: 36,
    //   image: 'assets/image/skincare-image/eva-deodorant-spring-lilies.png',
    //   name: 'Eva Skin Care Senses Deodorant Roll-On - Spring Lilies',
    //   brand: 'Eva',
    //   category: 'Skincare',
    //   price: 150,
    //   discount: 23,
    //   details: [
    //     "Provides triple protection against sweat and odor",
    //     "Keeps you fresh and pleasantly scented all day",
    //     "Enriched with Vitamin E for smoother skin",
    //     "Contains ginseng root extract to refresh and revitalize skin",
    //     "Helps reduce perspiration effectively"
    //   ],
    //   specifications: [
    //     "Scent: Spring Lilies",
    //     "Formulation: Roll-On",
    //     "Skin Type: All",
    //     "Gender: Women",
    //     "Size: 50g",
    //     "Box Contents: Deodorant Roll-On"
    //   ],
    //   stock: 60,
    //   rate: 4.5
    // },
    // {
    //   id: 37,
    //   image: 'assets/image/skincare-image/eva-deodorant-morning-blossom.png',
    //   name: 'Eva Skin Care Senses Deodorant Roll-On - Morning Blossom',
    //   brand: 'Eva',
    //   category: 'Skincare',
    //   price: 150,
    //   discount: 23,
    //   details: [
    //     "Provides triple protection against sweat and odor",
    //     "Keeps you fresh and pleasantly scented all day",
    //     "Helps soothe and moisturize the skin",
    //     "Enriched with glycerin for hydration",
    //     "Contains oat extract to calm and soften skin",
    //     "Effectively reduces perspiration"
    //   ],
    //   specifications: [
    //     "Scent: Morning Blossom",
    //     "Formulation: Roll-On",
    //     "Skin Type: All",
    //     "Gender: Women",
    //     "Size: 50g",
    //     "Box Contents: Deodorant Roll-On"
    //   ],
    //   stock: 55,
    //   rate: 4.6
    // },
    // {
    //   id: 38,
    //   image: 'assets/image/skincare-image/eva-white-pearl-eye-cream.png',
    //   name: 'Eva Skin Clinic White Pearl Eye Cream - 15ml',
    //   brand: 'Eva',
    //   category: 'Skincare',
    //   price: 280,
    //   discount: 76,
    //   details: [
    //     "Reduces the appearance of dark circles for an instant brightening effect",
    //     "Minimizes under-eye puffiness for a refreshed look",
    //     "Contains white pearl extract for a delicate luminous finish",
    //     "Enriched with natural marine minerals to revitalize skin",
    //     "Provides antioxidant benefits to protect delicate eye area"
    //   ],
    //   specifications: [
    //     "Formulation: Cream",
    //     "Skin Area: Eye",
    //     "Skin Type: All",
    //     "Gender: Women",
    //     "Volume: 15ml",
    //     "Box Contents: Eye Cream"
    //   ],
    //   stock: 40,
    //   rate: 4.5
    // },
    // {
    //   id: 39,
    //   image: 'assets/image/skincare-image/eva-cozy-dream-body-serum.png',
    //   name: 'Eva Senses Cozy Dream Body Serum - 150ml',
    //   brand: 'Eva',
    //   category: 'Skincare',
    //   price: 175,
    //   discount: 6,
    //   details: [
    //     "Provides a natural daily glow for your skin",
    //     "Lightweight and fast-absorbing texture ideal for all skin types",
    //     "Enhances your daily skincare routine",
    //     "Maintains natural skin radiance",
    //     "Reduces skin roughness for smoother feel",
    //     "Enriched with Macadamia Oil and Moringa Oil for nourishment"
    //   ],
    //   specifications: [
    //     "Formulation: Serum",
    //     "Skin Type: All",
    //     "Gender: Women",
    //     "Volume: 150ml",
    //     "Box Contents: Body Serum"
    //   ],
    //   stock: 45,
    //   rate: 4.4
    // },
    // {
    //   id: 40,
    //   image: 'assets/image/skincare-image/eva-cozy-dream-body-serum-2.png',
    //   name: 'Eva Senses Cozy Dream Body Serum - 150ml',
    //   brand: 'Eva',
    //   category: 'Haircare',
    //   price: 170,
    //   discount: 0,
    //   details: [
    //     "Provides a natural daily glow for your skin",
    //     "Lightweight and fast-absorbing texture ideal for all skin types",
    //     "Enhances your daily skincare routine",
    //     "Maintains natural skin radiance",
    //     "Reduces skin roughness for smoother feel",
    //     "Enriched with Macadamia Oil and Moringa Oil for nourishment"
    //   ],
    //   specifications: [
    //     "Formulation: Serum",
    //     "Skin Type: All",
    //     "Gender: Women",
    //     "Volume: 150ml",
    //     "Box Contents: Body Serum"
    //   ],
    //   stock: 45,
    //   rate: 4.4
    // },
    // {
    //   id: 41,
    //   image: 'assets/image/skincare-image/eva-shea-flaxseed-hair-wax.png',
    //   name: 'Eva Advanced Care Clinic Shea Butter & Flaxseed Hair Styling Wax - 75g',
    //   brand: 'Eva',
    //   category: 'Haircare',
    //   price: 250,
    //   discount: 0,
    //   details: [
    //     "Moisturizes and styles hair while protecting it from environmental damage",
    //     "Enhances hair texture for smooth, manageable, and elegant look",
    //     "Non-greasy formula ideal for curly, wavy, and textured hair",
    //     "Enriched with Shea Butter and Flaxseed Extract for nourishment and hydration",
    //     "Perfect for daily styling and maintaining hair health"
    //   ],
    //   specifications: [
    //     "Formulation: Wax",
    //     "Hair Type: Curly / Wavy / Textured",
    //     "Gender: Women",
    //     "Weight: 75g",
    //     "Box Contents: Hair Styling Wax"
    //   ],
    //   stock: 30,
    //   rate: 4.6
    // },
    // {
    //   id: 42,
    //   image: 'assets/image/skincare-image/eva-spotless-cream-tube.png',
    //   name: 'Eva Spotless Cream Tube - 18g',
    //   brand: 'Eva',
    //   category: 'Skincare',
    //   price: 25,
    //   discount: 0,
    //   details: [
    //     "Removes dead skin cells and deeply cleanses pores",
    //     "Gentle on the skin and absorbs quickly",
    //     "Non-greasy formula ideal for daily use",
    //     "Helps achieve smoother and clearer skin"
    //   ],
    //   specifications: [
    //     "Formulation: Cream",
    //     "Skin Type: All",
    //     "Gender: Women",
    //     "Weight: 18g",
    //     "Box Contents: Spotless Cream Tube"
    //   ],
    //   stock: 70,
    //   rate: 4.6
    // },
    // {
    //   id: 43,
    //   image: 'assets/image/skincare-image/eva-rose-water-toner.png',
    //   name: 'Eva Rose Water Face Toner - 100ml',
    //   brand: 'Eva',
    //   category: 'Skincare',
    //   price: 40,
    //   discount: 0,
    //   details: [
    //     "Enhances skin radiance and vitality",
    //     "Reduces the appearance of pores",
    //     "Restores natural skin balance for a fresh and glowing look",
    //     "Gentle formula suitable for daily use"
    //   ],
    //   specifications: [
    //     "Formulation: Toner",
    //     "Skin Type: All",
    //     "Gender: Women",
    //     "Volume: 100ml",
    //     "Box Contents: Face Toner"
    //   ],
    //   stock: 60,
    //   rate: 4.4
    // },
    // {
    //   id: 44,
    //   image: 'assets/image/skincare-image/eva-glycerin-honey-soap.png',
    //   name: 'Eva Skincare Glycerin Soap with Honey - 100g',
    //   brand: 'Eva',
    //   category: 'Skincare',
    //   price: 40,
    //   discount: 0,
    //   details: [
    //     "Gentle, fragrance-free soap suitable for sensitive skin",
    //     "Rich in natural oils to cleanse impurities and unclog pores",
    //     "Nourishes and moisturizes skin for a healthy, clear, and radiant look",
    //     "Ideal for daily use on all skin types"
    //   ],
    //   specifications: [
    //     "Formulation: Soap",
    //     "Skin Type: All (including sensitive)",
    //     "Gender: Unisex",
    //     "Weight: 100g",
    //     "Box Contents: Glycerin Soap"
    //   ],
    //   stock: 80,
    //   rate: 4.5
    // },
    // {
    //   id: 45,
    //   image: 'assets/image/skincare-image/eva-watermelon-lip-balm.png',
    //   name: 'Eva Skin Care Senses Watermelon Lip Balm - 4g',
    //   brand: 'Eva',
    //   category: 'Skincare',
    //   price: 70,
    //   discount: 0,
    //   details: [
    //     "Provides long-lasting hydration for dry or chapped lips",
    //     "Contains Vaseline, Cocoa Butter, Shea Butter, and Vitamin E to soften and nourish lips",
    //     "Gives lips a shiny, glossy look",
    //     "Includes SPF 15 for protection against sun damage",
    //     "Ideal for daily use"
    //   ],
    //   specifications: [
    //     "Formulation: Balm",
    //     "Flavor/Scent: Watermelon",
    //     "Skin Type: All",
    //     "Gender: Women",
    //     "Weight: 4g",
    //     "Box Contents: Lip Balm"
    //   ],
    //   stock: 50,
    //   rate: 4.6
    // },
    // {
    //   id: 46,
    //   image: 'assets/image/skincare-image/eva-cranberry-lip-balm.png',
    //   name: 'Eva Skin Care Senses Cranberry Lip Balm - 4g',
    //   brand: 'Eva',
    //   category: 'Skincare',
    //   price: 70,
    //   discount: 0,
    //   details: [
    //     "Provides long-lasting hydration for dry or chapped lips",
    //     "Contains Vaseline, Cocoa Butter, Shea Butter, and Vitamin E to soften and nourish lips",
    //     "Gives lips a shiny, glossy look",
    //     "Includes SPF 15 for protection against sun damage",
    //     "Ideal for daily use"
    //   ],
    //   specifications: [
    //     "Formulation: Balm",
    //     "Flavor/Scent: Cranberry",
    //     "Skin Type: All",
    //     "Gender: Women",
    //     "Weight: 4g",
    //     "Box Contents: Lip Balm"
    //   ],
    //   stock: 50,
    //   rate: 4.6
    // },
    // {
    //   id: 47,
    //   image: 'assets/image/skincare-image/eva-cranberry-lip-balm-2.png',
    //   name: 'Eva Skin Care Senses Cranberry Lip Balm - 4g',
    //   brand: 'Eva',
    //   category: 'Skincare',
    //   price: 70,
    //   discount: 0,
    //   details: [
    //     "Provides long-lasting hydration for dry or chapped lips",
    //     "Contains Vaseline, Cocoa Butter, Shea Butter, and Vitamin E to soften and nourish lips",
    //     "Gives lips a shiny, glossy look",
    //     "Includes SPF 15 for protection against sun damage",
    //     "Ideal for daily use"
    //   ],
    //   specifications: [
    //     "Formulation: Balm",
    //     "Flavor/Scent: Cranberry",
    //     "Skin Type: All",
    //     "Gender: Women",
    //     "Weight: 4g",
    //     "Box Contents: Lip Balm"
    //   ],
    //   stock: 50,
    //   rate: 4.6
    // },
    // {
    //   id: 48,
    //   image: 'assets/image/skincare-image/eva-sweet-cherry-lip-balm.png',
    //   name: 'Eva Skin Care Senses Sweet Cherry Lip Balm - 4g',
    //   brand: 'Eva',
    //   category: 'Skincare',
    //   price: 70,
    //   discount: 0,
    //   details: [
    //     "Provides long-lasting hydration for dry or chapped lips",
    //     "Triple-layer moisturizing formula with Vaseline, Cocoa Butter, Shea Butter, and Vitamin E",
    //     "Softens and nourishes lips while giving them shine and glow",
    //     "Includes SPF 15 for sun protection",
    //     "Ideal for daily use"
    //   ],
    //   specifications: [
    //     "Formulation: Balm",
    //     "Flavor/Scent: Sweet Cherry",
    //     "Skin Type: All",
    //     "Gender: Women",
    //     "Weight: 4g",
    //     "Box Contents: Lip Balm"
    //   ],
    //   stock: 50,
    //   rate: 4.6
    // },
    // {
    //   id: 49,
    //   image: 'assets/image/skincare-image/eva-golden-hair-spray.png',
    //   name: 'Eva Senses Golden Hair Spray - 100ml',
    //   brand: 'Eva',
    //   category: 'Haircare',
    //   price: 120,
    //   discount: 0,
    //   details: [
    //     "Lightweight and non-greasy formula for instant refreshment",
    //     "Infused with nourishing ingredients like Honey and Panthenol to hydrate and smooth hair",
    //     "Alcohol-free to prevent dryness or damage",
    //     "Leaves hair soft, manageable, and pleasantly scented",
    //     "Ideal for daily use and convenient on-the-go"
    //   ],
    //   specifications: [
    //     "Formulation: Spray",
    //     "Hair Type: All",
    //     "Gender: Women",
    //     "Volume: 100ml",
    //     "Box Contents: Hair Spray"
    //   ],
    //   stock: 40,
    //   rate: 4.5
    // },
    // {
    //   id: 50,
    //   image: 'assets/image/skincare-image/eva-aloe-hair-cream.png',
    //   name: 'Eva Aloe Hair Styling Cream - 185g',
    //   brand: 'Eva',
    //   category: 'Haircare',
    //   price: 85,
    //   discount: 0,
    //   details: [
    //     "Enriched with concentrated Aloe Vera extract",
    //     "Contains 12 vitamins, 20 minerals, and 17 types of proteins to nourish hair deeply",
    //     "Strengthens hair from roots to ends, reducing hair fall",
    //     "Promotes healthy hair growth and enhances shine",
    //     "Leaves hair refreshed and manageable"
    //   ],
    //   specifications: [
    //     "Formulation: Cream",
    //     "Hair Type: All",
    //     "Gender: Women",
    //     "Weight: 185g",
    //     "Box Contents: Hair Styling Cream"
    //   ],
    //   stock: 50,
    //   rate: 4.5
    // },
    // {
    //   id: 51,
    //   image: 'assets/image/skincare-image/eva-brown-henna.png',
    //   name: 'Eva Aloe Brown Hair Henna (6 Sachets x 10g)',
    //   brand: 'Eva',
    //   category: 'Haircare',
    //   price: 130,
    //   discount: 0,
    //   details: [
    //     "Enriched with concentrated Aloe Vera extract",
    //     "Contains 12 vitamins, 20 minerals, and 17 types of proteins to nourish hair deeply",
    //     "Strengthens hair from roots to ends, reducing hair fall",
    //     "Provides full coverage for white hair",
    //     "Leaves hair hydrated, nourished, shiny, and revitalized",
    //     "Rich, long-lasting color for vibrant hair"
    //   ],
    //   specifications: [
    //     "Formulation: Powder",
    //     "Hair Type: All",
    //     "Gender: Women",
    //     "Quantity: 6 sachets x 10g",
    //     "Box Contents: Brown Hair Henna Sachets"
    //   ],
    //   stock: 60,
    //   rate: 4.6
    // },
    // {
    //   id: 52,
    //   image: 'assets/image/skincare-image/eva-growth-oil.png',
    //   name: 'Eva Advanced Hair, Lash & Brow Growth Oil - 55ml',
    //   brand: 'Eva',
    //   category: 'Haircare',
    //   price: 320,
    //   discount: 0,
    //   details: [
    //     "Advanced hair care oil with 10 enriched oils for healthy growth",
    //     "Improves hair surface properties and protects from environmental damage",
    //     "Strengthens weak hair, lashes, and eyebrows for healthier growth",
    //     "Reduces split ends and breakage",
    //     "Multi-purpose natural oil blend for hair, lashes, and brows"
    //   ],
    //   specifications: [
    //     "Formulation: Oil",
    //     "Hair/Lash/Brow Type: All",
    //     "Gender: Women",
    //     "Volume: 55ml",
    //     "Box Contents: Growth Oil Bottle"
    //   ],
    //   stock: 40,
    //   rate: 4.7
    // },
    // {
    //   id: 53,
    //   image: 'assets/image/skincare-image/eva-aloe-hair-oil.png',
    //   name: 'Eva Aloe Hair Strengthening Oil - 255ml',
    //   brand: 'Eva',
    //   category: 'Haircare',
    //   price: 85,
    //   discount: 0,
    //   details: [
    //     "Enriched with concentrated Aloe Vera extract",
    //     "Contains 12 vitamins, 20 minerals, and 17 types of proteins to nourish hair deeply",
    //     "Strengthens hair from roots to ends and reduces hair fall",
    //     "Promotes healthy hair growth and restores hair vitality",
    //     "Provides intensive care, nourishes scalp, and strengthens roots",
    //     "Repairs and smooths hair for a dense and natural look"
    //   ],
    //   specifications: [
    //     "Formulation: Oil",
    //     "Hair Type: All",
    //     "Gender: Women",
    //     "Volume: 255ml",
    //     "Box Contents: Hair Strengthening Oil Bottle"
    //   ],
    //   stock: 50,
    //   rate: 4.6
    // },
    // {
    //   id: 54,
    //   image: 'assets/image/skincare-image/eva-aloe-hair-serum-special.png',
    //   name: 'Eva Aloe Hair Strengthening Alternative Oil with Aloe & Silk Proteins - 250ml',
    //   brand: 'Eva',
    //   category: 'Haircare',
    //   price: 90,
    //   discount: 25,
    //   details: [
    //     "Enriched with concentrated Aloe Vera extract with 12 vitamins, 20 minerals, and 17 types of proteins to nourish hair deeply",
    //     "Strengthens hair from roots to ends and promotes healthy hair growth",
    //     "Restores vitality to hair and improves texture noticeably",
    //     "Contains Aloe and Silk Proteins to rebuild damaged hair",
    //     "Reduces split ends and breakage",
    //     "Provides intensive and deep care for healthy, shiny hair"
    //   ],
    //   specifications: [
    //     "Formulation: Oil",
    //     "Hair Type: All",
    //     "Gender: Women",
    //     "Volume: 250ml",
    //     "Box Contents: Hair Strengthening Oil Bottle"
    //   ],
    //   stock: 50,
    //   rate: 4.6
    // },
    // {
    //   id: 55,
    //   image: 'assets/image/skincare-image/eva-advanced-kids-detangling-spray.png',
    //   name: 'Eva Advanced Haircare Kids Detangling Spray - 185ml',
    //   brand: 'Eva',
    //   category: 'Haircare',
    //   price: 125,
    //   discount: 0,
    //   details: [
    //     "Advanced haircare spray for kids with Avocado and Marshmallow extract",
    //     "Improves hair surface properties and protects from environmental damage",
    //     "Makes detangling curly, wavy, and textured hair easy",
    //     "Defines waves and curls for long-lasting style",
    //     "Hydrates and nourishes hair for soft and manageable texture"
    //   ],
    //   specifications: [
    //     "Formulation: Spray",
    //     "Hair Type: Curly / Wavy / Textured",
    //     "Gender: Kids",
    //     "Volume: 185ml",
    //     "Box Contents: Detangling Spray Bottle"
    //   ],
    //   stock: 50,
    //   rate: 4.5
    // },
    // {
    //   id: 56,
    //   image: 'assets/image/skincare-image/eva-advanced-kids-curl-defining-conditioner.png',
    //   name: 'Eva Advanced Haircare Kids Curl Defining Conditioner - 230ml',
    //   brand: 'Eva',
    //   category: 'Haircare',
    //   price: 125,
    //   discount: 0,
    //   details: [
    //     "Advanced haircare conditioner for kids with Avocado and Marshmallow extract",
    //     "Prevents heavy minerals from tap water from sticking to hair",
    //     "Moisturizes and enhances curl definition and shine",
    //     "Gentle on skin and tear-free formula",
    //     "Nourishes and hydrates curly, wavy, and textured hair"
    //   ],
    //   specifications: [
    //     "Formulation: Conditioner",
    //     "Hair Type: Curly / Wavy / Textured",
    //     "Gender: Kids",
    //     "Volume: 230ml",
    //     "Box Contents: Curl Defining Conditioner Bottle"
    //   ],
    //   stock: 50,
    //   rate: 4.5
    // },
    // {
    //   id: 57,
    //   image: 'assets/image/skincare-image/eva-advanced-hair-growth-conditioner.png',
    //   name: 'Eva Advanced Haircare Hair Growth Conditioner - 230ml',
    //   brand: 'Eva',
    //   category: 'Haircare',
    //   price: 160,
    //   discount: 0,
    //   details: [
    //     "Advanced haircare conditioner with Cubexyl, Caffeine, and Ginseng extract",
    //     "Prevents heavy minerals from tap water from adhering to hair",
    //     "Gently nourishes and smooths weak and thinning hair",
    //     "Enhances hair density and reduces hair fall",
    //     "Formulated with a blend of active ingredients to support hair growth"
    //   ],
    //   specifications: [
    //     "Formulation: Conditioner",
    //     "Hair Type: Weak / Thinning",
    //     "Gender: Women",
    //     "Volume: 230ml",
    //     "Box Contents: Hair Growth Conditioner Bottle"
    //   ],
    //   stock: 45,
    //   rate: 4.6
    // },
    // {
    //   id: 58,
    //   image: 'assets/image/skincare-image/eva-advanced-hair-growth-ampoules.png',
    //   name: 'Eva Advanced Haircare Hair Growth Ampoules - 6ml x 7',
    //   brand: 'Eva',
    //   category: 'Haircare',
    //   price: 220,
    //   discount: 0,
    //   details: [
    //     "Haircare ampoules with 1.5% Cubexyl, Caffeine, and Ginseng extract",
    //     "Improves hair surface properties and protects from environmental damage",
    //     "Helps reduce hair fall and enhance hair growth",
    //     "Formulated with a blend of active ingredients to support hair density",
    //     "Specifically designed for weak and thinning hair"
    //   ],
    //   specifications: [
    //     "Formulation: Ampoules",
    //     "Hair Type: Weak / Thinning",
    //     "Gender: Women",
    //     "Volume: 6ml x 7 ampoules",
    //     "Box Contents: Hair Growth Ampoules"
    //   ],
    //   stock: 40,
    //   rate: 4.7
    // },
    // {
    //   id: 59,
    //   image: 'assets/image/skincare-image/eva-aloe-argan-hair-mask.png',
    //   name: 'Eva Aloe Hair Strengthening Mask with Moroccan Argan Oil - 250g',
    //   brand: 'Eva',
    //   category: 'Haircare',
    //   price: 75,
    //   discount: 0,
    //   details: [
    //     "Strengthening hair mask enriched with Aloe Vera and Moroccan Argan Oil",
    //     "Provides deep hydration and nourishment",
    //     "Reduces frizz and split ends",
    //     "Leaves hair soft, smooth, and shiny",
    //     "Ideal for daily or weekly hair care routine"
    //   ],
    //   specifications: [
    //     "Formulation: Hair Mask",
    //     "Hair Type: All",
    //     "Gender: Women",
    //     "Weight: 250g",
    //     "Box Contents: Hair Mask"
    //   ],
    //   stock: 50,
    //   rate: 4.5
    // },
    // {
    //   id: 60,
    //   image: 'assets/image/skincare-image/eva-advanced-growth-hair-mask.png',
    //   name: 'Eva Advanced Care Hair Mask for Lengthening & Hydrating Damaged Hair - 200g',
    //   brand: 'Eva',
    //   category: 'Haircare',
    //   price: 220,
    //   discount: 0,
    //   details: [
    //     "Advanced hair care mask with Castor Oil and Rice Water for hair lengthening and hydration",
    //     "Prevents heavy metals in tap water from adhering to hair",
    //     "Deeply nourishes and strengthens damaged hair",
    //     "Helps promote longer hair growth and reduces split ends and breakage",
    //     "Ideal for weekly or regular hair care routine"
    //   ],
    //   specifications: [
    //     "Formulation: Hair Mask",
    //     "Hair Type: All",
    //     "Gender: Women",
    //     "Weight: 200g",
    //     "Box Contents: Hair Mask"
    //   ],
    //   stock: 40,
    //   rate: 4.5
    // },
    // {
    //   id: 61,
    //   image: 'assets/image/skincare-image/eva-aloe-argan-shampoo.png',
    //   name: 'Eva Aloe Hair Strengthening Shampoo with Argan Oil - 230ml',
    //   brand: 'Eva',
    //   category: 'Haircare',
    //   price: 85,
    //   discount: 0,
    //   details: [
    //     "Strengthening shampoo enriched with Aloe Vera and Moroccan Argan Oil",
    //     "Gives instant shine and controls frizz",
    //     "Repairs, smooths, and hydrates hair strands",
    //     "Reduces split ends and strengthens hair from roots to tips",
    //     "Ideal for daily use or regular hair care routine"
    //   ],
    //   specifications: [
    //     "Formulation: Shampoo",
    //     "Hair Type: All",
    //     "Gender: Women",
    //     "Volume: 230ml",
    //     "Box Contents: Shampoo Bottle"
    //   ],
    //   stock: 50,
    //   rate: 4.5
    // },
    // {
    //   id: 62,
    //   image: 'assets/image/skincare-image/eva-growth-shampoo.png',
    //   name: 'Eva Advanced Hair Growth Shampoo - 230ml',
    //   brand: 'Eva',
    //   category: 'Haircare',
    //   price: 150,
    //   discount: 0,
    //   details: [
    //     "Advanced hair care shampoo with Castor Oil and Rice Water",
    //     "Promotes longer hair growth and strengthens hair",
    //     "Prevents heavy minerals in tap water from adhering to hair",
    //     "Gently cleanses damaged hair without drying",
    //     "Reduces split ends and breakage"
    //   ],
    //   specifications: [
    //     "Formulation: Shampoo",
    //     "Hair Type: All",
    //     "Gender: Women",
    //     "Volume: 230ml",
    //     "Box Contents: Shampoo Bottle"
    //   ],
    //   stock: 50,
    //   rate: 4.6
    // },
    // {
    //   id: 63,
    //   image: 'assets/image/skincare-image/eva-respi-conditioner-marshmallow.png',
    //   name: 'Eva Respi Conditioner - Marshmallow Scent 350ml',
    //   brand: 'Eva',
    //   category: 'Haircare',
    //   price: 125,
    //   discount: 0,
    //   details: [
    //     "Enhances natural shine and radiance of hair",
    //     "Enriched with natural ingredients like Argan Oil, Chamomile Extract, and Marshmallow Root Extract",
    //     "Helps control frizz and provides a smooth finish",
    //     "Leaves hair glossy with a sweet marshmallow scent",
    //     "Free from silicones, parabens, phthalates, and artificial colors"
    //   ],
    //   specifications: [
    //     "Formulation: Conditioner",
    //     "Hair Type: All",
    //     "Gender: Women",
    //     "Volume: 350ml",
    //     "Box Contents: Conditioner Bottle"
    //   ],
    //   stock: 50,
    //   rate: 4.5
    // },
    // {
    //   id: 64,
    //   image: 'assets/image/skincare-image/eva-respi-conditioner-berry.png',
    //   name: 'Eva Respi Conditioner - Berry Scent 350ml',
    //   brand: 'Eva',
    //   category: 'Haircare',
    //   price: 125,
    //   discount: 0,
    //   details: [
    //     "Moisturizes thirsty hair deeply",
    //     "Formulated with natural ingredients like Hyaluronic Acid, Jojoba Oil, and Hibiscus Flower Extract",
    //     "Nourishes dry and damaged hair and restores moisture balance",
    //     "Leaves hair refreshed with a vibrant berry scent",
    //     "Free from silicones, parabens, phthalates, and artificial colors"
    //   ],
    //   specifications: [
    //     "Formulation: Conditioner",
    //     "Hair Type: All",
    //     "Gender: Women",
    //     "Volume: 350ml",
    //     "Box Contents: Conditioner Bottle"
    //   ],
    //   stock: 50,
    //   rate: 4.5
    // },
    // {
    //   id: 65,
    //   image: 'assets/image/skincare-image/eva-respi-shampoo-mocha.png',
    //   name: 'Eva Respi Shampoo - Mocha Scent 350ml',
    //   brand: 'Eva',
    //   category: 'Haircare',
    //   price: 120,
    //   discount: 0,
    //   details: [
    //     "Strengthens weak hair",
    //     "Formulated with natural and intensive ingredients like Almond Oil, Ginseng Rose Oil to fortify hair follicles",
    //     "Reduces hair stress for healthier hair",
    //     "Rich with a refreshing Mocha scent",
    //     "Free from silicones, parabens, phthalates, and artificial colors"
    //   ],
    //   specifications: [
    //     "Formulation: Shampoo",
    //     "Hair Type: All",
    //     "Gender: Women",
    //     "Volume: 350ml",
    //     "Box Contents: Shampoo Bottle"
    //   ],
    //   stock: 50,
    //   rate: 4.5
    // },
    // {
    //   id: 66,
    //   image: 'assets/image/skincare-image/eva-respi-shampoo-coconut.png',
    //   name: 'Eva Respi Shampoo - Coconut Scent 350ml',
    //   brand: 'Eva',
    //   category: 'Haircare',
    //   price: 120,
    //   discount: 0,
    //   details: [
    //     "Moisturizes and repairs damaged hair",
    //     "Formulated with natural and balanced ingredients like Avocado Oil, Coconut Oil, and Shea Butter to nourish and strengthen hair",
    //     "Refreshes and revitalizes hair",
    //     "Rich with a refreshing Coconut scent",
    //     "Free from silicones, parabens, phthalates, and artificial colors"
    //   ],
    //   specifications: [
    //     "Formulation: Shampoo",
    //     "Hair Type: All",
    //     "Gender: Women",
    //     "Volume: 350ml",
    //     "Box Contents: Shampoo Bottle"
    //   ],
    //   stock: 50,
    //   rate: 4.5
    // },
    // {
    //   id: 67,
    //   image: 'assets/image/skincare-image/eva-respi-shampoo-berry.png',
    //   name: 'Eva Respi Shampoo - Berry Scent 350ml',
    //   brand: 'Eva',
    //   category: 'Haircare',
    //   price: 120,
    //   discount: 0,
    //   details: [
    //     "Moisturizes thirsty hair",
    //     "Formulated with natural and balanced ingredients like Hyaluronic Acid, Jojoba Oil, and Hibiscus Flower Extract to deeply nourish dry and damaged hair",
    //     "Restores moisture balance",
    //     "Refreshing and invigorating Berry scent",
    //     "Free from silicones, parabens, phthalates, and artificial colors"
    //   ],
    //   specifications: [
    //     "Formulation: Shampoo",
    //     "Hair Type: All",
    //     "Gender: Women",
    //     "Volume: 350ml",
    //     "Box Contents: Shampoo Bottle"
    //   ],
    //   stock: 50,
    //   rate: 4.5
    // },
    // {
    //   id: 68,
    //   image: 'assets/image/skincare-image/eva-respi-shampoo-marshmallow.png',
    //   name: 'Eva Respi Shampoo - Marshmallow Scent 350ml',
    //   brand: 'Eva',
    //   category: 'Haircare',
    //   price: 120,
    //   discount: 0,
    //   details: [
    //     "Enhances natural shine and radiance of hair",
    //     "Rich in natural and balanced ingredients like Argan Oil, Chamomile Extract, and Marshmallow Root Extract to boost shine and control frizz",
    //     "Provides a glossy finish",
    //     "Marshmallow candy scent",
    //     "Free from silicones, parabens, phthalates, and artificial colors"
    //   ],
    //   specifications: [
    //     "Formulation: Shampoo",
    //     "Hair Type: All",
    //     "Gender: Women",
    //     "Volume: 350ml",
    //     "Box Contents: Shampoo Bottle"
    //   ],
    //   stock: 50,
    //   rate: 4.5
    // },
    // {
    //   id: 69,
    //   image: 'assets/image/skincare-image/eva-skin-clinic-night-cream-vitamin-c.png',
    //   name: 'Eva Skin Clinic Night Cream with Vitamin C - 50ml',
    //   brand: 'Eva',
    //   category: 'Skincare',
    //   price: 295,
    //   discount: 90,
    //   details: [
    //     "Anti-aging night cream enriched with Vitamin C",
    //     "Nourishes skin throughout the night",
    //     "Helps reduce the appearance of fine lines and wrinkles",
    //     "Promotes even skin tone and radiance",
    //     "Improves skin elasticity and firmness"
    //   ],
    //   specifications: [
    //     "Formulation: Cream",
    //     "Skin Type: All",
    //     "Gender: Women",
    //     "Volume: 50ml",
    //     "Box Contents: Night Cream"
    //   ],
    //   stock: 40,
    //   rate: 4.6
    // },
    // {
    //   id: 70,
    //   image: 'assets/image/skincare-image/eva-skin-clinic-vitamin-a-serum.png',
    //   name: 'Eva Skin Clinic Vitamin A Face Serum - 30ml',
    //   brand: 'Eva',
    //   category: 'Skincare',
    //   price: 230,
    //   discount: 0,
    //   details: [
    //     "Face serum enriched with Vitamin A",
    //     "Improves skin texture and smoothness",
    //     "Helps nourish and revitalize the skin"
    //   ],
    //   specifications: [
    //     "Formulation: Serum",
    //     "Skin Type: All",
    //     "Gender: Women",
    //     "Volume: 30ml",
    //     "Box Contents: Vitamin A Serum"
    //   ],
    //   stock: 40,
    //   rate: 4.5
    // },
    // {
    //   id: 71,
    //   image: 'assets/image/skincare-image/eva-skin-clinic-hyaluronic-serum.png',
    //   name: 'Eva Skin Clinic Hyaluronic Acid Face Serum - 30ml',
    //   brand: 'Eva',
    //   category: 'Skincare',
    //   price: 230,
    //   discount: 0,
    //   details: [
    //     "Face serum enriched with 1.5% Hyaluronic Acid",
    //     "Helps achieve plump, hydrated, and healthy-looking skin",
    //     "Provides deep moisture and improves skin texture"
    //   ],
    //   specifications: [
    //     "Formulation: Serum",
    //     "Skin Type: All",
    //     "Gender: Women",
    //     "Volume: 30ml",
    //     "Box Contents: Hyaluronic Acid Serum"
    //   ],
    //   stock: 40,
    //   rate: 4.6
    // },
    // {
    //   id: 72,
    //   image: 'assets/image/skincare-image/eva-skin-clinic-collagen-filler.png',
    //   name: 'Eva Skin Clinic Anti-Aging Collagen Filler for Deep Lines - 50ml',
    //   brand: 'Eva',
    //   category: 'Skincare',
    //   price: 230,
    //   discount: 0,
    //   details: [
    //     "Advanced 3D innovation to smooth and firm mature skin",
    //     "Targets wrinkles with corrective effect on surface, depth, and volume",
    //     "Enhances skin elasticity and provides a natural, youthful appearance"
    //   ],
    //   specifications: [
    //     "Formulation: Serum",
    //     "Skin Type: Mature",
    //     "Gender: Women",
    //     "Volume: 50ml",
    //     "Box Contents: Collagen Filler"
    //   ],
    //   stock: 40,
    //   rate: 4.7
    // },
    // {
    //   id: 73,
    //   image: 'assets/image/skincare-image/eva-hand-cream-gold-spell.png',
    //   name: 'Eva Skin Care Senses Gold Spell Hand Cream - 60ml',
    //   brand: 'Eva',
    //   category: 'Skincare',
    //   price: 65,
    //   discount: 0,
    //   details: [
    //     "Effectively moisturizes dry hands",
    //     "Rich formula with Vitamin E and powerful moisturizers",
    //     "Helps reduce dryness and keeps skin soft and smooth all day"
    //   ],
    //   specifications: [
    //     "Formulation: Cream",
    //     "Skin Type: All",
    //     "Gender: Women",
    //     "Volume: 60ml",
    //     "Box Contents: Hand Cream"
    //   ],
    //   stock: 60,
    //   rate: 4.5
    // },

  // ================= Makeups =================
    // {
    //   id: 74,
    //   image: 'assets/image/makeup-image/sheglam-primer.png',
    //   name: 'SheGlam Primer Gel for Flawless Makeup',
    //   brand: 'SheGlam',
    //   category: 'Makeup',
    //   price: 220,
    //   discount: 0,
    //   details: [
    //     "Gives a smooth, flawless base for makeup application",
    //     "Helps makeup last all day with perfect colors",
    //     "Soft, lightweight gel texture suitable for all skin types",
    //     "Ideal for medium skin tones",
    //     "Apply a small amount evenly on face before makeup"
    //   ],
    //   specifications: [
    //     "Color: Clear",
    //     "Skin Type: All",
    //     "Gender: Women",
    //     "Coverage: Medium",
    //     "Formulation: Gel",
    //     "Remover Type: Wet Wipes"
    //   ],
    //   stock: 20,
    //   rate: 4.4
    // },
    // {
    //   id: 75,
    //   image: 'assets/image/makeup-image/sheglam-foundation-butter-cream.png',
    //   name: 'SheGlam Skinfinite Hydrating Foundation - Butter Cream',
    //   brand: 'SheGlam',
    //   category: 'Makeup',
    //   price: 300,
    //   discount: 0,
    //   details: [
    //     "Hydrates and smooths the skin while providing a natural, lightweight feel",
    //     "Medium to full coverage that is buildable as needed",
    //     "Gives a soft, even finish suitable for dry to normal skin",
    //     "Vegan and cruelty-free formula",
    //     "Apply on clean, moisturized skin using sponge, brush, or fingers",
    //     "Set with powder or setting spray for longer wear"
    //   ],
    //   specifications: [
    //     "Color: Butter Cream",
    //     "Finish: Matte",
    //     "Skin Type: All",
    //     "Gender: Unisex",
    //     "Coverage: Medium",
    //     "Formulation: Liquid",
    //     "Model Name: Butter Cream"
    //   ],
    //   stock: 18,
    //   rate: 4.5
    // },
    // {
    //   id: 76,
    //   image: 'assets/image/makeup-image/sheglam-liquid-blush-love-cake.png',
    //   name: 'SheGlam Color Bloom Liquid Blush - 101 Love Cake',
    //   brand: 'SheGlam',
    //   category: 'Makeup',
    //   price: 180,
    //   discount: 0,
    //   details: [
    //     "Luxurious liquid blush that adds a beautiful touch of color",
    //     "Gel-cream formula with sponge applicator for easy blending",
    //     "Rich, hydrating texture that leaves a natural, radiant finish",
    //     "Contains nourishing ingredients like Vitamin C for skin care",
    //     "Medium coverage suitable for all skin types"
    //   ],
    //   specifications: [
    //     "Color: Light Skin / 101 Love Cake",
    //     "Skin Type: All",
    //     "Gender: Women",
    //     "Coverage: Medium",
    //     "Formulation: Gel-Cream",
    //   ],
    //   stock: 25,
    //   rate: 4.5
    // },
    // {
    //   id: 77,
    //   image: 'assets/image/makeup-image/maybelline-sky-high-mascara.png',
    //   name: 'Maybelline Lash Sensational Sky High Mascara - Black',
    //   brand: 'Maybelline',
    //   category: 'Makeup',
    //   price: 220,
    //   discount: 0,
    //   details: [
    //     "Provides full volume and unlimited length for lashes",
    //     "Long-lasting formula up to 36 hours",
    //     "Infused with bamboo extract and fibers for long, dense, lightweight lashes",
    //     "Exclusive Flex Tower brush bends to coat every lash from root to tip",
    //     "Easy to remove, does not flake or smudge",
    //     "Dermatologist and ophthalmologist tested, suitable for sensitive eyes and contact lens wearers"
    //   ],
    //   specifications: [
    //     "Color: Black",
    //     "Finish: Natural",
    //     "Formulation: Liquid",
    //     "Skin Type: All",
    //     "Gender: Women",
    //     "Box Contents: Lash Sensational Sky High Mascara - Volumizing & Lengthening Black",
    //     "Model Name: Mascara-5"
    //   ],
    //   stock: 30,
    //   rate: 4.7
    // },
    // {
    //   id: 78,
    //   image: 'assets/image/makeup-image/maybelline-colossal-mascara.png',
    //   name: 'Maybelline Colossal Mascara - 100% Black',
    //   brand: 'Maybelline',
    //   category: 'Makeup',
    //   price: 200,
    //   discount: 0,
    //   details: [
    //     "Gives lashes 7x bigger and clump-free in seconds",
    //     "Collagen-enriched formula helps promote new lash growth",
    //     "Huge brush delivers massive volume in a single coat",
    //     "Water-resistant, smudge-free formula for thicker, fuller lashes",
    //     "Tested by ophthalmologists, suitable for sensitive eyes and contact lens wearers",
    //     "Highly pigmented formula for intense black color without clumps"
    //   ],
    //   specifications: [
    //     "Color: Black",
    //     "Finish: Matte",
    //     "Formulation: Liquid",
    //     "Skin Type: All",
    //     "Gender: Women",
    //     "Box Contents: Colossal Mascara 100% Black",
    //     "Model Name: The Colossal"
    //   ],
    //   stock: 28,
    //   rate: 4.6
    // },
    // {
    //   id: 79,
    //   image: "assets/image/makeup-image/roseberry-kohl.png",
    //   name: "Rose Berry Kohl Eyeliner - Black",
    //   brand: "Rose Berry",
    //   category: "Makeup",
    //   price: 120,
    //   discount: 0,
    //   details: [
    //     "Sweat, heat, and humidity-resistant formula",
    //     "Provides high-definition eye lining for an intense look",
    //     "Long-lasting wear throughout the day",
    //     "Smooth application for precise and bold lines"
    //   ],
    //   specifications: [
    //     "Color: Black",
    //     "Skin Type: All",
    //     "Formulation: Pencil",
    //     "Gender: Women",
    //     "Box Contents: Kohl Eyeliner"
    //   ],
    //   stock: 35,
    //   rate: 4.6
    // },
    // {
    //   id: 74,
    //   image: 'assets/image/makeup-image/technic-eyeshadow.png',
    //   name: 'Technic Eyeshadow Palette',
    //   brand: 'Technic',
    //   category: 'Makeup',
    //   price: 180,
    //   discount: 0,
    //   details: [
    //     "Highly pigmented formula for rich color payoff",
    //     "Easy to blend for seamless eye looks",
    //     "Perfect for both natural daytime and bold night looks",
    //     "Long-lasting formula for all-day wear"
    //   ],
    //   specifications: [
    //     "Gender: Women",
    //     "Formulation: Powder",
    //     "Skin Tone: Medium",
    //     "Box Contents: Eyeshadow Palette"
    //   ],
    //   stock: 40,
    //   rate: 4.4
    // },
    // {
    //   id: 75,
    //   image: 'assets/image/makeup-image/nars-foundation.png',
    //   name: 'NARS Natural Radiant Longwear Foundation',
    //   brand: 'NARS',
    //   category: 'Makeup',
    //   price: 950,
    //   discount: 0,
    //   details: [
    //     "Lightweight formula that blends effortlessly for a natural radiant finish",
    //     "Provides medium coverage to conceal imperfections and fine lines",
    //     "Enhances skin elasticity for a smoother texture over time",
    //     "Delivers true-to-skin color for a flawless look",
    //     "Hydrating and refreshing formula for comfortable all-day wear",
    //     "Long-lasting foundation suitable for day and night looks"
    //   ],
    //   specifications: [
    //     "Finish: Natural Radiant",
    //     "Skin Tone: Medium",
    //     "Formulation: Liquid",
    //     "Skin Type: All",
    //     "Coverage: Medium",
    //     "Gender: Women",
    //     "Model Name: Natural Radiant",
    //     "Box Contents: Foundation Bottle"
    //   ],
    //   stock: 25,
    //   rate: 4.7
    // },
    // {
    //   id: 76,
    //   image: 'assets/image/makeup-image/huda-easy-bake-powder.png',
    //   name: 'Huda Beauty Easy Bake Loose Powder - Cupcake',
    //   brand: 'Huda Beauty',
    //   category: 'Makeup',
    //   price: 850,
    //   discount: 0,
    //   details: [
    //     "Lightweight silky texture that blends seamlessly into the skin",
    //     "Brightens and smooths under-eye area for a flawless finish",
    //     "Controls shine all day with a soft matte glow",
    //     "Easy-to-use baking powder with controlled dispensing mesh",
    //     "Helps set makeup and enhance facial features",
    //     "Provides subtle color correction with a natural finish"
    //   ],
    //   specifications: [
    //     "Color: Cupcake",
    //     "Skin Tone: Fair",
    //     "Formulation: Loose Powder",
    //     "Skin Type: All",
    //     "Coverage: Light",
    //     "Gender: Women",
    //     "Box Contents: Loose Powder"
    //   ],
    //   stock: 30,
    //   rate: 4.8
    // },

  // ================= Accessories =================
    // { id: 77, image: 'assets/image/accessories-image/1.jpeg', name: 'Classic Gold Chain', brand: 'GoldenStyle', category: 'Accessories', price: 450, discount: 50, details: 'Elegant gold chain perfect for formal and stylish looks.', specifications: 'Chain' },
    // { id: 78, image: 'assets/image/accessories-image/2.jpeg', name: 'Trendy Leather Bracelet', brand: 'UrbanChic', category: 'Accessories', price: 300, discount: 30, details: 'Fashionable leather bracelet suitable for daily wear.', specifications: 'Bracelet / Wristband' },
    // { id: 79, image: 'assets/image/accessories-image/3.jpeg', name: 'Men’s Leather Belt', brand: 'StylePro', category: 'Accessories', price: 350, discount: 40, details: 'Premium leather belt for a classic masculine look.', specifications: 'Bracelet / Wristband' },
    // { id: 80, image: 'assets/image/accessories-image/4.jpeg', name: 'Elegant Pearl Necklace', brand: 'LuxWear', category: 'Accessories', price: 500, discount: 60, details: 'Luxurious pearl necklace for a sophisticated appearance.', specifications: 'Chain' },
    // { id: 81, image: 'assets/image/accessories-image/5.jpeg', name: 'Minimalist Silver Necklace', brand: 'ChicStyle', category: 'Accessories', price: 220, discount: 20, details: 'Simple silver necklace suitable for everyday outfits.', specifications: 'Chain' },
    // { id: 82, image: 'assets/image/accessories-image/6.jpeg', name: 'Luxury Gold Bracelet', brand: 'LuxWear', category: 'Accessories', price: 1200, discount: 150, details: 'Premium gold bracelet for special occasions.', specifications: 'Bracelet / Wristband' },
    // { id: 83, image: 'assets/image/accessories-image/7.jpeg', name: 'Colorful Hair Ring Set', brand: 'ChicStyle', category: 'Accessories', price: 180, discount: 15, details: 'Set of colorful and practical hair rings.', specifications: 'Ring' },
    // { id: 84, image: 'assets/image/accessories-image/8.jpeg', name: 'Trendy Chain Key Set', brand: 'StylePro', category: 'Accessories', price: 90, discount: 10, details: 'Stylish keychain set with attractive designs.', specifications: 'Chain' },
    // { id: 85, image: 'assets/image/accessories-image/9.jpeg', name: 'Classic Chain Key Set', brand: 'StylePro', category: 'Accessories', price: 90, discount: 10, details: 'Classic keychain set suitable for multiple uses.', specifications: 'Chain' },
    // { id: 86, image: 'assets/image/accessories-image/10.jpeg', name: 'Fashionable Chain Key Set', brand: 'StylePro', category: 'Accessories', price: 90, discount: 10, details: 'Trendy keychain set perfect for any outfit.', specifications: 'Chain' },
    // { id: 87, image: 'assets/image/accessories-image/11.jpeg', name: 'Elegant Ring Key Set', brand: 'StylePro', category: 'Accessories', price: 90, discount: 10, details: 'Elegant ring key set for a stylish and practical accessory.', specifications: 'Ring' },
    // { id: 88, image: 'assets/image/accessories-image/12.jpeg', name: 'Silver Ring Key Set', brand: 'StylePro', category: 'Accessories', price: 90, discount: 10, details: 'Premium silver ring key set.', specifications: 'Ring' },
    // { id: 89, image: 'assets/image/accessories-image/13.jpeg', name: 'Minimalist Chain Key Set', brand: 'StylePro', category: 'Accessories', price: 90, discount: 10, details: 'Simple and practical keychain set.', specifications: 'Chain' },
    // { id: 90, image: 'assets/image/accessories-image/14.jpeg', name: 'Classic Chain Key Set', brand: 'StylePro', category: 'Accessories', price: 90, discount: 10, details: 'Classic keychain set for everyday use.', specifications: 'Chain' },

  // ================= Perfumes =================
    // { id: 91, image: 'assets/image/logos/glamify-logo.png', name: 'Luxury Perfume', brand: 'EliteScents', category: 'Perfumes', price: 1200, discount: 200, details: 'عطر فاخر يدوم طويلاً ويعطي رائحة جذابة ومميزة.' },
    // { id: 92, image: 'assets/image/logos/glamify-logo.png', name: 'Floral Essence', brand: 'AromaWorld', category: 'Perfumes', price: 950, discount: 150, details: 'عطر زهري خفيف يناسب الاستخدام اليومي.' },
    // { id: 93, image: 'assets/image/logos/glamify-logo.png', name: 'Night Oud', brand: 'OrientalScents', category: 'Perfumes', price: 1800, discount: 300, details: 'عطر غني بالعود والباتشولي لرائحة فاخرة لا تُنسى.' },
    // { id: 94, image: 'assets/image/logos/glamify-logo.png', name: 'Citrus Splash', brand: 'FreshAroma', category: 'Perfumes', price: 700, discount: 100, details: 'عطر منعش برائحة الحمضيات مناسب للصيف.' },
    // { id: 95, image: 'assets/image/logos/glamify-logo.png', name: 'Vanilla Nights', brand: 'SweetScents', category: 'Perfumes', price: 850, discount: 120, details: 'عطر دافئ بنكهة الفانيليا لسهرات المساء.' },
    // { id: 96, image: 'assets/image/logos/glamify-logo.png', name: 'Ocean Breeze', brand: 'FreshAroma', category: 'Perfumes', price: 650, discount: 80, details: 'عطر منعش برائحة البحر والنسمات العليلة.' },
    // { id: 97, image: 'assets/image/logos/glamify-logo.png', name: 'Rose Garden', brand: 'AromaWorld', category: 'Perfumes', price: 900, discount: 100, details: 'عطر زهري كلاسيكي بنفحات الورد الطبيعي.' },
    // { id: 98, image: 'assets/image/logos/glamify-logo.png', name: 'Midnight Musk', brand: 'EliteScents', category: 'Perfumes', price: 1300, discount: 200, details: 'عطر غامض وجذاب يناسب المناسبات الخاصة.' },

    // ================= Watches =================
    // { id: 99, image: 'assets/image/logos/glamify-logo.png', name: 'Classic Watch', brand: 'TimeMaster', category: 'Watches', price: 2500, discount: 300, details: 'ساعة كلاسيكية أنيقة مناسبة لجميع المناسبات اليومية والرسمية.' },
    // { id: 100, image: 'assets/image/logos/glamify-logo.png', name: 'Sport Watch', brand: 'ActiveTime', category: 'Watches', price: 1800, discount: 200, details: 'ساعة رياضية مقاومة للماء مع خصائص متعددة للرياضيين.' },
    // { id: 101, image: 'assets/image/logos/glamify-logo.png', name: 'Luxury Gold Watch', brand: 'GoldTime', category: 'Watches', price: 4500, discount: 500, details: 'ساعة ذهبية فاخرة لإطلالة راقية ومميزة.' },
    // { id: 102, image: 'assets/image/logos/glamify-logo.png', name: 'Smart Watch', brand: 'TechTime', category: 'Watches', price: 3500, discount: 400, details: 'ساعة ذكية بمميزات متعددة مثل متابعة النشاطات والتنبيهات.' },
    // { id: 103, image: 'assets/image/logos/glamify-logo.png', name: 'Leather Strap Watch', brand: 'TimeMaster', category: 'Watches', price: 2700, discount: 250, details: 'ساعة كلاسيكية بحزام جلدي فاخر.' },
    // { id: 104, image: 'assets/image/logos/glamify-logo.png', name: 'Silver Watch', brand: 'GoldTime', category: 'Watches', price: 3000, discount: 300, details: 'ساعة فضية أنيقة مع لمسة عصرية.' },
    // { id: 105, image: 'assets/image/logos/glamify-logo.png', name: 'Chronograph Watch', brand: 'ActiveTime', category: 'Watches', price: 4000, discount: 500, details: 'ساعة كرونوغراف بمميزات احترافية عالية.' },
    // { id: 106, image: 'assets/image/logos/glamify-logo.png', name: 'Minimalist Watch', brand: 'TechTime', category: 'Watches', price: 2200, discount: 200, details: 'ساعة بسيطة وعصرية للستايل اليومي.' },

  ];

  // ================== Functions ==================
  getAllProducts(): Product[] { return this.products; }
  getProductsByCategory(categoryName: string): Product[] {
    return this.products.filter(p => p.category.toLowerCase() === categoryName.toLowerCase());
  }
  getProductsByBrand(brand: string): Product[] {
    return this.products.filter(p => p.brand.toLowerCase() === brand.toLowerCase());
  }

  getProductSkincare(): Product[] { return this.getProductsByCategory('Skincare'); }
  getProductHaircare(): Product[] { return this.getProductsByCategory('haircare'); }
  getProductPerfume(): Product[] { return this.getProductsByCategory('Perfumes'); }
  getProductMakeup(): Product[] { return this.getProductsByCategory('Makeup'); }
  getProductWatches(): Product[] { return this.getProductsByCategory('Watches'); }
  getProductAccessories(): Product[] { return this.getProductsByCategory('Accessories'); }

  getProductById(id: number): Product | undefined { return this.products.find(p => p.id === id); }
}
