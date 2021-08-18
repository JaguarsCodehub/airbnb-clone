import Image from 'next/image';
import { 
    SearchIcon,
    GlobeAltIcon,
    MenuIcon,
    UsersIcon,
    UserCircleIcon,
} from '@heroicons/react/solid';
import "react-date-range/dist/styles.css";//mainstyle file
import "react-date-range/dist/theme/default.css"; //theme css file
import {DateRangePicker} from 'react-date-range'
import { useRouter } from 'next/dist/client/router';
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'

function Header({ placeholder}) {

    const router = useRouter();
    const [searchInput, setSearchInput] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [noOfGuests, setNoOfGuests] = useState(1);
    
    const [burgerStatus, setBurgerStatus] = useState(false);

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate)
    }

    const resetInput = () => {
        setSearchInput('');
    }

    const search = () => {
        router.push({
            pathname: '/search',
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                noOfGuests,
            }
        });
    }

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }

    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
            
            {/* Left Side */}
            <div onClick={() => router.push("/")} className="relative flex items-center h-10 my-auto cursor-pointer">
                <Image 
                    src="https://links.papareact.com/qd3"
                    // width={}
                    // height={}
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                    
                />
            </div>

            {/* Middle Side */}
            
            <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
                <input 
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    className=" flex-grow pl-5 bg-transparent outline-none text-sm font-semibold text-gray-400 placeholder-gray-800" type="text" placeholder={placeholder || "Start your Search"} />
                <SearchIcon className="hidden md:inline-flex h-8 bg-red-500 text-white rounded-full p-2 cursor-pointer mx-auto md:mx-2"/>
            </div>

            {/* Right SIde */}
            <div className="flex items-center space-x-4 justify-end text-gray-500 ">
                <p className="hidden md:inline cursor-pointer button border-none">Become a Host</p>
                <GlobeAltIcon className="h-6 cursor-pointer" />

                <div  className="">
                    
                    
                </div>
                <div className="flex items-center rounded-full cursor-pointer">
      <Menu as="div" className="">
        <div>
          <Menu.Button className="">
                    
                    <UserCircleIcon className="h-6 items-center"/>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-gray-100 text-gray-500' : 'text-gray-500'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <EditActiveIcon
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                      />
                    ) : (
                      <EditInactiveIcon
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                      />
                    )}
                    Host
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-gray-100 text-gray-500' : 'text-gray-500'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <DuplicateActiveIcon
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                      />
                    ) : (
                      <DuplicateInactiveIcon
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                      />
                    )}
                    Check Bedrooms
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-gray-100 text-gray-500' : 'text-gray-500'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <ArchiveActiveIcon
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                      />
                    ) : (
                      <ArchiveInactiveIcon
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                      />
                    )}
                    Prices
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-gray-100 text-gray-500' : 'text-gray-500'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <MoveActiveIcon
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                      />
                    ) : (
                      <MoveInactiveIcon
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                      />
                    )}
                    Host Your Home
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-gray-100 text-gray-500' : 'text-gray-500'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <DeleteActiveIcon
                        className="w-5 h-5 mr-2 text-violet-400"
                        aria-hidden="true"
                      />
                    ) : (
                      <DeleteInactiveIcon
                        className="w-5 h-5 mr-2 text-violet-400"
                        aria-hidden="true"
                      />
                    )}
                    Delete Your Search
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
                
                
            </div>
            
            {searchInput && 
                <div className="flex flex-col col-span-3 mx-auto">
                    <DateRangePicker 
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={['#fd5b61']}
                        onChange={handleSelect}
                    />

                    <div className="flex items-center border-b mb-4">
                        <h2 className="text-xl pl-2 flex-grow font-semibold">
                            Number of Guests
                        </h2>

                        <UsersIcon className="h-5"/>
                        <input 
                            value={noOfGuests} 
                            onChange={(e) => setNoOfGuests(e.target.value)}
                            min={1}
                            className="w-12 pl-2 text-lg outline-none text-red-500 font-semibold" 
                            type="number"
                        />
                    </div>
                    <div className="flex">
                        <button onClick={resetInput} className="flex-grow text-gray-500">Cancel</button>
                        <button onClick={search} className="flex-grow text-red-400">Search</button>
                    </div>
                </div>
            }
            </header>
    )
}

export default Header;

function EditInactiveIcon(props) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 13V16H7L16 7L13 4L4 13Z"
          fill="FE595E"
          stroke="#FE595E"
          strokeWidth="2"
        />
      </svg>
    )
  }
  
  function EditActiveIcon(props) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 13V16H7L16 7L13 4L4 13Z"
          fill="#FE595E"
          stroke="#FE595E"
          strokeWidth="2"
        />
      </svg>
    )
  }
  
  function DuplicateInactiveIcon(props) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 4H12V12H4V4Z"
          fill="#FE595E"
          stroke="#FE595E"
          strokeWidth="2"
        />
        <path
          d="M8 8H16V16H8V8Z"
          fill="#FE595E"
          stroke="#FE595E"
          strokeWidth="2"
        />
      </svg>
    )
  }
  
  function DuplicateActiveIcon(props) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 4H12V12H4V4Z"
          fill="#FE595E"
          stroke="#FE595E"
          strokeWidth="2"
        />
        <path
          d="M8 8H16V16H8V8Z"
          fill="#FE595E"
          stroke="#FE595E"
          strokeWidth="2"
        />
      </svg>
    )
  }
  
  function ArchiveInactiveIcon(props) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="5"
          y="8"
          width="10"
          height="8"
          fill="#FE595E"
          stroke="#FE595E"
          strokeWidth="2"
        />
        <rect
          x="4"
          y="4"
          width="12"
          height="4"
          fill="#FE595E"
          stroke="#FE595E"
          strokeWidth="2"
        />
        <path d="M8 12H12" stroke="#FE595E" strokeWidth="2" />
      </svg>
    )
  }
  
  function ArchiveActiveIcon(props) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="5"
          y="8"
          width="10"
          height="8"
          fill="#FE595E"
          stroke="#FE595E"
          strokeWidth="2"
        />
        <rect
          x="4"
          y="4"
          width="12"
          height="4"
          fill="#FE595E"
          stroke="#FE595E"
          strokeWidth="2"
        />
        <path d="M8 12H12" stroke="#FE595E" strokeWidth="2" />
      </svg>
    )
  }
  
  function MoveInactiveIcon(props) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 4H16V10" stroke="#FE595E" strokeWidth="2" />
        <path d="M16 4L8 12" stroke="#FE595E" strokeWidth="2" />
        <path d="M8 6H4V16H14V12" stroke="#FE595E" strokeWidth="2" />
      </svg>
    )
  }
  
  function MoveActiveIcon(props) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 4H16V10" stroke="#FE595E" strokeWidth="2" />
        <path d="M16 4L8 12" stroke="#FE595E" strokeWidth="2" />
        <path d="M8 6H4V16H14V12" stroke="#FE595E" strokeWidth="2" />
      </svg>
    )
  }
  
  function DeleteInactiveIcon(props) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="5"
          y="6"
          width="10"
          height="10"
          fill="#FE595E"
          stroke="#FE595E"
          strokeWidth="2"
        />
        <path d="M3 6H17" stroke="#FE595E" strokeWidth="2" />
        <path d="M8 6V4H12V6" stroke="#FE595E" strokeWidth="2" />
      </svg>
    )
  }
  
  function DeleteActiveIcon(props) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="5"
          y="6"
          width="10"
          height="10"
          fill="#FE595E"
          stroke="#FE595E"
          strokeWidth="2"
        />
        <path d="M3 6H17" stroke="#FE595E" strokeWidth="2" />
        <path d="M8 6V4H12V6" stroke="#FE595E" strokeWidth="2" />
      </svg>
    )
  }
