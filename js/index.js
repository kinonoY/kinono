let API = "e2c4c5b5824d593aa96c087c34faec3b"

let miniNavShower = document.querySelector("#mini_nav_shower");
let dropdownContent = document.querySelector("#dropdown-content");

miniNavShower.addEventListener("click" , function() {
    if (dropdownContent.classList.contains("dropdown-content")) {
        dropdownContent.className = "dropdown-content-animation"
        setTimeout(function(){ dropdownContent.className = "dropdown-content-none";},1000);
    }
    else if (dropdownContent.classList.contains("dropdown-content-none")) {
        dropdownContent.className = "dropdown-content"
    }
})



let filmShowerButton = document.querySelector("#film_shower_button");
let filmShowerButtonMini = document.querySelector("#film_shower_button_mini");
let filmsSecmenu = document.querySelector(".films_secmenu");

let serialShowerButton = document.querySelector("#serial_shower_button");
let serialShowerButtonMini = document.querySelector("#serial_shower_button_mini");
let serialsSecmenu = document.querySelector(".serials_secmenu");

filmShowerButton.addEventListener("mouseenter" , function() {
    filmsSecmenu.classList.add("is-active");
    serialsSecmenu.classList.remove("is-active");
})
filmShowerButtonMini.addEventListener("click" , function() { 
    filmsSecmenu.classList.toggle("is-active");
    serialsSecmenu.classList.remove("is-active");
})
filmsSecmenu.addEventListener("mouseleave" , function() {
    filmsSecmenu.classList.remove("is-active");
})
serialShowerButton.addEventListener("mouseenter" , function() {
    serialsSecmenu.classList.add("is-active");
    filmsSecmenu.classList.remove("is-active");
})
serialShowerButtonMini.addEventListener("click" , function() { 
    serialsSecmenu.classList.toggle("is-active");
    filmsSecmenu.classList.remove("is-active");
})
serialsSecmenu.addEventListener("mouseleave" , function() {
    serialsSecmenu.classList.remove("is-active");
})

//
//
//
// -----VIDEOPLAYER-----
// --button--
//
//
//
let popularSwiperVideoPlayerButtons = document.querySelectorAll("#popularSwiperVideoPlayerButton");

for (let button of popularSwiperVideoPlayerButtons) {
  button.addEventListener("click", function(event) {
    let a = event.target;
    let i = a.closest("i");
    let popularSwiperVideoPlayer = a.closest(".popularSwiperVideoPlayer");
    popularSwiperVideoPlayer.classList.toggle("popularSwiperVideoPlayerHidden");
    let popularSwiperVideo =  a.closest(".popularSwiperVideo");
    let video = popularSwiperVideo.querySelector("video");
    if (i.classList.contains("fa-circle-play")) {
      i.classList.remove("fa-circle-play")
      i.classList.add("fa-circle-pause");
      video.play()
    }
    else if (i.classList.contains("fa-circle-pause")) {
      i.classList.remove("fa-circle-pause")
      i.classList.add("fa-circle-play");
      video.pause()
    }
    let h3 = popularSwiperVideoPlayer.querySelector("h3");
    h3.classList.toggle("popularSwiperVideoPlayerHiddenH3");
    let timer = popularSwiperVideo.querySelector(".timer");
    timer.classList.toggle("timerHidden")
    let popularSwiperVideoPlayerSlider = popularSwiperVideo.querySelector(".popularSwiperVideoPlayerSlider");
    popularSwiperVideoPlayerSlider.classList.toggle("popularSwiperVideoPlayerSliderHidden");
  })
}

let popularSwiperVideo = document.querySelectorAll(".popularSwiperVideo")

popularSwiperVideo.forEach(object => {
  let video = object.querySelector(".popularSwiperVideo-video");
  let slider = object.querySelector(".popularSwiperVideoPlayerSlider");
  let timer = object.querySelector(".timer");
  video.addEventListener("timeupdate", function setSliderAndTimer() {
    //get minutes
    let minutes = Math.floor(video.currentTime / 60);
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    //get seconds
    let seconds = Math.floor(video.currentTime % 60);
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    timer.textContent = `${minutes}:${seconds}`;
    slider.value = (video.currentTime / video.duration) * 100;
    if (video.currentTime == video.duration) {
      slider.value = 0;
    }
  });
  slider.addEventListener("input", function seeked() {
    video.currentTime = (slider.value / 100) * video.duration;
  });
})
//
//
//
//
// --------SWIPERS--------
//
//
//
//
var swiper = new Swiper(".recomendationSwiper", {
  slidesPerView: 6,
  spaceBetween: 20,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
    dragClass:'swiper-scrollbar-drag'
  },
  navigation: {
    nextEl: "#recomendationSwiperButtonNext",
    prevEl: "#recomendationSwiperButtonPrev",
  },
  breakpoints: {
    0: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    576: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1249: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
  }
});

var swiper = new Swiper(".tvSwiper", {
  slidesPerView: 6,
  spaceBetween: 20,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
    dragClass:'swiper-scrollbar-drag'
  },
  navigation: {
    nextEl: "#tvSwiperButtonNext",
    prevEl: "#tvSwiperButtonPrev",
  },
  breakpoints: {
    0: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    576: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1249: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
  }
});

var swiper = new Swiper(".searchSwiper", {
  slidesPerView: 6,
  spaceBetween: 20,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
    dragClass:'swiper-scrollbar-drag'
  },
  navigation: {
    nextEl: "#searchSwiperButtonNext",
    prevEl: "#searchSwiperButtonPrev",
  },
  breakpoints: {
    0: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    576: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1249: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
  }
});

var swiper = new Swiper(".popularSwiper", {
  effect: "coverflow",
  grabCursor: false,
  centeredSlides: true,
  slidesPerView: "auto",
  allowTouchMove: false,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 1000,
    modifier: 1,
    slideShadows: true
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: "#popularSwiperButtonNext",
    prevEl: "#popularSwiperButtonPrev"
  },
  breakpoints: {
    0: {
      allowTouchMove: true,
    },
    576: {
      allowTouchMove: false,
    },
    768: {
      
    },
    992: {
      
    },
    1249: {
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 1000,
        modifier: 1,
        slideShadows: true
      },
    },
  }
});
//
//
//
// .............ADAPTATION..............
//
//
//
let mobileScreen = window.matchMedia("(max-width: 543px)");
let dlin = document.querySelectorAll(".dlin");
let recomendationSwiperButtonNext = document.querySelector("#recomendationSwiperButtonNext");
let recomendationSwiperButtonPrev = document.querySelector("#recomendationSwiperButtonPrev");
let tvSwiperButtonNext = document.querySelector("#tvSwiperButtonNext");
let tvSwiperButtonPrev = document.querySelector("#tvSwiperButtonPrev");
if (window.innerWidth <= 576) {
  dlin.forEach(a => {if (a.classList.contains("recomendationSwiper")) {a.removeChild(recomendationSwiperButtonNext);a.removeChild(recomendationSwiperButtonPrev)}})
  dlin.forEach(a => {if (a.classList.contains("tvSwiper")) {a.removeChild(tvSwiperButtonNext);a.removeChild(tvSwiperButtonPrev)}})
}
else {
  dlin.forEach(a => {if (a.classList.contains("recomendationSwiper")) {a.appendChild(recomendationSwiperButtonNext);a.appendChild(recomendationSwiperButtonPrev)}})
  dlin.forEach(a => {if (a.classList.contains("tvSwiper")) {a.appendChild(tvSwiperButtonNext);a.appendChild(tvSwiperButtonPrev)}})
}

mobileScreen.addEventListener("change", function(mm) {
  if (mm.matches) {
    dlin.forEach(a => {if (a.classList.contains("recomendationSwiper")) {a.removeChild(recomendationSwiperButtonNext);a.removeChild(recomendationSwiperButtonPrev)}})
    dlin.forEach(a => {if (a.classList.contains("tvSwiper")) {a.removeChild(tvSwiperButtonNext);a.removeChild(tvSwiperButtonPrev)}})
  }
  else {
    dlin.forEach(a => {if (a.classList.contains("recomendationSwiper")) {a.appendChild(recomendationSwiperButtonNext);a.appendChild(recomendationSwiperButtonPrev)}})
    dlin.forEach(a => {if (a.classList.contains("tvSwiper")) {a.appendChild(tvSwiperButtonNext);a.appendChild(tvSwiperButtonPrev)}})
  }
})




//
//
//
// --------- URL (FETCH) ----------
//
//
//
let recomendation = document.querySelector("#recomandation");
let cardTemplate = document.querySelector("#swiper-slide-template")
let cardTemplatePerson = document.querySelector("#swiper-slide-template-person")

let popularURL = `https://api.themoviedb.org/3/movie/popular?api_key=${API}&language=en-US&page=1`;

async function popularListReactor() {
  let response = await fetch(popularURL);
  let json = await response.json();
  // console.log(json);    // десериализует объект из ответа в JSON формате
  popularListCreator(json);
  timeSetter();
}

var filmTime = []
function popularListCreator(list) {
  let resualt = {}; // создаем результаты (пустой обьект)
  Object.assign(resualt, list.results) // выделяем resualt из общего массива
  // console.log(Object.keys(resualt).length); // вычесляем длину обьекта для информации (в данном случае 20)
  let x = Object.values(resualt); // все обьекты из оьщего обьекта
 // промиты не возращают значения пришлось создать массив и потом по циклу присваивать дату
  filmCount = 0 

  x.forEach(object => {
    let filmJSON = {}
    
    Object.assign(filmJSON, object)
    // console.log(filmJSON) // обьект 1 фильма
    let imageLink = "https://image.tmdb.org/t/p/w600_and_h900_bestv2" + filmJSON.poster_path;
    let filmName = filmJSON.title;
    let statistic = filmJSON.vote_average;
    let filmDate = filmJSON.release_date;
    let filmId = filmJSON.id;
    let filmURL = `https://api.themoviedb.org/3/movie/${filmId}?api_key=${API}&language=en-US`;
    //создаем параметры клонов
    var templateClone = cardTemplate.content.cloneNode(true);
    templateClone.querySelector(".film_card_image").setAttribute("src",imageLink);
    templateClone.querySelector(".film_card_name_text").innerText = `${filmName}`;
    templateClone.querySelector(".counter").dataset.cpPercentage = statistic*10;
    templateClone.querySelector(".film_card_mini_info_date_p").innerText= filmDate;
    templateClone.querySelector(".film_card_mini_info_country_p").innerText= filmName;
    

    templateClone.querySelector(".film_card_mini_info_time_p").classList.add("recomandationFilmsTime" + filmCount)
    fetch(filmURL)
      .then(response => response.json())
      .then(commits => filmTime.push(commits.runtime));
    recomendation.append(templateClone); //создаем конечный клон
    filmCount +=1
  })
  swiper.update();
  progressBar()
}


function timeSetter() {
  setTimeout(() => {
    for (let i=0; i < 20; i++) {
      document.querySelector(`.recomandationFilmsTime${i}`).innerText = "(" + filmTime[i] + "min)"
    }
  }, 300);
}


popularListReactor()



let tvURL = `https://api.themoviedb.org/3/tv/popular?api_key=${API}&language=en-US&page=1`;
let tv = document.querySelector("#tv");

async function popularTvReactor() {
  let response = await fetch(tvURL);
  let json = await response.json();    // десериализует объект из ответа в JSON формате
  popularTvListCreator(json);
  tvTimeSetter();
}

var tvfilmTime = []
function popularTvListCreator(list) {
  let resualt = {}; // создаем результаты (пустой обьект)
  Object.assign(resualt, list.results) // выделяем resualt из общего массива
  // console.log(Object.keys(resualt).length); // вычесляем длину обьекта для информации (в данном случае 20)
  let x = Object.values(resualt); // все обьекты из оьщего обьекта
 // промиты не возращают значения пришлось создать массив и потом по циклу присваивать дату
  filmCount = 0 

  x.forEach(object => {
    let filmJSON = {}
    
    Object.assign(filmJSON, object)
    // console.log(filmJSON) // обьект 1 фильма
    let imageLink = "https://image.tmdb.org/t/p/w600_and_h900_bestv2" + filmJSON.poster_path;
    let filmName = filmJSON.name;
    let statistic = filmJSON.vote_average;
    let filmDate = filmJSON.first_air_date;
    let filmId = filmJSON.id;
    let filmURL = `https://api.themoviedb.org/3/movie/${filmId}?api_key=${API}&language=en-US`;
    let tvURL = `https://api.themoviedb.org/3/tv/${filmId}?api_key=${API}&language=en-US`;
    //создаем параметры клонов
    var templateClone = cardTemplate.content.cloneNode(true);
    templateClone.querySelector(".film_card_image").setAttribute("src",imageLink);
    templateClone.querySelector(".film_card_name_text").innerText = `${filmName}`;
    templateClone.querySelector(".counter").dataset.cpPercentage = statistic*10;
    templateClone.querySelector(".film_card_mini_info_date_p").innerText= filmDate;
    templateClone.querySelector(".film_card_mini_info_country_p").innerText= filmName;
    // console.log(filmURL);

    templateClone.querySelector(".film_card_mini_info_time_p").classList.add("tvFilmsTime" + filmCount)

    async function tvFilmGetter(url) {
      let response = await fetch(url);
      let json = await response.json();
      // console.log(json);
      let commits = json.number_of_seasons;
      tvfilmTime.push(commits);
    }
    tvFilmGetter(tvURL);
    // fetch(filmURL)
    //   .then(response => response.json())
    //   .then(commits => tvfilmTime.push(commits.runtime));
    tv.append(templateClone); //создаем конечный клон
    filmCount +=1
  })
  swiper.update();
  progressBar()
}

function tvTimeSetter() {
  setTimeout(() => {
    for (let i=0; i < 20; i++) {
      if (tvfilmTime[i] == 1){
        document.querySelector(`.tvFilmsTime${i}`).innerText = "(" + tvfilmTime[i] + " season)"
      }
      else{
        document.querySelector(`.tvFilmsTime${i}`).innerText = "(" + tvfilmTime[i] + " seasons)"
      }
    }
  }, 300);
}

popularTvReactor()







let input = document.querySelector(".input-search");
let btnSearch = document.querySelector(".btn-search");
let searchSwiper = document.querySelector("#search");

input.addEventListener('keydown', function(e) {
  if (e.keyCode === 13) {
    // можете делать все что угодно со значением текстового поля
    btnSearch.click()
  }
});

btnSearch.addEventListener("click",function() {
if (input.value === "") {
  searchSwiper.innerHTML = ""
}
else {
  let searchURL = `https://api.themoviedb.org/3/search/multi?api_key=${API}&language=en-US&query=${input.value}&page=1&include_adult=false`;
  searchSwiper.innerHTML = ''
  async function searcher(url) {
    let response = await fetch(url);
    let json = await response.json();
    searchListCreator(json);

  }
  searcher(searchURL)
}
})

function searchListCreator(list) {
  let resualt = {}; // создаем результаты (пустой обьект)
  Object.assign(resualt, list.results) // выделяем resualt из общего массива
  // console.log(Object.keys(resualt).length); // вычесляем длину обьекта для информации (в данном случае 20)
  let x = Object.values(resualt); // все обьекты из общего обьекта
 // промиты не возращают значения пришлось создать массив и потом по циклу присваивать дату

  x.forEach(object => {
    let filmJSON = {}
    
    Object.assign(filmJSON, object)
    console.log(filmJSON) // обьект 1 фильма
    let media_type = filmJSON.media_type;
    if (media_type === "tv") {
      let tvImg = "https://image.tmdb.org/t/p/w600_and_h900_bestv2" + filmJSON.poster_path;
      let tvName = filmJSON.name;
      let tvStatistic = filmJSON.vote_average;
      let tvDate = filmJSON.first_air_date;
      let tvId = filmJSON.id;
      //создаем параметры клонов
      var templateClone = cardTemplate.content.cloneNode(true);
      templateClone.querySelector(".film_card_image").setAttribute("src",tvImg);
      templateClone.querySelector(".film_card_name_text").innerText = `${tvName}`;
      templateClone.querySelector(".counter").dataset.cpPercentage = tvStatistic*10;
      templateClone.querySelector(".film_card_mini_info_date_p").innerText= tvDate;
      templateClone.querySelector(".film_card_mini_info_country_p").innerText= tvName;
    }
    else if (media_type === "movie") {
      let movieDate = filmJSON.release_date;
      let movieName = filmJSON.original_title;
      let movieStatistic = filmJSON.vote_average;
      let movieImg = "https://image.tmdb.org/t/p/w600_and_h900_bestv2" + filmJSON.poster_path;
      let movieId = filmJSON.id;
      //создаем параметры клонов
      var templateClone = cardTemplate.content.cloneNode(true);
      templateClone.querySelector(".film_card_image").setAttribute("src",movieImg);
      templateClone.querySelector(".film_card_name_text").innerText = `${movieName}`;
      templateClone.querySelector(".counter").dataset.cpPercentage = movieStatistic*10;
      templateClone.querySelector(".film_card_mini_info_date_p").innerText= movieDate;
      templateClone.querySelector(".film_card_mini_info_country_p").innerText= movieName;
    }
    else if (media_type === "person") {
      let personName = filmJSON.name;
      let gender = filmJSON.gender;
      if (gender === 1) {
        gender = "female"
      }
      else if (gender === 2) {
        gender = "male"
      }
      let personImg = "https://image.tmdb.org/t/p/w600_and_h900_bestv2" + filmJSON.profile_path;
      //создаем параметры клонов
      var templateClone = cardTemplatePerson.content.cloneNode(true);
      templateClone.querySelector(".film_card_image").setAttribute("src",personImg);
      templateClone.querySelector(".film_card_name_text").innerText = `${personName}`;
      templateClone.querySelector(".film_card_mini_info_date_p").innerText= gender;
      templateClone.querySelector(".film_card_mini_info_country_p").innerText= personName;
    }

    searchSwiper.append(templateClone); //создаем конечный клон
  })
  swiper.update();
  progressBar()
}