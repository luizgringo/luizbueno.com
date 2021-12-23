import { useState } from 'react';
import Image from 'next/image'

const NavBar = ({contactRef}) => {
  const [show, setShow] = useState(false);

  const scrollTo = () => {
    window.scrollTo({
      top: contactRef.current.offsetTop,
      behavior: "smooth"
    });
    closeMenu();
  };

  const closeMenu = () => {
    if(show) {
        setShow(false);
    }
};

  return (
    <div className='navbar navbar-inverse navbar-fixed-top'>
      <div className='navbar-inner'>
        <div className='container'>
          <button
            onClick={() => setShow(!show)}
            type='button'
            className='btn btn-navbar'
            data-toggle='collapse'
            data-target='.nav-collapse'
            aria-label='Hamburguer Mobile Menu'
          >
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
          </button>
          <a className='brand' href='#'>
            <div className='logo-wrapper blink'>
              <div className='logo'>
                <Image
                  src='/images/pc.png'
                  alt='Vintage Computer Logo'
                  className='header-icon'
                  width={60}
                  height={53}
                />
              </div>
              <div className='logo-text'>
                <div className='logo-text__name'>Luiz Bueno`s</div>
                <div className='logo-text__subtext'>Web Development</div>
                <div className='logo-text__subtext'>Website</div>
              </div>
            </div>
          </a>
          <div className='nav-collapse collapse' style={show ? { overflow: 'visible' } : { overflow: 'hidden' }}>
            <ul className='nav'>
              <li>
                <a href='#portifolio' onClick={closeMenu}>
                  #Portifolio
                </a>
              </li>
              <li>
                <a href='#contact' onClick={scrollTo}>
                  @Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
