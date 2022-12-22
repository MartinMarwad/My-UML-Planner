
// React
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';

// Components
import RootLayout from './layout/Layout';

// Pages
import MyDegreePathway from './pages/MyDegreePathway';
import MyClasses from './pages/MyClasses';
// import ComponentPage from './pages/Components';
// import ColorSystem from './components-old/ColorSystem';
// import Home from './pages/Home';

// Old Local
// import Layout from './old-layout/Layout';
// import RootLayout from './old-layout/RootLayout';


const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<RootLayout />} >
                    <Route index element={<Navigate to="/my-degree-pathway" replace />} />
                    <Route path="/my-degree-pathway" element={<MyDegreePathway />} />
                    <Route path="/my-classes" element={<MyClasses />} />
                    {/* <Route path="/components" element={<ComponentPage />} /> */}
                    {/* <Route path="/theme" element={<ColorSystem />} /> */}
                    {/* <Route path="/home" element={<Home />} /> */}
                </Route>
            </Routes>
        </HashRouter>
    )
}

export default App;