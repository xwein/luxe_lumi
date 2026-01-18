"use client";

import Image from "next/image";

const features = [
  {
    icon: "/home-icon.svg",
    label: "Уникальный дизайн коттеджей и домиков",
    link: "#cottages",
  },
  {
    icon: "/bbq-icon.svg",
    label: "Мангал возле каждого коттеджа и домика",
    link: "#cottages",
  },
  {
    icon: "/train-icon.svg",
    label: "Туры на снегоходах, трассы различной сложности",
    link: "#snowmobiles",
  },
  {
    icon: "/card-icon.svg",
    label: "Возможности оплаты по картам Visa и MasterCard",
    link: "#",
  },
  {
    icon: "/car-icon.svg",
    label: "Туры на квадроциклах, трассы различной сложности",
    link: "#",
  },
  {
    icon: "/boat-icon.svg",
    label: "Прокат моторных и гребных лодок, множество маршрутов",
    link: "#boats",
  },
  {
    icon: "/photo-icon.svg",
    label: "Живописные виды для любителей фотографии",
    link: "#",
  },
  {
    icon: "/fish-icon.svg",
    label: "Зимняя и летняя рыбалка с проживанием",
    link: "#",
  },
  { icon: "/wifi-icon.svg", label: "Бесплатный Wi-Fi", link: "#" },
  { icon: "/sauna-icon.svg", label: "Плавучая баня на озере", link: "#" },
  {
    icon: "/vk-icon.svg",
    label: "Страничка Вконтакте",
    link: "https://vk.com",
  },
  {
    icon: "/fb-icon.svg",
    label: "Группа Facebook",
    link: "https://facebook.com",
  },
];

export default function FeatureGrid() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, i) => (
            <a
              key={i}
              href={feature.link}
              target={feature.link.startsWith("http") ? "_blank" : undefined}
              rel={
                feature.link.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="group flex flex-col items-center p-4 rounded-xl border border-white/10 hover:border-red-600 bg-white/[0.02] hover:bg-red-50 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 text-center"
            >
              <img
                src={feature.icon}
                alt={feature.label}
                className="w-9 h-9 md:w-11 md:h-11 mb-3 object-contain"
              />
              <span className="text-xs md:text-sm text-black group-hover:text-red-600 font-semibold">
                {feature.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
