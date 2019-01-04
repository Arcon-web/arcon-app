<template>
  <div class="Add">
    <div class="head">
      <router-link to="/menu">
        <img src="../assets/arcon_logo.png" alt="arcon logo">
      </router-link>
      <img class="profile_pic" src="../assets/boy.jpg" alt="boy">
    </div>

    <div class="user">
      <h2>Name</h2>
      <img src="../assets/inputField.png" alt="input field">
      <h2>Console ID</h2>
      <img src="../assets/inputField.png" alt="input field">
    </div>

    <div class="button">
      <router-link to="/friends">
        <img src="../assets/button_invite.png" alt="button invite">
      </router-link>
    </div>
  </div>
</template>

<style lang="scss">
.button {
  margin-top: 20%;
}
</style>
