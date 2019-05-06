<template>
  <div>
    <h3>{{ title }}</h3>
    <gmap-map
      :center="{lat:currentLocation.lat, lng:currentLocation.lng}"
      :options="{  
   mapTypeControl: true,
   scaleControl: false,
   streetViewControl: false,
   rotateControl: false,
   fullscreenControl: true,
   disableDefaultUi: false
 }"
      :zoom="17"
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
  computed: {
...mapState(["suppliers"]),
  }, 
  
  data() {
    return {
       currentLocation: {
            lat: 0,
            lng: 0
        },
      title: "Carte des fournisseurs",
      error: false
    };
  },
  mounted() {
    this.$store.dispatch("LOAD_SUPPLIERS_LIST");
    this.geolocation();
  },
  methods:{
     geolocation : function() {
      navigator.geolocation.getCurrentPosition((position) => {
        this.currentLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }
};
</script>