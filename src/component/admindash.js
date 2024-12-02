// // AdminDashboard.js (No changes needed if already configured correctly)
// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Sidebar from './Sidebar.js';
// import EventManagement from './pages/EventManagement.js'; // Ensure the path is correct
// import UserManagement from './pages/UserManagement.js';
// import AddService from '../component/pages/AddService.js';
// import AddPackages from '../component/pages/AddPackages.js';
// import VenueManagement from './pages/EventServicema.js';
// import ceratehallform from './pages/hallform.js';

// const AdminDashboard = () => {
//   return (
//     <div className="dashboard-container">
//       <Sidebar />
//       <div className="content">
//         <Routes>
//           <Route path="/events" element={<EventManagement />} />
//           <Route path="/users" element={<UserManagement />} />
//           <Route path="/add-service" element={<AddService />} />
//           <Route path="/add-packages" element={<AddPackages />} />
//           <Route path="/event-services" element={<VenueManagement />} />
//           <Route path="/hallform" element={<CreateVenue />} />
//         </Routes>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;



// AdminDashboard.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar.js';
import EventManagement from './pages/EventManagement.js';
import UserManagement from './pages/UserManagement.js';
// import AddService from '../component/pages/AddService.js';
// import AddPackages from '../component/pages/AddPackages.js';
import VenueManagement from './pages/EventServicema.js';
// import Hallform from './pages/Hallform.js'; // Corrected import
import  AdminPayments from './pages/PaymentMa.js'; 
import OrderTable from './pages/order.js';
const AdminDashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="content">
        <Routes>
          <Route path="/events" element={<EventManagement />} />
          <Route path="/users" element={<UserManagement />} />
          {/* <Route path="/add-service" element={<AddService />} />
          <Route path="/add-packages" element={<AddPackages />} /> */}
          <Route path="/event-services" element={<VenueManagement />} />
          {/* <Route path="/Hallform" element={<Hallform />} /> */}
          <Route path="/Paymentadmin" element={<AdminPayments />} />
          <Route path="/Orderadmin" element={<OrderTable />} />


        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
