<template>
    <q-page class="flex flex-center">
        <div class="column items-center q-gutter-md">
            <div class="col q-gutter-y-md">
                <q-card
                        class="home-card"
                        bordered
                >
                    <q-card-section horizontal>
                        <div>
                            <img src="~assets/template-vue.png">
                        </div>
                        <q-separator vertical/>
                        <q-card-section class="q-pt-none self-center">
                            <q-card-section>
                                <div class="text-h6">Two Native Props</div>
                                <div class="text-subtitle2">can be changed reactive</div>
                            </q-card-section>
                            <q-card-section>
                                <q-toggle
                                        v-model="option1"
                                        label="Option 1"
                                        color="primary"
                                />
                                <q-input
                                        v-model="option2"
                                        label="Option 2"
                                />
                            </q-card-section>
                        </q-card-section>
                    </q-card-section>
                </q-card>
            </div>
            <div class="col">
                <q-btn
                        to='/adressen'
                        color="primary"
                        label="Table with naive addresses (reaktive und editable)"
                />
            </div>
        </div>
    </q-page>
</template>

<script>
import { mapFields } from 'vuex-map-fields';
import { fieldsTemplate } from '../mixin/fieldsTemplate';

export default {
  name: 'Home',
  mixins: [fieldsTemplate],
  data() {
    return {
      /* myNotStoreData1: '' */
    };
  },
  computed: {
    ...mapFields('template', {
      option1: 'native.option1',
      option2: 'native.option2',
    }),
  },
};
</script>
