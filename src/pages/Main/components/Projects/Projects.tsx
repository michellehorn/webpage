import { useEffect, useState } from 'react';
import Card from './components/Card';
import api from '../../../../services/api';
import './Projects.style.scss';

const Projects = ({ id }: { id: string }) => {
  const [projects, setProjects] = useState([]);

  const getProjectsFromGithub = async () => {
    let { data } = await api.get('users/michellehorn/repos?per_page=20&page=1');

    setProjects(data);
  };

  useEffect(() => {
    getProjectsFromGithub();
  }, []);

  return (
    <div id={id} className='projects--container'>
      {projects.length === 0 ? (
        <div>
          This part of the website use github api. This message means it's down
          :(
        </div>
      ) : (
        <div className='projects--content'>
          {projects.map((p: any) => (
            <Card data={p} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
