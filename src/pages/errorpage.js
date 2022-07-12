import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Errorpage() {
  const navigate = useNavigate();
  return (
    <>
      <section class="relative pt-16 pb-56 overflow-hidden" id="error-section">
        <img
          class="absolute left-1/2 transform -translate-x-1/2 bottom-0"
          src="/radial2.svg"
          alt=""
        />
        <div class="relative z-10 container mx-auto px-4">
          <img
            class="mb-11 mx-auto"
            src="/muslim-couple.png"
            alt=""
            id="error-pic"
          />
          <div class="md:max-w-xl mx-auto mb-12">
            <h2 class="mb-5 font-heading font-bold text-6xl sm:text-8xl xl:text-10xl text-gray-900 text-center">
              Oh no! The page does not exist.
            </h2>
          </div>
          <div class="group relative md:max-w-max mx-auto">
            <div class="absolute top-0 left-0 w-full h-full bg-gradient-green opacity-0 group-hover:opacity-50 rounded-lg transition ease-out duration-300"></div>
            <button class="p-1 w-full font-heading font-semibold text-xs text-gray-900 group-hover:text-white uppercase overflow-hidden rounded-md">
              <div class="relative p-5 bg-gradient-green overflow-hidden rounded-md">
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
                    <p
                      onClick={() => {
                        navigate('/');
                      }}
                    >
                      Go back to Homepage
                    </p>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
