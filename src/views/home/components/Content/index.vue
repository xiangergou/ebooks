<template>
  <component v-bind:is="component"></component>
</template>

<script>
import bookList from './components/bookList'
import paperList from './components/paperList'
import Bus from '@/utils/bus'

export default {
  name: 'homeContent',
  components: {
    paperList,
    bookList
  },
  props: {
  },
  data () {
    return {
      component: 'paperList'
    }
  },
  computed: {
  },
  created () {
    Bus.$on('typeChage', (val) => { // 取  Bus.$on
      this.component = 'bookList'
    })
  },
  methods: {
  }
}
</script>
