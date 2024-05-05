(() => {
  function setSearch(params) {
    const openBtn = document.querySelector(`.${params.openBtnClass}`);
    const search = document.querySelector(`.${params.searchClass}`);
    const closeBtn = search.querySelector(`.${params.closeBtnClass}`);

    search.addEventListener("animationend", function (evt) {
      if (this._isOpened) {
        this.classList.remove(params.activeClass);
        this.classList.remove(params.hiddenClass);
        this._isOpened = false;
      } else {
        this._isOpened = true;
      }
    });

    search.addEventListener("click", function (evt) {
      evt._isSearch = true;
    });

    openBtn.addEventListener("click", function (evt) {
      this.disabled = true;

      if (
        !search.classList.contains(params.activeClass) &&
        !search.classList.contains(params.hiddenClass)
      ) {
        search.classList.add(params.activeClass);
      }
    });

    closeBtn.addEventListener("click", function () {
      openBtn.disabled = false;
      search.classList.add(params.hiddenClass);
    });

    document.body.addEventListener("click", function (evt) {
      if (!evt._isSearch && search._isOpened) {
        openBtn.disabled = false;
        search.classList.add(params.hiddenClass);
      }
    });
  }

  setSearch({
    openBtnClass: "js-open-search", // класс кнопки открытия
    closeBtnClass: "js-close", // класс кнопки закрытия
    searchClass: "js-form", // класс формы поиска
    activeClass: "is-opened", // класс открытого состояния
    hiddenClass: "is-closed" // класс закрывающегося состояния (удаляется сразу после закрытия)
  });
})();



document.querySelector('.header__burger').addEventListener('click', () => {
document.querySelector('.burger__list').classList.toggle('burger__list--active');
document.querySelector('.header__burger--inner').classList.add('is-active');
})

document.querySelector('.header__burger--inner').addEventListener('click', () => {
// document.querySelector('.hamburger').classList.remove('is-active')
document.querySelector('.burger__list').classList.remove('burger__list--active');
})

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const step = document.querySelectorAll('.tabs__btns-list li button')
  let first = document.querySelector('.tabs__btn-first');
  step.forEach(item =>{
        item.addEventListener('click', (e) =>{
        step.forEach(el=>{
        first.classList.remove('tabs__btn--active')
        el.classList.remove('tabs__btn--active')});
        item.classList.toggle('tabs__btn--active');
    })
})

document.querySelectorAll('.tabs__btn').forEach(function(tabsBtn){
  tabsBtn.addEventListener('click', function(e){
  const path = e.currentTarget.dataset.path;

  document.querySelectorAll('.tabs-item').forEach(function(tabsBtn){
    tabsBtn.classList.remove('tabs-item--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});


new Accordion('.accordion');
