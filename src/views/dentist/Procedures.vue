<template>
  <div class="flex h-full">
    <div class="flex items-center">
      <a @click="currentIndex -= 1"
        :class="{
          'invisible': currentIndex <= 0
        }">
        <IconChevronCircleLeft
          class="mx-5 stroke-grid8 cursor-pointer"
          :width="sizeIcon.width"
          :height="sizeIcon.height"
        />
      </a>
    </div>
    <div class="flex-1 flex items-center w-full">
      <div class="flex-1 grid grid-cols-1">
        <table
          class="w-full shadow-box1"
          v-for="(procedure, i) in filtre" :key="`${i}procedure`">
          <thead>
            <tr class="text-lg bg-primary text-white">
              <th class="py-7 px-2">CLINIC NAME</th>
              <th class="py-7 px-2">TWLB</th>
              <th class="py-7 px-2">OP</th>
              <th class="py-7 px-2">STE</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="text-lg text-primary"
              v-for="(item, i) in procedure.data" :key="`${i}data`">
              <td class="text-center py-7">
                {{item.clinicName}}
              </td>
              <td class="text-center py-7">
                {{item.twlb}}
              </td>
              <td class="text-center py-7">
                {{item.op}}
              </td>
              <td class="text-center py-7">
                {{item.ste}}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="flex items-center">
      <a @click="currentIndex += 1"
        :class="{
          'invisible': (currentIndex + 1) >= totalPage
        }">
        <IconChevronCircleRight
          class="mx-5 stroke-grid8 cursor-pointer"
          :width="sizeIcon.width"
          :height="sizeIcon.height"
        />
      </a>
    </div>
  </div>
</template>

<script>
import breakpoints from '@/plugins/breakpoints'

export default {
  data () {
    return {
      procedures: [
        {
          data: [
            {
              clinicName: 'Happy Tooth Clinic',
              twlb: 55,
              op: 55,
              ste: 55
            }
          ]
        },
        {
          data: [
            {
              clinicName: 'Happy Tooth Clinic',
              twlb: 55,
              op: 55,
              ste: 55
            }
          ]
        }
      ],
      currentIndex: 0,
      perPage: 1
    }
  },
  computed: {
    filtre () {
      return this.procedures.slice(this.currentIndex * this.perPage, (this.currentIndex + 1) * this.perPage)
    },
    totalPage () {
      return Math.ceil(this.procedures.length / this.perPage)
    },
    sizeIcon () {
      switch (breakpoints.is) {
        case 'xs':
          return {
            width: '2rem',
            height: '2rem'
          }
        case 'sm':
          return {
            width: '2rem',
            height: '2rem'
          }
        default:
          return {
            width: '4rem',
            height: '4rem'
          }
      }
    }
  }
}
</script>
