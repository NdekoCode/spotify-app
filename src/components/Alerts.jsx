import React from "react";

const Alerts = () => {
  return (
    <div className="container text-white">
      <div className="ml-auto mr-3 flex flex-col gap-2 w-72 border-b-4 border-b-blue-600">
        <div
          className="bg-blue-50 rounded-t text-blue-900 px-4 py-3"
          role="alert"
        >
          <div className="flex">
            <div>
              <svg
                className="fill-current h-6 w-6 text-blue-500 mr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-blue-500">
                Lorem ipsum dolor sit amet, consectetur adip!.
              </p>
            </div>
            <p className="flex cursor-pointer">
              <svg
                className="text-blue-500 text-xl"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z" />
                <path d="M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
              </svg>
            </p>
          </div>
        </div>
      </div>
      <br />
      <div className="ml-auto mr-3 flex flex-col gap-2 w-72 border-b-4 border-b-blue-600">
        <div
          className="bg-green-50 rounded-t text-green-900 px-4 py-3"
          role="alert"
        >
          <div className="flex">
            <div>
              <svg
                className="fill-current h-6 w-6 text-green-500 mr-4"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8l-1.41-1.42z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-green-500">
                Lorem ipsum dolor sit amet, consectetur adip!.
              </p>
            </div>
            <p className="flex cursor-pointer">
              <svg
                className="text-green-500 text-xl"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z" />
                <path d="M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
              </svg>
            </p>
          </div>
        </div>
      </div>
      <br />
      <div className="ml-auto mr-3 flex flex-col gap-2 w-72 border-b-4 border-b-blue-600">
        <div
          className="bg-yellow-50 rounded-t text-yellow-900 px-4 py-3"
          role="alert"
        >
          <div className="flex">
            <div>
              <svg
                className="fill-current h-6 w-6 text-yellow-500 mr-4"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path d="M13 14h-2V9h2m0 9h-2v-2h2M1 21h22L12 2L1 21z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-yellow-500">
                Lorem ipsum dolor sit amet, consectetur adip!.
              </p>
            </div>
            <p className="flex cursor-pointer">
              <svg
                className="text-yellow-500 text-xl"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z" />
                <path d="M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
              </svg>
            </p>
          </div>
        </div>
      </div>
      <br />
      <div className="ml-auto mr-3 flex flex-col gap-2 w-72 border-b-4 border-b-blue-600">
        <div
          className="bg-red-50 rounded-t text-red-900 px-4 py-3"
          role="alert"
        >
          <div className="flex">
            <div>
              <svg
                className="fill-current h-6 w-6 text-red-500 mr-4"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2m0 2c-1.9 0-3.6.6-4.9 1.7l11.2 11.2c1-1.4 1.7-3.1 1.7-4.9c0-4.4-3.6-8-8-8m4.9 14.3L5.7 7.1C4.6 8.4 4 10.1 4 12c0 4.4 3.6 8 8 8c1.9 0 3.6-.6 4.9-1.7z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-red-500">
                Lorem ipsum dolor sit amet, consectetur adip!.
              </p>
            </div>
            <p className="flex cursor-pointer">
              <svg
                className="text-red-500 text-xl"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z" />
                <path d="M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
              </svg>
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-screen flex flex-col space-y-4 items-center justify-center bg-gray-100 py-6">
        <div className="relative font-semibold text-2xl pb-4 border-b border-gray-300">
          <span>Alerts components</span>
          <span className="absolute text-xs right-0 -mt-6 -mr-6 bg-blue-300 text-blue-800 rounded p-1">
            by iAmine
          </span>
        </div>
        <div className="alert flex flex-row items-center bg-red-200 p-5 rounded border-b-2 border-red-300">
          <div className="alert-icon flex items-center bg-red-100 border-2 border-red-500 justify-center h-10 w-10 flex-shrink-0 rounded-full">
            <span className="text-red-500">
              <svg fill="currentColor" viewBox="0 0 20 20" className="h-6 w-6">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
          <div className="alert-content ml-4">
            <div className="alert-title font-semibold text-lg text-red-800">
              Error
            </div>
            <div className="alert-description text-sm text-red-600">
              This is an alert message, alert message goes here..!
            </div>
          </div>
        </div>
        <div className="alert flex flex-row items-center bg-green-200 p-5 rounded border-b-2 border-green-300">
          <div className="alert-icon flex items-center bg-green-100 border-2 border-green-500 justify-center h-10 w-10 flex-shrink-0 rounded-full">
            <span className="text-green-500">
              <svg fill="currentColor" viewBox="0 0 20 20" className="h-6 w-6">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
          <div className="alert-content ml-4">
            <div className="alert-title font-semibold text-lg text-green-800">
              Success
            </div>
            <div className="alert-description text-sm text-green-600">
              This is an alert message, alert message goes here..!
            </div>
          </div>
        </div>
        <div className="alert flex flex-row items-center bg-yellow-200 p-5 rounded border-b-2 border-yellow-300">
          <div className="alert-icon flex items-center bg-yellow-100 border-2 border-yellow-500 justify-center h-10 w-10 flex-shrink-0 rounded-full">
            <span className="text-yellow-500">
              <svg fill="currentColor" viewBox="0 0 20 20" className="h-6 w-6">
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
          <div className="alert-content ml-4">
            <div className="alert-title font-semibold text-lg text-yellow-800">
              Warning
            </div>
            <div className="alert-description text-sm text-yellow-600">
              This is an alert message, alert message goes here..!
            </div>
          </div>
        </div>
        <div className="alert flex flex-row items-center bg-blue-200 p-5 rounded border-b-2 border-blue-300">
          <div className="alert-icon flex items-center bg-blue-100 border-2 border-blue-500 justify-center h-10 w-10 flex-shrink-0 rounded-full">
            <span className="text-blue-500">
              <svg fill="currentColor" viewBox="0 0 20 20" className="h-6 w-6">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
          <div className="alert-content ml-4">
            <div className="alert-title font-semibold text-lg text-blue-800">
              Info
            </div>
            <div className="alert-description text-sm text-blue-600">
              This is an alert message, alert message goes here..!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alerts;
