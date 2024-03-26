
/**
 * let : block scoped
 * var : globally scoped
 * const : constant variable, block scoped
 */

const globarVar = "I am a global variable"
function test() {
    let a = 1, b = 1;
    if (a == b) {
        const c = 2;
        console.log(c);
    }
    
}

test();