import IconEmail from '@/components/icons/IconEmail'
import IconPhone from '@/components/icons/IconPhone'
import IconCart from '@/components/icons/IconCart'
import IconMap from '@/components/icons/IconMap'
import IconMobile from '@/components/icons/IconMobile'
import IconSearch from '@/components/icons/IconSearch'
import IconFacebook from '@/components/icons/IconFacebook'
import IconChevronCircleRight from '@/components/icons/IconChevronCircleRight'
import IconChevronCircleLeft from '@/components/icons/IconChevronCircleLeft'
import IconCheck from '@/components/icons/IconCheck'

import Modal from '@/components/public/general/modal'
import Subtitle from '@/components/reusables/Subtitle'
import IsApply from '@/components/reusables/IsApply'
import VueRecaptcha from 'vue-recaptcha'

export default {
  components: {
    IconEmail,
    IconPhone,
    IconCart,
    IconMap,
    IconMobile,
    IconSearch,
    IconFacebook,
    IconChevronCircleRight,
    IconChevronCircleLeft,
    IconCheck,
    Modal,
    Subtitle,
    IsApply,
    VueRecaptcha
  },
  methods: {
    formatPrice (number) {
      return new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'PHP', maximumSignificantDigits: 3 }).format(number)
    }
  }
}
