import React from 'react'
import SkillItem from './SkillItem'
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiExpress, SiMongodb } from "react-icons/si";
import { Helmet } from 'react-helmet';
const Skills = () => {
  return (
    <div className="skill">
        <Helmet>
                <meta charSet="utf-8" />
                <title>Skills | Abdur Rahman</title>               
      </Helmet>
        <h3 className="h2 skills-title">My skills</h3>
      
     <div className='skill-ul-list'>
        <ul className="skills-list content-card">
            <p className='icon-text'>
                <FaHtml5 className='icon-html'/>
               <SkillItem title="HTML" value={98}/>
            </p>
            <p className='icon-text'>
               <FaCss3Alt className='icon-css'/>
                <SkillItem title="CSS" value={96} />
            </p>
            <p className='icon-text'>
               <SiTailwindcss className='icon-tailwind'/>
                <SkillItem title="TAILWIND CSS" value={95} />
            </p>
            <p className='icon-text'>
               <FaReact className='icon-react'/>
                <SkillItem title="REACT JS" value={90} />
            </p>
            <p className='icon-text'>
               <SiNextdotjs className='icon-next'/>
                <SkillItem title="NEXT JS" value={85} />
            </p>         
        </ul>
        <ul className="skills-list content-card">
          <p className='icon-text'>
            <FaNodeJs className='icon-node'/>
            <SkillItem title="NODE JS" value={85} />
          </p>
          <p className='icon-text'>
            <SiExpress className='icon-express'/>
            <SkillItem title="EXPRESS JS" value={95} />
         </p>
         <p className='icon-text'>
            <SiMongodb className='icon-db'/>
            <SkillItem title="MONGODB" value={85} />
         </p>
         <p className='icon-text'>
            <SiMongodb className='icon-mysql'/>
            <SkillItem title="MYSQL" value={95} />
         </p>
         <p className='icon-text'>
            <SiMongodb className='icon-prisma'/>
            <SkillItem title="PRISMA" value={75} />
         </p>
        </ul>
        </div>
      </div>
    
  )
}

export default Skills