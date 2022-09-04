import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

const url = process.env.URL

const fetchPosts = () => axios.get(url)


module.exports = { fetchPosts }