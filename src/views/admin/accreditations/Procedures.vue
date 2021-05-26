<template>
  <section class="py-4">
    <h3 class="title-page-admin">
      Procedures
    </h3>

    <div class="text-right space-x-4 my-10">
      <button class="iwc-btn-action w-auto bg-secondary px-8"> ADD PROCEDURE </button>
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
      <table-admin
        :columns="columns"
        :data="procedures"
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
          field: 'name',
          label: 'Name',
          class: 'text-left text-lg',
          cellClass: 'text-lg font-bold'
        },
        {
          field: 'abbreviation',
          label: 'Abbreviation',
          class: 'text-left text-lg',
          cellClass: 'text-lg font-bold'
        },
        {
          field: 'variableName',
          label: 'Variable Name',
          class: 'text-left text-lg',
          cellClass: 'text-lg font-bold'
        }
      ],
      procedures: [
        {
          id: '1',
          name: 'Temporary Filling',
          abbreviation: 'TF',
          variableName: 'Teeth'
        },
        {
          id: '2',
          name: 'Consultation',
          abbreviation: 'Cons',
          variableName: 'Teeth'
        },
        {
          id: '3',
          name: 'Treatment of Wounds, Lesions, and Burns',
          abbreviation: 'TWLB',
          variableName: 'Teeth'
        },
        {
          id: '4',
          name: 'Light-Curing/Permanent Filling',
          abbreviation: 'LPF',
          variableName: 'Teeth'
        },
        {
          id: '5',
          name: 'Adjustment of Dentures',
          abbreviation: 'AD',
          variableName: 'Teeth'
        },
        {
          id: '6',
          name: 'Simple Tooth Extraction',
          abbreviation: 'STE',
          variableName: 'Teeth'
        }
      ]
    }
  }
}
</script>
