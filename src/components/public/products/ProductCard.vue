<template>
  <div class="pl-16 my-16">
    <div class="bg-secondary w-400px rounded-15px shadow-box1">
      <div class="p-12 text-white">
        <h3 class="font-serif font-bold text-34px w-96 ">Pinoy Dental Card</h3>
        <ul class="text-base lg:text-2xl my-3">
          <li class="list-style-check">Free &amp; Unlimited Consultation &amp; Dental Examinations</li>
          <li class="list-style-check">Simple Tooth Extraction</li>
          <li class="list-style-check">Twice a year Oral Prophylaxis</li>
          <li class="list-style-check"> Medication and/or prescription for dental pain</li>
          <li class="list-style-check">Treatment of dental related pain</li>
          <li class="list-style-check"> View details to see more benefits!</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard'
}
</script>

<style>
.list-style-check::before {
  content: "✓";
  margin-right: 10px;
}
</style>
