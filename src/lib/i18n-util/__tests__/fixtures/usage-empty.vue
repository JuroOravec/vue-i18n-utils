<!--
Vue's hello world file. Includes TypeScript script, pug template, and style,
and i18n elements 

Usage defined in both template and script elements should be extracted from this file.
-->
<template lang="pug">
  div(data-qa="hello")
    h1 {{ msg }}
    p
      | For a guide and recipes on how to configure / customize this project,<br />
      | check out the
      a(
        href="https://cli.vuejs.org"
        target="_blank"
        rel="noopener")
        | vue-cli documentation
    ul
      li
        a(
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript"
          target="_blank"
          rel="noopener")
          | typescript
    h3 Essential Links
    ul
      li
        a(
          href="https://vuejs.org"
          target="_blank"
          rel="noopener")
          | Core Docs
      li
        a(
          href="https://forum.vuejs.org"
          target="_blank"
          rel="noopener")
          | Forum
      li
        a(
          href="https://chat.vuejs.org"
          target="_blank"
          rel="noopener")
          | Community Chat
      li
        a(
          href="https://twitter.com/vuejs"
          target="_blank"
          rel="noopener")
          | Twitter
      li
        a(
          href="https://news.vuejs.org"
          target="_blank"
          rel="noopener")
    h3 Ecosystem
    ul
      li
        a(
          href="https://router.vuejs.org"
          target="_blank"
          rel="noopener")
        | vue-router
      li
        a(
          href="https://vuex.vuejs.org"
          target="_blank"
          rel="noopener")
          | vuex
      li
        a(
          href="https://github.com/vuejs/vue-devtools#vue-devtools"
          target="_blank"
          rel="noopener")
          | vue-devtools
      li
        a(
          href="https://vue-loader.vuejs.org"
          target="_blank"
          rel="noopener")
          | vue-loader
      li
        a(
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
          rel="noopener")
          | awesome-vue
    HelloI18n
    locale-changer
</template>

<script lang="ts">
// @ts-nocheck
import Vue from 'vue';
import LocaleChanger from '../LocaleChanger';
import HelloI18n from '../HelloI18n.vue';

export default Vue.extend({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  components: { LocaleChanger, HelloI18n },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}

ul {
  padding: 0;
  list-style-type: none;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
