<template>
  <div id="app">
    <page-header/>
    <router-view/>
    <page-footer/>
  </div>
</template>

<script>
import PageHeader from './components/page-header'
import PageFooter from './components/page-footer'
export default {
  name: 'app',
  components: {
    PageHeader,
    PageFooter
  }
}
</script>
