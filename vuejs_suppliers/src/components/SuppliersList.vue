<template>
  <div>
    <h3>{{ title }}</h3>
  <ul>
    <!-- <Supplier ></Supplier> -->
   <div v-for="supplier in suppliers" :key="supplier.id">
   <Supplier 
   v-bind:name="supplier.name" 
   v-bind:status="supplier.status" 
   v-bind:checkedAt="supplier.checkedAt"
   >
   </supplier>

   </div>
  </ul>
  </div>
</template>

<script>
import Supplier from './Supplier.vue'

export default {
  components: {
Supplier
  },
  name: 'SuppliersList',
  data(){
    return {

      title:"Liste des fournisseurs",
      suppliers:[
        {
          id: 1,
          name: 'Fournisseur MEGASTAR',
          status: false, // est ce qu'il y a du stock
          checkedAt: new Date().toLocaleString() // date de la dernière mise à jour du stock
        }
      ]
    }
  }
}
</script>
