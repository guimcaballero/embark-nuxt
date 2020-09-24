<template>
  <div>
    <div class="tags">
      <div v-for="tag in tags" v-bind:class="'tag tag-' + tag">
        <a v-bind:href="tagUrl(tag)">{{ tag }}</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: ['tags'],
  methods: {
    tagUrl(tag: String) {
      return `/tags?tag=${tag}`
    },
  },
})
</script>
