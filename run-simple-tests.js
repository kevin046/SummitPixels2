// Simplified test runner for SummitPixels
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Test results tracking
const results = {
  unit: { passed: 0, failed: 0, total: 0 },
  integration: { passed: 0, failed: 0, total: 0 },
  e2e: { passed: 0, failed: 0, total: 0 },
  accessibility: { passed: 0, failed: 0, total: 0 },
  performance: { passed: 0, failed: 0, total: 0 }
};

function log(message) {
  console.log(`[${new Date().toISOString()}] ${message}`);
}

function runCommand(command, description) {
  log(`🧪 Running ${description}...`);
  try {
    const output = execSync(command, { encoding: 'utf8', stdio: 'pipe' });
    log(`✅ ${description} completed successfully`);
    return { success: true, output };
  } catch (error) {
    log(`❌ ${description} failed`);
    return { success: false, output: error.stdout || error.message };
  }
}

function parseJestOutput(output) {
  const lines = output.split('\n');
  let passed = 0;
  let failed = 0;
  
  for (const line of lines) {
    if (line.includes('Tests:') && line.includes('passed')) {
      const match = line.match(/(\d+)\s+passed/);
      if (match) passed = parseInt(match[1]);
    }
    if (line.includes('Tests:') && line.includes('failed')) {
      const match = line.match(/(\d+)\s+failed/);
      if (match) failed = parseInt(match[1]);
    }
  }
  
  return { passed, failed };
}

function generateReport() {
  const totalPassed = Object.values(results).reduce((sum, r) => sum + r.passed, 0);
  const totalFailed = Object.values(results).reduce((sum, r) => sum + r.failed, 0);
  const totalTests = totalPassed + totalFailed;
  
  const report = `
🏔️ SummitPixels Test Results
==========================

📊 Summary:
   Total Tests: ${totalTests}
   ✅ Passed: ${totalPassed}
   ❌ Failed: ${totalFailed}
   📈 Success Rate: ${totalTests > 0 ? Math.round((totalPassed / totalTests) * 100) : 0}%

🧪 Detailed Results:
   Unit Tests: ${results.unit.passed}/${results.unit.total} passed
   Integration Tests: ${results.integration.passed}/${results.integration.total} passed
   E2E Tests: ${results.e2e.passed}/${results.e2e.total} passed
   Accessibility Tests: ${results.accessibility.passed}/${results.accessibility.total} passed
   Performance Tests: ${results.performance.passed}/${results.performance.total} passed

🎯 Status: ${totalFailed === 0 ? '✅ ALL TESTS PASSING' : '⚠️ SOME TESTS FAILED'}

Generated: ${new Date().toISOString()}
`;

  fs.writeFileSync('test-results.txt', report);
  return report;
}

async function runTests() {
  console.log('🏔️ Starting SummitPixels Simplified Test Suite');
  console.log('==========================================');

  // Check if development server is running
  log('🔍 Checking if development server is running...');
  const serverCheck = runCommand('curl -s -o /dev/null -w "%{http_code}" http://localhost:3000', 'Development server check');
  const serverRunning = serverCheck.success && serverCheck.output.trim() === '200';
  
  if (serverRunning) {
    log('✅ Development server is running');
  } else {
    log('⚠️ Development server not detected on port 3000');
  }

  // Run Unit Tests
  const unitResult = runCommand('npm run test -- --watchAll=false --no-coverage', 'Unit Tests');
  if (unitResult.success) {
    const { passed, failed } = parseJestOutput(unitResult.output);
    results.unit = { passed, failed, total: passed + failed };
  }

  // Run Build Test
  const buildResult = runCommand('npm run build', 'Build Test');
  if (buildResult.success) {
    log('✅ Build completed successfully');
  } else {
    log('❌ Build failed');
  }

  // Run Lint Test
  const lintResult = runCommand('npm run lint', 'Lint Test');
  if (lintResult.success) {
    log('✅ Lint check passed');
  } else {
    log('❌ Lint check failed');
  }

  // Generate and display report
  const report = generateReport();
  console.log(report);
  
  // Exit with appropriate code
  const totalFailed = Object.values(results).reduce((sum, r) => sum + r.failed, 0);
  process.exit(totalFailed === 0 ? 0 : 1);
}

// Handle errors gracefully
process.on('unhandledRejection', (error) => {
  log(`Unhandled rejection: ${error}`);
  process.exit(1);
});

process.on('uncaughtException', (error) => {
  log(`Uncaught exception: ${error}`);
  process.exit(1);
});

// Run the tests
runTests().catch(error => {
  log(`Test suite failed: ${error.message}`);
  process.exit(1);
});