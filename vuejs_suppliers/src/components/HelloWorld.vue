<template>
  <div class="hello">
    <h1>{{ title }}</h1>
   
 
    <ul>
      <li  @click="onSuppliersListClick" class="btn btn-success" ><a >consulter la liste des fournisseurs</a></li>
      <li @click="onMapClick" class="btn btn-success" ><a >afficher la carte</a></li>
    </ul>
 
   
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    title: String
  },
  methods: {
    onSuppliersListClick: function() {
      window.alert("vous avez cliquer sur la liste des fournisseurs");
    },
    onMapClick: function() {
      window.alert("vous avez cliquer sur la carte");
    }
  }
}
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
