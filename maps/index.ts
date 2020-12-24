import { Company } from './src/Company';
import { User } from './src/User';
import { CustomMap } from './src/CustomMap';

const user = new User();
const company = new Company();
const customMap = new CustomMap('.map');

customMap.addMarker(user);
customMap.addMarker(company);
