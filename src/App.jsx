import { BrowserRouter, Routes, Route , Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Blog from './pages/blog';
import Form from './components/Form';
import ViewProduct from './components/ViewProduct';




function App() {

  return (

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/form" element={<Form />} />
          <Route path="/viewproduct/:id" element={<ViewProduct />} />
        </Routes>
      </BrowserRouter>


  )
}

export default App
