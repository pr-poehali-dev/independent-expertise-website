import ServiceLayout from "@/components/ServiceLayout";
import Icon from "@/components/ui/icon";

const faq = [
  {
    question: "Нужна ли юридическая консультация, если я просто хочу вернуть телефон?",
    answer: "Не всегда, но она помогает избежать ошибок. Типичные случаи, когда консультация необходима: продавец уже отказал, прошло более 15 дней с покупки, товар из перечня технически сложных, ситуация нестандартная (подарок, рассрочка, б/у). Мы оцениваем ваши шансы и даём конкретный план действий."
  },
  {
    question: "Что делать, если продавец провёл свою экспертизу и говорит, что я сам сломал?",
    answer: "Вы имеете право оспорить результаты экспертизы продавца. Закажите независимую экспертизу — если она покажет производственный брак, продавец обязан возместить её стоимость. При подаче иска в суд именно вы выбираете, чьей экспертизе доверять больше, а суд оценивает оба заключения."
  },
  {
    question: "Как правильно написать претензию продавцу?",
    answer: "Претензия должна содержать: ваши данные, описание товара и дефекта, дату покупки, конкретное требование (возврат денег / замена / ремонт), срок исполнения (установлен ЗоЗПП), реквизиты для перевода. Мы составим претензию с учётом всех требований — она должна быть направлена заказным письмом с описью вложения."
  },
  {
    question: "Сколько времени есть у продавца на ответ?",
    answer: "По ЗоЗПП: возврат денег — 10 дней, замена товара — 7 дней (или 20 при необходимости проверки), ремонт — не более 45 дней. Каждый день просрочки — неустойка 1% от стоимости товара. Фиксируйте дату отправки претензии — это точка отсчёта."
  },
];

const topics = [
  { icon: "ClipboardList", title: "Анализ вашей ситуации", desc: "Изучаем документы: чек, гарантийный талон, переписку с продавцом. Оцениваем шансы на возврат." },
  { icon: "FileText", title: "Составление претензии", desc: "Грамотная претензия продавцу с ссылками на нормы закона. Это обязательный шаг перед судом." },
  { icon: "Map", title: "Пошаговый план действий", desc: "Конкретная инструкция: что делать, в какой последовательности, какие документы собрать." },
  { icon: "Scale", title: "Оценка судебных перспектив", desc: "Стоит ли идти в суд? Рассчитываем возможную сумму взыскания с учётом неустойки и штрафа." },
  { icon: "MessageSquare", title: "Переговоры с продавцом", desc: "Помогаем вести переговоры: грамотное юридическое давление часто приводит к досудебному урегулированию." },
  { icon: "Phone", title: "Онлайн или в офисе", desc: "Консультируем по телефону, видеосвязи или лично в офисе в Нижнем Тагиле." },
];

export default function LawyerConsultation() {
  return (
    <ServiceLayout
      title="Консультация юриста"
      subtitle="Разберём вашу ситуацию, оценим шансы на возврат, дадим пошаговый план. Первый шаг к защите ваших прав потребителя."
      serviceLabel="Консультация юриста"
      description="Разберём вашу ситуацию, оценим шансы на возврат, дадим пошаговый план действий для защиты прав потребителя."
      faq={faq}
    >
      <section className="mb-16">
        <h2 className="font-golos text-3xl font-light text-stone-900 mb-2">Что входит в консультацию</h2>
        <div className="w-12 h-px mb-8" style={{ background: "#F5C518" }} />
        <div className="grid md:grid-cols-2 gap-6">
          {topics.map(c => (
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
        <h2 className="font-golos text-3xl font-light mb-2">Ваши права как потребителя</h2>
        <div className="w-12 h-px mb-6" style={{ background: "#F5C518" }} />
        <div className="space-y-4 text-stone-300 text-sm leading-relaxed">
          <p><span className="text-white font-semibold">15 дней с покупки</span> — вернуть технически сложный товар можно при любом дефекте, даже незначительном. Не упустите этот срок.</p>
          <p><span className="text-white font-semibold">В течение гарантийного срока</span> — возврат или замена при существенном недостатке. Продавец сам обязан доказать, что дефект возник по вашей вине.</p>
          <p><span className="text-white font-semibold">До 2 лет с покупки</span> — даже после окончания гарантии вы вправе предъявить претензию, если докажете производственный характер дефекта через независимую экспертизу.</p>
          <p><span className="text-white font-semibold">Ст. 17 ЗоЗПП — бесплатный суд</span> — потребитель не платит госпошлину при иске до 1 млн рублей. Это делает судебный путь доступным для любой суммы спора.</p>
          <p><span className="text-white font-semibold">Неустойка и штраф</span> — за каждый день просрочки исполнения требований начисляется 1% от стоимости товара. Плюс штраф 50% за отказ выполнить требования добровольно.</p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-golos text-3xl font-light text-stone-900 mb-2">Стоимость</h2>
        <div className="w-12 h-px mb-6" style={{ background: "#F5C518" }} />
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Устная консультация", price: "от 2 500 ₽", time: "до 1 часа", desc: "Разбор ситуации, ответы на вопросы, план действий" },
            { name: "Консультация + претензия", price: "от 4 500 ₽", time: "1–2 дня", desc: "Консультация и составление претензии продавцу" },
            { name: "Полное сопровождение", price: "от 9 900 ₽", time: "до результата", desc: "От претензии до возврата денег под ключ" },
          ].map(p => (
            <div key={p.name} className="p-5 border border-stone-100 bg-stone-50">
              <div className="font-semibold text-stone-900 mb-1">{p.name}</div>
              <div className="text-2xl font-light mb-1" style={{ color: "#C9A96E" }}>{p.price}</div>
              <div className="text-xs text-stone-400 mb-2">{p.time}</div>
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