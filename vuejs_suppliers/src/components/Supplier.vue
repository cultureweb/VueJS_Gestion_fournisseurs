<template>
  <div class="card w-50 mx-auto mt-3">
    <h1 class="card-header bg-success text-white">
      {{ name }}
      <i @click="deleteSupplier(id)" class="fas fa-trash-alt fa-1x"></i>
    </h1>

    <h3 class="card-body my-3">
      <small>A du stock ?</small>
      <h3 :class="{'text-success': status, 'text-danger': !status}">{{ status ? ' OUI' : ' NON' }}</h3>
    </h3>
    <h5 class="card-footer m-0">Date du dernier relevé des stocks : {{ checkedAt }}</h5>
  </div>
</template>

<script>
import axios from 'axios'
export default {
     props:{
         name: String,
         checkedAt: String,
         status: Boolean,
         id: String
     },
     methods: {
    deleteSupplier(id){
        //  console.log('https://api-suppliers.herokuapp.com/api/suppliers/' +  id);
          axios.delete('https://api-suppliers.herokuapp.com/api/suppliers/' +  id)
      .then((response) => {
        this.$store.dispatch('LOAD_SUPPLIERS_LIST')
    //console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
      } 
  }
}

</script>

<style scoped>
i {
  position: absolute;
  top: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}
</style> 