<template>
  <div class="container-fluid">
    <div class="container text-align">
      <h1 class="text-center mt-5" style="font-weight: 600">
        Konversi Rupiah ke Bitcoin
      </h1>
      <p class="text-center mt-1 fw-bold">Kurs 1 USD = 14.000 IDR</p>
      <div class="d-flex justify-content-center mt-5">
        <input
          type="number"
          v-model="inputRp"
          @input="convertRpToBtc(inputRp)"
          class="w-75 py-2 px-1"
        />
      </div>
      <h1 class="text-center mt-3" style="font-weight: 600">
        Rp {{ inputRp }} = BTC {{ resultBtc }}
      </h1>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'RpToBtc',
  data() {
    return {
      inputRp: 0,
      resultBtc: 0,
    };
  },
  methods: {
    async convertRpToBtc(inputNumber) {
      let valUsd = inputNumber / 14000;
      axios
        .get(`https://blockchain.info/tobtc?currency=USD&value=${valUsd}`)
        .then((response) => {
          this.resultBtc = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
