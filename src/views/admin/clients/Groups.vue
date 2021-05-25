<template>
  <section class="py-4">
    <h3 class="title-page-admin">
      Groups
    </h3>

    <div class="text-right space-x-4 my-10">
      <button class="iwc-btn-action w-auto bg-secondary px-8"> ADD PRODUCT </button>
      <button class="iwc-btn-action bg-grid1 w-auto px-8"> ACTION </button>
    </div>

    <ActionsTable
      :data-filter="['All']"
      :data-sort-by="['Ascending']"
    />
  </section>
</template>

<script>
export default {

}
</script>
