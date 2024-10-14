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
  const { setCartItems, cartItems } = useOutletContext();
  function addtocart() {
    let newCartItems = [
      ...cartItems,
      {
        ...data,
        quantity: 1,
        get totalPrice() {
          return this.quantity * this.price;
        },
      },
    ];
    // if there are the same product in cart, combine them
    setCartItems(
      newCartItems.reduce((a, b) => {
        if (a.at(-1)?.id === b.id) {
          a.at(-1).quantity += b.quantity;
          return a;
        }
        return [...a, b];
      }, []),
    );
  }
  return (
    <div>
      <img src={data.image} alt="" />
      <p className="title">{data.title}</p>
      <button onClick={addtocart}>Add to cart</button>
    </div>
  );
}
