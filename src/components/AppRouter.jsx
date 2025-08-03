import React, { useContext } from 'react'
import { Routes, Route , Navigate} from 'react-router-dom'
import { publicRoutes , privateRoutes } from '../router';
import { AuthContext } from '../context';
import Loader from './UI/loader/Loader';

function AppRouter() {
  const {isAuth , isLoading} = useContext(AuthContext);
  if(isLoading){
    return <Loader/>
  }
  return (
    <Routes>
      {/* Приватные маршруты */}
      {privateRoutes.map(route => (
        <Route
          key={route.path}
          path={route.path}
          element={isAuth ? <route.component /> : <Navigate to="/login" />}
        />
      ))}

      {/* Публичные маршруты */}
      {publicRoutes.map(route => (
        <Route
          key={route.path}
          path={route.path}
          element={!isAuth ? <route.component /> : <Navigate to="/posts" />}
        />
      ))}

      {/* Фолбек: редирект на /posts если авторизован, иначе на /login */}
      <Route
        path="*"
        element={<Navigate to={isAuth ? "/posts" : "/login"} />}
      />
    </Routes>
  )
}

export default AppRouter