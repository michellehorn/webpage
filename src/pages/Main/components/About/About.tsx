import './About.style.scss';

const About = ({ id }: { id: string }) => {
  const text = `Hi, my name is Michelle Horn, I’m a front-end developer, with about 6
    years of experience. I’m from Florianópolis/BR where I currently live.
    During my journey, I’ve worked with the top 3 front-end technologies
    (Angular 2+, Reactjs and Vuejs), besides having solid knowledge in base
    technologies (html, css, javascript). I love the education field and have
    big involvement with the cause. Personally, I define myself as a “Nuttela
    nerd”, cause even tho I love technology, Star Wars, super heroes and
    games, I also love going to the bar to drink some beer with friends.`;

  return (
    <section id={id} className='about-me--container'>
      <p>{text}</p>
    </section>
  );
};

export { About as default };
