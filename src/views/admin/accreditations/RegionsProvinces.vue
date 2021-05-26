<template>
  <section class="py-4">
    <h3 class="title-page-admin">
      Regions & Provinces
    </h3>

    <div class="text-right space-x-4 my-10">
      <button class="iwc-btn-action w-auto bg-secondary px-8"> ADD </button>
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

    <div class="text-left space-x-4 my-10">
      <button @click="toggleToRegion" :class="{
        'text-white font-bold rounded-2xl py-2 w-auto bg-grid1 px-8': isRegion,
        'hover:bg-grid1 hover:text-white rounded-2xl font-bold text-grid7 py-2 w-auto px-8': isProvince
      }">REGIONS</button>
      <button @click="toggleToProvince" :class="{
        'text-white font-bold rounded-2xl py-2 w-auto bg-grid1 px-8': isProvince,
        'hover:bg-grid1 hover:text-white rounded-2xl font-bold text-grid7 py-2 w-auto px-8': isRegion
      }">PROVINCES</button>
    </div>

    <ActionsTable
      :data-filter="['All']"
      :data-sort-by="['Ascending']"
    />

    <div v-if="isRegion">
      <table-admin
        :columns="regionsColumns"
        :data="regions"
        checkable
      >
      </table-admin>
    </div>

    <div v-if="isProvince">
      <table-admin
        :columns="provincesColumns"
        :data="provinces"
        checkable
      >
      </table-admin>
    </div>

  </section>
</template>

<script>
export default {
  methods: {
    toggleToProvince () {
      this.isRegion = false
      this.isProvince = true
    },
    toggleToRegion () {
      this.isRegion = true
      this.isProvince = false
    }
  },
  data () {
    return {
      filter: 0,
      sortBy: 0,
      isRegion: true,
      isProvince: false,
      regionsColumns: [
        {
          field: 'id',
          label: 'ID',
          class: 'text-left text-lg',
          cellClass: 'text-lg font-bold'
        },
        {
          field: 'regionName',
          label: 'Region Name',
          class: 'text-left text-lg',
          cellClass: 'text-lg font-bold'
        },
        {
          field: 'regionCode',
          label: 'Region Code',
          class: 'text-left text-lg',
          cellClass: 'text-lg font-bold'
        },
        {
          field: 'numberOfClinic',
          label: 'Number Of Clinic',
          class: 'text-left text-lg',
          cellClass: 'text-lg font-bold'
        }
      ],
      provincesColumns: [
        {
          field: 'id',
          label: 'ID',
          class: 'text-left text-lg',
          cellClass: 'text-lg font-bold'
        },
        {
          field: 'provinceName',
          label: 'Province Name',
          class: 'text-left text-lg',
          cellClass: 'text-lg font-bold'
        },
        {
          field: 'provinceCode',
          label: 'Province Code',
          class: 'text-left text-lg',
          cellClass: 'text-lg font-bold'
        },
        {
          field: 'assignedRegion',
          label: 'Assigned Region',
          class: 'text-left text-lg',
          cellClass: 'text-lg font-bold'
        },
        {
          field: 'numberOfClinic',
          label: 'Number Of Clinic',
          class: 'text-left text-lg',
          cellClass: 'text-lg font-bold'
        }
      ],
      regions: [
        {
          id: '1',
          regionName: 'Region',
          regionCode: 'ABCD',
          numberOfClinic: '1'
        },
        {
          id: '2',
          regionName: '1',
          regionCode: 'Nothing',
          numberOfClinic: '1'
        },
        {
          id: '3',
          regionName: '1',
          regionCode: 'Nothing',
          numberOfClinic: '1'
        },
        {
          id: '4',
          regionName: '1',
          regionCode: 'Nothing',
          numberOfClinic: 'ABCD'
        },
        {
          id: '5',
          regionName: '1',
          regionCode: 'Nothing',
          numberOfClinic: 'ABCD'
        },
        {
          id: '6',
          regionName: '1',
          regionCode: 'Nothing',
          numberOfClinic: 'ABCD'
        }
      ],
      provinces: [
        {
          id: '1',
          provinceName: 'Province',
          provinceCode: 'ABCD',
          assignedRegion: 'Cordillera Administrative Region',
          numberOfClinic: '1'
        },
        {
          id: '2',
          provinceName: 'Province',
          provinceCode: 'ABCD',
          assignedRegion: 'Cordillera Administrative Region',
          numberOfClinic: '1'
        },
        {
          id: '3',
          provinceName: 'Province',
          provinceCode: 'ABCD',
          assignedRegion: 'Cordillera Administrative Region',
          numberOfClinic: '1'
        },
        {
          id: '4',
          provinceName: 'Province',
          provinceCode: 'ABCD',
          assignedRegion: 'Cordillera Administrative Region',
          numberOfClinic: '1'
        },
        {
          id: '5',
          provinceName: 'Province',
          provinceCode: 'ABCD',
          assignedRegion: 'Cordillera Administrative Region',
          numberOfClinic: '1'
        },
        {
          id: '6',
          provinceName: 'Province',
          provinceCode: 'ABCD',
          assignedRegion: 'Cordillera Administrative Region',
          numberOfClinic: '1'
        }
      ]
    }
  }
}
</script>
