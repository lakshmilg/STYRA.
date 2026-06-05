export const showToast = (message, type = 'success') => {
  const event = new CustomEvent('styra-toast', {
    detail: { message, type }
  })
  window.dispatchEvent(event)
}
