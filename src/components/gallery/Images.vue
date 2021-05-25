<template>
  <div class="gallery__images">
    <VuePureLightbox
      class="gallery__item"
      v-for="img in limit"
      :key="img.id"
      :thumbnail="`/gallery/${year}/${img}.jpg`"
      :images="images"
    />
  </div>
</template>

<script>
import VuePureLightbox from "vue-pure-lightbox";
import "vue-pure-lightbox/dist/VuePureLightbox.css";

export default {
  components: {
    VuePureLightbox,
  },
  props: {
    year: Number,
    limit: Number,
  },
  data() {
    return {
      images: [],
    };
  },
  methods: {},
  mounted() {
    for (let index = 1; index <= this.limit; index++) {
      this.images.push(`/gallery/${this.year}/${index}.jpg`);
    }
  },
};
</script>
<style>
.lightbox {
  z-index: 99999999;
}
</style>
