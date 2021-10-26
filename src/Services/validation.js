const required = (propertyType) => {
  if (propertyType) {
  // eslint-disable-next-line no-mixed-operators
    return v => v && (v.length > 0) && (v !== undefined) || `You must provide ${propertyType}`
  }
}

const minLength = (propertyType, minLength) => {
  // eslint-disable-next-line no-mixed-operators
  return v => v && v.length >= minLength || `${propertyType} must be at least ${minLength} characters`
}

const maxLength = (propertyType, maxLength) => {
  // eslint-disable-next-line no-mixed-operators
  return v => v && v.length <= maxLength || `${propertyType} must be less than ${maxLength} characters`
}

const notRequiredMaxLength = (val, propertyType, maxLength) => {
  if (val !== '' && val !== null) {
    // eslint-disable-next-line no-mixed-operators
    return val.length <= maxLength || `${propertyType} must be less than ${maxLength} characters`
  }
  return true
}

const emailFormat = () => {
  const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  // eslint-disable-next-line no-mixed-operators
  return v => v && regex.test(v) || 'Must be a valid email'
}
const username = (val) => {
  const letters = /[a-zA-Z]/g
  const regex = /.+@.+\..+/
  if (val && letters.test(val)) {
    // eslint-disable-next-line no-mixed-operators
    return v => v && regex.test(v) || 'Must be a valid email'
  } else {
    // eslint-disable-next-line no-mixed-operators
    return v => v && v.length >= 10 || 'Phone Number must be at least 10 characters'
  }
}

const validEmail = () => {
  const regex = /.+@.+\..+/
  // eslint-disable-next-line no-mixed-operators
  return v => v && regex.test(v) || 'Must be a valid email'
}
const mustContainNumber = () => {
  // eslint-disable-next-line no-mixed-operators
  return v => v && v.match(/([0-9])/) || 'Must contain a numeric value'
}
// eslint-disable-next-line no-unused-vars
const noSpaceAllowed = (val) => {
  const regex = /^\S+$/
  if (val !== '' && val !== null) {
    // eslint-disable-next-line no-mixed-operators
    return v => v && v.match(regex) || 'No spaces allowed'
  }
  return true
  //  !!(val.match(/^\S+$/)) || 'Name must have no spaces'
}
// eslint-disable-next-line no-unused-vars
const mustContainAlpha = (password) => {
  const regex = /([a-z].*[A-Z])|([A-Z].*[a-z])/
  // eslint-disable-next-line no-mixed-operators
  return v => v && v.match(regex) || 'Must contain at least one upper case'
}
const mustContainLower = (password) => {
  const regex = /^[a-z]+$/
  // eslint-disable-next-line no-mixed-operators
  return password.match(regex) || 'Must contain at least one lower case'
}
const mustContainSymbol = (password) => {
  // eslint-disable-next-line no-useless-escape
  const regex = /[-!$%^&*@#()_+|~=`{}\[\]:";'<>?,.\/]/
  // eslint-disable-next-line no-mixed-operators
  return password.match(regex) || 'Must contain at least one symbol'
}

const passwordMatch = (password) => {
  // eslint-disable-next-line no-mixed-operators
  return v => v && v === password || 'Password Do Not Match'
}
const passwordStrength = () => {
  const regex = /(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!%&@#$^*?_~])[\w!%&@#$^*?_~]{8,}/
  // eslint-disable-next-line no-mixed-operators
  return v => v && v.match(regex) || 'Password must contain at least one upper case, one lower case, a number and a special character'
}
const maxFileSize = (prototype, maxSize) => {
  return files => !files || !files.some(file => file.size > (maxSize * 1024 * 1024)) || `${prototype} size should be less than ${maxSize} MB!`
}

const isValidUrl = (url) => {
  const regex = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.?\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[?6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1?,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00?a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u?00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i
  // return validUrl.test(url)
  if (url !== '' && url !== null) {
    // eslint-disable-next-line no-mixed-operators
    return v => v && regex.test(v) || 'Must be a valid Url with http or https'
  }
  return true
}

const onlyNumbers = (val) => {
  if (val !== '' && val !== null) {
    // eslint-disable-next-line no-mixed-operators
    return v => v && v.match(/(^[1-9]\d*$)/) || 'Must be a number greater than zero and should not have spaces'
  }
  return true
}

const phoneNumberFormat = () => {
  const regex = /^\+?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4,9})$/
  // eslint-disable-next-line no-mixed-operators
  return v => v && regex.test(v) || 'Must be a valid phone number'
}

const notRequiredPhoneNumberFormat = (val) => {
  if (val) {
    const regex = /^\+?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4,9})$/
    // eslint-disable-next-line no-mixed-operators
    return v => v && regex.test(v) || 'Must be a valid phone number'
  } else {
    return true
  }
}

const removeDot = () => {
  const regex = /checked.split('.').join("")/
  // eslint-disable-next-line no-mixed-operators
  return v => v && regex.test(v) || 'Must not contain any dot'
}
const FileSizeValidation = (fileSize, requiredSize) => {
  // const sizeInMb = requiredSize / 1024 / 1024
  return (requiredSize >= fileSize)
}

export default {
  FileSizeValidation,
  maxFileSize,
  isValidUrl,
  passwordStrength,
  passwordMatch,
  mustContainAlpha,
  mustContainLower,
  mustContainNumber,
  mustContainSymbol,
  emailFormat,
  username,
  required,
  minLength,
  maxLength,
  notRequiredMaxLength,
  noSpaceAllowed,
  validEmail,
  onlyNumbers,
  phoneNumberFormat,
  removeDot,
  notRequiredPhoneNumberFormat
}
