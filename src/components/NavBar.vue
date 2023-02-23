<template>
  <nav class="px-5 navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand mx-5" to="/">Vue Bitcoin</router-link>
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
        <li class="nav-item mx-1">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item mx-1">
          <router-link class="nav-link" to="/rp-to-btc">Rp To BTC</router-link>
        </li>
        <li class="nav-item mx-1">
          <router-link class="nav-link" to="/btc-to-rp">BTC To Rp</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>
