import ContactPage from './components/HomePage/Main'
import ProjectPage from './components/ProjectPage/Main'
import Decorations from './components/Decorations'
import Footer from './components/footer'

export default function Home() {
	return (
		<>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Виды деятельности в интернете | Digital Profi</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <style>
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
        
        section {
            padding: 5rem 0;
        }
        
        .section-title {
            text-align: center;
            margin-bottom: 3rem;
        }
        
        .section-title h2 {
            font-size: 2.5rem;
            color: var(--primary);
            margin-bottom: 1rem;
        }
        
        .section-title p {
            color: #666;
            max-width: 700px;
            margin: 0 auto;
        }
        
        .activities {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }
        
        .activity-card {
            background: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
        }
        
        .activity-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
        }
        
        .activity-img {
            height: 200px;
            overflow: hidden;
        }
        
        .activity-img img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
        }
        
        .activity-card:hover .activity-img img {
            transform: scale(1.1);
        }
        
        .activity-content {
            padding: 1.5rem;
        }
        
        .activity-content h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            color: var(--primary);
        }
        
        .activity-content p {
            color: #666;
            margin-bottom: 1.5rem;
        }
        
        .stats {
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            color: white;
            padding: 4rem 0;
        }
        
        .stats-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
            text-align: center;
        }
        
        .stat-item h3 {
            font-size: 3rem;
            margin-bottom: 0.5rem;
        }
        
        .stat-item p {
            font-size: 1.2rem;
            opacity: 0.9;
        }
        
        .testimonials {
            background-color: var(--light);
        }
        
        .testimonial-card {
            background: white;
            padding: 2rem;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            margin: 0 1rem;
        }
        
        .testimonial-card p {
            font-style: italic;
            margin-bottom: 1.5rem;
        }
        
        .testimonial-author {
            display: flex;
            align-items: center;
        }
        
        .testimonial-author img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            margin-right: 1rem;
            object-fit: cover;
        }
        
        .author-info h4 {
            margin-bottom: 0.2rem;
        }
        
        .author-info p {
            font-style: normal;
            color: #666;
            font-size: 0.9rem;
        }
        
        footer {
            background-color: var(--dark);
            color: white;
            padding: 4rem 0 2rem;
        }
        
        .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
            margin-bottom: 3rem;
        }
        
        .footer-column h3 {
            font-size: 1.2rem;
            margin-bottom: 1.5rem;
            position: relative;
            padding-bottom: 0.5rem;
        }
        
        .footer-column h3::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 50px;
            height: 2px;
            background-color: var(--accent);
        }
        
        .footer-column ul {
            list-style: none;
        }
        
        .footer-column ul li {
            margin-bottom: 0.8rem;
        }
        
        .footer-column ul li a {
            color: #ddd;
            text-decoration: none;
            transition: all 0.3s ease;
        }
        
        .footer-column ul li a:hover {
            color: var(--accent);
            padding-left: 5px;
        }
        
        .social-links {
            display: flex;
            gap: 1rem;
        }
        
        .social-links a {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            background-color: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            color: white;
            transition: all 0.3s ease;
        }
        
        .social-links a:hover {
            background-color: var(--accent);
            transform: translateY(-3px);
        }
        
        .copyright {
            text-align: center;
            padding-top: 2rem;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            color: #aaa;
            font-size: 0.9rem;
        }
        
        @media (max-width: 768px) {
            .nav-links {
                display: none;
            }
            
            .hero h1 {
                font-size: 2.2rem;
            }
            
            .section-title h2 {
                font-size: 2rem;
            }
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <nav>
                <a href="#" class="logo">Digital Profi</a>
                <ul class="nav-links">
                    <li><a href="#">Главная</a></li>
                    <li><a href="#activities">Виды деятельности</a></li>
                    <li><a href="#benefits">Преимущества</a></li>
                    <li><a href="#testimonials">Отзывы</a></li>
                    <li><a href="#contact">Контакты</a></li>
                </ul>
            </nav>
            
            <div class="hero">
                <h1>Современные виды деятельности в интернете</h1>
                <p>Откройте для себя лучшие способы заработка и самореализации в цифровом мире. Мы собрали для вас самые актуальные и перспективные направления онлайн-деятельности.</p>
                <a href="#activities" class="btn">Узнать больше</a>
            </div>
        </div>
    </header>
    
    <section id="activities">
        <div class="container">
            <div class="section-title">
                <h2>Популярные виды онлайн-деятельности</h2>
                <p>Выберите направление, которое соответствует вашим навыкам и интересам</p>
            </div>
            
            <div class="activities">
                <div class="activity-card">
                    <div class="activity-img">
                        <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Фриланс">
                    </div>
                    <div class="activity-content">
                        <h3>Фриланс</h3>
                        <p>Работа на себя через биржи фриланса. Программирование, дизайн, копирайтинг, маркетинг и многое другое.</p>
                        <a href="#" class="btn">Подробнее</a>
                    </div>
                </div>
                
                <div class="activity-card">
                    <div class="activity-img">
                        <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Блоггинг">
                    </div>
                    <div class="activity-content">
                        <h3>Блоггинг</h3>
                        <p>Создание и монетизация собственного блога или видеоблога. Поделитесь своими знаниями с миром и зарабатывайте.</p>
                        <a href="#" class="btn">Подробнее</a>
                    </div>
                </div>
                
                <div class="activity-card">
                    <div class="activity-img">
                        <img src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Интернет-магазин">
                    </div>
                    <div class="activity-content">
                        <h3>Интернет-магазин</h3>
                        <p>Продажа товаров через собственный онлайн-магазин или маркетплейсы. Дропшиппинг, печать по требованию и другие модели.</p>
                        <a href="#" class="btn">Подробнее</a>
                    </div>
                </div>
                
                <div class="activity-card">
                    <div class="activity-img">
                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Обучение онлайн">
                    </div>
                    <div class="activity-content">
                        <h3>Онлайн-курсы</h3>
                        <p>Создание и продажа обучающих курсов. Передавайте свои знания и зарабатывайте на этом.</p>
                        <a href="#" class="btn">Подробнее</a>
                    </div>
                </div>
                
                <div class="activity-card">
                    <div class="activity-img">
                        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Партнерские программы">
                    </div>
                    <div class="activity-content">
                        <h3>Партнерские программы</h3>
                        <p>Заработок на продвижении чужих товаров и услуг. Получайте процент с каждой продажи.</p>
                        <a href="#" class="btn">Подробнее</a>
                    </div>
                </div>
                
                <div class="activity-card">
                    <div class="activity-img">
                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Разработка приложений">
                    </div>
                    <div class="activity-content">
                        <h3>Разработка приложений</h3>
                        <p>Создание мобильных приложений и SaaS-решений. Востребованное направление с высоким доходом.</p>
                        <a href="#" class="btn">Подробнее</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section class="stats" id="benefits">
        <div class="container">
            <div class="stats-container">
                <div class="stat-item">
                    <h3>10+</h3>
                    <p>Направлений деятельности</p>
                </div>
                <div class="stat-item">
                    <h3>1000+</h3>
                    <p>Успешных кейсов</p>
                </div>
                <div class="stat-item">
                    <h3>24/7</h3>
                    <p>Доступ к обучению</p>
                </div>
                <div class="stat-item">
                    <h3>99%</h3>
                    <p>Довольных клиентов</p>
                </div>
            </div>
        </div>
    </section>
    
    <section class="testimonials" id="testimonials">
        <div class="container">
            <div class="section-title">
                <h2>Отзывы наших клиентов</h2>
                <p>Узнайте, что говорят люди, которые уже начали зарабатывать в интернете</p>
            </div>
            
            <div class="testimonial-card">
                <p>"Благодаря курсам по фрилансу я смог уволиться с нелюбимой работы и теперь зарабатываю в 3 раза больше, работая из любой точки мира. Это изменило мою жизнь!"</p>
                <div class="testimonial-author">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Алексей Петров">
                    <div class="author-info">
                        <h4>Алексей Петров</h4>
                        <p>Веб-разработчик, фрилансер</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <footer id="contact">
        <div class="container">
            <div class="footer-content">
                <div class="footer-column">
                    <h3>Digital Profi</h3>
                    <p>Помогаем людям находить себя в цифровом мире с 2015 года. Обучение, поддержка и сообщество профессионалов.</p>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-vk"></i></a>
                        <a href="#"><i class="fab fa-telegram"></i></a>
                        <a href="#"><i class="fab fa-youtube"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
                
                <div class="footer-column">
                    <h3>Направления</h3>
                    <ul>
                        <li><a href="#">Фриланс</a></li>
                        <li><a href="#">Блоггинг</a></li>
                        <li><a href="#">Интернет-магазины</a></li>
                        <li><a href="#">Партнерки</a></li>
                        <li><a href="#">Разработка</a></li>
                    </ul>
                </div>
                
                <div class="footer-column">
                    <h3>Ресурсы</h3>
                    <ul>
                        <li><a href="#">Блог</a></li>
                        <li><a href="#">Курсы</a></li>
                        <li><a href="#">Вебинары</a></li>
                        <li><a href="#">Форум</a></li>
                        <li><a href="#">Вакансии</a></li>
                    </ul>
                </div>
                
                <div class="footer-column">
                    <h3>Контакты</h3>
                    <ul>
                        <li><i class="fas fa-envelope"></i> info@digitalprofi.ru</li>
                        <li><i class="fas fa-phone"></i> +7 (123) 456-78-90</li>
                        <li><i class="fas fa-map-marker-alt"></i> Москва, ул. Цифровая, 15</li>
                    </ul>
                </div>
            </div>
            
            <div class="copyright">
                <p>&copy; 2023 Digital Profi. Все права защищены.</p>
            </div>
        </div>
    </footer>
</body>
</> 
	)
}
