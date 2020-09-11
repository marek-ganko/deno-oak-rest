import router from './resources/network-elements/network-elements.route.ts';

router.get('/', (context) => {
  context.response.body = 'Hello world!';
});

export default router;
