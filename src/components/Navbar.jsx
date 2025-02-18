

import { FaLinkedin, FaGithub } from "react-icons/fa"

const Navbar = () => {
    return (
        <nav>
            <div className="flex items-center justify-between py-6">
                <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
                    <a href="https://www.linkedin.com/in/guilherme-pittner/" target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'> <FaLinkedin /> </a>
                    <a href="https://github.com/GuilhermePittner" target='_blank' rel='noopener noreferrer' aria-label='GitHub'> <FaGithub /> </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
