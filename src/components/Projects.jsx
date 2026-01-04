import {listTools, listProyek} from "../data";

const Projects = () => {
	return (
		<div className="project mt-25 py-10" id="project">
        <h1 className=" text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Project</h1>
        <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Below are some of the projects I have worked on</p>
        <div className="project-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((proyek) =>(
             <div key={proyek.id} className="p-4 bg-zinc-800 rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad} data-aos-once="true">
             <img src={proyek.gambar} alt="Project Image" loading="lazy" />
             <div>
              <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
              <p className="text-base/loose mb-4">{proyek.desk}</p>
              <div className="flex flex-wrap gap-2">
                {proyek.tools.map((tool, index) => (
                  <p className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold" key={index}>{tool}</p>
                ))}
              </div>
              <div className="mt-8 text-center">
                <a href="#" className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600">See Website</a>
              </div>
             </div>
           </div>
          ))}
        </div>
      </div>
	)
}

export default Projects