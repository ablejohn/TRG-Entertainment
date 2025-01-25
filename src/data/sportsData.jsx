import React, { useState, useRef, useEffect } from "react";
import AbdulMumin from "../assets/AbdulMumin.jpeg";
import ChristopherWooh from "../assets/ChristopherWooh.jpeg";
import IssahKabore from "../assets/IssahKabore.png";
import AliYousefAlMusrati from "../assets/Ali Yousef AlMusrati.jpeg";

export const sportsData = {
  1: {
    id: 1,
    name: "Abdul Mumin",
    image: AbdulMumin,
    bio: "Khalid Abdul Mumin Suleman (born 6 June 1998), commonly known as Abdul Mumin, is a Ghanaian professional footballer who plays as a centre-back for La Liga club Rayo Vallecano and the Ghana national team.",
    instagram: "abdul_mumin",
    twitter: "AbdulMumin_16",
    facebook: "AbdulMuminFootballer",
  },
  2: {
    id: 2,
    name: "Christopher Wooh",
    image: ChristopherWooh,
    bio: "Christopher Maurice Wooh (born 18 September 2001) is a professional footballer who plays as a defender for Ligue 1 club Rennes. Born in France, he plays for the Cameroon national team.",
    instagram: "chris_wooh",
    twitter: "Christopher_Wooh",
    facebook: "ChristopherWoohOfficial",
  },
  3: {
    id: 3,
    name: "Issa Kabore",
    image: IssahKabore,
    bio: "Issa Kaboré (born 12 May 2001) is a Burkinabé professional footballer who plays as a right-back or right wing-back for Bundesliga club Werder Bremen, on loan from Premier League club Manchester City, and the Burkina Faso national team.",
    instagram: "issakabore_official",
    twitter: "Issa_Kabore",
    facebook: "IssaKaboreOfficial",
  },
  4: {
    id: 4,
    name: "Moatasem Al-Musrati",
    image: AliYousefAlMusrati,
    bio: "Moatasem Al-Musrati (born 6 April 1996) is a Libyan professional footballer who plays as a defensive midfielder for Süper Lig club Beşiktaş JK[_{{{CITATION{{{_1{Al-Musrati - Wikipedia](https://en.wikipedia.org/wiki/Al-Musrati). He has previously played for clubs like Braga and Vitória de Guimarães[_{{{CITATION{{{_1{Al-Musrati - Wikipedia](https://en.wikipedia.org/wiki/Al-Musrati).",
    instagram: "moatasemalmusrati",
    twitter: "MoatasemAlMusrati",
    facebook: "MoatasemAlMusratiOfficial",
  },
};
