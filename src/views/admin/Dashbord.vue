<template>
  <section class="py-4">
    <h3 class="title-page-admin">
      Dashboard
    </h3>
    <Sommary/>
    <SectionCard/>
  </section>
</template>

<script>
import Sommary from '@/components/admin/dashboard/Sommary'
import SectionCard from '@/components/admin/dashboard/SectionCard'

export default {
  components: {
    Sommary,
    SectionCard
  }
}
</script>
