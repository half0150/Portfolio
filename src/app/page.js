import React from "react";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
import deved from "../../public/deved.png";
import sun from "../../public/sun-front-gradient.png";
import pin from "../../public/pin-front-gradient.png";
import phone from "../../public/phone-only-front-gradient.png";
import chat from "../../public/chat-text-front-gradient.png";

export default function Home() {
  return (
    <div>
      <main className="px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">

          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md-text-6xl">
              Halfdan Monie
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">
              Datatekniker med speciale i programmering
            </h3>
            <p className="text-md py-5 leading-8  md:text-xl">
              Syddansk Erhvervsskole
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-10 py-3 text-gray-600">
            <Link href={"https://github.com/half0150"}><AiFillGithub /></Link>
            <Link href={"https://www.linkedin.com/in/halfdan-karlsen-monie-36b049251"}><AiFillLinkedin /></Link>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mb-12 mt-20 overflow-hidden">
            <Image
              src={deved}
              alt="avatar_of_HM"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>

        <section>
          <div className="pb-8 text-center">
            <h3 className="text-3xl py-1 pb-6">Erhvervserfaringer</h3>
            <p>2022 – Nu Restaurant Gringas (Opvasker)</p>
            <p>2020/10 – 2022/10 Sportsforretning i Odense (Opstrenger)</p>
            <div className="lg:flex gap-10">
              <div className="text-center shadow-lg p-10 rounded-xl my-10">
                <Image
                  src={pin}
                  alt="pin"
                  width={100}
                  height={100}
                  className="inline"
                />
                <h3 className="text-lg font-medium pt-8 pb-2">
                  IT-kompetencer
                </h3>
                <p className=" py-1">
                  <p className="text-teal-600">C#:</p> Har arbejdet med console app og Wpf.
                </p>
                <p className=" py-1">
                  <p className="text-teal-600">VmWare:</p> Har brugt VmWare på
                  Grundforløbet.
                </p>
                <p className=" py-1">
                  <p className="text-teal-600">Visual Code:</p> Har brugt det i
                  undervisningen og bruger det i mange af mine projekter.
                </p>
                <p className=" py-1">
                  <p className="text-teal-600">NetBeans:</p> Har brugt det til
                  mine PHP-projekter.
                </p>
                <p className=" py-1">
                  <p className="text-teal-600">Visual Studio:</p> Har brugt det
                  i undervisningen og bruger det i mange af mine projekter.
                </p>
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10">
                <Image
                  src={phone}
                  alt="phone"
                  width={100}
                  height={100}
                  className="inline"
                />
                <h3 className="text-lg font-medium pt-8 pb-2">
                  Kontakt
                </h3>
                <p className=" py-1">
                  <p className="text-teal-600">Tlf:</p> +45 53 67 14 00
                </p>
                <p className=" py-1">
                  <p className="text-teal-600">Email:</p> half0150@edu.sde.dk
                </p>
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10">
                <Image
                  src={chat}
                  alt="chat"
                  width={100}
                  height={100}
                  className="inline"
                />
                <h3 className="text-lg font-medium pt-8 pb-2">Sprog</h3>
                <p className=" py-1">
                  <p className="text-teal-600">Engelsk:</p> Kan skrive og
                  kommunikere med andre.
                </p>
                <p className=" py-1">
                  <p className="text-teal-600">Dansk:</p> Snakker flydende
                  Dansk. kan skrive og kommunikere med andre.
                </p>
                <p className=" py-1">
                  <p className="text-teal-600">Skandinavisk:</p> Kan forstå
                  noget svensk
                </p>
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10">
                <Image
                  src={sun}
                  alt="sun"
                  width={100}
                  height={100}
                  className="inline"
                />
                <h3 className="text-lg font-medium pt-8 pb-2">
                  Fritidsinteresser
                </h3>
                <p className=" py-1">
                  <p className="text-teal-600">Badminton:</p>Har spillet badminton i ca. 10 år
                  spillet i ca. 10 år
                </p>
                <p className=" py-1">
                  <p className="text-teal-600">Film & Serier</p>Kan godt lide at
                  se krimi, gyser, komedie film & serier
                </p>
                <p className=" py-1">
                  <p className="text-teal-600">Musik</p>Elsker at lytte til
                  musik som fx The Beatles.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
