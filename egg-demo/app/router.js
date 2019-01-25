module.exports = app => {
    const {
        router,
        controller
    } = app;
    router.get('/', controller.main.index);
    router.get('/time', controller.main.time);
    router.get('/list', controller.main.list);
}