export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <div className="logo"><span className="logo__mark">T</span>TechMart</div>
            <p style={{ maxWidth: 320, margin: 0 }}>
              Системный интегратор инженерной безопасности. Проектируем, внедряем
              и обслуживаем системы для объектов, где надёжность критична.
            </p>
          </div>

          <div>
            <h4>Навигация</h4>
            <ul>
              <li><a href="#about">О компании</a></li>
              <li><a href="#solutions">Решения</a></li>
              <li><a href="#objects">Объекты</a></li>
              <li><a href="#process">Процесс</a></li>
              <li><a href="#portal">Портал</a></li>
            </ul>
          </div>

          <div>
            <h4>Контакты</h4>
            <ul>
              <li><a href="tel:+77270000000">+7 (727) 000-00-00</a></li>
              <li><a href="mailto:hello@techmart.kz">hello@techmart.kz</a></li>
              <li>г. Алматы, ул. Сатпаева, 133/4</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© 2026 TechMart. Все права защищены.</span>
          <span>Дизайн-концепт для петпроекта</span>
        </div>
      </div>
    </footer>
  )
}
