const service = document.querySelector('#service')
const segundaUl = document.querySelector('.segUl')
service.addEventListener('mouseover', function () {
  segundaUl.classList.add('showUl')
})
service.addEventListener('mouseout', function () {
  segundaUl.classList.remove('showUl')
})

segundaUl.addEventListener('mouseover', function () {
  segundaUl.classList.add('showUl')
})
segundaUl.addEventListener('mouseout', function () {
  segundaUl.classList.remove('showUl')
})

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

ScrollReveal().reveal(
  '.headline, .img, .info_about, .img_about, .gradient, .card, .sociais, .contact_all, .info_home, .swiper',

  { interval: 100 }
)

const btnTop = document.querySelector('.btnTop')

function backTop() {
  if (scrollY >= 560) {
    btnTop.classList.add('show')
  } else {
    btnTop.classList.remove('show')
  }
}


const nav = document.querySelector('.nav')


const links = document.querySelectorAll('ul li a')

Array.from(links).forEach(function (link) {
  link.addEventListener('click', function () {
    nav.classList.remove('showNav')
  })
})

const sections = document.querySelectorAll('section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('.nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('.nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

const header = document.querySelector('.header')
const logo = document.querySelector('.header > .logo')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    logo.classList.add('scroll')
  } else {
    logo.classList.remove('scroll')
  }
}

window.addEventListener('scroll', function () {
  backTop()
  activateMenuAtCurrentSection()
  changeHeaderWhenScroll()
})

const btnService = document.querySelectorAll('#services button')
const card = document.querySelectorAll('.card')


Array.from(btnService).forEach((item, index) => {
  item.addEventListener('click', () => {
    showCard(item, index)
    if (item.textContent === "+ Info") {
      item.textContent = "Voltar";
      item.value = "Voltar"
  } else {
      item.textContent = "+ Info";
      item.value = "+ Info"
  }
  })
})

const showCard = (item, index) => {
  card[index].classList.toggle('showInfo')
}


// SWIPER JS


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  autoplay: {
    delay: 4000,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: "progressbar",
  },
  
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

const buttonMenu = document.querySelector('.hamburger')
console.log(buttonMenu)

buttonMenu.addEventListener('click', function () {
  buttonMenu.classList.toggle('hamburger--collapse')
  buttonMenu.classList.toggle('is-active')
  nav.classList.toggle('showNav')
})