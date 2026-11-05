import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, BadgeCheck, Check, ChevronDown,
  ChevronLeft, ChevronRight, CircleHelp, Clock3, Factory, Gauge, Globe2,
  Headphones, Menu, MessageCircle, MoveUpRight, PackageCheck, Phone,
  Search, ShieldCheck, Sparkles, Wrench, X, Zap
} from "lucide-react";
import "./styles.css";

const products = [
  { id: 1, category: "Tyre service", applications: ["Tyre shops", "Garages", "Automotive workshops", "Fleet maintenance"], name: "Nitrogen / Air Tyre Inflation Machine", tag: "Featured equipment", desc: "A dual nitrogen and air tyre inflation machine for professional tyre-service operations.", image: "/images/blue-nitrogen-air-inflation-machine.webp" },
  { id: 2, category: "Workshop equipment", applications: ["Tyre shops", "Garages", "Automotive workshops"], name: "Tyre Changers", tag: "Precision handling", desc: "Explore tyre-changing equipment for professional mounting and demounting workflows.", image: "https://images.unsplash.com/photo-1632823471565-1ecdf5c6f6b5?auto=format&fit=crop&w=1100&q=85" },
  { id: 3, category: "Workshop equipment", applications: ["Tyre shops", "Garages", "Automotive workshops"], name: "Wheel Balancers", tag: "Accurate balancing", desc: "Wheel-balancing equipment categories for modern automotive service workshops.", image: "https://images.unsplash.com/photo-1613214150384-1e6f7c1b8a36?auto=format&fit=crop&w=1100&q=85" },
  { id: 4, category: "Air solutions", applications: ["Garages", "Automotive workshops", "Fleet maintenance"], name: "Air Compressors", tag: "Reliable performance", desc: "Compressed-air equipment categories to support demanding workshop operations.", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1100&q=85" },
  { id: 5, category: "Diagnostics", applications: ["Garages", "Automotive workshops", "Fleet maintenance"], name: "Vehicle Diagnostic Tools", tag: "Smarter diagnostics", desc: "Diagnostic tool categories to help technicians inspect and service vehicles.", image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1100&q=85" },
  { id: 6, category: "Workshop equipment", applications: ["Garages", "Automotive workshops", "Fleet maintenance"], name: "Vehicle Lifting Solutions", tag: "Workshop infrastructure", desc: "Vehicle-lifting equipment categories for workshop planning and service operations.", image: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&w=1100&q=85" }
];

const copy = {
  en: {
    nav: ["Home", "Solutions", "Products", "About", "Contact"],
    eyebrow: "ENGINEERED FOR THE NEXT GENERATION OF WORKSHOPS",
    heroTitle: <>Equip your workshop.<br/><span>Elevate every service.</span></>,
    heroDesc: "Professional automotive equipment and dependable workshop solutions for businesses that refuse to compromise on performance.",
    explore: "Explore solutions", quote: "Request a quotation", trusted: "A smarter way to build your workshop",
    scroll: "Scroll to explore", productsEyebrow: "OUR EQUIPMENT PORTFOLIO",
    productsTitle: <>The right tools for<br/><span>work that matters.</span></>,
    productsDesc: "Explore equipment categories selected to help automotive professionals work with confidence, consistency and control.",
    all: "All equipment", learn: "View category", viewAll: "Explore all products",
    solutionsEyebrow: "BUILT AROUND YOUR BUSINESS",
    solutionsTitle: <>More than equipment.<br/><span>A complete partner.</span></>,
    solutionsDesc: "From choosing the right equipment to getting your team ready, UNISUN is focused on helping your operation move forward.",
    solutionCards: [
      ["Consultation & planning", "Choose equipment around your workshop size, services and growth plans."],
      ["Supply & coordination", "A clear, dependable process from product selection through delivery coordination."],
      ["Technical assistance", "Practical support to help your team get the most from its equipment."]
    ],
    aboutEyebrow: "THE UNISUN APPROACH",
    aboutTitle: <>Built on trust.<br/><span>Focused on progress.</span></>,
    aboutDesc: "We believe great workshops are built with the right equipment, clear advice and long-term relationships. UNISUN brings these essentials together for automotive businesses across the UAE.",
    values: ["Business-first recommendations", "Product-focused guidance", "Responsive customer support"],
    ctaTitle: <>Planning your next<br/>workshop upgrade?</>,
    ctaDesc: "Tell us what you need. Our team will help you explore the right equipment options for your operation.",
    ctaButton: "Talk to our team", contactEyebrow: "LET'S GET TO WORK",
    contactTitle: <>Your next step<br/><span>starts here.</span></>,
    contactDesc: "Share your requirements and we'll get back to you to discuss the right solution.",
    name: "Your name", email: "Business email", phone: "Phone / WhatsApp", interest: "What are you looking for?", message: "Tell us about your requirements", send: "Send enquiry",
    footerText: "Automotive equipment and workshop solutions, built around your business.",
    categories: ["Tyre service", "Workshop equipment", "Air solutions", "Diagnostics"],
    statLabels: ["Business-focused", "UAE-based", "Product guidance", "Customer support"]
  },
  ar: {
    nav: ["الرئيسية", "الحلول", "المنتجات", "من نحن", "اتصل بنا"],
    eyebrow: "حلول متطورة لورش السيارات الحديثة",
    heroTitle: <>جهّز ورشتك.<br/><span>وارفع مستوى خدماتك.</span></>,
    heroDesc: "معدات سيارات احترافية وحلول موثوقة لورش العمل التي لا تقبل التنازل عن الأداء.",
    explore: "اكتشف الحلول", quote: "اطلب عرض سعر", trusted: "طريقة أكثر ذكاءً لتطوير ورشتك",
    scroll: "اكتشف المزيد", productsEyebrow: "مجموعة معداتنا",
    productsTitle: <>الأدوات المناسبة<br/><span>للعمل الذي يستحق.</span></>,
    productsDesc: "اكتشف فئات المعدات المصممة لمساعدة المتخصصين في قطاع السيارات على العمل بثقة وكفاءة.",
    all: "جميع المعدات", learn: "عرض الفئة", viewAll: "استكشف المنتجات",
    solutionsEyebrow: "حلول مصممة لأعمالك",
    solutionsTitle: <>أكثر من مجرد معدات.<br/><span>شريك متكامل.</span></>,
    solutionsDesc: "من اختيار المعدات المناسبة إلى تجهيز فريقك، نركز في يونيسن على دعم نمو أعمالك.",
    solutionCards: [
      ["الاستشارة والتخطيط", "اختر المعدات المناسبة لمساحة ورشتك وخدماتك وخطط نموك."],
      ["التوريد والتنسيق", "عملية واضحة وموثوقة من اختيار المنتج وحتى تنسيق التسليم."],
      ["المساعدة الفنية", "دعم عملي لمساعدة فريقك على الاستفادة القصوى من المعدات."]
    ],
    aboutEyebrow: "نهج يونيسن",
    aboutTitle: <>نبني الثقة.<br/><span>ونركز على التطور.</span></>,
    aboutDesc: "نؤمن أن الورش المتميزة تبدأ بالمعدات المناسبة والنصيحة الواضحة والعلاقات طويلة الأمد. تجمع يونيسن هذه العناصر لدعم شركات السيارات في الإمارات.",
    values: ["توصيات تركز على الأعمال", "إرشاد متخصص للمنتجات", "دعم سريع للعملاء"],
    ctaTitle: <>هل تخطط لتطوير<br/>ورشتك قريباً؟</>,
    ctaDesc: "أخبرنا باحتياجاتك وسنساعدك في استكشاف المعدات المناسبة لعملك.",
    ctaButton: "تواصل مع فريقنا", contactEyebrow: "لنبدأ العمل",
    contactTitle: <>خطوتك القادمة<br/><span>تبدأ من هنا.</span></>,
    contactDesc: "شاركنا متطلباتك وسنتواصل معك لمناقشة الحل المناسب.",
    name: "الاسم", email: "البريد الإلكتروني للعمل", phone: "الهاتف / واتساب", interest: "ما الذي تبحث عنه؟", message: "أخبرنا عن متطلباتك", send: "إرسال الطلب",
    footerText: "معدات سيارات وحلول ورش عمل مصممة لأعمالك.",
    categories: ["خدمة الإطارات", "معدات الورش", "حلول الهواء", "التشخيص"],
    statLabels: ["تركيز على الأعمال", "مقرنا الإمارات", "إرشاد للمنتجات", "دعم العملاء"]
  }
};

function App() {
  const [lang, setLang] = useState("en");
  const [activeFilter, setActiveFilter] = useState("All equipment");
  const [searchTerm, setSearchTerm] = useState("");
  const [applicationFilter, setApplicationFilter] = useState("All applications");
  const [sortOrder, setSortOrder] = useState("featured");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [sent, setSent] = useState(false);
  const t = copy[lang];
  const isArabic = lang === "ar";
  useEffect(() => { document.documentElement.lang = lang; document.documentElement.dir = isArabic ? "rtl" : "ltr"; document.title = isArabic ? "يونيسن | معدات ورش السيارات في الإمارات" : "UNISUN | Automotive Workshop Equipment & Nitrogen Tyre Inflation UAE"; }, [lang, isArabic]);
  const filters = ["All equipment", "Tyre service", "Workshop equipment", "Air solutions", "Diagnostics"];
  const applications = ["All applications", "Tyre shops", "Garages", "Automotive workshops", "Fleet maintenance"];
  const filtered = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    const result = products.filter(p => {
      const categoryMatch = activeFilter === "All equipment" || p.category === activeFilter;
      const applicationMatch = applicationFilter === "All applications" || p.applications.includes(applicationFilter);
      const searchMatch = !q || [p.name, p.category, p.tag, p.desc, ...p.applications].join(" ").toLowerCase().includes(q);
      return categoryMatch && applicationMatch && searchMatch;
    });
    if (sortOrder === "az") result.sort((a, b) => a.name.localeCompare(b.name));
    if (sortOrder === "za") result.sort((a, b) => b.name.localeCompare(a.name));
    if (sortOrder === "featured") result.sort((a, b) => a.id - b.id);
    return result;
  }, [activeFilter, applicationFilter, searchTerm, sortOrder]);

  const openQuote = (product = "") => {
    setSelectedProduct(product);
    setSent(false);
    setModalOpen(true);
  };
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };
  const submitForm = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`UNISUN website enquiry — ${data.get("interest") || "General enquiry"}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone")}\nInterest: ${data.get("interest")}\nMessage: ${data.get("message")}`
    );
    // Replace this address with the company's monitored sales inbox before launch.
    window.location.href = `mailto:YOUR_EMAIL@YOURDOMAIN.COM?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div className={isArabic ? "app rtl" : "app"} dir={isArabic ? "rtl" : "ltr"}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"Organization","name":"UNISUN Auto Machines and Equipments Trading L.L.C.","description":"Automotive workshop equipment and nitrogen tyre inflation solutions in the United Arab Emirates.","logo":`${window.location.origin}/unisun-logo.webp`,"areaServed":{"@type":"Country","name":"United Arab Emirates"},"knowsAbout":["Nitrogen tyre inflation machines","Automotive workshop equipment","Tyre service equipment"]})}} />
      <div className="announcement"><span className="announce-dot"/> UAE AUTOMOTIVE EQUIPMENT & WORKSHOP SOLUTIONS <span className="announce-line"/> <span>BUILT AROUND YOUR BUSINESS</span></div>
      <header className="header">
        <a className="brand" href="#home" aria-label="UNISUN home">
          <img className="brand-logo" src="/unisun-logo.webp" alt="UNISUN Auto Machines and Equipments Trading L.L.C." />
        </a>
        <nav className={mobileOpen ? "nav open" : "nav"}>
          {t.nav.map((item, i) => <button key={item} onClick={() => scrollTo(["home","solutions","products","about","contact"][i])}>{item}</button>)}
          <button className="mobile-quote" onClick={() => openQuote()}>{t.quote}</button>
        </nav>
        <div className="header-actions">
          <button className="lang-btn" aria-label={isArabic ? "Switch language to English" : "Switch language to Arabic"} onClick={() => setLang(isArabic ? "en" : "ar")}><Globe2 size={15}/>{isArabic ? "EN" : "عربي"}</button>
          <button className="header-quote" onClick={() => openQuote()}>{t.quote}<ArrowUpRight size={15}/></button>
          <button className="menu-btn" aria-label="Toggle menu" onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X/> : <Menu/>}</button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-grid"/>
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line"/>{t.eyebrow}</div>
            <h1>{t.heroTitle}</h1>
            <p className="hero-desc">{t.heroDesc}</p>
            <div className="hero-actions">
              <button className="btn btn-lime" onClick={() => scrollTo("products")}>{t.explore}<ArrowUpRight size={17}/></button>
              <button className="btn btn-ghost" onClick={() => openQuote()}>{t.quote}<ArrowUpRight size={17}/></button>
            </div>
            <div className="hero-proof"><div className="proof-icons"><span><Wrench/></span><span><ShieldCheck/></span><span><Gauge/></span></div><div><strong>{t.trusted}</strong><small>Equipment • Guidance • Support</small></div></div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-wrap">
              <img src="/images/blue-nitrogen-air-inflation-machine.webp" alt="UNISUN blue nitrogen and air tyre inflation machine" fetchPriority="high" />
              <div className="image-overlay"/>
              <div className="hero-image-label"><span>FEATURED EQUIPMENT</span><b>NITROGEN / AIR<br/>TYRE INFLATION</b><ArrowUpRight/></div>
            </div>
            <div className="floating-card"><span className="float-icon"><BadgeCheck/></span><div><b>Professional solutions</b><small>For modern automotive businesses</small></div></div>
            <div className="hero-vertical">UNISUN — UAE <span/></div>
          </div>
          <button className="scroll-cue" onClick={() => scrollTo("products")}><span>{t.scroll}</span><ArrowDownRight size={17}/></button>
          <div className="hero-index">01 <span/> 04</div>
        </section>

        <section className="trust-strip">
          <div className="trust-intro">YOUR WORKSHOP.<br/><b>YOUR ADVANTAGE.</b></div>
          <div className="trust-item"><Factory/><span><b>Workshop-ready</b><small>Equipment categories</small></span></div>
          <div className="trust-item"><PackageCheck/><span><b>Business focused</b><small>Practical recommendations</small></span></div>
          <div className="trust-item"><Headphones/><span><b>Human support</b><small>Here when you need us</small></span></div>
          <div className="trust-item"><Zap/><span><b>Built for progress</b><small>Solutions that move you forward</small></span></div>
        </section>

        <section className="section products-section" id="products">
          <div className="section-head">
            <div><div className="eyebrow dark"><span className="eyebrow-line"/>{t.productsEyebrow}</div><h2>{t.productsTitle}</h2></div>
            <p>{t.productsDesc}</p>
          </div>
          <div className="catalogue-tools" aria-label={isArabic ? "تصفية المنتجات" : "Product filters"}>
            <label className="catalogue-search"><Search size={17}/><input type="search" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder={isArabic ? "ابحث عن منتج أو فئة..." : "Search products, categories or applications"} aria-label="Search products" /></label>
            <label className="catalogue-select"><span>{isArabic ? "الاستخدام" : "Application"}</span><select value={applicationFilter} onChange={e => setApplicationFilter(e.target.value)} aria-label="Filter by application">{applications.map((a, i) => <option key={a} value={a}>{isArabic ? ["كل الاستخدامات", "محلات الإطارات", "الكراجات", "ورش السيارات", "صيانة الأساطيل"][i] : a}</option>)}</select></label>
            <label className="catalogue-select"><span>{isArabic ? "ترتيب حسب" : "Sort by"}</span><select value={sortOrder} onChange={e => setSortOrder(e.target.value)} aria-label="Sort products"><option value="featured">{isArabic ? "مميز" : "Featured"}</option><option value="az">A – Z</option><option value="za">Z – A</option></select></label>
            <button className="clear-filters" onClick={() => {setActiveFilter("All equipment");setApplicationFilter("All applications");setSearchTerm("");setSortOrder("featured");}}>{isArabic ? "مسح الفلاتر" : "Clear filters"}</button>
          </div>
          <div className="filter-row">
            <div className="filters" role="group" aria-label="Filter by product category">{filters.map((f, i) => <button key={f} className={activeFilter === f ? "filter active" : "filter"} aria-pressed={activeFilter === f} onClick={() => setActiveFilter(f)}>{i === 0 ? t.all : (isArabic ? t.categories[i-1] : f)}</button>)}</div>
            <span className="result-count" aria-live="polite">{filtered.length} {isArabic ? "منتجات" : "PRODUCTS"}</span>
          </div>
          {filtered.length > 0 ? <div className="product-grid">
            {filtered.map(p => <article className="product-card" key={p.id}>
              <div className="product-photo"><img src={p.image} alt={`${p.name} for ${p.applications.join(", ")}`} loading="lazy"/><span className="product-number">{String(p.id).padStart(2,"0")}</span><button aria-label={`Enquire about ${p.name}`} onClick={() => openQuote(p.name)}><ArrowUpRight/></button></div>
              <div className="product-info"><div className="product-tag">{p.tag}</div><h3>{p.name}</h3><p>{p.desc}</p><div className="application-tags">{p.applications.slice(0,3).map(a=><span key={a}>{a}</span>)}</div><button className="text-link" onClick={() => openQuote(p.name)}>{t.learn}<ArrowUpRight size={15}/></button></div>
            </article>)}
          </div> : <div className="no-results"><b>{isArabic ? "لم يتم العثور على منتجات" : "No matching products found"}</b><span>{isArabic ? "جرّب تغيير كلمات البحث أو الفلاتر." : "Try another search term or clear one or more filters."}</span><button className="btn btn-dark" onClick={() => {setActiveFilter("All equipment");setApplicationFilter("All applications");setSearchTerm("");}}>{isArabic ? "عرض جميع المنتجات" : "Show all products"}</button></div>}
          <div className="center-action"><button className="btn btn-dark" onClick={() => openQuote()}>{t.viewAll}<ArrowRight size={17}/></button></div>
          <p className="content-note">Product categories shown are illustrative. Confirm actual brands, models, availability and specifications with UNISUN before publishing.</p>
        </section>

        <section className="solutions-section" id="solutions">
          <div className="solutions-image"><img src="https://images.unsplash.com/photo-1632823471565-1ecdf5c6f6b5?auto=format&fit=crop&w=1400&q=85" alt="Automotive workshop equipment"/><div className="solutions-image-caption"><span>THE UNISUN DIFFERENCE</span><b>Support that works<br/>as hard as you do.</b></div></div>
          <div className="solutions-content">
            <div className="eyebrow"><span className="eyebrow-line"/>{t.solutionsEyebrow}</div>
            <h2>{t.solutionsTitle}</h2><p className="section-description">{t.solutionsDesc}</p>
            <div className="solution-list">{t.solutionCards.map((item, i) => <div className="solution-row" key={item[0]}><span className="solution-index">0{i+1}</span><div><h3>{item[0]}</h3><p>{item[1]}</p></div><ArrowUpRight size={18}/></div>)}</div>
            <button className="btn btn-lime" onClick={() => openQuote()}>{t.ctaButton}<ArrowUpRight size={17}/></button>
          </div>
        </section>

        <section className="about-section section" id="about">
          <div className="about-top"><div><div className="eyebrow dark"><span className="eyebrow-line"/>{t.aboutEyebrow}</div><h2>{t.aboutTitle}</h2></div><p>{t.aboutDesc}</p></div>
          <div className="about-bottom">
            <div className="about-image"><img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1400&q=85" alt="Technical team working with equipment"/><div className="image-stamp"><Sparkles/><span>BUILT FOR<br/>BUSINESS</span></div></div>
            <div className="values-panel"><div className="values-label">WHAT YOU CAN EXPECT</div>{t.values.map((v,i)=><div className="value-item" key={v}><span><Check size={17}/></span>{v}<ArrowUpRight size={16}/></div>)}<div className="values-foot">A practical partner for your workshop journey.</div></div>
          </div>
        </section>

        <section className="cta-band">
          <div className="cta-orb orb-one"/><div className="cta-orb orb-two"/>
          <div className="cta-content"><div className="eyebrow"><span className="eyebrow-line"/>{t.contactEyebrow}</div><h2>{t.ctaTitle}</h2><p>{t.ctaDesc}</p></div>
          <button className="btn btn-lime" onClick={() => openQuote()}>{t.ctaButton}<ArrowUpRight size={17}/></button>
        </section>

        <section className="contact-section section" id="contact">
          <div className="contact-copy"><div className="eyebrow dark"><span className="eyebrow-line"/>{t.contactEyebrow}</div><h2>{t.contactTitle}</h2><p>{t.contactDesc}</p>
            <div className="contact-details"><div><span><MessageCircle/></span><div><small>WHATSAPP / PHONE</small><b>+971 XX XXX XXXX</b></div></div><div><span><Globe2/></span><div><small>LOCATION</small><b>United Arab Emirates</b></div></div><div><span><Clock3/></span><div><small>BUSINESS HOURS</small><b>Sunday – Friday</b></div></div></div>
          </div>
          <form className="contact-form" onSubmit={submitForm}>
            <div className="form-row"><label>{t.name}<input name="name" placeholder="Your full name" required/></label><label>{t.email}<input name="email" type="email" placeholder="name@company.com" required/></label></div>
            <div className="form-row"><label>{t.phone}<input name="phone" placeholder="+971" /></label><label>{t.interest}<select name="interest" defaultValue=""><option value="" disabled>Select a category</option>{products.map(p=><option key={p.id}>{p.name}</option>)}<option>General enquiry</option></select></label></div>
            <label>{t.message}<textarea name="message" rows="4" placeholder="Share a little about your workshop or project..." required/></label>
            <button className="btn btn-dark submit-btn" type="submit">{t.send}<ArrowUpRight size={17}/></button>
            <small className="form-privacy"><ShieldCheck size={13}/> Your information will only be used to respond to your enquiry.</small>
          </form>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-main"><a className="brand brand-light" href="#home" aria-label="UNISUN home"><img className="brand-logo" src="/unisun-logo.webp" alt="UNISUN Auto Machines and Equipments Trading L.L.C." /></a><p>{t.footerText}</p><button className="back-top" onClick={() => scrollTo("home")}>BACK TO TOP <ArrowUpRight size={15}/></button></div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} UNISUN. All rights reserved.</span><span>UNITED ARAB EMIRATES <span className="footer-dot"/> AUTOMOTIVE SOLUTIONS</span><span>Designed for performance.</span></div>
      </footer>

      {modalOpen && <div className="modal-backdrop" onMouseDown={(e) => e.target === e.currentTarget && setModalOpen(false)}>
        <div className="quote-modal"><button className="modal-close" onClick={() => setModalOpen(false)}><X/></button><div className="eyebrow dark"><span className="eyebrow-line"/>LET'S DISCUSS YOUR REQUIREMENTS</div><h2>Request a <span>quotation.</span></h2><p>Tell us what you are looking for and the UNISUN team can follow up with you.</p>
          <form onSubmit={submitForm}><label>Your name<input name="name" required placeholder="Your full name"/></label><label>Business email<input name="email" type="email" required placeholder="name@company.com"/></label><label>Phone / WhatsApp<input name="phone" placeholder="+971"/></label><label>Product interest<select name="interest" defaultValue={selectedProduct}><option value="">Choose a product category</option>{products.map(p=><option key={p.id}>{p.name}</option>)}</select></label><label>Message<textarea name="message" rows="3" placeholder="Tell us about your requirements..." required/></label><button className="btn btn-dark submit-btn" type="submit">Send enquiry <ArrowUpRight size={17}/></button><small className="form-privacy"><ShieldCheck size={13}/> Replace the demo email address before going live.</small></form>
        </div>
      </div>}
      <a className="whatsapp-float" href="https://wa.me/971000000000" target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle/></a>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App/></React.StrictMode>);
