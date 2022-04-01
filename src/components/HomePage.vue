<template>
  <carousel :items-to-show="1.5">
    <Slide v-for="image in images" :key="image.id">
      <img :src="getImage(image)" />
    </Slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      images: [{src: "./assets/Logo_Typo.png"}]
    }
  },
  methods: {
    getImage(imagePath) {
      return require(imagePath);
    }
  },
};
</script>