import React, { useEffect, useState } from 'react'


export const Projectdevelopedby = () => {
  const [projectcontent, setProjectcontent] = useState([]);
  useEffect(() => {

    async function projectcontents() {

      const projectdevdata = await fetch('https://sanctorum.in/wp-sanctorum/wp-json/wp/v2/pages/33');
      const projectdevdatas = await projectdevdata.json();
      setProjectcontent(projectdevdatas.acf);
    }
    projectcontents();
  }, [])
  return (
    <section id="project-developed">
      <div className="container">

        <h3>{projectcontent.project_developed_by}</h3>

        <div className='logo-wrapper'>
        {projectcontent && projectcontent.project_developed_logo_1&& 
          <div className='right-logos'> <img src={projectcontent.project_developed_logo_1} alt='Rajat' /> </div>
        }
        {projectcontent && projectcontent.project_developed_logo_2&&    
          <div className='left-logos'>  <img src={projectcontent.project_developed_logo_2} alt='Eden' />   </div>
        }
        </div>
        <div className='clear'></div>

        {/* <div className='explore-more'> 
        <a href={projectcontent.project_developed_button_url}> {projectcontent.project_developed_button_name} </a>
         
         </div> */}



      </div>

    </section>
  )
}
