<template>
  <div class="min-h-screen w-full flex relative">
    <CssBlob class="fixed top-0 mt-18 ml-64 opacity-80"/>
    <CircleBlob class="fixed ml-auto"/>
    <CssBlob2 class="ml-auto mt-96 fixed"/>
    <CircleBlob2 class="fixed right-0 mt-96"/>

    <Header class=" bg-opacity-70 absolute top-0 z-50" style="backdrop-filter: blur(5px); mix-blend-mode: normal;"></Header>

    <div class="z-40 h-screen overflow-scroll bg-black bg-opacity-70 absolute inset-0" style="backdrop-filter: blur(50px); mix-blend-mode: normal;">

      <div class="">
        <div class="my-20 lg:my-40 lg:lg:px-40 md:px-20 px-8 md:px-20 px-8 w-full flex flex-col items-center justify-center" >
          <p class="mt-10 flex-none text-center text-4xl md:text-7xl font-black text-white">Build credit. Save bitcoin.</p>
          <p class="text-white text-center my-10 md:text-xl md:w-4/5 opacity-90">We give you a loan, structured as a savings plan, that builds your credit score while earning you Bitcoin. Unlike other credit building programs, we ditched Wall Street and plug directly into Bitcoin ⚡️ to minimize fees and maximize your returns. Welcome to the future of finance 🤝</p>
          <div class="w-full flex items-center justify-center">
            <div class="md:w-1/2 flex items-center border rounded border-white border-opacity-30">
              <input id="emailAddress" name="email" type="email" autocomplete="email" required="" placeholder="Enter your Email Address" class="appearance-none text-white rounded border-0 bg-transparent w-full p-4">
              <button class="p-2 flex-none mr-2 rounded text-black font-semibold bg-primary" type="button" name="button">Stay Connected</button>
            </div>
          </div>
        </div>
      </div>



      <div id="product" class="lg:lg:px-40 md:px-20 px-8 md:px-20 px-8 py-20 bg-black bg-opacity-50">
        <div class="flex flex-col items-center justify-center bg-gradient-50 rounded-lg">
          <h2 class="text-center text-3xl leading-8 font-extrabold tracking-tight text-light sm:text-4xl">A first step towards establishing credit and building wealth</h2>
          <p class="mt-8 max-w-3xl mx-auto text-center text-xl text-gray-200">Credit-builder loans are designed to give people with little or no credit a chance to build up their score. These loans are like a savings plan that usually come at a cost. We aim to reduce this cost to the point where this loan is actually paying you. We are able to do this by building on top of Bitcoin and being at the forefront of financial technology.</p>
        </div>

        <div class="w-full flex flex-col items-center py-20">
          <div class="text-white flex items-center w-full mb-20">
            <p class="flex-none text-xl font-bold">Build Credit</p>
            <div class="h-px w-full ml-4 bg-white bg-opacity-25"></div>
          </div>
          <!-- <p class="px-4 text-lg mr-auto mb-12 text-gray-200">Credit affects so many areas of your life — from loans to insurance to housing — so establishing a good score is essential.</p> -->
          <div class="flex lg:flex-row flex-col">
            <div v-for="item in transferFeatures" :key="item.id" class="flex mb-6 lg:mb-0 flex-col lg:w-1/3 px-4 flex-grow">
              <div class="border-2 border-opacity-20 shadow border-white p-6 rounded-lg flex-grow bg-white bg-opacity-10">
                <div class="mb-4 flex items-center justify-center h-12 w-12 rounded-md orange-to-yellow text-dark-0">
                  <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
                </div>
                <p class="text-lg mb-4 font-bold text-gray-200">{{ item.name }}</p>
                <dd class="mt-2 text-base text-gray-200 font-light">
                  {{ item.description }}
                </dd>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full pb-20">
          <div class="text-white flex items-center w-full mb-20">
            <p class="flex-none text-xl font-bold">Save Bitcoin</p>
            <div class="h-px w-full ml-4 bg-white bg-opacity-25"></div>
          </div>
          <p class="px-4 text-lg mr-auto mb-12 text-gray-200">As the Federal Reserve prints money (*sometimes referred to as money printer go brrr) it devalues the purchasing power and savings of those who hold it. Don't pay the opportunity cost of locking savings in USD like other credit builder programs will force you to do. Save in bitcoin and stack sats 💪</p>
          <div class="flex md:flex-row flex-col">
            <div v-for="item in communicationFeatures" :key="item.id" class="flex flex-col mb-6 lg:mb-0 md:w-1/3 px-4 flex-grow">
              <div class="border-2 border-opacity-20 shadow border-white p-6 rounded-lg flex-grow bg-white bg-opacity-10">
                <div class="mb-4 flex items-center justify-center h-12 w-12 rounded-md orange-to-yellow text-dark-0">
                  <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
                </div>
                <p class="text-lg mb-4 font-bold text-gray-200">{{ item.name }}</p>
                <dd class="mt-2 text-base text-gray-200 font-light">
                  {{ item.description }}
                </dd>
              </div>
            </div>
          </div>
        </div>

        <div class="">
          <Calculator />
        </div>
      </div>

      <div id="blog" class="my-20 mx-8 md:mx-20 lg:mx-40">
        <div class="">
          <div class="text-center">
            <h2 class="text-3xl tracking-tight font-extrabold text-light sm:text-4xl">Blog</h2>
          </div>
          <div class="mt-20 grid gap-5 lg:grid-cols-3 ">
            <div v-for="post in posts" :key="post.title" class="bg-white bg-opacity-20 border-2 border-white border-opacity-30 flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div class="flex-shrink-0">
                <img class="h-48 w-full object-cover" :src="post.imageUrl" alt="" />
              </div>
              <div class="flex-1 p-6 flex flex-col justify-between">
                <div class="flex-1">
                  <p class="text-sm font-medium text-primary">
                    <a :href="post.category.href" class="hover:underline">
                      {{ post.category.name }}
                    </a>
                  </p>
                  <a :href="post.href" class="block mt-2">
                    <p class="text-xl font-semibold text-white">
                      {{ post.title }}
                    </p>
                    <p class="mt-3 text-base text-light">
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
                    <p class="text-sm font-medium text-light">
                      <a :href="post.author.href" class="hover:underline">
                        {{ post.author.name }}
                      </a>
                    </p>
                    <div class="flex space-x-1 text-sm text-white">
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

      <div id="faqs" class="z-50 my-20 mx-8 md:mx-20 lg:mx-40">
       <div class="">
         <div class="max-w-3xl mx-auto divide-y-2 divide-white divide-opacity-20">
           <h2 class="text-center text-3xl font-extrabold text-light sm:text-4xl">Frequently asked questions</h2>
           <dl class="mt-6 space-y-6 divide-y divide-white divide-opacity-20">
             <Disclosure v-for="faq in faqs" :key="faq.question" v-slot="{ open }" as="div" class="pt-6">
               <dt class="text-lg">
                 <DisclosureButton class="text-left w-full flex justify-between items-start text-gray-200">
                   <span class="font-medium text-light">
                     {{ faq.question }}
                   </span>
                   <span class="ml-6 h-7 flex items-center">
                     <ChevronDownIcon :class="[open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform']" aria-hidden="true" />
                   </span>
                 </DisclosureButton>
               </dt>
               <DisclosurePanel as="dd" class="mt-2 pr-12 rounded">
                 <p class="text-base text-gray-200 p-4">
                   {{ faq.answer }}
                 </p>
               </DisclosurePanel>
             </Disclosure>
           </dl>
         </div>
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
  import CssBlob from '/src/components/CssBlob.vue'
  import CssBlob2 from '/src/components/CssBlob2.vue'
  import CircleBlob from '/src/components/CircleBlob.vue'
  import CircleBlob2 from '/src/components/CircleBlob2.vue'



  import faqs from '/src/content/faqs.json'

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
        imageUrl: 'https://miro.medium.com/fit/c/262/262/0*-ElTBiZToqj3_cqD.jpg',
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
      CssBlob,
      CircleBlob,
      CssBlob2,
      CircleBlob2
    },
    setup() {
      const open = ref(false)

      return {
        faqs,
        open,
        transferFeatures,
        communicationFeatures,
        posts,
      }
    },
  }
</script>

<style media="screen" lang="scss">

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: white;
    color: white;
}

.orange-to-yellow {
  background: rgb(242,169,0);
background: linear-gradient(170deg, rgba(242,169,0,1) 31%, rgba(255,233,0,0.8729866946778712) 100%);
}

button:focus {outline:0;}


</style>
