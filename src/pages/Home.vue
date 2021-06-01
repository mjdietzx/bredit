<template>
  <div class="relative bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
        <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div class="sm:text-center lg:text-left">
            <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span class="block xl:inline">Build credit.</span>
              <span class="block text-indigo-600 xl:inline"> Save bitcoin.</span>
            </h1>
            <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">We give you a loan, structured as a savings plan, that builds your credit score while earning you Bitcoin. Unlike other credit building programs, we ditched Wall Street and plug directly into Bitcoin ⚡️ to minimize fees and maximize your returns. Welcome to the future of finance 🤝</p>
            <div class="bg-white">
              <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <h2 class="inline text-3xl font-extrabold tracking-tight text-gray-900 sm:block sm:text-4xl">Be an early adopter</h2>
                <p class="inline text-3xl font-extrabold tracking-tight text-indigo-600 sm:block sm:text-4xl">Join our waitlist 🚀</p>
                <form class="mt-8 sm:flex">
                  <label for="emailAddress" class="sr-only">Email address</label>
                  <input id="emailAddress" name="email" type="email" autocomplete="email" required="" class="w-full px-5 py-3 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs border-gray-300 rounded-md" placeholder="Enter your email" />
                  <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                    <button type="submit" class="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Subscribe</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="/src/assets/2112531.jpg" alt="" />
    </div>
  </div>

  <div id="product" class="py-16 bg-gray-50 overflow-hidden lg:py-24">
    <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
      <svg class="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4" width="404" height="784" fill="none" viewBox="0 0 404 784" aria-hidden="true">
        <defs>
          <pattern id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="784" fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
      </svg>

      <div class="relative">
        <h2 class="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">A first step towards establishing credit and building wealth</h2>
        <p class="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">Credit-builder loans are designed to give people with little or no credit a chance to build up their score. These loans are like a savings plan that usually come at a cost. We aim to reduce this cost to the point where this loan is actually paying you. We are able to do this by building on top of Bitcoin and being at the forefront of financial technology.</p>
      </div>

      <div class="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
        <div class="relative">
          <h3 class="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">Build credit</h3>
          <p class="mt-3 text-lg text-gray-500">Credit affects so many areas of your life — from loans to insurance to housing — so establishing a good score is essential.</p>

          <dl class="mt-10 space-y-10">
            <div v-for="item in transferFeatures" :key="item.id" class="relative">
              <dt>
                <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">{{ item.name }}</p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                {{ item.description }}
              </dd>
            </div>
          </dl>
        </div>

        <div class="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
          <svg class="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden" width="784" height="404" fill="none" viewBox="0 0 784 404">
            <defs>
              <pattern id="ca9667ae-9f92-4be7-abcb-9e3d727f2941" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="784" height="404" fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" />
          </svg>
          <img class="relative mx-auto" width="490" src="/src/assets/19197296.jpg" alt="" />
        </div>
      </div>

      <svg class="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12" width="404" height="784" fill="none" viewBox="0 0 404 784" aria-hidden="true">
        <defs>
          <pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="784" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
      </svg>

      <div class="relative mt-12 sm:mt-16 lg:mt-24">
        <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div class="lg:col-start-2">
            <h3 class="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">Save bitcoin</h3>
            <p class="mt-3 text-lg text-gray-500">As the Federal Reserve prints money (*sometimes referred to as money printer go brrr) it devalues the purchasing power and savings of those who hold it. Don't pay the opportunity cost of locking savings in USD like other credit builder programs will force you to do. Save in bitcoin and stack sats 💪</p>

            <dl class="mt-10 space-y-10">
              <div v-for="item in communicationFeatures" :key="item.id" class="relative">
                <dt>
                  <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p class="ml-16 text-lg leading-6 font-medium text-gray-900">{{ item.name }}</p>
                </dt>
                <dd class="mt-2 ml-16 text-base text-gray-500">
                  {{ item.description }}
                </dd>
              </div>
            </dl>
          </div>

          <div class="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
            <svg class="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden" width="784" height="404" fill="none" viewBox="0 0 784 404" aria-hidden="true">
              <defs>
                <pattern id="e80155a9-dfde-425a-b5ea-1f6fadd20131" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="784" height="404" fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)" />
            </svg>
            <img class="relative mx-auto" width="490" src="/src/assets/57042.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <Calculator />

  <div id="blog" class="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
    <div class="absolute inset-0">
      <div class="bg-white h-1/3 sm:h-2/3" />
    </div>
    <div class="relative max-w-7xl mx-auto">
      <div class="text-center">
        <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Blog</h2>
        <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">Learn more about what we're doing and why!</p>
      </div>
      <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
        <div v-for="post in posts" :key="post.title" class="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div class="flex-shrink-0">
            <img class="h-48 w-full object-cover" :src="post.imageUrl" alt="" />
          </div>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
              <p class="text-sm font-medium text-indigo-600">
                <a :href="post.category.href" class="hover:underline">
                  {{ post.category.name }}
                </a>
              </p>
              <a :href="post.href" class="block mt-2">
                <p class="text-xl font-semibold text-gray-900">
                  {{ post.title }}
                </p>
                <p class="mt-3 text-base text-gray-500">
                  {{ post.description }}
                </p>
              </a>
            </div>
            <div class="mt-6 flex items-center">
              <div class="flex-shrink-0">
                <a :href="post.author.href">
                  <span class="sr-only">{{ post.author.name }}</span>
                  <img class="h-10 w-10 rounded-full" :src="post.author.imageUrl" alt="" />
                </a>
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-gray-900">
                  <a :href="post.author.href" class="hover:underline">
                    {{ post.author.name }}
                  </a>
                </p>
                <div class="flex space-x-1 text-sm text-gray-500">
                  <time :datetime="post.datetime">
                    {{ post.date }}
                  </time>
                  <span aria-hidden="true"> &middot; </span>
                  <span> {{ post.readingTime }} {{ post.category.name === 'Article' ? 'read' : 'watch' }} </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="faqs" class="bg-gray-50">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto divide-y-2 divide-gray-200">
        <h2 class="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">Frequently asked questions</h2>
        <dl class="mt-6 space-y-6 divide-y divide-gray-200">
          <Disclosure v-for="faq in faqs" :key="faq.question" v-slot="{ open }" as="div" class="pt-6">
            <dt class="text-lg">
              <DisclosureButton class="text-left w-full flex justify-between items-start text-gray-400">
                <span class="font-medium text-gray-900">
                  {{ faq.question }}
                </span>
                <span class="ml-6 h-7 flex items-center">
                  <ChevronDownIcon :class="[open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform']" aria-hidden="true" />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" class="mt-2 pr-12">
              <p class="text-base text-gray-500">
                {{ faq.answer }}
              </p>
            </DisclosurePanel>
          </Disclosure>
        </dl>
      </div>
    </div>
  </div>

  <div id="about" class="bg-white">
    <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
      <div class="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
        <div class="space-y-5 sm:space-y-4">
          <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">About Us</h2>
          <p class="text-xl text-gray-500">We're both passionate Bitcoiners and want to bring it to more people. Our goal is to onboard the next generation of hodlers.</p>
        </div>
        <div class="lg:col-span-2">
          <ul class="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0">
            <li v-for="person in people" :key="person.name" class="sm:py-8">
              <div class="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                <div class="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                  <img class="object-cover shadow-lg rounded-lg" :src="person.imageUrl" alt="" />
                </div>
                <div class="sm:col-span-2">
                  <div class="space-y-4">
                    <div class="text-lg leading-6 font-medium space-y-1">
                      <h3>{{ person.name }}</h3>
                      <p class="text-indigo-600">{{ person.role }}</p>
                    </div>
                    <div class="text-lg">
                      <p class="text-gray-500">{{ person.bio }}</p>
                    </div>
                    <ul class="flex space-x-5">
                      <li>
                        <a :href="person.twitterUrl" class="text-gray-400 hover:text-gray-500">
                          <span class="sr-only">Twitter</span>
                          <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a :href="person.linkedinUrl" class="text-gray-400 hover:text-gray-500">
                          <span class="sr-only">LinkedIn</span>
                          <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div id="contact" class="relative bg-white">
    <div class="absolute inset-0">
      <div class="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
    </div>
    <div class="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
      <div class="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
        <div class="max-w-lg mx-auto">
          <h2 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">Get in touch</h2>
          <p class="mt-3 text-lg leading-6 text-gray-500">We want to partner with the world's most trusted and innovative companies.</p>
          <dl class="mt-8 text-base text-gray-500">
            <div>
              <dt class="sr-only">Postal address</dt>
              <dd>
                <p>801 Barton Springs Rd</p>
                <p>Austin, TX 78704</p>
              </dd>
            </div>
            <div class="mt-3">
              <dt class="sr-only">Email</dt>
              <dd class="flex">
                <MailIcon class="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                <span class="ml-3"> support@bredit.com </span>
              </dd>
            </div>
          </dl>
          <p class="mt-6 text-base text-gray-500">
            Looking for careers?
            {{ ' ' }}
            <a href="#" class="font-medium text-gray-700 underline">Reach out!</a>
          </p>
        </div>
      </div>
      <div class="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
        <div class="max-w-lg mx-auto lg:max-w-none">
          <form action="#" method="POST" class="grid grid-cols-1 gap-y-6">
            <div>
              <label for="full_name" class="sr-only">Full name</label>
              <input id="full_name" type="text" name="full_name" autocomplete="name" class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" placeholder="Full name" />
            </div>
            <div>
              <label for="email" class="sr-only">Email</label>
              <input id="email" name="email" type="email" autocomplete="email" class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" placeholder="Email" />
            </div>
            <div>
              <label for="phone" class="sr-only">Phone</label>
              <input id="phone" type="text" name="phone" autocomplete="tel" class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" placeholder="Phone" />
            </div>
            <div>
              <label for="message" class="sr-only">Message</label>
              <textarea id="message" name="message" rows="4" class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" placeholder="Message" />
            </div>
            <div>
              <button type="submit" class="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue'
  import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
  import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon, ChevronDownIcon, MailIcon, PhoneIcon } from '@heroicons/vue/outline'

  import Header from '/src/components/Header.vue'
  import Footer from '/src/components/Footer.vue'
  import Calculator from '/src/components/Calculator.vue'

  import faqs from '/src/content/faqs.json'

  const people = [
    {
      name: 'Michael Dietz',
      role: 'Co-Founder / CTO',
      imageUrl: 'https://media-exp1.licdn.com/dms/image/C5603AQEelWw_FYY7Jw/profile-displayphoto-shrink_800_800/0/1517615019637?e=1627516800&v=beta&t=ADJ2pC3KI5mAKUXF4bA7TjHsZ-_YKX5dovj-FdzIZPQ',
      bio: 'Prior to Bredit, Michael ran his own software engineering company - Waya.ai, Inc - for 5 years. He is a contributor to bitcoin core focused on testing and simplifying the codebase.',
      twitterUrl: 'https://twitter.com/waya_ai',
      linkedinUrl: 'https://www.linkedin.com/in/michael-dietz/',
    },
    {
      name: 'Paul Wirtz',
      role: 'Co-Founder / CEO',
      imageUrl: 'https://media-exp1.licdn.com/dms/image/C4D03AQFM0lz4MHNbDw/profile-displayphoto-shrink_800_800/0/1603311609160?e=1627516800&v=beta&t=BrQWF_7wnsjRbG2Ysrp7r-vy1ty6xzpW_NQm6EaYIeg',
      bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
      twitterUrl: 'https://twitter.com/QB_Wirtzy',
      linkedinUrl: 'https://www.linkedin.com/in/paul-wirtz-45639543/',
    },
  ]

  const posts = [
    {
      title: 'What is a starter loan?',
      href: 'https://www.creditkarma.com/personal-loans/i/what-is-a-starter-loan',
      category: { name: 'Article', href: '#' },
      description: 'If you’re new to borrowing money or have low credit scores, you may consider taking out what’s sometimes called a starter loan or credit-starter loan.',
      date: 'Feb 17, 2021',
      datetime: '2021-02-17',
      imageUrl: 'https://creditkarma-cms.imgix.net/wp-content/uploads/2020/03/credit-starter-loans_1148197548.jpg?w=1024&fm=webp',
      readingTime: '6 min',
      author: {
        name: 'Sarah Brodsky',
        href: '#',
        imageUrl: 'https://creditkarma-cms.imgix.net/wp-content/uploads/2019/07/photo0805.jpg?w=64',
      },
    },
    {
      title: 'The Bullish Case for Bitcoin',
      href: 'https://nakamotoinstitute.org/mempool/the-bullish-case-for-bitcoin/',
      category: { name: 'Article', href: '#' },
      description: 'Never in the history of the world had it been possible to transfer value between distant peoples without relying on a trusted intermediary, such as a bank or government.',
      date: 'Mar 2, 2018',
      datetime: '2018-03-02',
      imageUrl: 'https://i.ytimg.com/vi/gEw951PsSFc/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBLDhPGEigXbSD8Nb3za5EJu-QfZQ',
      readingTime: '41 min',
      author: {
        name: 'Vijay Boyapati',
        href: 'https://vijayboyapati.medium.com',
        imageUrl: 'https://media-exp1.licdn.com/dms/image/C5603AQEZ38A9ASsIDA/profile-displayphoto-shrink_200_200/0/1516898714837?e=1626912000&v=beta&t=a-JBuYvPype0XLe_XWX2tG1TZ4npMCFzUvLYcmNHkio',
      },
    },
    {
      title: 'Why Your Credit Matters! | Credit 101 for beginners.',
      href: 'https://www.youtube.com/watch?v=hh9jQWrXmXk',
      category: { name: 'Video', href: '#' },
      description: "What is your credit score? It's the lenders ability to determine how well you borrow money and pay it back.",
      date: 'Apr 10, 2020',
      datetime: '2020-04-10',
      imageUrl: 'https://i.ytimg.com/vi/hh9jQWrXmXk/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAQz3POXgZ1GBDJ8PRvXnQ0yvEW-w',
      readingTime: '11 min',
      author: {
        name: 'Kandaya Talks',
        href: '#',
        imageUrl: 'https://yt3.ggpht.com/ytc/AAUvwniHikJ96nMZUceoyPCycrPIxShBFhpjpC6MQJUo=s176-c-k-c0x00ffffff-no-rj',
      },
    },
  ]

  const transferFeatures = [
    {
      id: 1,
      name: 'No credit score or history required',
      description: "We don't even do a credit check - link any US bank account and we can approve you instantly.",
      icon: GlobeAltIcon,
    },
    {
      id: 2,
      name: 'No hidden fees',
      description: 'We charge a simple monthly subscription cost. There are no other fees. A few dollars a month until your loan is paid off.',
      icon: ScaleIcon,
    },
    {
      id: 3,
      name: 'Crypto-native',
      description: 'Any sufficiently advanced technology is indistinguishable from magic. We build on these advances to turbocharge your finances.',
      icon: LightningBoltIcon,
    },
  ]

  const communicationFeatures = [
    {
      id: 1,
      name: 'Saving in Bitcoin is a wealth multiplier',
      description: "Steadily convert your dollars to Bitcoin savings as you pay down your loan. When you've finished paying your loan you can withdraw your stack of Bitcoin which may be worth far more than the total of payments you made. Over the last three years, saving $50 per week in Bitcoin turned $7,850 into $59,929.",
      icon: AnnotationIcon,
    },
    {
      id: 2,
      name: 'Protect Your Wealth',
      description: 'Dollars have lost 90% of their purchasing power since 1950 as politicians printed more of them. Bitcoin’s fixed supply makes it the best way to save your money for the long term.',
      icon: MailIcon,
    },
  ]

  export default {
    components: {
      Disclosure,
      DisclosureButton,
      DisclosurePanel,
      ChevronDownIcon,
      MailIcon,
      PhoneIcon,
      Header,
      Footer,
      Calculator,
    },
    setup() {
      const open = ref(false)

      return {
        faqs,
        open,
        transferFeatures,
        communicationFeatures,
        posts,
        people,
      }
    },
  }
</script>
