import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const SEND_URL = "https://functions.poehali.dev/24927a74-8007-4a64-9304-0885c2072324";

interface ServiceLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  serviceLabel?: string;
}

export default function ServiceLayout({ title, subtitle, children, serviceLabel }: ServiceLayoutProps) {
  const [scrolled, setScrolled] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', service: serviceLabel || '', description: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    window.scrollTo(0, 0);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSubmit = async () => {
    if (!form.name || !form.phone) return;
    setSending(true);
    await fetch(SEND_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
    setSending(false);
    setSent(true);
    setForm({ name: '', phone: '', service: serviceLabel || '', description: '' });
  };

  return (
    <div className="bg-stone-50 text-stone-900 font-golos min-h-screen">
      {/* NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/95 backdrop-blur-sm border-b border-stone-200 shadow-sm" : "bg-black/60 backdrop-blur-sm"}`}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="font-golos text-xl font-semibold text-white">КУРСОР</Link>
          <Link to="/" className="flex items-center gap-2 text-sm text-stone-300 hover:text-white transition-colors">
            <Icon name="ArrowLeft" size={16} />
            На главную
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <div className="bg-stone-950 pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "#F5C518" }}>Услуги</p>
          <h1 className="font-golos text-4xl md:text-6xl font-light text-white leading-tight mb-4">{title}</h1>
          <div className="w-16 h-px mt-6" style={{ background: "#F5C518" }} />
          <p className="text-stone-400 text-lg mt-6 max-w-2xl leading-relaxed">{subtitle}</p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {children}
      </div>

      {/* CTA */}
      <section className="bg-stone-950 py-16 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-golos text-3xl font-light text-white mb-4">Оставить заявку</h2>
            <div className="w-12 h-px mb-6" style={{ background: "#F5C518" }} />
            <p className="text-stone-400 text-sm leading-relaxed mb-6">Перезвоним в течение 2 часов. Первая консультация бесплатна.</p>
            <div className="space-y-3 text-sm text-stone-400">
              <div className="flex items-center gap-3"><Icon name="Phone" size={14} style={{ color: "#F5C518" }} />+7 912-299-70-00</div>
              <div className="flex items-center gap-3"><Icon name="Mail" size={14} style={{ color: "#F5C518" }} />diegovirt@yandex.ru</div>
              <div className="flex items-center gap-3"><Icon name="MapPin" size={14} style={{ color: "#F5C518" }} />Нижний Тагил, ул. Орджоникидзе, 31</div>
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
                <div>
                  <label className="text-xs text-stone-400 tracking-widest uppercase block mb-2">Имя</label>
                  <input type="text" placeholder="Иван Иванов" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className="w-full border text-white placeholder-stone-500 px-4 py-3 text-sm focus:outline-none" style={{ background: "#3A3A3A", borderColor: "#5A5A5A" }} />
                </div>
                <div>
                  <label className="text-xs text-stone-400 tracking-widest uppercase block mb-2">Телефон</label>
                  <input type="tel" placeholder="+7 (___) ___-__-__" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    className="w-full border text-white placeholder-stone-500 px-4 py-3 text-sm focus:outline-none" style={{ background: "#3A3A3A", borderColor: "#5A5A5A" }} />
                </div>
                <div>
                  <label className="text-xs text-stone-400 tracking-widest uppercase block mb-2">Описание</label>
                  <textarea placeholder="Опишите ситуацию..." rows={3} value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
                    className="w-full border text-white placeholder-stone-500 px-4 py-3 text-sm focus:outline-none resize-none" style={{ background: "#3A3A3A", borderColor: "#5A5A5A" }} />
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
          <div className="text-xs tracking-wide">© 2026 Все права защищены</div>
          <Link to="/" className="text-xs hover:text-white transition-colors">На главную</Link>
        </div>
        <div className="max-w-6xl mx-auto px-6 mt-4 pt-4 border-t border-stone-900 text-center text-xs text-stone-700">
          ИНН 662339146709 &nbsp;·&nbsp; ОГРНИП 315665800075592
        </div>
      </footer>
    </div>
  );
}
