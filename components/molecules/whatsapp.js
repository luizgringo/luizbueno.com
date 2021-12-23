import Image from 'next/image';

const Whastapp = () => {
  return (
    <div className='container'>
      <hr />
      <div className='row'>
        <div className='mx-auto whatsapp'>
          <div className='whatsapp-title'>...or you can send me a message through whatsapp:</div>
          <div className='whatsapp-image'>
            <a className='whatsapp-image-link' href='https://wa.link/lomruy'>
              <Image src='/images/qrcode.png' alt='Whatsapp QR Code' width={180} height={180} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whastapp;
