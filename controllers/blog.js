import express from 'express';
import mongoose from 'mongoose';
import Blog from '../models/blog.js';

const { ObjectId } = mongoose.Types

const router = express.Router();

export const findAllBlogs = async (req, res) => {
    try {
      const response = await Blog.find().sort({ createdAt: -1 });
      res.render('index', { blogs: response, title: 'All blogs' });
    } catch(error) {
      console.log(error);
    }
}

export const findBlog = async (req, res) => {
    const { id } = req.params
    try {
      const response = await Blog.findById(id);
      res.render('details', { blog: response, title: 'Blog Details' });
    } catch (error) {
      res.render('404', { title: 'Blog not found' });
    }
}

export const getCreateBlogPage = (req, res) => res.render('create', { title: 'Create a new blog' });

export const createBlog = async (req, res) => {
    const blog = new Blog(req.body);
    try {
      await blog.save()
      res.redirect('/blogs');
    } catch (error) {
      console.log(error);
    }
}

export const editBlog = async (req, res) => {
  const { id } = req.params;
  try {
    await Blog.findOneAndUpdate({ _id: new ObjectId( id )  }, req.body)
    res.redirect('/blogs');
  } catch (error) {
    console.log(error)
  }
}

export const deleteBlog = async (req, res) => {
  const { id } = req.params
    try {
      await Blog.findByIdAndDelete(id)
      res.redirect('/blogs');
    } catch (error) {
      console.log(err);
    }
}

export default router;