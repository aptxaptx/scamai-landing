"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "ja" | "ko" | "zh-TW" | "es" | "pt" | "fr" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const languages = {
  en: { name: "English" },
  ja: { name: "日本語" },
  ko: { name: "한국어" },
  "zh-TW": { name: "繁體中文" },
  es: { name: "Español" },
  pt: { name: "Português" },
  fr: { name: "Français" },
  ar: { name: "العربية" },
};

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.products": "Products",
    "nav.industries": "Industries",
    "nav.resources": "Resources",
    "nav.company": "Company",
    "nav.pricing": "Pricing",
    "nav.signup": "Sign up",
    "nav.demo": "Get a Demo",
    
    // Products
    "products.deepfake": "Deepfake Detection",
    "products.voice": "Voice Clone Detection",
    "products.aimedia": "AI Media Detection",
    
    // Industries
    "industries.kyc": "KYC & Identity Verification",
    "industries.dating": "Dating & Social Apps",
    "industries.fakenews": "Fake News Detection",
    "industries.impersonation": "Impersonation & Fraud",
    
    // Resources
    "resources.publications": "Publications & Datasets",
    "resources.news": "News",
    "resources.scams": "Type of Scams",
    
    // Hero
    "hero.title": "Hero Section",
    "hero.subtitle": "Ready for redesign",
    "hero.primary": "Primary CTA",
    "hero.secondary": "Secondary CTA",
    
    // Content
    "content.title": "Content area ready for redesign",
    "content.subtitle": "Clean white background throughout the site",
    
    // Footer
    "footer.tagline": "Combat deepfakes, voice clones, and synthetic media fraud.",
    "footer.products": "Products",
    "footer.company": "Company",
    "footer.about": "About",
    "footer.research": "Research",
    "footer.contact": "Contact",
    "footer.copyright": "© 2024 Reality Inc. All rights reserved. ScamAI is a product of Reality Inc.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
  },
  ja: {
    // Navigation
    "nav.products": "製品",
    "nav.industries": "業界",
    "nav.resources": "リソース",
    "nav.company": "会社",
    "nav.pricing": "料金",
    "nav.signup": "サインアップ",
    "nav.demo": "デモを取得",
    
    // Products
    "products.deepfake": "ディープフェイク検出",
    "products.voice": "音声クローン検出",
    "products.aimedia": "AI メディア検出",
    
    // Industries
    "industries.kyc": "KYC・本人確認",
    "industries.dating": "出会い系・SNS",
    "industries.fakenews": "フェイクニュース検出",
    "industries.impersonation": "なりすまし・詐欺",
    
    // Resources
    "resources.publications": "出版物とデータセット",
    "resources.news": "ニュース",
    "resources.scams": "詐欺の種類",
    
    // Hero
    "hero.title": "ヒーローセクション",
    "hero.subtitle": "再設計の準備完了",
    "hero.primary": "主要CTA",
    "hero.secondary": "セカンダリCTA",
    
    // Content
    "content.title": "コンテンツエリアの再設計準備完了",
    "content.subtitle": "サイト全体がクリーンな白い背景",
    
    // Footer
    "footer.tagline": "ディープフェイク、音声クローン、合成メディア詐欺と戦う。",
    "footer.products": "製品",
    "footer.company": "会社",
    "footer.about": "について",
    "footer.research": "研究",
    "footer.contact": "お問い合わせ",
    "footer.copyright": "© 2024 Reality Inc. 無断転載を禁じます。ScamAI は Reality Inc. の製品です。",
    "footer.privacy": "プライバシーポリシー",
    "footer.terms": "利用規約",
  },
  ko: {
    // Navigation
    "nav.products": "제품",
    "nav.industries": "산업",
    "nav.resources": "리소스",
    "nav.company": "회사",
    "nav.pricing": "가격",
    "nav.signup": "가입하기",
    "nav.demo": "데모 받기",
    
    // Products
    "products.deepfake": "딥페이크 탐지",
    "products.voice": "음성 복제 탐지",
    "products.aimedia": "AI 미디어 탐지",
    
    // Industries
    "industries.kyc": "KYC 및 신원 확인",
    "industries.dating": "데이팅 및 소셜 앱",
    "industries.fakenews": "가짜 뉴스 탐지",
    "industries.impersonation": "사칭 및 사기",
    
    // Resources
    "resources.publications": "출판물 및 데이터셋",
    "resources.news": "뉴스",
    "resources.scams": "사기 유형",
    
    // Hero
    "hero.title": "히어로 섹션",
    "hero.subtitle": "재설계 준비 완료",
    "hero.primary": "기본 CTA",
    "hero.secondary": "보조 CTA",
    
    // Content
    "content.title": "콘텐츠 영역 재설계 준비 완료",
    "content.subtitle": "사이트 전체에 깨끗한 흰색 배경",
    
    // Footer
    "footer.tagline": "딥페이크, 음성 복제 및 합성 미디어 사기에 맞서 싸웁니다.",
    "footer.products": "제품",
    "footer.company": "회사",
    "footer.about": "소개",
    "footer.research": "연구",
    "footer.contact": "문의하기",
    "footer.copyright": "© 2024 Reality Inc. 모든 권리 보유. ScamAI는 Reality Inc.의 제품입니다.",
    "footer.privacy": "개인정보 처리방침",
    "footer.terms": "서비스 약관",
  },
  "zh-TW": {
    // Navigation
    "nav.products": "產品",
    "nav.industries": "行業",
    "nav.resources": "資源",
    "nav.company": "公司",
    "nav.pricing": "定價",
    "nav.signup": "註冊",
    "nav.demo": "獲取演示",
    
    // Products
    "products.deepfake": "深度偽造檢測",
    "products.voice": "語音克隆檢測",
    "products.aimedia": "AI 媒體檢測",
    
    // Industries
    "industries.kyc": "KYC 與身份驗證",
    "industries.dating": "約會與社交應用",
    "industries.fakenews": "假新聞檢測",
    "industries.impersonation": "冒充與詐騙",
    
    // Resources
    "resources.publications": "出版物與數據集",
    "resources.news": "新聞",
    "resources.scams": "詐騙類型",
    
    // Hero
    "hero.title": "英雄區塊",
    "hero.subtitle": "準備重新設計",
    "hero.primary": "主要 CTA",
    "hero.secondary": "次要 CTA",
    
    // Content
    "content.title": "內容區域準備重新設計",
    "content.subtitle": "整個網站採用乾淨的白色背景",
    
    // Footer
    "footer.tagline": "對抗深度偽造、語音克隆和合成媒體詐騙。",
    "footer.products": "產品",
    "footer.company": "公司",
    "footer.about": "關於",
    "footer.research": "研究",
    "footer.contact": "聯繫",
    "footer.copyright": "© 2024 Reality Inc. 版權所有。ScamAI 是 Reality Inc. 的產品。",
    "footer.privacy": "隱私政策",
    "footer.terms": "服務條款",
  },
  es: {
    // Navigation
    "nav.products": "Productos",
    "nav.industries": "Industrias",
    "nav.resources": "Recursos",
    "nav.company": "Empresa",
    "nav.pricing": "Precios",
    "nav.signup": "Registrarse",
    "nav.demo": "Obtener una Demo",
    
    // Products
    "products.deepfake": "Detección de Deepfake",
    "products.voice": "Detección de Clonación de Voz",
    "products.aimedia": "Detección de Medios IA",
    
    // Industries
    "industries.kyc": "KYC y Verificación de Identidad",
    "industries.dating": "Apps de Citas y Redes Sociales",
    "industries.fakenews": "Detección de Noticias Falsas",
    "industries.impersonation": "Suplantación y Fraude",
    
    // Resources
    "resources.publications": "Publicaciones y Conjuntos de Datos",
    "resources.news": "Noticias",
    "resources.scams": "Tipos de Estafas",
    
    // Hero
    "hero.title": "Sección Hero",
    "hero.subtitle": "Listo para rediseñar",
    "hero.primary": "CTA Principal",
    "hero.secondary": "CTA Secundario",
    
    // Content
    "content.title": "Área de contenido lista para rediseñar",
    "content.subtitle": "Fondo blanco limpio en todo el sitio",
    
    // Footer
    "footer.tagline": "Combate deepfakes, clonación de voz y fraude de medios sintéticos.",
    "footer.products": "Productos",
    "footer.company": "Empresa",
    "footer.about": "Acerca de",
    "footer.research": "Investigación",
    "footer.contact": "Contacto",
    "footer.copyright": "© 2024 Reality Inc. Todos los derechos reservados. ScamAI es un producto de Reality Inc.",
    "footer.privacy": "Política de Privacidad",
    "footer.terms": "Términos de Servicio",
  },
  pt: {
    // Navigation
    "nav.products": "Produtos",
    "nav.industries": "Indústrias",
    "nav.resources": "Recursos",
    "nav.company": "Empresa",
    "nav.pricing": "Preços",
    "nav.signup": "Inscrever-se",
    "nav.demo": "Obter uma Demo",
    
    // Products
    "products.deepfake": "Detecção de Deepfake",
    "products.voice": "Detecção de Clonagem de Voz",
    "products.aimedia": "Detecção de Mídia IA",
    
    // Industries
    "industries.kyc": "KYC e Verificação de Identidade",
    "industries.dating": "Apps de Namoro e Redes Sociais",
    "industries.fakenews": "Detecção de Notícias Falsas",
    "industries.impersonation": "Personificação e Fraude",
    
    // Resources
    "resources.publications": "Publicações e Conjuntos de Dados",
    "resources.news": "Notícias",
    "resources.scams": "Tipos de Golpes",
    
    // Hero
    "hero.title": "Seção Hero",
    "hero.subtitle": "Pronto para redesenhar",
    "hero.primary": "CTA Principal",
    "hero.secondary": "CTA Secundário",
    
    // Content
    "content.title": "Área de conteúdo pronta para redesenhar",
    "content.subtitle": "Fundo branco limpo em todo o site",
    
    // Footer
    "footer.tagline": "Combata deepfakes, clonagem de voz e fraude de mídia sintética.",
    "footer.products": "Produtos",
    "footer.company": "Empresa",
    "footer.about": "Sobre",
    "footer.research": "Pesquisa",
    "footer.contact": "Contato",
    "footer.copyright": "© 2024 Reality Inc. Todos os direitos reservados. ScamAI é um produto da Reality Inc.",
    "footer.privacy": "Política de Privacidade",
    "footer.terms": "Termos de Serviço",
  },
  fr: {
    // Navigation
    "nav.products": "Produits",
    "nav.industries": "Industries",
    "nav.resources": "Ressources",
    "nav.company": "Entreprise",
    "nav.pricing": "Tarifs",
    "nav.signup": "S'inscrire",
    "nav.demo": "Obtenir une Démo",
    
    // Products
    "products.deepfake": "Détection de Deepfake",
    "products.voice": "Détection de Clonage Vocal",
    "products.aimedia": "Détection de Médias IA",
    
    // Industries
    "industries.kyc": "KYC et Vérification d'Identité",
    "industries.dating": "Apps de Rencontre et Réseaux Sociaux",
    "industries.fakenews": "Détection de Fausses Nouvelles",
    "industries.impersonation": "Usurpation d'Identité et Fraude",
    
    // Resources
    "resources.publications": "Publications et Ensembles de Données",
    "resources.news": "Actualités",
    "resources.scams": "Types d'Arnaques",
    
    // Hero
    "hero.title": "Section Hero",
    "hero.subtitle": "Prêt pour la refonte",
    "hero.primary": "CTA Principal",
    "hero.secondary": "CTA Secondaire",
    
    // Content
    "content.title": "Zone de contenu prête pour la refonte",
    "content.subtitle": "Fond blanc propre sur tout le site",
    
    // Footer
    "footer.tagline": "Combattez les deepfakes, le clonage vocal et la fraude médiatique synthétique.",
    "footer.products": "Produits",
    "footer.company": "Entreprise",
    "footer.about": "À propos",
    "footer.research": "Recherche",
    "footer.contact": "Contact",
    "footer.copyright": "© 2024 Reality Inc. Tous droits réservés. ScamAI est un produit de Reality Inc.",
    "footer.privacy": "Politique de Confidentialité",
    "footer.terms": "Conditions d'Utilisation",
  },
  ar: {
    // Navigation
    "nav.products": "المنتجات",
    "nav.industries": "الصناعات",
    "nav.resources": "الموارد",
    "nav.company": "الشركة",
    "nav.pricing": "التسعير",
    "nav.signup": "التسجيل",
    "nav.demo": "احصل على عرض توضيحي",
    
    // Products
    "products.deepfake": "كشف التزييف العميق",
    "products.voice": "كشف استنساخ الصوت",
    "products.aimedia": "كشف وسائط الذكاء الاصطناعي",
    
    // Industries
    "industries.kyc": "التحقق من الهوية و KYC",
    "industries.dating": "تطبيقات المواعدة والشبكات الاجتماعية",
    "industries.fakenews": "كشف الأخبار المزيفة",
    "industries.impersonation": "انتحال الشخصية والاحتيال",
    
    // Resources
    "resources.publications": "المنشورات ومجموعات البيانات",
    "resources.news": "الأخبار",
    "resources.scams": "أنواع الاحتيال",
    
    // Hero
    "hero.title": "قسم البطل",
    "hero.subtitle": "جاهز لإعادة التصميم",
    "hero.primary": "دعوة رئيسية للعمل",
    "hero.secondary": "دعوة ثانوية للعمل",
    
    // Content
    "content.title": "منطقة المحتوى جاهزة لإعادة التصميم",
    "content.subtitle": "خلفية بيضاء نظيفة في جميع أنحاء الموقع",
    
    // Footer
    "footer.tagline": "حارب التزييف العميق واستنساخ الصوت والاحتيال الإعلامي الاصطناعي.",
    "footer.products": "المنتجات",
    "footer.company": "الشركة",
    "footer.about": "حول",
    "footer.research": "البحث",
    "footer.contact": "اتصل بنا",
    "footer.copyright": "© 2024 Reality Inc. جميع الحقوق محفوظة. ScamAI هو منتج من Reality Inc.",
    "footer.privacy": "سياسة الخصوصية",
    "footer.terms": "شروط الخدمة",
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    // Load language from localStorage
    const saved = localStorage.getItem("language") as Language;
    if (saved && languages[saved]) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
    
    // Set document direction for RTL languages
    if (lang === "ar") {
      document.documentElement.dir = "rtl";
      document.documentElement.lang = lang;
    } else {
      document.documentElement.dir = "ltr";
      document.documentElement.lang = lang;
    }
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

