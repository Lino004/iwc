<template>
  <section class="py-4">
    <h3 class="title-page-admin">
      Logs
    </h3>

    <div class="text-right space-x-4 my-10">
      <button class="iwc-btn-action bg-grid1 w-auto px-8"> DOWNLOAD </button>
    </div>

    <ActionsTable
      :data-filter="['All']"
      :data-sort-by="['Ascending']"
    />

    <div class="grid grid-cols-2 gap-5 my-10 text-primary">
      <div>
        <p class="font-bold text-lg mb-5">DATE RANGE</p>
        <div class="grid grid-cols-2 gap-5">
          <div class="flex gap-x-5 items-center">
            <p class="font-bold text-base">From</p>
            <input type="date" id="" class="input-outlined">
          </div>
          <div class="flex gap-x-5 items-center">
            <p class="font-bold text-base">To</p>
            <input type="date" id="" class="input-outlined">
          </div>
        </div>
      </div>
    </div>

    <div>
      <table-admin
        :columns="columns"
        :data="logs"
      >
      </table-admin>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      filter: 0,
      sortBy: 0,
      columns: [
        {
          field: 'activity',
          label: 'Activity',
          class: 'text-left text-lg pl-5',
          cellClass: 'text-lg font-bold pl-5'
        },
        {
          field: 'logTime',
          label: 'Log Time',
          class: 'text-left text-lg',
          cellClass: 'text-lg font-bold'
        },
        {
          field: 'user',
          label: 'User',
          class: 'text-left text-lg',
          cellClass: 'text-lg font-bold'
        },

        {
          field: 'location',
          label: 'Location',
          class: 'text-left text-lg',
          cellClass: 'text-lg font-bold'
        },
        {
          field: 'ip',
          label: 'IP Address',
          class: 'text-left text-lg',
          cellClass: 'text-lg font-bold'
        }
      ],
      logs: [
        {
          activity: 'Boyet deleted Happy Clinic',
          logTime: '2021-4-25 15:00:00',
          user: 'Boyet#1',
          location: 'Clinic',
          ip: '100.100.100.100'
        },
        {
          activity: 'Boyet deleted Happy Clinic',
          logTime: '2021-4-25 15:00:00',
          user: 'Boyet#1',
          location: 'Clinic',
          ip: '100.100.100.100'
        },
        {
          activity: 'Boyet deleted Happy Clinic',
          logTime: '2021-4-25 15:00:00',
          user: 'Boyet#1',
          location: 'Clinic',
          ip: '100.100.100.100'
        },
        {
          activity: 'Boyet deleted Happy Clinic',
          logTime: '2021-4-25 15:00:00',
          user: 'Boyet#1',
          location: 'Clinic',
          ip: '100.100.100.100'
        },
        {
          activity: 'Boyet deleted Happy Clinic',
          logTime: '2021-4-25 15:00:00',
          user: 'Boyet#1',
          location: 'Clinic',
          ip: '100.100.100.100'
        },
        {
          activity: 'Boyet deleted Happy Clinic',
          logTime: '2021-4-25 15:00:00',
          user: 'Boyet#1',
          location: 'Clinic',
          ip: '100.100.100.100'
        }
      ]
    }
  }
}
</script>
