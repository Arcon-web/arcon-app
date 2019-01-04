<template>
  <div class="Menu">
    <div class="head">
      <img src="../assets/arcon_logo.png" alt="arcon logo">
       <img class="profile_pic" src="../assets/boy.jpg" alt="boy">
    </div>

    <div class="buttons">
      <router-link to="/friends">
        <img src="../assets/button_friends.png" alt="friends button">
      </router-link>
      <router-link to="/profile">
        <img src="../assets/button_profile.png" alt="profile button">
      </router-link>
    </div>
  </div>
</template>

<style lang="scss">
.buttons {
  img {
    margin-bottom: 10%;
  }
  width: 70%;
  margin:auto;
}
</style>
