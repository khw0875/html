//페이지 로드
window.addEventListener("load", function () {
  const grid = new Isotope("section", {
    itemSelector: "article",
    columWidth: "article",
    transitionDuration: "0.5s",
  });

  const btns = document.querySelectorAll(".menu li");

  for (let el of btns) {
    el.addEventListener("click", (e) => {
      e.preventDefault();

      const sort = e.currentTarget.querySelector("a").getAttribute("href");

      grid.arrange({
        //옵션값으로 sort변수값 지정
        filter: sort,
      });

      for (let el of btns) {
        el.classList.remove("on");
      }

      e.currentTarget.classList.add("on");
    });
  }
});
