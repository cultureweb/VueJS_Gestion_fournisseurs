<template>
  <div>
    <h3>{{ title }}</h3>

    <select v-model="selected">


  <option>Stock Disponible</option>
  <option>Aucun Stock Disponible</option>
  <option>Tous</option>
</select>

<span>Sélectionné : {{ selected }}</span>
     
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
import { mapState } from 'vuex'
import { format } from 'timeago.js'


export default {
  name: 'SuppliersList',
  data(){
    return{
      title: 'List des fournisseurs',
      error: false,
      selected: ''
    }
      },
  components: {
    Supplier
  },
 computed: {
   ...mapState(['suppliers']),
  },
//    filteredByState() {
//      if (this.selected == 'Stock Disponible'){ 
//             //  if(this.suppliers.status){
//  return this.selected ='toto';
//              }

//         }
  // },
  mounted() {
    this.$store.dispatch('LOAD_SUPPLIERS_LIST')
  
  },
  methods:{
    formatDate(date){
       return format(date)
    }
  }
}
</script>
