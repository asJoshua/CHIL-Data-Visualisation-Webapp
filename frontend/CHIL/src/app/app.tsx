import { AppRouter } from '@/app/router'
import { AuthProvider } from '@/components/auth/authenticationProvider'

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}

export { App }
