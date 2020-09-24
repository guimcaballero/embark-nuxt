<template>
  <div>
    <div class="github-buttons-container">
      <star-count :project="project" />
      <issues-count :project="project" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: 'github-stats',
  props: ['project'],
});
</script>
