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
</gmap-map>
<!-- <GmapMap
 :options="{
   zoomControl: true,
   mapTypeControl: false,
   scaleControl: false,
   streetViewControl: false,
   rotateControl: false,
   fullscreenControl: true,
   disableDefaultUi: false
 }"
>
</GmapMap> -->
  </div>
</template>

<script>
export default {
  name: 'SuppliersMap',
  data(){
    return {
      title: "Carte des fournisseurs"
    }
  } 
}
</script>