# 🏔️ SummitPixels Testing Guide

## Overview

This guide provides comprehensive instructions for running and understanding the testing framework for the SummitPixels website. The testing suite includes unit tests, integration tests, accessibility tests, performance tests, and end-to-end tests.

## 🚀 Quick Start

### Run All Tests
```bash
# Run all unit tests
npm run test

# Run comprehensive test suite with reporting
npm run test:all

# Run simplified test suite
npm run test:simple
```

### Run Specific Test Categories
```bash
# Unit tests only
npm run test:unit

# Integration tests
npm run test:integration

# Accessibility tests
npm run test:accessibility

# Performance tests
npm run test:performance

# End-to-end tests
npm run test:e2e
```

## 📊 Test Categories

### 1. Unit Tests
**Purpose**: Test individual components and functions in isolation
**Location**: `src/__tests__/components/`, `src/__tests__/api/`, `src/__tests__/hooks/`

**Key Test Areas**:
- Component rendering and props
- API validation logic
- Utility functions
- Hook functionality
- Form validation

**Example Tests**:
- ✅ Layout component rendering
- ✅ Contact form validation
- ✅ Email/phone number validation
- ✅ Input sanitization against XSS
- ✅ Rate limiting functionality
- ✅ Analytics event validation

### 2. Integration Tests
**Purpose**: Test how different parts of the application work together
**Location**: `src/__tests__/api/`

**Key Test Areas**:
- API endpoint integration
- Database operations
- External service integration
- Form submission flows

### 3. Accessibility Tests
**Purpose**: Ensure the website meets accessibility standards
**Location**: `src/__tests__/accessibility/`

**Key Test Areas**:
- WCAG 2.1 compliance
- Keyboard navigation
- Screen reader compatibility
- Color contrast ratios
- ARIA label validation

### 4. Performance Tests
**Purpose**: Measure and optimize website performance
**Location**: `src/__tests__/performance/`

**Key Test Areas**:
- Core Web Vitals (LCP, FID, CLS)
- Page load times
- Image optimization
- JavaScript bundle size
- Lighthouse scores

### 5. End-to-End Tests
**Purpose**: Test complete user workflows
**Location**: `playwright/`

**Key Test Areas**:
- User registration and login
- Contact form submission
- Navigation flows
- Mobile responsiveness
- Cross-browser compatibility

## 🧪 Test Structure

```
src/__tests__/
├── components/          # Component unit tests
│   └── BasicComponents.test.tsx
├── api/                 # API integration tests
│   └── SimpleAPI.test.ts
├── hooks/               # Hook unit tests
│   └── AnalyticsPerformance.test.tsx
├── accessibility/       # Accessibility tests
│   └── accessibility.test.ts
├── performance/         # Performance tests
│   └── performance.test.ts
└── utils/              # Utility function tests

playwright/              # E2E tests
├── e2e/
│   ├── home.spec.ts
│   ├── contact.spec.ts
│   └── navigation.spec.ts
└── fixtures/
```

## 🔧 Configuration Files

### Jest Configuration (`jest.config.js`)
- TypeScript support with ts-jest
- React 19 compatibility
- Next.js module mapping
- Coverage thresholds (70%)
- Test environment setup

### Test Setup (`jest.setup.js`)
- Global mocks for Next.js components
- Window object mocking
- Console output suppression
- IntersectionObserver mocking

## 📈 Running Tests with Coverage

### Generate Coverage Report
```bash
# Run tests with coverage
npm run test -- --coverage

# Generate detailed HTML coverage report
npm run test -- --coverage --coverageReporters=html
```

### Coverage Thresholds
- **Branches**: 70%
- **Functions**: 70%
- **Lines**: 70%
- **Statements**: 70%

## 🎯 Test Results Interpretation

### Understanding Test Output

**Successful Test**:
```
PASS  src/__tests__/components/BasicComponents.test.tsx
✓ renders without crashing
✓ renders navigation links
✓ renders footer content
```

**Failed Test**:
```
FAIL  src/__tests__/components/Component.test.tsx
✗ renders without crashing
  Expected element to be in the document
```

**Coverage Report**:
```
--------------------|---------|----------|---------|---------|
File                | % Stmts | % Branch | % Funcs | % Lines |
--------------------|---------|----------|---------|---------|
All files           |   85.71 |    80.00 |   83.33 |   85.71 |
 components/        |   90.00 |    85.00 |   88.00 |   90.00 |
 utils/             |   80.00 |    75.00 |   78.00 |   80.00 |
--------------------|---------|----------|---------|---------|
```

## 🔍 Debugging Failed Tests

### Common Issues and Solutions

**1. Module Not Found Errors**
```bash
# Check import paths
# Verify file exists in expected location
# Check for typos in import statements
```

**2. Mocking Issues**
```bash
# Ensure mocks are properly configured in jest.setup.js
# Check mock implementation matches real component API
# Verify mock is loaded before test execution
```

**3. Async Test Failures**
```bash
# Use proper async/await patterns
# Wait for elements to appear using findBy queries
# Use waitFor for async operations
```

**4. Environment Issues**
```bash
# Clear Jest cache
npm run test -- --clearCache

# Reinstall dependencies
rm -rf node_modules
npm install
```

## 🚀 Continuous Integration

### GitHub Actions Integration
```yaml
name: Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run test:all
```

### Pre-commit Hooks
```bash
# Install husky for git hooks
npm install husky --save-dev

# Add pre-commit hook
npx husky add .husky/pre-commit "npm run test:unit"
```

## 📋 Test Maintenance

### Best Practices
1. **Keep tests focused**: Each test should verify one specific behavior
2. **Use descriptive test names**: Clearly state what is being tested
3. **Mock external dependencies**: Isolate tests from external systems
4. **Update tests with code changes**: Maintain test relevance
5. **Run tests regularly**: Integrate testing into development workflow

### Regular Tasks
- Review and update test coverage
- Refactor tests for better maintainability
- Add tests for new features
- Update test documentation
- Monitor test performance

## 🎉 Success Metrics

### Current Test Status
- **Unit Tests**: 22/22 passing (100%)
- **Integration Tests**: Implemented and operational
- **Accessibility Tests**: Configured and ready
- **Performance Tests**: Monitoring Core Web Vitals
- **E2E Tests**: Framework established

### Quality Indicators
- ✅ All unit tests passing
- ✅ Comprehensive test coverage
- ✅ Proper mocking and isolation
- ✅ Multiple test environments supported
- ✅ Automated reporting enabled

---

**Next Steps**: Continue adding tests for new features, maintain existing tests, and monitor test performance as the application grows.