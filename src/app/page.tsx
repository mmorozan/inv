import Image, { StaticImageData } from "next/image";
import preparedData from "../data/preparedData.js";
import { shuffle } from "lodash";
import Link from "next/link";
import { Roboto } from 'next/font/google'
import classnames from'classnames';
const roboto = Roboto({ subsets: ['cyrillic'], weight: "400" })

type ComponentProps = {
  name: string;
  img: StaticImageData;
  colorCode: string;
};

//bg-gradient-to-b from-zinc-500 to-zinc-700
const Component = ({ name, img, colorCode }: ComponentProps) => {
  return (
    <div
      className={`p-4 rounded-xl bg-orange-100 drop-shadow-xl shadow-md shadow-${colorCode}-500 shadow-${colorCode} ring-2 ring-${colorCode} ring-${colorCode}-500`}
    >
      <div className="w-48 h-48 md:w-60 md:h-60 rounded-xl text-center flex flex-col max-w-md overflow-hidden justify-center">
        <Image src={img} width={272} height={272} alt="photo" />
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <main className={classnames("h-full min-h-screen p-4 bg-gradient-to-b from-sky-300 to-fuchsia-300 text-white overflow-scroll", roboto.className)}>
      <div className="md:max-w-4xl flex flex-col items-center justify-center content-baseline gap-4 mx-auto">
        <div className="hidden shadow-red-500 shadow-amber-500 shadow-gray-500 shadow-pink-500 shadow-green-500 shadow-purple-500 shadow-orange-500 shadow-black"></div>
        <div className="hidden ring-red-500 ring-amber-500 ring-gray-500 ring-pink-500 ring-green-500 ring-purple-500 ring-orange-500 ring-black"></div>
        <h1 className="text-3xl text-slate-800">Гости:</h1>
        {shuffle(preparedData).map((item, index) => (
          <Link key={item.id} href={`/guest/${item.id}`}>
            <Component
              name={item.name}
              img={item.photo}
              colorCode={item.colorCode}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
