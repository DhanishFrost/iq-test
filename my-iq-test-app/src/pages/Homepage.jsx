import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const startTest = () => {
    navigate('/iq-test/IQTest');
  };

  const baseUrl = process.env.NODE_ENV === "development" ? "" : "/iq-test/";
  return (
    <div className="bg-gray-100">
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between">
          <div className="max-w-xl">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Free Online IQ Test
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Discover your intellectual potential with our free and comprehensive IQ tests.
            </p>
            <div className="mt-6">
              <button 
                onClick={startTest} 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                aria-label="Start IQ Test"
              >
                Start Test
              </button>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 lg:flex-shrink-0">
            <img className="w-120" src={`${baseUrl}IQTest.jpg`} alt="IQ Test" />
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What We Offer
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Explore the various features we provide to help you assess your intellectual abilities.
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                        <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg leading-6 font-medium text-gray-900 tracking-tight">Accurate Results</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Our tests are scientifically designed to provide accurate and reliable results.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                        <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6 0A9 9 0 1121 12a9 9 0 01-9 9z" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg leading-6 font-medium text-gray-900 tracking-tight">Quick and Easy</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Complete the test in just a few minutes and get instant results.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                        <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-4a2 2 0 012-2h2a2 2 0 012 2v4m-6 0h6m-3-8V5m0 0L9 9m3-4l3 4" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg leading-6 font-medium text-gray-900 tracking-tight">Free of Charge</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Enjoy a high-quality IQ test experience at no cost.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
