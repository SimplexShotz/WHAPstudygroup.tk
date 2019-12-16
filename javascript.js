if (!('IntersectionObserver' in window) ||
    !('IntersectionObserverEntry' in window) ||
    !('intersectionRatio' in window.IntersectionObserverEntry.prototype)) {
    document.getElementsByClassName("header-sticky")[0].toggleAttribute("stuck");
} else {
  const observer = new IntersectionObserver(
    ([e]) => e.target.toggleAttribute("stuck", e.intersectionRatio < 1),
    {threshold: [1]}
  );
  observer.observe(document.getElementsByClassName("header-sticky")[0]);
}
