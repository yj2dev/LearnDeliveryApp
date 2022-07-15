import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface Order {
  orderId: string;
  start: {
    latitude: number;
    longitude: number;
  };
  end: {
    latitude: number;
    longitude: number;
  };
  price: number;
}
interface InitialState {
  orders: Order[];
  deliveries: Order[];
}

const initialState: InitialState = {
  orders: [],
  deliveries: [],
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    //  주문 추가
    addOrder(state, action: PayloadAction<Order>) {
      state.orders.push(action.payload);
    },
    //  주문 수락
    acceptOrder(state, action: PayloadAction<String>) {
      const index = state.orders.findIndex(v => v.orderId === action.payload);
      if (index > -1) {
        //    -1 보다 크면 주문이 존재하는 것
        //   주문목록에서 뺴주고 배달 목록에 추가한다
        state.deliveries.push(state.orders[index]);
        state.orders.slice(index, 1);
      }
    },
    //  주문 거절
    rejectOrder(state, action) {
      const index = state.orders.findIndex(v => v.orderId === action.payload);
      if (index > -1) {
        // 항목을 찾아서 제거
        state.orders.splice(index, 1);
      }

      //  확인차 주문 목록도 확인해서 지워준다.
      const delivery = state.deliveries.findIndex(
        v => v.orderId === action.payload,
      );
      if (delivery > -1) {
        state.deliveries.splice(delivery, 1);
      }
    },
  },
});

export default orderSlice;
