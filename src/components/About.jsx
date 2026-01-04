import {listTools} from "../data";

const About = () => {
	return (
		<div className="tentang mt-25 py-10" id="about">
      <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-gradient-to-b from-violet-900 to-zinc-900 rounded-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
        <p className="text-base/loose mb-10">
          I am a programmer has a high interest and dedication in the world of web development. Master programming languages such as HTML, JavaScript, and CSS, and be familiar with using various frameworks and libraries to build responsive and efficient applications. I always try to continue to develop by learning new languages and technologies in order to improve the quality of my work and broaden my technical horizons. For me, the world of programming is a place of endless learning, where challenges are part of the growth process.
        </p>
        <div className="flex items-center justify-between">
          <div className="w-12 rounded-md sm:block hidden"></div>
          <div className="flex items-center gap-6">
            <div>
              <h1 className="text-4xl mb-1">
                45 <span className="text-violet-500">+</span>
              </h1 >
              <p>Projek selesai</p>
            </div>
            <div>
              <h1 className="text-4xl mb-1">
                4 <span className="text-violet-500">+</span>
              </h1>
              <p>Tahun pengalaman</p>
            </div>
          </div>
        </div>
      </div>
      <div className="tools mt-45">
        <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Tools used</h1>
        <p className="xl:w-2/5 lg:w-2/4 ms:w-2/3 w-full text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Here are some tools that I usually use for website creation or design</p>
        <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listTools.map(tool => (
            <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group" key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true">
            <img src={tool.gambar} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" loading="lazy"/>
            <div>
              <h4 className="font-bold">{tool.nama}</h4>
              <p className="opacity-50">{tool.ket}</p>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
	)
}

export default About