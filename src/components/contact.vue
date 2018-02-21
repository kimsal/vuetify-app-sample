<template>
  <v-container fluid>
    <v-flex xs6>
      <h3>
      Contact Form
      </h3>
      <v-form v-model="valid">
        <v-text-field
          label="Name"
          v-model="name"
          :rules="nameRules"
          :counter="10"
          required
        ></v-text-field>
        <v-text-field
          label="E-mail"
          v-model="email"
          :rules="emailRules"
          required
        ></v-text-field>
        <v-select
          :items="genders"
          v-model="gender"
          label="Select"
          single-line
          bottom
        ></v-select>
      </v-form>
     </v-flex xs6>
  </v-container>
</template>

<script type="text/javascript">
  export default{
    data(){
      return {
        gender:"",
        genders: [
          {text: "Male"},{text: "Female"}
        ],
      }
    }
  }
</script>