<template>
    <q-page class="flex flex-center">
        <div class="column items-center q-gutter-md">
            <div class="col">
                <q-table
                        title="Adressen"
                        rows-per-page-label="Adressen je Seite"
                        :data="adressen"
                        :columns="columns"
                        :filter="filter"
                        row-key="name"
                >
                    <template v-slot:top-right>
                        <q-input
                                borderless
                                dense
                                debounce="300"
                                v-model="filter"
                                placeholder="Suchen"
                        >
                            <template v-slot:append>
                                <q-icon name="search"/>
                            </template>
                        </q-input>
                    </template>

                    <template v-slot:body="props">
                        <q-tr :props="props">
                            <q-td
                                    key="plz"
                                    :props="props"
                            >
                                {{ props.row.plz }}
                                <q-popup-edit
                                        v-model="props.row.plz"
                                        title="Postleitzahl"
                                >
                                    <q-input
                                            type="number"
                                            v-model="props.row.plz"
                                            dense
                                            autofocus
                                    />
                                </q-popup-edit>
                            </q-td>
                            <q-td
                                    key="stadt"
                                    :props="props"
                            >
                                <div class="text-pre-wrap">{{ props.row.stadt }}</div>
                                <q-popup-edit
                                        v-model="props.row.stadt"
                                        title="Stadt"
                                >
                                    <q-input
                                            type="text"
                                            v-model="props.row.stadt"
                                            dense
                                            autofocus
                                    />
                                </q-popup-edit>
                            </q-td>
                            <q-td
                                    key="strasse"
                                    :props="props"
                            >
                                <div class="text-pre-wrap">{{ props.row.strasse }}</div>
                                <q-popup-edit
                                        v-model="props.row.strasse"
                                        title="Straße"
                                >
                                    <q-input
                                            type="text"
                                            v-model="props.row.strasse"
                                            dense
                                            autofocus
                                    />
                                </q-popup-edit>
                            </q-td>
                            <q-td
                                    key="hausnummer"
                                    :props="props"
                            >
                                {{ props.row.hausnummer }}
                                <q-popup-edit
                                        v-model="props.row.hausnummer"
                                        title="Hausnummer"
                                >
                                    <q-input
                                            type="number"
                                            v-model="props.row.hausnummer"
                                            dense
                                            autofocus
                                    />
                                </q-popup-edit>
                            </q-td>
                        </q-tr>
                    </template>
                </q-table>
            </div>
            <div class="col">
                <q-btn
                        to='/'
                        color="primary"
                        label="Home"
                />
            </div>
        </div>
    </q-page>
</template>

<script>
import { mapMultiRowFields } from 'vuex-map-fields';
import { fieldsTemplate } from '../mixin/fieldsTemplate';

export default {
  name: 'Adressen',
  mixins: [fieldsTemplate],
  data() {
    return {
      filter: '',
      columns: [
        {
          name: 'plz',
          align: 'left',
          label: 'Postleitzahl',
          field: 'plz',
          sortable: true,
        },
        {
          name: 'stadt',
          align: 'left',
          label: 'Stadt',
          field: 'stadt',
          sortable: true,
        },
        {
          name: 'strasse',
          align: 'left',
          label: 'Straße',
          field: 'strasse',
          sortable: true,
        },
        {
          name: 'hausnummer',
          align: 'left',
          label: 'Hausnummer',
          field: 'hausnummer',
          sortable: true,
        },
      ],
    };
  },
  computed: {
    ...mapMultiRowFields('template', { adressen: 'native.adressen' }),
  },
};
</script>
