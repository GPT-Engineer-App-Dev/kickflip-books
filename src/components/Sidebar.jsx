import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col p-4">
      <NavLink to="/" className="mb-4">
        <Button variant="ghost" className="w-full text-left">
          View All Transactions
        </Button>
      </NavLink>
      <NavLink to="/add-transaction" className="mb-4">
        <Button variant="ghost" className="w-full text-left">
          Add New Transaction
        </Button>
      </NavLink>
      <NavLink to="/edit-transaction" className="mb-4">
        <Button variant="ghost" className="w-full text-left">
          Edit Transaction
        </Button>
      </NavLink>
      <NavLink to="/delete-transaction" className="mb-4">
        <Button variant="ghost" className="w-full text-left">
          Delete Transaction
        </Button>
      </NavLink>
      <NavLink to="/upload-picture" className="mb-4">
        <Button variant="ghost" className="w-full text-left">
          Upload/View Pictures
        </Button>
      </NavLink>
    </div>
  );
};

export default Sidebar;