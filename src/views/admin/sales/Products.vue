<template>
  <section class="py-4">
    <h3 class="title-page-admin">
      Products
    </h3>
    <div class="text-right space-x-4 my-10">
      <button class="iwc-btn-action w-auto bg-secondary px-8"> ADD PRODUCT </button>
      <button class="iwc-btn-action bg-grid1 w-auto px-8"> ACTION </button>
    </div>
    <ActionsTable
      :data-filter="['All']"
      :data-sort-by="['Ascending']"/>
    <div>
      <table-admin
        :columns="columns"
        :data="products"
        checkable
        children
        children-key="id">
        <template #children="">
          <td colspan="2" class="py-5 px-3 border-l-8 border-primary"></td>
          <td colspan="4" class="py-5 px-3">
            <p class="font-bold text-lg">
              Benefits: TWLB
            </p>
            <p class="font-bold text-lg">Details:</p>
          </td>
        </template>
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
          field: 'productName',
          label: 'Product Name',
          class: 'text-left text-lg',
          cellClass: 'text-lg font-bold'
        },
        {
          field: 'category',
          label: 'Category',
          class: 'text-left text-lg',
          cellClass: 'text-lg font-bold'
        },
        {
          field: 'price',
          label: 'Price',
          class: 'text-left text-lg',
          cellClass: 'text-lg font-bold'
        }
      ],
      products: [
        {
          id: '1',
          productName: 'Plan A',
          category: 'Individual',
          price: 'PHP 1,400'
        },
        {
          id: '2',
          productName: 'Plan A',
          category: 'Individual',
          price: 'PHP 1,400'
        },
        {
          id: '3',
          productName: 'Plan A',
          category: 'Individual',
          price: 'PHP 1,400'
        },
        {
          id: '4',
          productName: 'Plan A',
          category: 'Individual',
          price: 'PHP 1,400'
        },
        {
          id: '5',
          productName: 'Plan A',
          category: 'Individual',
          price: 'PHP 1,400'
        },
        {
          id: '6',
          productName: 'Plan A',
          category: 'Individual',
          price: 'PHP 1,400'
        }
      ]
    }
  }
}
</script>
