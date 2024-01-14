import Home from '~/pages/Home';
import Following from '~/pages/Following';

// Public Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
];

// Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
