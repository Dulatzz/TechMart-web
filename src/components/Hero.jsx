const STATS = [
  ['320+', '', 'объектов под наблюдением 24/7'],
  ['50', 'K+', 'подключённых камер'],
  ['98.7', '%', 'событий отрабатывается в норме'],
  ['10', ' лет', 'на рынке инженерной безопасности'],
]

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__grid" />
      <div className="container hero__inner">
        <span className="hero__badge"><span className="dot" />Системный интегратор безопасности</span>
        <h1>
          Инженерная безопасность для объектов, где <span>надёжность критична</span>
        </h1>
        <p className="hero__sub">
          Проектируем, внедряем и обслуживаем видеонаблюдение, СКУД, охранно-пожарную
          сигнализацию и видеоаналитику — под ключ и с гарантией результата.
        </p>
        <div className="hero__actions">
          <a href="#contact" className="btn btn--primary">Обсудить проект</a>
          <a href="#portal" className="btn btn--ghost">Войти в портал</a>
        </div>

        <div className="hero__stats">
          {STATS.map(([num, unit, label]) => (
            <div className="stat" key={label}>
              <div className="stat__num">{num}<span>{unit}</span></div>
              <div className="stat__label">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
