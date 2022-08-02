let time = 0;
let array = ['\r|   ','\r/   ','\r-   ','\r\\   ','\r|   ','\r/   ',];
for (let item of array) {
  setTimeout(()=>{
    process.stdout.write(item);
  },time += 200);
}

  
