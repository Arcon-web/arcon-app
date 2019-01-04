<template>
  <div class="Profile">
    <div class="head">
      <router-link to="/menu">
        <img src="../assets/arcon_logo.png" alt="arcon logo">
      </router-link>
      <img class="profile_pic" src="../assets/boy.jpg" alt="boy">
    </div>

    <div class="user">
        <h1>Homer</h1>
        <h2>Times played</h2>
        <h4>8</h4>
        <h2>Wins</h2>
        <h4>5</h4>
        <h2>Losses</h2>
        <h4>3</h4>
        <h2>Last played</h2>
        <h4>04/01/2019</h4>

    </div>

    <div class="button">
      <img src="../assets/button_challenge.png" alt="button challenge">
    </div>
  </div>
</template>

<style lang="scss">
.button {
  margin-top: 15%;
}
</style>
