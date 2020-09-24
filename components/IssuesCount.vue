<template>
  <div>
    <div class="github-btn github-stargazers github-btn-large" v-if="project.open_issues_count != undefined">
      <a class="gh-btn" :href="issuesUrl(project)" rel="noopener noreferrer" target="_blank">
        <span class="gh-ico" aria-hidden="true"></span>
        <span class="gh-text">Issues</span>
      </a>
      <a class="gh-count" :href="issuesUrl(project)" rel="noopener noreferrer" target="_blank" aria-hidden="true">{{project.open_issues_count}}</a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: 'issues-cound',
  props: ['project']
});
</script>
