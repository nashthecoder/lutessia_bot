// useMobile hook stub
const useMobile = () => {
  // Example: return true if window width < 768px
  if (typeof window !== 'undefined') {
    return window.innerWidth < 768;
  }
  return false;
};

export default useMobile;
