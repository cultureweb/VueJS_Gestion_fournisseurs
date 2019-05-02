<template>
  <div>
    <h3>{{ title }}</h3>
    <gmap-map
      :center="{lat:43.611092, lng:-96.251176}"
      :options="{  
   mapTypeControl: true,
   scaleControl: false,
   streetViewControl: false,
   rotateControl: false,
   fullscreenControl: true,
   disableDefaultUi: false
 }"
      :zoom="1"
      style="width: 100%; height: 300px; margin: auto"
    >
      <GmapMarker
        ref="myMarker"
        v-for="supplier in suppliers"
        :key="supplier.id"
        :position="{lat: parseFloat(supplier.latitude), lng: parseFloat(supplier.longitude)}"
      />
    </gmap-map>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "SuppliersMap",
  computed: mapState(["suppliers"]),
  data() {
    return {
      title: "Carte des fournisseurs",
      error: false
    };
  },
  mounted: function() {
    this.$store.dispatch("LOAD_SUPPLIERS_LIST");
  }
};
</script>