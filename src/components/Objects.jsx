const OBJECTS = [
  { title: 'АО «АлЭС»', tag: 'Энергетическая инфраструктура', img: '/objects/ales.jpg', featured: true },
  { title: 'Shymbulak', tag: 'Курортная инфраструктура', img: '/objects/shymbulak.jpg' },
  { title: 'EXPO', tag: 'Масштабный объект', img: '/objects/expo.jpg' },
  { title: 'Almaty Arena', tag: 'Спортивная инфраструктура', img: '/objects/almaty-arena.jpg' },
  { title: 'Halyk Arena', tag: 'Массовые мероприятия', img: '/objects/halyk-arena.jpg' },
]

export default function Objects() {
  return (
    <section className="section section--dark" id="objects">
      <div className="container">
        <div className="section__head section__head--between">
          <div>
            <span className="eyebrow">Объекты</span>
            <h2 className="h2">Объекты, которые доверяют TechMart</h2>
          </div>
          <a href="#contact" className="btn btn--ghost">Смотреть портфолио</a>
        </div>

        <div className="bento">
          {OBJECTS.map((o) => (
            <article
              className={`object${o.featured ? ' object--lg' : ''}`}
              key={o.title}
              style={{ backgroundImage: `url(${o.img})` }}
            >
              <div className="object__body">
                <h3>{o.title}</h3>
                <span className="object__tag">{o.tag}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
