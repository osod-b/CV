import profile from '../assets/profile.png'

function Container() {
  return (
    <div className="grid min-h-screen justify-center items-start px-4 py-12 sm:py-20 mt-80 pt-80 md:px-40 md:mt-0">
      <div className="flex flex-col md:flex-row gap-6 md:gap-12 border rounded-xl p-16">

        <div className="flex flex-col items-center gap-4 text-gray-700 text-xl shrink-0 md:w-48">

          <img className="rounded-full w-[80px] h-[80px] object-cover select-none" src={profile} alt="profile-image"></img>
          <h1>Alexander Shevchuk</h1>
          <hr className='w-full'></hr>
          <p className='max-w-sm text-xs self-start text-gray-600'>Writing</p>
        </div>
        <div className="flex flex-col gap-2 text-md text-gray-700 select-none min-w-0 flex-1">

          <span className='text-xl mb-2'>Software Engineer</span>
          <hr className='w-full'></hr>
          <p className='max-w-md'>
            Backend engineer with certain hands-on experience bulding REST API's using FastAPI.
            Currently focused on developing my skills, while building projects.
          </p>
      
        <hr className='w-full'></hr>
        <nav className='flex flex-col md:flex-row justify-center gap-6 text-gray-800 underline my-0 md:my-2'>
          <a href="https://github.com/osod-b" target="_blank" rel="noopener noreferrer" className='hover:text-blue-800' aria-label="git">GitHub</a>
          <a href="https://www.linkedin.com/" className='hover:text-blue-800' target="_blank" rel="noopener noreferrer" aria-label="linkedin">LinkedIn</a>
          <a href="https://leetcode.com/u/nK1aZF1vVc" target="_blank" rel="noopener noreferrer" className='hover:text-blue-800' aria-label="leet">LeetCode</a>
        </nav>

        

        <hr className='w-full'></hr>

        <h3>Skills</h3>
        <ul className='flex flex-col justify-center md:justify-start md:flex-row gap-2 text-gray-900'>
          <li>Python</li>
          <li>Redis</li>
          <li>Linux</li>
          <li>Docker</li>
          <li>FastAPI</li>
          <li>SQL/SQLAlchemy</li>
        </ul>
        <hr className='w-full'></hr>

        <h3>Tools</h3>
        <ul className='flex flex-col justify-center md:justify-start md:flex-row gap-2 text-gray-900'>
          <li>Pydantic</li>
          <li>Asyncio</li>
        </ul>

        <hr className='w-full'></hr>
        <h4>Languages</h4>
        <ul className='flex flex-col pl-2 md:flex-row gap-6 list-disc text-gray-900'>
          <li>English B2</li>
          <li>Ukrainian NL</li>
          <li>German A2</li>
          {/* <li>Russian C2</li> */}
        </ul>
        <hr className='w-full'></hr>
        <h4>Projects</h4>
        <ul className='gap-2 pl-2 text-gray-900 list-disc'>
    
          <li><span>FastAPI Backend with JWT auth, MFA, Redis caching and Docker deployment</span></li>
          <li className='list-none py-1 md:pt-2'><a href='https://github.com/osod-b/fastAPI-backend' className='text-blue-900 hover:text-blue-700' target='_blank' rel="noopener noreferrer" aria-label='p-link'> Link </a></li>
          <li><span>React JS Frontend (Vite, Tailwind) integrated with REST API, and Form validation</span></li>
          <li className='list-none py-1 md:pt-2'><a href='https://github.com/osod-b/-fastAPI-react-landing' className='text-blue-900 hover:text-blue-700' target='_blank' rel="noopener noreferrer" aria-label='p-link'> Link </a> </li>
        </ul>
        

        </div>
      </div>
    </div>
  );
}

export default Container;