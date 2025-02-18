import { RiReactjsLine } from 'react-icons/ri';
import { SiTypescript, SiTailwindcss, SiPostgresql, SiPython } from 'react-icons/si';

const Technologies = () => {
    return (
        <div className="pb-24">
            <h2 className='my-20 text-center text-4xl'> Technologies </h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="p-4">
                    <RiReactjsLine className='text-7xl text-cyan-400' />
                </div>
                <div className="p-4">
                    <SiTypescript className='text-7xl text-blue-500' />
                </div>
                <div className="p-4">
                    <SiTailwindcss className='text-7xl text-teal-400' />
                </div>
                <div className="p-4">
                    <SiPython className='text-7xl text-yellow-400' />
                </div>
                <div className="p-4">
                    <SiPostgresql className='text-7xl text-blue-700' />
                </div>
            </div>
        </div>
    );
};

export default Technologies;
