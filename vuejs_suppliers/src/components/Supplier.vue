<template>
  <div class="card mx-auto mt-3">
    <h1 class="card-header bg-success text-white">
      {{ name }}
      <i @click="showModal(id)" class="fas fa-trash-alt fa-1x"></i>
      <!-- <router-link to="/updsupllier/{{id}}"  class="button is-primary upd ml-3">Modifier</router-link> -->
      <router-link class="button is-primary upd ml-3" :to="{ name: 'updsupllier', params: { id: id}}">Modifier</router-link>

       
     
    </h1>
    <div class="modal" :class="{'is-active' : activeModal}">
  <div class="modal-background"></div>
  <div class="modal-content">
    <!-- Any other Bulma elements you want -->
    <div class="box">
    <div class="row">

    <p>Êtes-vous certain de vouloir supprimer le fournisseur <strong>{{ name }}</strong>  ?</p>
    <a @click="deleteSupplier(id)" class="button is-primary text-white ml-2 mr-3">Confirmer</a>
    <a @click="activeModal = false" class="button is-danger text-white">Annuler</a>


    </div>
    </div>
  </div>
   </div>

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
  data(){
    return{
 activeModal: false
    }
  },
     props:{
         name: String,
         checkedAt: String,
         status: Boolean,
         id: String,
     },
     methods: {
    showModal: function(id) {
         this.activeModal = true     
      },
      deleteSupplier: function(id){
            axios.delete('https://api-suppliers.herokuapp.com/api/suppliers/' +  id)
      .then((response) => {
        this.$store.dispatch('LOAD_SUPPLIERS_LIST')
  })
  .catch(function (error) {
   
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
.upd{
position: absolute;
   top: 4px; 
  right: 30px;
  color: #fff;
  cursor: pointer;
}
</style> 