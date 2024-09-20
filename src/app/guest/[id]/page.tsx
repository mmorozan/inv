"use client";
import Image from "next/image";

import preparedData from "@/data/preparedData";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { clsx } from "clsx";
import { Suspense } from "react";
import { Metadata } from "next";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Roboto } from 'next/font/google'
import classnames from'classnames';
const roboto = Roboto({ subsets: ['cyrillic'], weight: "400" })
// export const metadata: Metadata = {
//   title: "Список гостей",
//   description: "",
//   openGraph: {
//     title: "Список гостей",
//   },
// };

type LabelProps = {
  colorCode: string;
  children: React.ReactNode;
};

const Label = ({ colorCode, children }: LabelProps) => {
  return (
    <span
      className={`text-xl inline-block text-${colorCode} text-${colorCode}-500`}
    >
      {children}
    </span>
  );
};

type ValueProps = {
  children: React.ReactNode;
  className?: string;
};

const Value = ({ children, className }: ValueProps) => {
  return (
    <span className={clsx("text-lg inline-block", className)}>{children}</span>
  );
};

type MapIconProps = {
  colorCode: string;
};

export default function Guest({ params }: { params: { id: string } }) {
    const router = useRouter();
    
  const person = preparedData.find((item) => item.id === params.id);
  if (!person) {
    return (
      <div>
        <h1>404</h1>
      </div>
    );
  }
  return (
    <main className={classnames("h-full  min-h-screen flex  justify-center p-10 bg-gradient-to-b from-sky-300 to-fuchsia-300 text-white overflow-hidden", roboto.className)}>
      <div className="hidden shadow-red-500 shadow-amber-500 shadow-gray-500 shadow-pink-500 shadow-green-500 shadow-purple-500 shadow-orange-500 shadow-blue-500 shadow-black"></div>
      <div className="hidden ring-red-500 ring-amber-500 ring-gray-500 ring-pink-500 ring-green-500 ring-purple-500 ring-orange-500 ring-blue-500 ring-black"></div>
      <div className="hidden text-red-500 text-amber-500 text-gray-500 text-pink-500 text-green-500 text-purple-500 text-orange-500 text-blue-500 text-black"></div>
      <div className="hidden bg-red-500/50 bg-amber-500/50 bg-gray-500/50 bg-pink-500/50 bg-green-500/50 bg-purple-500/50 bg-orange-500/50 bg-blue-500/50 bg-black/10"></div>
      <div className="hidden bg-red-500 bg-amber-500 bg-gray-500 bg-pink-500 bg-green-500 bg-purple-500 bg-orange-500 bg-blue-500 bg-black"></div>
      <div className="hidden border-red-500 border-amber-500 border-gray-500 border-pink-500 border-green-500 border-purple-500 border-orange-500 border-blue-500 border-black"></div>
      <div
        key={person.id}
        className={`h-full w-full drop-shadow-xl bg-${person.colorCode}/10 bg-${person.colorCode}-500/50 rounded-xl backdrop-blur-md p-10 text-center flex flex-col max-w-md border-2 border-${person.colorCode} border-${person.colorCode}-500`}
      >
        <span
          className={`text-3xl font-bold inline-block text-${person.colorCode} text-${person.colorCode}-500`}
        >
          {person.name}
        </span>
        <div
          className={`flex justify-center h-44 w-44 mx-auto items-center overflow-hidden mt-2 rounded-full ring-2 ring-${person.colorCode} ring-${person.colorCode}-500 shadow-md shadow-${person.colorCode}-500 shadow-${person.colorCode}`}
        >
          <Image src={person.photo} width={240} alt="photo" />
        </div>
        <div className="mt-2 flex flex-col">
          <Label colorCode={person.colorCode}>Профессия</Label>
          <Value>{person.profession}</Value>
        </div>
        <div className="mt-2 flex flex-col">
          <Label colorCode={person.colorCode}>Думает что будет</Label>
          <Value>{person.gender}</Value>
        </div>
        <div className="mt-2 flex flex-col">
          <Label colorCode={person.colorCode}>Хобби</Label>
          <Value>{person.hobby}</Value>
        </div>
        <div className="mt-2 flex flex-col">
          <Label colorCode={person.colorCode}>О себе</Label>
          <span className={"text-sm inline-block"}>{person.about}</span>
        </div>
        {/* <Link href="/" className="mt-auto">  */}
          <button
            className={`mt-auto bg-${person.colorCode} bg-${person.colorCode}-500 rounded-full p-2 w-full`} onClick={() => router.back()}
          >
            Назад
          </button>
        {/* </Link> */}
      </div>
    </main>
  );
}
