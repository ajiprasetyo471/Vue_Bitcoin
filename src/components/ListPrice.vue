<template>
  <h1 class="text-center mt-5" style="font-weight: 600">
    Harga Bitcoin Hari Ini
  </h1>
  <div class="container-fluid w-50 mt-4">
    <table class="table table-bordered" style="border: 1px solid black">
      <thead>
        <tr>
          <th scope="col">Mata Uang</th>
          <th scope="col">Harga Beli Bitcoin</th>
          <th scope="col">Harga Jual Bitcoin</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td>{{ getCurrency(item.symbol) }}</td>
          <td>{{ item.buy }}</td>
          <td>{{ item.sell }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ListPrice',
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    this.getListPrice();
  },
  methods: {
    async getListPrice() {
      axios
        .get('https://blockchain.info/ticker')
        .then((response) => {
          const data = response.data;
          this.items = [data.ARS, data.EUR, data.GBP, data.JPY, data.USD];
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getCurrency(symbol) {
      if (symbol === 'ARS') {
        return 'Dollar Australia';
      } else if (symbol === 'EUR') {
        return 'Euro Eropa';
      } else if (symbol === 'GBP') {
        return 'Poundsterling Inggris';
      } else if (symbol === 'JPY') {
        return 'Yen Jepang';
      } else if (symbol === 'USD') {
        return 'Dollar Amerika';
      } else {
        return '';
      }
    },
  },
};
</script>
