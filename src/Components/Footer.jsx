import React from "react";

function Footer() {
  return (
    <div className="w-full sm:mt-36 mt-8 bg-[#081733] text-white sm:px-16 px-4 py-6">
      <div className="w-full border-b py-6 flex">
        <h1 className="text-3xl">Connect With us</h1>
        <svg
          className="mx-2"
          width={36}
          height={36}
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27 3H22.5C20.5109 3 18.6032 3.79018 17.1967 5.1967C15.7902 6.60322 15 8.51088 15 10.5V15H10.5V21H15V33H21V21H25.5L27 15H21V10.5C21 10.1022 21.158 9.72064 21.4393 9.43934C21.7206 9.15804 22.1022 9 22.5 9H27V3Z"
            stroke="white"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <svg
          className="mx-2"
          width={36}
          height={36}
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24 12C26.3869 12 28.6761 12.9482 30.364 14.636C32.0518 16.3239 33 18.6131 33 21V31.5H27V21C27 20.2044 26.6839 19.4413 26.1213 18.8787C25.5587 18.3161 24.7956 18 24 18C23.2044 18 22.4413 18.3161 21.8787 18.8787C21.3161 19.4413 21 20.2044 21 21V31.5H15V21C15 18.6131 15.9482 16.3239 17.636 14.636C19.3239 12.9482 21.6131 12 24 12V12Z"
            stroke="white"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 13.5H3V31.5H9V13.5Z"
            stroke="white"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 9C7.65685 9 9 7.65685 9 6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9Z"
            stroke="white"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <svg
          className="mx-2"
          width={36}
          height={36}
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.5 3H10.5C6.35786 3 3 6.35786 3 10.5V25.5C3 29.6421 6.35786 33 10.5 33H25.5C29.6421 33 33 29.6421 33 25.5V10.5C33 6.35786 29.6421 3 25.5 3Z"
            stroke="white"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24 17.0555C24.1852 18.3038 23.9719 19.5788 23.3907 20.699C22.8094 21.8192 21.8898 22.7276 20.7625 23.295C19.6352 23.8624 18.3577 24.0598 17.1117 23.8594C15.8657 23.6589 14.7147 23.0706 13.8223 22.1782C12.9299 21.2858 12.3416 20.1348 12.1412 18.8888C11.9407 17.6428 12.1381 16.3653 12.7055 15.238C13.2729 14.1107 14.1813 13.1911 15.3015 12.6098C16.4217 12.0286 17.6967 11.8153 18.945 12.0005C20.2184 12.1893 21.3973 12.7826 22.3076 13.6929C23.2179 14.6032 23.8112 15.7821 24 17.0555Z"
            stroke="white"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M26.25 9.75H26.265"
            stroke="white"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="grid sm:grid-cols-4 grid-cols-1  border-b mt-6 py-12">
        <div>
          <h1 className="text-3xl mb-8">Information About</h1>
          <ul>
            <li className="mb-4">Buckingham School of Engineering</li>
            <li className="mb-4">Admissions</li>
            <li className="mb-4">Curriculum</li>
            <li className="mb-4">Data privacy / GDPR</li>
            <li className="mb-4">Terms and conditions</li>
          </ul>
        </div>
        <div>
          <h1 className="text-3xl mb-8">Quick Links</h1>
          <ul>
            <li className="mb-4">Frequently asked questions</li>
            <li className="mb-4">Course list</li>
            <li className="mb-4">Curriculum</li>
            <li className="mb-4">Login to profile</li>
          </ul>
        </div>
        <div>
          <h1 className="text-white text-3xl mt-8 sm:mt-0">Contact Address</h1>
          <p className="text-white my-4">
            Middle Blackgrove farm, Quainton, Aylesbury HP22 4AD
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Footer;
