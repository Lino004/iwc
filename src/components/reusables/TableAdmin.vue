<template>
  <div>
    <table class="w-full my-10 shadow-box1">
      <thead>
        <tr class="text-white bg-primary">
          <th v-if="checkable" class="py-5 px-3 text-left w-14">
            <input type="checkbox" v-model="selectAll">
          </th>
          <th
            v-for="(column, i) in columns"
            :key="`${i}column`"
            class="py-5 px-3"
            :class="column.class">
            {{column.label}}
          </th>
          <th v-if="children" class="py-5 px-3 w-14">
          </th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(item, i) in data">
          <tr
            :key="`${i}item`"
            class="border-t-2 border-grid7"
            :class="{
              'cursor-pointer': children
            }"
            @click="children ? $refs[`${i}item-child`][0].click() : ''">
            <td v-if="checkable" class="py-5 px-3">
              <input type="checkbox" v-model="item.select">
            </td>
            <td
              v-for="(column, y) in columns"
              :key="`${y}column-item`"
              class="py-5 px-3"
              :class="column.cellClass">
              {{item[column.field]}}
            </td>
            <td v-if="children" class="py-5 px-3">
              <input type="checkbox" class="hidden" :ref="`${i}item-child`" v-model="item.showChild">
              <IconChevronDown
                v-if="!item.showChild"
                width="2rem"
                height="2rem"
                class="fill-grid7"
              />
              <IconChevronUp
                v-else
                width="2rem"
                height="2rem"
                class="fill-grid7"
              />
            </td>
          </tr>
          <tr :key="`${i}item-child`" class="border-t-2 border-grid7" v-if="children && item.showChild">
            <slot name="children" :item="item"></slot>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    columns: {
      type: Array,
      defaul: () => []
    },
    data: {
      type: Array,
      defaul: () => []
    },
    checkable: Boolean,
    children: Boolean,
    childrenKey: String
  },
  data () {
    return {
      show: false,
      selectAll: false
    }
  },
  watch: {
    selectAll (val) {
      this.data.forEach(el => {
        el.select = val
      })
    }
  },
  methods: {
  },
  mounted () {}
}
</script>
