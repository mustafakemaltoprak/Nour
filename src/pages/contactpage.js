import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Contactpage() {
  const navigate = useNavigate();

  return (
    <section class="relative pt-28 bg-gradient-gray2 overflow-hidden contact-section">
      <img class="absolute left-0 top-0 h-full" src="/radial3.svg" alt="" />
      <div class="relative z-10 container mx-auto px-4">
        <div class="md:max-w-lg">
          <h2 class="mb-5 font-heading font-semibold text-6xl sm:text-7xl text-gray-900">
            We got your back!
          </h2>
          <p class="text-gray-600 text-lg">
            If you have any questions or feedback, please contact us at
            topraktechnologies@gmail.com
          </p>
          <div class="group relative md:max-w-max mx-auto">
            <div class="absolute top-0 left-0 w-full h-full bg-gradient-green opacity-0 group-hover:opacity-50 rounded-lg transition ease-out duration-300"></div>
            <button class="p-1 w-full font-heading font-semibold text-xs text-gray-900 group-hover:text-white uppercase overflow-hidden rounded-md">
              <div
                class="relative p-5 bg-gradient-green overflow-hidden rounded-md back-home-button"
                onClick={() => {
                  navigate('/');
                }}
              >
                <div class="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-gray-900 transition ease-in-out duration-500"></div>
                <div class="relative z-10 flex flex-wrap items-center justify-center -m-1">
                  <div class="w-auto p-1">
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 14.75L2.75 9.5M2.75 9.5L8 4.25M2.75 9.5L16.25 9.5"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <div class="w-auto p-1">
                    <p>Go back to Homepage</p>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div class="flex -m-6 pb-24 md:pb-0 contact-image">
          <div class="flex w-full md:w-1/2 p-6 md:pb-0">
            <img class="self-end" src="contact-compressed.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
