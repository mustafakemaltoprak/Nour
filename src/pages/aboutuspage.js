import React from 'react';
import Navbar from '../components/navbar';

export default function aboutuspage() {
  return (
    <>
      <Navbar />
      <section class="relative pt-24 pb-24 md:pb-40 bg-gray-100 overflow-hidden">
        <img
          class="absolute bottom-0 left-0 sm:-mb-24 sm:w-full"
          src="/half-circles-triple.svg"
          alt=""
        />
        <div class="container px-4 mx-auto relative">
          <div class="flex items-center mb-24 sm:mb-44">
            <span class="font-heading text-xl"></span>
            <div class="mx-4 rounded-full bg-gray-200 h-1 w-1"></div>
            <span class="font-heading text-xl"></span>
          </div>
          <div class="max-w-4xl mx-auto text-center mb-24">
            <h1 class="font-heading text-4xl sm:text-5xl md:text-6xl 3xl:text-7xl mb-10">
              “Alone we can do so little, together we can do so much.”
            </h1>
          </div>
          <div class="flex flex-wrap justify-center -mx-4 -mb-16">
            <div class="w-full md:w-1/3 lg:w-1/5 px-4 mb-16">
              <div class="max-w-sm mx-auto text-center">
                <div class="flex-shrink-0 flex items-center justify-center w-24 h-24 mx-auto mb-3 bg-white rounded-full border border-gray-200">
                  <img
                    class="w-18 h-18 rounded-full object-cover"
                    src="/me.jpg"
                    alt=""
                  />
                </div>
                <span class="text-sm text-black-300">Founder</span>
                <h4 class="text-2xl font-medium mt-1 mb-7">Mustafa Toprak</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
