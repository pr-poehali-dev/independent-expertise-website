import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const SEND_URL = "https://functions.poehali.dev/24927a74-8007-4a64-9304-0885c2072324";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/4bae9987-38e7-476d-b7ba-0a86875d56c3/files/1f3c8d88-a3c0-43f8-aa0c-1040344f33a4.jpg";

const navLinks = [
  { label: "Услуги", href: "#services" },
  { label: "Процесс", href: "#process" },
  { label: "Цены", href: "#prices" },
  { label: "Контакты", href: "#contacts" },
];

const SC_LINK = "/service-center";

const services = [
  { icon: "Smartphone", title: "Экспертиза телефонов", desc: "Смартфоны, планшеты, умные часы — определяем производственный брак и заводские дефекты.", href: "/services/phones" },
  { icon: "Monitor", title: "Экспертиза компьютеров", desc: "Ноутбуки, ПК, мониторы — выявляем неисправности, возникшие не по вине покупателя.", href: "/services/computers" },
  { icon: "Tv", title: "Бытовая техника", desc: "Телевизоры, холодильники, стиральные машины, пылесосы и другая техника.", href: "/services/appliances" },
  { icon: "ShoppingBag", title: "Возврат на маркетплейсах", desc: "Помогаем вернуть бракованный товар на Ozon и Wildberries — оформляем официальное заключение для компенсации.", href: "/services/marketplace" },
  { icon: "ClipboardList", title: "Стоимостная экспертиза", desc: "Товароведческая стоимостная экспертиза промышленных товаров — определяем рыночную стоимость и ущерб от дефектов.", href: "/services/valuation" },
  { icon: "Gavel", title: "Судебная защита", desc: "Готовим заключения для судебных разбирательств с продавцами и маркетплейсами.", href: "/services/court" },
];

const steps = [
  { num: "01", title: "Заявка", desc: "Оставляете заявку — мы перезваниваем в течение 2 часов и уточняем, что случилось с товаром." },
  { num: "02", title: "Передача товара", desc: "Привозите технику к нам или оформляем курьерскую доставку. Принимаем по всей России." },
  { num: "03", title: "Диагностика", desc: "Эксперт-товаровед проводит независимую диагностику и устанавливает причину неисправности." },
  { num: "04", title: "Заключение и возврат", desc: "Вы получаете официальное заключение для маркетплейса или суда, деньги возвращаются продавцом." },
];

const prices = [
  {
    name: "Консультация юриста",
    price: "от 2 500 ₽",
    desc: "Разберём вашу ситуацию",
    features: ["Анализ документов и чеков", "Оценка шансов на возврат", "Инструкция по шагам", "Онлайн или в офисе"],
    highlight: false,
  },
  {
    name: "Досудебная экспертиза",
    price: "от 9 900 ₽",
    desc: "Самый популярный",
    features: ["Диагностика техники", "Заключение товароведа", "Помощь в подаче заявки", "Сопровождение до возврата денег", "Срок 3–5 рабочих дней"],
    highlight: true,
  },
  {
    name: "Судебная защита",
    price: "от 20 000 ₽",
    desc: "Для спорных ситуаций",
    features: ["Полная диагностика", "Заключение для суда", "Участие эксперта в суде", "Рецензия на заключение продавца", "Срок по договорённости"],
    highlight: false,
  },
];


export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', service: '', description: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async () => {
    if (!form.name || !form.phone) return;
    setSending(true);
    await fetch(SEND_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
    setSending(false);
    setSent(true);
    setForm({ name: '', phone: '', service: '', description: '' });
  };

  useEffect(() => {
    document.title = 'Товароведческая экспертиза в Нижнем Тагиле | КУРСОР';
  }, []);

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
            className="font-golos text-xl font-semibold tracking-wide"
            style={{ color: scrolled ? "#1A1A1A" : "white" }}
          >КУРСОР</button>
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
            <Link
              to={SC_LINK}
              className="text-sm font-medium transition-colors tracking-wide border px-4 py-2"
              style={{
                color: scrolled ? "#1A1A1A" : "white",
                borderColor: scrolled ? "#D5D5D5" : "rgba(255,255,255,0.4)",
              }}
            >
              Сервисный центр
            </Link>
            <a
              href="tel:+79122997000"
              className="flex items-center gap-2 text-sm font-semibold px-4 py-2 transition-colors"
              style={{
                backgroundColor: "#1B3A6B",
                color: "white",
              }}
            >
              <Icon name="Phone" size={15} />
              Позвонить
            </a>

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
            <Link to={SC_LINK} className="text-base font-medium text-stone-700">
              Сервисный центр
            </Link>
            <button onClick={() => scrollTo("#contacts")} className="bg-stone-900 text-stone-50 text-sm font-medium px-5 py-3 text-left">
              Получить заключение
            </button>
            <a
              href="tel:+79122997000"
              className="flex items-center gap-2 text-sm font-semibold px-5 py-3"
              style={{ backgroundColor: "#1B3A6B", color: "white" }}
            >
              <Icon name="Phone" size={15} />
              Позвонить
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_IMAGE})` }} />
        <div className="absolute inset-0 bg-stone-950/65" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pt-24 pb-20">
          <div className="max-w-2xl">
            <p className="font-golos text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "#F5C518" }}>НЕЗАВИСИМАЯ ТОВАРОВЕДЧЕСКАЯ ЭКСПЕРТИЗА В НИЖНЕМ ТАГИЛЕ</p>
            <h1 className="font-golos text-5xl font-light text-white leading-tight mb-6">
              Техника сломалась —<br />
              <span className="font-semibold text-5xl" style={{ color: "#F5C518" }}>верните деньги</span>
            </h1>
            <p className="text-stone-300 text-lg leading-relaxed mb-10 max-w-lg">Судебные экспертизы. 
Официальное заключение для возврата бракованного телефона, ноутбука или бытовой техники на Ozon и Wildberries. Оценка стоимости.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollTo("#contacts")}
                className="font-semibold px-8 py-4 text-sm tracking-wide transition-colors"
                style={{ background: "#F5C518", color: "#0E0E0E" }}
              >
                Получить заключение
              </button>
              <button
                onClick={() => scrollTo("#services")}
                className="border border-white/40 text-white font-medium px-8 py-4 text-sm tracking-wide hover:border-white hover:bg-white/10 transition-colors"
              >
                Узнать об услугах
              </button>
              <a
                href="tel:+79122997000"
                className="sm:hidden flex items-center justify-center gap-2 text-sm font-semibold px-8 py-4"
                style={{ backgroundColor: "#1B3A6B", color: "white" }}
              >
                <Icon name="Phone" size={15} />
                Позвонить
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-md">
            {[{ val: "10+", label: "лет опыта" }, { val: "2 500+", label: "экспертиз" }, { val: "97%", label: "успешных возвратов" }].map((s) => (
              <div key={s.label} className="text-white border-l pl-4" style={{ borderColor: "rgba(245,197,24,0.4)" }}>
                <div className="font-golos text-3xl font-semibold" style={{ color: "#F5C518" }}>{s.val}</div>
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
            <p className="font-golos text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#C9A96E" }}>Наши услуги</p>
            <h2 className="font-golos text-4xl md:text-5xl font-light text-stone-900">Что мы проверяем</h2>
            <div className="w-16 h-px mt-5" style={{ background: "#F5C518" }} />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-stone-200">
            {services.map((s) => (
              <Link key={s.title} to={s.href} className="border-r border-b border-stone-200 p-8 hover:bg-stone-50 transition-colors group block">
                <div className="w-10 h-10 flex items-center justify-center mb-5" style={{ color: "#F5C518" }}>
                  <Icon name={s.icon} size={22} />
                </div>
                <h3 className="font-golos text-xl font-semibold text-stone-900 mb-3 group-hover:underline">{s.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#C9A96E" }}>Подробнее →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-24 bg-stone-950 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <p className="font-golos text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#F5C518" }}>Как мы работаем</p>
            <h2 className="font-golos text-4xl md:text-5xl font-light">Прозрачный процесс</h2>
            <div className="w-16 h-px mt-5" style={{ background: "#F5C518" }} />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.num}>
                <div className="font-golos text-5xl font-light mb-4" style={{ color: "rgba(245,197,24,0.3)" }}>{s.num}</div>
                <h3 className="font-golos text-xl font-semibold mb-3 text-white">{s.title}</h3>
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
            <p className="font-golos text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#F5C518" }}>Стоимость услуг</p>
            <h2 className="font-golos text-4xl md:text-5xl font-light text-stone-900">Прозрачные цены</h2>
            <p className="font-semibold mt-3 text-xl text-[#000000]" style={{ color: "#F5C518" }}>Стоимость экспертизы полностью возмещается заказчику</p>
            <div className="w-16 h-px mt-5" style={{ background: "#F5C518" }} />
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
                {p.highlight && <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "#F5C518" }} />}
                <div className="text-xs font-medium tracking-widest uppercase mb-2" style={{ color: p.highlight ? "#F5C518" : "#9A9A9A" }}>
                  {p.name}
                </div>
                <div className="font-golos text-4xl font-light mb-1" style={{ color: p.highlight ? "white" : "#1A1A1A" }}>
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
                    ? { background: "#F5C518", color: "#0E0E0E" }
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

      {/* CONTACTS */}
      <section id="contacts" className="py-24 bg-stone-950 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-golos text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#F5C518" }}>Свяжитесь с нами</p>
              <h2 className="font-golos text-4xl md:text-5xl font-light mb-6">
                Получите<br />консультацию
              </h2>
              <div className="w-16 h-px mb-8" style={{ background: "#F5C518" }} />
              <p className="text-stone-400 text-base leading-relaxed mb-10">Оставьте заявку — ответим в течение 2 часов. Первая консультация бесплатна</p>
              <div className="space-y-5">
                {[
                  { icon: "Phone", label: "+7 912-299-70-00" },
                  { icon: "Mail", label: "diegovirt@yandex.ru" },
                  { icon: "MapPin", label: "Нижний Тагил, ул. Орджоникидзе, 31" },
                  { icon: "Clock", label: "Пн–Пт: 10:00–19:00" },
                ].map((c) => (
                  <div key={c.label} className="flex items-center gap-4">
                    <div className="w-8 h-8 flex items-center justify-center" style={{ color: "#F5C518" }}>
                      <Icon name={c.icon} size={16} />
                    </div>
                    <span className="text-stone-300 text-xl">{c.label}</span>
                  </div>
                ))}
              </div>
              <a
                href="tel:+79122997000"
                className="md:hidden mt-8 flex items-center justify-center gap-2 text-sm font-semibold px-6 py-4 w-full"
                style={{ backgroundColor: "#1B3A6B", color: "white" }}
              >
                <Icon name="Phone" size={16} />
                Позвонить
              </a>
            </div>

            <div className="p-8" style={{ background: "#2A2A2A" }}>
              <h3 className="font-golos text-2xl font-semibold mb-6">Заявка на заключение</h3>
              {sent ? (
                <div className="text-center py-10">
                  <Icon name="CheckCircle" size={48} style={{ color: "#F5C518", margin: "0 auto 16px" }} />
                  <p className="text-white text-lg font-semibold mb-2">Заявка отправлена!</p>
                  <p className="text-stone-400 text-sm">Перезвоним в течение 2 часов</p>
                </div>
              ) : (
              <div className="space-y-4">
                <div>
                  <label className="text-xs text-stone-400 tracking-widest uppercase block mb-2">Имя</label>
                  <input
                    type="text"
                    placeholder="Иван Иванов"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className="w-full border text-white placeholder-stone-500 px-4 py-3 text-sm focus:outline-none transition-colors"
                    style={{ background: "#3A3A3A", borderColor: "#5A5A5A" }}
                  />
                </div>
                <div>
                  <label className="text-xs text-stone-400 tracking-widest uppercase block mb-2">Телефон</label>
                  <input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={form.phone}
                    onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    className="w-full border text-white placeholder-stone-500 px-4 py-3 text-sm focus:outline-none transition-colors"
                    style={{ background: "#3A3A3A", borderColor: "#5A5A5A" }}
                  />
                </div>
                <div>
                  <label className="text-xs text-stone-400 tracking-widest uppercase block mb-2">Вид экспертизы</label>
                  <select
                    value={form.service}
                    onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
                    className="w-full border text-stone-300 px-4 py-3 text-sm focus:outline-none transition-colors appearance-none"
                    style={{ background: "#3A3A3A", borderColor: "#5A5A5A" }}
                  >
                    <option value="">Выберите тип техники</option>
                    <option>Смартфон / планшет</option>
                    <option>Ноутбук / компьютер</option>
                    <option>Телевизор</option>
                    <option>Холодильник / стиральная машина</option>
                    <option>Другая бытовая техника</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-stone-400 tracking-widest uppercase block mb-2">Описание задачи</label>
                  <textarea
                    placeholder="Опишите проблему: что сломалось, где покупали, маркетплейс..."
                    rows={3}
                    value={form.description}
                    onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
                    className="w-full border text-white placeholder-stone-500 px-4 py-3 text-sm focus:outline-none transition-colors resize-none"
                    style={{ background: "#3A3A3A", borderColor: "#5A5A5A" }}
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  disabled={sending || !form.name || !form.phone}
                  className="w-full font-semibold py-4 text-sm tracking-wide transition-colors mt-2 disabled:opacity-50"
                  style={{ background: "#F5C518", color: "#0E0E0E" }}
                >
                  {sending ? "Отправляем..." : "Отправить заявку"}
                </button>
                <p className="text-xs text-stone-600 text-center leading-relaxed">
                  Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                </p>
              </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-stone-500 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-golos text-lg font-semibold text-stone-400">КУРСОР</div>
          <div className="text-xs tracking-wide">© 2026 Все права защищены</div>
          <div className="flex gap-6 text-xs">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Договор оферты</a>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 mt-4 pt-4 border-t border-stone-900 text-center text-xs text-stone-700">
          ИНН 662339146709 &nbsp;·&nbsp; ОГРНИП 315665800075592
        </div>
      </footer>
    </div>
  );
}