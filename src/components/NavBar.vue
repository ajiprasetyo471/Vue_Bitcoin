<template>
  <nav class="px-5 navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
          <!-- <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> -->
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/btc-to-rp">BTC To Rp</router-link>
          <!-- <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> -->
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/rp-to-btc">Rp To BTC</router-link>
          <!-- <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> -->
        </li>
        <!-- <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li> -->
      </ul>
    </div>
  </nav>

  <!-- <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
  </div> -->
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style lang="scss" scoped></style>
