import ServiceLayout from "@/components/ServiceLayout";
import Icon from "@/components/ui/icon";

const faq = [
  {
    q: "Ноутбук вышел из строя через 3 месяца после покупки. Продавец говорит — это я сломал. Как доказать обратное?",
    a: "Бремя доказывания в течение гарантийного срока лежит на продавце (ст. 18 ЗоЗПП). Именно он обязан провести экспертизу за свой счёт. Если она показывает «механическое повреждение», вы вправе оспорить это заключение, заказав независимую экспертизу. При подтверждении производственного брака суд обяжет продавца вернуть деньги и оплатить ваши расходы."
  },
  {
    q: "Можно ли вернуть ноутбук с матрицей, которая треснула сама по себе?",
    a: "Да, если экспертиза установит, что матрица имела скрытый производственный дефект (расслоение, микротрещина от завода). Это встречается чаще, чем кажется. Внешнее повреждение не всегда означает вину покупателя — эксперт может определить природу разрушения по характеру излома и следам деформации."
  },
  {
    q: "Что считается «существенным недостатком» для технически сложного товара?",
    a: "Существенный недостаток — это неустранимый дефект, дефект, требующий несоразмерных затрат на устранение, проявляющийся неоднократно или после ремонта снова. Наличие существенного недостатка даёт право на возврат денег даже по истечении 15 дней с момента покупки."
  },
  {
    q: "Гарантийный срок истёк, но компьютер сломался. Есть ли шансы на возврат?",
    a: "Да. По ст. 19 ЗоЗПП покупатель вправе предъявить претензии в течение 2 лет со дня покупки, даже если гарантия уже закончилась. Для этого нужно доказать, что дефект производственный. Именно для таких случаев и делается независимая экспертиза."
  },
];

const checks = [
  { icon: "Cpu", title: "Процессор и оперативная память", desc: "Тестирование на стабильность, перегрев, заводские дефекты кристалла и пайки." },
  { icon: "HardDrive", title: "Жёсткий диск / SSD", desc: "Диагностика накопителя на наличие заводских bad-блоков, ошибок контроллера, предвестников отказа." },
  { icon: "Monitor", title: "Матрица и видеокарта", desc: "Проверка на битые пиксели, засветы, производственные трещины, артефакты видеочипа." },
  { icon: "Battery", title: "Аккумулятор (ноутбук)", desc: "Оценка фактической ёмкости, скорости деградации, наличия заводского брака элементов питания." },
  { icon: "Zap", title: "Блок питания и зарядка", desc: "Проверка цепи питания, зарядного порта, контроллера заряда на заводские дефекты." },
  { icon: "Keyboard", title: "Клавиатура и тачпад", desc: "Диагностика залипания, неработающих клавиш, дефектов шлейфов — производственного характера." },
];

export default function ComputerExpertise() {
  return (
    <ServiceLayout
      title="Экспертиза компьютеров"
      subtitle="Независимое заключение о производственных дефектах ноутбуков, системных блоков и мониторов. Для возврата, гарантийного ремонта и судебных споров."
      serviceLabel="Экспертиза ноутбука / компьютера"
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
          <p><span className="text-white font-semibold">Постановление Правительства РФ № 924</span> — ноутбуки и компьютеры входят в перечень технически сложных товаров. Возврат возможен в первые 15 дней или при существенном недостатке.</p>
          <p><span className="text-white font-semibold">Ст. 18 ЗоЗПП</span> — продавец обязан принять товар и провести проверку качества. При несогласии покупателя — экспертизу. Расходы на экспертизу возмещаются, если дефект производственный.</p>
          <p><span className="text-white font-semibold">Ст. 13 ЗоЗПП</span> — при отказе продавца исполнить требования добровольно суд взыщет штраф 50% от суммы иска в пользу потребителя.</p>
          <p><span className="text-white font-semibold">ГОСТ Р 51318, ГОСТ Р МЭК 60950</span> — технические регламенты безопасности компьютерного оборудования, используемые при составлении заключения.</p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-golos text-3xl font-light text-stone-900 mb-2">Стоимость и сроки</h2>
        <div className="w-12 h-px mb-6" style={{ background: "#F5C518" }} />
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Заключение", price: "от 3 500 ₽", time: "1–2 дня", desc: "Для гарантийного обращения или маркетплейса" },
            { name: "Экспертиза + сопровождение", price: "от 9 900 ₽", time: "3–5 дней", desc: "Заключение и помощь в возврате денег" },
            { name: "Судебная экспертиза", price: "от 15 000 ₽", time: "5–10 дней", desc: "Для суда с участием эксперта" },
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
