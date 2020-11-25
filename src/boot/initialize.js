import GenericApp from '../js/GenericApp';

export default async ({ Vue, store }) => {
  const props = {
    adapterName: 'template-vue',
    encryptedFields: ['pass'],
    socket: { port: parseInt(window.location.port, 10) },
    store,
  };

  if (props.socket.port === 8080) {
    props.socket.port = 8081;
  }

  Vue.prototype.$connection = new GenericApp(props);
  Vue.prototype.$onClose = GenericApp.onClose;
};
