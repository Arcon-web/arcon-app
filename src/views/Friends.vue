<template>
  <div class="Friends">
    <div class="head">
      <router-link to="/menu">
        <img src="../assets/arcon_logo.png" alt="arcon logo">
      </router-link>

      <img class="profile_pic" src="../assets/boy.jpg" alt="boy">
    </div>
    <div class="friends">
      <Friend name="homer" ext="jpg" class="friend"/>
      <Friend name="duck" ext="jpg" class="friend"/>
      <Friend name="dino" ext="png" class="friend"/>
      <Friend name="jerry" ext="jpg" class="friend"/>
      <Friend name="blossom" ext="jpg" class="friend"/>
      <Friend name="felix" ext="png" class="friend"/>
    </div>

    <div class="button">
      <router-link to="/add">
        <img src="../assets/button_add_friend.png" alt="button add friend">
      </router-link>
    </div>
  </div>
</template>

<script>
import Friend from '@/components/Friend'

export default {
  components: {
      Friend,
  },
}
</script>


<style lang="scss">
.friends {
  .friend {
    display: inline-block;
    width: 26%;
    h2 {
      width: 26%;
      margin-left: 20%;
    }
    img {
      border-radius: 100%;
      display: inline-block;
      width: 90%;
      margin-right: 4%;
      margin-bottom: 4%;
      max-height: 90px;
    }
  }
}

.button {
  margin-top: 20%;
}
</style>
