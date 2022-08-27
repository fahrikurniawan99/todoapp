import React from "react";
import { Menu } from "@headlessui/react";

function Action() {
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="flex items-center">
        <img src="dots.svg" alt="" srcset="" />
      </Menu.Button>
      <Menu.Items className="focus:outline-none absolute top-full w-32 right-0 bg-white shadow-xl rounded origin-top-right">
        <Menu.Item className="flex text-xs py-3 px-6 hover:bg-indigo-100">
          <a>Edit</a>
        </Menu.Item>
        <Menu.Item className="flex py-3 text-xs px-6 hover:bg-indigo-100">
          <a>Hapus</a>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}

export default Action;
