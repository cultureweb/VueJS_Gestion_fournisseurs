import SuppliersList from '../components/SuppliersList.vue'
import SuppliersMap from '../components/SuppliersMap.vue'
import Supplier from '../components/Supplier.vue'
import Form from '../components/Form.vue'


 

const routes = [
  { path: '/suppliers', component: SuppliersList },
  { path: '/map', component: SuppliersMap },
  { path: '/supplier', component: Supplier },
  { path: '/form', component: Form }


]

export default routes;