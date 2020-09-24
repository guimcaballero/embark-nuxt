<template>
  <div>
    <div class="github-btn github-stargazers github-btn-large" v-if="project.stargazers_count != undefined">
      <a class="gh-btn" :href="repoUrl(project)" rel="noopener noreferrer" target="_blank">
        <span class="gh-ico" aria-hidden="true"></span>
        <span class="gh-text">Star</span>
      </a>
      <a class="gh-count" :href="stargazersUrl(project)" rel="noopener noreferrer" target="_blank" aria-hidden="true">{{project.stargazers_count}}</a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: 'star-count',
  props: ['project'],
});
</script>
