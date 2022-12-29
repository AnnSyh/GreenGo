import { useRef, useLayoutEffect } from "react";

const TopArrow = () => {
  // const arrowTop = document.querySelector(".back-to-top");

  // console.log("arrowTop = ", arrowTop);

  // window.addEventListener('scroll', function(evt) {

  //   if (window.scrollY > 200){
  //     arrowTop.classList.add('arrow-top__visible');
  //   } else {
  //     arrowTop.classList.remove('arrow-top__visible');
  //   }
  // });

  return (
    <a
      className="back-to-top"
      href="#intro"
      role="button"
      aria-label="Back to top"
      data-scroll-to="true"
    >
      <svg
        className="fill-current"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
      >
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 7.58l5.995 5.988-1.416 1.414-4.579-4.574-4.59 4.574-1.416-1.414 6.006-5.988z" />
      </svg>
    </a>
  );
};

export { TopArrow };
