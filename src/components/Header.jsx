const NAV = [
  ['О компании', '#about'],
  ['Решения', '#solutions'],
  ['Объекты', '#objects'],
  ['Процесс', '#process'],
  ['Портал', '#portal'],
  ['Контакты', '#contact'],
]

export default function Header() {
  return (
    <header className="header">
      <div className="container header__row">
        <a href="#top" className="logo">
          <span className="logo__mark">T</span>
          TechMart
        </a>
        <nav className="nav">
          {NAV.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>
        <a href="#contact" className="btn btn--primary header__cta">Обсудить проект</a>
        <button className="btn btn--ghost burger" aria-label="Меню">☰</button>
      </div>
    </header>
  )
}
