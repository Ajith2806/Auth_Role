import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
    const usenavigate = useNavigate();
    const [customerlist, listupdate] = useState(null);
   
    useEffect(() => {
       

       

    }, []);

    return (
        <div>
            
            <h1 className="text-center">Welcome</h1>
           
        </div>
    );
}

export default Home;