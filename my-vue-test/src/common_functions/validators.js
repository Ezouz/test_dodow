const cityRegex = /^[a-zA-Z0-9]{1,}$/;
const zipCodeRegex = /^\d{3}-\d{4}$/;

const validators = {
  cityOk: city => (
    typeof city === 'string' &&
    city !== '' &&
    city.match(cityRegex)
  ),
  zipCodeOk: zipCode => (
    typeof zipCode === 'string' &&
    zipCode !== '' &&
    zipCode.match(zipCodeRegex)
  ),
};

export default validators;
