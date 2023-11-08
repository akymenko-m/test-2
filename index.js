//faq-accordion
const toggleButtonAccordion = document.querySelectorAll('.js-button-accordion');

for (let i = 0; i < toggleButtonAccordion.length; i++) {
  toggleButtonAccordion[i].addEventListener('click', function () {
    this.classList.toggle('active');
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.style.paddingTop = '0';
      panel.style.paddingBottom = '0';
    } else {
      panel.style.maxHeight = panel.scrollHeight + 32 + 'px';
      panel.style.paddingTop = '22px';
      panel.style.paddingBottom = '10px';
    }
  });
}

//toggleMobileMenu
const refs = {
  openMenuBtn: document.querySelector('[data-menu-open]'),
  closeMenuBtn: document.querySelector('[data-menu-close]'),
  menu: document.querySelector('[data-menu]'),
  body: document.querySelector('body'),
  menuList: document.querySelector('.mob-menu__nav'),
};

refs.openMenuBtn.addEventListener('click', openMenu);
refs.closeMenuBtn.addEventListener('click', removeMenu);
refs.menuList.addEventListener('click', removeMenu);

function openMenu() {
  refs.menu.classList.remove('is-hidden');
  refs.body.classList.add('no-scroll');
  refs.menu.style.width = '300px';
}

function removeMenu() {
  refs.menu.classList.add('is-hidden');
  refs.body.classList.remove('no-scroll');
  refs.menu.style.width = '0';
}
