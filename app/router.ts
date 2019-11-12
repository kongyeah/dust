
import { Application } from 'egg';

export default (application: Application) => {
  const { router, controller } = application;
  router.post('/dust/api/article/list', controller.index.list);
  router.post('/dust/api/article/add', controller.index.add);
  router.post('/dust/api/article/del', controller.index.del);
  router.get('/dust/api/article/:id', controller.index.detail);
  router.get('/*', controller.index.home);
};