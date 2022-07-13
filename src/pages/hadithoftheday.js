import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import { useNavigate } from 'react-router-dom';

export default function Hadithoftheday() {
  const navigate = useNavigate();

  const [hadith, setHadith] = useState('');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    async function toUseAwait() {
      let data = await fetch(
        'https://hadithnourislamapi.herokuapp.com/hadith',
        {
          method: 'GET',
          headers: {
            accept: 'application/json',
          },
        }
      );
      let result = await data.json();

      setHadith(result);
      setLoaded(true);
    }

    toUseAwait();
  }, []);

  return (
    <>
      <Navbar />
      <section
        class="relative pt-16 pb-56 overflow-hidden"
        id="chapter-text-div"
      >
        <section class="py-36 overflow-hidden" id="prayertimepage-div">
          <div
            class="relative z-10 container mx-auto px-4"
            id="chapter-text-div"
          >
            <img
              class="mb-11 mx-auto"
              src="/islamic-mosque-compressed.png"
              alt=""
              id="hadith-image"
            />
            <div id="div-that-holds-hadith">
              {loaded ? (
                <>
                  <h1 class="font-bold">{hadith.narrator}:</h1>
                  <br></br>
                  <div>{hadith.arabic}</div>
                  <br></br>
                  <div>{hadith.text}</div>
                  <br></br>
                  <div>{hadith.reference}</div>
                </>
              ) : (
                <p>loading...</p>
              )}
            </div>
            <div class="group relative md:max-w-max mx-auto">
              <div class="absolute top-0 left-0 w-full h-full bg-gradient-green opacity-0 group-hover:opacity-50 rounded-lg transition ease-out duration-300"></div>
              <button class="p-1 w-full font-heading font-semibold text-xs text-gray-900 group-hover:text-white uppercase overflow-hidden rounded-md">
                <div
                  class="relative p-5 bg-gradient-green overflow-hidden rounded-md go-back"
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
