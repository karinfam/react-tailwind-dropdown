import React, { useState } from 'react';
import { AccountDropdown } from './AccountDropdown';

export function Navbar() {
  const [isOpen, toggleOpen] = useState(false);

  const menuIcon = (isOpen) => {
    if (isOpen) {
      menuIcon = (
        <path
          fill-rule="evenodd"
          d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
        />
      );
    } else {
      menuIcon = (
        <path
          fill-rule="evenodd"
          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
        />
      );
    }
  };

  const menuClass = (isOpen) => {
    if (isOpen) {
      menuClass = 'block';
    } else {
      menuClass = 'hidden sm:block';
    }
  };

  return (
    <header class="bg-gray-900 sm:flex sm:justify-between sm:px-4 sm:py-3 sm:items-center">
      <header class="flex items-center justify-between px-4 py-3 sm:p-0">
        <div>
          <img class="h-8" src="/img/logo-inverted.svg" alt="workcation" />
        </div>
        <div class="sm:hidden">
          <button
            onClick={() => toggleOpen(this.state.isOpen)}
            type="button"
            class="text-gray-500 hover:text-white focus:text-white focus:outline-none"
          >
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {menuIcon}
            </svg>
          </button>
        </div>
      </header>

      <div class={menuClass}>
        <div class=" sm:flex px-2 pt-2 pb-4">
          <a
            href="#"
            class="mt-1 py-1 block text-white font-semibold rounded px-2 hover:bg-gray-800 sm:mt-0 sm:ml-2"
          >
            List your property
          </a>
          <a
            href="#"
            class="mt-1 py-1 block text-white font-semibold rounded px-2 hover:bg-gray-800 sm:mt-0 sm:ml-2"
          >
            Trips
          </a>
          <a
            href="#"
            class="mt-1 py-1 block text-white font-semibold rounded px-2 hover:bg-gray-800 sm:mt-0 sm:ml-2"
          >
            Messages
          </a>
          <AccountDropdown parentClass="hidden sm:block sm:ml-6" />
        </div>

        <div class="px-4 py-5 border-t border-gray-800 sm:hidden">
          <div class="flex items-center">
            <img
              class=" border-2 border-gray-600 h-8 w-8 rounded-full object-cover "
              src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
              alt="Your avatar"
            />
            <span class="text-white font-semibold ml-3">Jane Doe</span>
          </div>

          <div class="mt-4">
            <a href="#" class="block text-gray-400 hover:text-white">
              Account settings
            </a>
            <a href="#" class="mt-2 block text-gray-400 hover:text-white">
              Support
            </a>
            <a href="#" class="mt-2 block text-gray-400 hover:text-white">
              Sign Out
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
