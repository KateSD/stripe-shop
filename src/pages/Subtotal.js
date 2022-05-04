import React from 'react';
import CurrencyFormat from 'react-currency-format'
import '../styles/Subtotal.css'
import {useStateValue} from "../redux/StateProvider";
import {getBasketTotal} from "../redux/reducer";
import {useHistory} from "react-router-dom";

const Subtotal = () => {
    const history = useHistory();
    const [{basket}, dispatch] = useStateValue();
    let item = basket.length;
    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({item} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox"/> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
        </div>
    );
};

export default Subtotal;
