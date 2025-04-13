import logo from "../assets/Glenn Quagmire.jpeg"
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <footer className="bg-white rounded-0 shadow dark:bg-gray-900 ">
          <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
              <div className="sm:flex sm:items-center sm:justify-between">
                  <Link to="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                      <img src={logo} className="h-8 rounded-xl" alt="MovieFlix" />
                      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">MovieFlix</span>
                  </Link>
                  <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                      <li>
                          <i class="bi bi-info-circle"></i>
                          <a href="https://x.com/Riteshkuma97619?t=lkWfEAKMHehkM9LqFu1_kw&s=09" target-blank className="hover:underline me-4 md:me-6 ml-2">About</a>
                      </li>
                      <li>
                          <i className="bi bi-twitter"></i>
                          <a href="https://x.com/Riteshkuma97619?t=lkWfEAKMHehkM9LqFu1_kw&s=09" target-blank className="hover:underline me-4 md:me-6 ml-2">Twitter</a>
                      </li>
                      <li>
                          <i className="bi bi-instagram"></i>
                          <a href="https://www.instagram.com/rite_261?igsh=bzdubzNhbW1rcGM2" target-blank className="hover:underline me-4 md:me-6 ml-2">Instagram</a>
                      </li>
                      <li>
                          <i className="bi bi-github"></i>
                          <a href="https://github.com/Rite9717/Ritesh.git" target-blank className="hover:underline ml-2">GitHub</a>
                      </li>
                  </ul>
              </div>
              <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
              <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">MovieFlix™</a>. All Rights Reserved.</span>
          </div>
      </footer>
  )
}
