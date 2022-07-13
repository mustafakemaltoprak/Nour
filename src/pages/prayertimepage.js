import React, { useRef, useState, useEffect } from 'react';
import Navbar from '../components/navbar';

export default function Prayertimepage() {
  const inputValue = useRef(null);
  const [toggled, setToggled] = useState(false);
  const [prayerTimes, setPrayerTimes] = useState(null);
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <section
        class="relative bg-gradient-white background-animate overflow-hidden"
        id="section-prayer"
      >
        <section class="py-36 overflow-hidden" id="prayertimepage-div">
          {toggled ? (
            <div class="container mx-auto px-4">
              <div class="max-w-3xl mx-auto">
                <div class="flex flex-wrap justify-center md:justify-between -m-6 mb-20">
                  <div class="w-auto p-6"></div>
                </div>
                <div class="flex flex-wrap -m-11">
                  <div class="w-full md:w-1/2 p-11">
                    <img class="mx-auto" src="/women-with-hijab.png" alt="" />
                  </div>
                  <div class="w-full md:w-1/2 p-11" id="textdiv-2">
                    <div>
                      <h4 class="mb-6 font-heading font-bold text-5xl text-gray-900">
                        Fajr {prayerTimes.Fajr}
                      </h4>
                      <h4 class="mb-6 font-heading font-bold text-5xl text-gray-900">
                        Sunrise {prayerTimes.Sunrise}
                      </h4>
                      <h4 class="mb-6 font-heading font-bold text-5xl text-gray-900">
                        Dhuhr {prayerTimes.Dhuhr}
                      </h4>
                      <h4 class="mb-6 font-heading font-bold text-5xl text-gray-900">
                        Asr {prayerTimes.Asr}
                      </h4>
                      <h4 class="mb-6 font-heading font-bold text-5xl text-gray-900">
                        Maghrib {prayerTimes.Maghrib}
                      </h4>
                      <h4 class="mb-6 font-heading font-bold text-5xl text-gray-900">
                        Isha'a {prayerTimes[Object.keys(prayerTimes)[5]]}
                      </h4>
                    </div>
                    <button
                      onClick={() => {
                        setToggled(!toggled);
                        setSpinner(false);
                      }}
                      class="px-9 py-3.5 font-heading font-medium w-full lg:w-auto text-base text-white bg-blue-600 hover:bg-blue-700 rounded-md"
                    >
                      Go back and change your location
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div class="container mx-auto px-4">
              <div class="max-w-3xl mx-auto">
                <div class="flex flex-wrap justify-center md:justify-between -m-6 mb-20">
                  <div class="w-auto p-6"></div>
                </div>
                <div class="flex flex-wrap -m-11">
                  <div class="w-full md:w-1/2 p-11">
                    <img class="mx-auto" src="/women-with-hijab.png" alt="" />
                  </div>
                  <div class="w-full md:w-1/2 p-11" id="textdiv">
                    <h2 class="mb-6 font-heading font-bold text-5xl text-gray-900">
                      What location are you in?
                    </h2>
                    <div class="mb-6">
                      <div>
                        <input
                          class="w-full px-6 py-4 placeholder-gray-500 text-base text-gray-500 border-2  outline-none rounded-lg"
                          type="text"
                          placeholder="Enter your current city"
                          ref={inputValue}
                        />
                      </div>
                    </div>
                    <div class="flex flex-wrap -m-2">
                      <div class="w-full lg:w-auto p-2">
                        {spinner ? (
                          <button
                            disabled
                            type="button"
                            class="px-9 py-3.5 font-heading font-medium w-full lg:w-auto text-base text-white bg-blue-600 hover:bg-blue-700 rounded-md"
                          >
                            <svg
                              role="status"
                              class="inline w-4 h-4 mr-3 text-white animate-spin"
                              viewBox="0 0 100 101"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="#E5E7EB"
                              />
                              <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentColor"
                              />
                            </svg>
                            Loading...
                          </button>
                        ) : (
                          <button
                            onClick={async () => {
                              setSpinner(true);
                              let data = await fetch(
                                `https://dailyprayer.abdulrcs.repl.co/api/${inputValue.current.value}`
                              );
                              let result = await data.json();
                              setPrayerTimes(result.today);
                              setToggled(!toggled);
                              console.log(prayerTimes);
                            }}
                            class="px-9 py-3.5 font-heading font-medium w-full lg:w-auto text-base text-white bg-blue-600 hover:bg-blue-700 rounded-md"
                          >
                            Tell me my prayer times
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
        <img
          class="absolute bottom-0 left-0"
          src="/gradient.png"
          id="gradient-image"
        />
      </section>
    </>
  );
}
