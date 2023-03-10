import fs from 'fs';

run(process.argv)

function run(args) {
  countOders(parseCommand(args));
}

function parseCommand(args){
  if (!args[2]) {
    throw new Error('파일 이름을 입력하세요');
  }
  
  const fileName = `./${args[2]}.json`;
  if (!fs.existsSync(fileName)) {
    throw new Error('파일이 존재하지 않습니다');
  }

  return {
    fileName,
    countReadyOnly : args.includes('-r')
  }
}

function countOders(command) {
  const rawData = fs.readFileSync(command.fileName);
  const orders = JSON.parse(rawData);
  if (command.countReadyOnly) {
    console.log(orders.filter((order) => order.status === 'ready').length);
  } else {
    console.log(orders.length);
  }
}