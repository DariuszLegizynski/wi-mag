import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useIntersectionObserverStore = defineStore('intersectionObserver', () => {
  const header = reactive({})
  const elementToWatch = reactive({})
  // const observer = reactive({})
  const isContrastActive = ref(false)

  

  // observer.observe(elementToWatch)

  // const createObserver = new IntersectionObserver(entries => {
  //   entries.forEach(entry => {
  //     console.log("entry: ", entry)
  //   })
  // })
  // createObserver.observe(elementToWatch.value)

  
  // createObserver.observe(elementToWatch)
  //     // { rootMargin: "-5% 0px 0px 0px" }
  //   )
  //   // document
  //   //   .querySelectorAll(".observer")
  //   //   .forEach((el) => observer.value.observe(el));

  // createObserver.observe(header.value)

  // const getIntersectingElements = computed(() => {
  //   // intersectingElements.value = document.querySelector("intersection-observer")
  //   console.log(intersectingElements.value)
  //   return intersectingElements
  // })
  console.log("elementToWatch: ", elementToWatch)
  // console.log("observer: ", observer)
  
  return { isContrastActive, header, elementToWatch }
})
