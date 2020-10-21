<template lang="pug">
  div
    #illustration
        .filter
        .cover

    aside#sidebar.w-16.bg-frontColor(class='hover:w-48 hover:shadow-2xl')
      nav#menu
        ul
      #yadoms-icon
        a.text-primaryColor(
          href='https://yadoms.com',
          target='_blank',
          rel='noopener noreferrer'
        )
          span.icon
            img(src='/img/icon.png')
          span.word Yadoms.com

    include ../pug/inc/header

    main
      #cards.clearfix 
        block main

    include ../pug/inc/footer
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {};
  }
});
</script>
