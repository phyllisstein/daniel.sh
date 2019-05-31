export const onClientEntry = () => {
  return Promise.all([
    import('prismjs/themes/prism.css'),
    import('./static/styles/custom-block.css'),
    typeof window.IntersectionObserver === 'undefined' ? import('intersection-observer') : Promise.resolve(),
  ])
}
