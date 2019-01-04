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

<script>
import axios from 'axios'

export default {
  data() {
    return {
      friends: [],
    }
  },
  async mounted() {
    const baseUrl = 'https://arcon.mats.vingerhoets.mtantwerp.eu/api'
    const urls = {
      friends: `${baseUrl}/friends/1`,
      login: `${baseUrl}/login`,
    }
    const userdata = {
      email: 'mats@gmail.com',
      password: 'secret',
      console_id: 'abc123',
    }

    // LOGIN
    try {
      const user = await axios.post(urls.login, {
        email: userdata.email,
        password: userdata.password,
        console_id: userdata.console_id,
      })
      const accessToken = user.data.data.access_token

      // GET FRIENDS
      try {
        const friends = await axios.get(urls.friends, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        })
        console.log(friends)

      // GET FRIENDS FAILED
      } catch (error) {
        console.log(error)
      }
    // LOGIN FAILED
    } catch (error) {
      console.log(error)
    }
  }
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
