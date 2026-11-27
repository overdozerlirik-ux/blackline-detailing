
import { createRoot } from 'react-dom/client';
import { useState } from 'react';
import './index.css';

const services = [
  {
    number: '01',
    title: 'Детейлинг-мойка',
    description: 'Бережная очистка кузова, дисков и труднодоступных элементов автомобиля.',
    price: 'от 80 BYN',
  },
  {
    number: '02',
    title: 'Полировка кузова',
    description: 'Удаление мелких царапин, восстановление блеска и глубины цвета.',
    price: 'от 350 BYN',
  },
  {
    number: '03',
    title: 'Защитные покрытия',
    description: 'Керамика и другие защитные составы для сохранения идеального вида.',
    price: 'от 250 BYN',
  },
  {
    number: '04',
    title: 'Химчистка салона',
    description: 'Глубокая очистка интерьера, уход за кожей и текстильными поверхностями.',
    price: 'от 200 BYN',
  },
];

const gallery = [
  'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1100&q=85',
  'https://images.unsplash.com/photo-1608501078713-8e445a709b39?auto=format&fit=crop&w=1100&q=85',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1100&q=85',
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="header">
        <a href="#home" className="logo" onClick={closeMenu}>
          BLACKLINE<span>.</span>
          <small>DETAILING STUDIO</small>
        </a>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </button>

        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          <a href="#home" onClick={closeMenu}>Главная</a>
          <a href="#services" onClick={closeMenu}>Услуги</a>
          <a href="#gallery" onClick={closeMenu}>Наши услуги</a>
          <a href="#about" onClick={closeMenu}>О студии</a>
          <a href="#contacts" className="nav-button" onClick={closeMenu}>Записаться ↗</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-image" />
          <div className="hero-overlay" />
          <div className="hero-content">
            <div className="eyebrow"><span /> DETAILING STUDIO · MINSK</div>
            <h1>БЕЗУПРЕЧНЫЙ<br />ВИД. <span>БЕЗ КОМПРОМИССОВ.</span></h1>
            <p>
              Профессиональный уход за автомобилем.
              Детали имеют значение — мы это знаем.
            </p>
            <div className="hero-actions">
              <a href="#contacts" className="button button-orange">Записаться на услугу ↗</a>
              <a href="#services" className="button button-outline">Наши услуги</a>
            </div>
          </div>
          <div className="hero-bottom">
            <span>01 / 04</span>
            <span>PERFECTION IN EVERY DETAIL</span>
            <span>SCROLL TO EXPLORE ↓</span>
          </div>
        </section>

        <section className="intro section" id="about">
          <div className="section-label">01 — О НАС</div>
          <div className="intro-content">
            <h2>МЫ НЕ ПРОСТО<br />МОЕМ АВТОМОБИЛИ.<br /><span>МЫ СОХРАНЯЕМ ИХ ХАРАКТЕР.</span></h2>
            <div className="intro-text">
              <p>
                BLACKLINE DETAILING — студия профессионального ухода за автомобилями.
                Мы уделяем внимание каждой детали, используем качественные материалы
                и работаем с вниманием к результату.
              </p>
              <a href="#contacts" className="text-link">Познакомиться с нами ↗</a>
            </div>
          </div>
        </section>

        <section className="services section" id="services">
          <div className="section-label">02 — ЧТО МЫ ДЕЛАЕМ</div>
          <div className="section-heading">
            <h2>НАШИ <span>УСЛУГИ</span></h2>
            <p>Комплексный уход, который возвращает автомобилю его лучший вид.</p>
          </div>
          <div className="service-list">
            {services.map((service) => (
              <article className="service-item" key={service.number}>
                <span className="service-number">{service.number}</span>
                <div className="service-info">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <span className="service-price">{service.price}</span>
                <a href="#contacts" className="service-arrow" aria-label={`Записаться: ${service.title}`}>↗</a>
              </article>
            ))}
          </div>
          <p className="price-note">* Указаны ориентировочные цены. Точная стоимость зависит от автомобиля и состояния.</p>
        </section>

        <section className="gallery section" id="gallery">
          <div className="section-label">03 — НАШ ПОДХОД</div>
          <div className="section-heading">
            <h2>ЭСТЕТИКА <span>В ДЕТАЛЯХ</span></h2>
            <p>Каждая поверхность заслуживает идеального ухода.</p>
          </div>
          <div className="gallery-grid">
            {gallery.map((photo, index) => (
              <div className={`gallery-item gallery-item-${index + 1}`} key={photo}>
                <img
                  src={photo}
                  alt={`Иллюстрация услуги детейлинга ${index + 1}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="statement">
          <div className="statement-inner">
            <span>BLACKLINE PHILOSOPHY</span>
            <h2>ВАШ АВТОМОБИЛЬ.<br /><em>НАШЕ ВНИМАНИЕ.</em></h2>
            <p>Качество, которое видно. Забота, которую можно почувствовать.</p>
          </div>
        </section>

        <section className="contacts section" id="contacts">
          <div className="section-label">04 — СВЯЗАТЬСЯ С НАМИ</div>
          <div className="contacts-content">
            <div>
              <h2>ГОТОВЫ<br />К <span>ПРЕОБРАЖЕНИЮ?</span></h2>
              <p>Напишите нам, расскажите о своём автомобиле — поможем подобрать подходящие услуги.</p>
            </div>

            
<form
  className="contact-card"
  onSubmit={(e) => {
    e.preventDefault();

    const formElement = e.currentTarget;
    const form = new FormData(formElement);

    const name = form.get('name');

    alert(
      `Спасибо, ${name}!\n\nЭто демонстрационная форма сайта BLACKLINE DETAILING. Реальная запись не осуществляется.`
    );

    formElement.reset();
  }}
>
  <span>ЗАПИСЬ И КОНСУЛЬТАЦИЯ</span>
  <h3>ОСТАВИТЬ ЗАЯВКУ</h3>

  <input name="name" placeholder="Ваше имя" required />
  <input name="phone" placeholder="Номер телефона" required />
  <input name="car" placeholder="Марка и модель автомобиля" />

  <select name="service" defaultValue="" required>
    <option value="" disabled>Выберите услугу</option>
    <option>Детейлинг-мойка</option>
    <option>Полировка кузова</option>
    <option>Защитные покрытия</option>
    <option>Химчистка салона</option>
  </select>

  <button type="submit" className="button button-orange">
    Отправить заявку ↗
  </button>

  <small>Минск · Беларусь</small>
</form>

          </div>
        </section>
      </main>

      <footer className="footer">
        <a href="#home" className="logo">BLACKLINE<span>.</span></a>
        <p>© 2026 BLACKLINE DETAILING. ALL RIGHTS RESERVED.</p>
        <a href="#home">НАВЕРХ ↑</a>
      </footer>
    </>
  );
}

export default App;

createRoot(document.getElementById('root')).render(<App />);
