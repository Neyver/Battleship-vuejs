<template>
    <div class="table">
      <div id="table-battles">
        <table id="table-battle">
          <tr v-for="row in rows">
            <td v-for="col in cols"></td>
          </tr>      
        </table>
      </div>
    </div>
</template>

<script>
  import {EventBus} from '@/services/event-bus';
export default {
  name: 'Battleship',
  methods: {
  },
  data() {
    return {
      cols: '',
      rows: ''
    }
  },
  mounted() {
    EventBus.$on('size-change', (data) => {
      console.log(data.rows);
      this.cols = data.cols,
      this.rows = data.rows
    })
  }
};
</script>

<style>
#table-battle {
  width: 95%;
}
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
  height: 18px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>

