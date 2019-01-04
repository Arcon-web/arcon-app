<template>
  <div class="Friends">
    <div class="head">
      <router-link to="/menu">
        <img src="../assets/arcon_logo.png" alt="arcon logo">
      </router-link>
      
        <img class="profile_pic" src="../assets/boy.jpg" alt="boy">
      
    </div>
    <div class="friends">
      <div class="friend">
        <img src="../assets/homer.jpg" alt="friend">
        <h2>Homer</h2>
      </div>
      <div class="friend">
        <img src="../assets/duck.jpg" alt="friend">
        <h2>Duck</h2>
      </div>
      <div class="friend">
        <img src="../assets/dino.png" alt="friend">
        <h2>Dino</h2>
      </div>
      <div class="friend">
        <img src="../assets/felix.png" alt="friend">
        <h2>Cat</h2>
      </div>
      <div class="friend">
        <img src="../assets/Jerry.jpg" alt="friend">
        <h2>Jerry</h2>
      </div>
      <div class="friend">
        <img src="../assets/Blossom.jpg" alt="friend">
        <h2>Blossom</h2>
      </div>
    </div>

    <div class="button">
      <img src="../assets/button_add_friend.png" alt="button add friend">
    </div>
  </div>
</template>

<style lang="scss">
.friends {
  .friend {
    display: inline;
    h2 {
      width: 26%;
      display: inline;
    }
    img {
      border-radius: 100%;
      display: inline-block;
      width: 26%;
      margin-right: 4%;
      margin-bottom: 4%;
      max-height: 135px;
    }
  }
}

.button {
  margin-top: 20%;
}
</style>
