import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

import vintageComputerImg from '../../public/images/vintagecomputer.gif';

const Jumbotron = () => {
  return (
    <section className='jumbs'>
      <div className='container'>
        <div className='jumbotron'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-lg-12'>
                <h1>
                  <TypeAnimation
                    sequence={['Hi!']}
                    wrapper='span'
                    cursor={false}
                    speed={60}
                    preRenderFirstString={false}
                  />
                </h1>
              </div>
              <div className='col-lg-12 second-title'>
                <TypeAnimation
                  sequence={[2000, 'My name is Luiz Bueno.']}
                  wrapper='span'
                  cursor={false}
                  speed={60}
                  preRenderFirstString={false}
                />
              </div>
              <div className='col-lg-12 second-title'>
                <TypeAnimation
                  sequence={[5000, 'And I`m a Web Developer!']}
                  wrapper='span'
                  cursor={false}
                  speed={60}
                  preRenderFirstString={false}
                />
              </div>
            </div>
            <Image
              alt='Workstation'
              width={500}
              height={400}
              className='vintage-computer'
              src={vintageComputerImg}
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
