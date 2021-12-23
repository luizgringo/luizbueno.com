const Footer = ({contactRef}) => {
  return (
    <footer className='lead' ref={contactRef}>
      <h2 className='blink'>Do you want to get in touch?</h2>
      <p className='talk-with-me'>Send me an e-mail: contact[at]luizbueno.com</p>
    </footer>
  );
};

export default Footer;
