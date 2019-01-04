<template>
  <div class="Friends">
    <div class="head">
      <router-link to="/menu">
        <img src="../assets/arcon_logo.png" alt="arcon logo">
      </router-link>

      <img class="profile_pic" src="../assets/boy.jpg" alt="boy">
    </div>
    <div class="friends">
      <Friend
        v-for="friend in friends"
        :key="friend.id"
        :name="friend.name"
        :ext="friend.ext"
        class="friend"
      />
    </div>

    <div class="button">
      <router-link to="/add">
        <img src="../assets/button_add_friend.png" alt="button add friend">
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Friend from '@/components/Friend'

export default {
  data() {
    return {
            friends: [
        {
          id: 1,
          name: 'homer',
          ext: 'jpg',
        },
        {
          id: 2,
          name: 'dino',
          ext: 'png',
        },
        {
          id: 3,
          name: 'duck',
          ext: 'jpg',
        },
        {
          id: 4,
          name: 'blossom',
          ext: 'jpg',
        },
        {
          id: 5,
          name: 'felix',
          ext: 'png',
        },
        {
          id: 6,
          name: 'jerry',
          ext: 'jpg',
        },
      ],
    }
  },
  
  components: {
      Friend,
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
