<template>
  <div class="mt-8 sm:flex">
    <div>
      <p>Try our calculator and play around with different loan start dates to see how you would have done with Bitcoin buys enabled!</p>
      <p>A 1 year, $1k Bredit loan, taken out on</p>
      <div class="mt-1 relative rounded-md shadow-sm">
        <input type="date" v-model="start" name="start" id="start" class="block w-full pr-10 focus:outline-none sm:text-sm rounded-md" :class="{ 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500': error }" placeholder="MM/YYYY" aria-invalid="true" aria-describedby="email-error" />
        <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <ExclamationCircleIcon v-if="error" class="h-5 w-5 text-red-500" aria-hidden="true" />
        </div>
      </div>
      <p v-if="error" class="mt-2 text-sm text-red-600" id="email-error">{{ error }}</p>
      <p>would have resulted in {{ result.balance ? result.balance.toFixed(2) : '_' }} Bitcoin released to you after your last monthly payment on {{ result.end || '_' }} (worth {{ result.value ? result.value.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) : '_' }} at this time).</p>
      <p>Your monthly payment over the course of this loan was {{ result.payment ? result.payment.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) : '_' }}, and you would have paid a total of {{ result.paid ? result.paid.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) : '_' }} inclusive of all fees.</p>
      <p>We encourage you to play around with more historical start dates to help determine if you want Bitcoin buys turned on!</p>
    </div>
    <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
      <button @click="run" class="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Calculate</button>
    </div>
  </div>
</template>

<script>
  import { ExclamationCircleIcon } from '@heroicons/vue/solid'

  import prices from '/src/data/prices.json' // https://www.in2013dollars.com/bitcoin-price

  export default {
    name: 'Calculator',

    components: {
      ExclamationCircleIcon,
    },
    data() {
      return {
        amount: 1000,
        fee: 4,
        start: '',
        term: 12,
        error: '',
        result: {},
      }
    },
    methods: {
      run: function () {
        if (!this.start.match(/^\d{2}\/\d{4}$/g)) {
          this.error = 'Format must be MM/YYYY'
          return
        }

        const month = parseInt(this.start.split('/')[0])
        if (month > 12) {
          this.error = 'MM must be between 01 (Jan) and 12 (Dec)'
          return
        }

        const year = parseInt(this.start.split('/')[1])
        if (year < 2012) {
          this.error = 'Date must be after 01/2012'
          return
        }
        const monthly = this.amount / this.term

        const start = (2021 - year) * 12 + (12 - month)
        const end = start - (this.term - 1)
        if (end < 0) {
          this.error = 'Date must be before 01/2021 so we have a full calendar year of Bitcoin price data to calculate your results'
          return
        }

        const buys = prices.map((p) => p).slice(end, start + 1)
        const btcs = buys.map((price) => monthly / price)

        const acc = btcs.reduce((a, b) => a + b, 0)
        this.result = {
          balance: acc,
          end: `${this.start.split('/')[0]}/${year + 1}`,
          paid: (monthly + this.fee) * this.term,
          payment: monthly,
          value: acc * prices[end],
        }
      },
    },
    watch: {
      start(date, old) {
        this.error = ''

        if (date.match(/^\d\d$/g) && old.length < 2) {
          this.start = `${this.start}/20`
        }
      },
    },
  }
</script>
