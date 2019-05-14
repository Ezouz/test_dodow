<template>
    <div>
        <h2>ZIP code form</h2>
        <br>
        <form>
        <label>Ville:  </label>
        <input type="text" name="Ville" v-model='city' placeholder="Ville">
        <br>
        <span class="error">{{cityError}}</span>
        <br>
        <br>
        <label>Code postal:  </label>
        <input type="text" name="zipc" v-model='zipCode' placeholder="XXX-XXXX">
        <br>
        <span class="error">{{zipCodeError}}</span>
        <br>
        <br>
        <button @click.prevent='submit'>Submit</button>
        </form>
    </div>
</template>

<script>
import router from '../router';
import validators from '../common_functions/validators';

export default {
  name: 'ZipCodeForm',
  data() {
    return {
      city: '',
      zipCode: '',
    };
  },
  watch: {
    // ajoute le '-' quand il faut
    zipCode(value, oldie) {
      const str = '';
      if (oldie.charAt(3) === '-' && !value.charAt(4)) {
        this.zipCode = value.slice(0, 2);
      } else if (value.length >= 3 && value.match(/^\d{3}$/)) {
        this.zipCode = str.concat(value.slice(0, 3), '-', value.slice(4));
      }
      if (value.length > 8) {
        this.zipCode = str.concat(oldie.slice(0, 8));
      }
    },
  },
  computed: {
    // verifie la valeur des input
    cityValidator() {
      return (
        validators.cityOk(this.city)
      );
    },
    zipCodeValidator() {
      return (
        validators.zipCodeOk(this.zipCode)
      );
    },
    // affiche le format a suivre
    cityError() {
      if (!this.cityValidator) {
        return ('format: des chiffres et des lettres');
      }
      return '';
    },
    zipCodeError() {
      if (!this.zipCodeValidator) {
        return ('format : 123-4567');
      }
      return '';
    },
  },
  methods: {
    async submit() {
      // si les valeurs sont correctes
      if (this.cityValidator && this.zipCodeValidator) {
        const zipCode = this.zipCode;
        const city = this.city;
        // on envoie au store
        const response = await this.$store.dispatch('action_form', { city, zipCode });
        // et si c'est bon
        if (response === 200) {
          // on nettoie le formulaire et on affiche la page de confirmation
          this.clearForm();
          router.push('/confirm');
        }
      }
    },
    clearForm() {
      this.city = '';
      this.zipCode = '';
    },

  },
};
</script>

<style>
.error {
  color: brown;
  font-size: 0.9em;
}
</style>
