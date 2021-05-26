<template>
  <section class="py-4">
    <h3 class="title-page-admin">
      Groups
    </h3>

    <div class="text-right space-x-4 my-10">
      <button class="iwc-btn-action w-auto bg-secondary px-8"> ADD GROUP </button>
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

    <div class="flex flex-row justify-end gap-10 mt-5">
      <p class="underline cursor-pointer">Upload..</p>
      <p class="underline cursor-pointer">Generate Report</p>
    </div>

    <div>
      <table-admin
        :columns="columns"
        :data="groups"
        children
        checkable
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
          field: 'id',
          label: 'ID',
          class: 'text-left text-lg',
          cellClass: 'text-lg font-bold'
        },
        {
          field: 'groupeName',
          label: 'Groupe Name',
          class: 'text-left text-lg',
          cellClass: 'text-lg font-bold'
        },
        {
          field: 'company',
          label: 'Company',
          class: 'text-left text-lg',
          cellClass: 'text-lg font-bold'
        },
        {
          field: 'subCompany',
          label: 'Sub-Company',
          class: 'text-left text-lg',
          cellClass: 'text-lg font-bold'
        },
        {
          field: 'planType',
          label: 'Plan Type',
          class: 'text-left text-lg',
          cellClass: 'text-lg font-bold'
        }
      ],
      groups: [
        {
          id: '1',
          groupeName: 'Boyet Group',
          company: 'Boyet Co.',
          subCompany: 'Sub-Boyet',
          planType: 'Plan A (2 months remaining)'
        },
        {
          id: '2',
          groupeName: 'Boyet Group',
          company: 'Boyet Co.',
          subCompany: 'Sub-Boyet',
          planType: 'Plan A (2 months remaining)'
        },
        {
          id: '3',
          groupeName: 'Boyet Group',
          company: 'Boyet Co.',
          subCompany: 'Sub-Boyet',
          planType: 'Plan A (2 months remaining)'
        },
        {
          id: '4',
          groupeName: 'Boyet Group',
          company: 'Boyet Co.',
          subCompany: 'Sub-Boyet',
          planType: 'Plan A (2 months remaining)'
        },
        {
          id: '5',
          groupeName: 'Boyet Group',
          company: 'Boyet Co.',
          subCompany: 'Sub-Boyet',
          planType: 'Plan A (2 months remaining)'
        },
        {
          id: '6',
          groupeName: 'Boyet Group',
          company: 'Boyet Co.',
          subCompany: 'Sub-Boyet',
          planType: 'Plan A (2 months remaining)'
        }
      ]
    }
  }
}
</script>
