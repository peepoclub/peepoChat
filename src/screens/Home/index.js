import React from "react";

function Home() {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img className="h-10" alt="logo" src="/assets/logo.svg" />
            <span className="ml-3 text-xl">peepoChat</span>
          </div>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a
              href="https://github.com/peepoclub/peepochat"
              className="hover:text-gray-900"
            >
              GitHub
            </a>
          </nav>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">
            Open app
          </button>
        </div>
      </header>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="/assets/screenshot.png"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Crossplatform Twitch Chat App. Soon™
            </h1>
            <p className="mb-8 leading-relaxed">
              Use Twitch chat everywhere — Windows, macOS, Linux, Android, iOS
              and other platforms
            </p>
            <button class="inline-flex text-white bg-gray-100 border-0 py-2 px-6 focus:outline-none rounded text-lg text-gray-600">
              Open app
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
