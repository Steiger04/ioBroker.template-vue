import { mapState } from 'vuex';

const fieldsTemplate = {
  computed: {
    ...mapState('template', [
      'native',
    ]),
  },
};

export { fieldsTemplate };
