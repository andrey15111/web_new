<template>
    <header>
      <div class="container">
        <nav class="navbar navbar-expand-lg mt-0 pb-0 pt-0">
          <div class="container-fluid">
              <router-link to="/" class="navbar-brand">
                <img src="/img/logo.svg" />
              </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <router-link to="/" class="nav-link text-animation">Главная</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/#menu" class="nav-link  text-animation">Меню</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/events" class="nav-link text-animation">Мероприятия</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/franchise" class="nav-link text-animation">Франшиза</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/login" class="nav-link text-animation">Войти</router-link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  <main>
    <router-view/>
  </main>
  <footer>
    <div class="container">
      <div class="footer-1">
          <div class="contacts">
            <div class="text-contacts">
              <h3><b>Наши контакты</b></h3>
              <h4><b>Адрес</b></h4>
              <h5>ул. Щорса, 64, Белгород
                МТРК СитиМолл Белгородский</h5>
              <h4><b>Режим работы</b></h4>
              <h5>пн-вс 10:00-22:00</h5>
              <h4><b>Телефон</b></h4>
              <h5><a href="">8-999-999-99-99(Сделать заказ онлайн)</a></h5>
              <h5><a href="">8-888-888-88-88(Франшиза)</a></h5>
              <h5><a href="">8-777-777-77-77(Бронь)</a></h5>
              <h4><b>Социальные сети</b></h4>
            </div>
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A944302092fcd2747c4fe4078fcb812c0376854756787ebe1c1e7de5a6cefe714&amp;source=constructor" width="600" height="400" frameborder="0"></iframe>
          </div>
      </div>
      <div class="footer-2">
        <hr>
        <div>@ 2023 Все права защищены</div>
      </div>
    </div>
  </footer>
</template>

