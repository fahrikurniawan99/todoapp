import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

function Navbar() {
  return (
    <div className="flex justify-between items-center px-1 py-3 shadow-md">
      <h1 className="text-2xl font-semibold text-indigo-500 cursor-pointer">
        TodoApp
      </h1>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            Menu
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
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg focus:outline-none py-3">
            <div className="px-1 py-1">
              <Menu.Item>
                <button className="hover:bg-indigo-300 w-full flex p-3">Home</button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

export default Navbar;
