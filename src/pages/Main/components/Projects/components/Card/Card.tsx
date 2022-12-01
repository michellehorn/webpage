import { useEffect, useState } from 'react';
import { getLanguages } from '../../../../../../services/api';
import './Card.style.scss';
import jsIco from '../../../../../../assets/images/techs/javascript.png';
import htmlIco from '../../../../../../assets/images/techs/html.png';
import cssIco from '../../../../../../assets/images/techs/css.png';
import vueIco from '../../../../../../assets/images/techs/vue.png';
import tsIco from '../../../../../../assets/images/techs/typescript.png';
import sassIco from '../../../../../../assets/images/techs/sass.png';

const Card = ({ data }: { data?: any }) => {
  const [project, setProject] = useState({
    name: data.name || 'nomedoprojeto',
    url: data.html_url || 'https://github.com/michellehorn',
    description: data.description || 'Teste de descrição',
    lang: [''],
    owner: {
      login: data.owner.login
    }
  });

  const getLanguagesFromProject = async (name: string) => {
    const lang = await getLanguages(name);
    let langs: Array<string> = [];
    Object.keys(lang.data).map((l) => langs.push(l));
    setProject({ ...project, lang: langs });
  };

  useEffect(() => {
    getLanguagesFromProject(data.name);
  }, [data.name]);

  const handleClick = () => window.open(project.url, '_blank');

  const getIcon = (lang: string) =>
    ({
      JavaScript: <img src={jsIco} alt='javascript icon' />,
      HTML: <img src={htmlIco} alt='html icon' />,
      CSS: <img src={cssIco} alt='css icon' />,
      Vue: <img src={vueIco} alt='vue icon' />,
      TypeScript: <img src={tsIco} alt='typescript icon' />,
      SCSS: <img src={sassIco} alt='sass icon' />
    }[lang] || null);

  if (
    project.owner.login !== 'michellehorn' ||
    project.lang[0] === '' ||
    project.name === 'michellehorn' ||
    project.name === 'tuliostarling'
  )
    return null;

  return (
    <div
      className='card--container'
      onClick={handleClick}
      role='button'
      title={project.description}
    >
      <span>{project.name}</span>
      <div className='card--lang-container'>
        {project.lang.map((l) => (
          <span className='card--lang-tag' title={l}>
            {getIcon(l)}
          </span>
        ))}
      </div>
    </div>
  );
};

export { Card as default };
