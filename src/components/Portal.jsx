const FEATURES = [
  'Онлайн-доступ к камерам всех объектов из одного окна',
  'Заявки в сервис и контроль статуса выполнения',
  'Отчёты по инцидентам и работоспособности систем',
  'Разграничение прав для сотрудников и подрядчиков',
]

export default function Portal() {
  return (
    <section className="section section--soft" id="portal">
      <div className="container portal">
        <div>
          <span className="eyebrow">Клиентский портал</span>
          <h2 className="h2">Вся ваша инфраструктура безопасности — в личном кабинете</h2>
          <p className="lead">
            Единая панель для мониторинга объектов, заявок и отчётности. Прозрачно
            видно, что происходит на каждой площадке прямо сейчас.
          </p>
          <ul className="portal__features">
            {FEATURES.map((f) => (
              <li key={f}><span className="check">✓</span>{f}</li>
            ))}
          </ul>
        </div>

        <form className="portal__card" onSubmit={(e) => e.preventDefault()}>
          <h3>Вход в портал</h3>
          <p>Доступ для действующих клиентов TechMart.</p>
          <div className="field">
            <label htmlFor="login">Логин</label>
            <input id="login" type="text" placeholder="you@company.kz" />
          </div>
          <div className="field">
            <label htmlFor="pass">Пароль</label>
            <input id="pass" type="password" placeholder="••••••••" />
          </div>
          <button className="btn btn--primary" style={{ width: '100%' }} type="submit">
            Войти
          </button>
        </form>
      </div>
    </section>
  )
}
