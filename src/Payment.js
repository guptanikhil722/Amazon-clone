import React, {useState, useEffect} from 'react';
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from './CheckoutProduct';
import { Link } from "react-router-dom";

import { useHistory} from "react-router-dom";


import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";


function Payment() {
    const [{basket , user}, dispatch] = useStateValue();
    const history = useHistory();



    // const [succeeded, setSucceeded] = useState(false);
    // const [processing, setProcessing] = useState("");
    // const [error, setError] = useState(null);
    // const [disabled, setDisabled] = useState(true);
    // const [clientSecret, setClientSecret] = useState(true);
    
    // useEffect( () => {
    //     //generate the special stripe seccret which allows us to charge a customer

    //     const getClentSecret = async () => {
    //         const response = await axios({
    //             method: 'post',
    //             // Stripe expects the total in a currencies subunits
    //             url: '/payments/create?total=${getBasketTotal(basket) * 100}'
    //         });
    //         setClientSecret(response.data.clientSecret)
    //     }

    //     getClentSecret();
    // }, [basket])
    
    
    
    // const handleSubmit = async (event) => {
    //     // all the stripe stuff....
    //      event.preventDefault();
    //      setProcessing(true);
        
    //      const payload = await stripe.confirmCardPayment(clientSecret, {
    //          payment_method: {
    //              card: elements.getElement(CardElement)
    //          }
    //      }).then(({ paymentIntent })  => {
    //          //paymentIntent = payment confirmation

    //          setSucceeded(true);
    //          setError(null)
    //          setProcessing(false)
             
    //          history.replace('/orders')
    //      })

    

    // const handleChange = e => {
    //        //Listen for changes in yhe CardElement
    //        // and displays any errors as the customer types their card details
    //     setDisabled(event.empty);
    //     setError(event.error ? event.error.message : "");
    // }

return (
    <div className="Payment">
        <div className="payment_container">
         <h1> 
            Checkout (<Link to="/checkout">{basket?.length} items</Link>)
         </h1>


            {/*Payment section - delivery address */}
            <div className="payment__section">
                <div className="payment__title">
                 <h3>Delivery Address</h3>
                </div>
              <div className="payment__address">
                  <p>{user?.email}</p>
                  <p>123 React Lane</p>
                  <p>Los Angeles, CA</p>
              </div>
            </div>
            
            {/*Payment section - Review items */}
             <div className="payment__section">
             <div className="payment__title">
                 <h3>Review items and delivery</h3>
             </div>
             <div className="payment__items">
                 {basket.map(item => (
                    <CheckoutProduct
                    id ={item.id}
                    title ={item.title}
                    price ={item.price}
                    image ={item.image}
                    rating ={item.rating}
                    
                    />
                    ))}
             </div>
                </div>

            {/*Payment section - Payment method */}
            <div className="payment__section">
            <div className="payment__title">
                <h3>Payment Method</h3>
            </div>
            <div className="payment__details">
                {/* Stripe magic will be here */}
             <form>

                    <div className="payment__priceContainer">
                        <CurrencyFormat 
                         renderText={(value) => (
                             <h3>order Total: {value}</h3>

                         )}
                        decimalScale={2}
                        value={getBasketTotal(basket)} 
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"$"}
                        />
                        <button >
                            
                        </button>
                        </div>




                   
                </form>
            </div>
                </div>
        
        
        
        
        </div>
    </div>
)
}

export default Payment