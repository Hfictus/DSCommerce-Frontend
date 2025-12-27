
import { Navigate } from 'react-router-dom';
import * as authService from '../../services/auth-service';
import type { JSX } from 'react';
import type { RolesEnum } from '../../models/auth';

type Props = {
    children: JSX.Element;
    roles?: RolesEnum[];
}

export function PrivateRoute({ children, roles = [] }: Props) {
    if(!authService.isAuthenticated()) {
        return <Navigate to="/login" />;
    }
    if(!authService.hasAnyRoles(roles)) {
        return <Navigate to="/catalog" />
    }
    return children;

}