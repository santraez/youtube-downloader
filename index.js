import { exec } from 'child_process';
import { promisify } from 'util';

const url = 'https://www.youtube.com/watch?v=0i2Q';
// const folder = ;
const filename = 'audiodevideo';
const quality = 'best';
const resolution = '720';

const execPromise = promisify(exec);

async function executeCommand() {
  const command = `youtube-exec audio --url ${url} --filename ${filename} --quality ${quality}`;
  // const command = `youtube-exec video --url ${url} --filename ${filename} --resolution ${resolution}`;
  try {
    const { stdout, stderr } = await execPromise(command);
    console.log(`Command output:\n${stdout}`);
    if (stderr) {
      console.error(`Command output error: ${stderr}`);
    }
  } catch (error) {
    console.error(`Error executing command: ${error.message}`);
  }
}


executeCommand();
