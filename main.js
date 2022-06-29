import "/assets/scss/main.scss"
const swiper = new Swiper(".mySwiper", {
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
    img: "/assets/img/kapı.webp",
    title: "Your most unhappy <br> customers are your greatest source of learning.",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
  },
  {
    id: 2,
    img: "/assets/img/kaktus.webp",
    title: "Your most unhappy <br> customers are your greatest source of learning.",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
  },
  {
    id: 3,
    img: "/assets/img/elma.webp",
    title: "Your most unhappy <br> customers are your greatest source of learning.",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
  },
  {
    id: 4,
    img: "/assets/img/gokdelen.webp",
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
    img: '/assets/img/post.webp',
    title: 'Your most unhappy customers are your greatest source of learning.',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus obcaecati eius consequuntur libero voluptatem tempora ullam sequi animi hic excepturi, at cum expedita facere necessitatibus nihil sapiente repellat nemo quae.'
  },
  {
    id: 2,
    img: "/assets/img/post2.webp",
    title: "Your most unhappy customers are your greatest source of learning.",
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus obcaecati eius consequuntur libero voluptatem tempora ullam sequi animi hic excepturi, at cum expedita facere necessitatibus nihil sapiente repellat nemo quae.'
  },
  {
    id: 3,
    img: "/assets/img/post3.webp",
    title: "Your most unhappy customers are your greatest source of learning.",
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus obcaecati eius consequuntur libero voluptatem tempora ullam sequi animi hic excepturi, at cum expedita facere necessitatibus nihil sapiente repellat nemo quae.'
  },
  {
    id: 4,
    img: "/assets/img/post4.jpg",
    title: "Your most unhappy customers are your greatest source of learning.",
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus obcaecati eius consequuntur libero voluptatem tempora ullam sequi animi hic excepturi, at cum expedita facere necessitatibus nihil sapiente repellat nemo quae.'
  },
  {
    id: 5,
    img: "/assets/img/post5.webp",
    title: "Your most unhappy customers are your greatest source of learning.",
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus obcaecati eius consequuntur libero voluptatem tempora ullam sequi animi hic excepturi, at cum expedita facere necessitatibus nihil sapiente repellat nemo quae.'
  },
  {
    id: 6,
    img: "/assets/img/post6.webp",
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