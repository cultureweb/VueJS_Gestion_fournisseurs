import SuppliersList from '../components/SuppliersList.vue'
import SuppliersMap from '../components/SuppliersMap.vue'
import Supplier from '../components/Supplier.vue'
import AddSupplier from '../components/AddSupplier.vue'
import UpdateSupplier from '../components/UpdateSupplier.vue'


 

const routes = [
  { path: '/suppliers', component: SuppliersList },
  { path: '/map', component: SuppliersMap },
  { path: '/supplier', component: Supplier },
  { path: '/addsupplier', component: AddSupplier },
  { path: '/updsupllier/:id', component: UpdateSupplier, name: 'updsupllier', props: true},
 


]

export default routes;