<template>
  <section class="py-4">
    <h3 class="title-page-admin">
      Client Orders
    </h3>

    <div class="text-right space-x-4 my-10">
      <button class="iwc-btn-action w-auto bg-secondary px-8"> ADD PRODUCT </button>
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
        :data="clients"
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
          field: 'client',
          label: 'Client',
          class: 'text-left text-lg',
          cellClass: 'text-lg font-bold'
        },
        {
          field: 'status',
          label: 'Status',
          class: 'text-left text-lg',
          cellClass: 'text-lg font-bold'
        },
        {
          field: 'paymentMethod',
          label: 'Payment Method',
          class: 'text-left text-lg',
          cellClass: 'text-lg font-bold'
        },
        {
          field: 'totalOrder',
          label: 'Total Order',
          class: 'text-left text-lg',
          cellClass: 'text-lg font-bold'
        },
        {
          field: 'dateOrdered',
          label: 'Date Ordered',
          class: 'text-left text-lg',
          cellClass: 'text-lg font-bold'
        },
        {
          field: 'dateReceived',
          label: 'Date Received',
          class: 'text-left text-lg',
          cellClass: 'text-lg font-bold'
        }
      ],
      clients: [
        {
          id: '1',
          client: 'Boyet',
          status: 'Completed',
          paymentMethod: 'Credit Card',
          totalOrder: '1000',
          dateOrdered: '4 March 2021',
          dateReceived: '4 March 2021'
        },
        {
          id: '2',
          client: 'Boyet',
          status: 'Completed',
          paymentMethod: 'Credit Card',
          totalOrder: '1000',
          dateOrdered: '4 March 2021',
          dateReceived: '4 March 2021'
        },
        {
          id: '3',
          client: 'Boyet',
          status: 'Completed',
          paymentMethod: 'Credit Card',
          totalOrder: '1000',
          dateOrdered: '4 March 2021',
          dateReceived: '4 March 2021'
        },
        {
          id: '4',
          client: 'Boyet',
          status: 'Completed',
          paymentMethod: 'Credit Card',
          totalOrder: '1000',
          dateOrdered: '4 March 2021',
          dateReceived: '4 March 2021'
        },
        {
          id: '5',
          client: 'Boyet',
          status: 'Completed',
          paymentMethod: 'Credit Card',
          totalOrder: '1000',
          dateOrdered: '4 March 2021',
          dateReceived: '4 March 2021'
        },
        {
          id: '6',
          client: 'Boyet',
          status: 'Completed',
          paymentMethod: 'Credit Card',
          totalOrder: '1000',
          dateOrdered: '4 March 2021',
          dateReceived: '4 March 2021'
        }
      ]
    }
  }
}
</script>
