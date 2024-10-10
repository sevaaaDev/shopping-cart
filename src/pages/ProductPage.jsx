import {
  useLoaderData,
  useNavigation,
  useOutletContext,
} from "react-router-dom";

export async function productLoader({ params }) {
  const data = await fetch(
    `https://fakestoreapi.com/products/${params.id}`,
  ).then((res) => res.json());
  console.log(data);
  return data;
}

export function ProductPage() {
  const data = useLoaderData();
  const { setCartItems } = useOutletContext();
  function addtocart() {
    setCartItems((items) => [...items, data]);
  }
  return (
    <div>
      <img src={data.image} alt="" />
      <p className="title">{data.title}</p>
      <button onClick={addtocart}>Add to cart</button>
    </div>
  );
}
