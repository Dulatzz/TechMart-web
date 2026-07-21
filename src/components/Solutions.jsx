const Icon = ({ d }) => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {d}
  </svg>
)

const SOLUTIONS = [
  {
    no: '01',
    title: 'Видеонаблюдение',
    icon: <><path d="M2 7l14-4v14L2 15z" /><path d="M16 8h4a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-4" /></>,
    text: 'IP-системы любого масштаба — от одного здания до распределённой сети объектов.',
    list: ['Проектирование под задачу', 'Камеры 4K и тепловизоры', 'Хранение и отказоустойчивость'],
  },
  {
    no: '02',
    title: 'Видеоаналитика',
    icon: <><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></>,
    text: 'Распознавание лиц и номеров, подсчёт людей, детекция событий в реальном времени.',
    list: ['Аналитика на потоке', 'Оповещения об инцидентах', 'Интеграция с СКУД'],
  },
  {
    no: '03',
    title: 'СКУД',
    icon: <><rect x="3" y="11" width="18" height="10" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></>,
    text: 'Контроль и управление доступом — турникеты, замки, биометрия и учёт рабочего времени.',
    list: ['Единая точка управления', 'Биометрия и карты', 'Гибкие сценарии доступа'],
  },
  {
    no: '04',
    title: 'Охранно-пожарные системы',
    icon: <><path d="M12 2s5 4 5 9a5 5 0 0 1-10 0c0-2 1-3 1-3" /><path d="M12 22v-4" /></>,
    text: 'Сигнализация, оповещение и автоматика, спроектированные под нормы и специфику объекта.',
    list: ['Соответствие нормам', 'Раннее обнаружение', 'Автоматика оповещения'],
  },
]

export default function Solutions() {
  return (
    <section className="section section--soft" id="solutions">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">Решения</span>
          <h2 className="h2">Четыре направления в одной инженерной системе</h2>
          <p className="lead">
            Собираем комплекс из совместимых подсистем — они работают как единое целое,
            а не как набор разрозненного оборудования.
          </p>
        </div>

        <div className="solutions">
          {SOLUTIONS.map((s) => (
            <article className="solution" key={s.no}>
              <div className="solution__no">{s.no}</div>
              <div className="solution__ico"><Icon d={s.icon} /></div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <ul className="solution__list">
                {s.list.map((li) => <li key={li}>{li}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
