import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import { HomePage, homePageLoader } from "./pages/HomePage";
import { ShopPage, shopLoader, shopCategoryLoader } from "./pages/ShopPage";
import { productLoader, ProductPage } from "./pages/ProductPage";
import { CartPage } from "./pages/CartPage";
import { categoriesLoader, ShopLayout } from "./layout/ShopLayout";
export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
          loader: homePageLoader,
        },
        {
          path: "shop",
          element: <ShopLayout />,
          loader: categoriesLoader,
          children: [
            {
              index: true,
              element: <ShopPage />,
              loader: shopLoader,
            },
            {
              path: "category/:name",
              element: <ShopPage />,
              loader: shopCategoryLoader,
            },
          ],
        },
        {
          path: "product/:id",
          element: <ProductPage />,
          loader: productLoader,
        },
        { path: "cart", element: <CartPage /> },
      ],
    },
  ],
  {
    basename: "/shopping-cart",
  },
);
