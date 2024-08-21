import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Users = () => {
    const [employeelist, employeelistupdate] = useState([]);
    const [haveedit, editchange] = useState(false);
    const [haveview, viewchange] = useState(false);
    const [haveadd, addchange] = useState(false);
    const [havedelete, deletechange] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        GetUserAccess();
        loademployee();
       
        
    }, []);

    const loademployee = () => {
        fetch("http://localhost:8000/employee").then(res => {
            if (!res.ok) {
                
                return false
            }
            return res.json();
        }).then(res => {
            employeelistupdate(res)
        });

    }
    const GetUserAccess = () => {
        const userrole = sessionStorage.getItem('userrole') != null ? sessionStorage.getItem('userrole').toString() : '';
        fetch("http://localhost:8000/roleaccess?role=" + userrole +"&menu=customer").then(res => {
            if (!res.ok) {
                navigate('/');
                toast.warning("you are not authorized to access");
                return false;
            }
            return res.json();
        }).then(res => {
            if (res.length>0) {
                viewchange(true);
                let employeeobj = res[0];
                editchange(employeeobj.haveedit);
                addchange(employeeobj.haveadd);
                deletechange(employeeobj.havedelete);
            }else{
                navigate('/');
                toast.warning("you are not authorized to access");
            }
        })
    }

    const handleadd = () => {
        if(haveadd){

            toast.success('Add new user');
            navigate('/register');
        }else{
            toast.warning("you are not having access for add");

        }

    }
    const handleedit = (code) => {
        if(haveedit){

            toast.success('editted');
        }else{
            toast.warning("you are not having access to edit");

        }

    }
    const handleremove = () => {
        toast.success('removed');

    }


    return (
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <h3>Employee list</h3>
                </div>
                <div className="card-body">
                    <button onClick={handleadd} className="btn btn-success">Add (+)</button>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>D.O.B</th>
                                <th>D.O.J</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {/* <tr>
                                <th>code</th>
                                
                                <th>Name</th>
                                <th>Email</th>
                                <th>D.O.B</th>
                                <th>Date of Joining</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                                {userslist &&
                                userslist.map(index =>{
                                    <tr key={index}>
                                        <td>{item.code}</td>
                                        <td>{item.name}</td>
                            </tr>
                            })
                                } */}
                        <tbody>
                            {
                                employeelist.map((value, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{value.id}</td>
                                            <td>{value.name}</td>
                                            <td>{value.email}</td>
                                            <td>{value.dob}</td>
                                            <td>{value.doj}</td>
                                            <td>{value.role}</td>

                                            <td>
                                                <button onClick={handleedit} className="btn btn-primary">Edit</button>
                                                <button onClick={handleremove} className="btn btn-danger">Remove</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
export default Users;