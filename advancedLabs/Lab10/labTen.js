import fetch from 'node-fetch';
globalThis.fetch = fetch;

// Original fetchURLData function
function fetchURLData(url) {
    let fetchPromise = fetch(url).then(response => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error(`Request failed with status ${response.status}`);
        }
    });

    return fetchPromise;
}

// New version using async/await
async function fetchURLDataAsync(url) {
    try {
        const response = await fetch(url);
        if (response.status === 200) {
            return await response.json();
        } else {
            throw new Error(`Request failed with status ${response.status}`);
        }
    } catch (error) {
        throw new Error(`Fetch failed: ${error.message}`);
    }
}

// Extended function to fetch multiple URLs
async function fetchMultipleURLs(urls) {
    try {
        const fetchPromises = urls.map(url => fetchURLDataAsync(url));
        const results = await Promise.all(fetchPromises);
        return results;
    } catch (error) {
        throw new Error(`One or more fetches failed: ${error.message}`);
    }
}

// Test both functions with valid and invalid URLs
const validURL = 'https://jsonplaceholder.typicode.com/todos/1';
const invalidURL = 'https://jsonplaceholder.typicode.com/invalid';

fetchURLData(validURL)
    .then(data => console.log('Original function with valid URL:', data))
    .catch(error => console.error('Original function with valid URL error:', error.message));

fetchURLData(invalidURL)
    .then(data => console.log('Original function with invalid URL:', data))
    .catch(error => console.error('Original function with invalid URL error:', error.message));

fetchURLDataAsync(validURL)
    .then(data => console.log('Async/await function with valid URL:', data))
    .catch(error => console.error('Async/await function with valid URL error:', error.message));

fetchURLDataAsync(invalidURL)
    .then(data => console.log('Async/await function with invalid URL:', data))
    .catch(error => console.error('Async/await function with invalid URL error:', error.message));

const urls = [validURL, invalidURL];
fetchMultipleURLs(urls)
    .then(data => console.log('Multiple URLs:', data))
    .catch(error => console.error('Multiple URLs error:', error.message));