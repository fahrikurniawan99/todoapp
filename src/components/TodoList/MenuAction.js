import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

function MenuAction(props) {
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="flex items-center outline-none -z-10">
        <img src="dots.svg" alt="" srcset="" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-300"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-200"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="focus:outline-none absolute top-full w-32 right-0 bg-white shadow-xl rounded origin-top-right">
          <Menu.Item className="flex text-xs py-3 px-6 hover:bg-indigo-100">
            <h1 onClick={props.onClickEdit}>Edit</h1>
          </Menu.Item>
          <hr />
          <Menu.Item className="flex py-3 text-xs px-6 hover:bg-indigo-100">
            <h1 onClick={props.onClickDelete}>Hapus</h1>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default MenuAction;
