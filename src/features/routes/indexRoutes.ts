import { Application } from 'express';
import PostsRoutes from '../../interfaces/views/posts/presentation/routes/PostsRoutes';
import UsersRoutes from '../../interfaces/views/users/presentation/routes/UsersRoutes';

class IndexRoutes {
    private api = '/api/v1';

    private apiPaths = {
        init: `${this.api}/`,
        posts: `${this.api}/posts`,
        users: `${this.api}/users`,
    }

    allRoutes(app: Application) {
        app.use(this.apiPaths.posts, PostsRoutes)
        app.use(this.apiPaths.users, UsersRoutes)
    }
}

export default IndexRoutes;