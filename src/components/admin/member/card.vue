<template>
  <div class="rounded-15px overflow-hidden shadow-box1 grid grid-cols-10 my-10">
    <div
      :class="{
        'bg-vert': vert,
        'bg-jaune': jaune,
        'bg-rouge': rouge
      }"
      class="p-5 text-white text-center font-bold"
    >
      <p class="text-2xl">{{ month }}</p>
      <p>{{ year }}</p>
    </div>

    <div class="col-span-7 bg-grid3 p-5">
      <div class="flex items-baseline gap-x-3 text-grid7 font-bold font-serif">
        <p class="text-2xl text-primary">PHP {{ price }}</p> |
        <p>Plan {{ plan }}</p> |
        <p>Payor: <span class="text-secondary underline">{{ payor }}</span></p>
      </div>
      <div v-if="vert" class="font-bold text-base text-vert mt-2">
        Date Received: {{ dateReceived }}
      </div>
      <div v-if="jaune" class="font-bold text-base text-jaune mt-2">
        Processing
      </div>
      <div v-if="rouge" class="font-bold text-base text-rouge mt-2">
        Failed
      </div>
    </div>

    <div class="bg-grid3 col-span-2 my-auto mx-auto text-center">
      <button class="bg-primary rounded-15px font-bold text-white px-9">
        Dispute
      </button>
      <div v-if="twice" class="flex gap-x-2 mt-2">
        <p class="italic text-base">{{ one }}</p>
        |
        <p class="italic text-base">{{ two }}</p>
      </div>
      <p v-else class="italic text-base mt-2">{{ own }}</p>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    vert: Boolean,
    jaune: Boolean,
    rouge: Boolean,
    month: String,
    year: Number,
    twice: Boolean,
    one: String,
    two: String,
    own: String,
    price: String,
    plan: String,
    payor: String,
    dateReceived: String
  }
}
</script>
