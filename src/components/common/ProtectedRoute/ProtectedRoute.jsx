import { HOME_PAGE_ROUTE } from 'constants/routes';
import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ token, redirect }) => {
	return token ? <Outlet /> : <Navigate to={redirect || HOME_PAGE_ROUTE} />;
};

export { ProtectedRoute };
