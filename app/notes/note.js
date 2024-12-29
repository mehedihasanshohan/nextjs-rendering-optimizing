const ssgNotes = `
# Static Site Generation (SSG)

## What is SSG?
- Static Site Generation is a rendering method in Next.js that pre-renders pages at build time.
- The generated HTML is static and can be served directly to the browser.

## Key Features
1. **Pre-rendered at Build Time**:
   - Pages are generated as static HTML during the build process.
   - No server-side computation is required at runtime.

2. **High Performance**:
   - Since the pages are pre-generated, they load faster.
   - Ideal for content that doesn't change frequently.

3. **SEO-Friendly**:
   - Pre-rendered pages are easily crawled by search engines.

## Functions Used in SSG
1. **getStaticProps**:
   - Fetches data at build time.
   - Returns props that are used to render the page.

   Example:
   \`\`\`javascript
   export async function getStaticProps() {
       const data = await fetch("https://api.example.com/data");
       return { props: { data } };
   }
   \`\`\`

2. **getStaticPaths**:
   - Used for dynamic routes.
   - Defines paths that should be pre-rendered.

   Example:
   \`\`\`javascript
   export async function getStaticPaths() {
       const paths = [{ params: { id: '1' } }, { params: { id: '2' } }];
       return { paths, fallback: false };
   }
   \`\`\`

## When to Use SSG?
- Blogs, documentation, and marketing websites.
- Content that doesn't need frequent updates.
- Pages with predictable data.

## Benefits of SSG
- Faster load times.
- Reduced server load.
- Better caching capabilities.

---

## Example Use Case
Imagine you have a blog application. With SSG:
1. Blog posts are fetched from an API.
2. HTML is generated for each post at build time.
3. Visitors get a static page when accessing the blog post.

`;

export default ssgNotes;

// Static Site Generation (SSG) in Next.js
// Static Site Generation (SSG) is a rendering method in Next.js that
// allows you to pre-render pages at build time. Unlike Server-Side Rendering (SSR),
// where pages are generated on each request, SSG generates static HTML files that
//  can be served directly to users, ensuring high performance and reduced server overhead.

// How SSG Works
// Pre-Rendering at Build Time:
// During the build process, Next.js generates static HTML files for the pages defined as SSG.

// Fetch Data Before Rendering:
// Using the getStaticProps or getStaticPaths functions,
// data is fetched and used to create HTML files.

// Served as Static Assets:
// The generated HTML, along with CSS and JavaScript,
// is served as static files from a Content Delivery Network (CDN) or web server.

// Key Features
// Improved Performance:
// Since pages are pre-generated and served as static files, they load extremely fast.

// SEO-Friendly:
// The content is pre-rendered, meaning search engine crawlers can easily index it.

// No Server Overhead:
// With no server-side computation during requests, there’s less strain on the server.

// Cacheable:
// Static files can be cached on a CDN, improving load times for users worldwide.

