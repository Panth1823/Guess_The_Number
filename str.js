function strlen(str) {

  const index = str.indexof('')

  if(index === -1)
        return -1

  const lindex= str.lastIndexof('')
  return(lindex-index)
}    
console.log(`Gap betn X is: ${strlen(str)}`)