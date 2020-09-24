<template>
  <div>
    <section class="category">
      <h2 class="category-title">Our <span class="category-tag">{{ tag }}</span> projects</h2>
      <div class="projects-container" v-bind:id="tag">
        <a v-bind:href="repoUrl(p)" class="project" v-for="p in projects">
          <div class="project-card">
            <h3 class="title">
              <span class="emoji">{{ p.emoji }}</span>
              {{ p.name }}
            </h3>
            <p v-html="p.description"></p>
            <tags v-bind:tags="p.tags"></tags>
            <github-stats :project="p" />
          </div>
        </a>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: 'project-category',
  props: ['projects', 'tag'],
});
</script>
