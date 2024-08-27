import { Navigate } from 'react-router-dom';

const isAuthenticated = () => {
  return !!localStorage.getItem('authToken');
}

function ProtectedRoute({ children }) {
  if (!isAuthenticated()) {
    return <Navigate to="/auth" replace />;
  }

  return children;
}

export default ProtectedRoute;
