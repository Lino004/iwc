import VueRecaptcha from 'vue-recaptcha'

import Modal from '@/components/public/general/modal'
import Subtitle from '@/components/reusables/Subtitle'
import IsApply from '@/components/reusables/IsApply'
import TableAdmin from '@/components/reusables/TableAdmin'
import Loading from '@/components/reusables/Loading'

import CustomSelect from '@/components/reusables/input/CustomSelect'
import CustomTaginput from '@/components/reusables/input/CustomTaginput'

// admin
import ActionsTable from '@/components/admin/ActionsTable'

export default {
  components: {
    Modal,
    Subtitle,
    IsApply,
    TableAdmin,
    Loading,

    CustomSelect,
    CustomTaginput,

    // admin
    ActionsTable,

    VueRecaptcha
  }
}
