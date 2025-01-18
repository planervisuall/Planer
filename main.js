import './style.css'

document.querySelector('#app').innerHTML = `
    <header>
        <div class="logo-container">
            <div class="logo">
                <span class="logo-icon">P</span>
                <span class="logo-text">Planer Visuall</span>
            </div>
            <p>Soluções inovadoras em marketing digital e desenvolvimento profissional</p>
        </div>
    </header>

    <nav>
        <a href="#curiosidades">Insights</a>
        <a href="#cursos">Capacitação</a>
        <a href="#contato">Contato</a>
    </nav>

    <div class="content">
        <div id="curiosidades">
            <img src="https://cdn-icons-png.flaticon.com/512/2682/2682065.png" alt="Ícone de Insights">
            <h3>Insights Estratégicos</h3>
            <p>Análises aprofundadas sobre as últimas tendências em marketing digital e tecnologia para impulsionar seu negócio.</p>
            <a href="#" class="cta-button">Explorar Insights</a>
        </div>

        <div id="cursos">
            <img src="https://cdn-icons-png.flaticon.com/512/2436/2436874.png" alt="Ícone de Capacitação">
            <h3>Capacitação Especializada</h3>
            <p>Programas exclusivos desenvolvidos por especialistas do mercado para acelerar sua evolução profissional.</p>
            <a href="#" class="cta-button">Conhecer Programas</a>
        </div>
    </div>

    <footer>
        <div class="footer-content">
            <div class="company-info">
                <div class="logo">
                    <span class="logo-icon">P</span>
                    <span class="logo-text">Planer Visuall</span>
                </div>
                <p>Transformando conhecimento em resultados</p>
            </div>
            <div class="contact-info">
                <p>contato@planervisuall.com</p>
                <p>&copy; 2025 Planer Visuall. Todos os direitos reservados.</p>
            </div>
        </div>
    </footer>
`