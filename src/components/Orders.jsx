import { useMemo } from "react";
import useActions from "../hooks/useActions"
import useOrders from "../hooks/useOrders"
import usePrototypes from "../hooks/usePrototypes"

export default function Orders() {
  const orders = useOrders();
  const prototypes = usePrototypes();
  const { remove } = useActions();

  const totalPrice = useMemo(() => {
    return orders
      .map((order) => {
      const { id, quantity } = order;
      const prototype = prototypes.find((p) => p.id === id);
      return prototype.price * quantity;
    })
    .reduce((l, r) => l + r, 0);
  }, [orders, prototypes]);

  // 초기화면 && 담기 갯수가 0인 경우
  if (orders.length === 0) {
    return (
      <aside>
        <div className="empty">
          <div className="title">You don't have any orders</div>
          <div className="subtitle">Click on a + to add an order</div>
        </div>
      </aside>
    );
  }
  
  // 주문이 1개 이상 담긴 경우
  return (
    <aside>
       <div className="order">
        <div className="body">
          {orders.map(order => {
            const {id} = order;
            const prototype = prototypes.find(p => p.id === id);
            const click = () => {
              remove(id);
            }
            return (
            <div className="item" key={id}>
              <div className="img">
                <video src={prototype.thumbnail} />
              </div>
              <div className="content">
                <p className="title">
                  {prototype.title} x {order.quantity}
                </p>
              </div>
              <div className="action">
                <p className="price">
                  $ {prototype.price * order.quantity}
                </p>
                <button className="btn btn--link" onClick={click}>
                  <i className="icon icon--cross"/>
                </button>
              </div>
            </div>);
          })}
        </div>
        <div className="total">
          <hr />
          <div className="item">
            <div className="content">Total</div>
            <div className="action">
              <div className="price">$ {totalPrice}</div>
            </div>
          </div>
        </div>
       </div>
    </aside>
  );
}