/**
 * Redirect user to home page if type not includes in enum searchTypes
 */
import { searchStatus } from '@/enums/searchTypes'

export default ({ redirect, params }: any) => {
    if (!Object.values(searchStatus).includes(params.type)) {
        redirect({ name: 'Home' })
    }
}
