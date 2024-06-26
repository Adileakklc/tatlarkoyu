import { Route, Routes} from "react-router-dom";
import ShopPage from "./pages/ShopPage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";
import AuthPage from "./pages/AuthPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

import "./App.css";
import UserPage from "./pages/Admin/UserPage";
import CategoryPage from "./pages/Admin/Categories/CategoryPage";
import UpdateCategoryPage from "./pages/Admin/Categories/UpdateCategoryPage";
import CreateCategoryPage from "./pages/Admin/Categories/CreateCategoryPage";
import CreateProductPage from "./pages/Admin/Products/CreateProductPage";
import ProductPage from "./pages/Admin/Products/ProductPage";
import UpdateProductPage from "./pages/Admin/Products/UpdateProductPage";
import Success from "./pages/Success";
import OrderPage from "./pages/Admin/OrderPage";
import Products from "./components/Products/Products";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ShopPage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/product/:id" element={<ProductDetailsPage />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:Categoryname" element={<Products />} />
      <Route path="/success" element={<Success />} />
      <Route path="/admin/*">
        <Route index element={<CategoryPage />} />
        <Route path="users" element={<UserPage />} />
        <Route path="categories" element={<CategoryPage />} />
        <Route path="categories/create" element={<CreateCategoryPage />} />
        <Route path="categories/update/:id" element={<UpdateCategoryPage />} />
        <Route path="products" element={<ProductPage />} />
        <Route path="products/create" element={<CreateProductPage />} />
        <Route path="products/update/:id" element={<UpdateProductPage />} />
        <Route path="orders" element={<OrderPage />} />
      </Route>
    </Routes>
  );
}

export default App;
