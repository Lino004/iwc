<template>
  <section
    class="container py-28 mx-auto w-11/12 lg:w-8/12"
  >
    <div class="pb-16">
      <h3 class="font-bold text-primary font-serif text-center text-2xl md:text-3xl lg:text-42px">
        Frequently Asked Questions
      </h3>
      <hr class="border-2 border-grid2 w-1/2 md:w-2/5 lg:w-3/5 xl:w-1/2 mt-6 mx-auto"/>
    </div>

    <div class="pt-9" v-for="item in questions" :key="item.id">
       <faq-question :question="item.question" :message="item.message"></faq-question>
    </div>

  </section>
</template>

<script>
import faqQuestion from './faqQuestion.vue'
import { Questions } from '@/configurations/FaqConfig'
export default {
  components: { faqQuestion },
  data () {
    return {
      questions: Questions
    }
  }
}
</script>
