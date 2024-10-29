import { defer, Await, useLoaderData, useNavigation } from "react-router-dom";
import { Suspense } from "react";
import { ProductCard, ProductCardSkeleton } from "../component/ProductCard";
import { ProductListGrid } from "../component/ProductListGrid";

export async function shopLoader() {
  const data = fetch(`https://fakestoreapi.com/products/`).then((res) =>
    res.json(),
  );
  return defer({ data: data });
}

export async function shopCategoryLoader({ params }) {
  const { name } = params;
  const data = fetch(`https://fakestoreapi.com/products/category/${name}`).then(
    (res) => res.json(),
  );
  console.log(data);
  return defer({ data: data });
}

export function ShopPage() {
  const { data } = useLoaderData();
  const { state, location } = useNavigation();

  return (
    <ProductListGrid>
      <Suspense fallback={<ProductCardSkeleton />}>
        <Await resolve={data}>
          {(res) =>
            res.map((el) => (
              <ProductCard
                key={el.id}
                src={el.image}
                title={el.title}
                id={el.id}
                price={el.price}
                category={el.category}
                rating={el.rating.rate}
                sold={el.rating.count}
              />
            ))
          }
        </Await>
      </Suspense>
    </ProductListGrid>
  );
}
