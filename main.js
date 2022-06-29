import "/assets/scss/main.scss"
import Swiper, {
  Navigation,
  Pagination
} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import kapi from "/assets/img/kapi.webp";
import kaktus from "/assets/img/kaktus.webp";
import elma from "/assets/img/elma.webp";
import gokdelen from "/assets/img/gokdelen.webp";
import post from '/assets/img/post.webp';
import post2 from '/assets/img/post2.webp';
import post3 from '/assets/img/post3.webp';
import post4 from '/assets/img/post4.jpg';
import post5 from '/assets/img/post5.webp';
import post6 from '/assets/img/post6.webp';
const swiper = new Swiper(".mySwiper", {
  modules: [Navigation, Pagination],
  slidesPerView: "auto",
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiperData = [{
    id: 1,
    img: kapi,
    title: "Your most unhappy <br> customers are your greatest source of learning.",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
  },
  {
    id: 2,
    img: kaktus,
    title: "Your most unhappy <br> customers are your greatest source of learning.",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
  },
  {
    id: 3,
    img: elma,
    title: "Your most unhappy <br> customers are your greatest source of learning.",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
  },
  {
    id: 4,
    img: gokdelen,
    title: "Your most unhappy <br> customers are your greatest source of learning.",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
  },
]

const swiperWrapper = document.querySelector(".swiper-wrapper")

swiperData.forEach((p) => {
  const slide = `<div class="swiper-slide">
            <div class="swiperImg"><img src="${p.img}" alt=""></div>
            <div class="textWrapper">
              <div class="title">${p.title}</div>
              <div class="text">${p.text}</div>
          </div>`

  swiperWrapper.insertAdjacentHTML('afterbegin', slide)
})

const postsData = [{
    id: 1,
    img: post,
    title: 'Your most unhappy customers are your greatest source of learning.',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus obcaecati eius consequuntur libero voluptatem tempora ullam sequi animi hic excepturi, at cum expedita facere necessitatibus nihil sapiente repellat nemo quae.'
  },
  {
    id: 2,
    img: post2,
    title: "Your most unhappy customers are your greatest source of learning.",
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus obcaecati eius consequuntur libero voluptatem tempora ullam sequi animi hic excepturi, at cum expedita facere necessitatibus nihil sapiente repellat nemo quae.'
  },
  {
    id: 3,
    img: post3,
    title: "Your most unhappy customers are your greatest source of learning.",
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus obcaecati eius consequuntur libero voluptatem tempora ullam sequi animi hic excepturi, at cum expedita facere necessitatibus nihil sapiente repellat nemo quae.'
  },
  {
    id: 4,
    img: post4,
    title: "Your most unhappy customers are your greatest source of learning.",
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus obcaecati eius consequuntur libero voluptatem tempora ullam sequi animi hic excepturi, at cum expedita facere necessitatibus nihil sapiente repellat nemo quae.'
  },
  {
    id: 5,
    img: post5,
    title: "Your most unhappy customers are your greatest source of learning.",
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus obcaecati eius consequuntur libero voluptatem tempora ullam sequi animi hic excepturi, at cum expedita facere necessitatibus nihil sapiente repellat nemo quae.'
  },
  {
    id: 6,
    img: post6,
    title: "Your most unhappy customers are your greatest source of learning.",
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus obcaecati eius consequuntur libero voluptatem tempora ullam sequi animi hic excepturi, at cum expedita facere necessitatibus nihil sapiente repellat nemo quae.'
  },
]

const posts = document.querySelector('.posts');
const postInfo = document.querySelector(".postInfo")
const offButton = document.querySelector(".offButton")

postsData.forEach((p) => {
  const post = document.createElement('div')
  post.className = 'post'
  post.onclick = () => {
    postInfo.classList.add("active")
    postInfo.querySelector('.title').textContent = p.title
    postInfo.querySelector("img").src = p.img
    postInfo.querySelector(".text").textContent = p.text
  }

  const imgWrapper = document.createElement('div')
  imgWrapper.className = 'imgWrapper'

  const img = document.createElement('img')
  img.src = p.img

  imgWrapper.append(img)

  const title = document.createElement('div')
  title.className = 'title'
  title.textContent = p.title

  post.append(imgWrapper)
  post.append(title)
  posts.append(post)
})

offButton.onclick = () => {
  postInfo.classList.remove("active")
}

const menu = document.querySelector(".menu")

const menuButton = document.querySelector(".menuButton")
document.onclick = (e) => {
  if (e.target.closest('.menuButton')) {
    menu.classList.toggle("active")
  }
  if (e.target == menuButton) {
    return
  }
  menu.classList.remove("active")
}