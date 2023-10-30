import style from '../../../app/page.module.css'
import './page.css'

function Hero () {
    return (
        <section id="hero" className="d-flex align-items-center">
            <div className="container Hero-resizing" data-aos="zoom-out" data-aos-delay="100">
            <h1>Mina Nader</h1>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla molestias eligendi sequi reiciendis nihil quibusdam odio at voluptates! Placeat veniam recusandae id aperiam fuga quos quidem repellat labore sequi necessitatibus.</h2>
            <div className="d-flex">
                <a href="#about" className="btn-get-started scrollto">Get Started</a>
                <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="glightbox btn-watch-video"><i className="bi bi-play-circle"></i><span>Watch Video</span></a>
            </div>
            </div>
        </section>
    );
}

export default Hero; 