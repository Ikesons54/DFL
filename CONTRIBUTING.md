## Contributing to DropLinkFast

Thank you for your interest in contributing to DropLinkFast! This document provides guidelines and instructions for contributing.

### Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct.

### How to Contribute

1. **Fork the Repository**
   - Fork the repository to your GitHub account
   - Clone your fork locally

2. **Set Up Development Environment**
   ```bash
   npm install
   npm run dev:netlify
   ```

3. **Create a Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make Your Changes**
   - Write clean, maintainable code
   - Follow existing code style
   - Add comments where necessary
   - Update documentation if needed

5. **Test Your Changes**
   - Ensure all existing tests pass
   - Add new tests for new features
   - Test manually in different browsers

6. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "feat: add amazing feature"
   ```
   Follow conventional commits format:
   - feat: new feature
   - fix: bug fix
   - docs: documentation changes
   - style: formatting, missing semicolons, etc.
   - refactor: code change that neither fixes a bug nor adds a feature
   - test: adding tests
   - chore: updating build tasks, package manager configs, etc.

7. **Push to Your Fork**
   ```bash
   git push origin feature/your-feature-name
   ```

8. **Submit a Pull Request**
   - Create a PR from your fork to our main branch
   - Describe your changes in detail
   - Link any related issues

### Development Guidelines

- Use TypeScript for all new code
- Follow the existing project structure
- Use Tailwind CSS for styling
- Keep components small and focused
- Write meaningful commit messages
- Update the README if needed

### Need Help?

Feel free to open an issue for:
- Bug reports
- Feature requests
- Questions about the codebase

Thank you for contributing to DropLinkFast!