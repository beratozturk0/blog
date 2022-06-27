"use strict";

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
var swiperData = [{
  id: 1,
  img: "/assets/img/kapı.webp",
  title: "Your most unhappy <br> customers are your greatest source of learning.",
  text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
}, {
  id: 2,
  img: "/assets/img/kaktus.webp",
  title: "Your most unhappy <br> customers are your greatest source of learning.",
  text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
}, {
  id: 3,
  img: "/assets/img/elma.webp",
  title: "Your most unhappy <br> customers are your greatest source of learning.",
  text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
}, {
  id: 4,
  img: "/assets/img/gokdelen.webp",
  title: "Your most unhappy <br> customers are your greatest source of learning.",
  text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
}];
var swiperWrapper = document.querySelector(".swiper-wrapper");
swiperData.forEach(function (p) {
  var slide = "<div class=\"swiper-slide\">\n            <div class=\"swiperImg\"><img src=\"".concat(p.img, "\" alt=\"\"></div>\n            <div class=\"textWrapper\">\n              <div class=\"title\">").concat(p.title, "</div>\n              <div class=\"text\">").concat(p.text, "</div>\n          </div>");
  swiperWrapper.insertAdjacentHTML('afterbegin', slide);
});
var postsData = [{
  id: 1,
  img: '/assets/img/post.webp',
  title: 'Your most unhappy customers are your greatest source of learning.',
  text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus obcaecati eius consequuntur libero voluptatem tempora ullam sequi animi hic excepturi, at cum expedita facere necessitatibus nihil sapiente repellat nemo quae.'
}, {
  id: 2,
  img: "/assets/img/post2.webp",
  title: "Your most unhappy customers are your greatest source of learning.",
  text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus obcaecati eius consequuntur libero voluptatem tempora ullam sequi animi hic excepturi, at cum expedita facere necessitatibus nihil sapiente repellat nemo quae.'
}, {
  id: 3,
  img: "/assets/img/post3.webp",
  title: "Your most unhappy customers are your greatest source of learning.",
  text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus obcaecati eius consequuntur libero voluptatem tempora ullam sequi animi hic excepturi, at cum expedita facere necessitatibus nihil sapiente repellat nemo quae.'
}, {
  id: 4,
  img: "/assets/img/post4.jpg",
  title: "Your most unhappy customers are your greatest source of learning.",
  text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus obcaecati eius consequuntur libero voluptatem tempora ullam sequi animi hic excepturi, at cum expedita facere necessitatibus nihil sapiente repellat nemo quae.'
}, {
  id: 5,
  img: "/assets/img/post5.webp",
  title: "Your most unhappy customers are your greatest source of learning.",
  text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus obcaecati eius consequuntur libero voluptatem tempora ullam sequi animi hic excepturi, at cum expedita facere necessitatibus nihil sapiente repellat nemo quae.'
}, {
  id: 6,
  img: "/assets/img/post6.webp",
  title: "Your most unhappy customers are your greatest source of learning.",
  text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus obcaecati eius consequuntur libero voluptatem tempora ullam sequi animi hic excepturi, at cum expedita facere necessitatibus nihil sapiente repellat nemo quae.'
}];
console.log(postsData[0].img, postsData[1].title, postsData[2].text);
var posts = document.querySelector('.posts');
var postInfo = document.querySelector(".postInfo");
var offButton = document.querySelector(".offButton");
postsData.forEach(function (p) {
  var post = document.createElement('div');
  post.className = 'post';

  post.onclick = function () {
    postInfo.classList.add("active");
    postInfo.querySelector('.title').textContent = p.title;
    postInfo.querySelector("img").src = p.img;
    postInfo.querySelector(".text").textContent = p.text;
    console.log(p);
  };

  var imgWrapper = document.createElement('div');
  imgWrapper.className = 'imgWrapper';
  var img = document.createElement('img');
  img.src = p.img;
  imgWrapper.append(img);
  var title = document.createElement('div');
  title.className = 'title';
  title.textContent = p.title;
  console.log(title);
  post.append(imgWrapper);
  post.append(title);
  posts.append(post);
  console.log(post);
});

offButton.onclick = function () {
  postInfo.classList.remove("active");
};

console.log(posts);
var menu = document.querySelector(".menu");
var menuButton = document.querySelector(".menuButton");

document.onclick = function (e) {
  console.log('Event ', event);

  if (e.target.closest('.menuButton')) {
    menu.classList.toggle("active");
  }

  if (e.target == menuButton) {
    return;
  }

  menu.classList.remove("active");
};