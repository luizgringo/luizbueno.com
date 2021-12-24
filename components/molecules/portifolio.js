import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import Image from 'next/image';

import education from '../../public/images/education.svg'
import work from '../../public/images/work.jpeg'
import certificate from '../../public/images/certificate.svg'
import code from '../../public/images/code.png'

const Portifolio = ({ portifolioRef }) => {
  return (
    <section className='portifolio' ref={portifolioRef}>
      <VerticalTimeline>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2007 - 2012'
          contentStyle={{ background: '#00aaaa', color: '#fff' }}
          iconStyle={{ background: '#fff', color: '#fff' }}
          icon={
            <Image src={education} alt='Education Icon' />
          }
        >
          <h3 className='vertical-timeline-element-title'>PUC Minas</h3>
          <h4 className='vertical-timeline-element-subtitle'>Bachelor`s Degree - Information Systems</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='2010 - 2013'
          contentStyle={{ background: '#00aaaa', color: '#fff' }}
          iconStyle={{ background: '#fff', color: '#fff' }}
          icon={
            <Image src={work} alt='Working Icon' />
          }
        >
          <h3 className='vertical-timeline-element-title'>SLIIC</h3>
          <h4 className='vertical-timeline-element-subtitle'>Systems Analyst</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='2013 - 2015'
          contentStyle={{ background: '#00aaaa', color: '#fff' }}
          iconStyle={{ background: '#fff', color: '#fff' }}
          icon={
            <Image src={work} alt='Working Icon' />
          }
        >
          <h3 className='vertical-timeline-element-title'>Capgemini</h3>
          <h4 className='vertical-timeline-element-subtitle'>Systems Analyst</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2013 - 2014'
          contentStyle={{ background: '#00aaaa', color: '#fff' }}
          iconStyle={{ background: '#fff', color: '#fff' }}
          icon={
            <Image src={education} alt='Education Icon' />
          }
        >
          <h3 className='vertical-timeline-element-title'>PUC Minas</h3>
          <h4 className='vertical-timeline-element-subtitle'>Postgraduate Course - Web Applications Development</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='2015 - 2016'
          contentStyle={{ background: '#00aaaa', color: '#fff' }}
          iconStyle={{ background: '#fff', color: '#fff' }}
          icon={
            <Image src={work} alt='Working Icon' />
          }
        >
          <h3 className='vertical-timeline-element-title'>Squadra Tecnologia</h3>
          <h4 className='vertical-timeline-element-subtitle'>Development Analyst</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='2016 - 2018'
          contentStyle={{ background: '#00aaaa', color: '#fff' }}
          iconStyle={{ background: '#fff', color: '#fff' }}
          icon={
            <Image src={work} alt='Working Icon' />
          }
        >
          <h3 className='vertical-timeline-element-title'>Lett Insights</h3>
          <h4 className='vertical-timeline-element-subtitle'>Scrum Master / Full-Stack Developer</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='2018 - 2020'
          contentStyle={{ background: '#00aaaa', color: '#fff' }}
          iconStyle={{ background: '#fff', color: '#fff' }}
          icon={
            <Image src={work} alt='Working Icon' />
          }
        >
          <h3 className='vertical-timeline-element-title'>Hotmart</h3>
          <h4 className='vertical-timeline-element-subtitle'>Front-end Developer</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2018'
          contentStyle={{ background: '#00aaaa', color: '#fff' }}
          iconStyle={{ background: '#fff', color: '#fff' }}
          icon={
            <Image src={certificate} alt='Certificate Icon' margin={'10%'}/>
          }
        >
          <h3 className='vertical-timeline-element-title'>Scrum.org</h3>
          <h4 className='vertical-timeline-element-subtitle'>
            <a href="https://www.credly.com/badges/6e801485-b19d-47e9-adaa-89caa7b25571" target='_blank' rel='noopener noreferrer'>
              PSM - Professional Scrum Master
            </a>
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='2020 - 2021'
          contentStyle={{ background: '#00aaaa', color: '#fff' }}
          iconStyle={{ background: '#fff', color: '#fff' }}
          icon={
            <Image src={work} alt='Working Icon' />
          }
        >
          <h3 className='vertical-timeline-element-title'>Arbeit Software</h3>
          <h4 className='vertical-timeline-element-subtitle'>Senior Front-end Developer</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='2021 - 2021'
          contentStyle={{ background: '#00aaaa', color: '#fff' }}
          iconStyle={{ background: '#fff', color: '#fff' }}
          icon={
            <Image src={work} alt='Working Icon' />
          }
        >
          <h3 className='vertical-timeline-element-title'>Localiza</h3>
          <h4 className='vertical-timeline-element-subtitle'>Senior Software Developer</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='2021 - 2021'
          contentStyle={{ background: '#00aaaa', color: '#fff' }}
          iconStyle={{ background: '#fff', color: '#fff' }}
          icon={
            <Image src={work} alt='Working Icon' />
          }
        >
          <h3 className='vertical-timeline-element-title'>Kyte</h3>
          <h4 className='vertical-timeline-element-subtitle'>Senior Front-end Developer</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2021'
          contentStyle={{ background: '#00aaaa', color: '#fff' }}
          iconStyle={{ background: '#fff', color: '#fff' }}
          icon={
            <Image src={certificate} alt='Certificate Icon' />
          }
        >
          <h3 className='vertical-timeline-element-title'>EF Standard English Test (EF SET)</h3>
          <h4 className='vertical-timeline-element-subtitle'>
            <a href="https://www.efset.org/cert/SLdq8B" target='_blank' rel='noopener noreferrer'>
              EF SET Certificate™ - C2 Proficient
            </a>
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2021 - 2022'
          contentStyle={{ background: '#00aaaa', color: '#fff' }}
          iconStyle={{ background: '#fff', color: '#fff' }}
          icon={
            <Image src={education} alt='Education Icon' />
          }
        >
          <h3 className='vertical-timeline-element-title'>PUC Minas</h3>
          <h4 className='vertical-timeline-element-subtitle'>Postgraduate Course - UX Design and Agile Frameworks</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: '#000084', color: '#fff' }}
          icon={
            <Image src={code} alt='Code Icon' />
          }
        />
      </VerticalTimeline>
    </section>
  );
};

export default Portifolio;
