import styles from '../../../app/page.module.css'

function Header () {
    return (
    <header id="header" className="d-flex align-items-center fixed-top">
        <div className="container d-flex align-items-center justify-content-between">

        <h1 className="logo"><a href="index.html">Mina Nader<span>.</span></a></h1>
        {/* <a href="index.html" className="logo"><img src="assets/img/logo.png" alt=""></a> */}

        <nav id="navbar" className="navbar">
            <ul>
            <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
            <li><a className="nav-link scrollto" href="#about">About</a></li>
            <li><a className="nav-link scrollto" href="#services">Upcomming events</a></li>
            <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
        </div>
    </header>
    );
}

export default Header;