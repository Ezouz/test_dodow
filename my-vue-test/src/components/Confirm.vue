<template>
    <div>
      <h2>Page de confirmation</h2>
      <br>
      <br>
      Ville: {{city}}
      <br>
      <br>
      Code Postal: {{zipCode}}
    </div>
</template>

<script>
export default {
  name: 'Confirm',
  data() {
    return {
      city: '',
      zipCode: '',
    };
  },
  mounted() {
    // affiche les valeurs du formulaire enregistrees dans le store
    // apres validation
    this.city = this.$store.state.city;
    this.zipCode = this.$store.state.zipCode;
  },
};
</script>
