/**
 * Redirect user to home page if type not includes in enum categories
 */
import { categories } from '@/enums/categories'

export default ({ redirect, params }: any) => {
    if (!Object.values(categories).includes(params.category)) {
        redirect({ name: 'Home' })
    }
}
