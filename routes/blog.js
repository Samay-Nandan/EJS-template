import express from 'express';
import { 
         findAllBlogs, 
         findBlog,
         getCreateBlogPage,
         createBlog,
         editBlog, 
         deleteBlog 
} from '../controllers/blog.js';

const router = express.Router();

router.get('/create', getCreateBlogPage);
router.get('/', findAllBlogs);
router.post('/', createBlog);
router.post('/edit/:id', editBlog);
router.get('/:id', findBlog);
router.delete('/:id', deleteBlog);

export default router;