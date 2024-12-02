// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const PaymentList = () => {
//   const [payments, setPayments] = useState([]);

//   useEffect(() => {
//     axios.get('/api/payments')
//       .then(response => setPayments(response.data))
//       .catch(error => console.error(error));
//   }, []);

//   const handleDelete = (id) => {
//     axios.delete(`/api/payments/${id}`)
//       .then(() => setPayments(payments.filter(payment => payment._id !== id)))
//       .catch(error => console.error(error));
//   };

//   return (
//     <div>
//       <h2>Payment Management</h2>
//       <ul>
//         {payments.map(payment => (
//           <li key={payment._id}>
//             {payment.user} - ${payment.amount} ({payment.status}) - {payment.paymentMethod}
//             <button onClick={() => handleDelete(payment._id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PaymentList;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';


// const AdminPayments = () => {
//   const [payments, setPayments] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchPayments = async () => {
//       try {
//         const { data } = await axios.get('http://localhost:5000/api/payment/get-all-payments');
//         setPayments(data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching payments:', error.message);
//         setLoading(false);
//       }
//     };

//     fetchPayments();
//   }, []);

//   return (
//     <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
//       <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Payment Records</h2>
//       {loading ? (
//         <p style={{ textAlign: 'center' }}>Loading payments...</p>
//       ) : (
//         <table
//           style={{
//             width: '100%',
//             borderCollapse: 'collapse',
//             margin: '20px 0',
//             fontSize: '18px',
//             textAlign: 'left',
//           }}
//         >
//           <thead>
//             <tr>
//               <th style={{ border: '1px solid #ddd', padding: '10px' }}>User ID</th>
//               <th style={{ border: '1px solid #ddd', padding: '10px' }}>Amount ($)</th>
//               <th style={{ border: '1px solid #ddd', padding: '10px' }}>Status</th>
//               <th style={{ border: '1px solid #ddd', padding: '10px' }}>Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {payments.map((payment) => (
//               <tr key={payment._id}>
//                 <td style={{ border: '1px solid #ddd', padding: '10px' }}>{payment.userId}</td>
//                 <td style={{ border: '1px solid #ddd', padding: '10px' }}>{(payment.amount / 100).toFixed(2)}</td>
//                 <td style={{ border: '1px solid #ddd', padding: '10px' }}>{payment.paymentStatus}</td>
//                 <td style={{ border: '1px solid #ddd', padding: '10px' }}>
//                   {new Date(payment.createdAt).toLocaleString()}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default AdminPayments;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  CircularProgress,
  Typography,
} from '@mui/material';

const AdminPayments = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch payments from the backend
  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/payment/get-all-payments'); // Replace with your backend route
        setPayments(response.data);
      } catch (err) {
        setError('Error fetching payment data');
      } finally {
        setLoading(false);
      }
    };

    fetchPayments();
  }, []);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return (
      <Typography variant="h6" color="error" align="center">
        {error}
      </Typography>
    );
  }

  return (
    <TableContainer component={Paper} style={{ margin: '20px', padding: '20px' }}>
      <Typography variant="h4" align="center" gutterBottom style={{ marginBottom: '20px', color: '#921A40' }}>
        Payment Records
      </Typography>

      <Table>
        <TableHead>
          <TableRow style={{ backgroundColor: '#C75B7A' }}>
            <TableCell style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Amount</TableCell>
            <TableCell style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Payment Intent ID</TableCell>
            <TableCell style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Status</TableCell>
            <TableCell style={{ color: '#FFFFFF', fontWeight: 'bold' }}>User ID</TableCell>
            <TableCell style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {payments.map((payment) => (
            <TableRow key={payment._id} hover>
              <TableCell>${(payment.amount / 100).toFixed(2)}</TableCell>
              <TableCell>{payment.paymentIntentId}</TableCell>
              <TableCell>{payment.paymentStatus}</TableCell>
              <TableCell>{payment.userId}</TableCell>
              <TableCell>{new Date(payment.createdAt).toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AdminPayments;
