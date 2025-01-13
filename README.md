# TranslateColor Tool README

## Overview
This tool provides a simple yet functional utility to translate color names into their corresponding HEX codes. It is built using **Next.js**, styled with **Tailwind CSS** and **ShadCN UI**, and tested with **Jest** for robust test coverage.

### Key Features:
- Converts common color names (e.g., "red", "blue") into HEX codes.
- Case-insensitive and whitespace-tolerant input.
- Built-in error handling for unsupported color names.
- Modular and reusable utility function.

---

## Setup Instructions

### Prerequisites:
- **Node.js** (version 16 or higher recommended)
- **npm** or **yarn** package manager

### Installation Steps:
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

## Design Decisions

### Technologies Employed:
1. **Next.js**:
   - Provides a scalable and modern web development framework.

2. **Tailwind CSS**:
   - Ensures a consistent and responsive design.

3. **ShadCN UI**:
   - Enhances styling with pre-built, customizable components.

4. **Jest**:
   - Validates functionality with unit tests.

### Design Choices:
- Focused functionality: The project is designed around a single utility function for clarity and ease of use.
- Accessibility: Input handling accounts for common user errors like extra spaces or incorrect casing.

---

## Execution Instructions

### Running the Application:
- Development:
  ```bash
  npm run dev
  # or
  yarn dev
  ```

### Running Tests:
- Run all tests:
  ```bash
  npm run test
  # or
  yarn test
  ```

---

## Test Execution Guide

### Test Structure:
1. **Unit Tests**:
   - Located in the `__tests__` folder.
   - Validates the `translateColor` function.

### Running Tests:
- Run all tests:
  ```bash
  npm run test
  ```

### Example Test Cases:
- **Known Colors**:
  - Input: "red" → Output: `#FF0000`
  - Input: "blue" → Output: `#0000FF`

- **Case Insensitivity**:
  - Input: "RED" → Output: `#FF0000`

- **Trim Whitespace**:
  - Input: " red " → Output: `#FF0000`

- **Unknown Colors**:
  - Input: "nonexistent" → Throws error: "Color \"nonexistent\" not found in the color map."

### Testing Coverage:
- Generate a coverage report:
  ```bash
  npm run test:coverage
  ```

---

## Troubleshooting

### Common Issues:
- **Dependencies not found:**
  - Run `npm install` to ensure all required packages are installed.

- **Jest syntax errors:**
  - Ensure your `jest.config.js` supports TypeScript by including the correct transformer setup.

### Resources:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Jest Documentation](https://jestjs.io/docs)

---

### Feedback and Contributions:
Feel free to contribute by submitting a pull request or opening an issue for bugs or feature requests.
