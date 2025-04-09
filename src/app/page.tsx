import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Виды деятельности в интернете | Digital Profi</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>{`
          :root {
            --primary: #4361ee;
            --secondary: #3f37c9;
            --accent: #4895ef;
            --light: #f8f9fa;
            --dark: #212529;
            --success: #4cc9f0;
          }
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }
          body {
            background-color: #f5f7fa;
            color: var(--dark);
            line-height: 1.6;
          }
          header {
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            color: white;
            padding: 2rem 0;
            text-align: center;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          }
          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
          }
          nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 0;
          }
          .logo {
            font-size: 1.8rem;
            font-weight: 700;
            color: white;
            text-decoration: none;
          }
          .nav-links {
            display: flex;
            list-style: none;
          }
          .nav-links li {
            margin-left: 2rem;
          }
          .nav-links a {
            color: white;
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s ease;
          }
          .nav-links a:hover {
            color: var(--accent);
          }
          .hero {
            padding: 4rem 0;
            text-align: center;
          }
          .hero h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
          }
          .hero p {
            font-size: 1.2rem;
            max-width: 700px;
            margin: 0 auto 2rem;
          }
          .btn {
            display: inline-block;
            background-color: var(--accent);
            color: white;
            padding: 0.8rem 2rem;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
            border: none;
            cursor: pointer;
          }
          .btn:hover {
            background-color: var(--secondary);
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          }
          .section {
            padding: 4rem 1rem;
            background-color: white;
          }
          .section h2 {
            text-align: center;
            margin-bottom: 2rem;
            color: var(--primary);
          }
          .activities-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            max-width: 1000px;
            margin: 0 auto;
          }
          .activity-card {
            background: #ffffff;
            border-radius: 12px;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
            padding: 2rem;
            text-align: center;
            transition: transform 0.3s ease;
          }
          .activity-card:hover {
            transform: translateY(-5px);
          }
          .activity-card h3 {
            color: var(--secondary);
            margin-bottom: 1rem;
          }
          .footer {
            background-color: var(--dark);
            color: white;
            text-align: center;
            padding: 2rem 1rem;
          }
        `}</style>
      </Head>

      <header>
        <div className="container">
          <nav>
            <a href="#" className="logo">Digital Profi</a>
            <ul className="nav-links">
              <li><a href="#">Главная</a></li>
              <li><a href="#activities">Деятельность</a></li>
              <li><a href="#about">О сайте</a></li>
            </ul>
          </nav>

          <div className="hero">
            <h1>Виды деятельности в интернете</h1>
            <p>Познакомьтесь с популярными и перспективными способами заработка и самореализации в цифровом пространстве.</p>
            <a href="#activities" className="btn">Смотреть список</a>
          </div>
        </div>
      </header>

      <section className="section" id="activities">
        <h2>Популярные направления</h2>
        <div className="activities-grid">
          <div className="activity-card">
            <h3>Фриланс</h3>
            <p>Работа на заказ: дизайн, программирование, копирайтинг, переводы и многое другое.</p>
          </div>
          <div className="activity-card">
            <h3>Интернет-магазины</h3>
            <p>Продажа товаров через собственные сайты или площадки вроде Wildberries, Ozon.</p>
          </div>
          <div className="activity-card">
            <h3>Контент-креаторы</h3>
            <p>Ведение YouTube, TikTok, блогов и подкастов. Заработок на рекламе и донатах.</p>
          </div>
          <div className="activity-card">
            <h3>Обучение онлайн</h3>
            <p>Создание и продажа курсов, репетиторство, наставничество.</p>
          </div>
          <div className="activity-card">
            <h3>Партнёрские программы</h3>
            <p>Заработок на продвижении чужих товаров и услуг через свои ресурсы.</p>
          </div>
          <div className="activity-card">
            <h3>Криптовалюты и инвестиции</h3>
            <p>Трейдинг, холдинг, NFT, DeFi — новые способы приумножить капитал.</p>
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <h2>О проекте</h2>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <p>Этот сайт создан для того, чтобы помочь вам разобраться в многообразии интернет-деятельности. Независимо от вашего опыта, вы найдёте для себя подходящий путь к онлайн-заработку или самореализации.</p>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Digital Profi. Все права защищены.</p>
      </footer>
    </>
  );
}
