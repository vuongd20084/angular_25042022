import {createReducer, on} from '@ngrx/store'
import {addCart, editCart, deleteCart} from './cartAction'

import {Cart} from '../models/cartModel'

//Tạo trạng thái ban đầu
const intinialState: ReadonlyArray<Cart> = [];

export const cartReducer = createReducer(
    //Giá trị ban đầu
    intinialState,

    //Thêm
    on(addCart, (state, {cart})=> [...state, cart]),
    //Sửa
    on(editCart, (state, {cart})=> {
        //So khớp dữ liệu cũ và mới,
        //nếu có thay đổi thì cập nhật lại
        //và trả về dữu liệu mới
        const carts = state.map((m)=>{
            if(m.id == cart.id ){
                return cart; //dữ liệu mới
            }
            return m;   //dữ liệu cũ
        })

        return carts
    }),
    //Xoá
    on(deleteCart, (state, {cartId})=> state.filter((cart)=>cart.id !==cartId))
);