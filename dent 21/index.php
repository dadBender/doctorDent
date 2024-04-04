<?php

get_header();
?>

<main>
<section class="health__container">
  <div class="healt__title-block">
    <h1 class="health-title">здоровье и безопасность</h1>
    <h3 class="health-subtitle">
      Главные приоритеты работы нашей клиники
    </h3>
  </div>
  <div class="health__slider-container">
    <ul class="health__slider">
      <li class="health__slider-item">
        <img
          src="<?php echo get_template_directory_uri(); ?>/assets/images/card_health.webp"
          alt="Улыбающаяся девушка"
          class="health__slider__card-image"
        />
        <div class="card__signaturs">
          <div class="health__slider__card-text">
            <h4 class="health__slider__card-title">
              Художественная
              <span>реставрация</span>
            </h4>
            <p class="health__slider__card-subtitle">
              передних и боковых зубов
            </p>
          </div>
          <div class="health__slider__card-price">
            5 000
            <span> ₽ </span>
          </div>
          <div class="health__slider__card-doptext">
            Акция действует до 31 марта.
          </div>
        </div>
      </li>
    </ul>
    <button
      class="health__prev-button"
      aria-label="Посмотреть предыдущий слайд"
    >
      <img
        class="vector-slider"
        src="<?php echo get_template_directory_uri(); ?>/assets/icons/Vector_left.svg"
        alt="стрелка влево"
      />
    </button>
    <button
      class="health__next-button"
      aria-label="Посмотреть следующий слайд"
    >
      <img
        class="vector-slider"
        src="<?php echo get_template_directory_uri(); ?>/assets/icons/Vector_right.svg"
        alt="стрелка вправо"
      />
    </button>
  </div>
</section>
<section class="services">
  <h2 class="section_title" id="services">Услуги и цены</h2>
  <div class="services__card-container">
    <article class="services__card-backdrop">
      <div
        class="services__card services__card__front services__card-implant-front"
      >
        <p class="services__card-text">Имплантация</p>
      </div>
      <div
        class="services__card services__card__back services__card-implant-back"
      >
        <div
          class="services__card-price services__card-price-implant services__card-price_media"
        >
          <span class="services__card_price-text"
            >Установка имплантов  Dentium (Южная Корея)</span
          >
          <span class="services__card_price-digit"
            >35 000 <span>₽</span>
          </span>
          <span class="services__card_price-text">Все – на – 4</span>
          <span class="services__card_price-digit"
            ><span>от</span> 99 000<span>₽</span>
          </span>
          <span class="services__card_price-text"
            >Художественная реставрация передних и боковых зубов</span
          >
          <span class="services__card_price-digit"
            >10 000 <span>₽</span>
          </span>
        </div>
      </div>
    </article>

    <article class="services__card-backdrop">
      <div
        class="services__card services__card__front services__card-child-front"
      >
        <p class="services__card-text">Детская стоматология</p>
      </div>
      <div
        class="services__card services__card__back services__card-child-back"
      >
        <div
          class="services__card-price services__card-price-child services__card-price_media"
        >
          <span class="services__card_price-text">Детская коронка</span>
          <span class="services__card_price-digit"
            ><span>от</span> 7 000<span>₽</span>
          </span>
          <span class="services__card_price-text"
            >Лечение молочного зуба</span
          >
          <span class="services__card_price-digit"
            ><span>от</span> 5 000<span>₽</span>
          </span>
        </div>
      </div>
    </article>

    <article class="services__card-backdrop">
      <div
        class="services__card services__card__front services__card-ortondont-front"
      >
        <p class="services__card-text">Ортодонтия</p>
      </div>
      <div
        class="services__card services__card__back services__card-ortondont-back"
      >
        <div
          class="services__card-price services__card-price-ortondont services__card-price_media"
        >
          <span class="services__card_price-text"
            >Установка брекет-системы и элайнеров</span
          >
          <span class="services__card_price-digit"
            ><span>от</span> 50 000<span>₽</span>
          </span>
        </div>
      </div>
    </article>

    <article class="services__card-backdrop">
      <div
        class="services__card services__card__front services__card-protez-front"
      >
        <p class="services__card-text">Протезирование</p>
      </div>
      <div
        class="services__card services__card__back services__card-protez-back"
      >
        <div
          class="services__card-price services__card-price-protez services__card-price_media"
        >
          <span class="services__card_price-text"
            >Виниры, коронки, протезирование имплантатов</span
          >
          <span class="services__card_price-digit"
            ><span>от</span> 35 000<span>₽</span>
          </span>
        </div>
      </div>
    </article>

    <article class="services__card-backdrop">
      <div
        class="services__card services__card__front services__card-profilactic-front"
      >
        <p class="services__card-text">Профилактика</p>
      </div>
      <div
        class="services__card services__card__back services__card-profilactic-back"
      >
        <div
          class="services__card-price services__card-price-profilactic services__card-price_media"
        >
          <span class="services__card_price-text"
            >Профессиональная гигиена полости рта под микроскопом</span
          >
          <span class="services__card_price-digit">
            6 000<span>₽</span>
          </span>
          <span class="services__card_price-text">Отбеливание зубов</span>
          <span class="services__card_price-digit"
            ><span>от</span> 25 000<span>₽</span>
          </span>
        </div>
      </div>
    </article>

    <article class="services__card-backdrop">
      <div
        class="services__card services__card__front services__card-diagnostic-front"
      >
        <p class="services__card-text">Диагностика</p>
      </div>
      <div
        class="services__card services__card__back services__card-diagnostic-back"
      >
        <div
          class="services__card-price services__card-price-diagnostic services__card-price_media"
        >
          <span class="services__card_price-text"
            >Снимок 3D сканирование челюстей</span
          >
          <span class="services__card_price-digit">
            3 600<span>₽</span>
          </span>
          <span class="services__card_price-text">ОПТ снимок</span>
          <span class="services__card_price-digit">
            1 500<span>₽</span>
          </span>

          <span class="services__card_price-text"
            >Гнатология миостим</span
          >
          <span class="services__card_price-digit">
            15 000<span>₽</span>
          </span>
          <span class="services__card_price-text"
            >Лечение под микроскопом</span
          >
        </div>
      </div>
    </article>
  </div>
  <div class="button__enroll"><a href="#form">записаться</a></div>
</section>
<section class="doctors">
  <h2 class="section_title" id="comand">наши врачи</h2>
  <div class="doctors__content">
    <div class="bottom-slider js-bottom-slider">
      <button
        class="health__prev-button bottom-slider__button-prev js-button-prev"
        aria-label="Посмотреть предыдущий слайд"
      >
        <div class="overley__slider"></div>

        <img
          class="vector-slider"
          src="<?php echo get_template_directory_uri(); ?>/assets/icons/Vector_left.svg"
          alt="стрелка влево"
        />
      </button>
      <button
        class="health__next-button bottom-slider__button-next js-button-next"
        aria-label="Посмотреть следующий слайд"
      >
        <img
          class="vector-slider"
          src="<?php echo get_template_directory_uri(); ?>/assets/icons/Vector_right.svg"
          alt="стрелка вправо"
        />
      </button>
      <div class="bottom-slider__wrapper">
        <article class="bottom-slider__slide js-slide-item">
          <div class="image__container">
            <div class="dark__image__back"></div>
            <img
              src="<?php echo get_template_directory_uri(); ?>/assets/images/dentist_2.webp"
              alt=""
              class="main__slider-image"
            />
          </div>
        </article>

        <article class="bottom-slider__slide js-slide-item">
          <div class="image__container">
            <div class="dark__image__back"></div>
            <img
              src="<?php echo get_template_directory_uri(); ?>/assets/images/dentist.webp"
              alt=""
              class="main__slider-image"
            />
          </div>
        </article>
        <article class="bottom-slider__slide js-slide-item">
          <div class="image__container">
            <div class="dark__image__back"></div>
            <img
              src="<?php echo get_template_directory_uri(); ?>/assets/images/chief__doctor.webp"
              alt=""
              class="main__slider-image"
            />
          </div>
        </article>
        <article class="bottom-slider__slide js-slide-item">
          <div class="image__container">
            <div class="dark__image__back"></div>
            <img
              src="<?php echo get_template_directory_uri(); ?>/assets/images/Zinovieva.webp"
              alt=""
              class="main__slider-image"
            />
          </div>
        </article>
        <article class="bottom-slider__slide js-slide-item">
          <div class="image__container">
            <div class="dark__image__back"></div>
            <img
              src="<?php echo get_template_directory_uri(); ?>/assets/images/Petrunovskaya.webp"
              alt=""
              class="main__slider-image"
            />
          </div>
        </article>
        <article class="bottom-slider__slide js-slide-item">
          <div class="image__container">
            <div class="dark__image__back"></div>
            <img
              src="<?php echo get_template_directory_uri(); ?>/assets/images/Hamzina.webp"
              alt=""
              class="main__slider-image"
            />
          </div>
        </article>
        <article class="bottom-slider__slide js-slide-item">
          <div class="image__container">
            <div class="dark__image__back"></div>
            <img
              src="<?php echo get_template_directory_uri(); ?>/assets/images/Kasumzade.webp"
              alt=""
              class="main__slider-image"
            />
          </div>
        </article>
      </div>
    </div>
    <div class="doctors__content-about__block">
      <article class="doctors__card chief__doctors">
        <h3 class="doctors__name">Лебедева Нина Геннадьевна</h3>
        <h4 class="doctors__post">Главный врач</h4>
        <h4 class="doctors__deserts">
          Кандидата, стоматолог-ортопед, стаж более 20 лет.
        </h4>
        <p class="doctors__quote">
          Имею обостренное чувство справедливости, люблю животных и верю,
          что ДОБРО ВСЕГДА В КОНЦЕ КОНЦОВ ПОБЕЖДАЕТ ЗЛО, просто мы это не
          всегда видим!
        </p>
        <div class="doctors__qualification">
          <button
            value="education"
            class="doctors__button doctors__button__education"
          >
            Образование
          </button>
          <button
            value="specification"
            class="doctors__button doctors__button__specification doctors__button-none"
          >
            Спецификация
          </button>
          <ul class="doctors__card__text">
            <li
              class="doctors__card__text-item education__text"
              value="education"
            >
              Ординатура по специальности "Стоматология ортопедическая",
              Саратовский государственный медицинский университет
              <br />
              <br />
              Интернатура по специальности "Стоматология ортопедическая",
              Саратовский государственный медицинский университет
              <br />
              <br />
              Диплом по специальности "Стоматология", Саратовский
              государственный медицинский университет
            </li>
            <li
              class="doctors__card__text-item specification__text"
              value="specification"
            >
              <figcaption class="specification__figcaption">
                Вы можете обратиться к Нине Геннадьевне за следующим
                лечением:
              </figcaption>
              <ul class="specification__list">
                <li class="specification__item">
                  Установка зубных протезов
                </li>
                <li class="specification__item">
                  Установка зубных виниров
                </li>
                <li class="specification__item">
                  Установка зубных мостов
                </li>
                <li class="specification__item">
                  Диагностика и лечение заболеваний ВНЧС
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </article>
      <article class="doctors__card chief__doctors-two">
        <h3 class="doctors__name">Омаров Дибир Рабаданович</h3>
        <h4 class="doctors__post">Врач-стоматолог-терапевт</h4>

        <p class="doctors__quote">
          <span>
            Я стоматолог попризванию, при чём ЧТО мне нравится больше
            терапевтическая  стоматология или хирургическаястоматология  я
            ещё не решил.
          </span>
          <span> Хочу ДЕЛАТЬДОБРОЕ, КРАСИВОЕ И НУЖНОЕ! </span>
          <span>
            Что может быть важнее ЗДОРОВЬЯ? Только  здоровье  детей...Дети
            с удовольствием  приходят ко мне на приём за лечением
            идетскими коронками. Будем делать мир совершеннее!
          </span>
        </p>
        <div class="doctors__qualification">
          <button
            value="1"
            class="doctors__button doctors__button__education"
          >
            Образование
          </button>
          <button
            value="0"
            class="doctors__button doctors__button__specification doctors__button-none"
          >
            Спецификация
          </button>
          <button
            value="0"
            class="doctors__button doctors__button__seminars doctors__button-none"
          >
            Семинары
          </button>

          <ul class="doctors__card__text">
            <li
              class="doctors__card__text-item education__text"
              value="education"
            >
              Федеральное Государственное Бюджетное Образовательное
              Учреждение Высшего Образования «Дагестанский Государственный
              медицинский университет» г. Махачкала 2020г.
              <br />
              <br />
              Клинический ординатор на кафедре ортопедической стоматологии
              Московского Государственного Медико-стоматологического
              университета им. А.И.Евдокимова 2022г.
            </li>
            <li
              class="doctors__card__text-item specification__text"
              value="specification"
            >
              <figcaption class="specification__figcaption">
                Вы можете обратиться к Дибирмагомеду Закигаджиевичу за
                следующим лечением:
              </figcaption>
              <ul class="specification__list">
                <li class="specification__item">
                  Эндодонтия в полном объёме
                </li>
                <li class="specification__item">Удаление зубов</li>
                <li class="specification__item">
                  Профессиональная гигиена полости рта
                </li>
                <li class="specification__item">Отбеливание Zoom</li>
                <li class="specification__item">Amazing White</li>
                <li class="specification__item">Лечение кариеса</li>
                <li class="specification__item">
                  Эстетическое реставраци
                </li>
                <li class="specification__item">
                  Восстановление зубов под ортопедические конструкции
                </li>
              </ul>
            </li>
            <li class="doctors__card__text-item seminars__text">
              <figcaption class="seminars__figcaption">
                Посещение дополнительных семинаров по специальности:
              </figcaption>
              <ul class="seminars__list">
                <li class="seminars__item">
                  Юрий Кочаров «ENDO. ПОВСЕДНЕВНАЯ ПРАКТИКА» сентябрь
                  2021г.
                </li>
                <li class="seminars__item">
                  Дадаш Омаров « Удаление зубов: просто о сложном» июнь
                  2021г.
                </li>
                <li class="seminars__item">
                  Гамзалов Ибрагим « Каждодневная эндодонтия. Коффердам в
                  ежедневной практике» ноябрь 2022г.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </article>

      <article class="doctors__card chief__doctors-three">
        <h3 class="doctors__name">Мамедов Сардор Усманович</h3>
        <h4 class="doctors__post">Врач-стоматолог-терапевт</h4>

        <p class="doctors__quote">
          Харизматичный,уравновешенный, легкий в общении доктор –
          украшение мужской половины нашегоколлектива. Профессионал,
          который стремится к совершенству во всем.
        </p>
        <div class="doctors__qualification">
          <button
            value="1"
            class="doctors__button doctors__button__education"
          >
            Образование
          </button>
          <button
            value="0"
            class="doctors__button doctors__button__specification doctors__button-none"
          >
            Спецификация
          </button>
          <button
            value="0"
            class="doctors__button doctors__button__seminars doctors__button-none"
          >
            Семинары
          </button>
          <ul class="doctors__card__text">
            <li
              class="doctors__card__text-item education__text"
              value="education"
            >
              Казанский государственный медицинский университет
              <br />
              <br />
              Ординатура по специальности стоматология хирургическая 2018
              <br />
              <br />
              Дагестанская государственная медицинская академия
              <br />
              <br />
              Стоматолог общей практики 2011
            </li>
            <li
              class="doctors__card__text-item specification__text"
              value="specification"
            >
              <figcaption class="specification__figcaption">
                Вы можете обратиться к Дибирмагомеду Закигаджиевичу за
                следующим лечением:
              </figcaption>
              <ul class="specification__list">
                <li class="specification__item">
                  Эндодонтия в полном объёме
                </li>
                <li class="specification__item">Удаление зубов</li>
                <li class="specification__item">
                  Профессиональная гигиена полости рта
                </li>
                <li class="specification__item">Отбеливание Zoom</li>
                <li class="specification__item">Amazing White</li>
                <li class="specification__item">Лечение кариеса</li>
                <li class="specification__item">
                  Эстетическое реставраци
                </li>
                <li class="specification__item">
                  Восстановление зубов под ортопедические конструкции
                </li>
              </ul>
            </li>
            <li
              class="doctors__card__text-item seminars__text"
              value="specification"
            >
              <figcaption class="seminars__figcaption">
                Посещение дополнительных семинаров по специальности:
              </figcaption>
              <ul class="seminars__list">
                <li class="seminars__item">
                  Юрий Кочаров «ENDO. ПОВСЕДНЕВНАЯ ПРАКТИКА» сентябрь
                  2021г.
                </li>
                <li class="seminars__item">
                  Дадаш Омаров « Удаление зубов: просто о сложном» июнь
                  2021г.
                </li>
                <li class="seminars__item">
                  Гамзалов Ибрагим « Каждодневная эндодонтия. Коффердам в
                  ежедневной практике» ноябрь 2022г.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </article>
      <article class="doctors__card chief__doctors-three">
        <h3 class="doctors__name">Касумзаде Элина Элистановна</h3>
        <h4 class="doctors__post">Врач-стоматолог-ортодонт</h4>

        <p class="doctors__quote">
          Я - стоматолог-ортодонтв нескольких поколениях. Исправляю не
          только положение зубов, но и учитываюсвязь прикуса, осанки, ВНЧС
          , мышц лица и спины. Поэтому в моих руках не толькокрасота лица,
          но и физическое, эстетическое здоровье пациентов.
        </p>
        <div class="doctors__qualification">
          <button
            value="1"
            class="doctors__button doctors__button__education"
          >
            Образование
          </button>
          <button
            value="0"
            class="doctors__button doctors__button__specification doctors__button-none"
          >
            Спецификация
          </button>
          <button
            value="0"
            class="doctors__button doctors__button__seminars doctors__button-none"
          >
            Семинары
          </button>
          <ul class="doctors__card__text">
            <li
              class="doctors__card__text-item education__text"
              value="education"
            >
              МГМСУ им А. И. Евдокимова, специальность Стоматология 2015 -
              2020 гг.
              <br /><br />
              Ординатура : ЦГМА Управления делами Президента РФ,
              Специальность Ортодонтия 2020 - 2022 гг.
              <br /><br />
              Соавтор патента: «Внутриротовой окклюзионный аппарат» 2020
              г.
            </li>
            <li
              class="doctors__card__text-item specification__text"
              value="specification"
            >
              <figcaption class="specification__figcaption">
                Вы можете обратиться к Элине Элистановне за следующим
                лечением:
              </figcaption>
              <ul class="specification__list">
                <li class="specification__item">
                  Консультационный приём взрослых и детей
                </li>
                <li class="specification__item">Адаптационный приём</li>
                <li class="specification__item">Установка брекетов</li>
                <li class="specification__item">Лечение элайнерами</li>
                <li class="specification__item">Ретенционный период</li>
                <li class="specification__item">
                  Лечение расстройств ВНЧС
                </li>
              </ul>
            </li>
            <li
              class="doctors__card__text-item seminars__text"
              value="specification"
            >
              <figcaption class="seminars__figcaption">
                Посещение дополнительных семинаров по специальности:
              </figcaption>
              <ul class="seminars__list">
                <li class="seminars__item">
                  Онлайн-курс «Остеопатическая ортодонтия. Дети,
                  подростки, взрослые» E. Favetti , R. H. Dejean
                </li>
                <li class="seminars__item">
                  Сертификат о прохождении обучения в Пикассо по
                  программам Vatech Ez3D и Planmeca Romexis Viewer - 2022
                </li>
                <li class="seminars__item">
                  Курс сертификации «Флексы как прогрессивный метод
                  лечения в современной ортодонтии» Бажанова О.В. - 2022
                </li>
                <li class="seminars__item">
                  «Способ ортодонтического лечения с использованием
                  четырёхгранных дуг с самого начала лечения» Климова
                  Т.В., Набиев Н.В. - 2022
                </li>
                <li class="seminars__item">
                  «Мини-импланты ортодонтические Tomas Dentarum Германия6
                  хирургические аспекты применения» Слабковский Р. И. –
                  2021
                </li>
                <li class="seminars__item">
                  Онлайн-курс « Alighners online school” Cris Chang,
                  Francesco Garino, Jay Bowman и др
                </li>
                <li class="seminars__item">
                  Цикл онлайн-лекций Jeffry Okeson «Введение в
                  расстройства ВНЧС и орофациальная боль. Понимание
                  проблемы»
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </article>
      <article class="doctors__card chief__doctors-three">
        <h3 class="doctors__name">Хамзина Карина Николаевна</h3>
        <h4 class="doctors__post">Администратор</h4>

        <p class="doctors__quote">
          Совмещаю учёбу, на стоматологическом факультете медицинского
          института с работой администратора, гигиениста, ассистента.
          <br /><br />
          Активно стремлюсь к совершенству во всем, перфекционист.
          <br /><br />
          Хочу видеть красоту и совершенство во всем. Для этого живу,
          работаю и учусь.
        </p>
      </article>
      <article class="doctors__card chief__doctors-three">
        <h3 class="doctors__name">Петруновская Ирина Юрьевна</h3>
        <h4 class="doctors__post">Администратор</h4>

        <p class="doctors__quote">
          НАСТОЛЬКО ЩЕПЕТИЛЬНА И ЛЮБИТ СВОЮ РАБОТУ, ЧТО ПРИХОДИТ НА СВОЕ
          РАБОЧЕЕ МЕСТО ЗА 1,5 ЧАСА ДО НАЧАЛА!ЛЮБИТ ЛЮДЕЙ, ЖИВОТНЫХ И
          ОЧЕНЬ ПОЗИТИВНА
        </p>
      </article>
      <article class="doctors__card chief__doctors-three">
        <h3 class="doctors__name">Зиновьева Наталья Андреевна</h3>
        <h4 class="doctors__post">Ассистент врача-стоматолога</h4>

        <p class="doctors__quote">
          Совмещаю учёбу,на стоматологическом факультете медицинского
          института с работой ассистента.Причём могу ассистировать любому
          доктору в нашей клинике!
          <br /><br />
          В будущем хочу быть стоматологом-хирургом или детским доктором.
        </p>
      </article>
    </div>
  </div>
</section>

<section class="samples" id="samples">
  <h2 class="section_title" id="samples">работы</h2>
  <ul class="samples__container">
    <li class="samples__card__container">
      <div class="samples__card">
        <div class="samples__image">
          <img src="<?php echo get_template_directory_uri(); ?>/assets/images/samples__card-first_3_11zon.webp" />
        </div>
        <div class="samples__image samples__above">
          <img src="<?php echo get_template_directory_uri(); ?>/assets/images/samples__card-first-above_2_11zon.webp" />
        </div>
      </div>
      <div class="samples__subtitle">
        <p class="samples__subtitle-text">
          Ортопед Лебедева Н. Г. <br />
          Хирург Магомедов А. Т. <br />Зубной техник Веялко Р.
        </p>
        <button class="samples__subtitle-button">Протезирование</button>
      </div>
    </li>
    <li class="samples__card__container">
      <div class="samples__card">
        <div class="samples__image">
          <img src="<?php echo get_template_directory_uri(); ?>/assets/images/samples__card-second_5_11zon.webp" />
        </div>
        <div class="samples__image samples__above">
          <img src="<?php echo get_template_directory_uri(); ?>/assets/images/samples__card-second-above_4_11zon.webp" />
        </div>
      </div>
      <div class="samples__subtitle">
        <p class="samples__subtitle-text">
          Ортопед Лебедева Н. Г. <br />
          Хирург Магомедов А. <br />Зубной техник Жайляуов Д.
        </p>
        <button class="samples__subtitle-button">All on 4</button>
      </div>
    </li>
    <li class="samples__card__container">
      <div class="samples__card">
        <div class="samples__image">
          <img src="<?php echo get_template_directory_uri(); ?>/assets/images/samples__card-third_1_11zon.webp" />
        </div>
        <div class="samples__image samples__above">
          <img src="<?php echo get_template_directory_uri(); ?>/assets/images/samples__card-third-above_6_11zon.webp" />
        </div>
      </div>
      <div class="samples__subtitle">
        <p class="samples__subtitle-text">
          Ортопед Лебедева Н. Г. <br />
          Зубной техник Альтман И.
        </p>
        <button class="samples__subtitle-button">Имплантация</button>
      </div>
    </li>
  </ul>
  <button
    class="healt__prev-button works__prev-button"
    aria-label="Посмотреть предыдущий слайд"
  >
    <img
      class="vector-slider"
      src="<?php echo get_template_directory_uri(); ?>/assets/icons/Vector_left.svg"
      alt="стрелка влево"
    />
  </button>
  <button
    class="health__next-button works__next-button"
    aria-label="Посмотреть следующий слайд"
  >
    <img
      class="vector-slider"
      src="<?php echo get_template_directory_uri(); ?>/assets/icons/Vector_right.svg"
      alt="стрелка вправо"
    />
  </button>
</section>
<section class="sale">
  <h2 class="section_title" id="sale">АКЦИИ</h2>
  <ul class="sale__container">
    <li class="sale-item sale__tomograph">
      <h4 class="title__sale title__tomograph">
        Компьютерная томография зубов
      </h4>
      <div class="price__tomograph">
        1 500 <span class="sale__valute">₽</span>
      </div>
    </li>

    <li class="sale-item sale__implant">
      <h4 class="title__sale">
        <span class="design__font">Имплантация</span> “Все-на-4”
      </h4>
      <div class="price__implant">
        <span class="sale__frome">от </span> 99 000
        <span class="sale__valute">₽</span>
      </div>
    </li>

    <li class="sale-item sale__consultant">
      <h4 class="title__sale">
        Первичная консультация любого специалиста
      </h4>
      <div class="price__consultant">бесплатно</div>
    </li>

    <li class="sale-item sale__installation__implant">
      <h4 class="title__sale">
        Установка импланта <br />
        <span class="sale__installation__implant-korea"
          >(Южная Корея)</span
        >
      </h4>
      <div class="price__implant">
        30 000 <span class="sale__valute">₽</span>
      </div>
    </li>

    <li class="sale-item sale__therapy">
      <h4 class="title__sale">
        Лечение пульпита молочного зуба + пломба + детская коронка
      </h4>
      <div class="price__therapy">
        9 000 <span class="sale__valute">₽</span>
      </div>
    </li>
  </ul>
</section>

<section class="reviews">
  <h2 class="section_title" id="review">отзывы</h2>
  <div class="swiper">
    <ul class="swiper-wrapper reviews__container carousel">
      <li class="swiper-slide reviews__item carousel__slide">
        <div class="conten__reviews">
          <img
            src="<?php echo get_template_directory_uri(); ?>/assets/icons/quotes.svg"
            alt="quotes"
            class="reviews__quotes"
          />
          <p class="reviews__text">
            Я уже несколько лет хожу в эту клинику со всей своей семьей,
            мы очень довольны. Приятно иметь личного врача, который знает
            все ваши стоматологические проблемы и быстро их решает.
          </p>
        </div>
        <p class="rewiews__name">Александр Бабыкин</p>
      </li>

      <li class="swiper-slide reviews__item carousel__slide">
        <div class="conten__reviews">
          <img
            src="<?php echo get_template_directory_uri(); ?>/assets/icons/quotes.svg"
            alt="quotes"
            class="reviews__quotes"
          />
          <p class="reviews__text">
            Я позвонил в клинику, когда сломал зуб. Врач принял меня уже
            через полтора часа! Зуб восстановили быстро и безболезненно,
            спасибо Анастасии Викторовне!
          </p>
        </div>
        <p class="rewiews__name">Алексей Лавочкин</p>
      </li>

      <li class="swiper-slide reviews__item carousel__slide">
        <div class="conten__reviews">
          <img
            src="<?php echo get_template_directory_uri(); ?>/assets/icons/quotes.svg"
            alt="quotes"
            class="reviews__quotes"
          />
          <p class="reviews__text">
            Я всегда волновалась и ожидала самого худшего перед посещением
            стоматолога, но посещение врача в клинике прошло спокойно и
            безболезненно.
          </p>
        </div>
        <p class="rewiews__name">Мария Сафронова</p>
      </li>

      <li class="swiper-slide reviews__item carousel__slide">
        <div class="conten__reviews">
          <img
            src="<?php echo get_template_directory_uri(); ?>/assets/icons/quotes.svg"
            alt="quotes"
            class="reviews__quotes"
          />
          <p class="reviews__text">
            Лучшая клиника в городе! Обычно я сильно напрягаюсь перед
            посещением стоматолога, но в этот раз это было
            безосновательно, врач все мне объяснил и был очень аккуратен и
            внимателен.
          </p>
        </div>
        <p class="rewiews__name">Петр Кирьянов</p>
      </li>
    </ul>

    <div class="swiper-button-prev sale__button_prev">
      <img
        class="vector-slider"
        src="<?php echo get_template_directory_uri(); ?>/assets/icons/Vector_left.svg"
        alt="стрелка влево"
      />
    </div>
    <div class="swiper-button-next sale__button_next">
      <img
        class="vector-slider"
        src="<?php echo get_template_directory_uri(); ?>/assets/icons/Vector_right.svg"
        alt="стрелка вправо"
      />
    </div>
  </div>
</section>

<section class="form" id="form">
  <h4 class="title__form">Записаться на приём</h4>
  <p class="subtitle__form">
    Отправьте свои контактные данные,и мы перезвоним вам для уточнения
    всех деталей
  </p>
  <form action="mail-template.php" class="form__input">
    <input
      class="input__name"
      id="GET-name"
      type="text"
      name="name"
      placeholder="Ваше имя"
    />
    <input
      class="input__number"
      id="GET-number"
      type="tel"
      name="telephone"
      placeholder="8 (000) 000 00 00"
    />
    <div
      class="g-recaptcha"
      data-sitekey="6Lc-EakpAAAAAGKOzWlpJkKIWvzT8WF2Vpe1O5ZA"
    ></div>

    <input type="submit" value="ОТПРАВИТЬ" class="form__button" />
  </form>
</section>

<section class="contact">
  <div class="contact__container">
    <h2 class="section_title" id="contacts">контакты</h2>

    <ul class="contact__list">
      <li class="telephone__number">
        <a
          class="contact__link contact__link-telephone"
          href="tel:+7(495)668-71-88"
          >+7(495)668-71-88</a
        >
      </li>
      <li class="telephone__number">
        <a
          class="contact__link contact__link-telephone"
          href="tel:+7(968)570-89-52"
          >+7(968)570-89-52</a
        >
      </li>
      <li class="email__link">
        <a
          class="contact__link contact__link-email"
          href="mailto:doct.dent@yandex.ru"
          >doct.dent@yandex.ru</a
        >
      </li>
      <li class="geo__link">
        <a
          class="contact__link contact__link-email"
          href="https://yandex.ru/maps/-/CDRNF06G"
          >проспект Защитников Москвы, дом 12, помещение XV</a
        >
      </li>
      <li class="work__time">
        <p class="work__time-text">Ежедневно — 10:00-21:00</p>
      </li>
    </ul>
    <div class="social__link__container__footer">
      <a target="_blank" class="social__link" href="#">
        <img
          class="link__tg social__link-item__footer"
          src="<?php echo get_template_directory_uri(); ?>/assets/icons/tg.svg"
          alt="ссылка Telegramm"
        />
      </a>
      <a
        target="_blank"
        class="social__link"
        href="https://api.whatsapp.com/send/?phone=79685708952&text&type=phone_number&app_absent=0"
      >
        <img
          class="link__wp social__link-item__footer"
          src="<?php echo get_template_directory_uri(); ?>/assets/icons/whatsApp.svg"
          alt="ссылка whatsApp"
        />
      </a>
      <a
        target="_blank"
        class="social__link"
        href="https://vk.com/doct.dent"
      >
        <img
          class="link__vk social__link-item__footer"
          src="<?php echo get_template_directory_uri(); ?>/assets/icons/vk.svg"
          alt="ссылка VK"
        />
      </a>
    </div>
  </div>
  <div class="cards__contacts">
    <iframe
      src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac3f32e35da6f3ef6c687fc3fa592e92f1b9c1aa91654440cffa086ab5fff11aa&amp;source=constructor"
      width="100%"
      height="100%"
      frameborder="0"
    ></iframe>
  </div>
</section>
</main>

<?php

get_footer();

?>