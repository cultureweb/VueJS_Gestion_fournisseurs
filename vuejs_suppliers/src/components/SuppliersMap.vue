<template>
  <div>
   <h3>{{ title }}</h3>
   <gmap-map
  :center="{lat:37.435143, lng:141.042079}" 
  :options="{
   
   mapTypeControl: true,
   scaleControl: false,
   streetViewControl: false,
   rotateControl: false,
   fullscreenControl: true,
   disableDefaultUi: false
 }"

  :zoom="7"
  style="width: 100%; height: 800px; margin: auto"
>
  
   <GmapMarker ref="myMarker"
    v-for="supplier in suppliers" :key="supplier.id"

    :position="{lat: supplier.latitude, lng: supplier.longitude}" />
</gmap-map>


</div>


</template>

<script>
export default {
  name: 'SuppliersMap',
  data(){
    return {
      title: "Carte des fournisseurs",
      suppliers: [
  {
    id: 1,
    latitude: 37.426877,
    longitude: 141.014220
  },
  {
    id: 2,
    latitude: 37.593898, 
    longitude: 140.177730
  }
]
    }
  } 
}
</script>