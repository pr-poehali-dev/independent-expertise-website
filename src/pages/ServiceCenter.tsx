import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const SEND_URL = "https://functions.poehali.dev/24927a74-8007-4a64-9304-0885c2072324";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/4bae9987-38e7-476d-b7ba-0a86875d56c3/files/9393708e-611d-4777-9a51-2a7e247cde8e.jpg";

const IMG_WORKSHOP = "https://cdn.poehali.dev/projects/4bae9987-38e7-476d-b7ba-0a86875d56c3/files/ea7b1c2b-41a6-4ccc-9865-94f884dcb806.jpg";
const IMG_TV = "https://cdn.poehali.dev/projects/4bae9987-38e7-476d-b7ba-0a86875d56c3/files/eb96e48f-953a-44ff-835a-400d0f316ba1.jpg";
const IMG_LAPTOP = "https://cdn.poehali.dev/projects/4bae9987-38e7-476d-b7ba-0a86875d56c3/files/259a41c5-da0d-4f06-9b96-8cadf713cd1c.jpg";
const IMG_PC = "https://cdn.poehali.dev/projects/4bae9987-38e7-476d-b7ba-0a86875d56c3/files/d63298cb-d288-4fd8-904a-178afb1d1fcf.jpg";
const IMG_PHONE = "https://cdn.poehali.dev/projects/4bae9987-38e7-476d-b7ba-0a86875d56c3/files/41632bc7-7e82-48a1-8e59-8fa6a6427231.jpg";
const IMG_DIAG = "https://cdn.poehali.dev/projects/4bae9987-38e7-476d-b7ba-0a86875d56c3/files/8777323b-3790-4724-b1bd-86224d5b0a3c.jpg";

// Цветовая схема сервисного центра
const C = {
  accent: "#1B6FC8",       // основной синий
  accentLight: "#E8F1FB",  // светло-голубой фон
  accentMid: "#2D82E0",    // синий средний
  accentDark: "#0F4A8A",   // тёмно-синий
  text: "#1A2B3C",
};

const navLinks = [
  { label: "Услуги", href: "#services" },
  { label: "Процесс", href: "#process" },
  { label: "Контакты", href: "#contacts" },
];

const directions = [
  {
    id: "tv",
    icon: "Tv",
    title: "Ремонт телевизоров",
    subtitle: "Samsung, LG, Sony, Philips, Hisense и другие бренды",
    image: IMG_TV,
    desc: "Телевизор — это сложное устройство с десятками компонентов. Большинство поломок поддаётся ремонту, и мы восстанавливаем их быстро и качественно. Работаем со всеми типами матриц: LCD, LED, OLED, QLED.",
    repairs: [
      { icon: "Monitor", name: "Замена матрицы", desc: "Треснувший или погасший экран — меняем матрицу с гарантией на запчасть и работу." },
      { icon: "Zap", name: "Ремонт блока питания", desc: "Телевизор не включается, горит индикатор — чаще всего проблема в БП. Диагностика и замена неисправных элементов." },
      { icon: "Cpu", name: "Ремонт главной платы", desc: "Зависания, артефакты на экране, нет звука — диагностика и пайка main board на профессиональном оборудовании." },
      { icon: "Wifi", name: "Ремонт Wi-Fi и Smart TV", desc: "Не работает Smart TV, нет Wi-Fi, зависает интерфейс — восстанавливаем сетевые модули и прошивку." },
      { icon: "Volume2", name: "Ремонт акустики", desc: "Нет звука или хрипит — диагностика усилителя, динамиков, HDMI-канала звука." },
      { icon: "Settings", name: "Ремонт подсветки", desc: "Тёмный экран при рабочем изображении — замена LED-планок подсветки, восстановление инвертора." },
    ],
  },
  {
    id: "laptop",
    icon: "Laptop",
    title: "Ремонт ноутбуков",
    subtitle: "Asus, Lenovo, HP, Dell, Acer, Apple MacBook и другие",
    image: IMG_LAPTOP,
    desc: "Ноутбук — рабочий инструмент, и каждый день простоя на счету. Диагностику проводим в день обращения. Большинство ремонтов — в течение 1–3 рабочих дней. Работаем с любыми брендами и моделями, включая MacBook.",
    repairs: [
      { icon: "Monitor", name: "Замена экрана", desc: "Треснула матрица, не работает подсветка, полосы на дисплее — подберём и установим экран под вашу модель." },
      { icon: "Keyboard", name: "Ремонт клавиатуры", desc: "Залили жидкость, западают клавиши, не работает тачпад — чистка, ремонт или замена." },
      { icon: "Battery", name: "Замена аккумулятора", desc: "Ноутбук не держит заряд или не включается без кабеля — замена батареи с проверкой контроллера заряда." },
      { icon: "Cpu", name: "Ремонт материнской платы", desc: "Не включается, перегревается, нет изображения — BGA-пайка чипов, восстановление цепей питания." },
      { icon: "HardDrive", name: "Замена SSD / HDD", desc: "Ноутбук тормозит или не загружается — диагностика накопителя, замена, перенос данных." },
      { icon: "Droplets", name: "Последствия залития", desc: "Попала вода или другая жидкость — срочная чистка, сушка, восстановление окислившихся контактов." },
    ],
  },
  {
    id: "pc",
    icon: "Monitor",
    title: "Ремонт компьютеров",
    subtitle: "Системные блоки, моноблоки, рабочие станции",
    image: IMG_PC,
    desc: "Ремонт и модернизация стационарных компьютеров любой конфигурации. Диагностируем, чистим, заменяем компоненты и собираем ПК под ваши задачи. Работаем с офисными машинами и игровыми станциями.",
    repairs: [
      { icon: "Cpu", name: "Диагностика и ремонт", desc: "Не включается, перезагружается, синий экран — полная диагностика всех компонентов: процессор, ОЗУ, видеокарта, БП." },
      { icon: "Wind", name: "Чистка от пыли", desc: "Компьютер греется и шумит — профессиональная чистка, замена термопасты, проверка системы охлаждения." },
      { icon: "HardDrive", name: "Замена и апгрейд", desc: "Меняем и добавляем SSD, ОЗУ, видеокарту. Перенос данных и ОС на новый накопитель." },
      { icon: "Zap", name: "Ремонт блока питания", desc: "БП не запускает систему или нестабильно работает — диагностика, ремонт или замена." },
      { icon: "Settings", name: "Установка ПО", desc: "Установка Windows, драйверов, офисных программ. Удаление вирусов, настройка системы." },
      { icon: "Package", name: "Сборка под заказ", desc: "Подберём комплектующие под ваш бюджет и задачи — игровой ПК, рабочая станция, домашний медиацентр." },
    ],
  },
  {
    id: "phone",
    icon: "Smartphone",
    title: "Ремонт телефонов",
    subtitle: "iPhone, Samsung, Xiaomi, Huawei, Honor и другие",
    image: IMG_PHONE,
    desc: "Телефон — это связь, работа, навигация. Ремонтируем быстро: замена экрана в большинстве случаев занимает 30–60 минут. Используем только качественные запчасти с гарантией. Работаем с любыми марками и моделями.",
    repairs: [
      { icon: "Monitor", name: "Замена экрана", desc: "Разбитое стекло или тачскрин — меняем дисплейный модуль с сохранением функций Face ID и Touch ID." },
      { icon: "Battery", name: "Замена аккумулятора", desc: "Телефон быстро разряжается или отключается — замена батареи с проверкой контроллера заряда." },
      { icon: "Zap", name: "Ремонт разъёма зарядки", desc: "Не заряжается или зарядка прерывается — чистка или замена разъёма USB-C, Lightning, micro-USB." },
      { icon: "Camera", name: "Ремонт камеры", desc: "Размытое фото, чёрный экран камеры, не фокусируется — диагностика и замена камерного модуля." },
      { icon: "Droplets", name: "Ремонт после воды", desc: "Попал в воду — срочная разборка, чистка платы, сушка, восстановление окислившихся контактов." },
      { icon: "Mic", name: "Ремонт микрофона и динамика", desc: "Не слышно собеседника, плохо слышат вас — диагностика и замена разговорного/громкого динамика, микрофона." },
    ],
  },
];

const steps = [
  { num: "01", title: "Приём и диагностика", desc: "Принимаем устройство, составляем акт. Диагностика — бесплатно. Называем точную стоимость до начала ремонта." },
  { num: "02", title: "Согласование", desc: "Согласовываем стоимость и сроки. Ничего лишнего — делаем только то, что согласовано." },
  { num: "03", title: "Ремонт", desc: "Проводим ремонт на профессиональном оборудовании с использованием качественных запчастей." },
  { num: "04", title: "Проверка и выдача", desc: "Тестируем устройство после ремонта. Выдаём с гарантией на работу и запчасти от 30 до 90 дней." },
];

export default function ServiceCenter() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("tv");
  const [form, setForm] = useState({ name: "", phone: "", service: "Ремонт техники", description: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    window.scrollTo(0, 0);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async () => {
    if (!form.name || !form.phone) return;
    setSending(true);
    await fetch(SEND_URL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    setSending(false);
    setSent(true);
    setForm({ name: "", phone: "", service: "Ремонт техники", description: "" });
  };

  const active = directions.find(d => d.id === activeTab)!;

  return (
    <div className="min-h-screen font-golos" style={{ background: "#F0F6FF", color: C.text }}>

      {/* NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-blue-100" : "bg-transparent"}`}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <Link to="/" className="font-golos text-xl font-semibold tracking-wide" style={{ color: scrolled ? C.accentDark : "white" }}>КУРСОР</Link>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(l => (
              <button key={l.label} onClick={() => scrollTo(l.href)}
                className="text-sm font-medium transition-colors tracking-wide"
                style={{ color: scrolled ? "#4A6080" : "rgba(255,255,255,0.9)" }}>
                {l.label}
              </button>
            ))}
            <Link to="/" className="text-sm font-medium transition-colors"
              style={{ color: scrolled ? "#4A6080" : "rgba(255,255,255,0.9)" }}>
              Экспертиза
            </Link>
            <button onClick={() => scrollTo("#contacts")}
              className="text-sm font-semibold px-5 py-2 transition-colors text-white"
              style={{ background: C.accent }}>
              Записаться на ремонт
            </button>
          </div>
          <button className="md:hidden p-2" style={{ color: scrolled ? C.accentDark : "white" }} onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-blue-100 px-6 py-4 flex flex-col gap-4">
            {navLinks.map(l => (
              <button key={l.label} onClick={() => scrollTo(l.href)} className="text-left text-base font-medium" style={{ color: C.text }}>{l.label}</button>
            ))}
            <Link to="/" className="text-base font-medium" style={{ color: C.text }}>← Экспертиза</Link>
            <button onClick={() => scrollTo("#contacts")} className="text-sm font-semibold px-5 py-3 text-left text-white" style={{ background: C.accent }}>
              Записаться на ремонт
            </button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_IMAGE})` }} />
        <div className="absolute inset-0" style={{ background: "rgba(4, 20, 55, 0.88)" }} />
        {/* синяя вертикальная полоса-акцент */}
        <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: C.accent }} />
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pt-24 pb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6" style={{ background: C.accent }}>
              <Icon name="Wrench" size={12} style={{ color: "white" }} />
              <p className="font-golos text-xs font-bold tracking-widest uppercase text-white">СЕРВИСНЫЙ ЦЕНТР · НИЖНИЙ ТАГИЛ</p>
            </div>
            <h1 className="font-golos text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
              Профессиональный<br />
              <span style={{ color: "#5BB8FF" }}>ремонт техники</span>
            </h1>
            <div className="w-16 h-1 mb-6" style={{ background: C.accent }} />
            <p className="text-white text-lg leading-relaxed mb-10 max-w-lg" style={{ opacity: 0.85 }}>
              Ремонт телевизоров, ноутбуков, компьютеров и телефонов.<br />
              <span className="font-semibold text-white"></span> Гарантия на все виды работ.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => scrollTo("#contacts")}
                className="font-bold px-8 py-4 text-sm tracking-widest uppercase text-white transition-all hover:opacity-90"
                style={{ background: C.accent }}>
                Записаться на ремонт
              </button>
              <button onClick={() => scrollTo("#services")}
                className="font-semibold text-white px-8 py-4 text-sm tracking-wide transition-all hover:bg-white/10"
                style={{ border: "2px solid white" }}>
                Все услуги →
              </button>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-3 gap-0 max-w-lg">
            {[{ val: "10+", label: "лет опыта" }, { val: "5 000+", label: "ремонтов" }, { val: "90 дней", label: "гарантия" }].map((s, i) => (
              <div key={s.label} className="px-6 py-4" style={{
                borderLeft: i > 0 ? "1px solid rgba(91,184,255,0.3)" : "none",
                background: "rgba(27,111,200,0.18)"
              }}>
                <div className="font-golos text-3xl font-bold" style={{ color: "#5BB8FF" }}>{s.val}</div>
                <div className="text-xs text-white mt-1 uppercase tracking-wide" style={{ opacity: 0.7 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKSHOP PHOTO */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img src={IMG_WORKSHOP} alt="Сервисный центр" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center" style={{ background: "rgba(11,45,100,0.60)" }}>
          <div className="text-center text-white">
            <p className="text-sm tracking-widest uppercase mb-2 text-blue-300">наш сервисный центр</p>
            <h2 className="font-golos text-3xl font-light">Профессиональное оборудование — точный результат</h2>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <p className="font-golos text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: C.accent }}>Направления ремонта</p>
            <h2 className="font-golos text-4xl md:text-5xl font-light" style={{ color: C.text }}>Что мы ремонтируем</h2>
            <div className="w-16 h-px mt-5" style={{ background: C.accent }} />
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-12">
            {directions.map(d => (
              <button key={d.id} onClick={() => setActiveTab(d.id)}
                className="flex items-center gap-2 px-5 py-3 text-sm font-medium transition-all"
                style={activeTab === d.id
                  ? { background: C.accent, color: "white" }
                  : { background: C.accentLight, color: C.accent, border: `1px solid #B8D4F0` }}>
                <Icon name={d.icon} size={16} />
                {d.title.replace("Ремонт ", "")}
              </button>
            ))}
          </div>

          {/* Active direction */}
          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div style={{ color: C.accent }}><Icon name={active.icon} size={28} /></div>
                <div>
                  <h3 className="font-golos text-3xl font-light" style={{ color: C.text }}>{active.title}</h3>
                  <p className="text-sm mt-1" style={{ color: "#6A8AAA" }}>{active.subtitle}</p>
                </div>
              </div>
              <div className="w-12 h-px mb-6" style={{ background: C.accent }} />
              <p className="leading-relaxed mb-8" style={{ color: "#4A6080" }}>{active.desc}</p>
              <div className="grid gap-3">
                {active.repairs.map(r => (
                  <div key={r.name} className="flex gap-4 p-4 border rounded-none" style={{ background: C.accentLight, borderColor: "#C8DDF5" }}>
                    <div className="flex-shrink-0 mt-1" style={{ color: C.accent }}><Icon name={r.icon} size={18} /></div>
                    <div>
                      <div className="font-semibold text-sm mb-1" style={{ color: C.text }}>{r.name}</div>
                      <div className="text-sm leading-relaxed" style={{ color: "#4A6080" }}>{r.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src={active.image} alt={active.title} className="w-full object-cover" style={{ height: 480 }} />
              <div className="absolute bottom-0 left-0 right-0 p-6" style={{ background: "linear-gradient(to top, rgba(11,45,100,0.92), transparent)" }}>
                <div className="flex items-center gap-2 text-white mb-2">
                  <Icon name="CheckCircle" size={16} style={{ color: "#7EC8FF" }} />
                  <span className="text-sm">Гарантия на работу и запчасти</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <Icon name="CheckCircle" size={16} style={{ color: "#7EC8FF" }} />
                  <span className="text-sm">Бесплатная диагностика</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIAGNOSTICS */}
      <section className="py-24" style={{ background: C.accentDark }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-blue-300">Профессиональная диагностика</p>
              <h2 className="font-golos text-4xl font-light text-white mb-6">Точная диагностика — залог правильного ремонта</h2>
              <div className="w-12 h-px mb-8" style={{ background: "#7EC8FF" }} />
              <div className="space-y-5">
                {[
                  { icon: "Search", t: "Бесплатная диагностика", d: "Принимаем устройство и проводим полную диагностику бесплатно. Называем точную причину неисправности." },
                  { icon: "Cpu", t: "Профессиональное оборудование", d: "Осциллографы, мультиметры, BGA-станции, ультразвуковые ванны — работаем как в современной лаборатории." },
                  { icon: "Shield", t: "Гарантия на результат", d: "На все виды ремонта выдаём гарантийный талон. От 30 до 90 дней в зависимости от вида работ." },
                  { icon: "Clock", t: "Срочный ремонт", d: "Большинство ремонтов выполняем в день обращения или на следующий день. Без долгих ожиданий." },
                ].map(i => (
                  <div key={i.t} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border" style={{ borderColor: "#7EC8FF", color: "#7EC8FF" }}>
                      <Icon name={i.icon} size={18} />
                    </div>
                    <div>
                      <div className="font-semibold text-white mb-1">{i.t}</div>
                      <div className="text-sm leading-relaxed text-blue-200">{i.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src={IMG_DIAG} alt="Диагностика" className="w-full object-cover" style={{ height: 480 }} />
              <div className="absolute inset-0 border-2" style={{ borderColor: "#7EC8FF", margin: "16px", pointerEvents: "none" }} />
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-24" style={{ background: C.accentLight }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <p className="font-golos text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: C.accent }}>Как мы работаем</p>
            <h2 className="font-golos text-4xl md:text-5xl font-light" style={{ color: C.text }}>Прозрачный процесс</h2>
            <div className="w-16 h-px mt-5" style={{ background: C.accent }} />
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map(s => (
              <div key={s.num} className="relative">
                <div className="text-6xl font-light mb-4" style={{ color: C.accent, opacity: 0.25 }}>{s.num}</div>
                <h3 className="font-golos text-lg font-semibold mb-2" style={{ color: C.text }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#4A6080" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROMO BANNER */}
      <section className="py-12 px-6" style={{ background: C.accent }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-golos text-2xl font-semibold text-white">Диагностика — бесплатно</h3>
            <p className="text-blue-100 text-sm mt-1">Приносите технику сегодня — узнаете причину неисправности и стоимость ремонта без каких-либо обязательств</p>
          </div>
          <button onClick={() => scrollTo("#contacts")}
            className="flex-shrink-0 font-semibold px-8 py-4 text-sm tracking-wide transition-colors"
            style={{ background: "white", color: C.accent }}>
            Записаться
          </button>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 text-white" style={{ background: C.accentDark }}>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-blue-300">Записаться на ремонт</p>
            <h2 className="font-golos text-4xl font-light mb-4">Свяжитесь с нами</h2>
            <div className="w-12 h-px mb-8" style={{ background: "#7EC8FF" }} />
            <div className="space-y-4 text-sm text-blue-200 mb-10">
              <div className="flex items-center gap-3"><Icon name="Phone" size={14} style={{ color: "#7EC8FF" }} />+7 912-299-70-00</div>
              <div className="flex items-center gap-3"><Icon name="Mail" size={14} style={{ color: "#7EC8FF" }} />diegovirt@yandex.ru</div>
              <div className="flex items-center gap-3"><Icon name="MapPin" size={14} style={{ color: "#7EC8FF" }} />Нижний Тагил, ул. Орджоникидзе, 31</div>
              <div className="flex items-center gap-3"><Icon name="Clock" size={14} style={{ color: "#7EC8FF" }} />Пн–Пт: 10:00–19:00, Сб: 11:00–17:00</div>
            </div>
            <div className="p-6 border border-blue-800">
              <p className="text-sm text-blue-200 leading-relaxed">
                Также оказываем услуги <Link to="/" className="underline hover:text-white transition-colors" style={{ color: "#7EC8FF" }}>независимой товароведческой экспертизы</Link> — если техника сломалась по гарантии и продавец отказывает в возврате.
              </p>
            </div>
          </div>
          <div className="p-8" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(126,200,255,0.2)" }}>
            {sent ? (
              <div className="text-center py-8">
                <Icon name="CheckCircle" size={48} style={{ color: "#7EC8FF", margin: "0 auto 16px" }} />
                <p className="text-white text-lg font-semibold mb-2">Заявка отправлена!</p>
                <p className="text-blue-200 text-sm">Перезвоним в течение 2 часов</p>
              </div>
            ) : (
              <div className="space-y-4">
                <h3 className="text-white font-semibold mb-4">Оставить заявку</h3>
                <div>
                  <label className="text-xs text-blue-300 tracking-widest uppercase block mb-2">Имя</label>
                  <input type="text" placeholder="Иван Иванов" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className="w-full text-white placeholder-blue-400 px-4 py-3 text-sm focus:outline-none"
                    style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(126,200,255,0.3)" }} />
                </div>
                <div>
                  <label className="text-xs text-blue-300 tracking-widest uppercase block mb-2">Телефон</label>
                  <input type="tel" placeholder="+7 (___) ___-__-__" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    className="w-full text-white placeholder-blue-400 px-4 py-3 text-sm focus:outline-none"
                    style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(126,200,255,0.3)" }} />
                </div>
                <div>
                  <label className="text-xs text-blue-300 tracking-widest uppercase block mb-2">Устройство и проблема</label>
                  <textarea placeholder="Например: iPhone 13, разбит экран..." rows={3} value={form.description}
                    onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
                    className="w-full text-white placeholder-blue-400 px-4 py-3 text-sm focus:outline-none resize-none"
                    style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(126,200,255,0.3)" }} />
                </div>
                <button onClick={handleSubmit} disabled={sending || !form.name || !form.phone}
                  className="w-full font-semibold py-4 text-sm tracking-wide text-white transition-colors disabled:opacity-50"
                  style={{ background: C.accent }}>
                  {sending ? "Отправляем..." : "Отправить заявку"}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8" style={{ background: "#071E3D", color: "#6A8AAA" }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-golos text-lg font-semibold text-blue-300">КУРСОР</div>
          <div className="text-xs tracking-wide">© 2026 Сервисный центр. Все права защищены</div>
          <Link to="/" className="text-xs hover:text-white transition-colors">← На главную</Link>
        </div>
        <div className="max-w-6xl mx-auto px-6 mt-4 pt-4 text-center text-xs" style={{ borderTop: "1px solid #0F2E50" }}>
          ИНН 662339146709 &nbsp;·&nbsp; ОГРНИП 315665800075592
        </div>
      </footer>
    </div>
  );
}