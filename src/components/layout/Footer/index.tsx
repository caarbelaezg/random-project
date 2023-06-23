import "./styles.css";
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__bg-img"></div>
      <div className="footer__sections">
        <section>
          <h2 className="footer__title">Untitled UI</h2>
          <span className="footer__description">Stay tuned</span>
          <div className="footer__subscribe">
            <input className="footer__input-mail" type="email" />
            <button className="footer__cta-subscribe">Subscribe</button>
          </div>
          <span>Subscribing to newsletter you will receive updates from products</span>
        </section>
        <div className="footer__resources">
          <ul className="footer__siteMap">
            <li><h3>Sitemap</h3></li>
            <li><a className="footer__link" href="#">Home</a></li>
            <li><a className="footer__link" href="#">Products</a></li>
            <li><a className="footer__link" href="#">Login</a></li>
          </ul>
          <ul>
            <li><h3>Useful links</h3></li>
            <li><a className="footer__link" href="#">Skin care</a></li>
            <li><a className="footer__link" href="#">Video games</a></li>
            <li><a className="footer__link" href="#">Book of the week</a></li>
            <li><a className="footer__link" href="#">About pride</a></li>
          </ul>
          <ul>
            <li><h3>Games of the week</h3></li>
            <li><a className="footer__link" href="#">Zelda TOTK</a></li>
            <li><a className="footer__link" href="#">League of legends</a></li>
            <li><a className="footer__link" href="#">Just dance 2023</a></li>
            <li><a className="footer__link" href="#">Age of empires</a></li>
          </ul>
        </div>
        <div className="footer__links">
          <ul className="footer__links-list">
            <li><h5>© 2023 Untitled UI. All rights reserved.</h5></li>
            <li className="footer__list-item"><a className="footer__link" href="#">Terms of use</a></li>
            <li className="footer__list-item"><a className="footer__link" href="#">Privacy</a></li>
            <li className="footer__list-item"><a className="footer__link" href="#">Cookies</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
