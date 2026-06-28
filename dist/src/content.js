export const languages = {
  he: { label: "עברית", dir: "rtl", locale: "he-IL" },
  en: { label: "English", dir: "ltr", locale: "en-US" }
};

export const routes = ["", "about", "services", "printers", "meter", "contact"];

export const products = [
  {
    slug: "konica-minolta-bizhub-450i",
    brand: "Konica Minolta",
    model: "bizhub 450i",
    category: "floor-standing",
    image: "/public/assets/products/konica-minolta-bizhub-450i.webp",
    modes: ["rental", "purchase"],
    specs: {
      speed: "45 ppm",
      paperSize: "A6-A3, SRA3",
      colorMode: "Monochrome",
      functions: "Print, scan, copy",
      capacity: "500 sheets",
      dimensions: "615 x 688 x 961 mm"
    },
    he: {
      name: "Konica Minolta bizhub 450i",
      title: "מכונת צילום משולבת שחור-לבן",
      description: "מכונת צילום רצפתית לעסקים עם הדפסה, סריקה והעתקה בנפחי עבודה משרדיים גבוהים.",
      suitable: "משרדים, מחלקות, מוסדות וארגונים שצריכים A3 ושחור-לבן מהיר.",
      benefits: ["מהירות 45 דפים לדקה", "תמיכה ב-A3 ו-SRA3", "מתאימה להשכרה או רכישה"]
    },
    en: {
      name: "Konica Minolta bizhub 450i",
      title: "Monochrome multifunction copier",
      description: "Floor-standing business copier with print, scan and copy capabilities for high-volume office workflows.",
      suitable: "Offices, departments, institutions and organizations that need fast A3 monochrome output.",
      benefits: ["45 ppm output", "A3 and SRA3 support", "Available for rental or purchase"]
    }
  },
  {
    slug: "konica-minolta-bizhub-751i",
    brand: "Konica Minolta",
    model: "bizhub 751i",
    category: "production",
    image: "/public/assets/products/konica-minolta-bizhub-751i.webp",
    modes: ["rental", "purchase"],
    specs: {
      speed: "75 ppm",
      paperSize: "A6-A3, SRA3",
      colorMode: "Monochrome",
      functions: "Print, scan, copy",
      capacity: "500 sheets",
      dimensions: "615 x 688 x 961 mm"
    },
    he: {
      name: "Konica Minolta bizhub 751i",
      title: "מכונת צילום מהירה שחור-לבן",
      description: "פתרון משולב שחור-לבן לעסקים עם קצב עבודה גבוה במיוחד ותמיכה בפורמטים עד SRA3.",
      suitable: "ארגונים, חדרי הדפסה, מוסדות ומשרדים עם נפחי הדפסה גבוהים.",
      benefits: ["עד 75 דפים לדקה", "תמיכה ב-A3 ו-SRA3", "מענה למחלקות עם עומסי עבודה גבוהים"]
    },
    en: {
      name: "Konica Minolta bizhub 751i",
      title: "High-speed monochrome copier",
      description: "High-volume monochrome multifunction solution with fast output and media support up to SRA3.",
      suitable: "Organizations, print rooms, institutions and offices with heavy print volumes.",
      benefits: ["Up to 75 ppm", "A3 and SRA3 support", "Built for demanding departments"]
    }
  },
  {
    slug: "konica-minolta-bizhub-c550i",
    brand: "Konica Minolta",
    model: "bizhub C550i",
    category: "color-multifunction",
    image: "/public/assets/products/konica-minolta-bizhub-c550i.webp",
    modes: ["rental", "purchase"],
    specs: {
      speed: "55 ppm",
      paperSize: "A6-A3, SRA3",
      colorMode: "Color",
      functions: "Print, scan, copy",
      capacity: "500 sheets",
      dimensions: "615 x 688 x 961 mm"
    },
    he: {
      name: "Konica Minolta bizhub C550i",
      title: "מכונת צילום צבעונית משולבת",
      description: "מכונת צילום צבעונית לעסקים שצריכים מסמכים ייצוגיים, סריקה והעתקה במכשיר רצפתי אחד.",
      suitable: "משרדי הנהלה, שיווק, מכירות וארגונים שצריכים צבע איכותי בפורמט A3.",
      benefits: ["צבע איכותי", "55 דפים לדקה", "פורמטים עד SRA3"]
    },
    en: {
      name: "Konica Minolta bizhub C550i",
      title: "Color multifunction copier",
      description: "Business color copier for professional documents, scanning and copying in one floor-standing device.",
      suitable: "Management, marketing, sales teams and organizations that need quality A3 color output.",
      benefits: ["High-quality color", "55 ppm", "Media support up to SRA3"]
    }
  },
  {
    slug: "ricoh-im-c4500",
    brand: "Ricoh",
    model: "IM C4500",
    category: "color-multifunction",
    image: "/public/assets/products/ricoh-im-c4500.webp",
    modes: ["rental", "purchase"],
    specs: {
      speed: "45 ppm",
      paperSize: "A6-A3, SRA3",
      colorMode: "Color",
      functions: "Print, scan, copy, optional fax",
      capacity: "500 sheets",
      dimensions: "587 x 685 x 913 mm"
    },
    he: {
      name: "Ricoh IM C4500",
      title: "מכונת צילום צבעונית לעסק",
      description: "פתרון Ricoh צבעוני משולב להדפסה, סריקה, העתקה ופקס אופציונלי.",
      suitable: "משרדים וארגונים שרוצים מכשיר צבעוני אמין עם תמיכה ב-A3.",
      benefits: ["45 דפים לדקה", "פקס אופציונלי", "מתאימה לסביבת משרד עסקית"]
    },
    en: {
      name: "Ricoh IM C4500",
      title: "Business color multifunction copier",
      description: "Ricoh color multifunction device for printing, scanning, copying and optional fax.",
      suitable: "Offices and organizations that need a reliable A3 color device.",
      benefits: ["45 ppm", "Optional fax", "Designed for business office environments"]
    }
  },
  {
    slug: "ricoh-im-7000",
    brand: "Ricoh",
    model: "IM 7000",
    category: "production",
    image: "/public/assets/products/ricoh-im-7000.webp",
    modes: ["rental", "purchase"],
    specs: {
      speed: "70 ppm",
      paperSize: "A6-A3",
      colorMode: "Monochrome",
      functions: "Print, scan, copy, optional fax",
      capacity: "500 sheets",
      dimensions: "690 x 883 x 1161 mm"
    },
    he: {
      name: "Ricoh IM 7000",
      title: "מכונת צילום שחור-לבן לנפחים גבוהים",
      description: "מכונה משולבת שחור-לבן עם מהירות גבוהה במיוחד ויכולות הדפסה, סריקה והעתקה.",
      suitable: "חדרי הדפסה, מוסדות, מחלקות תפעול וארגונים עם עומסי עבודה כבדים.",
      benefits: ["70 דפים לדקה", "מענה לנפחי הדפסה גבוהים", "פקס אופציונלי"]
    },
    en: {
      name: "Ricoh IM 7000",
      title: "High-volume monochrome copier",
      description: "Fast monochrome multifunction system with print, scan and copy capabilities.",
      suitable: "Print rooms, institutions, operations departments and organizations with heavy workloads.",
      benefits: ["70 ppm", "Built for high print volumes", "Optional fax"]
    }
  },
  {
    slug: "brother-mfc-j6910dw",
    brand: "Brother",
    model: "MFC-J6910DW",
    category: "desktop-color",
    image: "/public/assets/products/brother-mfc-j6910dw.webp",
    modes: ["purchase"],
    specs: {
      speed: "12 ppm mono / 10 ppm color",
      paperSize: "A4, A3",
      colorMode: "Color",
      functions: "Print, scan, copy, fax",
      capacity: "250 sheets",
      dimensions: "540 x 489 x 331 mm"
    },
    he: {
      name: "Brother MFC-J6910DW",
      title: "מדפסת משולבת צבעונית A3",
      description: "מדפסת Brother שולחנית משולבת עם תמיכה ב-A4 וב-A3, פקס, סריקה, צילום והדפסה צבעונית.",
      suitable: "משרדים קטנים, עמדות עבודה וצוותים שצריכים A3 במדפסת קומפקטית.",
      benefits: ["תמיכה ב-A3", "פקס מובנה", "מגירת 250 דפים"]
    },
    en: {
      name: "Brother MFC-J6910DW",
      title: "A3 color multifunction printer",
      description: "Brother desktop multifunction printer with A4/A3 support, fax, scan, copy and color printing.",
      suitable: "Small offices, workstations and teams that need A3 support in a compact printer.",
      benefits: ["A3 support", "Built-in fax", "250-sheet tray"]
    }
  },
  {
    slug: "brother-mfc-l2827dw",
    brand: "Brother",
    model: "MFC-L2827DW",
    category: "desktop-mono",
    image: "/public/assets/products/brother-mfc-l2827dw.webp",
    modes: ["purchase"],
    specs: {
      speed: "Up to 32 ppm",
      paperSize: "A4",
      colorMode: "Monochrome",
      functions: "Print, scan, copy, fax",
      capacity: "250 sheets",
      dimensions: "410 x 399 x 319 mm"
    },
    he: {
      name: "Brother MFC-L2827DW",
      title: "מדפסת לייזר משולבת שחור-לבן",
      description: "מדפסת Brother קומפקטית למשרד עם הדפסה, סריקה, צילום ופקס.",
      suitable: "משרדים קטנים, קליניקות, עמדות קבלה וצוותים עם צורך ב-A4 שחור-לבן.",
      benefits: ["עד 32 דפים לדקה", "מגירת 250 דפים", "מבנה קומפקטי"]
    },
    en: {
      name: "Brother MFC-L2827DW",
      title: "Monochrome laser multifunction printer",
      description: "Compact Brother office printer with print, scan, copy and fax capabilities.",
      suitable: "Small offices, clinics, reception desks and teams that need A4 monochrome output.",
      benefits: ["Up to 32 ppm", "250-sheet tray", "Compact footprint"]
    }
  },
  {
    slug: "hp-laserjet-mfp-m528dn",
    brand: "HP",
    model: "MFP M528dn",
    category: "desktop-mono",
    image: "/public/assets/products/hp-laserjet-mfp-m528dn.webp",
    modes: ["rental", "purchase"],
    specs: {
      speed: "52 ppm",
      paperSize: "A4",
      colorMode: "Monochrome",
      functions: "Print, scan, copy, optional fax",
      capacity: "100 sheets",
      dimensions: "482 x 496 x 497 mm"
    },
    he: {
      name: "HP MFP M528dn",
      title: "מדפסת HP משולבת שחור-לבן",
      description: "מדפסת HP מהירה למשרד עם הדפסה, סריקה, העתקה ופקס אופציונלי.",
      suitable: "משרדים וצוותים שצריכים הדפסות A4 מהירות ואמינות.",
      benefits: ["52 דפים לדקה", "A4 שחור-לבן", "מתאימה לעומסי עבודה משרדיים"]
    },
    en: {
      name: "HP MFP M528dn",
      title: "HP monochrome multifunction printer",
      description: "Fast HP office printer with print, scan, copy and optional fax.",
      suitable: "Offices and teams that need fast, reliable A4 monochrome printing.",
      benefits: ["52 ppm", "A4 monochrome", "Suitable for office workloads"]
    }
  },
  {
    slug: "hp-color-laserjet-mfp-m480f",
    brand: "HP",
    model: "MFP M480f",
    category: "desktop-color",
    image: "/public/assets/products/hp-color-laserjet-mfp-m480f.webp",
    modes: ["rental", "purchase"],
    specs: {
      speed: "27 ppm",
      paperSize: "A4, A5, A6, envelopes",
      colorMode: "Color",
      functions: "Print, scan, copy, fax",
      capacity: "50-sheet tray + 250-sheet tray",
      dimensions: "415.4 x 472 x 400 mm"
    },
    he: {
      name: "HP MFP M480f",
      title: "מדפסת HP צבעונית משולבת",
      description: "מדפסת צבעונית קומפקטית לעסק עם הדפסה, סריקה, צילום ופקס.",
      suitable: "צוותי הנהלה, מכירות, שירות ומשרדים שצריכים צבע איכותי ב-A4.",
      benefits: ["27 דפים לדקה", "תמיכה ב-A4, A5, A6 ומעטפות", "פקס מובנה"]
    },
    en: {
      name: "HP MFP M480f",
      title: "HP color multifunction printer",
      description: "Compact business color printer with print, scan, copy and fax.",
      suitable: "Management, sales, service teams and offices that need quality A4 color output.",
      benefits: ["27 ppm", "Supports A4, A5, A6 and envelopes", "Built-in fax"]
    }
  },
  {
    slug: "kyocera-ecosys-ma4000cix",
    brand: "Kyocera",
    model: "ECOSYS MA4000cix",
    category: "desktop-color",
    image: "/public/assets/products/kyocera-ecosys-ma4000cix.webp",
    modes: ["rental", "purchase"],
    specs: {
      speed: "Up to 42 ppm",
      paperSize: "A4",
      colorMode: "Color",
      functions: "Print, scan, copy",
      capacity: "250 sheets",
      dimensions: "480 x 577 x 619 mm"
    },
    he: {
      name: "Kyocera ECOSYS MA4000cix",
      title: "מדפסת Kyocera משולבת צבעונית",
      description: "מדפסת משולבת Kyocera לעסקים עם הדפסה, סריקה והעתקה בקצב גבוה.",
      suitable: "משרדים, צוותי עבודה ועסקים שצריכים A4 צבעוני מהיר ואמין.",
      benefits: ["עד 42 דפים לדקה", "מדפסת צבעונית משולבת", "מבנה קומפקטי יחסית"]
    },
    en: {
      name: "Kyocera ECOSYS MA4000cix",
      title: "Kyocera color multifunction printer",
      description: "Kyocera multifunction business printer with fast print, scan and copy capabilities.",
      suitable: "Offices, workgroups and businesses that need fast, reliable A4 color output.",
      benefits: ["Up to 42 ppm", "Color multifunction printer", "Relatively compact footprint"]
    }
  }
];

export const copy = {
  he: {
    nav: { home: "דף הבית", about: "אודות", services: "שירותים", printers: "מכונות צילום ומדפסות", meter: "שליחת מונה", contact: "צור קשר" },
    common: {
      quote: "לקבלת הצעת מחיר",
      contact: "צור קשר",
      whatsapp: "WhatsApp",
      phone: "טלפון",
      email: "אימייל",
      address: "כתובת",
      hours: "שעות פעילות",
      placeholderPhone: "1-700-700-388",
      placeholderEmail: "sales@copyline.co.il",
      placeholderAddress: "ישראל, אזור המרכז",
      businessHours: "א'-ה' 08:30-17:30",
      formTitle: "דברו איתנו",
      formIntro: "השאירו פרטים ונחזור אליכם עם התאמה מקצועית לצורך שלכם.",
      name: "שם מלא",
      company: "חברה",
      message: "מה תרצו לרכוש, להשכיר, לתחזק או לדווח?",
      send: "שליחת פנייה",
      required: "שדות הטופס מוכנים לחיבור למערכת CRM או מייל.",
      callNow: "לפרטים והזמנות חייגו"
    },
    home: {
      metaTitle: "CopyLine | מכונות צילום, מדפסות ושירות לעסקים",
      metaDescription: "קופיליין מספקת מכונות צילום ומדפסות, מכירה והשכרה, שירות, טונרים, שליחת מונה ופתרונות הדפסה לעסקים בישראל.",
      eyebrow: "CopyLine | קופיליין",
      headline: "מכונות צילום ומדפסות לעסקים, עם שירות אישי ששומר על רציפות העבודה",
      intro: "קופיליין בע״מ מתמחה במכירה והשכרה של מדפסות ומכונות צילום מתקדמות לעסקים. אנו מספקים פתרונות הדפסה חכמים, תמיכה מקצועית, שירות אמין ויחס אישי.",
      proof: ["מכירה והשכרה", "שליחת מונה מהירה", "שירות אמין ויחס אישי"],
      highlightsTitle: "כל מה שהמשרד צריך ממכונת צילום ועד טונרים",
      salesTitle: "מכונות צילום ומדפסות למשרד ולעסק",
      salesText: "אזור המוצרים נבנה מראש לדגמים אמיתיים של מכונות צילום, מדפסות משולבות, מפרטים, תמונות ודפי מוצר מלאים.",
      catalogIntegrity: "הקטלוג באתר לא מציג מוצרים מומצאים או תמונות לא תואמות. כל מוצר אמיתי יעלה רק לאחר אימות דגם, תמונה, מפרט, טונרים ושימושים מומלצים.",
      businessTitle: "פתרונות הדפסה ללקוחות עסקיים",
      businessText: "התאמת ציוד, עלויות שימוש, טונרים, שירות ותחזוקה במקום אחד כדי שהעבודה בצוותים שלכם תישאר רציפה.",
      whyTitle: "למה לבחור ב-CopyLine",
      services: ["מכונות צילום ומדפסות", "שירות ותחזוקה", "טונרים ושליחת מונה"]
    },
    about: {
      metaTitle: "אודות CopyLine | מכונות צילום ומדפסות בישראל",
      metaDescription: "CopyLine היא חברה ישראלית לשירותי מכונות צילום ומדפסות, מכירה, השכרה, תחזוקה ופתרונות הדפסה לעסקים וללקוחות פרטיים.",
      headline: "קופיליין בע״מ מתמחה בשירותי מכונות צילום ומדפסות",
      intro: "החברה מספקת מכירה והשכרה של מדפסות ומכונות צילום מתקדמות לעסקים, לצד פתרונות הדפסה חכמים, תמיכה מקצועית, שירות אמין ויחס אישי.",
      blocks: [
        ["אמינות", "התאמה לצרכי הלקוח, זמינות שירות ושקיפות בהמלצות."],
        ["מקצועיות", "ייעוץ לפי נפח הדפסה, מונה, סוג מסמכים, תקציב ותשתית קיימת."],
        ["שוק ישראלי", "שירות בעברית, הבנה של לקוחות עסקיים בישראל ותמיכה גם בלקוחות פרטיים."]
      ]
    },
    services: {
      metaTitle: "שירותי CopyLine | מכונות צילום, מדפסות, תחזוקה וטונרים",
      metaDescription: "שירותי CopyLine כוללים מכירת מכונות צילום ומדפסות, השכרה, תחזוקה, טונרים, שליחת מונה ותמיכה טכנית.",
      headline: "שירותי מכונות צילום ומדפסות מקצה לקצה",
      intro: "בחרו שירות נקודתי או פתרון מלא הכולל ציוד, תמיכה ותחזוקה.",
      items: [
        ["מכירת מכונות צילום ומדפסות", "מדפסות לייזר, צבע, שחור-לבן, משולבות ומכונות צילום לעסקים."],
        ["תחזוקת מדפסות ומכונות צילום", "שירות למדפסות, טיפול בתקלות, החלפות ותמיכה שוטפת."],
        ["טונרים", "אספקת טונרים ויחידות תוף לפי דגם ונפח שימוש."],
        ["פתרונות הדפסה למשרד", "אפיון ציוד, חיבור לרשת, אבטחה, ניהול משתמשים ועלויות."],
        ["תמיכה טכנית", "מענה מקצועי למשתמשים, התקנות, תקלות וחיבורי רשת."],
        ["שליחת מונה וייעוץ", "דיווח מונה מסודר ובחירת דגם לפי צרכים, נפחי הדפסה, צבע, סריקה ותקציב."]
      ]
    },
    printers: {
      metaTitle: "מכונות צילום ומדפסות CopyLine | ציוד לעסקים",
      metaDescription: "קטלוג מכונות צילום ומדפסות לעסקים של CopyLine עם מדפסות משרדיות, משולבות, לייזר, צבע ושחור-לבן.",
      headline: "מכונות צילום ומדפסות מוכנות להרחבה",
      intro: "הקטלוג מוכן לקליטת דגמים אמיתיים בלבד. כאשר תספקו רשימת מפרטים, כל כרטיס יקבל תמונה מדויקת, מפרט מלא, מונה ועמוד מוצר.",
      filters: ["מכונות צילום", "מדפסות משרדיות", "מדפסות משולבות", "מדפסות לייזר", "מדפסות צבע", "שחור-לבן", "מדפסות לעסקים"],
      categories: [
        ["מדפסות משרדיות", "לצוותים קטנים ובינוניים, רכישה או השכרה, שחור-לבן או צבע."],
        ["מדפסות משולבות", "הדפסה, צילום, סריקה ופקס במכשיר אחד עם ניהול משתמשים."],
        ["מכונות צילום רצפתיות", "נפחי עבודה גבוהים, מחלקות, מוסדות וארגונים."],
        ["פתרונות Managed Print", "בקרה, מונים, שירות ותחזוקה תחת מסגרת אחת."]
      ],
      emptyTitle: "ממתינים לרשימת הדגמים האמיתית של CopyLine",
      emptyText: "כדי לעמוד בסטנדרט Enterprise, לא מוצגים כאן מוצרים מומצאים או תמונות כלליות. לאחר קבלת רשימת דגמים, כל כרטיס יקבל תמונת יצרן מדויקת, מפרט מלא, טונרים תואמים, שימושים מומלצים וסכמת SEO.",
      suitable: "מתאים עבור",
      specs: "מפרט מרכזי",
      details: "לפרטים"
    },
    meter: {
      metaTitle: "שליחת מונה | CopyLine",
      metaDescription: "שליחת מונה למדפסות ומכונות צילום של CopyLine עבור לקוחות עסקיים בישראל.",
      headline: "שליחת מונה למדפסת או מכונת צילום",
      intro: "לקוחות CopyLine יכולים להעביר קריאת מונה בצורה מסודרת כדי לשמור על חיוב, שירות ואספקת טונרים מדויקים.",
      device: "דגם מכונה / מדפסת",
      meter: "קריאת מונה נוכחית",
      serial: "מספר סידורי",
      notes: "הערות לשירות",
      send: "שליחת מונה"
    },
    product: {
      metaTitle: "מדפסת | CopyLine",
      gallery: "גלריית מוצר",
      specs: "מפרט טכני",
      benefits: "יתרונות מרכזיים",
      useCases: "שימושים מומלצים",
      consumables: "תאימות טונרים",
      consumablesText: "כאן יופיעו בהמשך טונרים ויחידות תוף תואמים לפי הדגם האמיתי.",
      related: "מדפסות נוספות"
    },
    contact: {
      metaTitle: "צור קשר | CopyLine",
      metaDescription: "צרו קשר עם CopyLine להצעת מחיר על מדפסות, השכרה, שירות, טונרים ופתרונות הדפסה לעסקים בישראל.",
      headline: "בואו נמצא את פתרון ההדפסה הנכון",
      intro: "ספרו לנו אם אתם צריכים מדפסת חדשה, השכרה, שירות, טונרים או ייעוץ למשרד."
    },
    seoKeywords: "מכונות צילום, מדפסות לעסקים, השכרת מדפסות, שירות למדפסות, מכירת מדפסות, מדפסות למשרד, טונרים למדפסות, שליחת מונה, פתרונות הדפסה לעסקים, CopyLine, קופיליין"
  },
  en: {
    nav: { home: "Home", about: "About", services: "Services", printers: "Copiers & Printers", meter: "Meter Reading", contact: "Contact" },
    common: {
      quote: "Get a Quote",
      contact: "Contact Us",
      whatsapp: "WhatsApp",
      phone: "Phone",
      email: "Email",
      address: "Address",
      hours: "Business Hours",
      placeholderPhone: "1-700-700-388",
      placeholderEmail: "sales@copyline.co.il",
      placeholderAddress: "Israel, Central District",
      businessHours: "Sun-Thu 08:30-17:30",
      formTitle: "Talk to us",
      formIntro: "Leave your details and we will recommend the right printing solution.",
      name: "Full name",
      company: "Company",
      message: "What do you need to buy, lease, service or report?",
      send: "Send Request",
      required: "Form fields are ready to connect to CRM or email.",
      callNow: "For details and orders call"
    },
    home: {
      metaTitle: "CopyLine | Copiers, Printers and Business Service",
      metaDescription: "CopyLine provides copier and printer sales, leasing, maintenance, toner, meter reading and business printing solutions in Israel.",
      eyebrow: "CopyLine",
      headline: "Copiers and printers for businesses, with personal service that keeps work moving",
      intro: "CopyLine specializes in selling and leasing advanced printers and copiers for businesses, with smart printing solutions, professional support, reliable service and personal care.",
      proof: ["Sales and leasing", "Quick meter reading", "Reliable personal service"],
      highlightsTitle: "Everything the office needs from copiers to toner",
      salesTitle: "Copiers and printers for offices and businesses",
      salesText: "The product area is prepared for real copier and printer models, specifications, images and full product pages.",
      catalogIntegrity: "The catalog does not show sample models with mismatched images. Every real product will be published only after model, image, specs, toner compatibility and use cases are verified.",
      businessTitle: "Printing solutions for business customers",
      businessText: "Equipment matching, usage costs, toner, service and maintenance in one place so your teams can keep working.",
      whyTitle: "Why choose CopyLine",
      services: ["Copiers and printers", "Service and maintenance", "Toner and meter reading"]
    },
    about: {
      metaTitle: "About CopyLine | Copiers and Printers in Israel",
      metaDescription: "CopyLine is an Israeli copier and printer services company for sales, leasing, maintenance and printing solutions.",
      headline: "CopyLine specializes in copier and printer services",
      intro: "The company provides sales and leasing of advanced printers and copiers for businesses, alongside smart printing solutions, professional support, reliable service and personal care.",
      blocks: [
        ["Reliability", "Customer-fit recommendations, service availability and transparent guidance."],
        ["Professionalism", "Consulting by meter volume, document type, budget and existing infrastructure."],
        ["Israeli market focus", "Hebrew-first service, understanding of Israeli business customers and private client support."]
      ]
    },
    services: {
      metaTitle: "CopyLine Services | Copiers, Printers, Maintenance and Toner",
      metaDescription: "CopyLine services include copier and printer sales, leasing, maintenance, toner, meter reading, technical support and consulting.",
      headline: "End-to-end copier and printer services",
      intro: "Choose a single service or a complete solution with equipment, support and maintenance.",
      items: [
        ["Copier and printer sales", "Laser, color, black-and-white, multifunction printers and copiers for offices and businesses."],
        ["Printer and copier maintenance", "Printer service, issue handling, replacements and ongoing support."],
        ["Toner", "Toner and drums supplied by model and usage volume."],
        ["Office printing solutions", "Equipment planning, network setup, security, user management and cost control."],
        ["Technical support", "Professional support for users, installations, faults and network connections."],
        ["Meter reading and consulting", "Meter reporting and model selection by need, print volume, color, scanning and budget."]
      ]
    },
    printers: {
      metaTitle: "CopyLine Copier and Printer Catalog | Business Equipment",
      metaDescription: "CopyLine business copier and printer catalog with office, multifunction, laser, color and black-and-white printers.",
      headline: "A copier and printer catalog built to scale",
      intro: "The catalog is ready for real models only. Once you provide specifications, each card will receive the correct image, full specs, meter data and a product page.",
      filters: ["Copiers", "Office printers", "Multifunction printers", "Laser printers", "Color printers", "Black-and-white", "Business printers"],
      categories: [
        ["Office printers", "For small and mid-size teams, purchase or rental, mono or color."],
        ["Multifunction printers", "Print, copy, scan and fax in one device with user management."],
        ["Floor-standing copiers", "High-volume workflows for departments, institutions and organizations."],
        ["Managed Print", "Metering, service and maintenance under one managed framework."]
      ],
      emptyTitle: "Waiting for CopyLine's real model list",
      emptyText: "To meet enterprise standards, this catalog does not show invented products or generic mismatched images. Once real models are provided, each card will receive the correct manufacturer image, full specs, compatible toner, recommended use cases and SEO schema.",
      suitable: "Suitable for",
      specs: "Key specs",
      details: "Details"
    },
    meter: {
      metaTitle: "Meter Reading | CopyLine",
      metaDescription: "Submit a printer or copier meter reading to CopyLine for business customers in Israel.",
      headline: "Submit a printer or copier meter reading",
      intro: "CopyLine customers can report meter readings in an organized way to keep billing, service and toner supply accurate.",
      device: "Machine / printer model",
      meter: "Current meter reading",
      serial: "Serial number",
      notes: "Service notes",
      send: "Send Meter Reading"
    },
    product: {
      metaTitle: "Printer | CopyLine",
      gallery: "Product gallery",
      specs: "Technical specifications",
      benefits: "Main benefits",
      useCases: "Recommended use cases",
      consumables: "Toner compatibility",
      consumablesText: "Compatible toner and drum units will appear here once the real model is added.",
      related: "Related printers"
    },
    contact: {
      metaTitle: "Contact | CopyLine",
      metaDescription: "Contact CopyLine for a printer quote, leasing, service, toner and business printing solutions in Israel.",
      headline: "Let us find the right printing solution",
      intro: "Tell us whether you need a new printer, leasing, service, toner or office consulting."
    },
    seoKeywords: "business printers, printer leasing Israel, printer service, printer sales, office printers, printer toner, business printing solutions, CopyLine"
  }
};
