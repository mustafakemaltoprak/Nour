import React from 'react';

export default function header() {
  return (
    <section class="relative bg-gradient-white background-animate overflow-hidden">
      <section>
        <div class="flex items-center justify-between px-8 py-5">
          <div class="w-auto">
            <div class="flex flex-wrap items-center">
              <div class="w-auto mr-14">
                <a href="#">
                  <img src="/crescent-moon.png" alt="" class="navbar-icon" />
                </a>
              </div>
              <div class="w-auto hidden lg:block">
                <ul class="flex items-center mr-10">
                  <li class="font-heading mr-9 text-gray-900 hover:text-gray-700 text-lg">
                    <a href="prayertime">Prayer Times</a>
                  </li>
                  <li class="font-heading mr-9 text-gray-900 hover:text-gray-700 text-lg">
                    <a href="/hadith">Hadith of The Day</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="w-auto">
            <div class="flex flex-wrap items-center">
              <div class="w-auto hidden lg:block">
                <div class="flex flex-wrap">
                  <div class="w-auto">
                    <button class="font-heading block py-2 px-5 mr-5 text-lg text-gray-900 rounded-10">
                      <a href="/contact">Contact Us</a>
                    </button>
                  </div>
                  <div class="w-auto">
                    <button class="font-heading block py-2 px-5 mr-5 text-lg text-gray-900 rounded-10">
                      <a href="/team">Our Team</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hidden navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50">
          <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"></div>
          <nav class="relative z-10 px-9 py-8 bg-white h-full">
            <div class="flex flex-wrap justify-between h-full">
              <div class="w-full">
                <div class="flex items-center justify-between -m-2">
                  <div class="w-auto p-2">
                    <a class="inline-block" href="#">
                      <img src="/crescent-moon.png" alt="" />
                    </a>
                  </div>
                  <div class="w-auto p-2">
                    <a class="navbar-burger" href="#">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 18L18 6M6 6L18 18"
                          stroke="#111827"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div class="flex flex-col justify-end w-full">
                <div class="flex flex-wrap">
                  <div class="w-full">
                    <button class="p-0.5 font-heading block w-full text-lg text-gray-900 font-medium rounded-10">
                      <div class="py-2 px-5 rounded-10">
                        <p>Login</p>
                      </div>
                    </button>
                  </div>
                  <div class="w-full">
                    <button class="group relative p-0.5 font-heading block w-full text-lg text-gray-900 font-medium bg-gradient-cyan overflow-hidden rounded-10">
                      <div class="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-gradient-cyan transition ease-in-out duration-500"></div>
                      <div class="py-2 px-5 bg-white rounded-lg">
                        <p class="relative z-10">Try for free</p>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </section>
      <div class="relative z-10 container mx-auto px-4">
        <div class="flex flex-wrap items-center -m-6 pt-32 lg:pt-0 pb-24">
          <div class="w-full lg:w-1/2 p-6">
            <div class="lg:max-w-xl">
              <h1 class="mb-8 font-heading text-8xl md:text-10xl text-gray-900 font-bold">
                Nour is your guide&nbsp;
              </h1>
              <p class="mb-10 text-gray-600 text-xl">
                We help you remember your prayer times, give access to free
                education on Islam &amp; offer fundraisers for our community
                worldwide.
              </p>
              <div class="flex flex-wrap -m-2.5 mb-20">
                <div class="w-auto p-2.5">
                  <a href="#">
                    <img src="/app-store.svg" alt="" />
                  </a>
                </div>
                <div class="w-auto p-2.5">
                  <a href="#">
                    <img src="/play-store.svg" alt="" />
                  </a>
                </div>
              </div>
              <p class="mb-2.5 font-heading font-semibold text-gray-900 text-lg">
                Trusted by 1M+ customers
              </p>
              <div class="flex items-center">
                <div class="flex items-center mr-2">
                  <img class="mr-1" src="/star.svg" alt="" />
                  <img class="mr-1" src="/star.svg" alt="" />
                  <img class="mr-1" src="/star.svg" alt="" />
                  <img class="mr-1" src="/star.svg" alt="" />
                  <img src="/star.svg" alt="" />
                </div>
                <div class="flex items-center">
                  <p class="mr-1.5 font-heading font-medium text-base text-gray-900">
                    4.2/5
                  </p>
                  <p class="font-heading text-gray-500 text-base">
                    (45k Reviews)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/2 p-6">
            <img class="block mx-auto homepage-logo" src="/mosque.png" alt="" />
          </div>
        </div>
      </div>
      <img class="absolute bottom-0 left-0" src="/radial2.svg" />
    </section>
  );
}
