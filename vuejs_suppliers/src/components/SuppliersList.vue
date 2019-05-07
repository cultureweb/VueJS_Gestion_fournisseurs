<template>
  <div>
    <h3>{{ title }}</h3>
<div class="form-group">
  <label for="sel1">Selectionnez ... </label>
  <select v-model="selected" >
    <option value="withStock">Stock Disponible</option>
    <option value="withoutStock">Aucun Stock Disponible</option>
    <option value="all">Tous</option>
  </select>


</div>
<!-- déselectionner le commentaire ci-dessous pour voir la valeur de selected qui n'est autre que value  -->
<!-- <span>Sélectionné : {{ selected }}</span>  -->
     
  <ul>
    <div v-if="error">
      <p class="text-warning" >Erreur, Vous ne pouvez actuellement pas consulter la liste des fournisseurs</p>
    </div>
  

   <div v-else v-for="supplier in filteredDatas" :key="supplier.id">
   <Supplier 
   :name="supplier.name" 
   :status="supplier.status" 
   :checkedAt="formatDate(supplier.checkedAt).toLocaleString()" 
   :id="supplier.id"   
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
   filteredDatas: function() {
    if (this.selected === 'withoutStock') {
      //console.log(this.suppliers);
    return this.suppliers.filter(supllier => !supllier.status)
      
   }
   else if (this.selected === 'withStock') { 
    return this.suppliers.filter(supllier => supllier.status)
       }
   
   else {
     
     return this.suppliers;
   }
}
  },
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