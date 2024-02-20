"use client";
import Image from "next/image";

import preparedData from "@/data/preparedData";
import { useParams, useSearchParams } from "next/navigation";
import Link from "next/link";
import { clsx } from "clsx";
import { Suspense } from "react";
import { Metadata } from "next";

const DATE = "24.02.2024";
const TIME = "18:00";
const ADDRESS = "Бауманская улица, 50/12с1";


type LabelProps = {
  colorCode: string;
  children: React.ReactNode;
}

const Label = ({ colorCode, children }: LabelProps) => {
  return (
    <span
      className={`text-2xl inline-block mt-5 text-${colorCode} text-${colorCode}-500`}
    >
      {children}
    </span>
  );
};

type ValueProps = {
  children: React.ReactNode;
  className?: string;
}

const Value = ({ children, className }: ValueProps) => {
  return <span className={clsx("text-2xl inline-block", className)}>{children}</span>;
};

type MapIconProps = {
  colorCode: string;
}

const MapIcon = ({colorCode}: MapIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`w-6 h-6 inline-block text-${colorCode} text-${colorCode}-500`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
      />
    </svg>
  );
};

export default function Invite() {
  return (
    <Suspense>
      <InviteComponent/>
    </Suspense>
  )
}
function InviteComponent() {
  const params = useSearchParams();
  const inviteCode = params.get("inviteCode");
  const person = preparedData.find((item) => item.id === inviteCode);
  if (!inviteCode || !person) {
    return null;
  }
  return (
    <main className="h-full flex min-h-screen flex-col items-center justify-between p-10 bg-gradient-to-b from-zinc-600 to-zinc-900 text-white ">
      <div className="hidden shadow-red-500 shadow-amber-500 shadow-gray-500 shadow-pink-500 shadow-green-500 shadow-purple-500 shadow-orange-500 shadow-blue-500 shadow-black"></div>
      <div className="hidden ring-red-500 ring-amber-500 ring-gray-500 ring-pink-500 ring-green-500 ring-purple-500 ring-orange-500 ring-blue-500 ring-black"></div>
      <div className="hidden text-red-500 text-amber-500 text-gray-500 text-pink-500 text-green-500 text-purple-500 text-orange-500 text-blue-500 text-black"></div>
      <div className="hidden bg-red-500/50 bg-amber-500/50 bg-gray-500/50 bg-pink-500/50 bg-green-500/50 bg-purple-500/50 bg-orange-500/50 bg-blue-500/50 bg-black/10"></div>
      <div className="hidden bg-red-500 bg-amber-500 bg-gray-500 bg-pink-500 bg-green-500 bg-purple-500 bg-orange-500 bg-blue-500 bg-black"></div>
      <div className="hidden border-red-500 border-amber-500 border-gray-500 border-pink-500 border-green-500 border-purple-500 border-orange-500 border-blue-500 border-black"></div>

      {/* <div className="h-full w-full drop-shadow-xl bg-gradient-to-b from-zinc-500 to-zinc-700 rounded-xl backdrop-blur-md p-10 text-center flex flex-col max-w-md"> */}
      <div
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
        <span className="text-xl inline-block mt-2">
          Вы приглашены на празднование
        </span>
        <Label colorCode={person.colorCode}>Дата:</Label>
        <Value>{DATE}</Value>
        <Label colorCode={person.colorCode}>Время:</Label>
        <Value>{TIME}</Value>
        <Label colorCode={person.colorCode}>Место:</Label>
        <Value>
          <a href="https://yandex.ru/maps/-/CDBTRJPM" target="_blank" className="underline">
            {ADDRESS} <MapIcon colorCode={person.colorCode} />
          </a>
        </Value>
        <Link href="/" className="mt-auto">
          <button
            className={`mt-auto bg-${person.colorCode} bg-${person.colorCode}-500 rounded-full p-2 w-full`}
          >
            Отлично
          </button>
        </Link>
      </div>
    </main>
  );
}
