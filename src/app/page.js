import React from "react"
import { BsFillMoonStarsFill } from 'react-icons/bs';
import {
  AiFillGithub,
  AiFillLinkedin
} from 'react-icons/ai';
import Image from 'next/image';
import deved from '../../public/deved.png';
import design from '../../public/design.png';

export default function Home() {
  return (
    <div>
      <main className='bg-white px-10'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons'>Halfdan Monie</h1>
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
            <h2 className='text-5xl py-2 text-teal-600'>Halfdan Monie</h2>
            <h3 className='text-2xl py-2'>Datatekniker med speciale i programmering</h3>
            <p className='text-md py-5 leading-8 text-gray-800'>Syddansk Erhvervsskole</p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <AiFillGithub />
            <AiFillLinkedin />
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden'>
            <Image src={deved} alt="design" layout='fill' objectFit='cover' />
          </div>
        </section>


        <section>
          <div className="pb-8 text-center">
            <h3 className='text-3xl py-1 pb-6'>Erhvervserfaringer</h3>
            <p>2022 – Nu Restaurant Gringas (Opvasker)</p>
            <p>2020/10 – 2022/10 Sportsforretning i Odense (Opstrenger)
            </p>
            <div className="text-center">
              <Image src={design} alt="avatar_of_HM" width={100} height={100} className="inline" />
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
          </div>
        </section>
      </main>
    </div >
  );
}
