const Ico = ({ children }) => (
  <span className="ico">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{children}</svg>
  </span>
)

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container contact">
        <div>
          <span className="eyebrow">Контакты</span>
          <h2 className="h2">Обсудим ваш объект</h2>
          <p className="lead">
            Оставьте заявку — инженер свяжется, задаст уточняющие вопросы и предложит
            решение под вашу задачу.
          </p>

          <div className="contact__list">
            <div className="contact__item">
              <Ico><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z" /></Ico>
              <div><div className="k">Телефон</div><div className="v">+7 (727) 000-00-00</div></div>
            </div>
            <div className="contact__item">
              <Ico><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></Ico>
              <div><div className="k">Почта</div><div className="v">hello@techmart.kz</div></div>
            </div>
            <div className="contact__item">
              <Ico><path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></Ico>
              <div><div className="k">Офис</div><div className="v">г. Алматы, ул. Сатпаева, 133/4</div></div>
            </div>
          </div>
        </div>

        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <div className="field">
            <label htmlFor="name">Имя</label>
            <input id="name" type="text" placeholder="Как к вам обращаться" />
          </div>
          <div className="field">
            <label htmlFor="phone">Телефон</label>
            <input id="phone" type="tel" placeholder="+7 (___) ___-__-__" />
          </div>
          <div className="field">
            <label htmlFor="msg">Задача</label>
            <textarea id="msg" placeholder="Коротко опишите объект и что нужно" />
          </div>
          <button className="btn btn--primary" style={{ width: '100%' }} type="submit">
            Отправить заявку
          </button>
        </form>
      </div>
    </section>
  )
}
