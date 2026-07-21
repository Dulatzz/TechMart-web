const PARTNERS = ['Dahua', 'Hikvision', 'TRASSIR', 'Sigur', 'Axis', 'Bolid', 'Ubiquiti', 'ZKTeco']

export default function Partners() {
  return (
    <section className="section" style={{ paddingTop: 72, paddingBottom: 72 }}>
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">Технологические партнёры</span>
          <h2 className="h2" style={{ fontSize: 26 }}>
            Работаем на проверенном оборудовании ведущих вендоров
          </h2>
        </div>
        <div className="partners">
          {PARTNERS.map((p) => <div className="partner" key={p}>{p}</div>)}
        </div>
      </div>
    </section>
  )
}
