import { createAction } from '@ngrx/store';
import { Cart } from '../models/cartModel';

// thêm
export const addCart = createAction(
    '[Cart] Add Cart',
    (cart: Cart) => ({ cart })
)

// sửa
export const editCart = createAction(
    '[Cart] Edit Cart',
    (cart: Cart) => ({ cart })
)

// xóa
export const deleteCart = createAction(
    '[Cart] Delete Cart',
    (cartId: string) => ({ cartId })
)