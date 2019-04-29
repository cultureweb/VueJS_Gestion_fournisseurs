import SuppliersList from '../components/SuppliersList.vue'
import SuppliersMap from '../components/SuppliersMap.vue'

 

const routes = [
  { path: '/suppliers', component: SuppliersList },
  { path: '/map', component: SuppliersMap }
]

export default routes;