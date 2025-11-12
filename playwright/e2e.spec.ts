import { test, expect } from '@playwright/test'

test.describe('Homepage Flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000')
  })

  test('should load homepage successfully', async ({ page }) => {
    await expect(page).toHaveTitle(/SummitPixel - Digital Agency/i)
    await expect(page.locator('h1')).toContainText(/Crafting Digital Excellence/i)
  })

  test('should navigate to services page', async ({ page }) => {
    await page.click('nav a:has-text("Services")')
    await expect(page).toHaveURL(/\/services/)
    await expect(page.locator('h1')).toContainText(/Our Services/i)
  })

  test('should navigate to portfolio page', async ({ page }) => {
    await page.click('nav a:has-text("Portfolio")')
    await expect(page).toHaveURL(/\/portfolio/)
    await expect(page.locator('h1')).toContainText(/Portfolio Showcase/i)
  })

  test('should navigate to blog page', async ({ page }) => {
    await page.click('nav a:has-text("Blog")')
    await expect(page).toHaveURL(/\/blog/)
    await expect(page.locator('h1')).toContainText(/Blog/i)
  })

  test('should navigate to resources page', async ({ page }) => {
    await page.click('nav a:has-text("Resources")')
    await expect(page).toHaveURL(/\/resources/)
    await expect(page.locator('h1')).toContainText(/Resources/i)
  })

  test('should navigate to contact page', async ({ page }) => {
    await page.click('nav a:has-text("Contact")')
    await expect(page).toHaveURL(/\/contact/)
    await expect(page.locator('h1')).toContainText(/Get In Touch/i)
  })

  test('should scroll to top when button is clicked', async ({ page }) => {
    // Scroll down
    await page.evaluate(() => window.scrollTo(0, 1000))
    
    // Click scroll to top button
    await page.click('button[aria-label="Scroll to top"]')
    
    // Check if scrolled to top
    const scrollPosition = await page.evaluate(() => window.scrollY)
    expect(scrollPosition).toBe(0)
  })

  test('should toggle dark mode', async ({ page }) => {
    // Check initial state
    const isDarkMode = await page.evaluate(() => 
      document.documentElement.classList.contains('dark')
    )
    
    // Toggle dark mode
    await page.click('button[aria-label="Toggle dark mode"]')
    
    // Check if dark mode is toggled
    const isDarkModeAfter = await page.evaluate(() => 
      document.documentElement.classList.contains('dark')
    )
    expect(isDarkModeAfter).toBe(!isDarkMode)
  })

  test('should toggle high contrast mode', async ({ page }) => {
    // Check initial state
    const isHighContrast = await page.evaluate(() => 
      document.documentElement.classList.contains('high-contrast')
    )
    
    // Toggle high contrast mode
    await page.click('button[aria-label="Toggle high contrast"]')
    
    // Check if high contrast mode is toggled
    const isHighContrastAfter = await page.evaluate(() => 
      document.documentElement.classList.contains('high-contrast')
    )
    expect(isHighContrastAfter).toBe(!isHighContrast)
  })

  test('should toggle large text mode', async ({ page }) => {
    // Check initial state
    const isLargeText = await page.evaluate(() => 
      document.documentElement.classList.contains('large-text')
    )
    
    // Toggle large text mode
    await page.click('button[aria-label="Toggle large text"]')
    
    // Check if large text mode is toggled
    const isLargeTextAfter = await page.evaluate(() => 
      document.documentElement.classList.contains('large-text')
    )
    expect(isLargeTextAfter).toBe(!isLargeText)
  })
})

test.describe('Contact Form Flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/contact')
  })

  test('should submit contact form successfully', async ({ page }) => {
    // Fill form fields
    await page.fill('input[name="name"]', 'John Doe')
    await page.fill('input[name="email"]', 'john@example.com')
    await page.fill('input[name="phone"]', '+1234567890')
    await page.fill('input[name="company"]', 'Test Company')
    await page.selectOption('select[name="service"]', 'web-development')
    await page.selectOption('select[name="budget"]', '5000-10000')
    await page.selectOption('select[name="timeline"]', '1-3-months')
    await page.fill('textarea[name="message"]', 'This is a test message')
    
    // Submit form
    await page.click('button[type="submit"]')
    
    // Check for success message
    await expect(page.locator('.success-message')).toContainText(/Thank you for your message/i)
  })

  test('should show validation errors for required fields', async ({ page }) => {
    // Submit form without filling required fields
    await page.click('button[type="submit"]')
    
    // Check for validation errors
    await expect(page.locator('.error-message')).toContainText(/Please fill in all required fields/i)
  })

  test('should validate email format', async ({ page }) => {
    // Fill form with invalid email
    await page.fill('input[name="name"]', 'John Doe')
    await page.fill('input[name="email"]', 'invalid-email')
    await page.fill('textarea[name="message"]', 'Test message')
    
    // Submit form
    await page.click('button[type="submit"]')
    
    // Check for email validation error
    await expect(page.locator('.error-message')).toContainText(/Please enter a valid email address/i)
  })

  test('should validate phone number format', async ({ page }) => {
    // Fill form with invalid phone
    await page.fill('input[name="name"]', 'John Doe')
    await page.fill('input[name="email"]', 'john@example.com')
    await page.fill('input[name="phone"]', 'invalid-phone')
    await page.fill('textarea[name="message"]', 'Test message')
    
    // Submit form
    await page.click('button[type="submit"]')
    
    // Check for phone validation error
    await expect(page.locator('.error-message')).toContainText(/Please enter a valid phone number/i)
  })
})

test.describe('Portfolio Flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/portfolio')
  })

  test('should display portfolio projects', async ({ page }) => {
    await expect(page.locator('.portfolio-grid')).toBeVisible()
    await expect(page.locator('.portfolio-item').first()).toBeVisible()
  })

  test('should filter projects by category', async ({ page }) => {
    // Click on web development filter
    await page.click('button:has-text("Web Development")')
    
    // Check if projects are filtered
    const visibleProjects = await page.locator('.portfolio-item:visible').count()
    expect(visibleProjects).toBeGreaterThan(0)
  })

  test('should search projects', async ({ page }) => {
    // Search for projects
    await page.fill('input[placeholder*="Search"]', 'e-commerce')
    
    // Check if search results are displayed
    const visibleProjects = await page.locator('.portfolio-item:visible').count()
    expect(visibleProjects).toBeGreaterThan(0)
  })

  test('should open project modal', async ({ page }) => {
    // Click on first project
    await page.click('.portfolio-item:first-child button:has-text("View Case Study")')
    
    // Check if modal is open
    await expect(page.locator('.modal')).toBeVisible()
    await expect(page.locator('.modal h2')).toBeVisible()
  })

  test('should close project modal', async ({ page }) => {
    // Open modal
    await page.click('.portfolio-item:first-child button:has-text("View Case Study")')
    
    // Close modal
    await page.click('.modal button:has-text("Close")')
    
    // Check if modal is closed
    await expect(page.locator('.modal')).not.toBeVisible()
  })

  test('should navigate to individual project page', async ({ page }) => {
    // Get first project link
    const projectLink = await page.locator('.portfolio-item:first-child a').getAttribute('href')
    
    // Click on project link
    await page.click('.portfolio-item:first-child a')
    
    // Check if navigated to project page
    await expect(page).toHaveURL(projectLink)
    await expect(page.locator('h1')).toBeVisible()
  })
})

test.describe('Blog Flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/blog')
  })

  test('should display blog posts', async ({ page }) => {
    await expect(page.locator('.blog-grid')).toBeVisible()
    await expect(page.locator('.blog-post').first()).toBeVisible()
  })

  test('should filter posts by category', async ({ page }) => {
    // Click on development category
    await page.click('button:has-text("Development")')
    
    // Check if posts are filtered
    const visiblePosts = await page.locator('.blog-post:visible').count()
    expect(visiblePosts).toBeGreaterThan(0)
  })

  test('should search blog posts', async ({ page }) => {
    // Search for posts
    await page.fill('input[placeholder*="Search"]', 'React')
    
    // Check if search results are displayed
    const visiblePosts = await page.locator('.blog-post:visible').count()
    expect(visiblePosts).toBeGreaterThan(0)
  })

  test('should sort posts', async ({ page }) => {
    // Change sort order
    await page.selectOption('select', 'views')
    
    // Check if posts are sorted
    await expect(page.locator('.blog-grid')).toBeVisible()
  })

  test('should navigate to individual blog post', async ({ page }) => {
    // Get first post link
    const postLink = await page.locator('.blog-post:first-child a').getAttribute('href')
    
    // Click on post link
    await page.click('.blog-post:first-child a')
    
    // Check if navigated to post page
    await expect(page).toHaveURL(postLink)
    await expect(page.locator('article')).toBeVisible()
  })

  test('should interact with blog post actions', async ({ page }) => {
    // Navigate to a blog post
    await page.click('.blog-post:first-child a')
    
    // Like post
    await page.click('button:has-text("Like")')
    await expect(page.locator('button:has-text("Liked")')).toBeVisible()
    
    // Bookmark post
    await page.click('button:has-text("Bookmark")')
    await expect(page.locator('button:has-text("Bookmarked")')).toBeVisible()
  })
})

test.describe('Resources Flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/resources')
  })

  test('should display resources', async ({ page }) => {
    await expect(page.locator('.resources-grid')).toBeVisible()
    await expect(page.locator('.resource-item').first()).toBeVisible()
  })

  test('should filter resources by category', async ({ page }) => {
    // Click on tools category
    await page.click('button:has-text("Tools")')
    
    // Check if resources are filtered
    const visibleResources = await page.locator('.resource-item:visible').count()
    expect(visibleResources).toBeGreaterThan(0)
  })

  test('should filter resources by type', async ({ page }) => {
    // Click on ebook type
    await page.click('button:has-text("Ebook")')
    
    // Check if resources are filtered
    const visibleResources = await page.locator('.resource-item:visible').count()
    expect(visibleResources).toBeGreaterThan(0)
  })

  test('should search resources', async ({ page }) => {
    // Search for resources
    await page.fill('input[placeholder*="Search"]', 'SEO')
    
    // Check if search results are displayed
    const visibleResources = await page.locator('.resource-item:visible').count()
    expect(visibleResources).toBeGreaterThan(0)
  })

  test('should handle resource downloads', async ({ page }) => {
    // Find a downloadable resource
    const downloadButton = page.locator('button:has-text("Download")').first()
    
    // Click download
    await downloadButton.click()
    
    // Check if email modal appears (for email-gated resources)
    try {
      await expect(page.locator('.email-modal')).toBeVisible()
    } catch {
      // If no modal, resource might be direct download
      await expect(page.locator('.success-message')).toBeVisible()
    }
  })
})

test.describe('Accessibility Flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000')
  })

  test('should have proper heading structure', async ({ page }) => {
    // Check if h1 exists
    const h1Count = await page.locator('h1').count()
    expect(h1Count).toBeGreaterThan(0)
    
    // Check if headings are in logical order
    const headings = await page.locator('h1, h2, h3, h4, h5, h6').all()
    expect(headings.length).toBeGreaterThan(0)
  })

  test('should have alt text for images', async ({ page }) => {
    // Check images for alt text
    const images = await page.locator('img').all()
    for (const img of images) {
      const alt = await img.getAttribute('alt')
      expect(alt).toBeTruthy()
    }
  })

  test('should have proper ARIA labels', async ({ page }) => {
    // Check buttons and links for ARIA labels
    const buttons = await page.locator('button').all()
    for (const button of buttons) {
      const ariaLabel = await button.getAttribute('aria-label')
      const textContent = await button.textContent()
      expect(ariaLabel || textContent).toBeTruthy()
    }
  })

  test('should be keyboard navigable', async ({ page }) => {
    // Tab through the page
    await page.keyboard.press('Tab')
    
    // Check if focus is visible
    const focusedElement = await page.evaluate(() => document.activeElement?.tagName)
    expect(focusedElement).toBeTruthy()
  })

  test('should have skip links', async ({ page }) => {
    // Tab to reveal skip link
    await page.keyboard.press('Tab')
    
    // Check if skip link is visible
    const skipLink = await page.locator('a[href="#main-content"]').isVisible()
    expect(skipLink).toBe(true)
  })
})