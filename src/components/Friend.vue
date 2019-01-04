<template>
  <div>
    <router-link :to="`/${name}`">
      <img :src="getImagePath(name, ext)" :alt="name">
    </router-link>
    <h2 class="friend--name">{{ name }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Friend',
  props: {
      name: String,
      ext: String,
  },
  methods: {
    getImagePath (name, ext) {
        return name ? require(`../assets/${name}.${ext}`) : ''
    }
  }
}
</script>

<style lang="scss">
.friend--name {
  text-transform: capitalize;
}
</style>

