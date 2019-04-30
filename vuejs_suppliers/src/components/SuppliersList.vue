<template>
  <div>
    <h3>{{ title }}</h3>
  <ul>
    <!-- <Supplier ></Supplier> -->
   <div v-for="supplier in suppliers" :key="supplier.id">
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
import { format, render, cancel, register } from 'timeago.js';
export default {
  components: {
Supplier
  },
  name: 'SuppliersList',
  data(){
    return {

      title:'Liste des fournisseurs',
      suppliers:[
        {
          id: 1,
          name: 'Fournisseur MEGASTAR',
          status: true, // est ce qu'il y a du stock
          checkedAt: new Date()
        },
        {
          id: 2,
          name: 'Fournisseur SMITH\'S',
          status: false,
          checkedAt: new Date()
        }
      ]
    }
  },
  methods:{
    formatDate(date){
       return format(date)
    }
  }
}
</script>
