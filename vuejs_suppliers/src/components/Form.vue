<template>
  <form>
      <!-- <button type="button" @click="logRouter" >test</button> -->
    <fieldset class="form-group">
      <label for="formGroupExampleInput">Nom du nouveau fournisseur</label>
      <input
        type="text"
        class="form-control w-50 mx-auto"
        id="formGroupExampleInput"
        v-model="newSuppliers.name"
        placeholder="Saisir ici le nom du nouveau fournisseur"
      >
      <div class="row">
        <div class="col-sm-10">
          <div class="form-check">
            <input class="form-check-input" type="radio" v-model="newSuppliers.status" value="true">
            <label class="form-check-label" for="gridRadios1">A du stock</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" v-model="newSuppliers.status" value="false">
            <label class="form-check-label" for="gridRadios2">Pas de stock</label>
          </div>
        </div>
      </div>
    </fieldset>

    <div class="form-group row">
      <div class="col-sm-10">
        <button type="button" @click="createNewSupplier" class="btn btn-success">Ajouter</button>
      </div>
    </div>
  </form>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      newSuppliers: 
        {
          name: "",
          status: true,
          checkedAt: new Date()
        }
      
    };
  },
  methods: {

    //   logRouter(){//fonction pour tester le router
    //       console.log(this.$router)
    //   },
      
        createNewSupplier(){
              console.log('create')
              axios.post('https://api-suppliers.herokuapp.com/api/suppliers',  this.newSuppliers)
         .then((response) => {
            this.$router.push({ path: '/suppliers' });
    //console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
      } 
  }
};
</script>

<style>
</style>
