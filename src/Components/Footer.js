import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <nav className="footer__nav-menu">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#">Информация</a>
              </li>
              <li className="footer__item">
                <a href="#">Блог</a>
              </li>
              <li className="footer__item">
                <a href="#">Вакансии</a>
              </li>
              <li className="footer__item">
                <a href="#">Помощь</a>
              </li>
              <li className="footer__item">
                <a href="#">API</a>
              </li>
              <li className="footer__item">
                <a href="#">Конфиденциальность</a>
              </li>
              <li className="footer__item">
                <a href="#">Условия</a>
              </li>
              <li className="footer__item">
                <a href="#">Популярные аккаунты</a>
              </li>
              <li className="footer__item">
                <a href="#">Хэштеги</a>
              </li>
              <li className="footer__item">
                <a href="#">Места</a>
              </li>
            </ul>
          </nav>
          <div className="footer__info">
            Автор приложения "PhotoView" Гура Илья Сергеевич
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
