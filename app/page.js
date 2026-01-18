import Hero from "./components/Hero";
import FeatureGrid from "./components/FeatureGrid";
import InfoBanner from "./components/InfoBanner";
import ServiceSection from "./components/ServiceSection";
import MapSection from "./components/MapSection";
import BookingSection from "./components/BookingSection";

export const cottagesFeatures = [
  { icon: "home", title: "УУникальный", description: "дизайн" },
  {
    icon: "fire",
    title: "Мангал возле",
    description: "каждого коттеджа",
  },
  { icon: "camp", title: "Своя", description: "приват-зона" },
  { icon: "wood", title: "Бесплатные", description: "дрова" },
];

export const snowmobileFeatures = [
  {
    icon: "road",
    title: "Уникальные",
    description: "трассы различной сложности",
  },
  {
    icon: "instructor",
    title: "Опытный и вежливый",
    description: "инструктор",
  },
  { icon: "car", title: "Надежная", description: "техника" },
  {
    icon: "tour",
    title: "Уникальные туры по",
    description: "живописным местам",
  },
];

export const restaurantFeatures = [
  { icon: "home", title: "Живая", description: "музыка" },
  { icon: "fire", title: "Камин", description: "" },
  { icon: "camp", title: "Карельская", description: "кухня" },
  {
    icon: "wood",
    title: "Дни рождения,",
    description: "корпоративы, свадьбы",
  },
];

export const boatTourFeatures = [
  { icon: "road", title: "Индивидуальные", description: "экскурсии" },
  { icon: "captain", title: "Опытный и вежливый", description: "капитан" },
  { icon: "boat", title: "Отличный", description: "катер" },
  { icon: "tour", title: "Разнообразные", description: "маршруты" },
];

export const boatRentalFeatures = [
  { icon: "boat", title: "Отличное состояние", description: "лодок" },
  { icon: "tree", title: "Уникальная", description: "природа" },
  { icon: "cog", title: "Множество", description: "маршрутов" },
  { icon: "tour", title: "Безопасность", description: "гарантирована" },
];

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureGrid />

      <InfoBanner />
      <ServiceSection
        id="cottages"
        title="КОТТЕДЖИ LUXE"
        subtitle="МЫ ПРИГЛАШАЕМ ВАС ОТДОХНУТЬ ВСЕЙ СЕМЬЕЙ В КАРЕЛИИ В ДОМАХ «ЛУМИВААРА»"
        tagline="С невероятными видами"
        features={cottagesFeatures}
        images={["/cottage1.jpg", "/cottage2.jpg", "/cottage3.jpg"]}
        ctaText="Бронирование"
        reversed={false}
      />

      <ServiceSection
        id="snowmobiles"
        title="ТУР НА СНЕГОХОДАХ"
        subtitle="ОТКРОЙТЕ ДЛЯ СЕБЯ ЗИМНИЕ ПРИКЛЮЧЕНИЯ В КАРЕЛИИ"
        tagline="Для всей семьи"
        features={snowmobileFeatures}
        images={["/snowmobile1.jpg", "/snowmobile2.jpg", "/snowmobile3.jpg"]}
        ctaText="Бронирование"
        reversed={true}
      />

      <ServiceSection
        id="restaurant"
        title="РЕСТОРАН"
        subtitle="НАСЛАДИТЕСЬ КАРЕЛЬСКОЙ КУХНЕЙ"
        tagline="С невероятной кухней"
        features={restaurantFeatures}
        images={["/restorant2.jpg", "/restorant1.jpg", "/restorant3.jpg"]}
        ctaText="Бронирование"
        reversed={false}
      />

      <ServiceSection
        id="boat"
        title="ПУТЕШЕСТВИЯ НА КАТЕРЕ"
        subtitle="ПРОГУЛКИ И АРЕНДА ПО ВОДНЫМ МАРШРУТАМ"
        tagline="Незабываемые виды"
        features={boatTourFeatures}
        images={["/boat1.jpg", "/boat2.jpg", "/boat3.jpg"]}
        ctaText="Бронирование"
        reversed={true}
      />

      <ServiceSection
        id="boat-rental"
        title="ПРОКАТ ЛОДОК"
        subtitle="ОТКРОЙТЕ ДЛЯ СЕБЯ УДОБНЫЕ И БЕЗОПАСНЫЕ ЛОДКИ"
        tagline="Рассекая озерную гладь"
        features={boatRentalFeatures}
        images={[
          "/rental_boat1.webp",
          "/rental_boat2.jpg",
          "/rental_boat3.jpg",
        ]}
        ctaText="Бронирование"
        reversed={false}
      />
      <MapSection />
      <BookingSection />
    </>
  );
}
