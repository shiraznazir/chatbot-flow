const Location = () => {
  return (
    <div className="w-full p-4">
      <div className="border p-8 border-purple-300 rounded-lg">
        <h1 className="text-2xl font-bold">Find us here</h1>
        <ul className="my-4 flex flex-col gap-8">
          {/* Address */}
          <li className="flex gap-2">
            <div className="w-10 h-10 flex justify-center items-center rounded-lg border border-purple-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-purple-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-sm font-medium">Address</h1>
              <h1 className="text-sm font-light">
                PO Box 14122 Collins Street West.Victoria
              </h1>
            </div>
          </li>
          {/* Email */}
          <li className="flex gap-2">
            <div className="w-10 h-10 flex justify-center items-center rounded-lg border border-purple-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-purple-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-sm font-medium">Email</h1>
              <h1 className="text-sm font-light">info@noor.com</h1>
            </div>
          </li>
          {/* phone */}
          <li className="flex gap-2">
            <div className="w-10 h-10 flex justify-center items-center rounded-lg border border-purple-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-purple-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-sm font-medium">Phone</h1>
              <h1 className="text-sm font-light cursor-pointer">
                +91 9565757575
              </h1>
            </div>
          </li>
        </ul>
        <div></div>
      </div>
    </div>
  );
};

export default Location;
