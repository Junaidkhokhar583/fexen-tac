import { NavLink } from "react-router-dom";

export function Footer() {

  const links = [
    { name: "Home", to: "/" },
    { name: "Admin", to: "/admin" },
    { name: "Contact", to: "/contact" },
  ];


  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">

        
        <div className="font-bold text-lg mb-4 sm:mb-0">mywebsite - TAC</div>


        <div className="flex space-x-6">
          {links.map((link) => {
            return(  
            <NavLink
              key={link.name}
              to={link.to}
              className="items-center font-medium text-lg hover:text-tertiary transition-colors" 
            >
               {link.name}
            </NavLink>
            )
})}
        </div>
      </div>

      
      <div className="mt-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Mywebsite - TAC. All rights reserved.
      </div>
    </footer>
  );
}