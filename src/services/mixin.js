import VueRecaptcha from 'vue-recaptcha'

import IconEmail from '@/components/icons/IconEmail'
import IconPhone from '@/components/icons/IconPhone'
import IconCart from '@/components/icons/IconCart'
import IconMap from '@/components/icons/IconMap'
import IconMobile from '@/components/icons/IconMobile'
import IconSearch from '@/components/icons/IconSearch'
import IconFacebook from '@/components/icons/IconFacebook'
import IconChevronCircleRight from '@/components/icons/IconChevronCircleRight'
import IconChevronDown from '@/components/icons/IconChevronDown'
import IconChevronUp from '@/components/icons/IconChevronUp'
import IconChevronCircleLeft from '@/components/icons/IconChevronCircleLeft'
import IconCheck from '@/components/icons/IconCheck'
import IconDashboard from '@/components/icons/IconDashboard'
import IconSales from '@/components/icons/IconSales'
import IconAccreditations from '@/components/icons/IconAccreditations'
import IconClients from '@/components/icons/IconClients'
import IconReports from '@/components/icons/IconReports'
import IconAccount from '@/components/icons/IconAccount'
import IconUser from '@/components/icons/IconUser'
import IconTimelapse from '@/components/icons/IconTimelapse'

import Modal from '@/components/public/general/modal'
import Subtitle from '@/components/reusables/Subtitle'
import IsApply from '@/components/reusables/IsApply'
import TableAdmin from '@/components/reusables/TableAdmin'

import CustomSelect from '@/components/reusables/input/CustomSelect'

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
    IconDashboard,
    IconSales,
    IconAccreditations,
    IconClients,
    IconReports,
    IconAccount,
    IconChevronDown,
    IconChevronUp,
    IconUser,
    IconTimelapse,

    Modal,
    Subtitle,
    IsApply,
    TableAdmin,

    CustomSelect,

    VueRecaptcha
  },
  methods: {
    formatPrice (number) {
      return new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'PHP', maximumSignificantDigits: 3 }).format(number)
    }
  }
}
