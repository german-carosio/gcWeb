// AppRoutes.jsx
import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';  // Importamos el componente Layout

// Lazy loading de las páginas
const Home = lazy(() => import('../pages/Home'));
const AboutUs = lazy(() => import('../pages/AboutUs'));
const Service1 = lazy(() => import('../pages/Service1'));
const Service2 = lazy(() => import('../pages/Service2'));
const Service3 = lazy(() => import('../pages/Service3'));
const Contact = lazy(() => import('../pages/Contact'));
const PageNotFound = lazy(() => import('../pages/PageNotFound'));

// Componente que define las rutas de la aplicación
const AppRoutes = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>  {/* Suspense para manejar el lazy loading de las páginas */}
            <Routes>
                <Route
                    path="/"
                    element={
                        <Layout
                            title="Mi Sitio Web"
                            description="Descripción general de mi sitio web."
                            keywords="sitio web, react"
                        />
                    }
                >
                    <Route index element={<Home />} />  {/* Ruta para la página de inicio */}
                    <Route
                        path="about"
                        element={
                            <AboutUs
                                title="About Us - Mi Sitio Web"
                                description="Conócenos más."
                                keywords="about us, sitio web, react"
                            />
                        }
                    />  {/* Ruta para la página de acerca de */}
                    <Route
                        path="service1"
                        element={
                            <Service1
                                title="Service 1 - Mi Sitio Web"
                                description="Detalles del Servicio 1."
                                keywords="service 1, sitio web, react"
                            />
                        }
                    />  {/* Ruta para el servicio 1 */}
                    <Route
                        path="service2"
                        element={
                            <Service2
                                title="Service 2 - Mi Sitio Web"
                                description="Detalles del Servicio 2."
                                keywords="service 2, sitio web, react"
                            />
                        }
                    />  {/* Ruta para el servicio 2 */}
                    <Route
                        path="service3"
                        element={
                            <Service3
                                title="Service 3 - Mi Sitio Web"
                                description="Detalles del Servicio 3."
                                keywords="service 3, sitio web, react"
                            />
                        }
                    />  {/* Ruta para el servicio 3 */}
                    <Route
                        path="contact"
                        element={
                            <Contact
                                title="Contact - Mi Sitio Web"
                                description="Ponte en contacto con nosotros."
                                keywords="contact, sitio web, react"
                            />
                        }
                    />  {/* Ruta para la página de contacto */}
                    <Route
                        path="*"
                        element={
                            <PageNotFound
                                title="404 - Página no encontrada"
                                description="Esta página no existe."
                            />
                        }
                    />  {/* Ruta para manejar páginas no encontradas */}
                </Route>
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;  // Exportamos las rutas de la aplicación






