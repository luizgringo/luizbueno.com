import { useState } from 'react';
import Image from 'next/image';

const NavBar = ({ homeRef, portifolioRef, contactRef }) => {
  const [show, setShow] = useState(false);

  const scrollTo = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop - 70,
      behavior: 'smooth',
    });
    closeMenu();
  };

  const closeMenu = () => {
    if (show) {
      setShow(false);
    }
  };

  return (
    <section className='navs' ref={homeRef}>
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
            <a className='brand' href='#home' onClick={() => scrollTo(homeRef)}>
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
                  <a href='#portifolio' onClick={() => scrollTo(portifolioRef)}>
                    #Portifolio
                  </a>
                </li>
                <li>
                  <a href='#contact' onClick={() => scrollTo(contactRef)}>
                    @Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
