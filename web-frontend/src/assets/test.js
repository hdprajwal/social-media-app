<div className="flex bg-gray-900 fixed top-0 inset-x-0 z-100 h-16 items-center">
<div className="w-full max-w-screen-xl relative mx-auto px-6">
  <div className="flex items-center -mx-6">
    <div className="lg:w-1/4 xl:w-1/5 pl-6 pr-6 lg:pr-8">
      <div className="flex items-center">
          <Logo className="w-10" />
        {/* <img className="h-10 w-10" src={require("./assets/logo.svg")} alt="logo"/> */}
        <span className="px-4 text-white hidden">User Name</span>
      </div>
    </div>
    <div className="flex flex-grow min-w-0 lg:w-3/4 xl:w-4/5">
      <div className="w-full min-w-0 lg:px-6 xl:w-3/4 xl:px-12">
        <div className="relative pr-4">
          <input
            className="text-gray-600 py-2 text-center w-full appearance-none leading-normal border border-transparent rounded-lg focus:outline-none select-none truncate focus:bg-gray-900 focus:border-gray-300 bg-gray-800"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="hidden lg:flex lg:items-center lg:justify-between xl:w-1/4 px-6">
        <div className="flex justify-around items-center text-gray-500">
          <button
            className="flex items-center hover:bg-gray-800"
          >
              <img className="h-10 w-10" src={require('./assets/logo.svg')} alt="Logo" />
          </button>
          <button
            className="flex items-center hover:text-gray-700"
          >
              <img className="h-10 w-10" src={require('./assets/logo.svg')} alt="Logo" />
          </button>
          <button
            className="flex items-center hover:text-gray-700"
          >
              <img className="h-10 w-10" src={require('./assets/logo.svg')} alt="Logo" />
          </button>
          <button
            className="flex items-center hover:text-gray-700"
          >
              <img className="h-10 w-10" src={require('./assets/logo.svg')} alt="Logo" />
          </button>
          <button
            className="flex items-center hover:text-gray-700 mr-5"
          >
              <img className="h-10 w-10" src={require('./assets/logo.svg')} alt="Logo" />
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
</div>