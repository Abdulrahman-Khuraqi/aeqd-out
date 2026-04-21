// // src/utils/getMarkDownData.js
// import fs from 'fs'
// import path from 'path'
// import matter from 'gray-matter'

// const getMarkDownData = (folder) => {
//   const directory = path.join(process.cwd(), folder) // Use process.cwd() to get the absolute path
//   const files = fs.readdirSync(directory)
//   const markdownPosts = files.filter((file) => file.endsWith('.md'))

//   const postsData = markdownPosts.map((file) => {
//     const filePath = path.join(directory, file)
//     const fileContents = fs.readFileSync(filePath, 'utf8')
//     const { data, content } = matter(fileContents)
//     const slug = file.replace('.md', '')

//     return {
//       slug,
//       data,
//       content,
//     }
//   })

//   return postsData
// }

// export default getMarkDownData
