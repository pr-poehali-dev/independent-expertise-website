import ServiceLayout from "@/components/ServiceLayout";
import Icon from "@/components/ui/icon";

const faq = [
  {
    q: "Холодильник перестал морозить через полгода. Продавец отказывает в возврате — говорит, что мы сами сломали. Что делать?",
    a: "В период гарантийного срока продавец обязан доказать, что дефект возник по вине потребителя (ст. 18 ЗоЗПП). Если продавец провёл экспертизу и сослался на «нарушение условий эксплуатации» — закажите независимую. Мы установим истинную причину: производственный дефект компрессора, утечку хладагента с завода или иное основание."
  },
  {
    q: "Стиральная машина затопила квартиру. Можно ли взыскать ущерб с продавца?",
    a: "Да. Если экспертиза докажет, что затопление произошло из-за производственного дефекта (трещина бака, бракованный патрубок, дефект клапана), продавец несёт ответственность за причинённый вред по ст. 14 ЗоЗПП. Мы составим заключение как для досудебной претензии, так и для судебного разбирательства."
  },
  {
    q: "Телевизор сгорел. Магазин говорит — скачок напряжения. Как оспорить?",
    a: "Скачок напряжения — самый распространённый отказ продавцов. Однако современная техника должна выдерживать нормативные перепады сети. Экспертиза устанавливает характер повреждения платы: если горение произошло по причине заводского брака цепи питания или отсутствия защиты — это производственный дефект."
  },
  {
    q: "Можно ли вернуть деньги за бытовую технику, купленную больше года назад?",
    a: "Да, если гарантийный срок ещё не истёк или с момента покупки прошло менее 2 лет. При существенном недостатке — в течение всего срока службы товара (ст. 19 ЗоЗПП). Важно получить заключение, фиксирующее производственный характер дефекта."
  },
];

const checks = [
  { icon: "Thermometer", title: "Холодильники", desc: "Диагностика компрессора, терморегулятора, утечки хладагента, дефектов уплотнителей заводского происхождения." },
  { icon: "Wind", title: "Стиральные машины", desc: "Проверка бака, подшипников, двигателя, патрубков, электронного блока управления на производственные дефекты." },
  { icon: "Tv", title: "Телевизоры", desc: "Диагностика матрицы, блока питания, T-con платы, засветов и артефактов производственного характера." },
  { icon: "Flame", title: "Плиты и духовки", desc: "Экспертиза газовых горелок, нагревательных элементов, электрики — на соответствие нормам безопасности." },
  { icon: "Droplets", title: "Посудомоечные машины", desc: "Диагностика помпы, нагревательного элемента, протечек, отказа программатора — заводские дефекты." },
  { icon: "Zap", title: "Пылесосы и мелкая техника", desc: "Проверка двигателя, фильтров, электрической части — отказы по причинам производственного брака." },
];

export default function ApplianceExpertise() {
  return (
    <ServiceLayout
      title="Экспертиза бытовой техники"
      subtitle="Независимое заключение о производственных дефектах холодильников, стиральных машин, телевизоров и другой бытовой техники."
      serviceLabel="Экспертиза бытовой техники"
    >
      <section className="mb-16">
        <h2 className="font-golos text-3xl font-light text-stone-900 mb-2">Что мы проверяем</h2>
        <div className="w-12 h-px mb-8" style={{ background: "#F5C518" }} />
        <div className="grid md:grid-cols-2 gap-6">
          {checks.map(c => (
            <div key={c.title} className="flex gap-4 p-5 border border-stone-200 bg-white">
              <div className="mt-1 flex-shrink-0" style={{ color: "#F5C518" }}><Icon name={c.icon} size={20} /></div>
              <div>
                <div className="font-semibold text-stone-900 mb-1">{c.title}</div>
                <div className="text-stone-500 text-sm leading-relaxed">{c.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16 p-8 bg-stone-900 text-white">
        <h2 className="font-golos text-3xl font-light mb-2">Правовая база</h2>
        <div className="w-12 h-px mb-6" style={{ background: "#F5C518" }} />
        <div className="space-y-4 text-stone-300 text-sm leading-relaxed">
          <p><span className="text-white font-semibold">Ст. 18 ЗоЗПП</span> — покупатель вправе потребовать возврата денег, замены товара, возмещения расходов на ремонт при наличии дефекта. Продавец несёт бремя доказывания вины покупателя в период гарантии.</p>
          <p><span className="text-white font-semibold">Ст. 14 ЗоЗПП — имущественный вред</span> — если из-за дефектной техники причинён ущерб имуществу (например, затопление), продавец или производитель обязан его возместить в полном объёме.</p>
          <p><span className="text-white font-semibold">Технический регламент ТР ТС 004/2011</span> — требования безопасности низковольтного оборудования. Несоответствие — основание для претензии к продавцу и производителю.</p>
          <p><span className="text-white font-semibold">Срок службы товара</span> — производитель обязан указать срок службы. В течение этого срока при существенном дефекте покупатель вправе требовать возмещения вреда даже после окончания гарантии.</p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-golos text-3xl font-light text-stone-900 mb-2">Стоимость и сроки</h2>
        <div className="w-12 h-px mb-6" style={{ background: "#F5C518" }} />
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Заключение", price: "от 4 000 ₽", time: "2–3 дня", desc: "Для гарантийного обращения к продавцу" },
            { name: "Экспертиза + сопровождение", price: "от 11 000 ₽", time: "3–7 дней", desc: "Полное сопровождение до возврата средств" },
            { name: "Экспертиза ущерба", price: "от 12 000 ₽", time: "5–10 дней", desc: "Оценка ущерба от дефектной техники для суда" },
          ].map(p => (
            <div key={p.name} className="p-5 border border-stone-100 bg-stone-50">
              <div className="font-semibold text-stone-900 mb-1">{p.name}</div>
              <div className="text-2xl font-light mb-1" style={{ color: "#C9A96E" }}>{p.price}</div>
              <div className="text-xs text-stone-400 mb-2">Срок: {p.time}</div>
              <div className="text-sm text-stone-500">{p.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-4">
        <h2 className="font-golos text-3xl font-light text-stone-900 mb-2">Частые вопросы</h2>
        <div className="w-12 h-px mb-8" style={{ background: "#F5C518" }} />
        <div className="space-y-4">
          {faq.map(f => (
            <div key={f.q} className="p-6 border border-stone-200 bg-white">
              <div className="font-semibold text-stone-900 mb-2">{f.q}</div>
              <div className="text-stone-500 text-sm leading-relaxed">{f.a}</div>
            </div>
          ))}
        </div>
      </section>
    </ServiceLayout>
  );
}
