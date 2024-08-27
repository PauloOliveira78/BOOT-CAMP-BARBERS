import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

const AuthProvider = ({ children }: {Children: ReactNode }) => {
    return <SessionProvider>{children}</SessionProvider>
    
}
 
export default AuthProvider;