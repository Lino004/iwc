<template>
  <section class="py-4">
    <h3 class="title-page-admin">
      Members
    </h3>

    <div class="text-right space-x-4 my-10">
      <button class="iwc-btn-action w-auto bg-secondary px-8"> ADD MEMBER </button>
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

    <div>
      <table-admin
        :columns="columns"
        :data="members"
        children
        checkable
      >
        <template #children="">
          <td colspan="2" class="py-5 px-3 border-l-8 border-primary "></td>
          <td colspan="4" class="py-5 px-3 ">
            <div>
              <div class="flex gap-x-2">
                <h6
                  @click="toggleToPayment"
                  :class="{
                    'text-secondary underline cursor-pointer font-bold': isPayment,
                    'text-primary cursor-pointer font-bold': isAvailment
                  }"
                >
                  PAYMENT HISTORY
                </h6>
                <p>|</p>
                <h6
                  @click="toggleToAvailment"
                  :class="{
                    'text-secondary underline cursor-pointer font-bold': isAvailment,
                    'text-primary cursor-pointer font-bold': isPayment
                  }"
                >
                  AVAILMENT HISTORY
                </h6>
              </div>

              <div v-if="isPayment">
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

              <div v-else>
                <div class="grid grid-cols-3 gap-5 my-10 text-primary">
                  <div class="flex items-center gap-x-5">
                    <p>From</p>
                    <input type="date" class="input-outlined">
                  </div>
                  <div class="col-span-2 flex items-center gap-x-5">
                    <p>To</p>
                    <input type="date" class="input-outlined">
                    <input type="text" class="input-outlined search">
                  </div>
                </div>

                <div class="grid grid-rows-2 gap-5 my-5">
                  <div class="flex items-center justify-center text-primary font-bold text-lg cursor-pointer border border-grid7 rounded-15px">
                    Add Availment
                  </div>
                  <div class="shadow-box1 px-10 py-5 rounded-15px">
                    <div class="font-bold text-grid9 font-serif text-lg flex gap-2 mb-3 items-baseline">
                      <h6 class="text-primary text-2xl">Boyet's Clinic</h6> |
                      <p>Dr. Boyet Fernandez</p>
                    </div>
                    <p class="text-base text-primary">
                      Availed on <span class="font-bold text-secondary">2/21/2021</span> by <span class="font-bold">Boyet the Customer</span>
                    </p>
                    <hr class="my-10 border-secondary border-3 opacity-70 w-1/3"/>
                    <div class="flex items-baseline text-lg text-primary gap-2">
                      <p class="font-bold">Tooth Removal (Plan A)</p> |
                      <p>PHP 55</p> |
                      <p>3 Teeth</p>
                    </div>
                    <p class="text-lg text-primary mt-5">Remarks: N/A</p>
                  </div>
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
    </div>
  </section>
</template>

<script>
import card from '../../../components/admin/member/card.vue'
export default {
  components: { card },
  methods: {
    toggleToAvailment () {
      this.isPayment = false
      this.isAvailment = true
    },
    toggleToPayment () {
      this.isPayment = true
      this.isAvailment = false
    }
  },
  data () {
    return {
      filter: 0,
      sortBy: 0,
      isPayment: true,
      isAvailment: false,
      months: '',
      columns: [
        {
          field: 'id',
          label: 'ID',
          class: 'text-left text-lg',
          cellClass: 'text-lg font-bold'
        },
        {
          field: 'memberName',
          // eslint-disable-next-line quotes
          label: "Member's Name",
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
      members: [
        {
          id: '1',
          memberName: 'Boyet Fernandez',
          company: 'Boyet Co.',
          subCompany: 'Sub-Boyet',
          planType: 'Plan A (2 months remaining)'
        },
        {
          id: '2',
          memberName: 'Boyet Fernandez',
          company: 'Boyet Co.',
          subCompany: 'Sub-Boyet',
          planType: 'Plan A (2 months remaining)'
        },
        {
          id: '3',
          memberName: 'Boyet Fernandez',
          company: 'Boyet Co.',
          subCompany: 'Sub-Boyet',
          planType: 'Plan A (2 months remaining)'
        },
        {
          id: '4',
          memberName: 'Boyet Fernandez',
          company: 'Boyet Co.',
          subCompany: 'Sub-Boyet',
          planType: 'Plan A (2 months remaining)'
        },
        {
          id: '5',
          memberName: 'Boyet Fernandez',
          company: 'Boyet Co.',
          subCompany: 'Sub-Boyet',
          planType: 'Plan A (2 months remaining)'
        },
        {
          id: '6',
          memberName: 'Boyet Fernandez',
          company: 'Boyet Co.',
          subCompany: 'Sub-Boyet',
          planType: 'Plan A (2 months remaining)'
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
