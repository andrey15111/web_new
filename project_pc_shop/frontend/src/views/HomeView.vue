<template>
  <main>

    <div class="up-main">
      <section>
        <div id="carouselExampleFade" class="carousel slide carousel-fade " data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/img/slider-1.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="/img/slider-2.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="/img/slider-3.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="/img/slider-4.jpg" class="d-block w-100" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"  data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Предыдущий</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"  data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Следующий</span>
        </button>
      </div>
      </section>
        <nav class="navbar navbar-expand-lg mb sticky">
          <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav nav-center">
                <li class="nav-item at">
                  <router-link class="nav-link" to="/#xinkali">
                    <img src="/img/xinkali-img.png" width="32" height="32">
                    <div class="extra-nav-item-info">Хинкали</div>
                  </router-link>
                </li>
                <li class="nav-item ml at">
                  <router-link class="nav-link" to="/#muchnoe">
                    <img src="/img/muchnoe.png" width="32" height="32">
                    <div >Мучное</div>
                  </router-link>
                </li>
                <li class="nav-item ml at">
                  <router-link class="nav-link" to="/#souce">
                    <img src="/img/souce-btn.png" width="32" height="32">
                    <div >Соусы</div>
                  </router-link>
                </li>
                <li class="nav-item ml at">
                  <router-link class="nav-link" to="/#salads">
                    <img src="/img/salad-icon.png" width="32" height="32">
                    <div >Закуски и салаты</div>
                  </router-link>
                </li>
                <li class="nav-item ml at">
                  <router-link class="nav-link" to="/#drinks">
                    <img  src="/img/napitki.png" width="32" height="32">
                    <div >Напитки</div>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
<!--      <div class="text-center">-->
<!--        <div class="btn-group" role="group" aria-label="Basic example">-->
<!--            <button  onclick="window.location.href = '#xinkali'" type="button" class="btn btn-secondary">-->
<!--              <img class="btn-group-menu-img" src="/img/xinkali-img.png" width="32" height="32">-->
<!--              <div class="btn-group-menu-text">Хинкали</div>-->
<!--            </button>-->
<!--            <button onclick="window.location.href = '#muchnoe'" type="button" class="btn btn-secondary">-->
<!--              <img class="btn-group-menu-img" src="/img/muchnoe.png" width="32" height="32">-->
<!--              <div class="btn-group-menu-text">Мучное</div>-->
<!--            </button>-->
<!--            <button onclick="window.location.href = '#souce'" type="button" class="btn btn-secondary">-->
<!--              <img class="btn-group-menu-img" src="/img/salad-icon.png" width="32" height="32">-->
<!--              <div class="btn-group-menu-text">Соусы</div>-->
<!--            </button>-->
<!--            <button onclick="window.location.href = '#salads'" type="button" class="btn btn-secondary">-->
<!--              <img class="btn-group-menu-img" src="/img/souce-btn.png" width="32" height="32">-->
<!--              <div class="btn-group-menu-text">Закуски и салаты</div>-->
<!--            </button>-->
<!--            <button onclick="window.location.href = '#drinks'" type="button" class="btn btn-secondary">-->
<!--              <img class="btn-group-menu-img" src="/img/napitki.png" width="32" height="32">-->
<!--              <div class="btn-group-menu-text">Напитки</div>-->
<!--            </button>-->
<!--          </div>-->
<!--      </div>-->
    </div>
    <div class="container">
      <div id="menu">
        <div class="section" id="xinkali">
          <h3><a>Хинкали</a></h3>
        </div>
        <div class="products">
          <div class="product-item">
          <div>
            <img src="/img/xinkali-1.png">
          </div>
          <h3><a href="">Хинкали с мясом и зеленью</a></h3>
          <div class="product-info-below">
            <div class="price-container">
              <div class="product-count">1шт</div>
              <div class="price"><a>35₽</a></div>
            </div>
            <div>
              <button type="button" class="btn btn-outline-warning rounded-circle">+</button>
            </div>
          </div>
        </div>
          <div class="product-item">
          <div>
            <img src="/img/xinkali-1.png">
          </div>
          <h3><a href="">Хинкали с сыром</a></h3>
          <div class="product-info-below">
            <div class="price-container">
              <div class="product-count">1шт</div>
              <div class="price"><a>50₽</a></div>
            </div>
            <div>
              <button type="button" class="btn btn-outline-warning rounded-circle">+</button>
            </div>
          </div>
        </div>
          <div class="product-item">
          <div>
            <img src="/img/xinkali-1.png">
          </div>
          <h3><a href="">Хинкали с грибами</a></h3>
          <div class="product-info-below">
            <div class="price-container">
              <div class="product-count">1шт</div>
              <div class="price"><a>45₽</a></div>
            </div>
            <div>
              <button type="button" class="btn btn-outline-warning rounded-circle">+</button>
            </div>
          </div>
        </div>
          <div class="product-item">
          <div>
            <img src="/img/xinkali-1.png">
          </div>
          <h3><a href="">Хинкали с говядиной</a></h3>
          <div class="product-info-below">
            <div class="price-container">
              <div class="product-count">1шт</div>
              <div class="price"><a>45₽</a></div>
            </div>
            <div>
              <button type="button" class="btn btn-outline-warning rounded-circle">+</button>
            </div>
          </div>
        </div>
          <div class="product-item">
          <div>
            <img src="/img/xinkali-1.png">
          </div>
          <h3><a href="">Хинкали с бараниной и зеленью</a></h3>
          <div class="product-info-below">
            <div class="price-container">
              <div class="product-count">1шт</div>
              <div class="price"><a>50₽</a></div>
            </div>
            <div>
              <button type="button" class="btn btn-outline-warning rounded-circle">+</button>
            </div>
          </div>
        </div>
          <div class="product-item">
          <div>
            <img src="/img/xinkali-1.png">
          </div>
          <h3><a href="">Хинкали с вишней и творогом</a></h3>
          <div class="product-info-below">
            <div class="price-container">
              <div class="product-count">1шт</div>
              <div class="price"><a>40₽</a></div>
            </div>
            <div>
              <button type="button" class="btn btn-outline-warning rounded-circle">+</button>
            </div>
          </div>
        </div>
          <div class="product-item">
          <div>
            <img src="/img/xinkali-1.png">
          </div>
          <h3><a href="">Хинкали с мясом без зелени</a></h3>
          <div class="product-info-below">
            <div class="price-container">
              <div class="product-count">1шт</div>
              <div class="price"><a>35₽</a></div>
            </div>
            <div>
              <button type="button" class="btn btn-outline-warning rounded-circle">+</button>
            </div>
          </div>
        </div>
        </div>
        <div class="section" id="muchnoe">
            <h3><a>Мучное</a></h3>
        </div>
        <div class="products">
          <div class="product-item">
          <div>
            <img src="/img/xachapuri-1.png">
          </div>
          <h3><a href="">Хачапури по-аджарски</a></h3>
          <div class="product-info-below">
            <div class="price-container">
              <div class="product-count">360 г</div>
              <div class="price"><a>305₽</a></div>
            </div>
            <div>
              <button type="button" class="btn btn-outline-warning rounded-circle">+</button>
            </div>
          </div>
        </div>
          <div class="product-item">
          <div>
            <img src="/img/xachapuri-2.png">
          </div>
          <h3><a href="">Хачапури по-мегрельски</a></h3>
          <div class="product-info-below">
            <div class="price-container">
              <div class="product-count">350 г</div>
              <div class="price"><a>315₽</a></div>
            </div>
            <div>
              <button type="button" class="btn btn-outline-warning rounded-circle">+</button>
            </div>
          </div>
        </div>
          <div class="product-item">
          <div>
            <img src="/img/xleb.png">
          </div>
          <h3><a href="">Хлеб пури</a></h3>
          <div class="product-info-below">
            <div class="price-container">
              <div class="product-count">1шт</div>
              <div class="price"><a>20₽</a></div>
            </div>
            <div>
              <button type="button" class="btn btn-outline-warning rounded-circle">+</button>
            </div>
          </div>
        </div>
          <div class="product-item">
          <div>
            <img src="/img/ajarskie-lepeshki.png">
          </div>
          <h3><a href="">Аджарские лепешки с бараниной</a></h3>
          <div class="product-info-below">
            <div class="price-container">
              <div class="product-count">350 г</div>
              <div class="price"><a>395₽</a></div>
            </div>
            <div>
              <button type="button" class="btn btn-outline-warning rounded-circle">+</button>
            </div>
          </div>
        </div>
          <div class="product-item">
          <div>
            <img src="/img/pirog-sokoti.jpeg">
          </div>
          <h3><a href="">Пирог сокоти</a></h3>
          <div class="product-info-below">
            <div class="price-container">
              <div class="product-count">360 г</div>
              <div class="price"><a>385₽</a></div>
            </div>
            <div>
              <button type="button" class="btn btn-outline-warning rounded-circle">+</button>
            </div>
          </div>
        </div>
          <div class="product-item">
          <div>
            <img src="/img/xachapuri-po-ajarski-mini.png">
          </div>
          <h3><a href="">Хачапури по-аджарски мини</a></h3>
          <div class="product-info-below">
            <div class="price-container">
              <div class="product-count">170 г</div>
              <div class="price"><a>180₽</a></div>
            </div>
            <div>
              <button type="button" class="btn btn-outline-warning rounded-circle">+</button>
            </div>
          </div>
        </div>
          <div class="product-item">
          <div>
            <img src="/img/kudbari.png">
          </div>
          <h3><a href="">Кудбари</a></h3>
          <div class="product-info-below">
            <div class="price-container">
              <div class="product-count">380 г</div>
              <div class="price"><a>360₽</a></div>
            </div>
            <div>
              <button type="button" class="btn btn-outline-warning rounded-circle">+</button>
            </div>
          </div>
        </div>
        </div>
        <div class="section" id="souce">
            <h3><a>Соусы</a></h3>
        </div>
        <div class="products">
          <div class="product-item">
          <div>
            <img src="img/souce-1.png">
          </div>
          <h3><a href="">Аджика</a></h3>
          <div class="product-info-below">
            <div class="price-container">
              <div class="product-count">35 г</div>
              <div class="price"><a>45₽</a></div>
            </div>
            <div>
              <button type="button" class="btn btn-outline-warning rounded-circle">+</button>
            </div>
          </div>
        </div>
          <div class="product-item">
          <div>
            <img src="img/souce2.png">
          </div>
          <h3><a href="">Мацони</a></h3>
          <div class="product-info-below">
            <div class="price-container">
              <div class="product-count">35 г</div>
              <div class="price"><a>45₽</a></div>
            </div>
            <div>
              <button type="button" class="btn btn-outline-warning rounded-circle">+</button>
            </div>
          </div>
        </div>
          <div class="product-item">
          <div>
            <img src="img/souce3.png">
          </div>
          <h3><a href="">Сацебели</a></h3>
          <div class="product-info-below">
            <div class="price-container">
              <div class="product-count">35 г</div>
              <div class="price"><a>45₽</a></div>
            </div>
            <div>
              <button type="button" class="btn btn-outline-warning rounded-circle">+</button>
            </div>
          </div>
        </div>
        </div>
        <div class="section" id="salads">
            <h3><a>Закуски и салаты</a></h3>
        </div>
        <div class="products">
          <div class="product-item">
          <div>
            <img src="/img/badrijani.png">
          </div>
          <h3><a href="">Бадриджани</a></h3>
          <div class="product-info-below">
            <div class="price-container">
              <div class="product-count">255 г</div>
              <div class="price"><a>295₽</a></div>
            </div>
            <div>
              <button type="button" class="btn btn-outline-warning rounded-circle">+</button>
            </div>
          </div>
        </div>
          <div class="product-item">
          <div>
            <img src="/img/solenia.jpeg">
          </div>
          <h3><a href="">Соленья тёти Мананы</a></h3>
          <div class="product-info-below">
            <div class="price-container">
              <div class="product-count">300 г</div>
              <div class="price"><a>340₽</a></div>
            </div>
            <div>
              <button type="button" class="btn btn-outline-warning rounded-circle">+</button>
            </div>
          </div>
        </div>
          <div class="product-item">
          <div>
            <img src="/img/zakuska.jpeg">
          </div>
          <h3><a href="">Закуска от Хинкалыча</a></h3>
          <div class="product-info-below">
            <div class="price-container">
              <div class="product-count">460 г</div>
              <div class="price"><a>395₽</a></div>
            </div>
            <div>
              <button type="button" class="btn btn-outline-warning rounded-circle">+</button>
            </div>
          </div>
        </div>
          <div class="product-item">
          <div>
            <img src="/img/salat-po-tbiliski.png">
          </div>
          <h3><a href="">Салат по-тбилисски</a></h3>
          <div class="product-info-below">
            <div class="price-container">
              <div class="product-count">250 г</div>
              <div class="price"><a>295₽</a></div>
            </div>
            <div>
              <button type="button" class="btn btn-outline-warning rounded-circle">+</button>
            </div>
          </div>
        </div>
          <div class="product-item">
          <div>
            <img src="/img/salat-po-gruzinski.jpeg">
          </div>
          <h3><a href="">Салат по-грузински</a></h3>
          <div class="product-info-below">
            <div class="price-container">
              <div class="product-count">250 г</div>
              <div class="price"><a>330₽</a></div>
            </div>
            <div>
              <button type="button" class="btn btn-outline-warning rounded-circle">+</button>
            </div>
          </div>
        </div>
          <div class="product-item">
          <div>
            <img src="/img/ostrii-salat.png">
          </div>
          <h3><a href="">Острый салат с печенью</a></h3>
          <div class="product-info-below">
            <div class="price-container">
              <div class="product-count">250 г</div>
              <div class="price"><a>310₽</a></div>
            </div>
            <div>
              <button type="button" class="btn btn-outline-warning rounded-circle">+</button>
            </div>
          </div>
        </div>
          <div class="product-item">
          <div>
            <img src="/img/jarenii-sir.png">
          </div>
          <h3><a href="">Жареный адыгейский сыр</a></h3>
          <div class="product-info-below">
            <div class="price-container">
              <div class="product-count">150 г</div>
              <div class="price"><a>275₽</a></div>
            </div>
            <div>
              <button type="button" class="btn btn-outline-warning rounded-circle">+</button>
            </div>
          </div>
        </div>
          <div class="product-item">
          <div>
            <img src="/img/teplii-salat.png">
          </div>
          <h3><a href="">Теплый салат с говядиной</a></h3>
          <div class="product-info-below">
            <div class="price-container">
              <div class="product-count">290 г</div>
              <div class="price"><a>345₽</a></div>
            </div>
            <div>
              <button type="button" class="btn btn-outline-warning rounded-circle">+</button>
            </div>
          </div>
        </div>
        </div>
        <div class="section" id="drinks">
            <h3><a>Напитки</a></h3>
        </div>
        <div class="products">
          <div class="product-item">
          <div>
            <img src="/img/nataxtari-vinograd.jpg">
          </div>
          <h3><a href="">Грузинский лимонад Натахтари</a></h3>
            <div class="product-info-below">
              <div class="price-container">
                <div class="product-count">0.5л</div>
                <div class="price"><a>140₽</a></div>
              </div>
              <div>
                <button type="button" class="btn btn-outline-warning rounded-circle">+</button>
              </div>
            </div>
        </div>
          <div class="product-item">
          <div>
            <img src="/img/borjomi.png">
          </div>
          <h3><a href="">Боржоми</a></h3>
          <div class="product-info-below">
            <div class="price-container">
              <div class="product-count">0.5л</div>
              <div class="price"><a>235₽</a></div>
            </div>
            <div>
              <button type="button" class="btn btn-outline-warning rounded-circle">+</button>
            </div>
          </div>
        </div>
          <div class="product-item">
          <div>
            <img src="/img/mineralka.png">
          </div>
          <h3><a href="">Минеральная вода(газ./незаг.)</a></h3>
          <div class="product-info-below">
            <div class="price-container">
              <div class="product-count">0.5л</div>
              <div class="price"><a>95₽</a></div>
            </div>
            <div>
              <button type="button" class="btn btn-outline-warning rounded-circle">+</button>
            </div>
          </div>
        </div>
          <div class="product-item">
          <div>
            <img src="/img/uzvar.png">
          </div>
          <h3><a href="">Узвар</a></h3>
          <div class="product-info-below">
            <div class="price-container">
              <div class="product-count">0.44л</div>
              <div class="price"><a>100₽</a></div>
            </div>
            <div>
              <button type="button" class="btn btn-outline-warning rounded-circle">+</button>
            </div>
          </div>
        </div>
          <div class="product-item">
          <div>
            <img src="/img/airan.png">
          </div>
          <h3><a href="">Айран</a></h3>
          <div class="product-info-below">
            <div class="price-container">
              <div class="product-count">0.44л</div>
              <div class="price"><a>150₽</a></div>
            </div>
            <div>
              <button type="button" class="btn btn-outline-warning rounded-circle">+</button>
            </div>
          </div>
        </div>
          <div class="product-item">
          <div>
            <img src="/img/chernii-pulse-up.jpg">
          </div>
          <h3><a href="">Энергетический напиток</a></h3>
          <div class="product-info-below">
            <div class="price-container">
              <div class="product-count">0.5л</div>
              <div class="price"><a>49₽</a></div>
            </div>
            <div>
              <button type="button" class="btn btn-outline-warning rounded-circle">+</button>
            </div>
          </div>
        </div>
        </div>
        <button class="cart" id="cart">
          <img class="cart-image" src="/img/cart.png" alt="Cart" width="32" height="32" />
          <div class="cart-num" id="cart_num">0</div>
        </button>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>
