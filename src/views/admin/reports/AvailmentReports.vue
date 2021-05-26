<template>
  <section class="py-4">
    <h3 class="title-page-admin">
      Availment
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
      <div>
        <p class="font-bold text-lg mb-5">TERMS OF PAYMENT</p>
        <div>
          <select id="" class="input-outlined select">
            <option value="">Monthly</option>
          </select>
        </div>
      </div>
    </div>

    <div>
      <table-admin
        :columns="columns"
        :data="reports"
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
          field: 'memberName',
          label: 'Member\'s Name',
          class: 'text-left text-lg',
          cellClass: 'text-lg font-bold'
        },
        {
          field: 'companyName',
          label: 'Company Name',
          class: 'text-left text-lg',
          cellClass: 'text-lg font-bold'
        },
        {
          field: 'dentalClinic',
          label: 'Dental Clinic',
          class: 'text-left text-lg',
          cellClass: 'text-lg font-bold'
        },
        {
          field: 'dentist',
          label: 'Dentist',
          class: 'text-left text-lg',
          cellClass: 'text-lg font-bold'
        },
        {
          field: 'procedure',
          label: 'Procedure',
          class: 'text-left text-lg',
          cellClass: 'text-lg font-bold'
        },
        {
          field: 'variable',
          label: 'Variable',
          class: 'text-left text-lg',
          cellClass: 'text-lg font-bold'
        },
        {
          field: 'availmentDate',
          label: 'Availment Date',
          class: 'text-left text-lg',
          cellClass: 'text-lg font-bold'
        }
      ],
      reports: [
        {
          memberName: 'Boyet Fernandez',
          companyName: 'Boyet Company',
          dentalClinic: 'Boyet Clinic',
          dentist: 'Dr. Boyet Fernandez',
          procedure: 'Tooth Extraction',
          variable: 'Teeth',
          availmentDate: '2/2/2021'
        },
        {
          memberName: 'Boyet Fernandez',
          companyName: 'Boyet Company',
          dentalClinic: 'Boyet Clinic',
          dentist: 'Dr. Boyet Fernandez',
          procedure: 'Tooth Extraction',
          variable: 'Teeth',
          availmentDate: '2/2/2021'
        },
        {
          memberName: 'Boyet Fernandez',
          companyName: 'Boyet Company',
          dentalClinic: 'Boyet Clinic',
          dentist: 'Dr. Boyet Fernandez',
          procedure: 'Tooth Extraction',
          variable: 'Teeth',
          availmentDate: '2/2/2021'
        },
        {
          memberName: 'Boyet Fernandez',
          companyName: 'Boyet Company',
          dentalClinic: 'Boyet Clinic',
          dentist: 'Dr. Boyet Fernandez',
          procedure: 'Tooth Extraction',
          variable: 'Teeth',
          availmentDate: '2/2/2021'
        },
        {
          memberName: 'Boyet Fernandez',
          companyName: 'Boyet Company',
          dentalClinic: 'Boyet Clinic',
          dentist: 'Dr. Boyet Fernandez',
          procedure: 'Tooth Extraction',
          variable: 'Teeth',
          availmentDate: '2/2/2021'
        },
        {
          memberName: 'Boyet Fernandez',
          companyName: 'Boyet Company',
          dentalClinic: 'Boyet Clinic',
          dentist: 'Dr. Boyet Fernandez',
          procedure: 'Tooth Extraction',
          variable: 'Teeth',
          availmentDate: '2/2/2021'
        }
      ]
    }
  }
}
</script>
