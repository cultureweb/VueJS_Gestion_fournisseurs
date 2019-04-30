<template>
  <div>
    <h3>{{ title }}</h3>
  <ul>
    <div v-if="error">
      <p class="text-warning" >Erreur, Vous ne pouvez actuellement pas consulter la liste des fournisseurs</p>
    </div>
   <div v-else v-for="supplier in suppliers" :key="supplier.id">
   <Supplier 
   :name="supplier.name" 
   :status="supplier.status" 
   :checkedAt="formatDate(supplier.checkedAt).toLocaleString()"    
   >
   </supplier>

   </div>
  </ul>
  </div>
</template>

<script>
import Supplier from './Supplier.vue'
import { format, render, cancel, register } from 'timeago.js'
import axios from 'axios'
export default {
  components: {
Supplier
  },
  name: 'SuppliersList',
  data(){
    return {
 suppliers: [], // au début la liste des fournisseurs est vide
      loading: false,
      error: null,
      title:'Liste des fournisseurs',
     
    }
  },
   mounted () {
    axios
      .get('https://api-suppliers.herokuapp.com/api/suppliers')
     .then(response => {
        this.suppliers = response.data
      })
      .catch(error => {
        console.log(error)
        this.error = true
      })
      .finally(() => this.loading = false)
  
     
  },
  methods:{
    formatDate(date){
       return format(date)
    }
  }
}
</script>
