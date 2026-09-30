import { detailRoute } from '@/lib/routes'

const r = detailRoute('compare')
export const dynamicParams = false
export const generateStaticParams = r.generateStaticParams
export const generateMetadata = r.generateMetadata
export default r.Page
