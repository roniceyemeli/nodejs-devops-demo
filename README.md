# Node.js DevOps Demo

A comprehensive Node.js application demonstrating modern DevOps practices, CI/CD pipelines, and development best practices.

## Features

- **Express.js API** - RESTful endpoints with health checks
- **Jest Testing** - Comprehensive test suite with coverage reporting
- **ESLint & Prettier** - Code quality and formatting tools
- **Husky Hooks** - Git pre-commit and commit message validation
- **GitHub Actions CI/CD** - Automated testing and linting pipeline
- **Conventional Commits** - Structured commit message format

## Project Structure

```
nodejs-devops-demo/
├── src/
│   └── index.js              # Main application entry point
├── tests/
│   └── health.test.js        # Test suite for health endpoints
├── .github/
│   └── workflows/
│       └── ci.yml            # GitHub Actions CI pipeline
├── .husky/
│   ├── pre-commit            # Pre-commit hook (lint & format)
│   └── commit-msg            # Commit message validation hook
├── .eslintrc.json            # ESLint configuration
├── .prettierrc                # Prettier formatting configuration
├── .commitlintrc              # Commitlint configuration
├── package.json              # Project dependencies and scripts
├── package-lock.json         # Locked dependency versions
└── README.md                 # This file
```

## Getting Started

### Prerequisites

- Node.js 18.x or 20.x
- npm 9.x or higher

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/nodejs-devops-demo.git
cd nodejs-devops-demo
```

2. Install dependencies:

```bash
npm install
```

3. Setup Husky hooks:

```bash
npm run prepare
```

### Running the Application

**Development mode** (with auto-restart on file changes):

```bash
npm run dev
```

**Production mode**:

```bash
npm start
```

The server will start on `http://localhost:3000` (or the port specified in the `PORT` environment variable).

## API Endpoints

### Health Check

```
GET /health
```

Returns the health status of the application:

```json
{
  "status": "ok",
  "timestamp": "2024-01-11T10:30:45.123Z",
  "uptime": 125.456
}
```

### Root Endpoint

```
GET /
```

Returns welcome message:

```json
{
  "message": "Welcome to Node.js DevOps Demo",
  "version": "1.0.0"
}
```

## Development Commands

### Testing

Run all tests:

```bash
npm test
```

Run tests in watch mode:

```bash
npm run test:watch
```

### Code Quality

Check code formatting:

```bash
npm run format:check
```

Format all files:

```bash
npm run format
```

Run ESLint:

```bash
npm run lint
```

Fix linting issues automatically:

```bash
npm run lint:fix
```

## Git Workflow

This project enforces code quality through Git hooks:

### Pre-commit Hook

Before each commit, the following automatically runs:

- ESLint (with auto-fix enabled)
- Prettier (code formatting)

### Commit Message Validation

Commits must follow [Conventional Commits](https://www.conventionalcommits.org/) format:

```
<type>(<scope>): <subject>
```

**Valid types:**

- `feat` - A new feature
- `fix` - A bug fix
- `docs` - Documentation changes
- `style` - Code style changes (formatting)
- `refactor` - Code refactoring
- `test` - Adding or updating tests
- `chore` - Build process, dependencies
- `ci` - CI/CD configuration
- `perf` - Performance improvements

**Examples:**

```bash
git commit -m "feat(api): add user authentication endpoint"
git commit -m "fix(health): correct uptime calculation"
git commit -m "docs: update API documentation"
```

## CI/CD Pipeline

The GitHub Actions workflow runs on every push and pull request:

1. **Checkout** - Fetch the code
2. **Setup** - Configure Node.js environment
3. **Install** - Install dependencies with cache
4. **Lint** - Run ESLint
5. **Format Check** - Verify Prettier formatting
6. **Test** - Run Jest test suite
7. **Coverage** - Upload coverage reports to Codecov
8. **Security** - Run npm audit for vulnerabilities

Supported Node versions: 18.x, 20.x

## Environment Variables

```bash
PORT=3000  # Server port (default: 3000)
```

## Dependencies

### Production

- `express` - Web framework for Node.js

### Development

- `jest` - Testing framework
- `supertest` - HTTP assertion library
- `eslint` - Linting tool
- `prettier` - Code formatter
- `husky` - Git hooks manager
- `nodemon` - Auto-restart development server
- `@commitlint/cli` - Commit message linter
- `@commitlint/config-conventional` - Commitlint preset

## Best Practices Demonstrated

✅ **Modular Code** - Clean separation of concerns
✅ **Comprehensive Testing** - High test coverage with meaningful assertions
✅ **Code Consistency** - ESLint and Prettier enforcement
✅ **Git Hygiene** - Conventional commits and pre-commit hooks
✅ **CI/CD Automation** - GitHub Actions pipeline
✅ **Error Handling** - Centralized error middleware
✅ **Health Checks** - Built-in health endpoint for monitoring
✅ **Security** - npm audit integration in CI pipeline

## Troubleshooting

### Tests failing after installation

Make sure dependencies are properly installed:

```bash
rm -rf node_modules package-lock.json
npm install
```

### Pre-commit hooks not running

Reinstall Husky:

```bash
npm run prepare
```

### Port already in use

Specify a different port:

```bash
PORT=3001 npm start
```

## Contributing

1. Create a feature branch (`git checkout -b feat/amazing-feature`)
2. Make your changes following code standards
3. Run tests (`npm test`)
4. Commit with conventional message (`git commit -m "feat: add amazing feature"`)
5. Push to the branch (`git push origin feat/amazing-feature`)
6. Open a Pull Request

## License

ISC

## Support

For issues and questions, please open an issue on the GitHub repository.
