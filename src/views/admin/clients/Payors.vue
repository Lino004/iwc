<template>
  <section class="py-4">
    <h3 class="title-page-admin">
      Payors
    </h3>

    <div class="text-right space-x-4 my-10">
      <button class="iwc-btn-action w-auto bg-secondary px-8"> ADD PAYOR </button>
      <button class="iwc-btn-action bg-grid1 w-auto px-8"> ACTION </button>
    </div>

    <ActionsTable
      :data-filter="['All']"
      :data-sort-by="['Ascending']"
    />

     <div class="flex flex-row justify-end gap-10 mt-5">
      <p class="underline cursor-pointer">Upload..</p>
      <p class="underline cursor-pointer">Generate Report</p>
    </div>

    <table-admin
        :columns="columns"
        :data="payors"
        children
        checkable
      >
        <template #children="">
          <td colspan="2" class="py-5 px-3 border-l-8 border-primary "></td>
          <td colspan="4" class="py-5 px-3 ">
            <div>
              <h6 class="text-secondary underline cursor-pointer font-bold">PAYMENT HISTORY</h6>

              <div>
                <div class="grid grid-cols-3 gap-5 my-10">
                  <div class="flex items-center gap-x-5">
                    <p>From</p>
                    <input type="date" class="input-outlined">
                  </div>
                  <div class="col-span-2 flex items-center gap-x-5">
                    <p>To</p>
                    <input type="date" class="input-outlined">
                    <select id="month" name="month" v-model="months" class="input-outlined select">
                      <option value="">Monthly</option>
                      <option value="1">Jan</option>
                    </select>
                  </div>
                </div>
                <input type="text" class="input-outlined search" placeholder="Search members">

                <div v-for="(item, i) in card" :key="i">
                  <card
                    :vert='item.vert'
                    :jaune="item.jaune"
                    :rouge="item.rouge"
                    :month='item.month'
                    :year="item.year"
                    :twice='item.twice'
                    :one='item.one'
                    :two='item.two'
                    :own="item.own"
                    :price='item.price'
                    :plan='item.plan'
                    :payor='item.payor'
                    :dateReceived="item.dateReceived"
                  />
                </div>

                <div class="flex justify-center items-center gap-x-20">
                  <button class="bg-grid9 rounded-15px py-2 px-5">1</button>
                  <button class="rounded-15px py-2 px-5">2</button>
                  <button class="rounded-15px py-2 px-5">3</button>
                </div>
              </div>
            </div>
          </td>
          <td colspan="1"></td>
        </template>
    </table-admin>
  </section>
</template>

<script>
import card from '../../../components/admin/member/card.vue'
export default {
  components: { card },
  data () {
    return {
      filter: 0,
      sortBy: 0,
      months: '',
      columns: [
        {
          field: 'id',
          label: 'ID',
          class: 'text-left text-lg',
          cellClass: 'text-lg font-bold'
        },
        {
          field: 'payorName',
          // eslint-disable-next-line quotes
          label: "Payor's Name",
          class: 'text-left text-lg',
          cellClass: 'text-lg font-bold'
        },
        {
          field: 'email',
          label: 'Email',
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
      payors: [
        {
          id: '1',
          payorName: 'Boyet Fernandez',
          email: 'email',
          contactNumber: '123-456-7890',
          status: 'In good standing'
        }
      ],
      card: [
        {
          vert: true,
          month: 'Feb',
          year: '2021',
          twice: true,
          one: 'Recurring',
          two: 'Monthly',
          price: '1,400',
          plan: 'A',
          payor: 'Boyet Fernandez',
          dateReceived: '2/2/2021'
        },
        {
          jaune: true,
          month: 'Feb',
          year: '2021',
          own: 'Non-Recurring',
          price: '1,400',
          plan: 'A',
          payor: 'Boyet Fernandez'
        },
        {
          rouge: true,
          month: 'Feb',
          year: '2021',
          twice: true,
          one: 'Recurring',
          two: 'Monthly',
          price: '1,400',
          plan: 'A',
          payor: 'Boyet Fernandez'
        },
        {
          vert: true,
          month: 'Feb',
          year: '2021',
          twice: true,
          one: 'Recurring',
          two: 'Monthly',
          price: '1,400',
          plan: 'A',
          payor: 'Boyet Fernandez',
          dateReceived: '2/2/2021'
        }
      ]
    }
  }
}
</script>
