import SuppliersList from '../components/SuppliersList.vue'
import SuppliersMap from '../components/SuppliersMap.vue'
import Supplier from '../components/Supplier.vue'

 

const routes = [
  { path: '/suppliers', component: SuppliersList },
  { path: '/map', component: SuppliersMap },
  { path: '/supplier', component: Supplier }

]

export default routes;