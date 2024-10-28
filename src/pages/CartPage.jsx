import { Link, useOutletContext } from "react-router-dom";
import { BtnQuantity } from "../component/IncDecBtn";
import styled from "styled-components";

export function CartPage({ cartItems, setCartItems }) {
  console.log(cartItems);

  function deleteItems(id) {
    console.log(id);
    setCartItems((items) => items.filter((el) => el.id !== id));
  }
  return (
    <div>
      <List>
        {cartItems.map((el) => (
          <ProductCartCard
            el={el}
            key={el.id}
            setCartItems={setCartItems}
            cartItems={cartItems}
          />
        ))}
      </List>
      <div>
        Total: $
        {Math.round(cartItems.reduce((a, b) => a + b.totalPrice, 0) * 100) /
          100}
      </div>
      <Checkout>Checkout</Checkout>
    </div>
  );
}

const Checkout = styled.button`
  display: block;
  width: 100%;
  border: none;
  padding: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  background-color: #00bfff;
  margin-top: 0.5rem;
`;

const List = styled.ul`
  list-style-type: none;
  margin-bottom: 1rem;
  max-height: 80vh;
  overflow: auto;
`;

// TODO: add img

function ProductCartCard({ el, setCartItems, cartItems }) {
  function setQuantity(newQuantity) {
    let newItems = [...cartItems];
    newItems = newItems.map((e) => {
      if (e.id === el.id) {
        e.quantity = newQuantity;
      }
      return e;
    });
    setCartItems(newItems);
  }

  function deleteItem() {
    let newItems = [...cartItems];
    newItems = newItems.filter((e) => e.id !== el.id);
    setCartItems(newItems);
  }

  return (
    <li>
      <Card>
        <ImgWrapper>
          <img src={el.image} alt="" />
        </ImgWrapper>
        <Content>
          <Col>
            <div>
              <p>{el.title}</p>
              <Category>{el.category}</Category>
            </div>
            <DeleteBtn onClick={deleteItem}>
              <Trash />
            </DeleteBtn>
          </Col>
          <Col>
            <Quantity>
              <BtnQuantity
                setQuantity={setQuantity}
                quantity={el.quantity}
                increment={false}
              />
              <p>{el.quantity}</p>
              <BtnQuantity
                setQuantity={setQuantity}
                quantity={el.quantity}
                increment={true}
              />
            </Quantity>
            <p>${el.totalPrice}</p>
          </Col>
        </Content>
      </Card>
    </li>
  );
}
function Trash() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="red"
      className="bi bi-trash"
      viewBox="0 0 16 16"
    >
      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
      <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
    </svg>
  );
}

const DeleteBtn = styled.button`
  border: none;
  background-color: transparent;
`;

// TODO: delete btn
// TODO: checkout btn

const Card = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 3fr;
  align-items: center;
  gap: 0.5rem;
  color: black;
  background-color: inherit;
  border-bottom: 1px solid black;
  padding-block: 1rem;

  img {
    width: 100%;
  }
`;

const Content = styled.div`
  padding-right: 1rem;
  width: 100%;
  div + div {
    margin-top: 1rem;
  }
`;

const Category = styled.p`
  opacity: 0.6;
`;
const ImgWrapper = styled.div`
  background-color: white;
  padding: 0.5rem;
`;
const Quantity = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;
const Col = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
`;
