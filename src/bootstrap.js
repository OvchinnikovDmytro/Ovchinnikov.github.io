import { createApp } from 'vue';
import { BootstrapVueNext, BToastPlugin } from 'bootstrap-vue-next';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';

const app = createApp({});
app.use(BootstrapVueNext);
app.use(BToastPlugin);

export default app;
