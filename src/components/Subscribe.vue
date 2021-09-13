<template>
  <div class="w-full flex flex-col items-center justify-center">
    <div v-if="!subscribed" class="md:w-1/2 flex items-center border rounded border-white border-opacity-30">
      <input v-model="email" id="emailAddress" name="email" type="email" autocomplete="email" required="" placeholder="you@example.com" class="appearance-none text-white rounded border-0 bg-transparent w-full p-4">
      <button @click="run" :disabled="loading || error || subscribed" class="flex items-center p-2 flex-none mr-2 rounded text-black font-semibold bg-primary" type="button" name="button">
        Subscribe
        <RefreshIcon v-if="loading" class="ml-2 animate-spin h-5 w-5"></RefreshIcon>
        <ExclamationCircleIcon v-else-if="error" class="ml-2 h-5 w-5"></ExclamationCircleIcon>
      </button>
    </div>
    <div v-else class="md:w-1/2 flex items-center text-white items-center justify-center">
      <CheckCircleIcon class="mr-2 h-5 w-5"></CheckCircleIcon>
      We've got you on our subscribers list! We'll keep you updated!
    </div>
    <p v-if="error" class="mt-2 text-sm text-red-600" id="email-error">{{ error }}</p>
  </div>
</template>

<script>
  import axios from 'axios'
  import { RefreshIcon, ExclamationCircleIcon, CheckCircleIcon } from '@heroicons/vue/solid'

  const url = 'https://b5crwexkcb.execute-api.us-east-1.amazonaws.com/subscribes'

  export default {
    name: 'Subscribe',

    components: {
      CheckCircleIcon,
      RefreshIcon,
      ExclamationCircleIcon,
    },
    data() {
      return {
        loading: false,
        subscribed: false,
        email: '',
        error: ''
      }
    },
    methods: {
      run: function () {
        if (!this.email.match(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g)) {
          this.error = 'This doesn\'t look like an email address to us 😐'
          return
        }

        this.loading = true
        axios.post(url, { email: this.email })
          .then(({ status }) => {
            if (status === 200) {
              this.subscribed = true
            } else {
              this.error = 'Something went wrong, please refresh the page and try again 😐'
            }
          })
          .catch(() => {
            this.error = 'Something went wrong, please refresh the page and try again 😐'
          })
          .finally(() => {
            this.loading = false
          })
      },
    },
    watch: {
      email(email, old) {
        this.error = ''
      },
    },
  }
</script>
