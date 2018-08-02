<template>
    <div class="table">
      <h1>Map</h1>
      <div id="table-battle"></div>
    </div>
</template>

<script>
import {EventBus} from '@/services/event-bus';
export default {
  name: 'Battleship',
  methods: {
    createTable() {
    let tableBattle = document.getElementById('table-battle');
        let codigoHTML='<table class = "table-result" border=\'1\'><tbody>';
        for (let i = 0; i < this.row; i++) {
          codigoHTML+='<tr>';
          for (let j = 0; j < this.col; j++) {
            codigoHTML+='<td>'+'--'+'</td>';
          }
          codigoHTML+='</tr>';
        }
        codigoHTML+='</tbody></table>';
        tableBattle.innerHTML = codigoHTML;
    }
  },
  data() {
    return {
      col: '',
      row: ''
    }
  },
  mounted() {
    EventBus.$on('send-values', (col,row) => {
      this.col = col,
      this.row = row,
      this.createTable();
    })
  }
};
</script>

<style>
.table-result {
  width: 95%;
  height: 30%;
}

.table {
  font-family: arial, sans-serif;
  height: 100%;
  width: 70%;
  float: left;
  margin: 0 auto;

}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
  height: 40%;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>

