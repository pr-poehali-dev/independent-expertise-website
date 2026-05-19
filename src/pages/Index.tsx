import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/4bae9987-38e7-476d-b7ba-0a86875d56c3/files/588d88d7-7978-47bc-a918-09dea1ba6d3f.jpg";

const navLinks = [
  { label: "Услуги", href: "#services" },
  { label: "Процесс", href: "#process" },
  { label: "Цены", href: "#prices" },
  { label: "Контакты", href: "#contacts" },
];

const services = [
  { icon: "Building2", title: "Строительная экспертиза", desc: "Оценка качества строительных работ, выявление дефектов и нарушений нормативов." },
  { icon: "Scale", title: "Независимая оценка", desc: "Объективная оценка ущерба, рыночной стоимости имущества и нематериальных активов." },
  { icon: "FileText", title: "Техническая экспертиза", desc: "Исследование технических устройств, оборудования и сложных механизмов." },
  { icon: "Package", title: "Товарная экспертиза", desc: "Определение качества, подлинности и соответствия товаров стандартам." },
  { icon: "Gavel", title: "Судебная экспертиза", desc: "Подготовка заключений для судебных разбирательств и досудебного урегулирования." },
  { icon: "Home", title: "Оценка недвижимости", desc: "Определение рыночной и кадастровой стоимости жилой и коммерческой недвижимости." },
];

const steps = [
  { num: "01", title: "Заявка", desc: "Вы оставляете заявку — мы связываемся в течение 2 часов и уточняем детали задачи." },
  { num: "02", title: "Выезд и исследование", desc: "Эксперт выезжает на объект или принимает материалы, проводит детальное исследование." },
  { num: "03", title: "Анализ и заключение", desc: "На основании собранных данных составляется официальное экспертное заключение." },
  { num: "04", title: "Передача документов", desc: "Вы получаете заключение с печатью, подписью и полным пакетом подтверждающих материалов." },
];

const prices = [
  {
    name: "Базовая",
    price: "от 5 000 ₽",
    desc: "Для стандартных случаев",
    features: ["Выезд специалиста", "Письменное заключение", "Срок 5–7 рабочих дней"],
    highlight: false,
  },
  {
    name: "Профессиональная",
    price: "от 15 000 ₽",
    desc: "Для сложных объектов",
    features: ["Выезд специалиста", "Развёрнутое заключение", "Фото- и видеофиксация", "Срок 3–5 рабочих дней", "Консультация юриста"],
    highlight: true,
  },
  {
    name: "Судебная",
    price: "от 30 000 ₽",
    desc: "Для судебных процессов",
    features: ["Выезд специалиста", "Заключение для суда", "Участие в заседании", "Рецензия на заключение", "Срок по договорённости"],
    highlight: false,
  },
];

const certificates = [
  { title: "СРО Оценщиков", year: "2015", num: "№ СРО-О-0042" },
  { title: "Минюст РФ", year: "2017", num: "№ 77/СЭ-002" },
  { title: "ТПП России", year: "2018", num: "№ ТПП-1847" },
  { title: "ISO 9001:2015", year: "2020", num: "№ RU.01.0045" },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-stone-50 text-stone-900 font-golos min-h-screen">
      {/* NAV */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-white/95 backdrop-blur-sm border-b border-stone-200 shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-cormorant text-xl font-semibold tracking-wide text-white data-[scrolled]:text-stone-900"
            style={{ color: scrolled ? "#1A1A1A" : "white" }}
          >
            ЭКСПЕРТИЗА
          </button>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <button
                key={l.label}
                onClick={() => scrollTo(l.href)}
                className="text-sm font-medium transition-colors tracking-wide"
                style={{ color: scrolled ? "#5A5A5A" : "rgba(255,255,255,0.85)" }}
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#contacts")}
              className="text-sm font-medium px-5 py-2 transition-colors"
              style={{
                background: scrolled ? "#1A1A1A" : "rgba(201,169,110,0.9)",
                color: scrolled ? "#FAFAFA" : "#1A1A1A",
              }}
            >
              Заказать экспертизу
            </button>
          </div>
          <button
            className="md:hidden p-2"
            style={{ color: scrolled ? "#3A3A3A" : "white" }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-stone-200 px-6 py-4 flex flex-col gap-4">
            {navLinks.map((l) => (
              <button key={l.label} onClick={() => scrollTo(l.href)} className="text-left text-base font-medium text-stone-700">
                {l.label}
              </button>
            ))}
            <button onClick={() => scrollTo("#contacts")} className="bg-stone-900 text-stone-50 text-sm font-medium px-5 py-3 text-left">
              Заказать экспертизу
            </button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_IMAGE})` }} />
        <div className="absolute inset-0 bg-stone-950/65" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pt-24 pb-20">
          <div className="max-w-2xl">
            <p className="font-cormorant text-lg italic tracking-widest uppercase opacity-90 mb-4" style={{ color: "#C9A96E" }}>
              Независимая экспертиза
            </p>
            <h1 className="font-cormorant text-5xl md:text-7xl font-light text-white leading-tight mb-6">
              Объективная оценка,<br />
              <em className="font-normal" style={{ color: "#E8D4A8" }}>которой доверяют</em>
            </h1>
            <p className="text-stone-300 text-lg leading-relaxed mb-10 max-w-lg">
              Официальные экспертные заключения для судов, страховых случаев и деловых споров. Более 15 лет на рынке.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollTo("#contacts")}
                className="font-semibold px-8 py-4 text-sm tracking-wide transition-colors"
                style={{ background: "#C9A96E", color: "#0E0E0E" }}
              >
                Заказать экспертизу
              </button>
              <button
                onClick={() => scrollTo("#services")}
                className="border border-white/40 text-white font-medium px-8 py-4 text-sm tracking-wide hover:border-white hover:bg-white/10 transition-colors"
              >
                Узнать об услугах
              </button>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-md">
            {[{ val: "15+", label: "лет опыта" }, { val: "3 000+", label: "экспертиз" }, { val: "98%", label: "выиграно дел" }].map((s) => (
              <div key={s.label} className="text-white border-l pl-4" style={{ borderColor: "rgba(201,169,110,0.4)" }}>
                <div className="font-cormorant text-3xl font-light" style={{ color: "#C9A96E" }}>{s.val}</div>
                <div className="text-xs text-stone-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <p className="font-cormorant text-base italic tracking-widest uppercase mb-3" style={{ color: "#C9A96E" }}>Наши услуги</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-stone-900">Все виды экспертизы</h2>
            <div className="w-16 h-px mt-5" style={{ background: "#C9A96E" }} />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-stone-200">
            {services.map((s) => (
              <div key={s.title} className="border-r border-b border-stone-200 p-8 hover:bg-stone-50 transition-colors">
                <div className="w-10 h-10 flex items-center justify-center mb-5" style={{ color: "#C9A96E" }}>
                  <Icon name={s.icon} size={22} />
                </div>
                <h3 className="font-cormorant text-xl font-semibold text-stone-900 mb-3">{s.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-24 bg-stone-950 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <p className="font-cormorant text-base italic tracking-widest uppercase mb-3" style={{ color: "#C9A96E" }}>Как мы работаем</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light">Прозрачный процесс</h2>
            <div className="w-16 h-px mt-5" style={{ background: "#C9A96E" }} />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.num}>
                <div className="font-cormorant text-5xl font-light mb-4" style={{ color: "rgba(201,169,110,0.3)" }}>{s.num}</div>
                <h3 className="font-cormorant text-xl font-semibold mb-3 text-white">{s.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICES */}
      <section id="prices" className="py-24 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <p className="font-cormorant text-base italic tracking-widest uppercase mb-3" style={{ color: "#C9A96E" }}>Стоимость услуг</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-stone-900">Прозрачные цены</h2>
            <div className="w-16 h-px mt-5" style={{ background: "#C9A96E" }} />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {prices.map((p) => (
              <div
                key={p.name}
                className={`relative flex flex-col p-8 border transition-all ${
                  p.highlight ? "shadow-xl" : "bg-white border-stone-200 hover:border-stone-400"
                }`}
                style={p.highlight ? { background: "#1A1A1A", borderColor: "#1A1A1A", color: "white" } : {}}
              >
                {p.highlight && <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "#C9A96E" }} />}
                <div className="text-xs font-medium tracking-widest uppercase mb-2" style={{ color: p.highlight ? "#C9A96E" : "#9A9A9A" }}>
                  {p.name}
                </div>
                <div className="font-cormorant text-4xl font-light mb-1" style={{ color: p.highlight ? "white" : "#1A1A1A" }}>
                  {p.price}
                </div>
                <div className="text-sm mb-6" style={{ color: p.highlight ? "#9A9A9A" : "#5A5A5A" }}>{p.desc}</div>
                <ul className="flex-1 space-y-3 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <Icon name="Check" size={14} style={{ color: p.highlight ? "#C9A96E" : "#9A9A9A", flexShrink: 0 }} />
                      <span style={{ color: p.highlight ? "#D4D4D4" : "#5A5A5A" }}>{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => scrollTo("#contacts")}
                  className="w-full py-3 text-sm font-medium tracking-wide transition-colors"
                  style={p.highlight
                    ? { background: "#C9A96E", color: "#0E0E0E" }
                    : { border: "1px solid #1A1A1A", color: "#1A1A1A", background: "transparent" }
                  }
                >
                  Выбрать
                </button>
              </div>
            ))}
          </div>
          <p className="text-stone-400 text-sm mt-8 text-center">
            Точная стоимость определяется после консультации. Возможна рассрочка.
          </p>
        </div>
      </section>

      {/* CERTIFICATES */}
      <section className="py-16 bg-white border-y border-stone-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10 text-center">
            <p className="font-cormorant text-base italic tracking-widest uppercase mb-2" style={{ color: "#C9A96E" }}>Документы и сертификаты</p>
            <h2 className="font-cormorant text-3xl font-light text-stone-900">Наши аккредитации</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certificates.map((c) => (
              <div key={c.title} className="flex flex-col items-center text-center p-6 border border-stone-200 hover:border-stone-400 transition-colors group">
                <div className="w-12 h-12 flex items-center justify-center mb-4 border" style={{ color: "#C9A96E", borderColor: "rgba(201,169,110,0.3)" }}>
                  <Icon name="Award" size={20} />
                </div>
                <div className="font-cormorant text-base font-semibold text-stone-900 mb-1">{c.title}</div>
                <div className="text-xs text-stone-400 mb-1">{c.num}</div>
                <div className="text-xs text-stone-300">с {c.year} года</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 bg-stone-950 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-cormorant text-base italic tracking-widest uppercase mb-3" style={{ color: "#C9A96E" }}>Свяжитесь с нами</p>
              <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-6">
                Получите<br />консультацию
              </h2>
              <div className="w-16 h-px mb-8" style={{ background: "#C9A96E" }} />
              <p className="text-stone-400 text-base leading-relaxed mb-10">
                Оставьте заявку и мы ответим в течение 2 часов в рабочее время. Первая консультация — бесплатно.
              </p>
              <div className="space-y-5">
                {[
                  { icon: "Phone", label: "+7 (495) 000-00-00" },
                  { icon: "Mail", label: "info@expertiza.ru" },
                  { icon: "MapPin", label: "Москва, ул. Примерная, 1" },
                  { icon: "Clock", label: "Пн–Пт: 9:00–18:00" },
                ].map((c) => (
                  <div key={c.label} className="flex items-center gap-4">
                    <div className="w-8 h-8 flex items-center justify-center" style={{ color: "#C9A96E" }}>
                      <Icon name={c.icon} size={16} />
                    </div>
                    <span className="text-stone-300 text-sm">{c.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8" style={{ background: "#2A2A2A" }}>
              <h3 className="font-cormorant text-2xl font-light mb-6">Заявка на экспертизу</h3>
              <div className="space-y-4">
                {[
                  { label: "Имя", type: "text", placeholder: "Иван Иванов" },
                  { label: "Телефон", type: "tel", placeholder: "+7 (___) ___-__-__" },
                ].map((f) => (
                  <div key={f.label}>
                    <label className="text-xs text-stone-400 tracking-widest uppercase block mb-2">{f.label}</label>
                    <input
                      type={f.type}
                      placeholder={f.placeholder}
                      className="w-full border text-white placeholder-stone-500 px-4 py-3 text-sm focus:outline-none transition-colors"
                      style={{ background: "#3A3A3A", borderColor: "#5A5A5A" }}
                    />
                  </div>
                ))}
                <div>
                  <label className="text-xs text-stone-400 tracking-widest uppercase block mb-2">Вид экспертизы</label>
                  <select
                    className="w-full border text-stone-300 px-4 py-3 text-sm focus:outline-none transition-colors appearance-none"
                    style={{ background: "#3A3A3A", borderColor: "#5A5A5A" }}
                  >
                    <option value="">Выберите услугу</option>
                    <option>Строительная экспертиза</option>
                    <option>Независимая оценка</option>
                    <option>Техническая экспертиза</option>
                    <option>Товарная экспертиза</option>
                    <option>Судебная экспертиза</option>
                    <option>Оценка недвижимости</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-stone-400 tracking-widest uppercase block mb-2">Описание задачи</label>
                  <textarea
                    placeholder="Опишите кратко, что требуется..."
                    rows={3}
                    className="w-full border text-white placeholder-stone-500 px-4 py-3 text-sm focus:outline-none transition-colors resize-none"
                    style={{ background: "#3A3A3A", borderColor: "#5A5A5A" }}
                  />
                </div>
                <button
                  className="w-full font-semibold py-4 text-sm tracking-wide transition-colors mt-2"
                  style={{ background: "#C9A96E", color: "#0E0E0E" }}
                >
                  Отправить заявку
                </button>
                <p className="text-xs text-stone-600 text-center leading-relaxed">
                  Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-stone-500 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-cormorant text-lg text-stone-400">ЭКСПЕРТИЗА</div>
          <div className="text-xs tracking-wide">© 2026 Все права защищены</div>
          <div className="flex gap-6 text-xs">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Договор оферты</a>
          </div>
        </div>
      </footer>
    </div>
  );
}