import React from 'react';

function Home() {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img className="h-10" alt="peepoClub logo" src="/assets/logo.svg" />
            <span className="ml-3 text-xl">peepoChat</span>
          </div>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a
              href="https://github.com/peepoclub/peepochat"
              className="hover:text-gray-900 mr-5"
            >
              GitHub
            </a>
            <a
              href="https://github.com/peepoclub/peepoChat/discussions"
              className="hover:text-gray-900 mr-5"
            >
              Discussions
            </a>
            <a
              href="https://github.com/peepoclub/peepoChat/projects/1"
              className="hover:text-gray-900 mr-5"
            >
              Plans
            </a>
            <a
              href="https://docs.chat.peepo.club"
              className="hover:text-gray-900"
            >
              Documentation
            </a>
          </nav>
          <a href="/app" 
            className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">
            Open app
          </a>
        </div>
      </header>
      <div className="min-h-screen">
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                className="object-cover object-center rounded"
                alt="Cool."
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
              <a
                href="https://github.com/peepoclub/peepoChat/projects/1"
                className="inline-block text-white bg-indigo-500 hover:bg-indigo-600 border-0 py-2 px-6 focus:outline-none rounded text-lg mb-2"
              >
                Our Plans
              </a>
              <a
                href="https://github.com/peepoclub/peepoChat"
                className="inline-block text-white bg-blue-500 hover:bg-blue-600 border-0 py-2 px-6 focus:outline-none rounded text-lg"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </div>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a
            href="/"
            className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
          >
            <img className="h-10" alt="peepoClub logo" src="/assets/logo.svg" />
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            2020-2021 —
            <a
              href="https://github.com/peepoclub/peepochat"
              className="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              peepoclub on GitHub
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Home;
