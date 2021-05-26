<template>
  <section class="py-4">
    <h3 class="title-page-admin">
      Dentists
    </h3>

    <div class="text-right space-x-4 my-10">
      <button class="iwc-btn-action w-auto bg-secondary px-8"> ADD DENTIST </button>
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
        <p class="underline cursor-pointer">Upload..</p>
        <p class="underline cursor-pointer">Generate Report</p>
      </div>

      <div>
        <table-admin
          :columns="columns"
          :data="dentists"
          checkable
          children
          children-key="id">
          <template #children="">
            <td colspan="2" class="py-5 px-3 border-l-8 border-primary"></td>
            <td colspan="3" class="py-5 px-3">
              <div class="pb-10">
                <h6 class="text-secondary font-bold underline pb-6">CONTACT DETAILS</h6>
                <p class="text-lg"><span class="font-bold ">Dental Clinic: </span>Boyet's Clinic</p>
                <p class="text-lg py-11"><span class="font-bold ">Address: </span>1234 Happy Street | City Province</p>
                <p class="text-lg pb-11"><span class="font-bold ">Contact Number: </span>123-456-7890</p>
                <p class="text-lg"><span class="font-bold ">Contact Email: </span>mail@dentist.com</p>
              </div>
              <div class="pb-10">
                <h6 class="text-secondary font-bold underline pb-6">BANK INFORMATION</h6>
                <p class="text-lg"><span class="font-bold ">Bank Account Name: </span>Boyet's Bank</p>
                <p class="text-lg py-5"><span class="font-bold ">Account Number: </span>1234567890</p>
                <p class="text-lg"><span class="font-bold ">Payment Mode: </span>Bank Deposit</p>
              </div>
              <div class="pb-10">
                <h6 class="text-secondary font-bold underline pb-6">PROCEDURES</h6>
                <p class="text-lg"><span class="font-bold ">TWLB: </span>PHP 55</p>
                <p class="text-lg py-5"><span class="font-bold ">OP: </span>PHP 55</p>
                <p class="text-lg"><span class="font-bold ">STE: </span>PHP 55</p>
              </div>
              <div class="">
                <h6 class="text-secondary font-bold underline pb-6">MISCELLANEOUS</h6>
                <p class="text-lg"><span class="font-bold ">Referrer: </span>Boyet Fernandez</p>
                <p class="text-lg py-5"><span class="font-bold ">Remarks: </span>N/A</p>
              </div>
            </td>
            <td colspan="2" class="py-5 px-3 align-top">
              <p class="font-bold text-lg underline cursor-pointer">View PRC Image</p>
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
          field: 'dentistName',
          label: 'Dentist Name',
          class: 'text-left text-lg',
          cellClass: 'text-lg font-bold'
        },
        {
          field: 'prcNumber',
          label: 'PRC Number',
          class: 'text-left text-lg',
          cellClass: 'text-lg font-bold'
        },
        {
          field: 'specialization',
          label: 'Specialization',
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
      dentists: [
        {
          id: '1',
          dentistName: 'Boyet Fernandez',
          prcNumber: '1234',
          specialization: 'Nothing',
          status: 'Active'
        },
        {
          id: '2',
          dentistName: 'Boyet Fernandez',
          prcNumber: '1234',
          specialization: 'Nothing',
          status: 'Active'
        },
        {
          id: '3',
          dentistName: 'Boyet Fernandez',
          prcNumber: '1234',
          specialization: 'Nothing',
          status: 'Active'
        },
        {
          id: '4',
          dentistName: 'Boyet Fernandez',
          prcNumber: '1234',
          specialization: 'Nothing',
          status: 'Active'
        },
        {
          id: '5',
          dentistName: 'Boyet Fernandez',
          prcNumber: '1234',
          specialization: 'Nothing',
          status: 'Active'
        },
        {
          id: '6',
          dentistName: 'Boyet Fernandez',
          prcNumber: '1234',
          specialization: 'Nothing',
          status: 'Active'
        }
      ]
    }
  }
}
</script>
