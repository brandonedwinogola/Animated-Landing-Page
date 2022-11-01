gspa.registerPlugin(Observer);

let sections = document.querySelectorAll("section"),
  images = document.querySelectorAll(".bg"),
  headings = gsap.utils.toArray(".section-heading"),
  outerWrappers = gsap.utils.toArray(".outer"),
  innerWrappers = gsap.utils.toArray(".inner"),
  splitHeadings = headings.map(heading => new SplitText(heading, { type: "chars,words,lines", linesClass: "clip-text"})),
  currentIndex = -1,
  wrap = gsap.utils.wrap(0, sections.length -1),
  animating;

gsap.set(outerWrappers, { ypercent: 100 });
gsap.set(innerWrappers, { ypercent: 100 });


function gotoSection(index, direction) {
    index = wrap(index); // make sure its valid
    animating = true;
    let fromTop = direction === -1,
         dFactor = fromTop ? 
}
