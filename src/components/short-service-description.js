import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ShortServiceDescription() {
  const navigate = useNavigate();

  const [prayerTime, setPrayerTime] = useState(true);
  const [hadith, setHadith] = useState(false);

  return (
    <section class="py-36 overflow-hidden">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto">
          <div class="flex flex-wrap justify-center md:justify-between -m-6 mb-20">
            <div class="w-auto p-6">
              <a
                class="font-heading font-semibold text-lg text-gray-900 hover:text-gray-800"
                href="/"
              >
                <p class=""></p>
                <div class="h-0.5 bg-gradient-cyan"></div>
              </a>
            </div>
            <div class="w-auto p-6">
              <p
                class="font-heading font-semibold text-lg text-gray-900 hover:text-gray-800 helper-tag"
                onClick={() => {
                  setPrayerTime(true);
                  setHadith(false);
                }}
              >
                <p class="mb-2 px-7">Prayer Times Calculator</p>
                <div class="h-0.5 bg-gray-200"></div>
              </p>
            </div>
            <div class="w-auto p-6">
              <p
                class="font-heading font-semibold text-lg text-gray-900 hover:text-gray-800 helper-tag"
                onClick={() => {
                  setPrayerTime(false);
                  setHadith(true);
                }}
              >
                <p class="mb-2 px-7">Hadith of The Day</p>
                <div class="h-0.5 bg-gray-200"></div>
              </p>
            </div>
            <div class="w-auto p-6">
              <p
                class="font-heading font-semibold text-lg text-gray-900 hover:text-gray-800"
                href="#"
              >
                <p class="mb-2 px-7" contenteditable="false"></p>
                <div class=""></div>
              </p>
            </div>
          </div>
          {prayerTime ? (
            <div class="flex flex-wrap -m-11">
              <div class="w-full md:w-1/2 p-11">
                <img class="mx-auto" src="/man.png" alt="" />
              </div>
              <div class="w-full md:w-1/2 p-11">
                <h2
                  class="mb-6 font-heading font-bold text-5xl text-gray-900"
                  contenteditable="false"
                >
                  Prayer Time Calculator
                </h2>
                <p class="mb-9 text-gray-900 text-base">
                  We use highly accurate prayer time calculation, to figure out
                  what your local prayer time is. We include multiple sources of
                  information and give you full control in choosing which source
                  you want to follow.
                </p>
                <div class="flex flex-wrap -m-2">
                  <div class="w-full lg:w-auto p-2">
                    <button
                      onClick={() => {
                        navigate('/prayertime');
                      }}
                      class="px-9 py-3.5 font-heading font-medium w-full lg:w-auto text-base text-white bg-blue-600 hover:bg-blue-700 rounded-md"
                    >
                      Prayer Times
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div class="flex flex-wrap -m-11">
              <div class="w-full md:w-1/2 p-11">
                <img
                  class="mx-auto"
                  src="/celebrity-woman-compressed.png"
                  alt=""
                />
              </div>
              <div class="w-full md:w-1/2 p-11">
                <h2
                  class="mb-6 font-heading font-bold text-5xl text-gray-900"
                  contenteditable="false"
                >
                  Hadith of The Day
                </h2>
                <p class="mb-9 text-gray-900 text-base">
                  We handpick hadiths for you and showcase them daily, have a
                  look for yourself!
                </p>
                <div class="flex flex-wrap -m-2">
                  <div class="w-full lg:w-auto p-2">
                    <button
                      onClick={() => {
                        navigate('/hadith');
                      }}
                      class="px-9 py-3.5 font-heading font-medium w-full lg:w-auto text-base text-white bg-blue-600 hover:bg-blue-700 rounded-md"
                    >
                      Hadith of The Day
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
