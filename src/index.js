module.exports = function check(str, bracketsConfig) {
  if ( str.length % 2 !== 0 ) return false
  for ( let i = 0; i < bracketsConfig.length; i++ ) {
    let double = bracketsConfig[i].join('')
    if ( str.includes(double) ) {
      str = str.replace(double, '')
      i = -1
    }
  }
  return str.length === 0
}