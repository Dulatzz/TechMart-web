const METRICS = [
  ['10', '+', 'лет опыта на объектах любой сложности'],
  ['800', '+', 'клиентов из ритейла, промышленности и логистики'],
  ['50', 'K', 'установленных устройств в единой системе'],
  ['1000', '+', 'реализованных проектов под ключ'],
]

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">О компании</span>
          <h2 className="h2">
            TechMart — системный интегратор безопасности полного цикла
          </h2>
          <p className="lead">
            Берём объект от первичного обследования до сервисного сопровождения.
            Отвечаем за инженерную часть целиком: проектирование, монтаж, пусконаладку
            и поддержку 24/7 — так, чтобы система работала предсказуемо.
          </p>
        </div>

        <div className="metrics">
          {METRICS.map(([num, unit, label]) => (
            <div className="metric" key={label}>
              <div className="metric__num">{num}<span>{unit}</span></div>
              <div className="metric__label">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
