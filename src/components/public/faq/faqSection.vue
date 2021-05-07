<template>
  <section
    class="container py-28 mx-auto w-11/12 lg:w-8/12"
  >
    <div>
      <h3 class="font-bold text-primary font-serif text-center text-2xl md:text-3xl lg:text-42px">
        Frequently Asked Questions
      </h3>
      <hr class="border-2 border-grid2 w-1/2 md:w-2/5 lg:w-3/5 xl:w-1/2 mt-6 mx-auto"/>
    </div>

    <div class="pt-20" v-for="item in questions" :key="item.id">
       <faq-question :question="item.question" :message="item.message"></faq-question>
    </div>

  </section>
</template>

<script>
import faqQuestion from './faqQuestion.vue'
export default {
  components: { faqQuestion },
  data () {
    return {
      questions: [
        {
          question: 'My gums are bleeding!',
          message: 'Gums bleed when they are irritated and inflamed which is not considered normal. This is due to plaque (a soft film of bacteria) being left on the teeth which causes inflammation called gingivitis and if not addressed can develop into gum disease. Over time, if not cleaned off through daily brushing and interdental cleaning, the plaque can turn into a hard deposit called tartar or calculus which will require professional scaling by your dentist or hygienist to remove it.',
          id: 1
        },
        {
          question: 'My gums are bleeding!',
          message: 'Gums bleed when they are irritated and inflamed which is not considered normal. This is due to plaque (a soft film of bacteria) being left on the teeth which causes inflammation called gingivitis and if not addressed can develop into gum disease. Over time, if not cleaned off through daily brushing and interdental cleaning, the plaque can turn into a hard deposit called tartar or calculus which will require professional scaling by your dentist or hygienist to remove it.',
          id: 2
        },
        {
          question: 'My gums are bleeding!',
          message: 'Gums bleed when they are irritated and inflamed which is not considered normal. This is due to plaque (a soft film of bacteria) being left on the teeth which causes inflammation called gingivitis and if not addressed can develop into gum disease. Over time, if not cleaned off through daily brushing and interdental cleaning, the plaque can turn into a hard deposit called tartar or calculus which will require professional scaling by your dentist or hygienist to remove it.',
          id: 3
        },
        {
          question: 'My gums are bleeding!',
          message: 'Gums bleed when they are irritated and inflamed which is not considered normal. This is due to plaque (a soft film of bacteria) being left on the teeth which causes inflammation called gingivitis and if not addressed can develop into gum disease. Over time, if not cleaned off through daily brushing and interdental cleaning, the plaque can turn into a hard deposit called tartar or calculus which will require professional scaling by your dentist or hygienist to remove it.',
          id: 4
        },
        {
          question: 'My gums are bleeding!',
          message: 'Gums bleed when they are irritated and inflamed which is not considered normal. This is due to plaque (a soft film of bacteria) being left on the teeth which causes inflammation called gingivitis and if not addressed can develop into gum disease. Over time, if not cleaned off through daily brushing and interdental cleaning, the plaque can turn into a hard deposit called tartar or calculus which will require professional scaling by your dentist or hygienist to remove it.',
          id: 5
        },
        {
          question: 'My gums are bleeding!',
          message: 'Gums bleed when they are irritated and inflamed which is not considered normal. This is due to plaque (a soft film of bacteria) being left on the teeth which causes inflammation called gingivitis and if not addressed can develop into gum disease. Over time, if not cleaned off through daily brushing and interdental cleaning, the plaque can turn into a hard deposit called tartar or calculus which will require professional scaling by your dentist or hygienist to remove it.',
          id: 6
        },
        {
          question: 'My gums are bleeding!',
          message: 'Gums bleed when they are irritated and inflamed which is not considered normal. This is due to plaque (a soft film of bacteria) being left on the teeth which causes inflammation called gingivitis and if not addressed can develop into gum disease. Over time, if not cleaned off through daily brushing and interdental cleaning, the plaque can turn into a hard deposit called tartar or calculus which will require professional scaling by your dentist or hygienist to remove it.',
          id: 7
        },
        {
          question: 'My gums are bleeding!',
          message: 'Gums bleed when they are irritated and inflamed which is not considered normal. This is due to plaque (a soft film of bacteria) being left on the teeth which causes inflammation called gingivitis and if not addressed can develop into gum disease. Over time, if not cleaned off through daily brushing and interdental cleaning, the plaque can turn into a hard deposit called tartar or calculus which will require professional scaling by your dentist or hygienist to remove it.',
          id: 8
        }
      ]
    }
  }
}
</script>

<style scoped></style>
