import { react2angular } from 'react2angular'
import { DealItem } from '../../../nextjs-app/src/app/ui-components/deal-item.jsx'
export let DealItemAngular = react2angular(DealItem, ['name', 'price'])