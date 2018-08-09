<template>
   <div class="menu">
  	<h1>Settings</h1>
      <span class="label label-default">Number Column</span>
      <input type="text" v-model.number = "cols" id="column">
      <br>	
      <span class="label label-default">Number Row</span><br>	
      <input type="text"  v-model.number = "rows" id="rowss">
      <br>	

      <button type="button" name="button" v-on:click = "recoverData">Create</button>
      <MenuContent/>
  </div>
</template>

<script>
  import {EventBus} from '@/services/event-bus';
  import MenuContent from '@/components/MenuContent.vue';
  import NewGame from '@/services/NewGame';
  export default{
  name: 'menu',
  components: {
  MenuContent
  },
  data() {
  return {
  cols: '',
  rows: ''
  }
  },
  methods: {
  recoverData() {
  EventBus.$emit('size-change', {
  cols:this.cols, rows:this.rows
  });
  NewGame.create({cols, rows})
  }
  }
  };
</script>

<style>
.menu {
	height: 100%;
	width: 30%;
	float: right;
	background: #006F0C;
}

input {
	margin: 10px;
}

</style>
