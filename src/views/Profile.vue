<template>
  <div class="Profile">
    <div class="head">
      <router-link to="/menu">
        <img src="../assets/arcon_logo.png" alt="arcon logo">
      </router-link>
      <img class="profile_pic" src="../assets/boy.jpg" alt="boy">
    </div>

    <div class="user">
      <h2>Name</h2>
      <h4>Buskens</h4>
      <h2>Prename</h2>
      <h4>Paulien</h4>
      <h2>Email</h2>
      <h4>Paulien.buskens@student.kdg.be</h4>
      <h2>Console ID</h2>
      <h4>243825</h4>
    </div>

    <div class="button">
      <router-link to="/edit">
        <img src="../assets/button_edit_profile.png" alt="button edit profile">
      </router-link>
    </div>
  </div>
</template>

<style lang="scss">
.button {
  margin-top: 20%;
}
</style>
