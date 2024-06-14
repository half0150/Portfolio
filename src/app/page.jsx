"use client";
import React from "react";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Image from "next/legacy/image";
import deved from "../../public/deved.png";
import sun from "../../public/sun-front-gradient.png";
import pin from "../../public/pin-front-gradient.png";
import phone from "../../public/phone-only-front-gradient.png";
import chat from "../../public/chat-text-front-gradient.png";
import budgetCalc from "../../public/budgetCalc.png";
import carApi from "../../public/carApi.png";
import noImage from "../../public/noImage.jpg";
import laravelTool from "../../public/laravelTool.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import EducationTimeline from "./components/education/EducationTimeline";
import ContactInfo from "./contact/ContactInfo";

export default function Home() {
  return (
    <div>
      <main className="px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Halfdan Monie
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">
              Datatekniker med speciale i programmering
            </h3>
            <p className="text-md py-5 leading-8 md:text-xl">
              Syddansk Erhvervsskole
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-10 py-3 text-gray-600">
            <Link href={"https://github.com/half0150"}>
              <AiFillGithub />
            </Link>
            <Link href={"https://www.linkedin.com/in/halfdan-karlsen-monie-36b049251"}>
              <AiFillLinkedin />
            </Link>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mb-12 mt-20 overflow-hidden">
            <Image src={deved} alt="avatar_of_HM" layout="fill" objectFit="cover" />
          </div>
        </section>

        <section className="pb-8 text-center">
          <h3 className="text-teal-500 text-3xl py-1 pb-6">Erhvervserfaringer</h3>
          <p>2022 – Nu Restaurant Gringas (Opvasker)</p>
          <p>2020/10 – 2022/10 Sportsforretning i Odense (Opstrenger)</p>
          <div className="lg:flex gap-10 justify-center">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 max-w-xs">
              <Image src={phone} alt="phone" width={100} height={100} className="inline" />
              <h3 className="text-lg font-medium pt-8 pb-2">Kontakt</h3>
              <ContactInfo />
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 max-w-xs">
              <Image src={pin} alt="pin" width={100} height={100} className="inline" />
              <h3 className="text-lg font-medium pt-8 pb-2">IT-kompetencer</h3>
              <p className="py-1 text-teal-600">C#: Har arbejdet med console app og Wpf.</p>
              <p className="py-1 text-teal-600">VmWare: Har brugt VmWare på Grundforløbet.</p>
              <p className="py-1 text-teal-600">Visual Code: Har brugt det i undervisningen og bruger det i mange af mine projekter.</p>
              <p className="py-1 text-teal-600">NetBeans: Har brugt det til mine PHP-projekter.</p>
              <p className="py-1 text-teal-600">Visual Studio: Har brugt det i undervisningen og bruger det i mange af mine projekter.</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 max-w-xs">
              <Image src={chat} alt="chat" width={100} height={100} className="inline" />
              <h3 className="text-lg font-medium pt-8 pb-2">Sprog</h3>
              <p className="py-1 text-teal-600">Engelsk: Kan skrive og kommunikere med andre.</p>
              <p className="py-1 text-teal-600">Dansk: Snakker flydende Dansk. kan skrive og kommunikere med andre.</p>
              <p className="py-1 text-teal-600">Skandinavisk: Kan forstå noget svensk.</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 max-w-xs">
              <Image src={sun} alt="sun" width={100} height={100} className="inline" />
              <h3 className="text-lg font-medium pt-8 pb-2">Fritidsinteresser</h3>
              <p className="py-1 text-teal-600">Badminton: Har spillet badminton i ca. 10 år.</p>
              <p className="py-1 text-teal-600">Film & Serier: Kan godt lide at se krimi, gyser, komedie film & serier.</p>
              <p className="py-1 text-teal-600">Musik: Elsker at lytte til musik som fx The Beatles.</p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-teal-500 text-3xl py-1 pb-6 text-center">Projekter</h3>
          <div className="max-w-lg mx-auto">
            <Carousel
              showThumbs={false}
              autoPlay
              infiniteLoop
              interval={3000}
              showStatus={false}
              stopOnHover={true}
              className="rounded-lg shadow-lg"
            >
              <div className="text-center p-10">
                <div className="relative h-64 w-full">
                  <Image src={budgetCalc} alt="BudgetToExcel" layout="fill" objectFit="cover" className="rounded-lg" />
                </div>
                <a href="https://github.com/half0150/budgetToExcel">
                  <h3 className="text-teal-500 text-lg font-medium pt-8 pb-2 underline">C# Razor Pages</h3>
                </a>
                <p className="py-1">
                  Udviklet en budgetberegningsapplikation, der eksporterer finansielle data til et Excel-ark.
                </p>
              </div>
              <div className="text-center p-10">
                <div className="relative h-64 w-full">
                  <Image src={noImage} alt="kajakklubben" layout="fill" objectFit="cover" className="rounded-lg" />
                </div>
                <h3 className="text-teal-500 text-lg font-medium pt-8 pb-2">
                  Digitalisering af kajakklubbens opslagstavle
                </h3>
                <p className="py-1">
                  Oprettet relationel database for Kajakklubben med ER-diagram, implementering af tabeller og testdata til SQL-forespørgsler.
                </p>
              </div>
              <div className="text-center p-10">
                <div className="relative h-64 w-full">
                  <Image src={carApi} alt="carApi" layout="fill" objectFit="cover" className="rounded-lg" />
                </div>
                <a href="https://github.com/half0150/cars-database">
                  <h3 className="text-teal-500 text-lg font-medium pt-8 pb-2 underline">Car Api Php</h3>
                </a>
                <p className="py-1">
                  Brugt <a className="text-teal-600 underline" href="https://api.synsbasen.dk/">synsbasen api</a> til at få data omkring biler.
                </p>
              </div>
              <div className="text-center p-10">
                <div className="relative h-64 w-full">
                  <Image src={laravelTool} alt="laravelTool" layout="fill" objectFit="cover" className="rounded-lg" />
                </div>
                <a href="https://github.com/half0150/laravel-inventory">
                  <h3 className="text-teal-500 text-lg font-medium pt-8 pb-2 underline">Laravel Tool Inventory</h3>
                </a>
                <p className="py-1">
                  Jeg har udviklet en inventarstyringsapplikation i Laravel, inklusive oprettelse af en relational database med et ER-diagram og implementering af tabeller med testdata til SQL-forespørgsler.
                </p>
              </div>
            </Carousel>
          </div>
        </section>
        <section className="mt-8">
          <EducationTimeline />
        </section>
      </main>
    </div>
  );
}
