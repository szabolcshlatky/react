// Add additional matchers
import "@testing-library/jest-dom/extend-expect";

// Configure libraries
import { configure } from "@testing-library/react";

// automatically clean up after each test
configure({ cleanupAfterEach: true });

// Mock global objects if necessary
// global.fetch = jest.fn();

// Add any additional setup below
