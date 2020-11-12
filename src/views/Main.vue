<template>
  <main class="container">
    <form
      class="input"
      @submit.prevent="submit"
      :class="{ 'red-error': error, 'green-success': success }"
    >
    <h1> {{$t('nav.headline')}} </h1>  
      <div class="whatKind allInputs">
        <label for="whatKind">1) {{$t('main.input1')}} </label>
        <select
          id="whatKind"
          v-model="formData.selectedKindError"
          required
          :class="{ 'red-error': error, 'green-success': success }"
        >
          <option
            :value="option.value"
            v-for="(option, index) in kindOfError"
            :key="index"
          >
            {{ option.name }}
          </option>
        </select>
      </div>
      <div class="howUrgent allInputs">
        <label for="selectedHowUrgent">2) {{$t('main.input2')}}</label>
        <select
          id="selectedHowUrgent"
          v-model="formData.selectedUrgency"
          required
          :class="{ 'red-error': error, 'green-success': success }"
        >
          <option
            :value="option.value"
            v-for="(option, index) in urgency"
            :key="index"
          >
            {{ option.name }}
          </option>
        </select>
      </div>
      <div class="subject allInputs">
        <label for="subject">3) {{$t('main.input3')}} </label>
        <textarea
          class="textArea"
          rows="3"
          cols="30"
          v-model="formData.subject"
          required
          :class="{ 'red-error': error, 'green-success': success }"
        >
        </textarea>
      </div>
      <div class="describeError allInputs">
        <label for="describeError">4) {{$t('main.input4')}} </label>
        <textarea
          class="textArea"
          rows="3"
          cols="30"
          v-model="formData.describe"
          required
          :class="{ 'red-error': error, 'green-success': success }"
        >
        </textarea>
      </div>
      <div class="URL allInputs">
        <label for="URL">5) {{$t('main.input5')}} </label>
        <input
          class="URL"
          v-model="formData.url"
          required
          :class="{ 'red-error': error, 'green-success': success }"
        />
      </div>
      <div class="contact allInputs">
        <label for="contact">6) {{$t('main.input6')}} </label>
        <input
          type="text"
          id="email"
          class="contacs"
          placeholder="email"
          v-model="formData.email"
          required
          :class="{ 'red-error': error, 'green-success': success }"
        />
        <input
          type="text"
          id="tel"
          class="contacs"
          placeholder="tel"
          v-model="formData.tel"
          required
          :class="{ 'red-error': error, 'green-success': success }"
        />
      </div>
      <div class="allInputs">
        <input
          class="btn"
          type="submit"
          :class="{ 'red-error': error, 'green-success': success }"
        />
      </div>
    </form>
    <div class="postSucceed" v-if="success">
      <h3 class="inline-block">Your Post was successfully sended</h3>
    </div>
    <div class="postError" v-if="error">
      <h3 class="inline-block">Your Post wasnt sended. ERROR</h3>
    </div>
    <div class="loading" v-if="loading">
      <h3 class="inline-block">Loading ...</h3>
    </div>
  </main>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      kindOfError: [
        { value: "classicError", name: "Classic Error" },
        { value: "warning", name: "Warning" },
        { value: "changeRequest", name: "ChangeRequest" },
      ],
      urgency: [
        { value: "1", name: "One" },
        { value: "2", name: "Two" },
        { value: "3", name: "Three" },
      ],
      formData: {
        selectedKindError: "classicError",
        selectedUrgency: "1",
        subject: "",
        describe: "",
        url: "",
        email: this.$route.query.client || "",
        tel: "",
      },
      database: [],
      error: false,
      success: false,
      loading: false,
    };
  },
  methods: {
    submit() {
      this.sendData();
      this.emptyInput();
    },
    emptyInput() {
      this.formData.subject = "";
      this.formData.describe = "";
      this.formData.url = "";
      this.formData.email = "";
      this.formData.tel = "";
      this.formData.selectedKindError = "classicError";
      this.formData.selectedUrgency = "1";
    },
    async sendData() {
      const requestOptions = {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        body: JSON.stringify(this.formData), // body data type must match "Content-Type" header
        
      };
      this.loading = true;
      const response = await fetch("https://hooks.zapier.com/hooks/catch/8802913/oqr7jt3", requestOptions)
      const responseJson =  await response.json();
      this.database = responseJson;
      
      if(!response.ok){
        this.loading = false;
        this.error = true;
        setTimeout(() => (this.error = false), 1000);
      }
      else {
        this.loading = false;
        this.success = true;
          setTimeout(() => (this.success = false), 1000);
      }
    }
  },
};
</script>

<style scoped>
.container {
  height: 100%;

  box-shadow: 10px #888888;
}
.input {
  margin: auto;
}

.allInputs {
  margin: 0 0 0.5rem 0;
  display: flex;
  flex-direction: column;
}
.allInputs input {
  margin: 0 0 0.25rem 0;
}
input,
textarea,
select {
  padding: 0.4rem;
  border: none;
  border-radius: 3px;
  outline: none;
}
label {
  font-size: 1.1rem;
  font-weight: 600;
}
#input-btn {
  font-weight: 600;
}
.btn {
  cursor: pointer;
  font-weight: 600;
}
.btn:hover {
  background: lightblue;
}
.red-error {
  background: darkred;
}
.green-success {
  background: green;
}
.postSucceed {
  height: 200px;
  width: 300px;
  position: absolute;
  background: lightgreen;
  border-radius: 10px;
  display: flex;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.postError {
  height: 200px;
  width: 300px;
  position: absolute;
  background: rgb(218, 4, 58);
  border-radius: 10px;
  display: flex;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.loading {
  height: 200px;
  width: 300px;
  position: absolute;
  background: lightgray;
  border-radius: 10px;
  display: flex;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.inline-block {
  display: inline-block;
  margin: auto;
}
</style>
