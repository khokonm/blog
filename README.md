# WeekUp - Weekly Learning Journal

[![Deploy to cPanel](https://github.com/khokonm/weekup/actions/workflows/cpanel-deploy.yml/badge.svg)](https://github.com/khokonm/weekup/actions/workflows/cpanel-deploy.yml)

WeekUp is a collaborative learning journal where developers share their weekly insights, discoveries, and growth in technology and software development. Built with Next.js and Tailwind CSS, this platform encourages continuous learning and knowledge sharing within the developer community.

## Template Attribution

This project is forked from [Tailwind Nextjs Starter Blog](https://github.com/timlrx/tailwind-nextjs-starter-blog) created by Timothy Lin. The template has been modified to match our specific use case while maintaining the core functionality and design principles of the original project.

## Logo Attribution

Logo source: [Notepad Note SVG Vector](https://www.svgrepo.com/svg/193785/notepad-note)

## Contributing Your Learning Journey

We welcome contributions from all developers who want to share their learning experiences! Here's how you can contribute:

### Adding Your Weekly Posts

1. Fork the repository
2. Create your author profile:
   - Add a new file in `data/authors/your-username.mdx`
   - Follow the structure in `data/authors/default.mdx`
   - Include your bio and social links

3. Create your weekly post:
   - Add a new MDX file in `data/blog/`
   - Use the following frontmatter template:
   ```md
   ---
   title: 'Your Post Title'
   date: 'YYYY-MM-DD'
   week: XX # Week number
   tags: ['tag1', 'tag2']
   draft: false
   summary: 'A brief summary of your post'
   author: 'your-username' # Must match your author profile filename
   ---
   ```

4. Write your content using MDX
   - Share what you learned this week
   - Include code snippets, examples, and explanations
   - Add relevant images in `public/static/images/`
   - Reference external resources

### Content Guidelines

- Focus on learning experiences and insights
- Include practical examples and real-world applications
- Properly format code snippets and technical content
- Credit sources and inspirations
- Keep content professional and constructive

### Submission Process

1. Ensure your content follows the guidelines
2. Test locally using `npm run dev`
3. Create a Pull Request with:
   - Clear title and description
   - Link to preview deployment (if available)
   - Any additional context

## Development Setup

```bash
# Clone the repository
git clone https://github.com/khokonm/weekup.git
cd weekup

# Install dependencies
npm install

# Start development server
npm run dev
```

## Features

- MDX for powerful content creation
- Syntax highlighting with line numbers
- Math equations via KaTeX
- Responsive design with Tailwind CSS
- Dark mode support
- SEO optimized
- RSS feed
- Newsletter integration
- Comments via Giscus

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you find WeekUp helpful, please consider:
- Starring the repository
- Sharing your own learning journey
- Providing feedback and suggestions
- Contributing improvements

## Questions?

If you have questions about contributing or need help getting started:
- Open an issue
- Check existing FAQs in the `/faq` directory
- Contact the maintainers

Let's learn and grow together! 🚀