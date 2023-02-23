<template>
  <div class="container-fluid">
    <div class="row">
      <Navbar />
    </div>
    <div class="container text-align">
      <div class="d-flex justify-content-center mt-5">
        <h1>Konversi Rupiah ke Bitcoin</h1>
      </div>
      <div class="d-flex justify-content-center mt-1">
        <h5>Kurs 1 USD = 14.000 IDR</h5>
      </div>
      <div class="d-flex justify-content-center mt-2">
        <input type="number" />
      </div>
      <div class="d-flex justify-content-center mt-2">
        <h5>Rp 14000 = BTC 0.000001</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RpToBtc',
};
</script>

<style lang="scss" scoped></style>
