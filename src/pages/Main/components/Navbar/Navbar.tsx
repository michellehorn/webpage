import './Navbar.style.scss';

export const Navbar = ({ onClick }: { onClick: (item: string) => void }) => {
  const menuItems = [
    {
      id: 'home',
      text: 'Home'
    },
    {
      id: 'about',
      text: 'About me'
    },
    { id: 'projects', text: 'Projects' }
  ];
  return (
    <nav className='nav-bar--container'>
      <ul>
        {menuItems.map((item, index) => (
          <li key={`item-${index}`} onClick={() => onClick(item.id)}>
            {item.text}
          </li>
        ))}
      </ul>
    </nav>
  );
};
