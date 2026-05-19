import ServiceLayout from "@/components/ServiceLayout";
import Icon from "@/components/ui/icon";

const faq = [
  {
    q: "Чем отличается возврат на маркетплейсе от возврата в обычный магазин?",
    a: "Маркетплейс (Ozon, Wildberries) — лишь площадка. Продавец — отдельное юридическое лицо или ИП. При споре маркетплейс выступает посредником и обязан содействовать урегулированию. Если продавец отказывает, независимое экспертное заключение — официальное основание для открытия спора и принудительного возврата средств через платформу."
  },
  {
    q: "Ozon/WB отклонили мою заявку на возврат. Что дальше?",
    a: "После отклонения заявки вы вправе открыть спор на платформе, приложив заключение независимого эксперта. Маркетплейсы принимают такие документы. Если спор проигран — следующий шаг: досудебная претензия продавцу и, при отказе, исковое заявление в суд. Мы помогаем на всех этапах."
  },
  {
    q: "Продавец на маркетплейсе не реагирует на претензии. Можно ли подать в суд?",
    a: "Да. Продавец несёт полную ответственность по ЗоЗПП независимо от того, торгует ли он через маркетплейс. Исковое заявление подаётся по месту жительства покупателя или нахождения продавца. Госпошлина по делам о защите прав потребителей не уплачивается."
  },
  {
    q: "Товар пришёл с повреждениями — это производственный брак или повреждение при доставке?",
    a: "Это принципиальный вопрос для распределения ответственности. Если повреждение внешнее — ответственен перевозчик или маркетплейс. Если внутреннее (дефект компонента) — продавец. Наша экспертиза точно устанавливает происхождение повреждения, что определяет, к кому предъявлять претензию."
  },
  {
    q: "Как долго занимает возврат через маркетплейс при наличии заключения?",
    a: "На практике: после подачи заключения в поддержку Ozon или WB решение принимается в течение 3–10 рабочих дней. Продавцу даётся срок на ответ. При положительном исходе деньги возвращаются на счёт в течение 3–5 дней после решения."
  },
];

const steps = [
  { icon: "FileText", title: "Диагностика и заключение", desc: "Проводим независимую экспертизу, устанавливаем производственный брак, оформляем официальное заключение товароведа." },
  { icon: "Send", title: "Подача претензии продавцу", desc: "Составляем претензию с требованием возврата денег и направляем продавцу через маркетплейс и напрямую." },
  { icon: "MessageSquare", title: "Спор на платформе", desc: "Открываем спор на Ozon или Wildberries с приложением заключения. Ведём переписку до решения в вашу пользу." },
  { icon: "Scale", title: "Суд при необходимости", desc: "Если маркетплейс не помог — готовим исковое заявление. Продавец дополнительно заплатит штраф 50% от суммы." },
];

export default function MarketplaceReturn() {
  return (
    <ServiceLayout
      title="Возврат на маркетплейсах"
      subtitle="Помогаем вернуть деньги за бракованный товар на Ozon и Wildberries. Официальное заключение + сопровождение до результата."
      serviceLabel="Возврат на маркетплейсе (Ozon / Wildberries)"
    >
      <section className="mb-16">
        <h2 className="font-golos text-3xl font-light text-stone-900 mb-2">Как мы помогаем</h2>
        <div className="w-12 h-px mb-8" style={{ background: "#F5C518" }} />
        <div className="grid md:grid-cols-2 gap-6">
          {steps.map(s => (
            <div key={s.title} className="flex gap-4 p-5 border border-stone-200 bg-white">
              <div className="mt-1 flex-shrink-0" style={{ color: "#F5C518" }}><Icon name={s.icon} size={20} /></div>
              <div>
                <div className="font-semibold text-stone-900 mb-1">{s.title}</div>
                <div className="text-stone-500 text-sm leading-relaxed">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16 p-8 bg-stone-900 text-white">
        <h2 className="font-golos text-3xl font-light mb-2">Правовая база</h2>
        <div className="w-12 h-px mb-6" style={{ background: "#F5C518" }} />
        <div className="space-y-4 text-stone-300 text-sm leading-relaxed">
          <p><span className="text-white font-semibold">Ст. 18 ЗоЗПП</span> — покупатель вправе предъявить претензию продавцу на маркетплейсе так же, как в обычный магазин. Продавец не может уклониться от ответственности, прикрываясь платформой.</p>
          <p><span className="text-white font-semibold">Ст. 26.1 ЗоЗПП (дистанционная торговля)</span> — при покупке онлайн действуют особые правила: возврат товара надлежащего качества — в течение 7 дней, товара ненадлежащего качества — в общем порядке по ст. 18.</p>
          <p><span className="text-white font-semibold">Правила Ozon и Wildberries</span> — обе платформы обязывают продавцов принимать независимые экспертные заключения как доказательство брака. Игнорирование заключения — основание для блокировки продавца.</p>
          <p><span className="text-white font-semibold">Ст. 13 ЗоЗПП — штраф 50%</span> — если продавец отказывает в удовлетворении требований добровольно и дело доходит до суда, суд дополнительно взыскивает штраф в размере 50% от суммы иска в пользу потребителя.</p>
          <p><span className="text-white font-semibold">Ст. 15 ЗоЗПП — моральный вред</span> — потребитель вправе требовать компенсацию морального вреда. Суды обычно взыскивают от 3 000 до 30 000 рублей в зависимости от обстоятельств.</p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-golos text-3xl font-light text-stone-900 mb-2">Стоимость и сроки</h2>
        <div className="w-12 h-px mb-6" style={{ background: "#F5C518" }} />
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Заключение для маркетплейса", price: "от 3 500 ₽", time: "1–2 дня", desc: "Для самостоятельной подачи спора на Ozon или WB" },
            { name: "Экспертиза + сопровождение", price: "от 9 900 ₽", time: "3–5 дней", desc: "Ведём спор до возврата денег под ключ" },
            { name: "Досудебная + суд", price: "от 20 000 ₽", time: "по договорённости", desc: "Если маркетплейс не помог — идём в суд" },
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
