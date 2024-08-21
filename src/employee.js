// import React, { useEffect, useState } from "react";

// const Employee =()=>{
//     const[employeelist , employeelistupdate]=useState([]);
//     useEffect(()=>{
//         loademployee();
//     },[]);

//     const loademployee = ()=>{
//         fetch("http://localhost:8000/employee").then(res=>{
//             if(!res.ok){
//                 return false
//             }
//             return res.json();
//         }).then(res=>{
//             employeelistupdate(res)
//         });

//     }
        
    
//     return(
//         <div className="container">
//             <div className="card">
//                 <div className="card-header">
//             <h3>Employee list</h3>
//                 </div>
//                 <div className="card-body">
//                     <table className="table table-bordered">
//                         <thead className="bg-dark text-white">
//                         <tr>
//                         <th>Id</th>
//                         <th>Name</th>
//                         <th>Email</th>
//                         <th>D.O.B</th>
//                         <th>D.O.J</th>
//                         <th>Action</th>
//                     </tr>
//                 </thead>
                           
//                                 <tbody>
//                                 {
//                         employeelist.map((value, index) => {
//                             return (
//                                 <tr key={index}>
//                                     <td>{value.id}</td>
//                                     <td>{value.name}</td>
//                                     <td>{value.email}</td>
//                                     <td>{value.dob}</td>
//                                     <td>{value.doj}</td>
//                                     <td>{value.edit}</td>
//                                     <td>
//                                         <button className="btn btn-primary">Edit</button>
//                                         <button className="btn btn-danger">Remove</button>
//                                     </td>
//                                 </tr>
//                             )
//                         })
//                     }
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// }
// export default Employee;