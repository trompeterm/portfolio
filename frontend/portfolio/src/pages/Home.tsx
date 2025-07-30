import './Home.css';
import seniorPhoto from '../assets/career_fair.jpg';

export default function Home() {
    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title">
                            Hi, I'm <span className="highlight">Miles Trompeter</span>
                        </h1>
                        <p className="hero-subtitle">
                            Software Engineer & Full-Stack Developer
                        </p>
                        <p className="hero-description">
                            Passionate about creating innovative solutions and building exceptional user experiences. 
                            I specialize in modern web technologies and love turning complex problems into elegant, 
                            user-friendly applications.
                        </p>
                        <div className="hero-buttons">
                            <button className="btn-primary">View My Work</button>
                            <button className="btn-secondary">Get In Touch</button>
                        </div>
                    </div>
                    <div className="hero-image">
                        <div className="image-container">
                            <img src={seniorPhoto} alt="Miles Trompeter" />
                            <div className="image-overlay"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Stats Section */}
            <section className="stats-section">
                <div className="stats-container">
                    <div className="stat-item">
                        <h3>3+</h3>
                        <p>Years Experience</p>
                    </div>
                    <div className="stat-item">
                        <h3>20+</h3>
                        <p>Projects Completed</p>
                    </div>
                    <div className="stat-item">
                        <h3>5+</h3>
                        <p>Technologies</p>
                    </div>
                    <div className="stat-item">
                        <h3>100%</h3>
                        <p>Client Satisfaction</p>
                    </div>
                </div>
            </section>

            {/* Featured Skills */}
            <section className="skills-section">
                <h2>What I Do</h2>
                <div className="skills-grid">
                    <div className="skill-card">
                        <div className="skill-icon">💻</div>
                        <h3>Frontend Development</h3>
                        <p>Creating responsive, interactive user interfaces with React, TypeScript, and modern CSS</p>
                    </div>
                    <div className="skill-card">
                        <div className="skill-icon">⚙️</div>
                        <h3>Backend Development</h3>
                        <p>Building robust APIs and server-side applications with Node.js and databases</p>
                    </div>
                    <div className="skill-card">
                        <div className="skill-icon">🎨</div>
                        <h3>UI/UX Design</h3>
                        <p>Designing intuitive user experiences with attention to detail and modern design principles</p>
                    </div>
                </div>
            </section>
        </div>
    )
}