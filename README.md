# MCMD Starter Template

This project was created using `bun create mcmd-app` in Bun. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

### Installation

```bash
npm install
```

### Usage

Transpile the code (dev mode)
```bash
npm run transpile

# or
npx mcmd transpile
```

Run the CLI before converting to javascript
```bash
node ./.mcmd/cli.ts --name Rajat

# or
npm run cli --name Rajat
npx tsx ./.mcmd/cli.ts --name Rajat
bun run ./.mcmd/cli.ts --name Rajat
```

Build the CLI
```bash
npm run build

# or
npx mcmd build
```

Run the CLI after converting to javascript
```bash
node ./dist/cli.js --name Rajat

# or
bun run ./dist/cli.js --name Rajat
```

### Folder Structure

```
root
 ├── .mcmd
 ├── node_modules
 │
 ├─┬ app
 │ ├── index.ts          # npx my-cli
 │ ├─┬ init
 │ │ ├── something.ts    # npx my-cli init something
 │ │ └── index.ts        # npx my-cli init
 │ └── login.ts          # npx my-cli login
 │
 ├── package.json
 ├── .gitignore
 ├── README.md
 ├── tsconfig.json
 └── tsdown.config.ts    # default bundler
```

### Coding

Don't need to import `zod` or `Command`, we'll handle everything for you.

```ts
// app/index.ts

export const options = z.object({
    name: z.string()
});

export default Command((data) => {
    const { name } = data;
    console.log("Hi", name);
});

// npx my-cli --name Rajat
```

```ts
// app/init.ts

export default () => {
    console.log("Done Init");
};

// npx my-cli init
```

### Final Build

```bash
npm run build

# or
npx mcmd build

# or, split the work
npx mcmd transpile
npx tsdown
```

### Publish CLI

```jsonc
// package.json
{
    "name": "my-cli",
    "version": "0.0.0",
    "bin": "./dist/cli.js",
    "files": ["dist/**/*"],
    ...
}
```

```bash
npm login
npm publish
```

### Enjoy CLI

```bash
npx my-cli --name Rajat
bunx my-cli --name Rajat
```

### References

- [MCMD](https://github.com/rajatsandeepsen/mcmd)
- [tsdown](https://tsdown.dev/)
