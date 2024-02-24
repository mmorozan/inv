"use client";
import clsx from "clsx";
import { redirect, useRouter } from "next/navigation";
import CryptoJS from "crypto-js";
import { Suspense, useRef, useState } from "react";
import ReactPlayer from "react-player/youtube";
import Sagarda from "../../../../public/Sagrada_Familia.jpg";
import mtgSymbol from "../../../../public/mtgSymbol.svg";
import uncleSam from "../../../../public/uncleSam.webp";
import coffee from "../../../../public/coffe.jpeg";
import Image from "next/image";
import preparedData from "@/data/preparedData";

const data = [
  {
    
    answer: "Переплетено",
    question: (ref: any) => (
      <div className="hidden">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=PcJSuiBhcYQ"
          playing
          ref={ref}
        />
      </div>
    ),
  },
  {
    answer: "SPQR",
    question: () => (
      <div className="break-words inline w-60">
        aHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy80LzQwL0FyY2gub2YuVGl0dXMtSW5zY3JpcHRpb24uanBn
      </div>
    ),
  },
  {
    answer: "Эклектика",
    question: () => (
      <div className="text-center max-w-[600px]">
        <Image src={Sagarda} alt="" />
      </div>
    ),
  },
  {
    answer: "Pilfer",
    question: () => (
      <div className="bg-black max-w-96">
        <Image src={mtgSymbol} alt="symbol" />
      </div>
    ),
  },
  {
    answer: "11101101110",
    question: () => <div className="">19.02</div>,
    roundText: "Round 101",
  },
  {
    answer: "Каппинг",
    question: () => (
      <div className="text-center max-w-96">
        <Image src={coffee} alt="coffee" />
      </div>
    ),
  },
  {
    answer: "Рёкп кй пву",
    question: () => (
      <div className="text-center">
        Яфр нжемр. Д яфро твхпёж ствдкнюпэо рфджфро бднбжфуб рёкп кй дву
      </div>
    ),
  },
  {
    answer: preparedData.map((item) => item.name.trim().toLowerCase()),
    question: () => (
      <div className="text-center max-w-96">
        <Image src={uncleSam} alt="Uncle Sam" />
      </div>
    ),
  },
].map((item, index) => ({...item, round: index + 1}));

export default function Secret({
  params,
  searchParams,
}: {
  params: { round: string };
  searchParams: { secret?: string };
}) {
  const currentIndex = data.findIndex((item) => item.round === +params.round);
  const currentRound = data[currentIndex];
  const next = currentIndex < data.length - 1 ? currentIndex + 2 : "finish";
  const prevAnswer =
    currentIndex > 0
      ? ([] as string[]).concat(data[currentIndex - 1].answer)
      : undefined;
  const currentAnswer = ([] as string[]).concat(currentRound.answer);
  const ref = useRef();
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();
  if (
    params.round !== "1" &&
    (!searchParams.secret ||
      prevAnswer?.every(
        (answer) =>
          searchParams.secret !==
          CryptoJS.SHA256(answer.toLowerCase()).toString()
      ))
  ) {
    return (
      <main
        className="h-full flex min-h-screen flex-col items-center p-10 bg-gradient-to-b from-zinc-600 to-zinc-900 text-white"
        onClick={() => {
          const cur = ref.current as any;
          if (cur && cur.getInternalPlayer) {
            cur.getInternalPlayer().playVideo();
          }
        }}
      >
        ERROR
      </main>
    );
  }
  return (

      <main
        className="h-full flex min-h-screen flex-col items-center p-10 bg-gradient-to-b from-zinc-600 to-zinc-900 text-white overflow-scroll"
        onClick={() => {
          const cur = ref.current as any;
          if (cur && cur.getInternalPlayer) {
            cur.getInternalPlayer().playVideo();
          }
        }}
      >
        <h1 className="text-3xl text-green-500">
          {currentRound.roundText || `Round ${currentIndex + 1}`}
        </h1>
        {currentRound.question(ref)}
        <input
          type="text"
          className={clsx("text-black mt-auto p-2", {
            "border-red-500 border-4 rounded-md": error,
          })}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setError(false);
          }}
        />
        <button
          className="bg-green-700 rounded-md p-4 mt-2"
          onClick={() => {
            if (
              currentAnswer.some(
                (answer) => answer.toLowerCase() === value.toLowerCase()
              )
            ) {
              router.push(
                `/secret/${next}/?secret=` +
                  CryptoJS.SHA256(value.toLowerCase()).toString()
              );
            } else {
              setError(true);
            }
          }}
        >
          Продолжить
        </button>
      </main>
  );
}
