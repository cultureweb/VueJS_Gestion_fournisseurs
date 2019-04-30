<template>
 <div class="card w-50 mx-auto mt-3">
    <h1 class="card-header bg-success text-white">{{ name }}</h1>
    <h3 class="card-body my-3">
      <small>A du stock ?</small>
      <h3 :class="{'text-success': status, 'text-danger': !status}">{{ status ? ' OUI' : ' NON' }}</h3>
    </h3>
    <h5 class="card-footer m-0">Date du dernier relevé des stocks : {{ checkedAt }}</h5>
  </div>
</template>

<script>
export default {
     props:{
         name: String,
         checkedAt: String,
         status: Boolean,
         id: Number
     },

 
}
</script>
