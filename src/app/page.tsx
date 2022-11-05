import Link from 'next/link'
import { getLINEAuthURL } from '../utils/line'

const Page = () => {
  getLINEAuthURL('')

  return (
    <div>
      <Link href={``}>Login with LINE</Link>
    </div>
  )
}

export default Page
