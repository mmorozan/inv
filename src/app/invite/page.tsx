"use client";
import data from "@/data/data.json";
import { useSearchParams } from "next/navigation";
import { Pattaya } from 'next/font/google'
import classnames from'classnames';
import ImageViewer from 'react-simple-image-viewer';

import { useEffect, useState, useCallback } from "react";
import moment from "moment";

moment().format('dd.mm.yyyy');

// If loading a variable font, you don't need to specify the font weight
const inter = Pattaya({ subsets: ['cyrillic'], weight: "400" })

const MapIcon = () => {
  return (
    <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
      <g id="SVGRepo_iconCarrier"> <path d="M12 20L4.3314 12.0474C3.47892 11.1633 3 9.96429 3 8.71405C3 6.11055 5.03517 4 7.54569 4C8.75128 4 9.90749 4.49666 10.76 5.38071L12 6.66667L13.24 5.38071C14.0925 4.49666 15.2487 4 16.4543 4C18.9648 4 21 6.11055 21 8.71405C21 9.96429 20.5211 11.1633 19.6686 12.0474L15.8343 16.0237" stroke="#ff0000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/> </g>
    </svg>
  );
};

const getCalendar = () => {
  const res = []
  for(let i = 1; i < 30; i++) {
    res.push(<div className={i === 22 ? 'font-bold text-red-600 text-xl' : ''}>
      {i === 22 && <div className="relative"><div className="calendar-heart"><MapIcon /></div></div>}{i}
      </div>)
  }
  return res;
}

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    // Add event listener
    window.addEventListener("resize", handleResize);
     
    // Call handler right away so state gets updated with initial window size
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

const useTime = (date: string) => {
  const [tick, setTick] = useState(false);
  const momDate = moment();
  const finishTime = moment(date)
  const duration = moment.duration(finishTime.diff(momDate))

  const hours = duration.get('hours');
  const days = Math.trunc(duration.asDays());
  const sec = duration.get('seconds');
  const min = duration.get('minutes');
  useEffect(()=>{
    const timerID = setInterval(() => setTick(!tick), 1000);
    return () => clearInterval(timerID);
  }, [tick])
  return {min, days, hours, sec}
}

const images = [
  { url: "../../" },
  { url: "images/2.jpg" },
  { url: "images/3.jpg" },
  { url: "images/4.jpg" },
  { url: "images/5.jpg" },
  { url: "images/6.jpg" },
  { url: "images/7.jpg" },
];

export default function Invite() {
  return (
    <InviteComponent/>
  )
}
function InviteComponent() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const {min, days, hours, sec} = useTime('2024-09-22T20:00:00');
  // const {width} = getWindowDimensions()
  const {width} = useWindowSize();
  // console.log({size})
  const params = useSearchParams();

  const openImageViewer = useCallback((index: number) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  if (width && width >= 500) {
    return (
      <main className={classnames("App overflow-hidden relative text-gray-700", inter.className)}>
        <div className="container mx-auto py-20 px-4 -z-50">
          <div className="columns-1 text-center">
            <div className='w-1/2 border-b-2 border-slate-900 m-0 mx-auto'></div>
            <div className="flex flex-col sm:flex-row text-4xl justify-center my-6">
              <div>Руки прочь от компа <br />Смотреть только с телефона!!!</div>
            </div>
            <div className='w-1/2 border-b-2 border-slate-900 m-0 mx-auto'></div>
            <div className="columns-1">
              <div className="dildo mx-auto mt-10"></div>
            </div>
          </div>
        </div>
      </main>
    )
  }
  return (
    <main className={classnames("App overflow-hidden relative text-gray-700", inter.className)}>
      <header className="App-header">
        <div className="h-screen bg-gradient-to-b from-fuchsia-300/10 via-transparent to-white">
          <div className="container mx-auto flex flex-col justify-between h-full">
            <div className="columns-auto">
              <div className="flex pt-96 grow flex-col">
                <h1 className="flex flex-col text-7xl text-center">
                  <div className="flex justify-center">Мальчик</div>
                  <div className='flex justify-center'>или</div> 
                  <div className="flex justify-center">Девочка</div>
                  <div className='flex justify-center text-5xl mt-5'>Узнаем на празднике</div>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="container mx-auto py-20 px-4 -z-50">
        <div className="columns-1 text-center">
          <div className="flex flex-col sm:flex-row text-4xl justify-center mb-6">
            <div>Друзья!</div>
          </div>
          <div className="text-2xl">
            <div className="my-2">
              Совсем скоро в нашей жизни произойдет радостное событие - на свет появится ребенок!
            </div>
            <div className="my-2">
              Мы с радостью приглашем Вас на пати, где мы узнаем пол ребенка!
            </div>
          </div>
        </div>
        {/* <div className="flex justify-center mt-8 flex-col sm:flex-row">
          <div className="mi rounded-full self-center" />
          <div className="flex items-center m-5 self-center">
            <Family />
          </div>
          <div className="ma rounded-full self-center" />
        </div> */}
      </div>
      
    
      {isViewerOpen && (
        <ImageViewer
        src={ data }
        currentIndex={ currentImage }
        disableScroll={ false }
        closeOnClickOutside={ true }
        onClose={ closeImageViewer }
      />
      )}
      
      <div className="">
        <div className='w-1/2 border-b-2 border-slate-900 m-0 mx-auto'></div>
        <div className="container mx-auto py-20 px-2 text-center">
          <div className="columns-1">
            <div className="text-4xl text-center mb-10">
              <div>Сентябрь</div>
            </div>
          </div>
          <div className="columns-1">
            <div className="text-2xl text-center mb-10">
              <div>22 Сентября, Воскресенье</div>
            </div>
          </div>
          <div className="grid grid-cols-7 grid-rows-6 gap-1">
            <div className="font-semibold">Пн</div>
            <div className="font-semibold">Вт</div>
            <div className="font-semibold">Ср</div>
            <div className="font-semibold">Чт</div>
            <div className="font-semibold">Пт</div>
            <div className="font-semibold">Сб</div>
            <div className="font-semibold">Вс</div>
            <div>26</div>
            <div>27</div>
            <div>28</div>
            <div>29</div>
            <div>30</div>
            <div>31</div>
            {getCalendar()}
          </div>
        </div>
        <div className='w-1/2 border-b-2 border-slate-900 m-0 mx-auto'></div>
      </div>
      <div className="container mx-auto pt-24 relative">
        <div className="columns-1 text-center">
          <div className="text-4xl text-center mb-10">
            <div>Место встречи изменить нельзя!</div>
          </div>
          <div  className="text-2xl text-center mb-8 px-2">
            <u>Старт: 16:00</u>
          </div>
          <div  className="text-2xl text-center mb-8 px-2">
            <u>Конец ориентировочно к 22:00</u>
          </div>
          <div  className="text-2xl text-center mb-14 px-2">
            Для Вашего удобства мы подготовили карту. Надеемся, что Вы <s>легко</s> сможете найти место проведения и порадуете нас своим присутствием
          </div>
          <div  className="text-2xl text-center mb-14 px-2">
            <u>ул. Малая Семеновская д. 5, с.1 </u>
            <div>(м. Электрозаводская)</div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 mb-4 px-2">
        {data.map((src, index) => (
          <img
            src={ src }
            onClick={ () => openImageViewer(index) }
            key={ index }
            alt=""
          />
        ))}
      </div>
      <div className="mb-20">
        <iframe className={inter.className} src="https://yandex.ru/map-widget/v1/?um=constructor%3A8dc92803a39d4a89d2904778508c7498d1c3eb47dfbf7906d0554767b297bddb&amp;source=constructor" width="500" height="400" frameBorder="0"></iframe>
      </div>
      <div className="container mx-auto relative">
        <div className="columns-1 text-center">
          <div className="text-4xl text-center mb-10">
            <div>ДРЕСС - КОД</div>
          </div>
          <div  className="text-2xl text-center">
            <s>(Как по кайфу)</s>
          </div>
          <div  className="text-2xl text-center mb-14 px-2">
            Для нас главное - Ваше присутствие!
          </div>
        </div>
      </div>
      <div className="bottom mb-20">
        <div className='w-1/2 border-b-2 border-slate-900 m-0 mx-auto'></div>
        <div className="flex flex-col justify-between justify-content h-full">
          <div className="flex flex-col self-center text-3xl text-center mt-20 mb-6">
            <div className='text-4xl'>МЫ УЗНАЕМ</div>
            <div>пол малыша через</div>
          </div>
          <div className="flex self-center mb-20 text-black w-full">
            <div className="rounded-3xl flex justify-between w-full px-2">
              <div className="border-r-2 border-slate-900 text-center w-1/4">
                <div className="text-5xl">{days}</div>
                <div className="mt-2">дней</div>
              </div>
              <div className="border-r-2 border-slate-900 text-center w-1/4">
                <div className="text-5xl">{hours}</div>
                <div className="mt-2">часов</div>
              </div>
              <div className="border-r-2 border-slate-900 text-center w-1/4">
                <div className="text-5xl">{min}</div>
                <div className="mt-2">минут</div>
              </div>
              <div className="text-center w-1/4">
                <div className="text-5xl">{sec}</div>
                <div className="mt-2">секунд</div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-1/2 border-b-2 border-slate-900 m-0 mx-auto'></div>
      </div>
      <div className="container mx-auto relative mb-10">
        <div className="columns-1 text-center">
          <div className="flex flex-col sm:flex-row text-4xl justify-center mb-6">
            <div>Что думает AI?</div>
          </div>
          <div className="text-xl text-center my-4 px-2">В век высоких технологий, можно посмотреть в будущее, так искуственный интелект видит наших детей</div>
          <div className="flex justify-around">
            <div className="">Девочка</div>
            <div className="">Мальчик</div>
          </div>
          <div className="flex justify-around mb-10">
            <div className="fem rounded-full"></div>
            <div className="mal rounded-full"></div>
          </div>
        
        </div>
      </div>
      <div className='w-1/2 border-b-2 border-slate-900 m-0 mx-auto'></div>
      <div className="container mx-auto text-center mt-16">
        <div className="columns-1">
          <div className="text-4xl text-center mb-10">
            <div>Анкетка</div>
          </div>
        </div>
        <div className="columns-1">
          <div className="text-2xl text-center mb-10 p-4">
            <div>Заполнить необходимо на каждого человека кто идет :)</div>
          </div>
        </div>
      </div>
      <script src="https://forms.yandex.ru/_static/embed.js" async></script>
      <iframe src="https://forms.yandex.ru/u/66c4f34884227c11f8ede184/?iframe=1" name="ya-form-66c4f34884227c11f8ede184" width="100%"></iframe>
      <div className="container mx-auto text-center my-10">
        <div className="columns-1">
          <div className="text-4xl text-center mb-10">
            <div>Всем спасибо, все свободны!</div>
          </div>
          <div className="text-2xl text-center mb-10">
            <div>Увидимся на месте :)</div>
          </div>
        </div>
      </div>
    </main>
  );
}
