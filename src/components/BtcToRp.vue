<template>
  <div class="container-fluid">
    <div class="container text-align">
      <h1 class="text-center mt-5" style="font-weight: 600">
        Konversi Bitcoin ke Rupiah
      </h1>
      <p class="text-center mt-1 fw-bold">Kurs 1 USD = 14.000 IDR</p>
      <div class="d-flex justify-content-center mt-5">
        <input
          type="number"
          v-model="inputBtc"
          @input="convertBtcToRp(inputBtc)"
          class="w-75 py-2 px-1"
        />
      </div>
      <h1 class="text-center mt-3" style="font-weight: 600">
        BTC {{ inputBtc }} = Rp {{ resultRp }}
      </h1>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'BtcToRp',
  data() {
    return {
      inputBtc: 0,
      resultRp: 0,
    };
  },
  methods: {
    async convertBtcToRp(inputNumber) {
      axios
        .get(`https://blockchain.info/tobtc?currency=USD&value=1`)
        .then((response) => {
          let usdToBtc = response.data;
          this.resultRp = (inputNumber * 14000) / usdToBtc;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
