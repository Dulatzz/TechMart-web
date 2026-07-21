const OBJECTS = [
  { tag: 'Ритейл', title: 'Сеть супермаркетов', text: '48 магазинов в единой системе видеонаблюдения и аналитики.', bg: 'linear-gradient(150deg,#171E1D,#374340)' },
  { tag: 'Логистика', title: 'Распределительный центр', text: 'Периметр, СКУД и контроль погрузки на 24 000 м².', bg: 'linear-gradient(150deg,#0B0D0E,#26302C)' },
  { tag: 'Промышленность', title: 'Производственный комплекс', text: 'Взрывозащищённые камеры и тепловизоры в цехах.', bg: 'linear-gradient(150deg,#141918,#252B29)' },
  { tag: 'Бизнес-центр', title: 'Офисный кластер', text: 'Биометрический доступ и учёт рабочего времени.', bg: 'linear-gradient(150deg,#101312,#36A852)' },
  { tag: 'Транспорт', title: 'Автопарк и АЗС', text: 'Распознавание номеров и контроль въезда 24/7.', bg: 'linear-gradient(150deg,#0D1010,#374340)' },
  { tag: 'Образование', title: 'Учебный кампус', text: 'Охранно-пожарная система и оповещение на 6 корпусов.', bg: 'linear-gradient(150deg,#07100A,#36A852)' },
]

export default function Objects() {
  return (
    <section className="section section--dark" id="objects">
      <div className="container">
        <div className="section__head section__head--between">
          <div>
            <span className="eyebrow">Объекты</span>
            <h2 className="h2">Проекты, которым доверяют безопасность</h2>
          </div>
          <a href="#contact" className="btn btn--ghost">Смотреть портфолио</a>
        </div>

        <div className="objects">
          {OBJECTS.map((o) => (
            <article className="object" key={o.title} style={{ backgroundImage: o.bg }}>
              <div className="object__body">
                <span className="object__tag">{o.tag}</span>
                <h3>{o.title}</h3>
                <p>{o.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
