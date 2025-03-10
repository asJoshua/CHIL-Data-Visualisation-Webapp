import React, { PropsWithChildren } from 'react';
import { useAuth } from '../auth/authenticationProvider';
import { jwtDecode } from 'jwt-decode';
import { CustomJWTPayload } from '../auth/protectedRoute';
import { PublicLayout } from './public-layout';
import { AdminLayout } from './admin-layout';
import { CollaboratorLayout } from './collaborator-layout';
export type LayoutProps = PropsWithChildren & {
    className?: string
}

const VariableLayout = ({
    className,
    children
}: LayoutProps): React.JSX.Element => {

    const { token } = useAuth();

    if (!token){
        // Unauthenticated
        return (
            <PublicLayout
                className={className}
                children={children}
            />
        )
    }

    const groups = jwtDecode<CustomJWTPayload>(token)["groups"];

    switch(groups[0]){
        case("admin"):
            return (
                <AdminLayout
                    className={className}
                    children={children}
                />
            )
        case("collaborator"):
            return (
                <CollaboratorLayout
                    className={className}
                    children={children}
                />
            )
        default:
            console.warn("Group not found: ", groups[0])
            // Should return a 404 or something
            return (
                <>
                </>
            )
    }
}

export { VariableLayout }