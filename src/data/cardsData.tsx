import cardIamge1 from './../assets/card-1.jpg';
import cardIamge2 from './../assets/card-2.jpg';
import cardIamge3 from './../assets/card-3.jpg';
import cardIamge4 from './../assets/card-4.jpg';
import cardIamge5 from './../assets/card-5.jpg';
import cardIamge6 from './../assets/card-6.jpg';
import CardProps from 'components/Card/CardProps';

const cardsData: CardProps[] = [
  {
    image: cardIamge1,
    price: 2500,
    title: 'Komfortowa kawalerka/Sypialnia/Balkon',
    text: `
    Pięknie urządzona nowa kawalerka do wynajęcia od 12 marca 2023.
    Mieszkanie znajduje się w nowym/oddanym w grudniu etapie osiedla ROBYG Życzliwa Praga przy ul. 
    Trakt Nadwiślański. Bardzo dobra lokalizacja do przystanków MPK i linii tramwajowej do Metra 
    Młociny (dojazd 8 minut). Położone 4 minuty od Galerii Północnej.
    Mieszkanie jest nowe i zostało wykończone w bardzo unikatowym designie dzięki czemu jest 
    ciepłe i przytulne co sprawi, że czas spędzany w mieszkaniu będzie bardziej komfortowy.
    Kawalerka znajduje się na pierwszym piętrze. Składa się z salonu z aneksem ,hallu, 
    wydzielonej części sypialnej, łazienki oraz balkonu.`,
    bookmarks: 1,
    likes: 5,
  },
  {
    image: cardIamge2,
    price: 2200,
    title: 'Mieszkanie Wesola Kawalerka Warszawa ',
    text: `Mieszkanie znajduję się w bardzo cichej, zielonej i spokojnej okolicy. 
    Położone w samym sercu Mazowieckiego Parku krajobrazowego w Wesołej. 
    Jest to świetne miejsce dla osób ceniących sobie ciszę, spokój, 
    świeże powietrze oraz bliski kontakt z naturą. W pobliżu ścieżki zdrowia, 
    oczko wodne, trasy rowerowe oraz duży przestronny ogród na którym możesz 
    odpocząć po całym dniu pracy lub nauki.`,
    bookmarks: 5,
    likes: 10,
  },
  {
    image: cardIamge3,
    price: 1900,
    title: 'Kawalerka do wynajęcia Ochota',
    text: `Do wynajęcia bezpośrednio mieszkanie 23 m2, po odświeżeniu, przy ul. Karola Dickensa.
    Wyposażenie: kuchenka gazowa z piekarnikiem, lodówka, pralka, czajnik elektryczny.
    Do czynszu (1900zł) należy doliczyć czynsz do wspólnoty (aktualnie 450 zł/mies) plus media.
    TV/ Internet po zawarciu indywidualnej umowy z operatorem (VEKTRA lub UPC).
    Kaucja 3000 zł
    Umowa co najmniej na rok.
    Mieszkanie dostępne od 8 marca 2023.`,
    bookmarks: 3,
    likes: 17,
  },
  {
    image: cardIamge4,
    price: 1850,
    title: 'Kawalerka 32m2 Mokotów  Czerniaków',
    text: `Do wynajęcia OD ZARAZ, czysta, odświeżona kawalerka 32m2 z oddzielną 
    kuchnią i łazienką na Mokotowie - Czerniaków, ul. Bluszczańska. Mieszkanie 
    znajduje się na III piętrze od zewnętrznej strony budynku. Składa się z: 1 pokoju,
     oddzielnej dużej jak na kawalarkę kuchni, łazienki z wanną, małego przedpokoju. 
     Wyposażone w meble, dużą 3-częściową szafę, biurko do pracy, w kuchni sprzęt 
     AGD (lodówka, pralka, kuchenka gazowa z piekarnikiem). Okna mieszkania wychodzą 
     na stronę północną dzięki czemu latem nie ma w nim upałów. W `,
    bookmarks: 3,
    likes: 17,
  },
  {
    image: cardIamge5,
    price: 2800,
    title: 'Kawalerka do wynajęcia Ochota',
    text: `Świetna lokalizacja - tylko 250 m od stacji metra Wawrzyszew. Pokój duży,
     bardzo ustawny z balkonem! Łazienka po remoncie. Ogólnie mieszkanie zadbane. 
     Koszt najmu to 1600 zł + czynsz (aktualnie 396 zł) + media. Kaucja 2000 zł.
    Zawsze staramy się, aby informacje dotyczące naszych ofert były jak najbardziej 
    aktualne i dokładne. Z uwagi na fakt, że większość z nich pochodzi od osób 
    trzecich i część z nich nie zawsze daje się zweryfikować, ATUT Biuro Obrotu 
    Nieruchomościami nie ponosi odpowiedzialności za ich kompletność i dokładność. 
    W związku z tym zamieszczone na naszych stronach oferty nie stanowią oferty w 
    rozumieniu Kodeksu Cywilnego.`,
    bookmarks: 4,
    likes: 1,
  },
  {
    image: cardIamge6,
    price: 2400,
    title: 'Kawalerka do wynajęcia Ochota',
    text: `Ładne, jasne mieszkanie na 8 piętrze. 2 windy - nie trzeba chodzić po 
    schodach - nawet jednym. Parkowanie w pobliżu osiedla na ulicy. Wokół sklepy itp. 
    Mieszkanie obecnie wyposażone w 2 kanapy rozkładane.
    Szukam spokojnych, raczej cichych lokatorów. Wynajmę od 15 kwietnia 2023r.`,
    bookmarks: 13,
    likes: 20,
  },
];

export default cardsData;
