import profile from '../assets/profile.png'

function Container() {
  return (
    <div className="grid min-h-screen justify-center items-start px-4 py-12 sm:py-20">
      <div className="flex flex-row gap-6 md:gap-12 border rounded-xl p-16">

        <div className="flex flex-col items-center gap-4 text-gray-700 text-xl">
          <img className="rounded-full w-[80px] h-[80px] object-cover select-none" src={profile} alt="profile-image"></img>
          <h1>Alexander Shevchuk</h1>
          <hr className='w-full'></hr>
          <p className='max-w-sm text-sm'>Hello there my name is</p>
        </div>
        <div className="flex flex-col gap-2 text-md text-gray-700 select-none">

          <span className='text-xl mb-2'>Backend Engineer</span>
          <p className='max-w-md'>
            Backend engineer building an agentic financial assistant
            Backend engineer building an agentic financial assistant
            Backend engineer building an agentic financial assistant
            Backend engineer building an agentic financial assistant
          </p>
      
        
        
        <hr></hr>

        <nav className='flex flex-col md:flex-row justify-center gap-6 text-gray-800 underline '>
          <a href="https://github.com/osod-b" target="_blank" rel="noopener noreferrer" className='hover:text-blue-800' aria-label="git">GitHub</a>
          <a href="https://www.linkedin.com/" className='hover:text-blue-800' target="_blank" rel="noopener noreferrer" aria-label="linkedin">LinkedIn</a>
          <a href="https://leetcode.com/u/nK1aZF1vVc" target="_blank" rel="noopener noreferrer" className='hover:text-blue-800' aria-label="leet">LeetCode</a>
        </nav>

        <hr></hr>
        <h2>Summary</h2>

        <hr></hr>

        <h2>Links</h2>

        <hr></hr>

        <h3>Skills</h3>
        <ul className='flex flex-col justify-center md:justify-start md:flex-row gap-2 text-gray-900'>
          <li>Python</li>
          <li>Redis</li>
          <li>Docker</li>
          <li>FastAPI</li>
          <li>SQL/SQLAlchemy</li>
        </ul>
        <hr></hr>

        <h3>Tools</h3>
        <ul>
          <li>Pydantic</li>
        </ul>

        <hr></hr>
        <h4>Languages</h4>
        <ul className='flex flex-col md:flex-row gap-6 list-disc marker:text-green-700 text-gray-900'>
          <li>English - B2</li>
          <li>Ukrainian - NL</li>
          <li>German A-2</li>
          <li>Rusian - C2</li>
        </ul>
        <hr></hr>
        <h4>Projects</h4>
        <ul className='gap-2 text-gray-900 list-disc marker:text-green-700'>
          <li>FastAPI Backend with a self-written Auth, MFA</li>
          <li>React Vite, Tailwind FrontEnd with REST API</li>
        </ul>
        

        </div>
      </div>
    </div>
  );
}

export default Container;