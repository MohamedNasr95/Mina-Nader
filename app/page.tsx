import Image from 'next/image'
import Header from '@/components/layouts/header/header'
import Footer from '@/components/layouts/footer/footer'
import Hero from '@/components/body components/hero/Hero'
import About from '@/components/body components/about/about'
import UpcommingEvents from '@/components/body components/upcommingEvents/upcommingEvents'
import ContactUs from '@/components/body components/contactUs/ContactUs'
import '../public/assets/vendor/bootstrap/css/bootstrap.min.css'
import '../public/assets/css/style.css'
// import 'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Roboto:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i'
import '../public/assets/vendor/aos/aos.css'
import '../public/assets/vendor/bootstrap-icons/bootstrap-icons.css'
import '../public/assets/vendor/boxicons/css/boxicons.min.css'
import '../public/assets/vendor/glightbox/css/glightbox.min.css'
import '../public/assets/vendor/swiper/swiper-bundle.min.css'
import './page.module.css'
// import '../public/assets/vendor/purecounter/purecounter_vanilla.js'
import '../public/assets/vendor/aos/aos.js'
// import '../public/assets/vendor/bootstrap/js/bootstrap.bundle.min.js'
// import '../public/assets/vendor/glightbox/js/glightbox.min.js'
// import '../public/assets/js/main.js'
// import ''
// import ''
// import ''
// import ''
// import ''
// import ''


function Home() {
  return (     
      <body>
        {/* =========================  Header ======================================================================== */}       
        <header>
          <Header />
        </header>
        <main id="main">
          <Hero />
          <About />
          <UpcommingEvents />
          <ContactUs />
          <Footer />
        </main>
      </body>
  )
}

export default Home;