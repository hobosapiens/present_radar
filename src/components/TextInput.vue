<template>
  <input v-bind="$attrs" :value="internalValue" @input="updateValue($event.target.value)" />
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  computed: {
    internalValue: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit('input', newValue);
      },
    },
  },
  methods: {
    updateValue(newValue) {
      this.internalValue = newValue;
    },
  },
};
</script>
