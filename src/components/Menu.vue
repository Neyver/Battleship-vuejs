<template>
   <div class="menu">
  	<h1>Settings</h1>
      <span class="label label-default">Number Column</span>
      <input type="text" class="imput" value="" id="column">
      <br>	
      <span class="label label-default">Number Row</span><br>	
      <input type="text" name="" value="" id="row">
      <br>	

      <button type="button" name="button" @click= RecoverData()>Create</button>
      <MenuContent/>
  </div>
</template>

<script>
	import {EventBus} from '@/services/event-bus';
	import MenuContent from '@/components/MenuContent.vue';
export default{	
	name: 'menu',
	components: {
        MenuContent    
  	},
	methods: {
		RecoverData() {
	        var numColumnas=parseInt(document.getElementById('column').value);
	        var numFilas=parseInt(document.getElementById('row').value);
	        console.log(numColumnas,numFilas);
	     	EventBus.$emit('send-values', numColumnas,numFilas);   
		}
	}
}	
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
