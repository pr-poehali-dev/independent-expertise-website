import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const SEND_URL = "https://functions.poehali.dev/24927a74-8007-4a64-9304-0885c2072324";
const HERO_IMAGE = "https://cdn.poehali.dev/projects/4bae9987-38e7-476d-b7ba-0a86875d56c3/files/9393708e-611d-4777-9a51-2a7e247cde8e.jpg";
const IMG_TV      = "https://cdn.poehali.dev/projects/4bae9987-38e7-476d-b7ba-0a86875d56c3/files/eb96e48f-953a-44ff-835a-400d0f316ba1.jpg";
const IMG_LAPTOP  = "https://cdn.poehali.dev/projects/4bae9987-38e7-476d-b7ba-0a86875d56c3/files/259a41c5-da0d-4f06-9b96-8cadf713cd1c.jpg";
const IMG_PC      = "https://cdn.poehali.dev/projects/4bae9987-38e7-476d-b7ba-0a86875d56c3/files/d63298cb-d288-4fd8-904a-178afb1d1fcf.jpg";
const IMG_PHONE   = "https://cdn.poehali.dev/projects/4bae9987-38e7-476d-b7ba-0a86875d56c3/files/41632bc7-7e82-48a1-8e59-8fa6a6427231.jpg";
const IMG_DIAG    = "https://cdn.poehali.dev/projects/4bae9987-38e7-476d-b7ba-0a86875d56c3/files/8777323b-3790-4724-b1bd-86224d5b0a3c.jpg";

// Корпоративная палитра
const NAVY   = "#1C3557";   // тёмно-синий (шапка, футер)
const BLUE   = "#2563AB";   // основной синий (акценты, иконки)
const ORANGE = "#E8500A";   // оранжевый (CTA-кнопки)
const LGRAY  = "#F4F6F9";   // светло-серый фон секций
const DGRAY  = "#4A5568";   // тёмно-серый текст
const WHITE  = "#FFFFFF";

const navLinks = [
  { label: "Услуги", href: "#services" },
  { label: "Как работаем", href: "#process" },
  { label: "Контакты", href: "#contacts" },
];

const directions = [
  {
    id: "tv", icon: "Tv",
    title: "Ремонт телевизоров",
    subtitle: "Samsung, LG, Sony, Philips, Hisense и другие бренды",
    image: IMG_TV,
    desc: "Телевизор — сложное устройство с десятками компонентов. Большинство поломок поддаётся ремонту. Работаем со всеми типами матриц: LCD, LED, OLED, QLED.",
    repairs: [
      { icon: "Monitor",   name: "Замена матрицы",         desc: "Треснувший или погасший экран — меняем матрицу с гарантией на запчасть и работу." },
      { icon: "Zap",       name: "Ремонт блока питания",   desc: "Телевизор не включается, горит индикатор — диагностика и замена неисправных элементов." },
      { icon: "Cpu",       name: "Ремонт главной платы",   desc: "Зависания, артефакты, нет звука — пайка main board на профессиональном оборудовании." },
      { icon: "Wifi",      name: "Ремонт Wi-Fi и Smart TV",desc: "Нет Wi-Fi, зависает интерфейс — восстанавливаем сетевые модули и прошивку." },
      { icon: "Volume2",   name: "Ремонт акустики",        desc: "Нет звука или хрипит — диагностика усилителя, динамиков, HDMI-канала." },
      { icon: "Settings",  name: "Ремонт подсветки",       desc: "Тёмный экран при рабочем изображении — замена LED-планок, восстановление инвертора." },
    ],
  },
  {
    id: "laptop", icon: "Laptop",
    title: "Ремонт ноутбуков",
    subtitle: "Asus, Lenovo, HP, Dell, Acer, Apple MacBook и другие",
    image: IMG_LAPTOP,
    desc: "Ноутбук — рабочий инструмент. Диагностику проводим в день обращения. Большинство ремонтов — 1–3 рабочих дня. Работаем с любыми брендами, включая MacBook.",
    repairs: [
      { icon: "Monitor",   name: "Замена экрана",           desc: "Треснула матрица, полосы на дисплее — подберём и установим экран под вашу модель." },
      { icon: "Keyboard",  name: "Ремонт клавиатуры",       desc: "Залили, западают клавиши, не работает тачпад — чистка, ремонт или замена." },
      { icon: "Battery",   name: "Замена аккумулятора",     desc: "Не держит заряд или не включается без кабеля — замена батареи с проверкой контроллера." },
      { icon: "Cpu",       name: "Ремонт материнской платы",desc: "Не включается, перегревается — BGA-пайка чипов, восстановление цепей питания." },
      { icon: "HardDrive", name: "Замена SSD / HDD",        desc: "Тормозит или не загружается — диагностика накопителя, замена, перенос данных." },
      { icon: "Droplets",  name: "Последствия залития",     desc: "Попала вода — срочная чистка, сушка, восстановление окислившихся контактов." },
    ],
  },
  {
    id: "pc", icon: "Monitor",
    title: "Ремонт компьютеров",
    subtitle: "Системные блоки, моноблоки, рабочие станции",
    image: IMG_PC,
    desc: "Ремонт и модернизация стационарных компьютеров любой конфигурации. Диагностируем, чистим, заменяем компоненты, собираем ПК под ваши задачи.",
    repairs: [
      { icon: "Cpu",       name: "Диагностика и ремонт",   desc: "Не включается, синий экран — полная диагностика: процессор, ОЗУ, видеокарта, БП." },
      { icon: "Wind",      name: "Чистка от пыли",         desc: "Греется и шумит — профессиональная чистка, замена термопасты, проверка охлаждения." },
      { icon: "HardDrive", name: "Замена и апгрейд",       desc: "Меняем SSD, ОЗУ, видеокарту. Перенос данных и ОС на новый накопитель." },
      { icon: "Zap",       name: "Ремонт блока питания",   desc: "БП не запускает систему — диагностика, ремонт или замена." },
      { icon: "Settings",  name: "Установка ПО",           desc: "Установка Windows, драйверов, офисных программ. Удаление вирусов." },
      { icon: "Package",   name: "Сборка под заказ",       desc: "Подберём комплектующие: игровой ПК, рабочая станция, домашний медиацентр." },
    ],
  },
  {
    id: "phone", icon: "Smartphone",
    title: "Ремонт телефонов",
    subtitle: "iPhone, Samsung, Xiaomi, Huawei, Honor и другие",
    image: IMG_PHONE,
    desc: "Замена экрана в большинстве случаев занимает 30–60 минут. Только качественные запчасти с гарантией. Работаем с любыми марками и моделями.",
    repairs: [
      { icon: "Monitor",   name: "Замена экрана",             desc: "Разбитое стекло — меняем дисплейный модуль с сохранением Face ID и Touch ID." },
      { icon: "Battery",   name: "Замена аккумулятора",       desc: "Быстро разряжается или отключается — замена батареи с проверкой контроллера." },
      { icon: "Zap",       name: "Ремонт разъёма зарядки",   desc: "Не заряжается — чистка или замена USB-C, Lightning, micro-USB." },
      { icon: "Camera",    name: "Ремонт камеры",             desc: "Размытое фото, не фокусируется — диагностика и замена камерного модуля." },
      { icon: "Droplets",  name: "Ремонт после воды",         desc: "Попал в воду — срочная разборка, чистка платы, восстановление контактов." },
      { icon: "Mic",       name: "Ремонт микрофона/динамика", desc: "Не слышно собеседника — замена разговорного/громкого динамика, микрофона." },
    ],
  },
];

const steps = [
  { num: "1", icon: "ClipboardList", title: "Приём и диагностика",  desc: "Принимаем устройство, составляем акт. Называем точную стоимость до начала ремонта." },
  { num: "2", icon: "CheckCircle",   title: "Согласование",          desc: "Согласовываем стоимость и сроки. Делаем только то, что согласовано." },
  { num: "3", icon: "Wrench",        title: "Ремонт",                desc: "Проводим ремонт на профессиональном оборудовании с качественными запчастями." },
  { num: "4", icon: "Star",          title: "Проверка и выдача",     desc: "Тестируем после ремонта. Выдаём с гарантией от 30 до 90 дней." },
];

const advantages = [
  { icon: "Award",   title: "Опыт 10+ лет",           desc: "Ремонтируем с 2014 года. Более 5 000 выполненных заказов." },
  { icon: "Shield",  title: "Гарантия на работы",      desc: "От 30 до 90 дней на все виды ремонта и запчасти." },
  { icon: "Clock",   title: "Срочный ремонт",           desc: "Большинство ремонтов выполняем в день обращения." },
  { icon: "Search",  title: "Точная диагностика",      desc: "Называем причину неисправности и стоимость до ремонта." },
  { icon: "Cpu",     title: "Профи-оборудование",      desc: "BGA-станции, осциллографы, ультразвуковые ванны." },
  { icon: "Users",   title: "Квалифицированный персонал", desc: "Каждый мастер имеет профильное образование и опыт." },
];

export default function ServiceCenter() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [activeTab, setActiveTab] = useState("tv");
  const [form, setForm] = useState({ name: "", phone: "", service: "Ремонт техники", description: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent]       = useState(false);

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
    <div className="min-h-screen font-golos" style={{ background: LGRAY, color: DGRAY }}>

      {/* ═══ NAV ═══ */}
      <nav style={{ background: NAVY }} className="fixed top-0 left-0 right-0 z-50 shadow-lg">
        {/* top bar */}
        <div className="hidden md:block border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
          <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-9">
            <div className="flex items-center gap-5 text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>
              <span className="flex items-center gap-1.5"><Icon name="MapPin" size={11} />Нижний Тагил, ул. Орджоникидзе, 31</span>
              <span className="flex items-center gap-1.5"><Icon name="Clock" size={11} />Пн–Пт: 10:00–19:00, Сб: 11:00–17:00</span>
            </div>
            <Link to="/" className="text-xs hover:underline" style={{ color: "rgba(255,255,255,0.55)" }}>← Раздел экспертизы</Link>
          </div>
        </div>
        {/* main bar */}
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14">
          <Link to="/" className="font-golos text-xl font-bold tracking-wide text-white">КУРСОР</Link>
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(l => (
              <button key={l.label} onClick={() => scrollTo(l.href)}
                className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-all rounded">
                {l.label}
              </button>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+79122997000" className="text-white font-bold text-base flex items-center gap-2">
              <Icon name="Phone" size={16} style={{ color: ORANGE }} />
              +7 912-299-70-00
            </a>
            <button onClick={() => scrollTo("#contacts")}
              className="px-5 py-2 text-sm font-bold text-white rounded transition-all hover:brightness-110"
              style={{ background: ORANGE }}>
              Записаться
            </button>
          </div>
          <button className="md:hidden p-2 text-white" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t px-6 py-4 flex flex-col gap-3" style={{ background: NAVY, borderColor: "rgba(255,255,255,0.1)" }}>
            {navLinks.map(l => (
              <button key={l.label} onClick={() => scrollTo(l.href)} className="text-left text-base text-white/80 hover:text-white py-1">{l.label}</button>
            ))}
            <Link to="/" className="text-white/60 text-sm">← Раздел экспертизы</Link>
            <button onClick={() => scrollTo("#contacts")} className="text-white font-bold py-3 rounded text-sm" style={{ background: ORANGE }}>
              Записаться на ремонт
            </button>
          </div>
        )}
      </nav>

      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden" style={{ paddingTop: scrolled ? 56 : 92, minHeight: 520 }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_IMAGE})` }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(28,53,87,0.95) 40%, rgba(28,53,87,0.6) 100%)" }} />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="inline-block text-xs font-bold uppercase tracking-widest text-white px-3 py-1 rounded mb-4" style={{ background: ORANGE }}>
              Сервисный центр · Нижний Тагил
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              Профессиональный<br />ремонт техники
            </h1>
            <p className="text-white/75 text-lg mb-8 max-w-lg">
              Телевизоры, ноутбуки, компьютеры, телефоны.<br />Гарантия на все виды работ.
            </p>
            <div className="flex flex-wrap gap-3">
              <button onClick={() => scrollTo("#contacts")}
                className="px-8 py-3 text-white font-bold text-sm rounded hover:brightness-110 transition"
                style={{ background: ORANGE }}>
                Записаться на ремонт
              </button>
              <button onClick={() => scrollTo("#services")}
                className="px-8 py-3 text-white font-semibold text-sm rounded border-2 border-white/40 hover:border-white hover:bg-white/10 transition">
                Все услуги
              </button>
            </div>
          </div>
          {/* stats card */}
          <div className="flex-shrink-0 rounded-lg shadow-2xl overflow-hidden" style={{ background: WHITE, minWidth: 240 }}>
            {[
              { val: "10+",    label: "лет на рынке",     icon: "Award" },
              { val: "5 000+", label: "выполненных работ", icon: "Wrench" },
              { val: "90 дн",  label: "гарантия",          icon: "Shield" },
            ].map((s, i) => (
              <div key={s.label} className="flex items-center gap-4 px-6 py-4" style={{ borderTop: i > 0 ? `1px solid ${LGRAY}` : "none" }}>
                <div className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0" style={{ background: LGRAY }}>
                  <Icon name={s.icon} size={20} style={{ color: BLUE }} />
                </div>
                <div>
                  <div className="text-2xl font-bold" style={{ color: NAVY }}>{s.val}</div>
                  <div className="text-xs" style={{ color: DGRAY }}>{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ADVANTAGES ═══ */}
      <section className="py-14" style={{ background: BLUE }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {advantages.map(a => (
              <div key={a.title} className="text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: "rgba(255,255,255,0.15)" }}>
                  <Icon name={a.icon} size={22} style={{ color: WHITE }} />
                </div>
                <div className="text-white font-bold text-sm mb-1">{a.title}</div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.65)" }}>{a.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section id="services" className="py-16" style={{ background: LGRAY }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2" style={{ color: NAVY }}>Что мы ремонтируем</h2>
            <div className="w-16 h-1 mx-auto rounded" style={{ background: ORANGE }} />
          </div>

          {/* Direction tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {directions.map(d => (
              <button key={d.id} onClick={() => setActiveTab(d.id)}
                className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded transition-all"
                style={activeTab === d.id
                  ? { background: NAVY, color: WHITE }
                  : { background: WHITE, color: NAVY, border: `1px solid #D1DCE8` }}>
                <Icon name={d.icon} size={16} />
                {d.title.replace("Ремонт ", "")}
              </button>
            ))}
          </div>

          {/* Active direction */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded flex items-center justify-center" style={{ background: LGRAY }}>
                    <Icon name={active.icon} size={22} style={{ color: BLUE }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold" style={{ color: NAVY }}>{active.title}</h3>
                    <p className="text-xs" style={{ color: DGRAY }}>{active.subtitle}</p>
                  </div>
                </div>
                <div className="w-10 h-0.5 mb-4 rounded" style={{ background: ORANGE }} />
                <p className="text-sm leading-relaxed mb-6" style={{ color: DGRAY }}>{active.desc}</p>
                <div className="grid gap-2">
                  {active.repairs.map(r => (
                    <div key={r.name} className="flex gap-3 p-3 rounded border" style={{ borderColor: "#E2EBF5", background: LGRAY }}>
                      <Icon name={r.icon} size={16} style={{ color: BLUE, flexShrink: 0, marginTop: 2 }} />
                      <div>
                        <div className="font-semibold text-sm" style={{ color: NAVY }}>{r.name}</div>
                        <div className="text-xs mt-0.5 leading-relaxed" style={{ color: DGRAY }}>{r.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative min-h-64">
                <img src={active.image} alt={active.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 p-5" style={{ background: "linear-gradient(to top, rgba(28,53,87,0.95), transparent)" }}>
                  <button onClick={() => scrollTo("#contacts")}
                    className="w-full py-3 text-white font-bold text-sm rounded hover:brightness-110 transition"
                    style={{ background: ORANGE }}>
                    Оставить заявку на ремонт
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ DIAG PHOTO ═══ */}
      <section className="py-16" style={{ background: WHITE }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-4 text-white" style={{ background: BLUE }}>
                Наши возможности
              </div>
              <h2 className="text-3xl font-bold mb-3" style={{ color: NAVY }}>Профессиональная диагностика и ремонт</h2>
              <div className="w-12 h-1 rounded mb-6" style={{ background: ORANGE }} />
              <div className="space-y-4">
                {[
                  { icon: "Search",  t: "Точная диагностика",        d: "Определяем причину неисправности и называем стоимость до начала ремонта." },
                  { icon: "Cpu",     t: "Профессиональное оборудование", d: "Осциллографы, BGA-станции, ультразвуковые ванны — как в современной лаборатории." },
                  { icon: "Shield",  t: "Гарантия на результат",     d: "Гарантийный талон на все виды ремонта от 30 до 90 дней." },
                  { icon: "Clock",   t: "Срочный ремонт",            d: "Большинство ремонтов выполняем в день обращения." },
                ].map(i => (
                  <div key={i.t} className="flex gap-4 items-start p-4 rounded-lg border" style={{ borderColor: "#E2EBF5" }}>
                    <div className="w-9 h-9 rounded flex items-center justify-center flex-shrink-0" style={{ background: LGRAY }}>
                      <Icon name={i.icon} size={18} style={{ color: BLUE }} />
                    </div>
                    <div>
                      <div className="font-bold text-sm mb-0.5" style={{ color: NAVY }}>{i.t}</div>
                      <div className="text-sm" style={{ color: DGRAY }}>{i.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-xl" style={{ height: 460 }}>
              <img src={IMG_DIAG} alt="Диагностика" className="w-full h-full object-cover" />
              <div className="absolute inset-0 border-4 rounded-lg" style={{ borderColor: BLUE, margin: 12, pointerEvents: "none" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section id="process" className="py-16" style={{ background: NAVY }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">Как мы работаем</h2>
            <div className="w-16 h-1 mx-auto rounded" style={{ background: ORANGE }} />
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={s.num} className="text-center relative">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-px" style={{ background: "rgba(255,255,255,0.15)" }} />
                )}
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2 relative z-10" style={{ background: BLUE, borderColor: "rgba(255,255,255,0.2)" }}>
                  <span className="text-white font-bold text-xl">{s.num}</span>
                </div>
                <h3 className="font-bold text-white mb-2">{s.title}</h3>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROMO ═══ */}
      <section style={{ background: ORANGE }} className="py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white">Запишитесь на ремонт сегодня</h3>
            <p className="text-white/80 text-sm mt-1">Узнаете причину неисправности и стоимость ремонта до начала работ</p>
          </div>
          <button onClick={() => scrollTo("#contacts")}
            className="flex-shrink-0 px-8 py-3 font-bold text-sm rounded shadow-lg hover:brightness-95 transition"
            style={{ background: WHITE, color: ORANGE }}>
            Оставить заявку
          </button>
        </div>
      </section>

      {/* ═══ CONTACTS ═══ */}
      <section id="contacts" className="py-16" style={{ background: LGRAY }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2" style={{ color: NAVY }}>Свяжитесь с нами</h2>
            <div className="w-16 h-1 mx-auto rounded" style={{ background: ORANGE }} />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Контактная информация */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="font-bold text-lg mb-6" style={{ color: NAVY }}>Контактная информация</h3>
              <div className="space-y-4">
                {[
                  { icon: "Phone",   val: "+7 912-299-70-00",               label: "Телефон" },
                  { icon: "Mail",    val: "diegovirt@yandex.ru",            label: "E-mail" },
                  { icon: "MapPin",  val: "Нижний Тагил, ул. Орджоникидзе, 31", label: "Адрес" },
                  { icon: "Clock",   val: "Пн–Пт: 10:00–19:00, Сб: 11:00–17:00", label: "Режим работы" },
                ].map(c => (
                  <div key={c.label} className="flex items-start gap-4 p-3 rounded border" style={{ borderColor: "#E2EBF5" }}>
                    <div className="w-9 h-9 rounded flex items-center justify-center flex-shrink-0" style={{ background: LGRAY }}>
                      <Icon name={c.icon} size={18} style={{ color: BLUE }} />
                    </div>
                    <div>
                      <div className="text-xs mb-0.5" style={{ color: DGRAY }}>{c.label}</div>
                      <div className="font-bold text-sm" style={{ color: NAVY }}>{c.val}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 rounded border" style={{ borderColor: "#E2EBF5", background: LGRAY }}>
                <p className="text-sm" style={{ color: DGRAY }}>
                  Также оказываем услуги{" "}
                  <Link to="/" className="font-semibold hover:underline" style={{ color: BLUE }}>
                    независимой товароведческой экспертизы
                  </Link>{" "}
                  — если продавец отказывает в возврате по гарантии.
                </p>
              </div>
            </div>

            {/* Форма */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="font-bold text-lg mb-6" style={{ color: NAVY }}>Оставить заявку</h3>
              {sent ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: LGRAY }}>
                    <Icon name="CheckCircle" size={36} style={{ color: BLUE }} />
                  </div>
                  <p className="font-bold text-lg mb-1" style={{ color: NAVY }}>Заявка отправлена!</p>
                  <p className="text-sm" style={{ color: DGRAY }}>Перезвоним в течение 2 часов</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-1" style={{ color: NAVY }}>Ваше имя</label>
                    <input type="text" placeholder="Иван Иванов" value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      className="w-full border rounded px-4 py-2.5 text-sm focus:outline-none"
                      style={{ borderColor: "#D1DCE8", color: NAVY }} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1" style={{ color: NAVY }}>Телефон</label>
                    <input type="tel" placeholder="+7 (___) ___-__-__" value={form.phone}
                      onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                      className="w-full border rounded px-4 py-2.5 text-sm focus:outline-none"
                      style={{ borderColor: "#D1DCE8", color: NAVY }} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1" style={{ color: NAVY }}>Устройство и проблема</label>
                    <textarea placeholder="Например: iPhone 13, разбит экран..." rows={3} value={form.description}
                      onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
                      className="w-full border rounded px-4 py-2.5 text-sm focus:outline-none resize-none"
                      style={{ borderColor: "#D1DCE8", color: NAVY }} />
                  </div>
                  <button onClick={handleSubmit} disabled={sending || !form.name || !form.phone}
                    className="w-full py-3 text-white font-bold text-sm rounded hover:brightness-110 transition disabled:opacity-50"
                    style={{ background: ORANGE }}>
                    {sending ? "Отправляем..." : "Отправить заявку"}
                  </button>
                  <p className="text-xs text-center" style={{ color: DGRAY }}>Перезвоним в течение 2 часов в рабочее время</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer style={{ background: NAVY }} className="py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-bold text-lg text-white">КУРСОР <span className="text-sm font-normal" style={{ color: "rgba(255,255,255,0.5)" }}>— Сервисный центр</span></div>
          <div className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>© 2026 Все права защищены</div>
          <Link to="/" className="text-sm hover:text-white transition" style={{ color: "rgba(255,255,255,0.5)" }}>← На главную</Link>
        </div>
        <div className="max-w-6xl mx-auto px-6 mt-4 pt-4 text-center text-xs" style={{ borderTop: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.3)" }}>
          ИНН 662339146709 &nbsp;·&nbsp; ОГРНИП 315665800075592
        </div>
      </footer>
    </div>
  );
}
