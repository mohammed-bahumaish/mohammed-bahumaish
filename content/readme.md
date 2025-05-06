# Blog Content Documentation

This document explains how blog posts are structured in the `/content/blog` directory and the markdown conventions used throughout the site.

## File Structure

All blog posts are stored as `.mdx` files in the `/content/blog` directory. MDX allows you to use JSX in your markdown content, enabling the use of React components within blog posts.

## Frontmatter

Each blog post begins with YAML frontmatter delimited by triple dashes (`---`). The following frontmatter properties are used:

```yaml
---
title: Your Post Title
publishedAt: YYYY-MM-DD
summary: A brief summary of the post that appears in previews
imageName: image-filename.jpeg
categories: ["category1", "category2"]
draft: true # Optional: if true, post won't be published
---
```

### Frontmatter Fields

| Field         | Description                                                 | Required |
| ------------- | ----------------------------------------------------------- | -------- |
| `title`       | The title of the blog post                                  | Yes      |
| `publishedAt` | Publication date in YYYY-MM-DD format                       | Yes      |
| `summary`     | Brief description used in post previews and meta tags       | Yes      |
| `imageName`   | Filename of the featured image (stored in public directory) | Yes      |
| `categories`  | Array of categories the post belongs to                     | Yes      |
| `draft`       | If set to `true`, the post won't be published               | No       |

## Markdown Formatting

### Headings

Use standard markdown headings. The post title is automatically rendered as an H1, so content should start with H2 (`##`) or lower:

```markdown
## Section Heading

### Subsection Heading
```

### Text Formatting

- **Bold**: `**bold text**`
- _Italic_: `*italicized text*`
- ~~Strikethrough~~: `~~strikethrough text~~`
- `Inline code`: `` `inline code` ``

### Lists

Unordered lists:

```markdown
- Item 1
- Item 2
  - Nested item
```

Ordered lists:

```markdown
1. First item
2. Second item
3. Third item
```

### Code Blocks

Code blocks with syntax highlighting:

````markdown
```jsx
function Example() {
  return <h1>Hello World</h1>;
}
```
````

Supported language tags include: `jsx`, `js`, `html`, `css`, `typescript`, and others.

### Links and Images

- Links: `[link text](URL)`
- Images: `![alt text](URL)`

## Custom Components

The site supports several custom MDX components that can be used in blog posts:

### Ideaquote

Used for highlighting key ideas:

```jsx
<Ideaquote>This is an important idea or concept to highlight.</Ideaquote>
```

### GIF demos

For animated examples:

```markdown
![Description of the demo](https://media.giphy.com/media/hEinaxjPrhQGffoW3z/giphy.gif)
```

## Content Guidelines

1. **Code examples**: Include practical, runnable code examples when possible
2. **Headings**: Use clear, descriptive section headings to improve readability
3. **Brevity**: Keep paragraphs concise and scannable
4. **Formatting**: Use appropriate formatting to highlight important information
5. **Images**: Include relevant images to illustrate concepts

## Blog Post Processing

The blog posts go through several processing steps before being displayed on the site:

### Fetching and Processing

1. MDX files are read from the `/content/blog` directory
2. Frontmatter is parsed and extracted using a regex pattern
3. Content is separated from frontmatter
4. Tweet IDs are extracted if the post includes embedded tweets
5. Each post is processed into an object containing metadata, slug, content, and any tweet IDs

### Filtering and Sorting

Posts are filtered and sorted through the `fetchAndSortBlogPosts()` utility function which:

1. Filters out posts marked as draft (`draft: true`)
2. Sorts posts by publication date (newest first)

### Related Posts

Related blog posts are generated through the `getRelatedBlogPosts()` function which:

1. Finds posts that share categories with the current post
2. Sorts them by the number of matching categories (most relevant first)
3. If not enough related posts are found, it fills the list with other recent posts
4. Returns a specified number of related posts (default: 3)

## Display Components

The blog posts are displayed on the site through several key components:

### Home Page Components

- `FeaturedBlogCard`: Displays featured blog posts on the home page with image, title, and summary
- `BlogPostList`: Lists all blog posts with dates, titles, summaries, and "Read More" links

### Blog Page Components

- `BlogPage`: Renders the individual blog post with metadata, content, and related posts
- `MDXContent`: Renders the MDX content with appropriate styling and component substitutions

The blog post hero image is displayed with a gradient overlay using the specified `imageName` from the frontmatter.

## How to Create a New Post

1. Create a new `.mdx` file in the `/content/blog` directory
2. Add the required frontmatter fields
3. Write your content using markdown and MDX components
4. Place the featured image in the public directory
5. If `draft: true` is not included, the post will be published and displayed on the site

For more detailed information about specific formatting or components, refer to existing blog posts as examples.
