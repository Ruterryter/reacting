import React from "react";
import './cardstyle.css'
import { Card } from "./Card"

export const App = () => (
  <div className="App">
    <Card
      title="Lemon"
      titleColor="#166F39"
      emoji="🍋"
      subtitle="This is a really tasty fruit."
      subtitleColor="#000000"
      primary="#8CFFBA"
      secondary="#CFFFE2"
      buttonText="ORDER NOW"
      buttonTextColor="#000000"
      buttonColor="#FCED84"
    />

    <Card
      title="Rocket"
      titleColor="#0B0C11"
      emoji="🚀"
      subtitle="Join us into outer space."
      subtitleColor="#000000"
      primary="#A6CFE2"
      secondary="#C2DCE9"
      buttonText="Book a Seat"
      buttonTextColor="#FFD600"
      buttonColor="#0B0C11"
    />

    <Card
      title="Doggy"
      titleColor="#502F7E"
      emoji="🐶"
      subtitle="I'm so cute!!!"
      subtitleColor="#502F7E"
      primary="#EEB200"
      secondary="#FFE086"
      buttonText="Adopt me"
      buttonTextColor="#502F7E"
      buttonColor="#FFFFFF"
    />
  </div>
);
