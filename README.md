# Unhandled Runtime Exceptions in Next.js 15 Page Components

This repository demonstrates a common issue in Next.js 15 applications: unhandled runtime exceptions within page components.  When an error occurs in a page component (like referencing an undefined variable), the default error handling might not be sufficient, resulting in a less-than-ideal user experience (blank page or server error).

## Problem
The `about.js` file attempts to access a non-existent variable, causing a runtime error.  Standard Next.js error boundaries don't always catch these, particularly if they happen during rendering.

## Solution
The `aboutSolution.js` demonstrates a solution using `try...catch` blocks to gracefully handle potential errors within the component.  This prevents the application from crashing and allows for more informative error display (though ideally, you would handle this centrally with a custom error boundary).

## Reproduction
1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to `/about`.  You will encounter the error initially.
5. Switch to the solution branch to see the corrected behavior.