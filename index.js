// final_response object
const finalResponse = {}

function findPath(obj, key, value, path = '') {
    if (typeof obj !== 'object' || obj === null) {
        return null;
    }

    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            const isNumericIndex = Array.isArray(obj) && !isNaN(prop);
            let newPath = path ? `${path}->${isNumericIndex ? prop : `'${prop}'`}` : `${isNumericIndex ? prop : `'${prop}'`}`;
            if (prop === key && obj[prop] === value) {
                // Return the path without the key since it will be added in the main function
                return path;
            }
            let foundPath = findPath(obj[prop], key, value, newPath);
            if (foundPath) {
                return foundPath;
            }
        }
    }

    return null;
}


function main() {
    const keyToFind = ''; // The key you're looking for
    const valueToFind = ''; // The value associated with the key you're looking for

    const path = findPath(finalResponse, keyToFind, valueToFind);
    if (path) {
        const prefixedPath = `final_response->${path}->>'${keyToFind}' = '${valueToFind}'`;
        console.log(`The SQL path to the key-value pair is: ${prefixedPath}`);
    } else {
        console.log('The specified key-value pair was not found in the JSON.');
    }
}

main();


