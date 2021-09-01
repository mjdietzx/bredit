<template>
  <div class="w-full">
    <!-- <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      <polygon points="50,0 100,0 50,100 0,100" />
    </svg> -->

    <Popover>
      <div class="relative py-4 px-8 md:px-20 lg:px-40">
        <nav class="relative flex items-center justify-between" aria-label="Global">
          <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            <div class="flex items-center justify-between w-full md:w-auto">
              <a href="/">
                <span class="sr-only">Workflow</span>
                <img class="h-8 w-auto sm:h-10" src="/bredit-white.png" />
              </a>
              <div class="hidden md:block -mr-2 flex items-center md:hidden">
                <PopoverButton class="bg-white rounded-md p-2 inline-flex items-center justify-center text-white hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span class="sr-only">Open main menu</span>
                  <MenuIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
          </div>
          <div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
            <a v-for="item in navigation" :key="item.name" :href="item.href" class="font-medium text-white hover:text-primary">{{ item.name }}</a>
          </div>
        </nav>
      </div>

      <transition class="hidden md:block" enter-active-class="duration-150 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
        <PopoverPanel focus class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden  mt-60">
          <div class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden w-full">
            <div class="px-5 pt-4 flex items-center justify-between">
              <div>
                <img class="h-20 w-auto" src="/bredit-white.png" alt="" />
              </div>
              <div class="-mr-2">
                <PopoverButton class="bg-white rounded-md p-2 inline-flex items-center justify-center text-white hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span class="sr-only">Close main menu</span>
                  <XIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="px-2 pt-2 pb-3 space-y-1">
              <a v-for="item in navigation" :key="item.name" :href="item.href" class="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-900 hover:bg-gray-50">{{ item.name }}</a>
            </div>
          </div>
        </PopoverPanel>
      </transition>
    </Popover>
  </div>
</template>

<script>
  import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
  import { MenuIcon, XIcon } from '@heroicons/vue/outline'

  const navigation = [
    { name: 'Product', href: '#product' },
    { name: 'Blog', href: '#blog' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  export default {
    name: 'Header',

    components: {
      MenuIcon,
      Popover,
      PopoverButton,
      PopoverPanel,
      XIcon,
    },
    setup() {
      return {
        navigation,
      }
    },
  }
</script>
