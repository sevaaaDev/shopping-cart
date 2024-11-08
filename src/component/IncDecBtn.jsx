import styled from "styled-components";
export function BtnQuantity({ setQuantity, quantity, increment }) {
  return (
    <IncDecBtn
      disabled={!increment && quantity === 1}
      onClick={
        increment
          ? () => setQuantity(quantity + 1)
          : () => setQuantity(quantity - 1)
      }
    >
      {increment ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-plus"
          viewBox="0 0 16 16"
        >
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-dash"
          viewBox="0 0 16 16"
        >
          <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
        </svg>
      )}
    </IncDecBtn>
  );
}
const IncDecBtn = styled.button`
  line-height: 0;
  border-radius: 0px;
  background-color: inherit;
`;
