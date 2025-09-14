import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function build() {
  console.log('Building aojs...');

  try {
    // Create dist directory
    const distDir = path.join(__dirname, 'dist');
    await fs.mkdir(distDir, { recursive: true });

    // Copy all source files to dist
    const srcDir = path.join(__dirname, 'src');
    const files = await fs.readdir(srcDir);

    for (const file of files) {
      if (file.endsWith('.js')) {
        const srcFile = path.join(srcDir, file);
        const distFile = path.join(distDir, file);

        const content = await fs.readFile(srcFile, 'utf-8');
        await fs.writeFile(distFile, content);

        console.log(`  Copied: ${file}`);
      }
    }

    console.log('✓ Build completed successfully');
  } catch (error) {
    console.error('✗ Build failed:', error.message);
    process.exit(1);
  }
}

build();