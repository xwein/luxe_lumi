"use client";

import React, { useState } from "react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Label } from "../components/ui/Label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/Select";
import { Calendar, Users, Home, ArrowRight } from "lucide-react";

export default function BookingSection() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");
  const [accommodation, setAccommodation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking submitted:", {
      checkIn,
      checkOut,
      guests,
      accommodation,
    });
  };

  return (
    <section
      id="booking"
      className="py-24 md:py-32 bg-zinc-50 relative overflow-hidden"
      data-testid="section-booking"
    >
      <div className="absolute inset-0 " />

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.4em] uppercase text-black mb-4">
            Забронируйте отдых
          </p>
          <h2
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-destructive mb-6"
            data-testid="text-title-booking"
          >
            БРОНИРОВАНИЕ
          </h2>
          <div className="flex items-center justify-center gap-4">
            <span className="w-16 h-px bg-gradient-to-r from-transparent to-primary/50" />
            <span className="w-2 h-2 rounded-full bg-primary/50" />
            <span className="w-16 h-px bg-gradient-to-l from-transparent to-primary/50" />
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-px bg-gradient-to-br from-primary/30 via-primary/10 to-primary/30 rounded-sm" />
          <div className="relative bg-white p-8 md:p-12 rounded-sm">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label
                    htmlFor="check-in"
                    className="text-xs uppercase tracking-widest text-foreground/60 flex items-center gap-3"
                  >
                    <Calendar className="w-4 h-4 text-primary" />
                    Дата заезда
                  </Label>
                  <Input
                    id="check-in"
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="bg-background/50 border-white/10 focus:border-primary h-14 rounded-none text-foreground"
                    data-testid="input-check-in"
                  />
                </div>
                <div className="space-y-3">
                  <Label
                    htmlFor="check-out"
                    className="text-xs uppercase tracking-widest text-foreground/60 flex items-center gap-3"
                  >
                    <Calendar className="w-4 h-4 text-primary" />
                    Дата выезда
                  </Label>
                  <Input
                    id="check-out"
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="bg-background/50 border-white/10 focus:border-primary h-14 rounded-none text-foreground"
                    data-testid="input-check-out"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label
                    htmlFor="guests"
                    className="text-xs uppercase tracking-widest text-foreground/60 flex items-center gap-3"
                  >
                    <Users className="w-4 h-4 text-primary" />
                    Количество гостей
                  </Label>
                  <Select value={guests} onValueChange={setGuests}>
                    <SelectTrigger
                      className="bg-background/50 border-white/10 focus:border-primary h-14 rounded-none"
                      data-testid="select-guests"
                    >
                      <SelectValue placeholder="Выберите количество" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 гость</SelectItem>
                      <SelectItem value="2">2 гостя</SelectItem>
                      <SelectItem value="3">3 гостя</SelectItem>
                      <SelectItem value="4">4 гостя</SelectItem>
                      <SelectItem value="5">5 гостей</SelectItem>
                      <SelectItem value="6">6+ гостей</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-3">
                  <Label
                    htmlFor="accommodation"
                    className="text-xs uppercase tracking-widest text-foreground/60 flex items-center gap-3"
                  >
                    <Home className="w-4 h-4 text-primary" />
                    Тип размещения
                  </Label>
                  <Select
                    value={accommodation}
                    onValueChange={setAccommodation}
                  >
                    <SelectTrigger
                      className="bg-background/50 border-white/10 focus:border-primary h-14 rounded-none"
                      data-testid="select-accommodation"
                    >
                      <SelectValue placeholder="Выберите тип" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cottage-small">
                        Коттедж (2-4 чел.)
                      </SelectItem>
                      <SelectItem value="cottage-large">
                        Коттедж (4-6 чел.)
                      </SelectItem>
                      <SelectItem value="house">Дом (6-8 чел.)</SelectItem>
                      <SelectItem value="vip">VIP коттедж</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="pt-6">
                <Button
                  type="submit"
                  className="group w-full bg-primary hover:bg-primary/90 text-primary-foreground py-7 text-sm font-medium tracking-[0.2em] uppercase rounded-none shadow-2xl shadow-primary/20 transition-all duration-300"
                  data-testid="button-submit-booking"
                >
                  Забронировать
                  <ArrowRight className="w-4 h-4 ml-3 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
