export function validationProduct (infoData, infoError, time) {
  let valid = true
  if (!infoData.name) {
    valid = false
    infoError.name = 'Name is invalid'
    setTimeout(() => { infoError.name = '' }, time)
  }
  if (!infoData.price) {
    valid = false
    infoError.price = 'Price is invalid'
    setTimeout(() => { infoError.price = '' }, time)
  }
  if (!infoData.paymentTerm) {
    valid = false
    infoError.paymentTerm = 'Payment is invalid'
    setTimeout(() => { infoError.paymentTerm = '' }, time)
  }
  if (!infoData.productGroup) {
    valid = false
    infoError.productGroup = 'Categorie Group is invalid'
    setTimeout(() => { infoError.productGroup = '' }, time)
  }
  if (!infoData.benefits.length) {
    valid = false
    infoError.benefits = 'Benefits is invalid'
    setTimeout(() => { infoError.benefits = '' }, time)
  }
  if (!infoData.tidbits.length) {
    valid = false
    infoError.tidbits = 'tidbits is invalid'
    setTimeout(() => { infoError.tidbits = '' }, time)
  }
  if (!infoData.details) {
    valid = false
    infoError.details = 'Details is invalid'
    setTimeout(() => { infoError.details = '' }, time)
  }
  return valid
}
