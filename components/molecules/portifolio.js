import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import Image from 'next/image';

import PucMinasIcon from '../../public/images/pucminas.png'

const Portifolio = ({ portifolioRef }) => {
  return (
    <section className='portifolio' ref={portifolioRef}>
      <VerticalTimeline>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2007 - 2012'
          contentStyle={{ background: '#00aaaa', color: '#fff' }}
          iconStyle={{ background: 'white', color: '#fff' }}
        >
          <h3 className='vertical-timeline-element-title'>Bachelor Degree</h3>
          <h4 className='vertical-timeline-element-subtitle'>Pontifícia Universidade Católica de Minas Gerais - PUC Minas</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='2010 - 2013'
          contentStyle={{ background: '#00aaaa', color: '#fff' }}
          iconStyle={{ background: 'white', color: '#fff' }}
        >
          <h3 className='vertical-timeline-element-title'>Systems Analyst</h3>
          <h4 className='vertical-timeline-element-subtitle'>Sliic Systems</h4>
          <p>Projects Developed: Sliic Portal, Seqtra Portal, Sliic Web and Sliic ERP</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='2013 - 2015'
          contentStyle={{ background: '#00aaaa', color: '#fff' }}
          iconStyle={{ background: 'white', color: '#fff' }}
        >
          <h3 className='vertical-timeline-element-title'>Systems Analyst</h3>
          <h4 className='vertical-timeline-element-subtitle'>Capgemini</h4>
          <p>Projects Developed: IPVA Mobile, ITCD, ANP - SIATA, ANP - SQD, ANP - MCE</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }} />
      </VerticalTimeline>
    </section>
  );
};

export default Portifolio;
