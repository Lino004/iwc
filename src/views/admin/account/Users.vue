<template>
  <section class="py-4">
    <h3 class="title-page-admin">
      USERS
    </h3>

    <div class="text-right space-x-4 my-10">
      <button class="iwc-btn-action w-auto bg-secondary px-8"> ADD USER </button>
      <button class="iwc-btn-action bg-grid1 w-auto px-8"> ACTION </button>
    </div>

    <ActionsTable
      :data-filter="['All']"
      :data-sort-by="['Ascending']"
    />

    <div>
      <table-admin
        :columns="columns"
        :data="users"
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
          field: 'role',
          label: 'Role',
          class: 'text-left text-lg',
          cellClass: 'text-lg font-bold'
        },
        {
          field: 'email',
          label: 'Email',
          class: 'text-left text-lg text-center',
          cellClass: 'text-lg font-bold text-center'
        },
        {
          field: 'entryData',
          label: 'Entry Data',
          class: 'text-left text-lg text-center',
          cellClass: 'text-lg font-bold text-center'
        }
      ],
      users: [
        {
          id: '1',
          name: 'Boyet',
          role: 'Admin',
          email: 'Credit Card',
          entryData: '1000'
        },
        {
          id: '1',
          name: 'Boyet',
          role: 'Super Admin',
          email: 'Credit Card',
          entryData: '1000'
        },
        {
          id: '1',
          name: 'Boyet',
          role: 'Viewer',
          email: 'Credit Card',
          entryData: '1000'
        },
        {
          id: '1',
          name: 'Boyet',
          role: 'Viewer',
          email: 'Credit Card',
          entryData: '1000'
        },
        {
          id: '1',
          name: 'Boyet',
          role: 'Viewer',
          email: 'Credit Card',
          entryData: '1000'
        },
        {
          id: '1',
          name: 'Boyet',
          role: 'Viewer',
          email: 'Credit Card',
          entryData: '1000'
        }
      ]
    }
  }
}
</script>
