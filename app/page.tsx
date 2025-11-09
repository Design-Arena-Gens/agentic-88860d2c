export default function Home() {
  const items = [
    {
      emoji: '🌸',
      title: 'פריחה',
      description: 'יופי טבעי של פרחים בפריחה מלאה'
    },
    {
      emoji: '🦋',
      title: 'פרפר',
      description: 'אלגנטיות וחן בטבע'
    },
    {
      emoji: '🌺',
      title: 'פרח טרופי',
      description: 'צבעים עזים וחיים'
    },
    {
      emoji: '🌹',
      title: 'ורד',
      description: 'סמל קלאסי של יופי ואלגנטיות'
    },
    {
      emoji: '✨',
      title: 'ניצוצות',
      description: 'זוהר וקסם בכל רגע'
    },
    {
      emoji: '🌙',
      title: 'ירח',
      description: 'יופי ורוגע בלילה'
    }
  ]

  return (
    <div className="container">
      <header className="header">
        <h1 className="title">גלריית האלגנטיות</h1>
        <p className="subtitle">יופי, אמנות וקסם</p>
      </header>

      <div className="gallery">
        {items.map((item, index) => (
          <div key={index} className="card">
            <div className="card-image">
              {item.emoji}
            </div>
            <h2 className="card-title">{item.title}</h2>
            <p className="card-description">{item.description}</p>
          </div>
        ))}
      </div>

      <footer className="footer">
        <p>נוצר באהבה ואומנות • 2025</p>
      </footer>
    </div>
  )
}
