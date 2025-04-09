import Head from 'next/head'
import ContactPage from './components/HomePage/Main'
import ProjectPage from './components/ProjectPage/Main'
import Decorations from './components/Decorations'
import Footer from './components/footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Виды деятельности в интернете | Digital Profi</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
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
        `}</style>
      </Head>

      <header>
        <div className="container">
          <nav>
            <a href="#" className="logo">Digital Profi</a>
            <ul className="nav-links">
              <li><a href="#">Главная</a></li>
              <li><a href="#activities">Виды деятельности</a></li>
              <li><a href="#benefits">Преимущества</a></li>
              <li><a href="#testimonials">Отзывы</a></li>
              <li><a href="#contact">Контакты</a></li>
            </ul>
          </nav>

          <div className="hero">
            <h1>Современные виды деятельности в интернете</h1>
            <p>Откройте для себя лучшие способы заработка и самореализации в цифровом мире. Мы собрали для вас самые актуальные и перспективные направления онлайн-деятельности.</p>
            <a href="#activities" className="btn">Узнать больше</a>
          </div>
        </div>
      </header>

      <Decorations />
      <ProjectPage />
      <ContactPage />
      <Footer />
    </>
  )
}
