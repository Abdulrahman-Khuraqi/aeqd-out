const NavList = ({ links, className = '' }) => {
    return (
      <ul className={`flex md:gap-8 gap-4 ${className}`}>
        {links.map((link, index) => (
          <li key={index}>
            {link.href ? (
              <a
                href={link.href}
                className="text-gray-50 hover:text-primary-500 transition duration-300"
              >
                {link.title}
              </a>
            ) : (
              <a
                href={`${link.to}`}
                className="text-gray-50 hover:text-primary-500 transition duration-300"
              >
                {link.title}
              </a>
            )}
          </li>
        ))}
      </ul>
    );
  };
  
  export default NavList;
  