<template>
  <section class="py-4">
    <h3 class="title-page-admin">
      Bulk Payments
    </h3>

    <div class="text-right space-x-4 my-10">
      <button class="iwc-btn-action w-auto bg-secondary px-8">UPLOAD</button>
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
          field: 'dateUploaded',
          label: 'Date Uploaded',
          class: 'text-left text-lg',
          cellClass: 'text-lg font-bold'
        },
        {
          field: 'uploader',
          label: 'Uploader',
          class: 'text-left text-lg',
          cellClass: 'text-lg font-bold'
        },
        {
          field: 'download',
          label: ' ',
          class: 'text-left text-lg',
          cellClass: 'text-lg font-bold'
        }
      ],
      procedures: [
        {
          id: '1',
          dateUploaded: '2/2/2021',
          uploader: 'Boyet Fernandez',
          download: 'Download.csv'
        },
        {
          id: '2',
          dateUploaded: '2/2/2021',
          uploader: 'Boyet Fernandez',
          download: 'Download.csv'
        },
        {
          id: '3',
          dateUploaded: '2/2/2021',
          uploader: 'Boyet Fernandez',
          download: 'Download.csv'
        },
        {
          id: '4',
          dateUploaded: '2/2/2021',
          uploader: 'Boyet Fernandez',
          download: 'Download.csv'
        },
        {
          id: '5',
          dateUploaded: '2/2/2021',
          uploader: 'Boyet Fernandez',
          download: 'Download.csv'
        },
        {
          id: '6',
          dateUploaded: '2/2/2021',
          uploader: 'Boyet Fernandez',
          download: 'Download.csv'
        }
      ]
    }
  }
}
</script>
