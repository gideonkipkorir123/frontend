import { useEffect } from 'react'
import {useGeneralStore} from '../../stores/GeneralStore'
import { useUserStore } from '../../stores/userStore'
const ProtectedRoutes = ({ children }: { children: React.ReactNode }) => {
  const userId = useUserStore((state) => state.id)
  const toggleLoginModal = useGeneralStore((state) => state.toggleLoginModal)

  useEffect(() => {
    if (!userId) {
      toggleLoginModal()
    }
  }, [toggleLoginModal, userId])
  if (userId) {
    return children
  }
  return <>Protected Rendered</>
}

export default ProtectedRoutes