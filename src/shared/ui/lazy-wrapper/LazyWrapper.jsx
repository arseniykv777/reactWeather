import { Suspense } from 'react'
import { Fallback} from "@/shared/ui/index.js";

const LazyWrapper = ({ children }) => (
  <Suspense fallback={<Fallback />}>
    {children}
  </Suspense>
)

export default LazyWrapper;