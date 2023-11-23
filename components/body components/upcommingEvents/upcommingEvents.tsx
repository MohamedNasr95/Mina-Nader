import Image from "next/image";

function UpcommingEvents () {
    return(
      <section id="services" className="about section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Upcomming events</h2>
          <h3>Be tuned for <span>[Upcomming event]</span></h3>
          <p>[hook sentence]Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
        </div>

        <div className="row">
          <div className="col-lg-6" data-aos="fade-right" data-aos-delay="100">
            <Image fill src="/public/assets/img/about.jpg" className="img-fluid about_img_size" alt="Upcomming event"/>            
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="100">
            <h3>[discription]Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
            <p className="fst-italic">
              [place, date & time]Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <ul>
              <li>
                <i className="bx bx-store-alt"></i>
                <div>
                  <h5>How to buy tickets</h5>
                  <p>[dis]Magni facilis facilis repellendus cum excepturi quaerat praesentium libre trade</p>
                </div>
              </li>
              <li>
                <i className="bx bx-images"></i>
                <div>
                  <h5>Magnam soluta odio exercitationem reprehenderi</h5>
                  <p>Quo totam dolorum at pariatur aut distinctio dolorum laudantium illo direna pasata redi</p>
                </div>
              </li>
            </ul>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
        </div>

      </div>
    </section>
    );
}

export default UpcommingEvents;