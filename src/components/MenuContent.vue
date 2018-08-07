<template>
   <div class="menuContent">
      <hr>
      <input type="text" class="imput" value="" id="column">
      <br>
      <button type="button" name="button">JOIN</button>
  </div>
</template>

<script>
	import {EventBus} from '@/services/event-bus';
export default{	
	name: 'menuContent',
}	
</script>

<style>

input {
	margin: 10px;
}

button {
	width: 100px;
	height: 30px;
	background: #00500C;
	cursor: pointer;	
}
</style>
