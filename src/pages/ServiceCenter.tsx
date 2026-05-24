import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const SEND_URL = "https://functions.poehali.dev/24927a74-8007-4a64-9304-0885c2072324";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/4bae9987-38e7-476d-b7ba-0a86875d56c3/files/1f3c8d88-a3c0-43f8-aa0c-1040344f33a4.jpg";

const IMG_WORKSHOP = "https://cdn.poehali.dev/projects/4bae9987-38e7-476d-b7ba-0a86875d56c3/files/ea7b1c2b-41a6-4ccc-9865-94f884dcb806.jpg";
const IMG_TV = "https://cdn.poehali.dev/projects/4bae9987-38e7-476d-b7ba-0a86875d56c3/files/eb96e48f-953a-44ff-835a-400d0f316ba1.jpg";
const IMG_LAPTOP = "https://cdn.poehali.dev/projects/4bae9987-38e7-476d-b7ba-0a86875d56c3/files/259a41c5-da0d-4f06-9b96-8cadf713cd1c.jpg";
const IMG_PC = "https://cdn.poehali.dev/projects/4bae9987-38e7-476d-b7ba-0a86875d56c3/files/d63298cb-d288-4fd8-904a-178afb1d1fcf.jpg";
const IMG_PHONE = "https://cdn.poehali.dev/projects/4bae9987-38e7-476d-b7ba-0a86875d56c3/files/41632bc7-7e82-48a1-8e59-8fa6a6427231.jpg";
const IMG_DIAG = "https://cdn.poehali.dev/projects/4bae9987-38e7-476d-b7ba-0a86875d56c3/files/8777323b-3790-4724-b1bd-86224d5b0a3c.jpg";

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
    <div className="bg-stone-50 text-stone-900 font-golos min-h-screen">

      {/* NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/95 backdrop-blur-sm border-b border-stone-200 shadow-sm" : "bg-transparent"}`}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <Link to="/" className="font-golos text-xl font-semibold tracking-wide" style={{ color: scrolled ? "#1A1A1A" : "white" }}>КУРСОР</Link>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(l => (
              <button key={l.label} onClick={() => scrollTo(l.href)}
                className="text-sm font-medium transition-colors tracking-wide"
                style={{ color: scrolled ? "#5A5A5A" : "rgba(255,255,255,0.85)" }}>
                {l.label}
              </button>
            ))}
            <Link to="/" className="text-sm font-medium transition-colors" style={{ color: scrolled ? "#5A5A5A" : "rgba(255,255,255,0.85)" }}>
              Экспертиза
            </Link>
            <button onClick={() => scrollTo("#contacts")}
              className="text-sm font-medium px-5 py-2 transition-colors"
              style={{ background: scrolled ? "#1A1A1A" : "#F5C518", color: scrolled ? "#FAFAFA" : "#1A1A1A" }}>
              Записаться на ремонт
            </button>
          </div>
          <button className="md:hidden p-2" style={{ color: scrolled ? "#3A3A3A" : "white" }} onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-stone-200 px-6 py-4 flex flex-col gap-4">
            {navLinks.map(l => (
              <button key={l.label} onClick={() => scrollTo(l.href)} className="text-left text-base font-medium text-stone-700">{l.label}</button>
            ))}
            <Link to="/" className="text-base font-medium text-stone-700">← Экспертиза</Link>
            <button onClick={() => scrollTo("#contacts")} className="bg-stone-900 text-stone-50 text-sm font-medium px-5 py-3 text-left">
              Записаться на ремонт
            </button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_IMAGE})` }} />
        <div className="absolute inset-0 bg-stone-950/70" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pt-24 pb-20">
          <div className="max-w-2xl">
            <p className="font-golos text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "#F5C518" }}>СЕРВИСНЫЙ ЦЕНТР В НИЖНЕМ ТАГИЛЕ</p>
            <h1 className="font-golos text-5xl font-light text-white leading-tight mb-6">
              Профессиональный<br />
              <span className="font-semibold text-5xl" style={{ color: "#F5C518" }}>ремонт техники</span>
            </h1>
            <p className="text-stone-300 text-lg leading-relaxed mb-10 max-w-lg">
              Ремонт телевизоров, ноутбуков, компьютеров и телефонов. Диагностика бесплатно. Гарантия на все виды работ.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => scrollTo("#contacts")}
                className="font-semibold px-8 py-4 text-sm tracking-wide transition-colors"
                style={{ background: "#F5C518", color: "#0E0E0E" }}>
                Записаться на ремонт
              </button>
              <button onClick={() => scrollTo("#services")}
                className="border border-white/40 text-white font-medium px-8 py-4 text-sm tracking-wide hover:border-white hover:bg-white/10 transition-colors">
                Все услуги
              </button>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-md">
            {[{ val: "10+", label: "лет опыта" }, { val: "5 000+", label: "ремонтов" }, { val: "90 дней", label: "гарантия" }].map(s => (
              <div key={s.label} className="text-white border-l pl-4" style={{ borderColor: "rgba(245,197,24,0.4)" }}>
                <div className="font-golos text-3xl font-semibold" style={{ color: "#F5C518" }}>{s.val}</div>
                <div className="text-xs text-stone-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKSHOP PHOTO */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img src={IMG_WORKSHOP} alt="Сервисный центр" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-stone-950/50 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="text-sm tracking-widest uppercase mb-2" style={{ color: "#F5C518" }}>наш сервисный центр</p>
            <h2 className="font-golos text-3xl font-light">Профессиональное оборудование — точный результат</h2>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <p className="font-golos text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#C9A96E" }}>Направления ремонта</p>
            <h2 className="font-golos text-4xl md:text-5xl font-light text-stone-900">Что мы ремонтируем</h2>
            <div className="w-16 h-px mt-5" style={{ background: "#F5C518" }} />
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-12">
            {directions.map(d => (
              <button key={d.id} onClick={() => setActiveTab(d.id)}
                className="flex items-center gap-2 px-5 py-3 text-sm font-medium transition-all"
                style={activeTab === d.id
                  ? { background: "#1A1A1A", color: "white" }
                  : { background: "#F5F5F0", color: "#5A5A5A", border: "1px solid #E5E5E5" }}>
                <Icon name={d.icon} size={16} />
                {d.title.replace("Ремонт ", "")}
              </button>
            ))}
          </div>

          {/* Active direction content */}
          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div style={{ color: "#F5C518" }}><Icon name={active.icon} size={28} /></div>
                <div>
                  <h3 className="font-golos text-3xl font-light text-stone-900">{active.title}</h3>
                  <p className="text-sm text-stone-400 mt-1">{active.subtitle}</p>
                </div>
              </div>
              <div className="w-12 h-px mb-6" style={{ background: "#F5C518" }} />
              <p className="text-stone-600 leading-relaxed mb-8">{active.desc}</p>
              <div className="grid gap-4">
                {active.repairs.map(r => (
                  <div key={r.name} className="flex gap-4 p-4 border border-stone-100 bg-stone-50">
                    <div className="flex-shrink-0 mt-1" style={{ color: "#F5C518" }}><Icon name={r.icon} size={18} /></div>
                    <div>
                      <div className="font-semibold text-stone-900 text-sm mb-1">{r.name}</div>
                      <div className="text-stone-500 text-sm leading-relaxed">{r.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src={active.image} alt={active.title} className="w-full object-cover" style={{ height: 480 }} />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-stone-950/90 to-transparent">
                <div className="flex items-center gap-2 text-white">
                  <Icon name="CheckCircle" size={16} style={{ color: "#F5C518" }} />
                  <span className="text-sm">Гарантия на работу и запчасти</span>
                </div>
                <div className="flex items-center gap-2 text-white mt-2">
                  <Icon name="CheckCircle" size={16} style={{ color: "#F5C518" }} />
                  <span className="text-sm">Бесплатная диагностика</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIAGNOSTICS PHOTO SECTION */}
      <section className="py-24 bg-stone-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "#F5C518" }}>Профессиональная диагностика</p>
              <h2 className="font-golos text-4xl font-light text-white mb-6">Точная диагностика — залог правильного ремонта</h2>
              <div className="w-12 h-px mb-8" style={{ background: "#F5C518" }} />
              <div className="space-y-5">
                {[
                  { icon: "Search", t: "Бесплатная диагностика", d: "Принимаем устройство и проводим полную диагностику бесплатно. Называем точную причину неисправности." },
                  { icon: "Cpu", t: "Профессиональное оборудование", d: "Осциллографы, мультиметры, BGA-станции, ультразвуковые ванны — работаем как в современной лаборатории." },
                  { icon: "Shield", t: "Гарантия на результат", d: "На все виды ремонта выдаём гарантийный талон. От 30 до 90 дней в зависимости от вида работ." },
                  { icon: "Clock", t: "Срочный ремонт", d: "Большинство ремонтов выполняем в день обращения или на следующий день. Без долгих ожиданий." },
                ].map(i => (
                  <div key={i.t} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border" style={{ borderColor: "#F5C518", color: "#F5C518" }}>
                      <Icon name={i.icon} size={18} />
                    </div>
                    <div>
                      <div className="font-semibold text-white mb-1">{i.t}</div>
                      <div className="text-stone-400 text-sm leading-relaxed">{i.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src={IMG_DIAG} alt="Диагностика" className="w-full object-cover" style={{ height: 480 }} />
              <div className="absolute top-0 left-0 right-0 bottom-0 border-2" style={{ borderColor: "#F5C518", margin: "16px", pointerEvents: "none" }} />
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-24 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <p className="font-golos text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#C9A96E" }}>Как мы работаем</p>
            <h2 className="font-golos text-4xl md:text-5xl font-light text-stone-900">Прозрачный процесс</h2>
            <div className="w-16 h-px mt-5" style={{ background: "#F5C518" }} />
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map(s => (
              <div key={s.num} className="relative">
                <div className="text-6xl font-light mb-4" style={{ color: "#F5C518", opacity: 0.3 }}>{s.num}</div>
                <h3 className="font-golos text-lg font-semibold text-stone-900 mb-2">{s.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROMO BANNER */}
      <section className="py-12 px-6" style={{ background: "#F5C518" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-golos text-2xl font-semibold text-stone-900">Диагностика — бесплатно</h3>
            <p className="text-stone-800 text-sm mt-1">Приносите технику сегодня — узнаете причину неисправности и стоимость ремонта без каких-либо обязательств</p>
          </div>
          <button onClick={() => scrollTo("#contacts")}
            className="flex-shrink-0 bg-stone-900 text-white font-semibold px-8 py-4 text-sm tracking-wide">
            Записаться
          </button>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 bg-stone-950 text-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "#F5C518" }}>Записаться на ремонт</p>
            <h2 className="font-golos text-4xl font-light mb-4">Свяжитесь с нами</h2>
            <div className="w-12 h-px mb-8" style={{ background: "#F5C518" }} />
            <div className="space-y-4 text-sm text-stone-400 mb-10">
              <div className="flex items-center gap-3"><Icon name="Phone" size={14} style={{ color: "#F5C518" }} />+7 912-299-70-00</div>
              <div className="flex items-center gap-3"><Icon name="Mail" size={14} style={{ color: "#F5C518" }} />diegovirt@yandex.ru</div>
              <div className="flex items-center gap-3"><Icon name="MapPin" size={14} style={{ color: "#F5C518" }} />Нижний Тагил, ул. Орджоникидзе, 31</div>
              <div className="flex items-center gap-3"><Icon name="Clock" size={14} style={{ color: "#F5C518" }} />Пн–Пт: 10:00–19:00, Сб: 11:00–17:00</div>
            </div>
            <div className="p-6 border border-stone-800">
              <p className="text-sm text-stone-400 leading-relaxed">
                Также оказываем услуги <Link to="/" className="underline hover:text-white transition-colors" style={{ color: "#C9A96E" }}>независимой товароведческой экспертизы</Link> — если техника сломалась по гарантии и продавец отказывает в возврате.
              </p>
            </div>
          </div>
          <div className="p-8" style={{ background: "#2A2A2A" }}>
            {sent ? (
              <div className="text-center py-8">
                <Icon name="CheckCircle" size={48} style={{ color: "#F5C518", margin: "0 auto 16px" }} />
                <p className="text-white text-lg font-semibold mb-2">Заявка отправлена!</p>
                <p className="text-stone-400 text-sm">Перезвоним в течение 2 часов</p>
              </div>
            ) : (
              <div className="space-y-4">
                <h3 className="text-white font-semibold mb-4">Оставить заявку</h3>
                <div>
                  <label className="text-xs text-stone-400 tracking-widest uppercase block mb-2">Имя</label>
                  <input type="text" placeholder="Иван Иванов" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className="w-full border text-white placeholder-stone-500 px-4 py-3 text-sm focus:outline-none"
                    style={{ background: "#3A3A3A", borderColor: "#5A5A5A" }} />
                </div>
                <div>
                  <label className="text-xs text-stone-400 tracking-widest uppercase block mb-2">Телефон</label>
                  <input type="tel" placeholder="+7 (___) ___-__-__" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    className="w-full border text-white placeholder-stone-500 px-4 py-3 text-sm focus:outline-none"
                    style={{ background: "#3A3A3A", borderColor: "#5A5A5A" }} />
                </div>
                <div>
                  <label className="text-xs text-stone-400 tracking-widest uppercase block mb-2">Устройство и проблема</label>
                  <textarea placeholder="Например: iPhone 13, разбит экран..." rows={3} value={form.description}
                    onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
                    className="w-full border text-white placeholder-stone-500 px-4 py-3 text-sm focus:outline-none resize-none"
                    style={{ background: "#3A3A3A", borderColor: "#5A5A5A" }} />
                </div>
                <button onClick={handleSubmit} disabled={sending || !form.name || !form.phone}
                  className="w-full font-semibold py-4 text-sm tracking-wide transition-colors disabled:opacity-50"
                  style={{ background: "#F5C518", color: "#0E0E0E" }}>
                  {sending ? "Отправляем..." : "Отправить заявку"}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-stone-500 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-golos text-lg font-semibold text-stone-400">КУРСОР</div>
          <div className="text-xs tracking-wide">© 2026 Сервисный центр. Все права защищены</div>
          <Link to="/" className="text-xs hover:text-white transition-colors">← На главную</Link>
        </div>
        <div className="max-w-6xl mx-auto px-6 mt-4 pt-4 border-t border-stone-900 text-center text-xs text-stone-700">
          ИНН 662339146709 &nbsp;·&nbsp; ОГРНИП 315665800075592
        </div>
      </footer>
    </div>
  );
}