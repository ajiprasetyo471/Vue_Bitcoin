<template>
  <NavBar />
  <ListPrice />
</template>

<script>
import ListPrice from '@/components/ListPrice.vue';
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'HomeView',
  components: { NavBar, ListPrice },
};
</script>
