# Typescript Primer



Adding typescript to you project
    npm install typescript ts-node -g --save-dev

    # Generate typescript configration
    tsc --init

    open ./tsconfig.json
    ...
    "target": "es7"    // compile typescript to javascript ECMAScript7
    "out": "./build"   // dump built javascript to a directory
    ...

    # compile typscript into javascript
    tsc

    # start a typescript repl
    ts-node