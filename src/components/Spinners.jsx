import React from "react";

const Spinners = () => {
  return (
    <>
      {/* component */}
      {/* Page Container */}
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="flex flex-col">
          <div className="flex space-x-24">
            {/* Regular Spinners */}
            <div className="container space-y-10 relative">
              <h1 className="mb-8 text-xl font-semibold">Regular Spinners</h1>
              {/* Open Ring Examples */}
              <div className="flex flex-col">
                <h4 className="mb-8">Open Rings</h4>
                <div className="flex flex-row space-x-4">
                  {/* Open Ring Spinner s1 */}
                  <div
                    className="w-12 h-12 rounded-full animate-spin
              border border-solid border-yellow-500 border-t-transparent"
                  />
                  {/* Open Ring Spinner s2 */}
                  <div
                    className="w-12 h-12 rounded-full animate-spin
              border-2 border-solid border-blue-500 border-t-transparent"
                  />
                  {/* Open Ring Spinner s4 */}
                  <div
                    className="w-12 h-12 rounded-full animate-spin
              border-4 border-solid border-green-500 border-t-transparent"
                  />
                  {/* Open Ring Spinner s8 */}
                  <div
                    className="w-12 h-12 rounded-full animate-spin
              border-8 border-solid border-purple-500 border-t-transparent"
                  />
                </div>
              </div>
              {/* Close Ring Examples */}
              <div className="flex flex-col">
                <h4 className="mb-8">Closed Rings</h4>
                <div className="flex flex-row space-x-16">
                  {/* Closed Ring Spinner s1 */}
                  <div className="flex">
                    <div className="relative">
                      {/* Outer Ring*/}
                      <div
                        className="w-12 h-12 rounded-full absolute
                      border border-solid border-gray-200"
                      />
                      {/* Inner Ring */}
                      <div
                        className="w-12 h-12 rounded-full animate-spin absolute
                      border border-solid border-yellow-500 border-t-transparent"
                      />
                    </div>
                  </div>
                  {/* Closed Ring Spinner s2 */}
                  <div className="flex">
                    <div className="relative">
                      {/* Outer Ring*/}
                      <div
                        className="w-12 h-12 rounded-full absolute
                      border-2 border-solid border-gray-200"
                      />
                      {/* Inner Ring */}
                      <div
                        className="w-12 h-12 rounded-full animate-spin absolute
                      border-2 border-solid border-blue-500 border-t-transparent"
                      />
                    </div>
                  </div>
                  {/* Closed Ring Spinner s4 */}
                  <div className="flex">
                    <div className="relative">
                      {/* Outer Ring*/}
                      <div
                        className="w-12 h-12 rounded-full absolute
                      border-4 border-solid border-gray-200"
                      />
                      {/* Inner Ring */}
                      <div
                        className="w-12 h-12 rounded-full animate-spin absolute
                      border-4 border-solid border-green-500 border-t-transparent"
                      />
                    </div>
                  </div>
                  {/* Closed Ring Spinner s8 */}
                  <div className="flex">
                    <div className="relative">
                      {/* Outer Ring*/}
                      <div
                        className="w-12 h-12 rounded-full absolute
                      border-8 border-solid border-gray-200"
                      />
                      {/* Inner Ring */}
                      <div
                        className="w-12 h-12 rounded-full animate-spin absolute
                      border-8 border-solid border-purple-500 border-t-transparent"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Edge X Ring Examples */}
              <div className="flex flex-col">
                <h4 className="my-8">Edge X Rings</h4>
                <div className="flex flex-row space-x-4">
                  {/* Edge X Ring Spinner s1 */}
                  <div
                    className="w-12 h-12 rounded-full animate-spin
              border-x border-solid border-yellow-500 border-t-transparent"
                  />
                  {/* Edge X Ring Spinner s2 */}
                  <div
                    className="w-12 h-12 rounded-full animate-spin
              border-x-2 border-solid border-blue-500 border-t-transparent"
                  />
                  {/* Edge X Ring Spinner s4 */}
                  <div
                    className="w-12 h-12 rounded-full animate-spin
              border-x-4 border-solid border-green-500 border-t-transparent"
                  />
                  {/* Edge X Ring Spinner s8 */}
                  <div
                    className="w-12 h-12 rounded-full animate-spin
              border-x-8 border-solid border-purple-500 border-t-transparent"
                  />
                </div>
              </div>
              {/* Edge Y Ring Examples */}
              <div className="flex flex-col">
                <h4 className="mb-8">Edge Y Rings</h4>
                <div className="flex flex-row space-x-4">
                  {/* Edge Y Ring Spinner s1 */}
                  <div
                    className="w-12 h-12 rounded-full animate-spin
              border-y border-solid border-yellow-500 border-t-transparent"
                  />
                  {/* Edge Y Ring Spinner s2 */}
                  <div
                    className="w-12 h-12 rounded-full animate-spin
              border-y-2 border-solid border-blue-500 border-t-transparent"
                  />
                  {/* Edge Y Ring Spinner s4 */}
                  <div
                    className="w-12 h-12 rounded-full animate-spin
              border-y-4 border-solid border-green-500 border-t-transparent"
                  />
                  {/* Edge Y Ring Spinner s8 */}
                  <div
                    className="w-12 h-12 rounded-full animate-spin
              border-y-8 border-solid border-purple-500 border-t-transparent"
                  />
                </div>
              </div>
            </div>
            {/* Dashed Spinners */}
            <div className="container space-y-10 relative">
              <h1 className="mb-8 text-xl font-semibold">Dashed Spinners</h1>
              {/* Open Ring Examples */}
              <div className="flex flex-col">
                <h4 className="mb-8">Open Rings</h4>
                <div className="flex flex-row space-x-4">
                  {/* Open Ring Spinner s1 */}
                  <div
                    className="w-12 h-12 rounded-full animate-spin
              border border-dashed border-yellow-500 border-t-transparent"
                  />
                  {/* Open Ring Spinner s2 */}
                  <div
                    className="w-12 h-12 rounded-full animate-spin
              border-2 border-dashed border-blue-500 border-t-transparent"
                  />
                  {/* Open Ring Spinner s4 */}
                  <div
                    className="w-12 h-12 rounded-full animate-spin
              border-4 border-dashed border-green-500 border-t-transparent"
                  />
                  {/* Open Ring Spinner s8 */}
                  <div
                    className="w-12 h-12 rounded-full animate-spin
              border-8 border-dashed border-purple-500 border-t-transparent"
                  />
                </div>
              </div>
              {/* Close Ring Examples */}
              <div className="flex flex-col">
                <h4 className="mb-8">Closed Rings</h4>
                <div className="flex flex-row space-x-16">
                  {/* Closed Ring Spinner s1 */}
                  <div className="flex">
                    <div className="relative">
                      {/* Outer Ring*/}
                      <div
                        className="w-12 h-12 rounded-full absolute
                      border border-dashed border-gray-200"
                      />
                      {/* Inner Ring */}
                      <div
                        className="w-12 h-12 rounded-full animate-spin absolute
                      border border-dashed border-yellow-500 border-t-transparent"
                      />
                    </div>
                  </div>
                  {/* Closed Ring Spinner s2 */}
                  <div className="flex">
                    <div className="relative">
                      {/* Outer Ring*/}
                      <div
                        className="w-12 h-12 rounded-full absolute
                      border-2 border-dashed border-gray-200"
                      />
                      {/* Inner Ring */}
                      <div
                        className="w-12 h-12 rounded-full animate-spin absolute
                      border-2 border-dashed border-blue-500 border-t-transparent"
                      />
                    </div>
                  </div>
                  {/* Closed Ring Spinner s4 */}
                  <div className="flex">
                    <div className="relative">
                      {/* Outer Ring*/}
                      <div
                        className="w-12 h-12 rounded-full absolute
                      border-4 border-dashed border-gray-200"
                      />
                      {/* Inner Ring */}
                      <div
                        className="w-12 h-12 rounded-full animate-spin absolute
                      border-4 border-dashed border-green-500 border-t-transparent"
                      />
                    </div>
                  </div>
                  {/* Closed Ring Spinner s8 */}
                  <div className="flex">
                    <div className="relative">
                      {/* Outer Ring*/}
                      <div
                        className="w-12 h-12 rounded-full absolute
                      border-8 border-dashed border-gray-200"
                      />
                      {/* Inner Ring */}
                      <div
                        className="w-12 h-12 rounded-full animate-spin absolute
                      border-8 border-dashed border-purple-500 border-t-transparent"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Edge X Ring Examples */}
              <div className="flex flex-col">
                <h4 className="my-8">Edge X Rings</h4>
                <div className="flex flex-row space-x-4">
                  {/* Edge X Ring Spinner s1 */}
                  <div
                    className="w-12 h-12 rounded-full animate-spin
              border-x border-dashed border-yellow-500 border-t-transparent"
                  />
                  {/* Edge X Ring Spinner s2 */}
                  <div
                    className="w-12 h-12 rounded-full animate-spin
              border-x-2 border-dashed border-blue-500 border-t-transparent"
                  />
                  {/* Edge X Ring Spinner s4 */}
                  <div
                    className="w-12 h-12 rounded-full animate-spin
              border-x-4 border-dashed border-green-500 border-t-transparent"
                  />
                  {/* Edge X Ring Spinner s8 */}
                  <div
                    className="w-12 h-12 rounded-full animate-spin
              border-x-8 border-dashed border-purple-500 border-t-transparent"
                  />
                </div>
              </div>
              {/* Edge Y Ring Examples */}
              <div className="flex flex-col">
                <h4 className="mb-8">Edge Y Rings</h4>
                <div className="flex flex-row space-x-4">
                  {/* Edge Y Ring Spinner s1 */}
                  <div
                    className="w-12 h-12 rounded-full animate-spin
              border-y border-dashed border-yellow-500 border-t-transparent"
                  />
                  {/* Edge Y Ring Spinner s2 */}
                  <div
                    className="w-12 h-12 rounded-full animate-spin
              border-y-2 border-dashed border-blue-500 border-t-transparent"
                  />
                  {/* Edge Y Ring Spinner s4 */}
                  <div
                    className="w-12 h-12 rounded-full animate-spin
              border-y-4 border-dashed border-green-500 border-t-transparent"
                  />
                  {/* Edge Y Ring Spinner s8 */}
                  <div
                    className="w-12 h-12 rounded-full animate-spin
              border-y-8 border-dashed border-purple-500 border-t-transparent"
                  />
                </div>
              </div>
            </div>
            {/* Spinners With Shadow */}
            <div className="container space-y-10 relative">
              <h1 className="mb-8 text-xl font-semibold">
                Spinners With Shadow
              </h1>
              {/* Open Ring Examples */}
              <div className="flex flex-col">
                <h4 className="mb-8">Open Rings</h4>
                <div className="flex flex-row space-x-4">
                  {/* Open Ring Spinner s1 */}
                  <div
                    className="w-12 h-12 rounded-full animate-spin
              border border-solid border-yellow-500 border-t-transparent shadow-md"
                  />
                  {/* Open Ring Spinner s2 */}
                  <div
                    className="w-12 h-12 rounded-full animate-spin
              border-2 border-solid border-blue-500 border-t-transparent shadow-md"
                  />
                  {/* Open Ring Spinner s4 */}
                  <div
                    className="w-12 h-12 rounded-full animate-spin
              border-4 border-solid border-green-500 border-t-transparent shadow-md"
                  />
                  {/* Open Ring Spinner s8 */}
                  <div
                    className="w-12 h-12 rounded-full animate-spin
              border-8 border-solid border-purple-500 border-t-transparent shadow-md"
                  />
                </div>
              </div>
              {/* Close Ring Examples */}
              <div className="flex flex-col">
                <h4 className="mb-8">Closed Rings</h4>
                <div className="flex flex-row space-x-16">
                  {/* Closed Ring Spinner s1 */}
                  <div className="flex">
                    <div className="relative">
                      {/* Outer Ring*/}
                      <div
                        className="w-12 h-12 rounded-full absolute
                      border border-solid border-gray-200"
                      />
                      {/* Inner Ring */}
                      <div
                        className="w-12 h-12 rounded-full animate-spin absolute
                      border border-solid border-yellow-500 border-t-transparent shadow-md"
                      />
                    </div>
                  </div>
                  {/* Closed Ring Spinner s2 */}
                  <div className="flex">
                    <div className="relative">
                      {/* Outer Ring*/}
                      <div
                        className="w-12 h-12 rounded-full absolute
                      border-2 border-solid border-gray-200"
                      />
                      {/* Inner Ring */}
                      <div
                        className="w-12 h-12 rounded-full animate-spin absolute
                      border-2 border-solid border-blue-500 border-t-transparent shadow-md"
                      />
                    </div>
                  </div>
                  {/* Closed Ring Spinner s4 */}
                  <div className="flex">
                    <div className="relative">
                      {/* Outer Ring*/}
                      <div
                        className="w-12 h-12 rounded-full absolute
                      border-4 border-solid border-gray-200"
                      />
                      {/* Inner Ring */}
                      <div
                        className="w-12 h-12 rounded-full animate-spin absolute
                      border-4 border-solid border-green-500 border-t-transparent shadow-md"
                      />
                    </div>
                  </div>
                  {/* Closed Ring Spinner s8 */}
                  <div className="flex">
                    <div className="relative">
                      {/* Outer Ring*/}
                      <div
                        className="w-12 h-12 rounded-full absolute
                      border-8 border-solid border-gray-200"
                      />
                      {/* Inner Ring */}
                      <div
                        className="w-12 h-12 rounded-full animate-spin absolute
                      border-8 border-solid border-purple-500 border-t-transparent shadow-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Edge X Ring Examples */}
              <div className="flex flex-col">
                <h4 className="my-8">Edge X Rings</h4>
                <div className="flex flex-row space-x-4">
                  {/* Edge X Ring Spinner s1 */}
                  <div
                    className="w-12 h-12 rounded-full animate-spin
              border-x border-solid border-yellow-500 border-t-transparent shadow-md"
                  />
                  {/* Edge X Ring Spinner s2 */}
                  <div
                    className="w-12 h-12 rounded-full animate-spin
              border-x-2 border-solid border-blue-500 border-t-transparent shadow-md"
                  />
                  {/* Edge X Ring Spinner s4 */}
                  <div
                    className="w-12 h-12 rounded-full animate-spin
              border-x-4 border-solid border-green-500 border-t-transparent shadow-md"
                  />
                  {/* Edge X Ring Spinner s8 */}
                  <div
                    className="w-12 h-12 rounded-full animate-spin
              border-x-8 border-solid border-purple-500 border-t-transparent shadow-md"
                  />
                </div>
              </div>
              {/* Edge Y Ring Examples */}
              <div className="flex flex-col">
                <h4 className="mb-8">Edge Y Rings</h4>
                <div className="flex flex-row space-x-4">
                  {/* Edge Y Ring Spinner s1 */}
                  <div
                    className="w-12 h-12 rounded-full animate-spin
              border-y border-solid border-yellow-500 border-t-transparent shadow-md"
                  />
                  {/* Edge Y Ring Spinner s2 */}
                  <div
                    className="w-12 h-12 rounded-full animate-spin
              border-y-2 border-solid border-blue-500 border-t-transparent shadow-md"
                  />
                  {/* Edge Y Ring Spinner s4 */}
                  <div
                    className="w-12 h-12 rounded-full animate-spin
              border-y-4 border-solid border-green-500 border-t-transparent shadow-md"
                  />
                  {/* Edge Y Ring Spinner s8 */}
                  <div
                    className="w-12 h-12 rounded-full animate-spin
              border-y-8 border-solid border-purple-500 border-t-transparent shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Notes */}
          <span className="text-center font-bold mt-40">
            <a
              href="https://egoistdeveloper.github.io/twcss-to-sass-playground/"
              target="_blank"
              className="text-blue-600"
            >
              Convetert to SASS
            </a>
          </span>
        </div>
      </div>
    </>
  );
};

export default Spinners;
