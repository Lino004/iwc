<template>
  <section class="py-4">
    <h3 class="title-page-admin">
      Dental Clinics
    </h3>

    <div class="text-right space-x-4 my-10">
      <button class="iwc-btn-action w-auto bg-secondary px-8"> ADD CLINIC </button>
      <div class="inline-block relative iwc-dropdown">
        <button
          class="iwc-btn-action bg-grid1 w-auto px-8">
          ACTION
        </button>
        <div class="dropdown-content absolute z-10 w-full">
          <div class="bg-white w-full p-4 shadow-box1 rounded-2xl mt-2 space-y-4">
            <div class="hover:text-secondary cursor-pointer text-center text-lg"> Edit </div>
            <div class="hover:text-secondary cursor-pointer text-center text-lg"> Delete </div>
          </div>
        </div>
      </div>
    </div>

    <ActionsTable
      :data-filter="['All']"
      :data-sort-by="['Ascending']"
    />

    <div>
      <div class="flex flex-row justify-end gap-10 mt-5">
        <p class="underline">Upload..</p>
        <p class="underline">Generate Report</p>
      </div>

      <div>
        <table-admin
          :columns="columns"
          :data="dentalClinics"
          checkable
          children
          children-key="id">
          <template #children="">
            <td colspan="2" class="py-5 px-3 border-l-8 border-primary"></td>
            <td colspan="4" class="py-5 px-3">
              <p class="text-lg">
                <span class="font-bold ">Address:</span>
                1234 Happy Street | City Province
              </p>
              <p class="text-lg py-11">
                <span class="font-bold ">Contact Email:</span>
                mail@dentist.com
              </p>
              <p class="text-lg">
                <span class="font-bold ">Schedule:</span>
                MON to FRI | 9AM-5PM
              </p>
            </td>
          </template>
        </table-admin>
      </div>
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
          field: 'id',
          label: 'ID',
          class: 'text-left text-lg',
          cellClass: 'text-lg font-bold'
        },
        {
          field: 'clinic',
          label: 'Clinic',
          class: 'text-left text-lg',
          cellClass: 'text-lg font-bold'
        },
        {
          field: 'contactPerson',
          label: 'Contact Person',
          class: 'text-left text-lg',
          cellClass: 'text-lg font-bold'
        },
        {
          field: 'contactNumber',
          label: 'Contact Number',
          class: 'text-left text-lg',
          cellClass: 'text-lg font-bold'
        },
        {
          field: 'status',
          label: 'Status',
          class: 'text-left text-lg',
          cellClass: 'text-lg font-bold'
        }
      ],
      dentalClinics: [
        {
          id: '1',
          clinic: 'Boyet Clinic',
          contactPerson: 'Boyet Fernandez',
          contactNumber: '123-456-7891',
          status: 'Active'
        },
        {
          id: '2',
          clinic: 'Boyet Clinic',
          contactPerson: 'Boyet Fernandez',
          contactNumber: '123-456-7891',
          status: 'Active'
        },
        {
          id: '3',
          clinic: 'Boyet Clinic',
          contactPerson: 'Boyet Fernandez',
          contactNumber: '123-456-7891',
          status: 'Active'
        },
        {
          id: '4',
          clinic: 'Boyet Clinic',
          contactPerson: 'Boyet Fernandez',
          contactNumber: '123-456-7891',
          status: 'Active'
        },
        {
          id: '5',
          clinic: 'Boyet Clinic',
          contactPerson: 'Boyet Fernandez',
          contactNumber: '123-456-7891',
          status: 'Active'
        },
        {
          id: '6',
          clinic: 'Boyet Clinic',
          contactPerson: 'Boyet Fernandez',
          contactNumber: '123-456-7891',
          status: 'Active'
        }
      ]
    }
  }
}
</script>
