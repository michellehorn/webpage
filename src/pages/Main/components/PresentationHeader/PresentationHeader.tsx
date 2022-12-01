import img from '../../../../assets/images/carbon_small.png';
import img_mobile from '../../../../assets/images/carbon_mobile.png';
import './PresentationHeader.style.scss';
import { isMobile } from 'react-device-detect';

export const PresentationHeader = ({ id }: { id: string }) => {
  return (
    <section id={id} className='presentation-header--container'>
      <img
        className='presentation-header--carbon-code'
        src={isMobile ? img_mobile : img}
        alt='carbon code'
      />
    </section>
  );
};
