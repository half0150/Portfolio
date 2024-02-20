import React from "react"
import { BsFillMoonStarsFill } from 'react-icons/bs';
import {
  AiFillGithub,
  AiFillLinkedin
} from 'react-icons/ai';
import Image from 'next/image';
import deved from '../../public/deved.png';
import sun from '../../public/sun-front-gradient.png';
import pin from '../../public/pin-front-gradient.png';
import chat from '../../public/chat-text-front-gradient.png';

export default function Home() {
  return (
    <div>
      <main className='bg-white px-10'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl'>Halfdan Monie</h1>
            {/* <h1 className="text-xl">+45 53 67 14 00</h1> */}
            {/* <h1 className="text-xl">half0150@edu.sde.dk</h1> */}
            <ul className='flex items-center'>
              <li className='text-black'>
                <BsFillMoonStarsFill
                  className='cursor-pointer text-2xl'
                />
              </li>
              <li>
                <a href='#' className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'>
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 mb-6'>Halfdan Monie</h2>
            <h3 className='text-2xl py-2'>Datatekniker med speciale i programmering</h3>
            <p className='text-md py-5 leading-8 text-gray-800'>Syddansk Erhvervsskole</p>
          </div>
          <div className='text-5xl flex justify-center gap-10 py-3 text-gray-600'>
            <AiFillGithub href="https://github.com/half0150" />
            <AiFillLinkedin href="https://www.linkedin.com/in/halfdan-karlsen-monie-36b049251/" />
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mb-12 mt-20 overflow-hidden'>
            <Image src={deved} alt="avatar_of_HM" layout='fill' objectFit='cover' />
          </div>
        </section>


        <section>
          <div className="pb-8 text-center">
            <h3 className='text-3xl py-1 pb-6'>Erhvervserfaringer</h3>
            <p>2022 – Nu Restaurant Gringas (Opvasker)</p>
            <p>2020/10 – 2022/10 Sportsforretning i Odense (Opstrenger)
            </p>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={pin} alt="pin" width={100} height={100} className="inline" />
              <h3 className='text-lg font-medium pt-8 pb-2'>
                IT-kompetencer
              </h3>
              <p className="text-gray-800 py-1">Officepakken: Bruger Word og kan anvende flere af de funktioner som der tilgængeligt.</p>
              <p className="text-gray-800 py-1">Windows 10/11: Kan bruge Windows og kender til mange af deres indstillinger.</p>
              <p className="text-gray-800 py-1">VmWare: Har brugt VmWare i min undervisning på Grundforløbet.</p>
              <p className="text-gray-800 py-1">Visual Code: Har brugt det i undervisningen og bruger det i mange af mine projekter.</p>
              <p className="text-gray-800 py-1">NetBeans: Har brugt det til mine PHP-projekter.</p>
              <p className="text-gray-800 py-1">Visual Studio: Har brugt det i undervisningen og bruger det i mange af mine projekter.</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={chat} alt="chat" width={100} height={100} className="inline" />
              <h3 className='text-lg font-medium pt-8 pb-2'>
                Sprog
              </h3>
              <p className="text-gray-800 py-1">Engelsk: Kan skrive og kommunikere med andre.</p>
              <p className="text-gray-800 py-1">Dansk: Snakker flydende Dansk. kan skrive og kommunikere med andre.</p>
              <p className="text-gray-800 py-1">Skandinavisk: Kan forstå noget svensk</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={sun} alt="sun" width={100} height={100} className="inline" />
              <h3 className='text-lg font-medium pt-8 pb-2'>
                Fritidsinteresser
              </h3>
              <p className="text-gray-800 py-1">Går til Badminton i min fritid to gange om ugen i Odense Badminton Klub. Har spillet i ca. 10 år</p>
              <p className="text-gray-800 py-1">Kan godt lide at se krimi, gyser, komedie film & serier</p>
              <p className="text-gray-800 py-1">Elsker at lytte til musik som fx The Beatles.</p>
            </div>
          </div>
        </section>
      </main>
    </div >
  );
}
