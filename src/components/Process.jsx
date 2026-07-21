const STEPS = [
  { no: '1', title: 'Обследование', text: 'Выезжаем на объект, изучаем риски и формируем техническое задание.' },
  { no: '2', title: 'Проектирование', text: 'Готовим проект, спецификацию оборудования и прозрачную смету.' },
  { no: '3', title: 'Внедрение', text: 'Монтаж, пусконаладка и настройка систем силами штатных инженеров.' },
  { no: '4', title: 'Сервис', text: 'Сопровождаем систему 24/7 с гарантией и плановым обслуживанием.' },
]

export default function Process() {
  return (
    <section className="section section--dark" id="process" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">Процесс</span>
          <h2 className="h2">Как мы ведём проект</h2>
          <p className="lead">
            Понятные этапы и один ответственный за результат — от первого выезда
            до сервисной поддержки.
          </p>
        </div>

        <div className="process">
          {STEPS.map((s) => (
            <div className="step" key={s.no}>
              <span className="step__no">{s.no}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
