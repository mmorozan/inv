import Miha from '../../public/Miha.jpg';
import Yulia2 from '../../public/Yulia2.jpg'
import Maina2 from '../../public/Maina2.jpg'
import Sergo from '../../public/Sergo.jpg'
import Lena from '../../public/Lena.jpg'
import Den from '../../public/Den.jpg'
import Vova from '../../public/Vova.jpg'
import Olga from '../../public/Olga.jpg'
import Katya2 from '../../public/Katya2.jpg'
import Ekateryna from '../../public/Ekateryna.jpg'
import Vika from '../../public/Vika.jpg'
import Igor2 from '../../public/Igor2.jpg'
import Ira from '../../public/Ira.jpg'
import Nastya from '../../public/Nastya.jpg'
import Yuliya from '../../public/Yuliya.jpg'
import Alice from '../../public/Alice.jpg'
import Iras from '../../public/Iras.jpg'

const data = [
  {
    "id":"1833500959",
    "name": "Михаил",
    "profession": "Кодер-самозванец",
    "photo": Miha,
    "colorCode":"blue",
    "hobby": "чуть-чуть там, чуть-чуть тут",
    "quiz": "Авто",
    "gender": "Девочка",
    "about": "Коренной северянин, родом из Сургута. Выбрался из замкадья. Пытаюсь писать код, временами получается)))"
  },
  {
    "id":"1833546023",
    "name": "Юлия",
    "profession": "Доктор по соплям",
    "photo": Yulia2,
    "colorCode":"purple",
    "hobby": "Пить вино",
    "quiz": "Квиза",
    "gender": "Девочка",
    "about": "Люблю все, что движется"
  },
  {
    "id":"1833673517",
    "name": "Маина",
    "profession": "Менеджер по управлению комплексными программами",
    "photo": Maina2,
    "colorCode":"purple",
    "hobby": "Рисовать",
    "quiz": "Песни",
    "gender": "Мальчик",
    "about": "Прибавляю в весе и впервые искренне этому радуюсь! "
  },
  {
    "id":"1833855779",
    "name": "Сергей",
    "profession": "Космонавт",
    "photo": Sergo,
    "colorCode":"red",
    "hobby": "Снимать кино",
    "quiz": "Гарри поттер",
    "gender": "Девочка",
    "about": "Путешествую, беру от жизни максимум, воспитываю дочь, играю в карточки, хочу построить свой дом с баней и бассейном чтоб никогда больше никуда не выходить"
  },
  {
    "id":"1833887586",
    "name": "Елена",
    "profession": "Архитектор",
    "photo": Lena,
    "colorCode":"amber",
    "hobby": "DIY",
    "quiz": "Архитектура, мода, искусство",
    "gender": "Девочка",
    "about": "Люблю сыр"
  },
  {
    "id":"1833882132",
    "name": "Денис",
    "profession": "Волшебник",
    "photo": Den,
    "colorCode":"pink",
    "hobby": "MTG",
    "quiz": "MTG",
    "gender": "Мальчик",
    "about": "Простой деревенский парень"
  },
  {
    "id":"1833911337",
    "name": "Владимир",
    "profession": "Джава тимлид",
    "photo": Vova,
    "colorCode":"amber",
    "hobby": "Картинг",
    "quiz": "Желательно не фильменно-музыкальные)",
    "gender": "Мальчик",
    "about": "Владимир. 29 лет. Родился в г. Ростове-на-Дону, 5 лет назад переехал в г. Москва, где, на хате у Денчика и познакомился с одним из виновников данного торжества. А потом и с другой виновницей, опять таки на хате у Денчика😄 "
  },
  {
    "id":"1833916916",
    "name": "Ольга",
    "profession": "Глазной",
    "photo": Olga,
    "colorCode":"orange",
    "hobby": "Спорт",
    "quiz": "Медицина",
    "gender": "Девочка",
    "about": "Нет недостатков"
  },
  {
    "id":"1833935219",
    "name": "Екатерина",
    "profession": "IT",
    "photo": Katya2,
    "colorCode":"orange",
    "hobby": "Имитация деятельности",
    "quiz": "Квадроберы",
    "gender": "Девочка",
    "about": "Просто хороший человек"
  },
  {
    "id":"1833959540",
    "name": "Илясова Екатерина",
    "profession": "Врач",
    "photo": Ekateryna,
    "colorCode":"pink",
    "hobby": "Бездельничать",
    "quiz": "Музыка, кино",
    "gender": "Девочка",
    "about": "Родом из Сибири, холодная снаружи, но очень теплая внутри, веселая душнила )))"
  },
  {
    "id":"1834156405",
    "name": "Викуля",
    "profession": "Жесткий разраб",
    "photo": Vika,
    "colorCode":"red",
    "hobby": "Жить жизнь",
    "quiz": "Любая, только не фильмы и игры энти ваши)))",
    "gender": "Девочка",
    "about": "Люблю котиков😻 таких как вы))"
  },
  {
    "id":"1834182245",
    "name": "Игорь",
    "profession": "Просто получаю бабки",
    "photo": Igor2,
    "colorCode":"red",
    "hobby": "Задрот",
    "quiz": "География",
    "gender": "Мальчик",
    "about": "Я игарь. Добрый мальчик"
  },
  {
    "id":"1834301609",
    "name": "Ира",
    "profession": "Врач",
    "photo": Ira,
    "colorCode":"purple",
    "hobby": "Сноуборд, вейксерф, бег, танцы, концерты, выставки, фотографии",
    "quiz": "Общая",
    "gender": "Девочка",
    "about": "Эээ \nДаже не знаю, что сказать)\nМного работаю, в свободное от работы время - стараюсь по максимуму забить всякой классной активностью (танцы, вейк, бег и тп) \nКороче за любую движуху) безумно люблю горы и борд ✌🏻  тот человек, который явно не сидит на одном месте и которого всегда куда то несет 😅"
  },
  {
    "id":"1836442671",
    "name": "Анастасия",
    "profession": "Врач",
    "photo": Nastya,
    "colorCode":"orange",
    "hobby": "-",
    "quiz": "Путешествовать",
    "gender": "Мальчик",
    "about": "Я практикующий врач-терапевт, \nМоя семья : муж, 2 детей (дочка 8 лет, сын 5 лет).\nЛюблю водить машину."
  },
  {
    "id":"1837145128",
    "name": "Юлия",
    "profession": "Инженер по ТБ",
    "photo": Yuliya,
    "colorCode":"blue",
    "hobby": "Танцы",
    "quiz": "90е",
    "gender": "Девочка",
    "about": "Просто Юля. \nЖиву в Одинцово. Не работаю. 28 лет"
  },
  {
    "id":"1838057739",
    "name": "Алиса",
    "profession": "Врач узи",
    "photo": Alice,
    "colorCode":"pink",
    "hobby": "Книги",
    "quiz": "Кино",
    "gender": "Девочка",
    "about": "Люблю нашу душевную клинику! Люблю детей! Воспитываю дочь и сына! Чего и вам желаю!!"
  },
  {
    "id":"1838051234",
    "name": "Соболева Ирина",
    "profession": "Повелитель кол-центра Амедклиник",
    "photo": Iras,
    "colorCode":"blue",
    "hobby": "Общаться с друзьями ",
    "quiz": "Любая",
    "gender": "Девочка",
    "about": "За любой движ"
  },
]

export default data;