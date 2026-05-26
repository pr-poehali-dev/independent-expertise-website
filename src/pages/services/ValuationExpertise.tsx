import ServiceLayout from "@/components/ServiceLayout";
import Icon from "@/components/ui/icon";

const faq = [
  {
    question: "Чем отличается стоимостная экспертиза от обычной товароведческой?",
    answer: "Товароведческая экспертиза устанавливает факт дефекта и его причину. Стоимостная — определяет рыночную стоимость товара или размер ущерба, причинённого дефектом. Часто оба вида совмещаются в одном заключении: сначала фиксируется брак, затем рассчитывается утрата товарной стоимости."
  },
  {
    question: "Для чего нужна стоимостная экспертиза?",
    answer: "Для взыскания ущерба в суде, расчёта страховой выплаты, определения компенсации при возврате товара с износом, споров о цене при поставке некачественной продукции, таможенных и налоговых спорах. Заключение принимается судами общей юрисдикции и арбитражными судами."
  },
  {
    question: "Как рассчитывается «утрата товарной стоимости»?",
    answer: "Утрата товарной стоимости (УТС) — разница между рыночной ценой товара без дефекта и его стоимостью с дефектом или после ремонта. Рассчитывается по методикам Минюста с учётом марки, модели, года выпуска, региона, степени повреждения. Эта сумма взыскивается с виновного сверх стоимости ремонта."
  },
  {
    question: "Можно ли оспорить заключение стоимостной экспертизы противоположной стороны?",
    answer: "Да. Если продавец или страховая представили собственную экспертизу с заниженной стоимостью, мы проводим рецензию: анализируем применённые методики, исходные данные, расчёты. При выявлении ошибок составляем рецензию-возражение для суда, которая служит основанием для назначения повторной экспертизы."
  },
];

const items = [
  { icon: "Smartphone", title: "Электроника и техника", desc: "Смартфоны, ноутбуки, бытовая техника — оценка рыночной стоимости и размера ущерба от дефектов." },
  { icon: "Package", title: "Промышленные товары", desc: "Инструменты, оборудование, строительные материалы, запасные части — независимая оценка качества и стоимости." },
  { icon: "ShoppingBag", title: "Одежда и обувь", desc: "Оценка соответствия качества цене, установление производственных дефектов швейных и кожаных изделий." },
  { icon: "Wrench", title: "Автомобильные товары", desc: "Запчасти, аксессуары, автооборудование — экспертиза качества и стоимости при спорах с поставщиками." },
  { icon: "BarChart", title: "Утрата товарной стоимости", desc: "Расчёт УТС после дефекта или ремонта — для взыскания дополнительной компенсации в суде." },
  { icon: "FileSearch", title: "Рецензия на чужую экспертизу", desc: "Анализ заключения, представленного противоположной стороной. Выявление ошибок и несоответствий методике." },
];

export default function ValuationExpertise() {
  return (
    <ServiceLayout
      title="Стоимостная экспертиза"
      subtitle="Товароведческая стоимостная экспертиза промышленных товаров. Определяем рыночную стоимость, утрату товарной стоимости и размер ущерба для суда и страховых споров."
      serviceLabel="Стоимостная экспертиза"
      description="Товароведческая стоимостная экспертиза промышленных товаров. Определяем рыночную стоимость, утрату товарной стоимости и размер ущерба для суда и страховых споров."
      faq={faq}
    >
      <section className="mb-16">
        <h2 className="font-golos text-3xl font-light text-stone-900 mb-2">Что мы оцениваем</h2>
        <div className="w-12 h-px mb-8" style={{ background: "#F5C518" }} />
        <div className="grid md:grid-cols-2 gap-6">
          {items.map(c => (
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
        <h2 className="font-golos text-3xl font-light mb-2">Правовая база и методология</h2>
        <div className="w-12 h-px mb-6" style={{ background: "#F5C518" }} />
        <div className="space-y-4 text-stone-300 text-sm leading-relaxed">
          <p><span className="text-white font-semibold">ФЗ «Об оценочной деятельности» № 135-ФЗ</span> — регулирует порядок определения рыночной стоимости товаров и имущества. Заключение составляется в соответствии с федеральными стандартами оценки (ФСО).</p>
          <p><span className="text-white font-semibold">Методические рекомендации Минюста РФ</span> — применяемые методики расчёта утраты товарной стоимости соответствуют требованиям, предъявляемым к судебным экспертизам.</p>
          <p><span className="text-white font-semibold">ГОСТ Р 51303-2013, ГОСТ Р 52554-2006</span> — технические регламенты, определяющие критерии качества товаров, используемые при формировании выводов о соответствии товара заявленной стоимости.</p>
          <p><span className="text-white font-semibold">Ст. 12 ГПК РФ, ст. 82 АПК РФ</span> — экспертное заключение является доказательством в гражданском и арбитражном процессе. Эксперт несёт уголовную ответственность за заведомо ложное заключение.</p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-golos text-3xl font-light text-stone-900 mb-2">Стоимость и сроки</h2>
        <div className="w-12 h-px mb-6" style={{ background: "#F5C518" }} />
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Оценка рыночной стоимости", price: "от 4 000 ₽", time: "1–3 дня", desc: "Определение актуальной рыночной цены товара" },
            { name: "Расчёт утраты стоимости", price: "от 6 000 ₽", time: "2–4 дня", desc: "УТС после повреждения или ремонта" },
            { name: "Рецензия на экспертизу", price: "от 8 000 ₽", time: "3–5 дней", desc: "Анализ заключения противоположной стороны" },
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
            <div key={f.question} className="p-6 border border-stone-200 bg-white">
              <div className="font-semibold text-stone-900 mb-2">{f.question}</div>
              <div className="text-stone-500 text-sm leading-relaxed">{f.answer}</div>
            </div>
          ))}
        </div>
      </section>
    </ServiceLayout>
  );
}