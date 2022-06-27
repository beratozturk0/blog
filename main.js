import "/assets/scss/main.scss"

//SWİPER
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
console.log(postsData[0].img, postsData[1].title, postsData[2].text)
// POST EKLEME FONKSİYONU

// const addPost = (img, title) => {
//   const postEl = document.createElement('div')
//   postEl.className = 'post'

//   const imgWrapper = document.createElement('div')
//   imgWrapper.className = 'imgWrapper'

//   const img = document.createElement('img')
//   img.src = img

//   imgWrapper.append(img)

//   const title = document.createElement('div')
//   title.className = 'title'

//   postEl.append(imgWrapper)
//   posts.append(postEl)
// }

const posts = document.querySelector('.posts');
const postInfo = document.querySelector(".postInfo")
const offButton = document.querySelector(".offButton")
postsData.forEach((p) => {
  // addPost(post.img, post.title)

  const post = document.createElement('div')
  post.className = 'post'
  post.onclick = () => {
    postInfo.classList.add("active")
    postInfo.querySelector('.title').textContent = p.title
    postInfo.querySelector("img").src = p.img
    postInfo.querySelector(".text").textContent = p.text
    console.log(p)
  }


  const imgWrapper = document.createElement('div')
  imgWrapper.className = 'imgWrapper'

  const img = document.createElement('img')
  img.src = p.img

  imgWrapper.append(img)

  const title = document.createElement('div')
  title.className = 'title'
  title.textContent = p.title

  console.log(title)

  // const text = document.createElement("div")
  // text.className = "text"
  // text.textContent = p.text


  post.append(imgWrapper)
  post.append(title)
  // post.append(text)

  posts.append(post)
  console.log(post)
})
offButton.onclick = () => {
  postInfo.classList.remove("active")
}

// FOR DÖNGÜSÜ
// for (let i = 0; i < 10; i++) {
//   console.log(i)
// }

//DÖNGÜNÜN KISA YAZIMI
// postsData.forEach(f => console.log(f.id))

// postsData.forEach(el => {

// })


console.log(posts)

const menu = document.querySelector(".menu")
const menuButton = document.querySelector(".menuButton")

document.onclick = (e) => {
  console.log('Event ', event)
  // console.log('Event Target', event.target)

  if (e.target.closest('.menuButton')) {
    menu.classList.toggle("active")
    // if (menu.classList.contains('active')) {
    //   menu.classList.remove("active")
    // } else menu.classList.add("active")
  }
  if (e.target == menuButton) {
    return
  }
  menu.classList.remove("active")

}