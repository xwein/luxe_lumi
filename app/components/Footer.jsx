import { MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";
import { SiTelegram, SiVk, SiWhatsapp } from "react-icons/si";

export default function Footer() {
  return (
    <footer
      className="bg-[rgb(31,24,19)] relative border-t border-white/5"
      data-testid="footer"
    >
      <div className="h-7.5 inset-0 w-full absolute -top-[-30px]">
        <Image
          src="/footer-decor.png"
          alt="Footer decor"
          fill
          className="object-cover md:object-fill"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="py-16 md:py-20 grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 text-center">
          {/* Logo + Description + Socials */}
          <div className="flex flex-col items-center justify-center gap-6">
            <h3 className="font-serif text-xl font-light tracking-[0.15em] text-white mb-4">
              LUXE <span className="text-primary">LUMIVAARA</span>
            </h3>
            <p className="text-sm text-white leading-relaxed max-w-xs">
              Премиальная база отдыха на берегу Ладожского озера в самом сердце
              Карелии.
            </p>
            <div className="flex gap-3">
              <a
                href="https://t.me/lumivaara"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
              >
                <SiTelegram className="w-4 h-4" />
              </a>
              <a
                href="https://vk.com/lumivaara_karelia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
              >
                <SiVk className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/79001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
              >
                <SiWhatsapp className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div className="flex flex-col items-center justify-center">
            <h4 className="text-xs uppercase tracking-[0.2em] text-primary mb-6">
              Услуги
            </h4>
            <ul className="space-y-3 text-sm text-white text-center">
              <li>
                <a
                  href="#cottages"
                  className="hover:text-primary transition-colors"
                >
                  Коттеджи и домики
                </a>
              </li>
              <li>
                <a
                  href="#snowmobiles"
                  className="hover:text-primary transition-colors"
                >
                  Туры на снегоходах
                </a>
              </li>
              <li>
                <a
                  href="#restaurant"
                  className="hover:text-primary transition-colors"
                >
                  Ресторан
                </a>
              </li>
              <li>
                <a
                  href="#boat"
                  className="hover:text-primary transition-colors"
                >
                  Прогулки на катере
                </a>
              </li>
              <li>
                <a
                  href="#boats"
                  className="hover:text-primary transition-colors"
                >
                  Прокат лодок
                </a>
              </li>
            </ul>
          </div>

          {/* Contacts Column */}
          <div className="flex flex-col items-center justify-center">
            <h4 className="text-xs uppercase tracking-[0.2em] text-primary mb-6">
              Контакты
            </h4>
            <ul className="space-y-4 text-sm text-white text-center">
              <li className="flex items-center gap-1">
                <MapPin className="w-4 h-4 text-primary" />
                <span>
                  Республика Карелия
                  <br />
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a
                  href="tel:+79001234567"
                  className="hover:text-primary transition-colors"
                >
                  +7 (900) 123-45-67
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a
                  href="mailto:info@lumivaara.ru"
                  className="hover:text-primary transition-colors"
                >
                  info@lumivaara.ru
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © 2024 LUXE LUMIVAARA. Все права защищены.
          </p>
          <div className="flex gap-8 text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Условия бронирования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
