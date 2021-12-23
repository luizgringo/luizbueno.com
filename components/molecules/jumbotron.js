import Typist from 'react-typist'
import Image from 'next/image'

import vintageComputerImg from "../../public/images/vintage-computer.json"

const Jumbotron = () => {
  return (
    <div className='container'>
      <div className='jumbotron'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-12'>
              <h1>
                <Typist cursor={{ show: false }}>Hi!</Typist>
              </h1>
            </div>
            <div className='col-lg-12 second-title'>
              <Typist cursor={{ show: false }}>
                <Typist.Delay ms={2000} />
                My name is Luiz Bueno.
              </Typist>
            </div>
            <div className='col-lg-12 second-title'>
              <Typist cursor={{ show: false }}>
                <Typist.Delay ms={5000} />
                And I`m a Web Developer!
              </Typist>
            </div>
          </div>
          <Image
            alt='Workstation'
            width={500}
            height={400}
            className='vintage-computer'
            src={vintageComputerImg.base64}
          />
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
