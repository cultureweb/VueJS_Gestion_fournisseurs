<template>
  
  <form>
   
      <!-- <button type="button" @click="logRouter" >test</button> -->
    <fieldset class="form-group">
      <label for="formGroupExampleInput">Nom du nouveau fournisseur</label>
      <input
        type="text"
        class="form-control w-50 mx-auto"
        id="formGroupExampleInput"
        v-model="supplierUpdated.name"
        placeholder="Modifier ici le nom du nouveau fournisseur"
      >
      <p class="mt-4">Coordonnées GPS du fournisseur</p>
       <label for="formGroupExampleInput">Latitude</label>
      <input
        type="text"
        class="form-control w-50 mx-auto"
        id="formGroupExampleInput"
        v-model="supplierUpdated.latitude"
        placeholder="Modifier ici la latitude"
      >
             <label for="formGroupExampleInput">Longitude</label>
      <input
        type="text"
        class="form-control w-50 mx-auto"
        id="formGroupExampleInput"
        v-model="supplierUpdated.longitude"
        placeholder="Modifier ici la longitude"
      >
      <div class="row">
        <div class="col-sm-10">
          <div class="form-check">
            <input class="form-check-input" type="radio" v-model="supplierUpdated.status" value="true">
            <label class="form-check-label" for="gridRadios1">A du stock</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" v-model="supplierUpdated.status" value="false">
            <label class="form-check-label" for="gridRadios2">Pas de stock</label>
          </div>
        </div>
      </div>
    </fieldset>

    <div class="form-group row">
      <div class="col-sm-10">
        <button type="button" @click="updateSupplier" class="btn btn-success">Ajouter</button>
      </div>
    </div>
  </form>
</template>

<script>
import axios from 'axios';
export default {
  name: 'UpdateSupplier',
  props:{
    id: String
  },
  data() {
    return {
       
      error: null,
      loading: false,
      errors: [],
      supplierLoaded: [],
      supplierUpdated: []
    };
  },
 mounted() {
    axios
      .get("https://api-suppliers.herokuapp.com/api/suppliers/" + this.id)
      .then(response => {
        window.console.log(response.data);
       // window.console.log(response);

        let { name, checkedAt, status, latitude, longitude } = response.data;
        this.supplierLoaded = {
          name: name,
          checkedAt: Date.parse(checkedAt),
          status: status,
          latitude: latitude,
          longitude: longitude
        };
        this.supplierUpdated = {
          name: name,
          checkedAt: Date.parse(checkedAt),
          status: status,
          latitude: latitude,
          longitude: longitude
        };
        
      })
      .catch(error => {
        window.console.log(error);
      });
  
    
},
  methods: {
     updateSupplier: function(supplier) {
      axios
        .put(
          "https://api-suppliers.herokuapp.com/api/suppliers/" + this.id,
          supplier
        )
        .then(() => {
          this.$store.dispatch('LOAD_SUPPLIERS_LIST');
          this.$router.push("/suppliers");
        })
        .catch(error => {
          window.console.log(error);
        });
    }
  }
}
</script>

<style>
</style>
