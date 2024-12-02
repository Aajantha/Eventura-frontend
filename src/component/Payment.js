

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import logo from '../Images/MM logo.jpeg';
// import "../CSS/OrganzerSubscribe.css";
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// const stripePromise = loadStripe('pk_test_51QBrrwHbve0bLiRTaPPEZhSKHzs78tBzW8YtoCBEjulf6100zG9h8YeIinHLTLO16CFcfBXin9mbSozyN8DvLJnN00sCgpupL4');
// const styles = {
//   customGradient: { background: '#D4D4D4', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px',},
//   customCard: {maxWidth: '400px',width: '100%',padding: '20px',borderRadius: '10px',backgroundColor: '#111', boxShadow: '0 0 20px rgba(204, 255, 0, 0.3)', transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',},
//   formCheck: {marginBottom: '10px',},
//   formControl: {borderRadius: '5px',},
//   btn: {background: '#CCFF00',color: 'black',border: 'none',padding: '10px',borderRadius: '5px',cursor: 'pointer',transition: 'all 0.3s ease',fontWeight: 'bold', },};
// const CheckoutForm = ({ plan }) => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const navigate = useNavigate();
//   const [status, setStatus] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!stripe || !elements) {
//       setStatus('Stripe has not loaded yet.');
//       toast.error('Stripe has not loaded yet.');
//       return;
//     }
//     setIsLoading(true);
//     setStatus('');
//     setErrorMessage('');
//     const localtoken = localStorage.getItem('token');
//     try {
//       const response = await fetch('http://localhost:4000/api/payments/create-payment-intent', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${localtoken}`,
//         },
//         body: JSON.stringify({ plan, userId: 'user123' }), // Replace userId with actual ID
//       });
//       const { clientSecret } = await response.json();
//       if (!clientSecret) {
//         throw new Error('Failed to initiate payment');
//       }
//       const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
//         payment_method: { card: elements.getElement(CardElement) },
//       });
//       if (error) {
//         throw error;
//       } else if (paymentIntent.status === 'succeeded') {
//         setStatus('Payment successful!');
//         toast.success('Payment was successful!');
//         await fetch('http://localhost:4000/api/payments/payment-success', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({ paymentIntentId: paymentIntent.id }),
//         });
//         navigate('/organizer-dashboard');
//       } else {
//         throw new Error('Payment was not successful');
//       }
//     } catch (error) {
//       setErrorMessage(`Payment failed: ${error.message}`);
//       toast.error(`Payment failed: ${error.message}`);
//     } finally {
//       setIsLoading(false);
//     }
//   };
//   return (
//     <form onSubmit={handleSubmit} style={{ width: '100%' }}>
//       <div style={{ marginBottom: '20px' }}>
//         <CardElement
//           options={{
//             style: {
//               base: {fontSize: '16px',color: '#D4D4D4','::placeholder': { color: '#888', }, },
//               invalid: { color: '#FF6B6B',},}, hidePostalCode: true, }}/>
//       </div>
//       <button
//         type="submit"
//         disabled={!stripe || isLoading}
//         style={{...styles.btn, width: '100%', fontSize: '16px',
//         }}
//         onMouseEnter={(e) => {
//           e.target.style.transform = 'scale(1.05)';
//           e.target.style.boxShadow = '0 0 15px rgba(204, 255, 0, 0.5)';
//         }}
//         onMouseLeave={(e) => {
//           e.target.style.transform = 'scale(1)';
//           e.target.style.boxShadow = 'none';
//         }}
//       >
//         {isLoading ? 'Processing...' : 'Subscribe Now'}
//       </button>
//       {errorMessage && <p style={{ color: '#FF6B6B', marginTop: '10px' }}>{errorMessage}</p>}
//       {status && <p style={{ color: '#CCFF00', marginTop: '10px' }}>{status}</p>}
//     </form>
//   );
// };
// export default function OrganizerSubscribe() {
//   const [plan, setPlan] = useState('monthly');
//   return (
//       <div style={styles.customGradient}>
//         <div
//           style={styles.customCard}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.transform = 'scale(1.02)';
//             e.currentTarget.style.boxShadow = '0 0 30px rgba(204, 255, 0, 0.5)';
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.transform = 'scale(1)';
//             e.currentTarget.style.boxShadow = '0 0 20px rgba(204, 255, 0, 0.3)';
//           }}
//         >
//           <div style={{ textAlign: 'center', marginBottom: '20px' }}>
//             <img src={logo} alt="Match Master Logo" width={60} height={60} style={{ marginBottom: '15px' }} />
//             <h2 style={{ color: '#CCFF00', fontWeight: 'bold', fontSize: '24px' }}>Organizer Subscription</h2>
//           </div>
//           <div style={{ marginBottom: '20px' }}>
//             <div style={styles.formCheck}>
//               <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
//                 <input
//                   type="radio"
//                   name="plan"
//                   value="monthly"
//                   checked={plan === 'monthly'}
//                   onChange={() => setPlan('monthly')}
//                   style={{ marginRight: '10px', cursor: 'pointer' }}
//                 />
//                 <span style={{
//                   color: plan === 'monthly' ? '#CCFF00' : '#D4D4D4',
//                   fontWeight: plan === 'monthly' ? 'bold' : 'normal',
//                   transition: 'color 0.3s ease',
//                 }}>
//                   Monthly ($29.99/month)
//                 </span>
//               </label>
//             </div>
//             <div style={styles.formCheck}>
//               <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
//                 <input
//                   type="radio"
//                   name="plan"
//                   value="yearly"
//                   checked={plan === 'yearly'}
//                   onChange={() => setPlan('yearly')}
//                   style={{ marginRight: '10px', cursor: 'pointer' }}
//                 />
//                 <span style={{
//                   color: plan === 'yearly' ? '#CCFF00' : '#D4D4D4',
//                   fontWeight: plan === 'yearly' ? 'bold' : 'normal',
//                   transition: 'color 0.3s ease',
//                 }}>
//                   Yearly ($299.99/year - Save 17%)
//                 </span>
//               </label>
//             </div>
//           </div>
//           <Elements stripe={stripePromise}>
//             <CheckoutForm plan={plan} />
//           </Elements>
//           <div style={{ textAlign: 'center', marginTop: '20px' }}>
//             <small style={{ color: '#D4D4D4' }}>
//               By subscribing, you agree to our{' '}
//               <a href="/terms-of-service" style={{ color: '#CCFF00', textDecoration: 'none', transition: 'opacity 0.3s ease' }} onMouseEnter={(e) => e.target.style.opacity = '0.8'} onMouseLeave={(e) => e.target.style.opacity = '1'}>Terms of Service</a> and{' '}
//               <a href="/privacy-policy" style={{ color: '#CCFF00', textDecoration: 'none', transition: 'opacity 0.3s ease' }} onMouseEnter={(e) => e.target.style.opacity = '0.8'} onMouseLeave={(e) => e.target.style.opacity = '1'}>Privacy Policy</a>.
//             </small>
//           </div>
//         </div>
//       </div>
//   );
// }




// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const stripePromise = loadStripe('pk_test_51QMinOFmUhbnIp9jbuqL4OSC5CddYFUIZqzUAlkx4GiqcMtEYD8ngH7LQ5aVNcst2kCn5mSnxbRvbC3k8Hn0rJhy00V5DETMM2');

// const CheckoutForm = ({ clientSecret }) => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(false);
//   const [statusMessage, setStatusMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!stripe || !elements) {
//       toast.error('Stripe is not loaded yet.');
//       return;
//     }

//     setIsLoading(true);

//     try {
//       const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: elements.getElement(CardElement),
//         },
//       });

//       if (error) {
//         setStatusMessage('Payment failed. Please try again.');
//         toast.error(`Payment failed: ${error.message}`);
//       } else if (paymentIntent.status === 'succeeded') {
//         setStatusMessage('Payment successful! Thank you.');
//         toast.success('Payment was successful!');
//         navigate('/payment-success'); // Navigate to the success page
//       }
//     } catch (error) {
//       setStatusMessage('An error occurred during payment.');
//       toast.error(`An error occurred: ${error.message}`);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{ width: '100%' }}>
//       <CardElement
//         options={{
//           style: {
//             base: {
//               fontSize: '16px',
//               color: '#D4D4D4',
//               '::placeholder': { color: '#888' },
//             },
//             invalid: { color: '#FF6B6B' },
//           },
//           hidePostalCode: true,
//         }}
//       />
//       <button
//         type="submit"
//         disabled={!stripe || isLoading}
//         style={{
//           background: '#CCFF00',
//           color: 'black',
//           padding: '10px',
//           borderRadius: '5px',
//           cursor: 'pointer',
//           fontWeight: 'bold',
//           marginTop: '20px',
//         }}
//       >
//         {isLoading ? 'Processing...' : 'Pay Now'}
//       </button>
//       {/* Status Message */}
//       {statusMessage && (
//         <p style={{ color: statusMessage.includes('successful') ? '#00FF00' : '#FF6B6B', marginTop: '10px' }}>
//           {statusMessage}
//         </p>
//       )}
//     </form>
//   );
// };

// export default function OrganizerSubscribe() {
//   // Replace this clientSecret with the one generated from your backend
//   const clientSecret = 'sk_test_51QMinOFmUhbnIp9joII2UOsX7MY9GFUpCYsFW2QdoDl4DDuDCDEG2KxVThm73WWrqp2gmVGFBfIzLtZf1Il75YGb00dCXV1FMi'; // Predefined client secret

//   return (
//     <div style={{ background: '#D4D4D4', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//       <div style={{ backgroundColor: '#111', padding: '20px', borderRadius: '10px', maxWidth: '400px', width: '100%' }}>
//         <h2 style={{ color: '#CCFF00', textAlign: 'center' }}>Payment Page</h2>
//         <Elements stripe={stripePromise}>
//           <CheckoutForm clientSecret={clientSecret} />
//         </Elements>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

// Load your Stripe public key
const stripePromise = loadStripe('pk_test_51QMinOFmUhbnIp9jbuqL4OSC5CddYFUIZqzUAlkx4GiqcMtEYD8ngH7LQ5aVNcst2kCn5mSnxbRvbC3k8Hn0rJhy00V5DETMM2');

const CheckoutForm = ({ clientSecret, amount, userId }) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      alert('Stripe is not loaded yet.');
      return;
    }

    setIsLoading(true);
    try {
      // Confirm the payment using the client secret
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: { card: elements.getElement(CardElement) },
      });

      if (error) {
        alert(`Payment failed: ${error.message}`);
      } else if (paymentIntent.status === 'succeeded') {
        // After payment is successful, save payment details
        const paymentDetails = {
          amount, // Send the amount (in dollars)
          paymentIntentId: paymentIntent.id,
          paymentStatus: paymentIntent.status,
          userId, // Use the actual user ID dynamically
        };

        // Save payment details to your server
        await axios.post('http://localhost:5000/api/payment/save-payment', paymentDetails);

        // Alert message after saving payment details
        alert('Payment successful and details saved!');
        
        // Navigate to success page
        navigate('/payment-success');
      }
    } catch (err) {
      alert(`An error occurred: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
      <div style={{ marginBottom: '20px' }}>
        <CardElement />
      </div>
      <button
        type="submit"
        disabled={!stripe || isLoading}
        style={{
          backgroundColor: '#C75B7A', // Custom button color (pink)
          color: '#fff',
          padding: '10px 20px',
          border: 'none',
          cursor: 'pointer',
          width: '100%',
          fontSize: '16px',
        }}
      >
        {isLoading ? 'Processing...' : 'Pay Now'}
      </button>
    </form>
  );
};

const OrganizerSubscribe = () => {
  const [clientSecret, setClientSecret] = useState(null);
  const [amount, setAmount] = useState(100); // Example amount in dollars (will convert to cents)
  const [userId, setUserId] = useState(null); // Dynamic user ID (e.g., from context or local storage)

  useEffect(() => {
    // Assuming user ID is stored in localStorage or context, update accordingly
    const userIdFromStorage = localStorage.getItem('userId');
    setUserId(userIdFromStorage); // Set userId dynamically

    const fetchClientSecret = async () => {
      try {
        const { data } = await axios.post('http://localhost:5000/api/payment/create-payment-intent', { amount });
        setClientSecret(data.clientSecret);
      } catch (err) {
        console.error('Error fetching client secret:', err);
      }
    };

    if (userIdFromStorage) {
      fetchClientSecret();
    } else {
      alert('User not logged in');
    }
  }, [amount]);

  return clientSecret && userId ? (
    <div style={{ maxWidth: '500px', margin: '50px auto', textAlign: 'center' }}>
      <Elements stripe={stripePromise}>
        <CheckoutForm clientSecret={clientSecret} amount={amount} userId={userId} />
      </Elements>
    </div>
  ) : (
    <div style={{ textAlign: 'center', padding: '20px' }}>Loading...</div>
  );
};

export default OrganizerSubscribe;
