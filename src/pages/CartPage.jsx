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
      <div>total price:{cartItems.reduce((a, b) => a + b.totalPrice, 0)}</div>
      <Checkout>Checkout</Checkout>
    </div>
  );
}

const Checkout = styled.button`
  display: block;
  width: 100%;
`;

const List = styled.ul`
  list-style-type: none;
  margin-bottom: 1rem;
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
          <p>{el.title}</p>
          <Category>{el.category}</Category>
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

// TODO: delete btn
// TODO: checkout btn

const Card = styled.div`
  display: flex;
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
`;

const Category = styled.p`
  opacity: 0.6;
`;
const ImgWrapper = styled.div`
  width: 100px;
  background-color: white;
  padding: 0.5rem;
`;
const Quantity = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;
const Col = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
`;
