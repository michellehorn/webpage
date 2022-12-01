import './Contact.style.scss';
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon
} from '../../../../components/Icons';

const Contact = () => {
  const list = [
    {
      title: 'Linkedin',
      link: 'https://linkedin.com/in/michelle-horn',
      icon: <LinkedinIcon />
    },
    {
      title: 'Twitter',
      link: 'https://twitter.com/devmichellehorn',
      icon: <TwitterIcon />
    },
    {
      title: 'Github',
      link: 'https://github.com/michellehorn',
      icon: <GithubIcon />
    }
  ];
  return (
    <footer className='contact--container'>
      {list.map((item) => (
        <a href={item.link} target='_blank' rel='noreferrer' title={item.title}>
          {item.icon}
        </a>
      ))}
    </footer>
  );
};

export { Contact as default };
