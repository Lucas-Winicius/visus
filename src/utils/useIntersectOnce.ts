import { onMounted, type Ref } from 'vue';

export function useIntersectOnce(el: Ref<HTMLElement | null>, callback: () => void) {
  onMounted(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        if (entries[0].isIntersecting) {
          callback();
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (el.value) observer.observe(el.value);
  });
}
