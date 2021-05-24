<template>
  <div class="mb-8">
    <h4 class="text-primary font-bold font-serif text-4xl pb-4">Summary</h4>
    <div class="grid grid-cols-4">
      <div class="flex space-x-4">
        <div>
          <IconSales
            width="1.5rem"
            height="1.5rem"
            class="fill-grid7"
          />
        </div>
        <div class="text-lg">
          <p class="text-grid7">Daily Order</p>
          <p class="text-primary">5 orders today</p>
        </div>
      </div>
      <div class="flex space-x-4">
        <div>
          <IconTimelapse
            width="1.5rem"
            height="1.5rem"
            class="fill-grid7"
          />
        </div>
        <div class="text-lg">
          <p class="text-grid7">Pending Orders</p>
          <p class="text-primary">5 pending orders</p>
        </div>
      </div>
      <div class="flex space-x-4">
        <div>
          <IconUser
            width="1.5rem"
            height="1.5rem"
            class="fill-grid7"
          />
        </div>
        <div class="text-lg">
          <p class="text-grid7">Total Clients</p>
          <p class="text-primary">5 clients</p>
        </div>
      </div>
      <div class="flex space-x-4">
        <div>
          <IconAccreditations
            width="1.5rem"
            height="1.5rem"
            class="fill-grid7"
          />
        </div>
        <div class="text-lg">
          <p class="text-grid7">Total Dental Clinics</p>
          <p class="text-primary">5 dental clinics</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
