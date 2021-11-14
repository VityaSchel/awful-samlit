function display_all_parts() {
  document.getElementById("article-part-2").className = "article-part-shown";
  document.getElementById("article-part-3").className = "article-part-shown";
  document.getElementById("article-part-4").className = "article-part-shown";
  document.getElementById("scroll-loading-part").className = "article-part-hidden";
  document.getElementById("article-end").className = "article-part-shown";
}

if(/google|yandex/i.test(navigator.userAgent)){
  display_all_parts();
}

document.querySelectorAll('a[href^="#"]').forEach(e => {
  e.addEventListener("mousedown", () => {
    display_all_parts();
  });
});

function user_using_internet_explorer() {
  let ua = window.navigator.userAgent;
  let msie = ua.indexOf("MSIE ");
  if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)){
      return true;
  }
  return false;
}

if(user_using_internet_explorer()){
  display_all_parts();
}

if(window.location.hash){
  display_all_parts();
}

document.getElementById("scroll-loading-part").addEventListener("click", display_all_parts);

window.addEventListener("load", () => {
  let part2 = setInterval(() => {
    if(document.getElementById("article-part-1-delimiter").offsetTop <= scrollY){
      document.getElementById("article-part-2").className = "article-part-shown";
      clearInterval(part2);
    }
  }, 10);

  let part3 = setInterval(() => {
    if(document.getElementById("article-part-2-delimiter").offsetTop <= scrollY){
      document.getElementById("article-part-3").className = "article-part-shown";
      clearInterval(part3);
    }
  }, 10);

  let part4 = setInterval(() => {
    if(document.getElementById("article-part-3-delimiter").offsetTop <= scrollY){
      document.getElementById("article-part-4").className = "article-part-shown";
      document.getElementById("scroll-loading-part").className = "article-part-hidden";
      document.getElementById("article-end").className = "article-part-shown";
      clearInterval(part4);
    }
  }, 10);

  setTimeout(() => {
    if(window.location.hash){
      let anchored_heading = window.location.hash.substring(1);
      let anchored_element = document.getElementById(anchored_heading);
      zenscroll.to(anchored_element, 250);
    }
  }, 10);
});

let lazyLoadInstance = new LazyLoad();
lazyLoadInstance.update();
