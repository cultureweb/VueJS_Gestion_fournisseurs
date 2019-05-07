<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <ul class="form-group">
      <li>
        <router-link to="/suppliers" class="btn btn-success">Consulter la liste des fournisseurs</router-link>
      </li>
      <li>
        <router-link to="/map" class="btn btn-success mr-1">Voir la carte</router-link>
      </li>
       
    </ul >
    <ul>
    <li class="">
        <router-link to="/addsupplier" class="btn btn-success mr-1">Ajouter un nouveau fournisseur</router-link>
      </li>
    </ul>
  </div>
</template>
<script>

export default {
  name: "HomePage",
  data() {
    return {
      title: "Que voulez vous faire ?"
    };
  },

  methods: {
    onSuppliersListClick: function() {
      window.alert("vous avez cliquer sur la liste des fournisseurs");
    },
    onMapClick: function() {
      window.alert("vous avez cliquer sur la carte");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #fff;
}
</style>
