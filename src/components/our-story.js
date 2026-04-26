import React from "react";
import Photos from "../components/photos";


export default function Location() {

  return (
    <>
      <div class="info flex-column d-lg-flex gap-1 mt-3 mb-4">
      <p class="flex-shrink-1">Where to begin! For those that don't know, we met on an online dating app, which starts with a T. Meeting online is normal now don't worry. We talked online for a little while, eventually I made my way down to morgantown to meet Lizzy in person for the first time. Still one of our best dates to this day. We crammed in just about every queer woman hobby into one day. We started off roller skating at the park, Then we drove downtown in lizzy's Crystler Pacifca with no A/C and music playoing directly out of her phone. We got boba and poke takeout at what became one of our regular places to eat together, Bubble Fish. We made our way back to her apartment where I met Zach and Jessica for the first time. Of course we watched Haikyuu and talked about the TV shows we like.</p>
      <p>I think after that day we both realized how how compatible we were right off the bat, and how we wanted to keep learning more about each other. After that, we hung out as much as we could, it was covid and we were both still in school, so that was our true weekend warrior era. We'd take turns driving back and forth, until we eventually moved in together in Rhode Island. And here we are!</p>
      </div>
      <div className="photo-layer">
        <div class="photos d-flex justify-content-center">
          <div class="photo-container">
            <Photos></Photos>
          </div>
        </div>
      </div>
    
    </>
  );
}


