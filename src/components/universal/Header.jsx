import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./searchBar";
import DropdownMenu from "../home/dropDown";
import LogoSVG from "../../assets/Logo.svg";
const Header = () => {
  return (
    <header className="">
      <div className=" px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-700">
          <img src={LogoSVG} alt="" />
        </Link>
        <SearchBar />
        <nav className="flex gap-8 items-center justify-center">
          <Link to="/products" className="text-gray-700 hover:text-blue-600">
            Products
          </Link>
          <Link to="/brands" className="text-gray-700 hover:text-blue-600">
            Brands
          </Link>
          <Link to="/support" className="text-gray-700 hover:text-blue-600">
            Support
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600">
            Contact Us
          </Link>
          <Link
            to="/login"
            className="bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700"
          >
            Login
          </Link>
          <Link
            to="/SignUp"
            className="bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700"
          >
            Sign Up
          </Link>
        </nav>
      </div>
      <div className=" bg-gray-100 py-2">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <DropdownMenu
            title="Categories"
            items={["Air Treatment", "Cooling", "Heating", "Ventilation"]}
          />
          <DropdownMenu
            title="Application"
            items={["Air Treatment", "Cooling", "Heating", "Ventilation"]}
          />
          <DropdownMenu
            title="Brand"
            items={["Air Treatment", "Cooling", "Heating", "Ventilation"]}
          />
          <DropdownMenu
            title="Technical Service"
            items={["Air Treatment", "Cooling", "Heating", "Ventilation"]}
          />
          <DropdownMenu
            title="Calibration"
            items={["Air Treatment", "Cooling", "Heating", "Ventilation"]}
          />
          <DropdownMenu
            title="Resource Center"
            items={["Air Treatment", "Cooling", "Heating", "Ventilation"]}
          />
        </nav>
      </div>
    </header>
  );
};

export default Header;
