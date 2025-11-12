#!/usr/bin/env node

const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
}

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`)
}

function runCommand(command, description) {
  log(`\n🚀 ${description}...`, 'cyan')
  try {
    const output = execSync(command, { stdio: 'pipe', encoding: 'utf8' })
    log(`✅ ${description} completed successfully`, 'green')
    return { success: true, output }
  } catch (error) {
    log(`❌ ${description} failed`, 'red')
    if (error.stdout) log(error.stdout, 'red')
    if (error.stderr) log(error.stderr, 'red')
    return { success: false, error: error.message }
  }
}

function generateReport(results) {
  const reportPath = path.join(process.cwd(), 'test-report.html')
  const timestamp = new Date().toISOString()
  
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SummitPixels Test Report</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; padding: 20px; background: #f5f5f5; }
        .container { max-width: 1200px; margin: 0 auto; background: white; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        .header { background: #1a1a1a; color: white; padding: 30px; border-radius: 8px 8px 0 0; }
        .header h1 { margin: 0; font-size: 2.5rem; }
        .header p { margin: 10px 0 0; opacity: 0.8; }
        .content { padding: 30px; }
        .test-section { margin-bottom: 30px; }
        .test-section h2 { color: #333; margin-bottom: 15px; font-size: 1.5rem; }
        .test-result { background: #f8f9fa; border-radius: 6px; padding: 15px; margin-bottom: 10px; border-left: 4px solid #28a745; }
        .test-result.failed { border-left-color: #dc3545; background: #f8d7da; }
        .test-result.running { border-left-color: #ffc107; background: #fff3cd; }
        .test-result h3 { margin: 0 0 10px 0; color: #333; }
        .test-result p { margin: 5px 0; color: #666; }
        .metrics { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-top: 20px; }
        .metric { background: #e3f2fd; padding: 15px; border-radius: 6px; text-align: center; }
        .metric h4 { margin: 0 0 5px 0; color: #1976d2; }
        .metric .value { font-size: 1.5rem; font-weight: bold; color: #1565c0; }
        .summary { background: #e8f5e8; padding: 20px; border-radius: 6px; margin-bottom: 30px; }
        .summary h2 { margin: 0 0 15px 0; color: #2e7d32; }
        .summary-stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px; }
        .stat { text-align: center; }
        .stat .number { font-size: 2rem; font-weight: bold; color: #2e7d32; }
        .stat .label { color: #666; font-size: 0.9rem; }
        .footer { text-align: center; padding: 20px; color: #666; font-size: 0.9rem; }
        .timestamp { color: #999; font-size: 0.8rem; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🏔️ SummitPixels Test Report</h1>
            <p>Comprehensive testing results for performance, accessibility, and functionality</p>
            <p class="timestamp">Generated: ${timestamp}</p>
        </div>
        <div class="content">
            <div class="summary">
                <h2>📊 Test Summary</h2>
                <div class="summary-stats">
                    <div class="stat">
                        <div class="number">${results.totalTests}</div>
                        <div class="label">Total Tests</div>
                    </div>
                    <div class="stat">
                        <div class="number">${results.passed}</div>
                        <div class="label">Passed</div>
                    </div>
                    <div class="stat">
                        <div class="number">${results.failed}</div>
                        <div class="label">Failed</div>
                    </div>
                    <div class="stat">
                        <div class="number">${results.skipped}</div>
                        <div class="label">Skipped</div>
                    </div>
                </div>
            </div>

            <div class="test-section">
                <h2>🧪 Unit Tests</h2>
                ${results.unitTests.map(test => `
                    <div class="test-result ${test.status}">
                        <h3>${test.name}</h3>
                        <p>${test.description}</p>
                        <p><strong>Status:</strong> ${test.status}</p>
                        ${test.error ? `<p><strong>Error:</strong> ${test.error}</p>` : ''}
                    </div>
                `).join('')}
            </div>

            <div class="test-section">
                <h2>🔗 Integration Tests</h2>
                ${results.integrationTests.map(test => `
                    <div class="test-result ${test.status}">
                        <h3>${test.name}</h3>
                        <p>${test.description}</p>
                        <p><strong>Status:</strong> ${test.status}</p>
                        ${test.error ? `<p><strong>Error:</strong> ${test.error}</p>` : ''}
                    </div>
                `).join('')}
            </div>

            <div class="test-section">
                <h2>🎭 End-to-End Tests</h2>
                ${results.e2eTests.map(test => `
                    <div class="test-result ${test.status}">
                        <h3>${test.name}</h3>
                        <p>${test.description}</p>
                        <p><strong>Status:</strong> ${test.status}</p>
                        ${test.error ? `<p><strong>Error:</strong> ${test.error}</p>` : ''}
                    </div>
                `).join('')}
            </div>

            <div class="test-section">
                <h2>♿ Accessibility Tests</h2>
                ${results.accessibilityTests.map(test => `
                    <div class="test-result ${test.status}">
                        <h3>${test.name}</h3>
                        <p>${test.description}</p>
                        <p><strong>Status:</strong> ${test.status}</p>
                        ${test.error ? `<p><strong>Error:</strong> ${test.error}</p>` : ''}
                    </div>
                `).join('')}
            </div>

            <div class="test-section">
                <h2>⚡ Performance Tests</h2>
                ${results.performanceTests.map(test => `
                    <div class="test-result ${test.status}">
                        <h3>${test.name}</h3>
                        <p>${test.description}</p>
                        <p><strong>Status:</strong> ${test.status}</p>
                        ${test.error ? `<p><strong>Error:</strong> ${test.error}</p>` : ''}
                    </div>
                `).join('')}
            </div>

            ${results.metrics.length > 0 ? `
            <div class="test-section">
                <h2>📈 Performance Metrics</h2>
                <div class="metrics">
                    ${results.metrics.map(metric => `
                        <div class="metric">
                            <h4>${metric.name}</h4>
                            <div class="value">${metric.value}</div>
                            <div class="unit">${metric.unit}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
            ` : ''}
        </div>
        <div class="footer">
            <p>Generated by SummitPixels Test Suite</p>
            <p class="timestamp">${timestamp}</p>
        </div>
    </div>
</body>
</html>
  `
  
  fs.writeFileSync(reportPath, html)
  log(`📄 Test report generated: ${reportPath}`, 'green')
  return reportPath
}

async function runAllTests() {
  log('🏔️ Starting SummitPixels Comprehensive Test Suite', 'bright')
  log('===========================================', 'bright')
  
  const results = {
    totalTests: 0,
    passed: 0,
    failed: 0,
    skipped: 0,
    unitTests: [],
    integrationTests: [],
    e2eTests: [],
    accessibilityTests: [],
    performanceTests: [],
    metrics: []
  }
  
  // Check if development server is running
  log('🔍 Checking if development server is running...', 'cyan')
  try {
    execSync('curl -s http://localhost:3000 > /dev/null', { stdio: 'pipe' })
    log('✅ Development server is running', 'green')
  } catch {
    log('⚠️  Development server not detected. Starting it now...', 'yellow')
    const serverResult = runCommand('npm run dev &', 'Starting development server')
    if (!serverResult.success) {
      log('❌ Failed to start development server', 'red')
      return
    }
    // Wait for server to start
    await new Promise(resolve => setTimeout(resolve, 5000))
  }
  
  // Run unit tests
  log('\n📦 Running Unit Tests...', 'bright')
  const unitResult = runCommand('npm run test -- --coverage --watchAll=false', 'Unit Tests')
  results.unitTests.push({
    name: 'Component Unit Tests',
    description: 'Testing React components and hooks',
    status: unitResult.success ? 'passed' : 'failed',
    error: unitResult.success ? null : unitResult.error
  })
  
  // Run integration tests
  log('\n🔗 Running Integration Tests...', 'bright')
  const integrationResult = runCommand('npm run test -- --testPathPattern="api" --coverage=false --watchAll=false', 'Integration Tests')
  results.integrationTests.push({
    name: 'API Integration Tests',
    description: 'Testing API routes and database operations',
    status: integrationResult.success ? 'passed' : 'failed',
    error: integrationResult.success ? null : integrationResult.error
  })
  
  // Run end-to-end tests
  log('\n🎭 Running End-to-End Tests...', 'bright')
  const e2eResult = runCommand('npm run test:e2e', 'End-to-End Tests')
  results.e2eTests.push({
    name: 'Critical User Flows',
    description: 'Testing complete user journeys',
    status: e2eResult.success ? 'passed' : 'failed',
    error: e2eResult.success ? null : e2eResult.error
  })
  
  // Run accessibility tests
  log('\n♿ Running Accessibility Tests...', 'bright')
  const accessibilityResult = runCommand('npm run test:accessibility', 'Accessibility Tests')
  results.accessibilityTests.push({
    name: 'WCAG Compliance',
    description: 'Testing accessibility standards',
    status: accessibilityResult.success ? 'passed' : 'failed',
    error: accessibilityResult.success ? null : accessibilityResult.error
  })
  
  // Run performance tests
  log('\n⚡ Running Performance Tests...', 'bright')
  const performanceResult = runCommand('npm run test:performance', 'Performance Tests')
  results.performanceTests.push({
    name: 'Core Web Vitals',
    description: 'Testing performance metrics',
    status: performanceResult.success ? 'passed' : 'failed',
    error: performanceResult.success ? null : performanceResult.error
  })
  
  // Calculate totals
  results.totalTests = results.unitTests.length + results.integrationTests.length + 
                     results.e2eTests.length + results.accessibilityTests.length + results.performanceTests.length
  
  results.passed = [
    ...results.unitTests,
    ...results.integrationTests,
    ...results.e2eTests,
    ...results.accessibilityTests,
    ...results.performanceTests
  ].filter(test => test.status === 'passed').length
  
  results.failed = [
    ...results.unitTests,
    ...results.integrationTests,
    ...results.e2eTests,
    ...results.accessibilityTests,
    ...results.performanceTests
  ].filter(test => test.status === 'failed').length
  
  // Generate report
  const reportPath = generateReport(results)
  
  // Final summary
  log('\n===========================================', 'bright')
  log('🏔️ SummitPixels Test Suite Complete!', 'bright')
  log(`📊 Total Tests: ${results.totalTests}`, 'cyan')
  log(`✅ Passed: ${results.passed}`, 'green')
  log(`❌ Failed: ${results.failed}`, 'red')
  log(`⏭️  Skipped: ${results.skipped}`, 'yellow')
  log(`\n📄 Full report: ${reportPath}`, 'blue')
  
  if (results.failed > 0) {
    log('\n⚠️  Some tests failed. Please review the report for details.', 'yellow')
    process.exit(1)
  } else {
    log('\n🎉 All tests passed! SummitPixels is ready for production.', 'green')
    process.exit(0)
  }
}

// Run the test suite
runAllTests().catch(error => {
  log(`❌ Test suite failed: ${error.message}`, 'red')
  process.exit(1)
})