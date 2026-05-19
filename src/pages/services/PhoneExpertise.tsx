import ServiceLayout from "@/components/ServiceLayout";
import Icon from "@/components/ui/icon";

const faq = [
  {
    q: "Кто несёт ответственность за производственный брак — продавец или производитель?",
    a: "По закону о защите прав потребителей (ст. 18 ЗоЗПП) ответственность перед покупателем несёт продавец. Именно он обязан принять товар, провести проверку качества и вернуть деньги или заменить изделие. Производитель отвечает только по гарантии, если срок гарантии ещё не истёк."
  },
  {
    q: "Что такое производственный брак и как его доказать?",
    a: "Производственный брак — дефект, возникший до передачи товара покупателю: заводская ошибка сборки, некачественные комплектующие, нарушение технологии. Доказывается независимым экспертным заключением товароведа, где указана причина и момент возникновения дефекта."
  },
  {
    q: "В течение какого срока можно вернуть сломанный телефон?",
    a: "В течение 15 дней с момента покупки — безоговорочно при любом дефекте. После 15 дней и до конца гарантийного срока — если дефект существенный (неоднократный или невозможно устранить). После окончания гарантии, но в течение 2 лет — если экспертиза докажет производственное происхождение дефекта."
  },
  {
    q: "Магазин отказывается принять телефон и говорит, что это моя вина. Что делать?",
    a: "Это типичная ситуация. Продавец обязан сам провести проверку качества или экспертизу за свой счёт. Если вы не согласны с её результатами — заказываете независимую экспертизу. При подтверждении производственного брака продавец обязан возместить стоимость экспертизы и вернуть деньги за товар."
  },
  {
    q: "Можно ли вернуть телефон, купленный на Ozon или Wildberries?",
    a: "Да. Маркетплейс выступает посредником, но ответственность за качество несёт продавец. Наше заключение принимается службой поддержки Ozon и Wildberries как основание для возврата средств через механизм разрешения споров."
  },
];

const checks = [
  { icon: "Cpu", title: "Системная плата", desc: "Проверяем целостность чипов, пайки, следы перегрева или замыкания производственного характера." },
  { icon: "Battery", title: "Аккумулятор", desc: "Оцениваем ёмкость, цикличность, наличие заводских дефектов элемента питания." },
  { icon: "Wifi", title: "Модули связи", desc: "Wi-Fi, Bluetooth, NFC, сотовый модуль — проверяем корректность заводской пайки и качество антенн." },
  { icon: "Camera", title: "Камера и дисплей", desc: "Выявляем засветы, битые пиксели, расслоение матрицы — дефекты производства, а не эксплуатации." },
  { icon: "Mic", title: "Микрофон и динамики", desc: "Тестируем акустические компоненты на заводской брак: хрипы, потеря громкости, нет звука." },
  { icon: "Zap", title: "Разъёмы и кнопки", desc: "Проверяем разъём зарядки, кнопки, шлейфы — частая причина гарантийных отказов." },
];

export default function PhoneExpertise() {
  return (
    <ServiceLayout
      title="Экспертиза телефонов"
      subtitle="Независимое заключение о производственном браке смартфонов, планшетов и умных часов. Принимается маркетплейсами и судами."
      serviceLabel="Экспертиза телефона / планшета"
    >
      {/* Что проверяем */}
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

      {/* Правовая база */}
      <section className="mb-16 p-8 bg-stone-900 text-white">
        <h2 className="font-golos text-3xl font-light mb-2">Правовая база</h2>
        <div className="w-12 h-px mb-6" style={{ background: "#F5C518" }} />
        <div className="space-y-4 text-stone-300 text-sm leading-relaxed">
          <p><span className="text-white font-semibold">Закон РФ «О защите прав потребителей» (ст. 18, 19, 20, 21, 22)</span> — устанавливает право покупателя на возврат, замену или ремонт товара ненадлежащего качества, а также сроки исполнения требований.</p>
          <p><span className="text-white font-semibold">ГОСТ Р 51303-2013</span> — регламентирует требования к качеству электронных товаров, на основании которого эксперт формулирует выводы.</p>
          <p><span className="text-white font-semibold">Постановление Правительства РФ № 924</span> — телефоны относятся к технически сложным товарам. Это означает особый порядок возврата: только при существенном недостатке или в первые 15 дней.</p>
          <p><span className="text-white font-semibold">ФЗ «О государственной судебно-экспертной деятельности» № 73-ФЗ</span> — наши эксперты работают в соответствии с требованиями, предъявляемыми к судебным экспертам.</p>
        </div>
      </section>

      {/* Процесс */}
      <section className="mb-16">
        <h2 className="font-golos text-3xl font-light text-stone-900 mb-2">Как проходит экспертиза</h2>
        <div className="w-12 h-px mb-8" style={{ background: "#F5C518" }} />
        <div className="space-y-4">
          {[
            { n: "01", t: "Приём техники", d: "Оформляем акт приёма-передачи с фиксацией внешнего состояния устройства. Принимаем лично или через курьера." },
            { n: "02", t: "Техническая диагностика", d: "Эксперт-товаровед проводит инструментальную диагностику, визуальный осмотр и функциональное тестирование." },
            { n: "03", t: "Установление причины", d: "Определяем: дефект производственный или эксплуатационный. Это ключевой вывод, на котором строится заключение." },
            { n: "04", t: "Составление заключения", d: "Заключение оформляется на фирменном бланке, подписывается экспертом, заверяется печатью. Имеет юридическую силу." },
          ].map(s => (
            <div key={s.n} className="flex gap-6 p-5 border-l-2 border-stone-200 pl-6">
              <div className="text-2xl font-light text-stone-300 flex-shrink-0 w-8">{s.n}</div>
              <div>
                <div className="font-semibold text-stone-900 mb-1">{s.t}</div>
                <div className="text-stone-500 text-sm leading-relaxed">{s.d}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Стоимость */}
      <section className="mb-16 p-8 border border-stone-200 bg-white">
        <h2 className="font-golos text-3xl font-light text-stone-900 mb-2">Стоимость и сроки</h2>
        <div className="w-12 h-px mb-6" style={{ background: "#F5C518" }} />
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Заключение", price: "от 3 500 ₽", time: "1–2 дня", desc: "Для маркетплейса или досудебного урегулирования" },
            { name: "Экспертиза + сопровождение", price: "от 9 900 ₽", time: "3–5 дней", desc: "Заключение + помощь в подаче заявки на возврат" },
            { name: "Судебная экспертиза", price: "от 15 000 ₽", time: "5–10 дней", desc: "Заключение с участием эксперта в судебном заседании" },
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

      {/* FAQ */}
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
